import './App.css'
import Calendar from './components/Calendar';
import Help from './components/Help';
import Home from './components/Home';
import Mailbox from './components/Mailbox';
import Sidebar from './components/Sidebar';
import { BrowserRouter as Router,Route, Routes } from 'react-router-dom';
import User from './components/User';
import Reports from './components/Reports';

const App=()=> {

  return (
    <div className='App'>
      <Router>
        <Sidebar/>
        <Routes>
          <Route path='/' element={<Home/>}/>
          <Route path='/user/:name/:id' element={<User/>}/>
          <Route path='/mailbox' element={<Mailbox/>}/>
          <Route path='/reports' element={<Reports/>}/>
          <Route path='/help' element={<Help/>}/>
          <Route path='/calendar' element={<Calendar/>}/>
        </Routes>
      </Router>
    </div>
  )
}


export default App
