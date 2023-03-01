import { RouterProvider } from 'react-router-dom';
import './App.css';
import router from './Routes/Route';

function App() {
  return (
    <div className=" w-[1240px] mx-auto">
      <RouterProvider router={router}>

      </RouterProvider>
    </div>
  );
}

export default App;
