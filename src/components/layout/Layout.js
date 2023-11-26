import { Outlet } from "react-router-dom"
import Header from "../Header"
import Banner from "../Banner"
import { Suspense, useEffect } from "react"
import { LoadingBackground } from "../loading/LoadingBackground"
export default function Layout({ role }) {

    return (
        <>
            <Banner />
            <Header role={role} />
            <main>
                <Suspense fallback={<LoadingBackground />}>
                    <Outlet />
                </Suspense>
            </main>
        </>
    )
}