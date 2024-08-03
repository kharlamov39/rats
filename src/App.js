import logo from './logo.svg';
import './App.css';
import SwiperComponent from './components/SwiperComponent';
import Fancybox from "./components/Fancybox";


const App = () => {
  return (
    <div className='wrap'>
      <Fancybox>
        <SwiperComponent />
      </Fancybox>
    </div>
  );
}

export default App;
