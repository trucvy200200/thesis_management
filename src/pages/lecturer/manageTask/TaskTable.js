import { Button, Box, Typography, Grid, TextField } from "@mui/material";
import React, { useEffect, useState } from "react";
import { DataGrid } from "@mui/x-data-grid";
import ModalUpdate from "../../../components/common/ModalUpdate";
import DatePicker from "react-datepicker";
const listTopic = [
    {
        id: 1,
        time: "13/10/2023",
        task: "Khởi đầu",
        numberStudent: 2,
    }
]

function TaskTable() {
    const [isOpenModalUpdate, setIsOpenModalUpdate] = useState(false);
    const [title, setTitle] = useState("");
    const [description, setDescription] = useState("");
    const [value, setValue] = React.useState(null);
    const columns = [
        { field: "time", headerName: "Thời gian", width: 150 },
        { field: "task", headerName: "Task", width: 150 },
        { field: "numberStudent", headerName: "Sinh viên", width: 150 },
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
                            href="/lecturer/manage-submit"
                        >
                            Chi tiết
                        </Button>
                    </Box>
                );
            },
        },
    ];
    return (
        <div className="wrapper my-3">
            <Box height={300} width={"100%"} mt={4}>
                <div className="d-flex justify-content-end my-2" >
                    <Button variant="contained" onClick={() => setIsOpenModalUpdate(true)}>
                        Thêm task
                    </Button>
                </div>
                <DataGrid rows={listTopic} columns={columns} />
            </Box>
            <ModalUpdate
                open={isOpenModalUpdate}
                // handleOk={}
                titleOk={"Thêm"}
                handleClose={() => setIsOpenModalUpdate(false)}
                title={"Thêm task"}>
                <>
                    <Grid item xs={12} className="my-3">
                        <TextField
                            fullWidth
                            label="Tên task"
                            size="small"
                            value={title}
                            onChange={(e) => setTitle(e.target.value)}
                        />
                    </Grid>
                    <Grid item xs={12}>
                        <TextField
                            fullWidth
                            label="Mô tả"
                            size="small"
                            value={description}
                            onChange={(e) => setDescription(e.target.value)}
                            multiline
                            rows={5}
                        />
                    </Grid>
                    <Typography variant="subtitle2" mt={2}>
                        Thời gian:
                    </Typography>
                    <input
                        onChange={(date) => setValue(date)}
                        type="date"
                    />
                </>

            </ModalUpdate>
        </div>
    );
}

export default TaskTable;
