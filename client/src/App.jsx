import { BrowserRouter as Router, Routes, Route, Link } from 'react-router-dom';
import { AuthProvider } from '../Context/AuthContext';
import Home from '../views/Home';
import Login from '../views/Login/Login';
import SignUp from '../views/SignUp/SignUp';
import Teleport from '../views/مندوب توصيل/Teleport';
import Cart from '../views/Cart/Cart';
import UserProfile from '../components/UserProfile';
import { CartProvider } from '../Context/CartContext';
import EditProfile from '../views/EditProfile/EditProfile';
import Contact from '../views/Contact/Contact'


function App() {
  return (
    <CartProvider>
      <AuthProvider>
        <Router>
          <header className="bg-gradient-to-r from-red-600 to-red-800 text-white shadow-lg">
            <div className="container mx-auto px-4 py-3">
              <div className="flex flex-col md:flex-row justify-between items-center">
                <Link to="/" className="flex items-center space-x-2">
                 <img style={{borderRadius:'15px'}} className='h-32' src="https://scontent.ftip3-2.fna.fbcdn.net/v/t39.30808-6/305846952_375241274806130_4964023318313536242_n.jpg?_nc_cat=110&ccb=1-7&_nc_sid=6ee11a&_nc_ohc=Pi2dBiAgTAMQ7kNvwHem6kP&_nc_oc=AdnVdEdZq6encP38qNfLTxHqu_FDjaixAZ6lOz5vcKC7P0Jkm0hGewnvMGMitcmH0oQ&_nc_zt=23&_nc_ht=scontent.ftip3-2.fna&_nc_gid=oSYToLiLY3xeQNX_H8jmvg&oh=00_AfOGWBvKJEd4b9hjLmc58nFTGOJ_xqQZFnB-EkMDEjaDjQ&oe=68571478" alt="" />
                </Link>
                <nav className="mt-4 md:mt-0">
                  <ul className="flex space-x-1 md:space-x-6">
                    <li>
                      <Link 
                        to="/" 
                        className="px-3 py-2 rounded-lg transition-all duration-300 hover:bg-red-500 hover:shadow-md flex items-center"
                      >
                        <span className="hidden sm:inline">Home</span>
                        <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5 sm:hidden" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 12l2-2m0 0l7-7 7 7M5 10v10a1 1 0 001 1h3m10-11l2 2m-2-2v10a1 1 0 01-1 1h-3m-6 0a1 1 0 001-1v-4a1 1 0 011-1h2a1 1 0 011 1v4a1 1 0 001 1m-6 0h6" />
                        </svg>
                      </Link>
                    </li>
                    <li>
                      <Link 
                        to="/cart" 
                        className="px-3 py-2 rounded-lg transition-all duration-300 hover:bg-red-500 hover:shadow-md flex items-center"
                      >
                        <span className="hidden sm:inline">Cart</span>
                        <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5 sm:hidden" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 3h2l.4 2M7 13h10l4-8H5.4M7 13L5.4 5M7 13l-2.293 2.293c-.63.63-.184 1.707.707 1.707H17m0 0a2 2 0 100 4 2 2 0 000-4zm-8 2a2 2 0 11-4 0 2 2 0 014 0z" />
                        </svg>
                      </Link>
                    </li>
                    <li>
                      <Link 
                        to="/login" 
                        className="px-3 py-2 rounded-lg transition-all duration-300 hover:bg-red-500 hover:shadow-md flex items-center"
                      >
                        <span className="hidden sm:inline">Login</span>
                        <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5 sm:hidden" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M11 16l-4-4m0 0l4-4m-4 4h14m-5 4v1a3 3 0 01-3 3H6a3 3 0 01-3-3V7a3 3 0 013-3h7a3 3 0 013 3v1" />
                        </svg>
                      </Link>
                    </li>
                    <li>
                      <Link 
                        to="/Contact" 
                        className="px-3 py-2 rounded-lg transition-all duration-300 hover:bg-red-500 hover:shadow-md flex items-center"
                      >
                        <span className="hidden sm:inline">Contact</span>
                        <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5 sm:hidden" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 8l7.89 5.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z" />
                        </svg>
                      </Link>
                    </li>
                    <li>
                      <Link 
                        to="/profile" 
                        className="px-3 py-2 rounded-full bg-red-500 transition-all duration-300 hover:bg-red-400 hover:shadow-md flex items-center"
                      >
                        <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M16 7a4 4 0 11-8 0 4 4 0 018 0zM12 14a7 7 0 00-7 7h14a7 7 0 00-7-7z" />
                        </svg>
                      </Link>
                    </li>
                  </ul>
                </nav>
              </div>
            </div>
          </header>

          <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/login" element={<Login />} />
            <Route path="/signup" element={<SignUp />} />
            <Route path="/cart" element={<Cart />} />
            <Route path="/profile" element={<UserProfile />} />
            <Route path="/telep" element={<Teleport />} />
            <Route path="/Contact" element={<Contact />} />
            <Route path="/profile/edit" element={<EditProfile />} />
          </Routes>
        </Router>
      </AuthProvider>
    </CartProvider>
  );
}

export default App;