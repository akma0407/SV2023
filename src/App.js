import './css/style.css';
import { createBrowserRouter, RouterProvider } from 'react-router-dom';
import OurCoffee from './Pages/OurCoffee';
import MainPage from './Pages/MainPage';
import ForYourPleasure from './Pages/ForYourPleasure';
import CoffeeDescription from './Pages/CoffeeDescription';

function App() {
  const router = createBrowserRouter([
    {
      path: "/",
      element: <div>
        <MainPage></MainPage>
      </div>
    },
    {
      path: "/OurCoffee",
      element: <div>
        <OurCoffee></OurCoffee>
      </div>
    },
    {
      path: "/ForYourPleasure",
      element: <div>
        <ForYourPleasure></ForYourPleasure>
      </div>
    },
    {
      path: "/CoffeeDescription/:id",
      element: <div>
        <CoffeeDescription></CoffeeDescription>
      </div>
    },
  ])
  return (
    <div className="App">
      <RouterProvider router={router}></RouterProvider>
    </div>
  );
}

export default App;
