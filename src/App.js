import './App.css';
import { Route, Routes} from 'react-router-dom';
import { IndexPage } from './pages/IndexPage';
import { PropertiesPage } from './pages/PropertiesPage';
import { AboutPage } from './pages/AboutPage';

function App() {
  return (
    <Routes>
      <Route path="/" element={<IndexPage />} />
      <Route path="properties" element={<PropertiesPage />} />
      <Route path="about" element={<AboutPage />} />
    </Routes>
  );
}

export default App;
