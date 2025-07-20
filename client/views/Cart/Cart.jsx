import { useState } from 'react';
import { useCart } from '../../Context/CartContext';

const Cart = () => {
  const { 
    cart, 
    updateQuantity, 
    removeItem,
    cartTotal
  } = useCart();
  const [updating, setUpdating] = useState(false);
  const [showShareOptions, setShowShareOptions] = useState(false);
  const [shareStatus, setShareStatus] = useState('');

  const formatCartForSharing = () => {
    let cartText = "🛒 My Shopping Cart:\n\n";
    
    cart.forEach((item, index) => {
      cartText += `${index + 1}. ${item.name} (Qty: ${item.quantity})\n`;
      cartText += `   Price: $${item.price?.toFixed(2)} each\n`;
      cartText += `   Subtotal: $${(item.price * item.quantity).toFixed(2)}\n\n`;
    });
    
    cartText += `\n💳 TOTAL: $${cartTotal.toFixed(2)}`;
    
    return cartText;
  };


const shareViaWhatsApp = () => {
  const cartText = formatCartForSharing();
  // Replace with your restaurant's actual WhatsApp number
  const whatsappNumber = "+218917273048"; 
  
  const whatsappURL = `https://wa.me/${whatsappNumber}?text=${encodeURIComponent(cartText)}`;
  
  window.open(whatsappURL, '_blank');
  setShareStatus('WhatsApp chat opened!');
  setTimeout(() => setShareStatus(''), 3000);
};

  const shareViaEmail = () => {
    const subject = "My Shopping Cart";
    const body = formatCartForSharing();
    const mailtoLink = `mailto:ChemaCrete@gmail.com?subject=${encodeURIComponent(subject)}&body=${encodeURIComponent(body)}`;
    
    window.location.href = mailtoLink;
    setShareStatus('Email client opened!');
    setTimeout(() => setShareStatus(''), 3000);
  };

  const shareViaDiscord = () => {
    const cartText = formatCartForSharing();
    const webhookURL = "https://discord.com/api/webhooks/1381948251233583236/CxzqiKc2ThGER09-kIBSd9c2fVIpcno-OkDUSVZ5AwgMsWrno2V9YBtcFnYyPck3M6U1";
    
    fetch(webhookURL, {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
      },
      body: JSON.stringify({
        content: `New cart shared:\n\`\`\`${cartText}\`\`\``
      }),
    })
    .then(response => {
      if (response.ok) {
        setShareStatus('Cart shared to Discord!');
      } else {
        setShareStatus('Failed to share to Discord');
      }
    })
    .catch(() => {
      setShareStatus('Error sharing to Discord');
    })
    .finally(() => {
      setTimeout(() => setShareStatus(''), 3000);
    });
  };

  const shareViaMessenger = () => {
    const cartText = formatCartForSharing();
    const encodedText = encodeURIComponent(cartText);
    
    window.open(`https://www.facebook.com/messages/t/110259387966175`);
    
    setShareStatus('Messenger share window opened!');
    setTimeout(() => setShareStatus(''), 3000);
  };

  const copyToClipboard = () => {
    const cartText = formatCartForSharing();
    navigator.clipboard.writeText(cartText)
      .then(() => {
        setShareStatus('Cart copied to clipboard!');
        setTimeout(() => setShareStatus(''), 3000);
      })
      .catch(() => {
        setShareStatus('Failed to copy to clipboard');
        setTimeout(() => setShareStatus(''), 3000);
      });
  };

  const handleUpdateQuantity = (productId, newQuantity) => {
    if (updating) return;
    setUpdating(true);
    try {
      updateQuantity(productId, Math.max(1, parseInt(newQuantity) || 1));
    } finally {
      setUpdating(false);
    }
  };

  const handleRemoveItem = (productId) => {
    if (updating) return;
    setUpdating(true);
    try {
      removeItem(productId);
    } finally {
      setUpdating(false);
    }
  };

  if (!cart.length) return (
    <div className="min-h-screen bg-gradient-to-br from-amber-50 to-amber-100 flex flex-col items-center justify-center p-4">
      <div className="max-w-md w-full text-center p-8 bg-white rounded-2xl shadow-lg">
        <div className="bg-gray-200 border-2 border-dashed rounded-xl w-16 h-16 mx-auto mb-4" />
        <h2 className="text-2xl font-bold text-gray-700 mb-2">Your cart is empty</h2>
        <a href="/" className="inline-block px-6 py-3 bg-amber-500 hover:bg-amber-600 text-white font-medium rounded-lg transition-colors">
          Browse Menu
        </a>
      </div>
    </div>
  );

  return (
    <div className="min-h-screen bg-gradient-to-br from-amber-50 to-amber-100 py-12 px-4 sm:px-6 relative">
      <div className="max-w-4xl mx-auto">
        <div className="text-center mb-10">
          <h1 className="text-3xl md:text-4xl font-bold text-gray-800 flex items-center justify-center">
            <svg xmlns="http://www.w3.org/2000/svg" className="h-8 w-8 mr-2 text-amber-600" fill="none" viewBox="0 0 24 24" stroke="currentColor">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 3h2l.4 2M7 13h10l4-8H5.4M7 13L5.4 5M7 13l-2.293 2.293c-.63.63-.184 1.707.707 1.707H17m0 0a2 2 0 100 4 2 2 0 000-4zm-8 2a2 2 0 11-4 0 2 2 0 014 0z" />
            </svg>
            Shopping Cart
            <span className="ml-3 bg-amber-500 text-white text-sm font-semibold px-3 py-1 rounded-full">
              {cart.reduce((total, item) => total + item.quantity, 0)} items
            </span>
          </h1>
          <div className="w-24 h-1 bg-gradient-to-r from-amber-400 to-amber-600 mx-auto mt-4 rounded-full"></div>
        </div>

        <div className="space-y-6 mb-10">
          {cart.map(item => (
            <div key={item._id} className="flex flex-col sm:flex-row items-start p-6 rounded-2xl bg-white shadow-lg border border-amber-100 transition-all hover:shadow-xl">
              <div className="bg-gray-200 border-2 border-dashed rounded-xl w-16 h-16 mb-4 sm:mb-0 sm:mr-6 flex-shrink-0" />
              
              <div className="flex-1 w-full">
                <div className="flex flex-col md:flex-row md:items-center justify-between gap-4">
                  <div>
                    <h3 className="text-xl font-bold text-gray-800">{item.name}</h3>
                    <div className="flex items-center mt-2">
                      <span className="text-lg font-semibold text-amber-600">${item.price?.toFixed(2)}</span>
                      <span className="mx-2 text-gray-300">•</span>
                      <div className="flex items-center bg-amber-50 rounded-full px-3 py-1">
                        <svg xmlns="http://www.w3.org/2000/svg" className="h-4 w-4 text-amber-500 mr-1" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 8v4l3 3m6-3a9 9 0 11-18 0 9 9 0 0118 0z" />
                        </svg>
                      </div>
                    </div>
                  </div>
                  
                  <div className="flex items-center space-x-4">
                    <div className="flex items-center border border-gray-300 rounded-full">
                      <button 
                        onClick={() => handleUpdateQuantity(item._id, item.quantity - 1)}
                        disabled={updating}
                        className="w-8 h-8 flex items-center justify-center text-gray-600 hover:text-amber-600 disabled:opacity-50"
                      >
                        <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5" viewBox="0 0 20 20" fill="currentColor">
                          <path fillRule="evenodd" d="M5 10a1 1 0 011-1h8a1 1 0 110 2H6a1 1 0 01-1-1z" clipRule="evenodd" />
                        </svg>
                      </button>
                      <input
                        type="number"
                        min="1"
                        value={item.quantity}
                        onChange={(e) => handleUpdateQuantity(item._id, e.target.value)}
                        className="w-12 text-center border-0 bg-transparent focus:ring-0"
                        disabled={updating}
                      />
                      <button 
                        onClick={() => handleUpdateQuantity(item._id, item.quantity + 1)}
                        disabled={updating}
                        className="w-8 h-8 flex items-center justify-center text-gray-600 hover:text-amber-600 disabled:opacity-50"
                      >
                        <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5" viewBox="0 0 20 20" fill="currentColor">
                          <path fillRule="evenodd" d="M10 5a1 1 0 011 1v3h3a1 1 0 110 2h-3v3a1 1 0 11-2 0v-3H6a1 1 0 110-2h3V6a1 1 0 011-1z" clipRule="evenodd" />
                        </svg>
                      </button>
                    </div>
                    
                    <button
                      onClick={() => handleRemoveItem(item._id)}
                      disabled={updating}
                      className="p-2 text-gray-500 hover:text-red-500 transition-colors"
                      title="Remove item"
                    >
                      <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 7l-.867 12.142A2 2 0 0116.138 21H7.862a2 2 0 01-1.995-1.858L5 7m5 4v6m4-6v6m1-10V4a1 1 0 00-1-1h-4a1 1 0 00-1 1v3M4 7h16" />
                      </svg>
                    </button>
                  </div>
                </div>
                
                <div className="mt-4 pt-4 border-t border-amber-50 flex justify-between">
                  <span className="text-gray-600">Subtotal</span>
                  <span className="font-medium">${(item.price * item.quantity).toFixed(2)}</span>
                </div>
              </div>
            </div>
          ))}
        </div>

        <div className="p-6 rounded-2xl bg-white shadow-lg border border-amber-100">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            <div>
              <h3 className="text-lg font-semibold text-gray-800 mb-3">Order Summary</h3>
              <div className="space-y-2">
                <div className="flex justify-between text-gray-600">
                  <span>Subtotal</span>
                  <span>${cartTotal.toFixed(2)}</span>
                </div>
                <div className="flex justify-between text-gray-600">
                  <span>Delivery</span>
                  <span className="text-green-600">Free</span>
                </div>
              </div>
              
              <button 
                onClick={() => setShowShareOptions(true)}
                disabled={updating}
                className="w-full py-3 mt-4 rounded-lg font-medium bg-blue-600 hover:bg-blue-400 text-gray-800 transition-colors"
              >
                Share Cart
              </button>
            </div>
            
            <div className="border-t md:border-t-0 md:border-l border-amber-100 pt-4 md:pt-0 md:pl-6">
              <div className="flex justify-between items-center mb-4">
                <span className="text-lg font-bold text-gray-800">Total</span>
                <span className="text-2xl font-bold text-amber-600">
                  ${cartTotal.toFixed(2)}
                </span>
              </div>
              <a href='/telep'>
                <button
                  className="w-full py-4 rounded-xl font-bold bg-gradient-to-r from-amber-500 to-amber-600 text-white hover:from-amber-600 hover:to-amber-700 shadow-lg transition-all transform hover:-translate-y-0.5"
                  disabled={updating}
                > 
                  <div className="flex items-center justify-center">
                    Proceed to Checkout
                    <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5 ml-2" viewBox="0 0 20 20" fill="currentColor">
                      <path fillRule="evenodd" d="M10.293 5.293a1 1 0 011.414 0l4 4a1 1 0 010 1.414l-4 4a1 1 0 01-1.414-1.414L12.586 11H5a1 1 0 110-2h7.586l-2.293-2.293a1 1 0 010-1.414z" clipRule="evenodd" />
                    </svg>
                  </div>
                </button>
              </a>
            </div>
          </div>
        </div>
      </div>

      {/* Share Cart Modal */}
      {showShareOptions && (
        <div 
          className="fixed inset-0 bg-black bg-opacity-50 flex items-center justify-center z-50 p-4"
          onClick={() => setShowShareOptions(false)}
        >
          <div 
            className="bg-white rounded-2xl p-6 w-full max-w-md shadow-xl"
            onClick={(e) => e.stopPropagation()}
          >
            <button 
              className="absolute top-4 right-4 text-red-500 hover:text-red-700"
              onClick={() => setShowShareOptions(false)}
            >
              <svg xmlns="http://www.w3.org/2000/svg" className="h-12 w-14" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
              </svg>
            </button>
            
            <h3 className="text-xl font-bold text-gray-800 mb-2">Share Your Cart</h3>
            <p className="text-gray-600 mb-6">Select how you'd like to share your cart:</p>
            
            <div className="grid grid-cols-2 gap-4">
              <button 
                className="flex flex-col items-center justify-center p-4 rounded-xl border border-gray-200 hover:bg-amber-50 transition-colors"
                onClick={shareViaEmail}
              >
                <div className="text-blue-500 mb-2">
                  <svg xmlns="http://www.w3.org/2000/svg" className="h-8 w-8" viewBox="0 0 24 24" fill="none" stroke="currentColor">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 8l7.89 5.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z" />
                  </svg>
                </div>
                <span>Email</span>
              </button>
              
              {/* WhatsApp Button */}
              <button 
                className="flex flex-col items-center justify-center p-4 rounded-xl border border-gray-200 hover:bg-amber-50 transition-colors"
                onClick={shareViaWhatsApp}
              >
                <div className="text-green-500 mb-2">
                  <svg xmlns="http://www.w3.org/2000/svg" className="h-8 w-8" viewBox="0 0 24 24" fill="currentColor">
                    <path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347m-5.421 7.403h-.004a9.87 9.87 0 01-5.031-1.378l-.361-.214-3.741.982.998-3.648-.235-.374a9.86 9.86 0 01-1.51-5.26c.001-5.45 4.436-9.884 9.888-9.884 2.64 0 5.122 1.03 6.988 2.898a9.825 9.825 0 012.893 6.994c-.003 5.45-4.437 9.884-9.885 9.884m8.413-18.297A11.815 11.815 0 0012.05 0C5.495 0 .16 5.335.157 11.892c0 2.096.547 4.142 1.588 5.945L.057 24l6.305-1.654a11.882 11.882 0 005.683 1.448h.005c6.554 0 11.89-5.335 11.893-11.893a11.821 11.821 0 00-3.48-8.413z"/>
                  </svg>
                </div>
                <span>WhatsApp</span>
              </button>
              
              <button 
                className="flex flex-col items-center justify-center p-4 rounded-xl border border-gray-200 hover:bg-amber-50 transition-colors"
                onClick={shareViaMessenger}
              >
                <div className="text-blue-600 mb-2">
                  <svg xmlns="http://www.w3.org/2000/svg" className="h-8 w-8" viewBox="0 0 24 24" fill="currentColor">
                    <path d="M12 2C6.36 2 2 6.13 2 11.7c0 2.91 1.19 5.44 3.14 7.17.16.13.26.35.27.57l.05 1.78c.04.57.61.94 1.13.71l1.98-.87c.17-.06.36-.09.53-.06.9.27 1.9.4 2.9.4 5.64 0 10-4.13 10-9.7S17.64 2 12 2zm6 7.46l-2.93 4.67c-.47.75-1.47 1-2.24.53l-2.16-1.32c-.24-.15-.57-.15-.81 0l-3.16 2.4c-.28.2-.69-.12-.55-.46L6 9.53c.2-.7.98-1.09 1.68-.83l2.88 1.11c.9.35 1.93-.06 2.35-.86l2.99-4.89c.21-.37.73-.37.93 0l1.77 3.4z"/>
                  </svg>
                </div>
                <span>Messenger</span>
              </button>
              
              <button 
                className="flex flex-col items-center justify-center p-4 rounded-xl border border-gray-200 hover:bg-amber-50 transition-colors"
                onClick={copyToClipboard}
              >
                <div className="text-gray-600 mb-2">
                  <svg xmlns="http://www.w3.org/2000/svg" className="h-8 w-8" viewBox="0 0 24 24" fill="none" stroke="currentColor">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M8 5H6a2 2 0 00-2 2v12a2 2 0 002 2h10a2 2 0 002-2v-1M8 5a2 2 0 002 2h2a2 2 0 002-2M8 5a2 2 0 012-2h2a2 2 0 012 2m0 0h2a2 2 0 012 2v3m2 4H10m0 0l3-3m-3 3l3 3" />
                  </svg>
                </div>
                <span>Copy</span>
              </button>
            </div>
            
            {shareStatus && (
              <div className="mt-4 text-center text-green-600 font-medium">
                {shareStatus}
              </div>
            )}
          </div>
        </div>
      )}
    </div>
  );
};

export default Cart;