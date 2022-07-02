import '../styles/globals.css'
import Layout from '../components/layout/Layout'
import {useState} from 'react'
import react from 'react'

export const LanguageContext = react.createContext()


function MyApp({ Component, pageProps }) {
  const [language,setLanguage] = useState("en"); 
  function languageEN(){
    setLanguage("en")
  }
  function languageTR(){
    setLanguage("tr")
  }
  return (
    <LanguageContext.Provider value={language}>
      <div className="language">
            <li onClick={languageEN}>en</li>
            <p>&nbsp;|&nbsp;</p>
            <li onClick={languageTR}>tr</li>
        </div>
    <Layout>
  <Component {...pageProps} />
  </Layout>
  </LanguageContext.Provider>
  )
}

export default MyApp
