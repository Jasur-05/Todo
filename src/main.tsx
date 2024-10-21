import ReactDOM from 'react-dom/client'
import App from './App.tsx'
import './assets/css/style.css'
// import {petya, file} from './App.jsx'
// console.log(petya, file);


let root = document.getElementById('root')
if (root) {
  ReactDOM.createRoot(root).render(
    <App />
  )  
}
