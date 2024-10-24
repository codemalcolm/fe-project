import React from 'react'
import ReactDOM from 'react-dom/client'
import App from './App.jsx'
import { Provider } from "./components/ui/provider.jsx"
import { createSystem, defaultConfig } from "@chakra-ui/react"
import {
  createBrowserRouter,
  RouterProvider,
} from "react-router-dom";
import Team from './Team.jsx'
import Root from './Root.jsx'


// import Root, { rootLoader } from "./routes/root";
// import Team, { teamLoader } from "./routes/team";
// Routes
const router = createBrowserRouter([
  {
    path: "/",
    element: <Root />,
    // loader: rootLoader, - loader pro data route "/"
    children: [
      {
        path: "team",
        element: <Team />,
        // loader: teamLoader, - loader pro data route "/eventDetail"
      },
    ],
  },
]);


// custom styling properties
export const system = createSystem(defaultConfig, {
  theme: {
    tokens: {
      fonts: {
        heading: { value: `'Figtree', sans-serif` },
        body: { value: `'Figtree', sans-serif` },
      },
      breakpoints : {
      base: '0em', // 0px
      sm: '30em', // 480px
      md: '48em', // 768px
      lg: '1090px', // 1090px
      xl: '80em', // 1280px
      "2xl": '84em' // 1345px
      },
      colors : {
        brand: {
          900: '#1a365d',
          800: '#153e75',
          700: '#2a69ac',
        },
      },
    },
  },
})

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
      <Provider value={system} resetCSS>
        <RouterProvider router={router} />
      </Provider>
  </React.StrictMode>,
)