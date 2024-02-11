import Header from './components/Header'
import './global.css'
import { useState, ChangeEvent } from 'react';
import { ShoppingCart } from '@phosphor-icons/react'
import styles from './App.module.css'
import Home from './pages/Home';

const cities: string[] = [
  "Florianópolis - SC",
  "Joinville - SC",
  "Blumenau - SC",
  "São José - SC",
  "Chapecó - SC",
  "Criciúma - SC",
  "Itajaí - SC",
  "Jaraguá do Sul - SC",
  "Lages - SC",
  "Palhoça - SC"
];


function App() {
  const [selectedCity, setSelectedCity] = useState("");

  const handleChange = (event: ChangeEvent<HTMLSelectElement>) => {
    setSelectedCity(event.target.value);
  };
  return (
    <header>
      <div className={styles.header}>
        <Header />

        <div className={styles.navbar_right}>
          <select value={selectedCity} onChange={handleChange} className={styles.combobox}>
            <option value="">Selecione uma cidade</option>
            {cities.map((city, index) => (
              <option key={index} value={city}>
                {city}
              </option>
            ))}
          </select>

          <ShoppingCart size={55} className={styles.ShoppingCart} />
        </div>
      </div>
      <Home/>
    </header>
  )
}

export default App
