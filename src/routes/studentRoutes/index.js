import React from "react"
import { Navigate } from "react-router-dom"
// other page components...
const RegisterThesis = React.lazy(() => import("../../pages/student/registerThesis"))
const Profile = React.lazy(() => import("../../pages/student/profile"))
const ManageThesis = React.lazy(() => import("../../pages/student/manageThesis"))
const routes = [
    // other mappings ...
    { path: "/", element: <Navigate to="/register-thesis" replace={true} /> },
    { path: "/manage-thesis", element: <ManageThesis /> },
    { path: "/register-thesis", element: <RegisterThesis /> },
    { path: "/profile", element: <Profile /> },
]

export default routes