import React from "react"
import { Navigate } from "react-router-dom"
// other page components...
const RegisterThesis = React.lazy(() => import("../../pages/lecturer/registerThesis"))
const Profile = React.lazy(() => import("../../pages/lecturer/profile"))
const ManageThesis = React.lazy(() => import("../../pages/lecturer/manageThesis"))
const AssignedLecturer = React.lazy(() => import("../../pages/lecturer/assignedLecturer"))
const ManageStudentSubmit = React.lazy(() => import("../../pages/lecturer/manageStudentSubmit"))
const ManageTask = React.lazy(() => import("../../pages/lecturer/manageTask"))
const routes = [
    // other mappings ...
    { path: "/lecturer", element: <Navigate to="/lecturer/register-thesis" replace={true} /> },
    { path: "/manage-thesis", element: <ManageThesis /> },
    { path: "/register-thesis", element: <RegisterThesis /> },
    { path: "/profile", element: <Profile /> },
    { path: "/assigned-thesis", element: <AssignedLecturer /> },
    { path: "/manage-submit", element: <ManageStudentSubmit /> },
    { path: "/manage-task", element: <ManageTask /> },
]

export default routes