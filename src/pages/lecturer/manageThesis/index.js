import React, { useEffect, useState } from "react";
import { Box, Button, Chip, Grid, TextField, Typography } from "@mui/material";

import { DataGrid } from "@mui/x-data-grid";

import ConfirmDelete from "../../../components/common/ConfirmDelete";
import ModalUpdate from "../../../components/common/ModalUpdate";


const listTopic = [{
    id: "1",
    title: "Tiêu đề 1",
    description: "Tiêu đề 1",
}]
function ManageThesis() {
    // const [listTopic, setListTopic] = useState([]);
    const [isOpenConfirmDelete, setIsOpenConfirmDelete] = useState(false);
    const [isOpenModalUpdate, setIsOpenModalUpdate] = useState(false);
    const [currentUser, setCurrentUser] = useState({});

    const [idDelete, setIdDelete] = useState("");
    const [idUpdate, setIdUpdate] = useState("");

    const [title, setTitle] = useState("");
    const [description, setDescription] = useState("");
    const [infoTopicUpdate, setInfoTopicUpdate] = useState({});

    const columns = [
        {
            field: "id",
            headerName: "Mã đề tài",
            width: 150,
        },
        { field: "title", headerName: "Tên đề tài", width: 250 },
        { field: "description", headerName: "Mô tả", width: 250 },
        {
            field: "approveByManagement",
            headerName: "Trạng thái",
            width: 200,
            renderCell: (params) => {
                const label =
                    params.row.approveByManagement == 0
                        ? "Chưa được phê duyệt"
                        : "Đã được phê duyệt";
                const color = params.row.approveByManagement == 0 ? "error" : "success";
                return <Chip label={label} color={color} />;
            },
        },
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
                            onClick={() => {
                                setIsOpenModalUpdate(true);
                                setIdUpdate(params.row._id);
                            }}
                        >
                            Chi tiết
                        </Button>
                        <Button
                            variant="outlined"
                            size="small"
                            color="error"
                            onClick={() => {
                                setIsOpenConfirmDelete(true);
                                setIdDelete(params.row._id);
                            }}
                        >
                            Hủy đề tài
                        </Button>
                    </Box>
                );
            },
        },
    ];




    return (
        <div className="wrapper my-3">
            <Button fullWidth size="large" variant="contained">
                Quản lý đề tài
            </Button>
            <Box height={"70vh"} width={"100%"} mt={4}>
                <DataGrid rows={listTopic} columns={columns} hideFooter={true} />
            </Box>
            <ConfirmDelete
                title={"Hủy đề tài"}
                content={"Bạn có chắc chắn muốn hủy đề tài này không ?"}
                open={isOpenConfirmDelete}
                // handleOk={handleDelete}
                handleClose={() => setIsOpenConfirmDelete(false)}
            />
            <ModalUpdate
                open={isOpenModalUpdate}
                handleClose={() => setIsOpenModalUpdate(false)}
                // handleOk={handleUpdate}
                title={"Hộp thoại chi tiết"}
            >
                <Grid container spacing={2} py={2}>
                    {infoTopicUpdate?.owner === currentUser?._id ? (
                        <>
                            <Grid item xs={12}>
                                <TextField
                                    fullWidth
                                    label="Tên đề tài"
                                    size="small"
                                    value={title}
                                    onChange={(e) => setTitle(e.target.value)}
                                />
                            </Grid>
                            <Grid item xs={12}>
                                <TextField
                                    fullWidth
                                    label="Mô tả đề tài"
                                    size="small"
                                    value={description}
                                    onChange={(e) => setDescription(e.target.value)}
                                    multiline
                                    rows={5}
                                />
                            </Grid>
                        </>
                    ) : (
                        <>
                            <Grid item xs={6}>
                                <Typography variant="subtitle2">
                                    Tên đề tài: {infoTopicUpdate?.title}
                                </Typography>
                            </Grid>
                            <Grid item xs={6}>
                                <Typography variant="subtitle2">
                                    Sinh viên thực hiện: {infoTopicUpdate?.description}
                                </Typography>
                            </Grid>
                        </>
                    )}

                    <Grid item xs={6}>
                        <Typography variant="subtitle2">
                            Chuyên ngành: {infoTopicUpdate?.major?.name}
                        </Typography>
                    </Grid>
                    <Grid item xs={6}>
                        <Typography variant="subtitle2">
                            Sinh viên thực hiện:{" "}
                            {infoTopicUpdate?.student
                                ? infoTopicUpdate?.student?.name
                                : "Không có"}
                        </Typography>
                    </Grid>
                    <Grid item xs={6}>
                        <Typography variant="subtitle2">
                            Trạng thái:{" "}
                            {infoTopicUpdate?.approveByManagement === 1
                                ? "Đã được phê duyệt"
                                : "Chưa được phê duyệt"}
                        </Typography>
                    </Grid>
                    <Grid item xs={12}>
                        <Typography variant="subtitle2" color={"error"}>
                            *Lưu ý: chỉ cập nhật được đề tài do mình tạo
                        </Typography>
                    </Grid>
                </Grid>
            </ModalUpdate>
        </div>
    );
}

export default ManageThesis;
