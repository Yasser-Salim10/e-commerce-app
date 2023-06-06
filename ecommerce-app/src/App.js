import './App.css';
import {BrowserRouter, Routes , Route} from 'react-router-dom'
import Layout from './components/Layout';
import Home from './pages/Home';
import About from './pages/About';
import Contact from './pages/Contact';
import OurStore from './pages/OurStore';
import Blogs from './pages/Blogs';
import CompareProduct from './pages/CompareProduct';
import WishList from './pages/WishList';
import Login from './pages/Login';
import Forgotpassword from './pages/Forgotpassword';
import Signup from './pages/Signup';
import Resetpasword from './pages/Resetpasword';
import SignleBlog from './pages/SignleBlog';
import PrivacyPolicy from './pages/PrivacyPolicy';
import RefundPolicy from './pages/RefundPolicy';
import ShippingPolicy from './pages/ShippingPolicy';
import TermAndCondition from './pages/TermAndCondition';
import SingleProduct from './pages/SingleProduct';
import Cart from './pages/Cart';
import Checkout from './pages/Checkout';

function App() {
  return (
    <>
      <BrowserRouter>
        <Routes>
          <Route path='/' element={<Layout/>}>
            <Route index element={<Home/>}/>
            <Route path='/about' element={<About/>}/>
            <Route path='/contact' element={<Contact/>}/>
            <Route path='/product' element={<OurStore/>}/>
            <Route path='/product/:id' element={<SingleProduct/>}/>
            <Route path='/cart' element={<Cart/>}/>
            <Route path='/checkout' element={<Checkout/>}/>
            <Route path='/blogs' element={<Blogs/>}/>
            <Route path='/blog/:id' element={<SignleBlog/>}/>
            <Route path='/compare-product' element={<CompareProduct/>}/>
            <Route path='/wishlist' element={<WishList/>}/>
            <Route path='/login' element={<Login/>}/>
            <Route path='/forgot-password' element={<Forgotpassword/>}/>
            <Route path='/signup' element={<Signup/>}/>
            <Route path='/reset-password' element={<Resetpasword/>}/>
            <Route path='/privacy-policy' element={<PrivacyPolicy/>}/>
            <Route path='/refund-policy' element={<RefundPolicy/>}/>
            <Route path='/shipping-policy' element={<ShippingPolicy/>}/>
            <Route path='/term-condition' element={<TermAndCondition/>}/>
          </Route>
        </Routes>
      </BrowserRouter>
    </>
  );
}

export default App;
