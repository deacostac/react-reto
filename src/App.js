import './App.css';
import React, {useState} from 'react'
import Menu from './components/Menu'
import Form from './components/Form'


const App = () => {

  const [showForm, setShowForm] = useState(false);

  return (
    <div className="App">
      <Menu showForm={showForm} setShowForm={setShowForm}/>
      <Form showForm={showForm} setShowForm={setShowForm}/>
    </div>
  );
}

export default App;
