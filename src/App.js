import './App.css';
import Header from './Header';
import Footer from './Footer';
import { useState } from 'react';

function isPrime(num) {
  if (num < 2) {
    return false;
  }
  for (let i = 2; i <= Math.sqrt(num); i++) {
    if (num % i === 0) {
      return false;
    }
  }
  return true;
}

function App() {
  const [num, setNum] = useState(0);
  const [prime, setPrime] = useState("");

function checkPrime(cNum) {
  if (isPrime(cNum)){
    setPrime("เป็นจำนวนเฉพาะ");
  }
  else{
    setPrime("ไม่เป็นจำนวนเฉพาะ");
  }
}
  return (
    <div className="App">
      <Header />
      <div className='MyContent'>
        <h2>{num}</h2>
        <button onClick={() =>{
          let n = num + 1;
          setNum(n);
          checkPrime(n);
        }}>เพิ่ม</button>
        <button onClick={() =>{
          let n = num - 1;
          setNum(n);
          checkPrime(n);
        }}>ลด</button>
        <h3>{prime}</h3>
      </div>
      <Footer />
    </div>
  );
}

export default App;