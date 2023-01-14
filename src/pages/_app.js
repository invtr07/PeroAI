import '../styles/main.css'
import { AppContext } from '../components/context'
import { useState } from 'react'


export default function App({ Component, pageProps }) {
  const [output, setOutput] = useState();

  return(
    <AppContext value={{output, setOutput}}>
      <Component {...pageProps} />
    </AppContext>
  )
}

