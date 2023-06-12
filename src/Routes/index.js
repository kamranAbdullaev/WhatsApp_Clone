import { createBrowserRouter } from "react-router-dom";
import SignIn from "../Pages/SignIn/signIn";
import {Chat} from "../Pages/chat/chat";
import NewMessageSend from "../Pages/chat/NewMessageSend/NewMessageSend";
export const router = createBrowserRouter([
  {
    path: "/",
    element: <SignIn />
  },
    {
    path: "/chat",
    element: <Chat />
  },
    {
    path: "/new-message",
    element: <NewMessageSend />
  }
  
])