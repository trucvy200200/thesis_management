import { Button, Box, Grid, TextField, Typography } from "@mui/material";
import React, { useEffect, useState } from "react";
import { DataGrid } from "@mui/x-data-grid";
import contract from "../../../assets/text.pdf"
import { Link } from "react-router-dom"
import ModalUpdate from "../../../components/common/ModalUpdate";
import TaskTable from "../manageTask/TaskTable";
const listTopic = [
    {
        id: 1,
        title: "Đè tài 1",
        description: "Mô tả 1",
        teacher: {
            name: "Nguyễn Thanh Thuy",
        },
        student: {
            name: "Nguyễn Thanh Thuy",
        },
        dayReivew: "10/10/2022",
    }
]

function ManageTask() {

    return (
        <div className="wrapper my-3">
            <Button fullWidth size="large" variant="contained">
                Chi tiết đề tài
            </Button>
            <Typography variant="subtitle2">
                Tên đề tài:
            </Typography>
            <Typography variant="subtitle2" mt={2}>
                Mô tả đề tài:
            </Typography>
            <TaskTable />
        </div>
    );
}

export default ManageTask;
