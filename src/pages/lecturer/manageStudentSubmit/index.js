import { Button, Box, Grid, TextField, Typography } from "@mui/material";
import React, { useEffect, useState } from "react";
import { DataGrid } from "@mui/x-data-grid";
import contract from "../../../assets/text.pdf"
import { Link } from "react-router-dom"
import ModalUpdate from "../../../components/common/ModalUpdate";
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

function ManageStudentSubmit() {
    //   const [currentUser, setCurrentUser] = useState({});
    //   const [listTopic, setListTopic] = useState([]);
    const [isOpenModalUpdate, setIsOpenModalUpdate] = useState(false);
    const [assess, setAssess] = useState(null)
    const columns = [
        { field: "mssv", headerName: "MSSV", width: 150 },
        { field: "name", headerName: "Tên sinh viên", width: 250 },
        { field: "file", headerName: "Bài nộp", width: 250 },
        { field: "status", headerName: "Trạng thái đánh giá", width: 250 },
        { field: "date", headerName: "Ngày nộp", width: 250 },
        {
            field: "",
            headerName: "Hành động",
            width: 250,
            renderCell: (params) => {
                return (
                    <Box display={"flex"} gap={2} alignItems={"center"}>
                        <Button
                            variant="contained"
                            size="small"
                            onClick={
                                () => {
                                    setIsOpenModalUpdate(true);
                                }
                            }
                        >
                            Đánh giá
                        </Button>
                    </Box>
                );
            },
        },
    ];
    return (
        <div className="wrapper my-3">
            <Button fullWidth size="large" variant="contained">
                Danh sách sinh viên nộp tiến độ
            </Button>
            <Box height={300} width={"100%"} mt={4}>
                <DataGrid rows={listTopic} columns={columns} />
            </Box>
            <ModalUpdate
                open={isOpenModalUpdate}
                // handleOk={}
                titleOk={"Đánh giá"}
                handleClose={() => setIsOpenModalUpdate(false)}
                title={"Hộp thoại đánh giá"}>
                <>
                    <Grid item xs={6}>
                        <Typography variant="subtitle2">
                            Báo cáo tiến độ: Đã hoàn thành bước đầu tiên, đang hoàn thành bước thứ 2
                        </Typography>
                    </Grid>
                    <Grid item xs={6}>
                        <Typography variant="subtitle2">
                            Bài nộp: <Link to={contract} target="_blank" download>ádsad.pdf</Link>
                        </Typography>
                    </Grid>
                    <Grid item xs={12} className="my-3">
                        <TextField
                            fullWidth
                            label="Nhập đánh giá"
                            size="small"
                            value={assess}
                            onChange={(e) => setAssess(e.target.value)}
                            rows={4}
                            multiline
                        />
                    </Grid>
                </>
            </ModalUpdate>
        </div>
    );
}

export default ManageStudentSubmit;
