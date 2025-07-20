import React from 'react';

function Teleport() {
  return (
    <div className="min-h-screen bg-gradient-to-br from-amber-50 to-amber-100 flex flex-col items-center justify-center p-4 rtl">
      <div className="max-w-md w-full bg-white rounded-2xl shadow-xl overflow-hidden">
        {/* Header */}
        <div className="bg-gradient-to-r from-amber-400 to-amber-500 p-6 text-center">
          <svg xmlns="http://www.w3.org/2000/svg" className="h-16 w-16 mx-auto text-white" fill="none" viewBox="0 0 24 24" stroke="currentColor">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
          </svg>
          <h1 className="text-2xl font-bold text-white mt-4">تم ايصال طلبك بنجاح!</h1>
        </div>

        {/* Content */}
        <div className="p-6">
          <div className="bg-amber-50 rounded-lg p-4 mb-6 text-center border border-amber-200">
            <p className="font-medium text-amber-700">
              الخيارات المتوفرة حاليا : الدفع عند الاستلام
            </p>
          </div>

          {/* Delivery Agents */}
          <div className="space-y-6">
            {/* Agent 1 */}
            <div className="flex items-center justify-between p-4 bg-gray-50 rounded-xl border border-gray-200">
              <div>
                <h2 className="font-bold text-lg text-gray-800">مندوب المبيعات</h2>
                <p className="text-gray-600 mt-1"></p>
              </div>
              <a href="tel:+218917273048" className="flex-shrink-0">
                <button className="h-14 w-14 bg-amber-400 hover:bg-amber-500 rounded-full flex items-center justify-center shadow-md transition-all duration-300 transform hover:scale-105">
                  <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6 text-white" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 5a2 2 0 012-2h3.28a1 1 0 01.948.684l1.498 4.493a1 1 0 01-.502 1.21l-2.257 1.13a11.042 11.042 0 005.516 5.516l1.13-2.257a1 1 0 011.21-.502l4.493 1.498a1 1 0 01.684.949V19a2 2 0 01-2 2h-1C9.716 21 3 14.284 3 6V5z" />
                  </svg>
                </button>
              </a>
            </div>
          </div>

        </div>
      </div>
    </div>
  );
}

export default Teleport;