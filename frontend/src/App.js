import './App.css';

import { 
    BrowserRouter as Router,
    Routes, 
    Route 
} from 'react-router-dom';

import { AuthProvider } from './context/AuthContext'
import HomePage from './pages/HomePage';
import LoginPage from './pages/LoginPage';

import Header from './components/Header';
import PrivateRoutes from './utils/PrivateRoutes'

function App() {
  return (
    <div className="App">
        <Router>
            <AuthProvider>
                <Header />
                <Routes>
                    <Route element={ <PrivateRoutes /> }>
                        <Route element={<HomePage />} path="/" exact />
                    </Route>
                    <Route element={ <LoginPage /> } path="/login" />
                </Routes>
            </AuthProvider>
        </Router>
    </div>
  );
}

export default App;
