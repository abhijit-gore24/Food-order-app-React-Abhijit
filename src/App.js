import React, { useContext, useEffect, useState } from "react";
import "./App.css";
import { createBrowserRouter, Outlet } from "react-router-dom";
import Header from "./components/Header";
import Footer from "./components/Footer";
import Body from "./components/Body";
import DataPage from "./components/DataPage";
import About from "./components/About";
import Error from "./components/Error";
import Contact from "./components/Contact";
import RestaurantMenu from "./components/RestaurantMenu";
import UserContext from "./utils/UserContext";
import { Provider } from "react-redux";
import Cart from "./components/Cart";
import appStore from "./utils/appStore";
const AppLayout = () => {
  const [userName, setUserName] = useState();
  useEffect(() => {
    const data = {
      name: "Abhijit Gore",
    };
    setUserName(data.name);
  }, []);
  return (
    <Provider store={appStore}>
      <UserContext.Provider value={{ loggedInUser: userName }}>
        <div>
          <div className="App">
            <Header />
            {/** If path =/ */}
            {/* <Body /> */}
            {/** If path = /about */}
            {/* <About /> */}
            {/** If path = /contact */}
            {/* <Contact/> */}
            <Outlet />
            <Footer />
          </div>
        </div>
      </UserContext.Provider>
    </Provider>
  );
}
export const appRouter = createBrowserRouter([
  {
    path: "/",
    element: <AppLayout />,
    errorElement: <Error />,
    children: [
      { path: "/", element: <Body /> },
      { path: "/data", element: <DataPage /> },
      { path: "/about", element: <About /> },
      { path: "/contact", element: <Contact /> },
      { path: "/restaurant/:resId", element: <RestaurantMenu /> },
      {path:"/cart", element:<Cart/>},
    ],
  },
]);
export default AppLayout;
 