import React, { useEffect, useState } from "react";
import { Button, Box } from "@mui/material";
import { DataGrid } from "@mui/x-data-grid";
import axios from "axios"
import ModalViewPdf from "./components/ModalViewPdf";
const columns = ({ setOpen, setThesisId }) => [
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
        field: "academic_year",
        headerName: "Niên khóa",
        width: 250,
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
    {
        field: "",
        headerName: "Hành động",
        width: 300,
        renderCell: (params) => {
            return (
                <Box display={"flex"} gap={2} alignItems={"center"}>
                    <Button
                        variant="contained"
                        size="small"
                        onClick={
                            () => {
                                setOpen(true);
                                setThesisId(params?.row?._id)
                            }
                        }
                    >
                        Báo cáo chi tiết
                    </Button>
                </Box>
            );
        }
    },
];


function GuestPreference() {
    const [listTopic, setListTopic] = useState([]);
    const [open, setOpen] = useState(false);
    const [thesisId, setThesisId] = useState("");
    console.log(listTopic.filter((e) => e._id === thesisId)[0]?.urlSave)
    useEffect(() => {
        axios.post('api/get-reference').then((response) => {
            setListTopic(response.data.referenceData.data)
        })
    }, []);
    return (
        <div className="wrapper">
            <Button fullWidth size="large" variant="contained" className="my-3">
                Tài liệu tham khảo
            </Button>
            <Box height={300} width={"100%"} mt={4}>
                <DataGrid rows={listTopic} columns={columns({ setOpen, setThesisId })} getRowId={(row) => row._id} />
            </Box>
            <ModalViewPdf
                open={open}
                file={listTopic?.filter((e) => e._id === thesisId)[0]?.urlSave}
                handleClose={() => setOpen(false)}
            />
        </div>
    );
}

export default GuestPreference;
