import '../styles/main.css'
import {createContext} from 'react'

const context = createContext(); 

export default function App({ Component, pageProps }) {
  return <Component {...pageProps} />
}

