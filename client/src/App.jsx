import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import LandingPage from './pages/landingpage.jsx';
import Login from './pages/users/login.jsx';

function App () {
  return (
    <Router>
      <Routes>
        <Route path="/" element={ <LandingPage /> } />
        <Route path='/login' element={ <Login />} />
      </Routes>
    </Router>
  )
}

export default App;