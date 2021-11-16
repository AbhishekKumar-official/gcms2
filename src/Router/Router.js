import React from "react"
import { useRoutes } from "react-router-dom"

//importing Layouts
import PublicLayout from "../Layouts/PublicLayout/PublicLayout"
import PrimaryLayout from "../Layouts/PrimaryLayout/index"

//importing auth provider
import AuthProvider from "../Auth/AuthProvider"
import AuthRemover from "../Auth/AuthRemover"

//importing all views
import Dashboard from "../Views/Dashboard/index"
import Login from "../Views/Login/index"
import Statistic from "../Views/Widgets/Statistic"
import Data from "../Views/Widgets/Data"
import Chart from "../Views/Widgets/Chart"
import Register from "../Views/Register/Register"
import PageNotFound from "../Views/404/PageNotFound"
import Chat from "../Features/Chat/Chat"
import ChatHistory from "../Features/Chat/Component/ChatHistory"
import ChatsHeader from "../Features/Chat/Layout/ChatsHeader"
import ChatList from "../Features/Chat/Layout/ChatList"
import GroupList from "../Features/Chat/Layout/GroupList"

const Router = () => {
  let routes = [
    {
      path: "/",
      element: (
        <AuthRemover>
          <PublicLayout />
        </AuthRemover>
      ),
      children: [
        {
          index: true,
          element: (
            <AuthRemover>
              <Login />
            </AuthRemover>
          ),
        },
        {
          path: "register",
          element: (
            <AuthRemover>
              <Register />
            </AuthRemover>
          ),
        },
      ],
    },
    {
      path: "/dashboard",
      element: (
        <AuthProvider>
          <PrimaryLayout />
        </AuthProvider>
      ),
      children: [
        {
          index: true,
          element: (
            <AuthProvider>
              <Dashboard />
            </AuthProvider>
          ),
        },
      ],
    },
    {
      path: "/widget",
      element: (
        <AuthProvider>
          <PrimaryLayout />
        </AuthProvider>
      ),
      children: [
        {
          path: "statistic",
          element: (
            <AuthProvider>
              <Statistic />
            </AuthProvider>
          ),
        },
        {
          path: "data",
          element: (
            <AuthProvider>
              <Data />
            </AuthProvider>
          ),
        },
        {
          path: "chart",
          element: (
            <AuthProvider>
              <Chart />
            </AuthProvider>
          ),
        },
      ],
    },
    {
      path: "/chat",
      element: (
        <AuthProvider>
          <PrimaryLayout />
        </AuthProvider>
      ),
      children: [
        {
          path: "",
          element: (
            <AuthProvider>
              <Chat />
            </AuthProvider>
          ),
          children: [
            {
              path: "",
              element: (
                <AuthProvider>
                  <ChatsHeader />
                </AuthProvider>
              ),
              children: [
                {
                  path: "direct-messages",
                  element: (
                    <AuthProvider>
                      <ChatList />
                    </AuthProvider>
                  ),
                  children: [
                    {
                      path: ":chatID",
                      element: (
                        <AuthProvider>
                          <ChatHistory />
                        </AuthProvider>
                      ),
                    },
                  ],
                },
                {
                  path: "group-messages",
                  element: (
                    <AuthProvider>
                      <GroupList />
                    </AuthProvider>
                  ),
                  children: [
                    {
                      path: ":groupID",
                      element: (
                        <AuthProvider>
                          <ChatHistory />
                        </AuthProvider>
                      ),
                    },
                  ],
                },
              ],
            },
          ],
        },
      ],
    },
    { path: "*", element: <PageNotFound /> },
  ]

  let element = useRoutes(routes)

  return element
}

export default Router
