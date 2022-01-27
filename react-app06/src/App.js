import {BrowserRouter,Routes,Route} from 'react-router-dom';
import BudgetTracker from './components/BudgetTracker';
import AboutUs from './components/AboutUs';
import Header from './components/Header';

const App = () => (
  <BrowserRouter>
    <Header />

    <Routes>
      <Route path="/" element={<BudgetTracker />} />
      <Route path="/about" element={<AboutUs />} />
    </Routes>
  </BrowserRouter>
);
export default App;
