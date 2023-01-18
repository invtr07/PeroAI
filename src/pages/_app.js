import '../styles/main.css'
import AppContext from '../components/AppContext';
import { useState } from 'react'


export default function App({ Component, pageProps }) {
  const [output, setOutput] = useState([]);

  return(
    <AppContext.Provider value={{output, setOutput}}>
      <Component {...pageProps} />
    </AppContext.Provider>
  )
}

