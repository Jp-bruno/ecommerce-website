import './global.css';
import TopBar from './components/header/topBar';
import MainContent from './components/main/mainContent';
import CartContextProvider from './context/cartContext';

function App() {
  return (
    <div className="App">
      <CartContextProvider>
        <TopBar/>
        <MainContent />
      </CartContextProvider>
    </div>
  );
}

export default App;
