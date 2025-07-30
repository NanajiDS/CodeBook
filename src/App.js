
import './App.css';
import ALLROUTES from './routes/ALLROUTES';
import { Header,Footer } from './components';

function App() {
  return (
    <div className='App'>
      <Header/>
      <ALLROUTES/>
      <Footer/>
    </div>
  );
}

export default App;
