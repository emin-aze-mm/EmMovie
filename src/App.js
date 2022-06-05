
import { Container } from '@mui/system';
import { BrowserRouter,Route, Routes } from 'react-router-dom';
import Movies from './Pages/Movies/Movies';
import Series from './Pages/Series/Series';
import Search from './Pages/Search/Search';
import Trending from './Pages/Trending/Trending';
import './App.css';
import Header from "./Components/Header/Header"
import SimpleBottomNavigation from './Components/MainNav';

function App() {
  return (
    <BrowserRouter>
    <Header/>
    <div className='app'>
      <Container className="container">
        <Routes>
          <Route path="/" element={<Trending/>} />
          <Route path="/movies" element={<Movies/>}/>
          <Route path="/series" element={<Series/>}/>
          <Route path="/search" element={<Search/>}/>
        </Routes>
      </Container>
    </div>
    <SimpleBottomNavigation/>
    </BrowserRouter>
  );
}

export default App;
