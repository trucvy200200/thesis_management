import React from "react"
import { Navigate } from "react-router-dom"
// other page components...
const RegisterThesis = React.lazy(() => import("../../pages/lecturer/registerThesis"))
const Profile = React.lazy(() => import("../../pages/lecturer/profile"))
const ApproveThesis = React.lazy(() => import("../../pages/management/approveThesis"))
const ManageThesis = React.lazy(() => import("../../pages/lecturer/manageThesis"))
const AssignedLecturer = React.lazy(() => import("../../pages/management/assignedLecturer"))
const ManageStudentSubmit = React.lazy(() => import("../../pages/lecturer/manageStudentSubmit"))
const ManageTask = React.lazy(() => import("../../pages/lecturer/manageTask"))
const routes = [
    // other mappings ...
    { path: "/", element: <Navigate to="/register-thesis" replace={true} /> },
    { path: "/register-thesis", element: <RegisterThesis /> },
    { path: "/manage-thesis", element: <ManageThesis /> },

    // { path: "/thesis", element: <Thesis /> },
    { path: "/profile", element: <Profile /> },
    { path: "/approve-thesis", element: <ApproveThesis /> },
    { path: "/assigned-lecturer", element: <AssignedLecturer /> },
    { path: "/manage-submit", element: <ManageStudentSubmit /> },
    { path: "/manage-task", element: <ManageTask /> },
]

export default routes