import React from 'react'
import Head from './head'
import Header from '../components/Header'
import Tab from '../components/Tab'

import './globals.css'

const Layout = ({children}) => {
  return (
    <html lang='en'>
        <Head />
        <body className="bg-slate-900 bg-bottom">
          <Header />
          <Tab />
            {children}
        </body>
    </html>
  )
}

export default Layout