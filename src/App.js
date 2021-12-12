import { BrowserRouter, Routes, Route } from 'react-router-dom';
import { Home } from './pages/home';

const App = () => {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/div" element={<div>Hello World</div>} />
      </Routes>
    </BrowserRouter>
  );
};

export default App;
