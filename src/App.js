import './App.css';
import { RouterProvider } from 'react-router-dom';
import { router } from './Router/Router';
// import { ToastContainer } from 'react-toastify';
import "react-responsive-carousel/lib/styles/carousel.min.css";


function App() {
  return (
    <div className="App">
      <RouterProvider router={router}>
      </RouterProvider>
      
    </div>
  );
}

export default App;
