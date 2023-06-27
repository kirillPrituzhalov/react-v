import './App.css';
import Header from './components/Header/Header';
import { Routes, Route } from 'react-router-dom';
import Main from './components/Main/Main';

function App() {
  return (
    <div className="App">
      <Header></Header>
      <main className="app-wrapper-content">
        <Routes>
          <Route path="/" element={<Main />}></Route>
        </Routes>
      </main>
    </div>
  );
}

export default App;
