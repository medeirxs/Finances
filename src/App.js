import './App.css';
import WalletCard from './components/WalletCard/WalletCard';
import Button from './components/button/button';

import userIMG from "./assets/pexels-tatiana-11440206.jpg"
import settingsIcon from "./assets/settings-svgrepo-com.svg"

function App() {
  return (
    <div className="App">
      <section>
        <div id='header'>
          <img src={userIMG} id='userIMG'/>
          <img src={settingsIcon} id='userSettings'/>
        </div>
        <div id='headertext'>
          <div className='texthead'>
          <span>Your new away,</span><br/>
          <span>to control your finances!</span>
          <hr/>
          </div>
        </div>
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
