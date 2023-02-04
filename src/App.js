import './App.css';
import { Route , Routes } from 'react-router-dom'
import NavBar from './components/NavBar/NavBar';
import EmojiList from './pages/EmojiList/EmojiList';
import EmojiDetails from './pages/EmojiDetails/EmojiDetails';

function App() {
  return (
    <div className="App">
      <NavBar/>
      <main>
        <Routes>
          <Route path="/" element={<EmojiList />}/>
          <Route path="/emoji" element={<EmojiDetails />}/>
        </Routes>

      </main>
    </div>
  );
}

export default App;
