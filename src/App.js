import './App.css';
import { Route , Routes } from 'react-router-dom'
import NavBar from './components/NavBar/NavBar';
import EmojiList from './pages/EmojiList/EmojiList';
import EmojiDetails from './pages/EmojiDetails/EmojiDetails';
import SearchChar from './pages/SearchChar/SearchChar'

function App() {
  return (
    <div className="App">
      <NavBar/>
      <main>
        <Routes>
          <Route path="/" element={<EmojiList />}/>
          <Route path="/emoji" element={<EmojiDetails />}/>
          <Route path="/search" element={<SearchChar />}/>
        </Routes>

      </main>
    </div>
  );
}

export default App;
