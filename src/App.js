import './App.css';
import { RouterProvider } from 'react-router-dom';
import router from './Routes/Route/Route';
import { ToastContainer } from 'react-toastify';

function App() {
  return (
    <div className='max-w-[1440px] mx-auto'>
      <RouterProvider router={router}/>
      <ToastContainer />
    </div>
  );
}

export default App;
