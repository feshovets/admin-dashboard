import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import AppLayout from './AppLayout';
import Dashboard from './pages/Dashboard';
import Products from './pages/Products';
import Favorites from './pages/Favorites';
import NotFound from './pages/NotFound';
import Pricing from './pages/Pricing';

function App() {
  return (
    <Router>
      <Routes>
        <Route element={<AppLayout />}>
          <Route path="/" element={<Dashboard />} />
          <Route path="/products" element={<Products />} />
          <Route path="/favorites" element={<Favorites />} />

          <Route path="/pricing" element={<Pricing />} />
        </Route>

        {/* Not Found route */}
        <Route path="*" element={<NotFound />} />
      </Routes>
    </Router>
  );
}

export default App
