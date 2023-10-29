import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Landing from './components/landingPage/Landing';
import Chart from './components/userDashboard/chart/Chart';
import Main from './components/userDashboard/MainPage/Main';
import Account from './components/userDashboard/editInfo/Account';

function App() {
  return (
    <div className="App">
      <Router>
        <Routes>
          <Route path='/' element={<Landing />} />
          <Route path='trade' element={<Main />}>
            <Route path='chart' element={<Chart />} />
            <Route path='account' element={<Account />} />
          </Route>
        </Routes>
      </Router>
    </div>
  );
}

export default App;
