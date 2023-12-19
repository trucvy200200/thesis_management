import React, { useEffect, useState } from "react";
import { Box, Button, Chip, Grid, TextField, Typography } from "@mui/material";
import { DataGrid } from "@mui/x-data-grid";
import ConfirmDelete from "../../../components/common/ConfirmDelete";
import ModalUpdate from "../../../components/common/ModalUpdate";
import axios from "axios";
import toast from "react-hot-toast";
import { logout } from "../../../redux/actions/auth"
import { useNavigate } from 'react-router-dom'
import { getAllThesis } from "../../student/store/action";
import { useSelector, useDispatch } from "react-redux";
import { configHeader } from "../../../@core/plugin/configHeader";
const renderStatus = (status) => {
    switch (status) {
        case 0:
            return "Hoàn thành";
        case 1:
            return "Đã duyệt";
        case 2:
            return "Chờ duyệt"
    }
}
function ManageThesis() {
    const [listTopic, setListTopic] = useState([]);
    const [isOpenConfirmDelete, setIsOpenConfirmDelete] = useState(false);
    const [isOpenModalUpdate, setIsOpenModalUpdate] = useState(false);
    const [isOpenModalAdd, setIsOpenModalAdd] = useState(false);
    const [idDelete, setIdDelete] = useState("");
    const [idUpdate, setIdUpdate] = useState("");

    const [title, setTitle] = useState("");
    const [description, setDescription] = useState("");
    const [code, setCode] = useState("");
    const [infoTopicUpdate, setInfoTopicUpdate] = useState({});
    const dispatch = useDispatch()
    const navigate = useNavigate()
    const store = useSelector(state => state.student?.thesisList)
    const [loading, setLoading] = useState(false)
    const columns = [
        {
            field: "code",
            headerName: "Mã đề tài",
            width: 150,
        },
        { field: "title", headerName: "Tên đề tài", width: 250 },
        { field: "description", headerName: "Mô tả", width: 250 },
        {
            field: "status",
            headerName: "Trạng thái",
            width: 200,
            renderCell: (params) => {
                const label =
                    params.row.status === 2
                        ? "Chưa được phê duyệt"
                        : "Đã được phê duyệt";
                const color = params.row.approveByManagement === 0 ? "error" : "success";
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
                            Sửa
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
    const handleCreateTopic = async () => {
        const params = {}
        params.title = title
        params.description = description
        params.code = code
        params.industry = JSON.parse(localStorage.getItem("userData")).facility
        params.instructor = JSON.stringify([{
            id: JSON.parse(localStorage.getItem("userData")).idUser,
            name: JSON.parse(localStorage.getItem("userData")).name,
            faculty: JSON.parse(localStorage.getItem("userData")).facility,
        }])
        params.academic_year = "2017-2021"
        params.time_start = "03/02/2021"
        params.time_end = "07/20/2021"
        params.type = "Capstone project"
        params.status = 2
        await axios.post("/api/upload-thesis",
            params,
            configHeader(JSON.parse(localStorage.getItem("userData")).token)[0])
            .then((res) => {
                toast.success("Tạo đề tài thành công")
            }).catch((err) => {
                toast.error(err?.response?.data?.thesisData?.errMessage)
            })

    };

    const handleDelete = async () => {
        try {
            // await deleteTopicByManagement(idDelete);
            // notify("success", "Xóa đề tài thành công");
            setIsOpenConfirmDelete(false);
            setListTopic(listTopic?.filter((e) => e._id !== idDelete));
        } catch (error) {
            throw error;
        }
    };
    useEffect(() => {
        getListTopic();
    }, []);
    const handleLogoutUser = () => {
        dispatch(logout(
            JSON.parse(localStorage.getItem("userData"))?._id,
            setLoading,
            () => navigate("/login")
        ))
        localStorage.removeItem("userData")
        localStorage.removeItem("token")
    }
    const getListTopic = async () => {
        const params = {}
        params.industry = JSON.parse(localStorage.getItem("userData")).major
        dispatch(getAllThesis(params, () => handleLogoutUser()))
    };

    const handleUpdate = async () => {
        try {
            // await update(idUpdate, { title, description });
            // notify("success", "Cập nhật đề tài thành công");
            setIsOpenModalUpdate(false);
            getListTopic();
        } catch (error) {
            console.log(error);
        }
    };


    // useEffect(() => {
    // const getTopicById = async () => {
    // try {
    // const res = await findTopic(idUpdate);
    // setInfoTopicUpdate(res.data);
    // setTitle(res?.data?.title);
    // setDescription(res?.data?.description);
    //         } catch (error) {
    //             console.log(error);
    //         }
    //     };
    //     idUpdate && getTopicById();
    // }, [idUpdate]);

    return (
        <div className="wrapper my-3">
            <Button fullWidth size="large" variant="contained">
                Quản lý đề tài
            </Button>
            <Box height={"70vh"} width={"100%"} mt={4}>
                <div className="d-flex justify-content-end">
                    <Button size="large" className="bg-success" variant="contained" onClick={() => setIsOpenModalAdd(true)}>
                        Thêm đề tài
                    </Button>
                </div>
                <DataGrid rows={store} columns={columns} hideFooter={true} getRowId={(row) => row._id} />
            </Box>
            <ConfirmDelete
                title={"Hủy đề tài"}
                content={"Bạn có chắc chắn muốn hủy đề tài này không ?"}
                open={isOpenConfirmDelete}
                handleOk={handleDelete}
                handleClose={() => setIsOpenConfirmDelete(false)}
            />
            <ModalUpdate
                open={isOpenModalUpdate}
                handleClose={() => setIsOpenModalUpdate(false)}
                handleOk={handleUpdate}
                title={"Hộp thoại chi tiết"}
            >
                <Grid container spacing={2} py={2}>
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
                    <Grid item xs={6}>
                        <Typography variant="subtitle2">
                            Chuyên ngành: {infoTopicUpdate?.major?.name}
                        </Typography>
                    </Grid>
                    <Grid item xs={6}>
                        <Typography variant="subtitle2">
                            Giáo viên hướng dẫn:{" "}
                            {infoTopicUpdate?.teacher
                                ? infoTopicUpdate?.teacher?.name
                                : "Không có"}
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
                            Giáo viên phản biện:{" "}
                            {infoTopicUpdate?.teacherReview
                                ? infoTopicUpdate?.teacherReview?.name
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
                </Grid>
            </ModalUpdate>
            <ModalUpdate
                open={isOpenModalAdd}
                handleClose={() => setIsOpenModalAdd(false)}
                handleOk={handleCreateTopic}
                title={"Thêm đề tài"}
                titleOk={"Thêm"}
            >
                <Grid container spacing={2} py={2}>
                    <Grid container spacing={1}>
                        <Grid item xs={2}>
                            <Typography variant="subtitle2">Mã đề tài:</Typography>
                        </Grid>
                        <Grid item xs={10}>
                            <TextField
                                fullWidth
                                size="small"
                                value={code}
                                onChange={(e) => setCode(e.target.value)}
                            />
                        </Grid>
                    </Grid>
                    <Grid container spacing={1} mt={1}>
                        <Grid item xs={2}>
                            <Typography variant="subtitle2">Tên đề tài:</Typography>
                        </Grid>
                        <Grid item xs={10}>
                            <TextField
                                fullWidth
                                size="small"
                                value={title}
                                onChange={(e) => setTitle(e.target.value)}
                            />
                        </Grid>
                    </Grid>
                    <Grid container spacing={1} mt={1}>
                        <Grid item xs={2}>
                            <Typography variant="subtitle2">Mô tả đề tài:</Typography>
                        </Grid>
                        <Grid item xs={10}>
                            <TextField
                                multiline
                                rows={3}
                                fullWidth
                                value={description}
                                onChange={(e) => setDescription(e.target.value)}
                            />
                        </Grid>
                    </Grid>
                </Grid>
            </ModalUpdate>
        </div>
    );
}

export default ManageThesis;
