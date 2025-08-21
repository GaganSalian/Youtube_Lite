// import "./App.css";
// import Head from "./components/Head";
// import Body from "./components/Body";
// import { Provider } from "react-redux";
// import store from "./utils/store";
// import { createBrowserRouter, RouterProvider } from "react-router-dom";
// import MainContainer from "./components/MainContainer";
// import WatchPage from "./components/WatchPage";

// const appRouter = createBrowserRouter([
//   {
//     path: "/",
//     element: <Body />,
//     children: [
//       {
//         path: "/",
//         element: <MainContainer />,
//       },
//       {
//         path: "watch", // no leading slash for child routes
//         element: <WatchPage />,
//       },
//     ],
//   },
// ]);

// function App() {
//   return (
//     <Provider store={store}>
//       <div>
//         <Head />
//         <RouterProvider router={appRouter} />
//       </div>
//     </Provider>
//   );
// }

// export default App;



// Updated App.js
import "./App.css";
import Head from "./components/Head";
import Body from "./components/Body";
import { Provider } from "react-redux";
import store from "./utils/store";
import { createBrowserRouter, RouterProvider } from "react-router-dom";
import MainContainer from "./components/MainContainer";
import WatchPage from "./components/WatchPage";

// Define routes
const appRouter = createBrowserRouter([
  {
    path: "/",
    element: <Body />,
    children: [
      {
        path: "/", // Default route
        element: <MainContainer />,
      },
      {
        path: "watch", // Static path for the watch page
        element: <WatchPage />, // Will read query param inside the component
      },
    
    ],
  },
]);

// App Component
function App() {
  return (
    <Provider store={store}>
      <div>
       {/* Head component outside of RouterProvider   <Head />*/}
        <RouterProvider router={appRouter} /> {/* RouterProvider wrapping routes */}
      </div>
    </Provider>
  );
}

export default App;
