import React, { useEffect, useState } from "react";
import CreateAccount from "../../../components/screens/admin/account-management/CreateAccount";
import InfoAccount from "../../../components/screens/admin/account-management/InfoAccount";

function ManageStudent() {
    const [listUser, setListUser] = useState([]);

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
        <div className="wrapper my-3">
            <CreateAccount setList={setListUser} />
            <InfoAccount data={listUser} setList={setListUser} />
        </div>
    );
}

export default ManageStudent;
