import logo from './logo.svg';
import './App.css';
import WalletCard from './components/WalletCard/WalletCard';

function App() {
  return (
    <div className="App">
      <WalletCard title="New Macbook" money="100"/>
      <WalletCard title="Vacation" money="300"/>
    </div>
    
  );
}

export default App;
