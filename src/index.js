import React from 'react';
import ReactDOM from 'react-dom/client';
import App from './compoonent/App';
import { ConfigProvider } from 'antd'
import fa_IR from 'antd/lib/locale/fa_IR'

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  // <React.StrictMode>
   
    <ConfigProvider
  direction='rtl'
  locale={fa_IR}
  theme={{ token: { fontFamily: 'vazir' } }}>
    <App />
</ConfigProvider>
  
  // </React.StrictMode>
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
// reportWebVitals();
