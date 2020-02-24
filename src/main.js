import ReactDOM from 'react-dom'

// import root App component
import App from '/components/App'

// Initialize the app on the #app div
ReactDOM.render(<App />, document.getElementById('app'))

// Enable the service worker when running the build command
// if (process.env.NODE_ENV === 'production') {
//   navigator.serviceWorker.register(`${window.location.origin}/sw.js`)
// }
