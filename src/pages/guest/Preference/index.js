import React, { useEffect, useState } from "react";
import { Button, Box } from "@mui/material";
import { DataGrid } from "@mui/x-data-grid";

const columns = [
    {
        field: "id",
        headerName: "STT",
        width: 50,
        valueGetter: (params) => {
            return params.value;
        },
    },
    {
        field: "student",
        headerName: "Người thực hiên",
        width: 300,
        valueGetter: (params) => {
            return params.value?.name;
        },
    },
    {
        field: "teacher",
        headerName: "Giáo viên hướng dẫn",
        width: 250,
        valueGetter: (params) => {
            return params.value?.name;
        },
    },
    {
        field: "title",
        headerName: "Tên đề tài",
        width: 250,
    },
    {
        field: "description",
        headerName: "Mô tả đề tài",
        width: 250,
    },
];

const listTopic = [{
    id: 1,
    student: {
        name: "Nguyễn Thanh Huy",
    },
    teacher: {
        name: "Nguyễn Thanh Huy",
    },
    title: "Tài liệu tham khảo",
    description: "sdads"
}]
function GuestPreference() {

    return (
        <div className="wrapper">
            <Button fullWidth size="large" variant="contained" className="my-3">
                Tài liệu tham khảo
            </Button>
            <Box height={300} width={"100%"} mt={4}>
                <DataGrid rows={listTopic} columns={columns} />
            </Box>
        </div>
    );
}

export default GuestPreference;
