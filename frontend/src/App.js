import { BrowserRouter, Routes, Route } from 'react-router-dom';
import { Home, Header } from './components';

export default function App() {
  return (
    <BrowserRouter>
      <Header />
      <Routes>
        <Route path="/" element={<Home />} />
      </Routes>
    </BrowserRouter>
  );
}
