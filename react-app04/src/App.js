import {Fragment} from 'react';
import BudgetTracker from './components/BudgetTracker';
import Header from './components/Header';

const App = () => (
  <Fragment>
    <Header />
    <BudgetTracker />
  </Fragment>
);
export default App;
