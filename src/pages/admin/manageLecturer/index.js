import React, { useEffect, useState } from "react";
import CreateAccount from "../../../components/screens/admin/account-management/CreateAccount";
import InfoAccount from "../../../components/screens/admin/account-management/InfoAccount";
const listUser = [
    {
        id: 1,
        name: "Phạm Thu Hú",
        username: "asd",
        password: "123",
        email: "asd",
        role: 0,
        major: "asdad"
    }
]

function ManageLecturer() {
    // const [listUser, setListUser] = useState([]);

    // useEffect(() => {
    //     const getListUser = async () => {
    //         try {
    //             const res = await list();
    //             setListUser(
    //                 res.data
    //                     ?.map((e) => ({ id: e._id, ...e }))
    //                     ?.filter((e) => e.username !== "admin")
    //             );
    //         } catch (error) {
    //             throw error;
    //         }
    //     };
    //     getListUser();
    // }, []);
    return (
        <div className="wrapper">
            <CreateAccount />
            <InfoAccount data={listUser} />
        </div>
    );
}

export default ManageLecturer;
