import './App.css';
import NavBar from './Components/NavBar';
import Randomgif from './Components/Randomgif';
import InputGif from './Components/InputGif';

function App() {
  return (
    <div className="App background overflow-hidden min-h-screen flex flex-col gap-3 text-center ">
      <NavBar/>
      <Randomgif></Randomgif>
      <InputGif></InputGif>
    </div>
  );
}

export default App;
