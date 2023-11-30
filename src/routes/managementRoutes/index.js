import React from "react"
import { Navigate } from "react-router-dom"
// other page components...
const RegisterThesis = React.lazy(() => import("../../pages/lecturer/registerThesis"))
const Profile = React.lazy(() => import("../../pages/lecturer/profile"))
const ApproveThesis = React.lazy(() => import("../../pages/management/approveThesis"))
const ManageThesis = React.lazy(() => import("../../pages/lecturer/manageThesis"))
const AssignedLecturer = React.lazy(() => import("../../pages/management/assignedLecturer"))
const routes = [
    // other mappings ...
    { path: "/", element: <Navigate to="/register-thesis" replace={true} /> },
    { path: "/register-thesis", element: <RegisterThesis /> },
    { path: "/manage-thesis", element: <ManageThesis /> },

    // { path: "/thesis", element: <Thesis /> },
    { path: "/profile", element: <Profile /> },
    { path: "/approve-thesis", element: <ApproveThesis /> },
    { path: "/assigned-lecturer", element: <AssignedLecturer /> },
]

export default routes