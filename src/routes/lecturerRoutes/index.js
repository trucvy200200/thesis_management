import React from "react"
import { Navigate } from "react-router-dom"
// other page components...
const RegisterThesis = React.lazy(() => import("../../pages/lecturer/registerThesis"))
const Profile = React.lazy(() => import("../../pages/lecturer/profile"))
const ManageThesis = React.lazy(() => import("../../pages/lecturer/manageThesis"))
const AssignedLecturer = React.lazy(() => import("../../pages/lecturer/assignedLecturer"))
const routes = [
    // other mappings ...
    { path: "/", element: <Navigate to="/register-thesis" replace={true} /> },
    { path: "/manage-thesis", element: <ManageThesis /> },
    { path: "/register-thesis", element: <RegisterThesis /> },
    { path: "/profile", element: <Profile /> },
    { path: "/assigned-thesis", element: <AssignedLecturer /> },
]

export default routes