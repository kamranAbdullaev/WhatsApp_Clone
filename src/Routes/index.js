import { createBrowserRouter } from "react-router-dom";
import SignIn from "../Pages/SignIn/signIn";
import ChooseNumber from "../Pages/chat/ChooseNumber";
export const router = createBrowserRouter([
  {
    path: "/",
    element: <SignIn />
  },
    {
    path: "/new-message",
    element: <ChooseNumber />
  }
  
])