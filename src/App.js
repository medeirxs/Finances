import './App.css';
import WalletCard from './components/WalletCard/WalletCard';
import Button from './components/button/button';

function App() {
  return (
    <div className="App">
      <section id='header'>
      </section>

      <section id='buttons'>
        <Button title="Rule Budget"/>
        <Button title="Crypto"/>
        <Button title="Spend Limit"/>
      </section>

      <section id='cards'>
        <WalletCard title="New Macbook" money="100"/>
        <WalletCard title="Vacation" money="300"/>
      </section>

    </div>
  );
}

export default App;
