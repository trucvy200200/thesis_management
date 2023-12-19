import React, { useEffect, useState } from "react";
import CreateAccount from "../../../components/screens/admin/account-management/CreateAccount";
import InfoAccount from "../../../components/screens/admin/account-management/InfoAccount";
import axios from "axios"
import { configHeader } from "../../../@core/plugin/configHeader";
function ManageStudent() {
    const [listUser, setListUser] = useState([]);
    useEffect(() => {
        getUserList();
    }, [])
    const getUserList = async () => {
        await axios.get("/api/admin/get-all-user", configHeader(JSON.parse(localStorage.getItem("userData")).token)[0]).then((res) => {
            setListUser(res.data?.data?.data)
        }).catch((err) => {
            console.log(err)
        })
    }
        ;
    return (
        <div className="wrapper my-3">
            <CreateAccount setList={setListUser} getUserList={getUserList} />
            <InfoAccount data={listUser} setList={setListUser} getUserList={getUserList} />
        </div>
    );
}

export default ManageStudent;
