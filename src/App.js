import './App.css';
import 'bootstrap/dist/css/bootstrap.min.css'
import BookingOperationRoom from './component/BookingOperatingRoom/BookingOperationgRoom';
import "primereact/resources/themes/lara-light-indigo/theme.css";  //theme
import "primereact/resources/primereact.min.css";                  //core css
import "primeicons/primeicons.css";  

function App() {
  return (
    <div className='App'>
      <header className="App-header">
        <BookingOperationRoom></BookingOperationRoom>
      </header>
    </div>
  );
}

export default App;
