import logo from './logo.svg';
import './App.css';
import Profile from './components/Profile';

function App() {
  return (
    <Profile 
    image="https://images.unsplash.com/photo-1600788907416-456578634209?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1350&q=80"
    isNew={true}
    name="곽민섭"
    info="기업가"
    />

  )
}

export default App;
