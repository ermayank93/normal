import logo from './logo.svg';
import './App.css';
import Header from './Components/Header';
import Middle from './Components/Middle';
import Footer from './Components/Footer';

function App() {
  return (
    <div>
      <Header/>
      <Middle price="Rs.30000" price1="Rs.35000" price2="40000" price3="45000" price4="50000"/>
      <Middle price="Rs.28000" />
      <Footer/>
    </div>
  );
}

export default App;
