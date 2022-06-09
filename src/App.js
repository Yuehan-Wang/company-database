import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Home from './pages/home/Home';
import Result from './pages/result/Result';
import Search from './pages/search/Search';
import Header from './shared/header/Header'
import Footer from './shared/footer/Footer'
import Billing from './pages/billing/Billing';
import Signin from './pages/signin/Signin';
import Signup from './pages/signup/Signup';
import Profile from './pages/profile/Profile';
import Dummy from './pages/dummy';
function App() {
  return (
    <div>
      <Router>
      <Header />
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/result" element={<Result />} />
          <Route path="/search" element={<Search />} />
          <Route path="/signin" element={<Signin />} /> 
          <Route path="/signup" element={<Signup />} /> 
          <Route path="/billing" element={<Billing />} />
          <Route path="/profile" element={<Profile />} />
          <Route path="/dummy" element={<Dummy />} />
        </Routes>
        <Footer />
      </Router>
    </div>
  );
}

export default App;
