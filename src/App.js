import logo from './logo.svg';
import './App.css';
import Solution from './components/Solution';
import Score from './components/Score';
import Letters from './components/Letters';

function App() {
  return (
    <div id='root'>
      <div>
        <Score/>
        <Solution/>
        <Letters/>
      </div>      
    </div>

  );
}

export default App;
