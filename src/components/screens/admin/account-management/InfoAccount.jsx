import {
  Box,
  Button,
  Chip,
  FormControlLabel,
  Grid,
  Radio,
  RadioGroup,
  TextField,
  Typography,
} from "@mui/material";
import React, { useEffect, useState } from "react";
import { DataGrid } from "@mui/x-data-grid";
import ConfirmDelete from "../../../common/ConfirmDelete";
import { getColor, getRole } from "../../../../utility/helpers/getRole";
import { notify } from "../../../../utility/helpers/notify";
import ModalUpdate from "../../../common/ModalUpdate";
import SelectMajor from "../../../common/SelectMajor";

function InfoAccount({ data, setList }) {
  const [isOpenConfirmDelete, setIsOpenConfirmDelete] = useState(false);
  const [isOpenModalUpdate, setIsOpenModalUpdate] = useState(false);

  const [idDelete, setIdDelete] = useState("");
  const [idUpdate, setIdUpdate] = useState("");
  const [name, setName] = useState("");
  const [username, setUsername] = useState("");
  const [password, setPassword] = useState("");
  const [email, setEmail] = useState("");
  const [phone, setPhone] = useState("");
  const [major, setMajor] = useState("");
  const [birth, setBirth] = useState("");
  const [address, setAddress] = useState("");
  const [sex, setSex] = useState("");
  const [role, setRole] = useState(null);

  const columns = [
    {
      field: "id",
      headerName: "Mã người dùng",
      width: 150,
    },
    { field: "name", headerName: "Họ tên", width: 150 },
    { field: "username", headerName: "Username", width: 150 },
    {
      field: "email",
      headerName: "Email",
      width: 150,
    },
    {
      field: "major",
      headerName: "Ngành",
      width: 150,
      valueGetter: (params) => {
        return params.value?.name;
      },
    },
    {
      field: "role",
      headerName: "Quyền",
      width: 150,
      renderCell: (params) => {
        return (
          <Chip
            label={getRole(params.row.role)}
            color={getColor(params.row.role)}
          />
        );
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
              variant="outlined"
              color="error"
              size="small"
              onClick={() => {
                setIsOpenConfirmDelete(true);
                setIdDelete(params.row._id);
              }}
            >
              Xóa
            </Button>
            <Button
              variant="contained"
              size="small"
              onClick={() => {
                setIsOpenModalUpdate(true);
                setIdUpdate(params.row._id);
              }}
            >
              Cập nhật
            </Button>
          </Box>
        );
      },
    },
  ];

  const handleDelete = async () => {
    try {
      // await deleteUser(idDelete);
      notify("success", "Xóa tài khoản thành công");
      setIsOpenConfirmDelete(false);
      setList(data?.filter((e) => e._id !== idDelete));
    } catch (error) {
      throw error;
    }
  };

  const handleUpdate = async () => {
    try {
      // const res = await update(idUpdate, {
      //   name,
      //   password,
      //   phone,
      //   birth,
      //   address,
      //   major,
      //   sex,
      //   role,
      // });

      // notify("success", "Cập nhật thành công");
      // const newData = data?.map((i) => {
      //   if (i._id === idUpdate) return { id: res?.data?._id, ...res?.data };
      //   else return i;
      // });
      // setList(newData);
      setIsOpenModalUpdate(false);
    } catch (error) {
      notify("error", error?.response?.data?.message);
    }
  };

  // useEffect(() => {
  //   const getInfoUpdate = async () => {
  //     const res = await findUser(idUpdate);
  //     const user = res.data;
  //     setName(user?.name);
  //     setPassword(user?.password);
  //     setPhone(user?.phone);
  //     setMajor(user?.major?._id);
  //     setBirth(user?.birth);
  //     setAddress(user?.address);
  //     setUsername(user?.username);
  //     setEmail(user?.email);
  //     setSex(user?.sex);
  //     setRole(user?.role);
  //   };
  //   idUpdate && getInfoUpdate();
  // }, [idUpdate]);

  return (
    <Box mt={8}>
      <Typography textAlign={"center"} variant="h6" fontWeight={"bold"}>
        DANH SÁCH TÀI KHOẢN
      </Typography>
      <Box height={"70vh"} width={"100%"} mt={4}>
        <DataGrid rows={data} columns={columns} hideFooter={true} />
      </Box>
      <ConfirmDelete
        open={isOpenConfirmDelete}
        handleOk={handleDelete}
        handleClose={() => setIsOpenConfirmDelete(false)}
      />
      <ModalUpdate
        open={isOpenModalUpdate}
        handleClose={() => setIsOpenModalUpdate(false)}
        handleOk={handleUpdate}
      >
        <Grid container spacing={2} py={2}>
          <Grid item xs={6}>
            <TextField
              fullWidth
              label="Họ và tên"
              size="small"
              value={name}
              onChange={(e) => setName(e.target.value)}
            />
          </Grid>
          <Grid item xs={6}>
            <TextField
              fullWidth
              label="Username"
              size="small"
              value={username}
              disabled
            />
          </Grid>
          <Grid item xs={6}>
            <TextField
              fullWidth
              label="Password"
              size="small"
              value={password}
              onChange={(e) => setPassword(e.target.value)}
            />
          </Grid>
          <Grid item xs={6}>
            <TextField
              fullWidth
              label="Email"
              size="small"
              value={email}
              disabled
            />
          </Grid>
          <Grid item xs={6}>
            <TextField
              fullWidth
              label="Số điện thoại"
              size="small"
              value={phone}
              onChange={(e) => setPhone(e.target.value)}
            />
          </Grid>
          <Grid item xs={6}>
            <SelectMajor
              value={major}
              setValue={setMajor}
              disabled={role === 3}
            />
          </Grid>
          <Grid item xs={6}>
            <TextField
              fullWidth
              label="Ngày sinh"
              size="small"
              value={birth}
              onChange={(e) => setBirth(e.target.value)}
            />
          </Grid>
          <Grid item xs={6}>
            <TextField
              fullWidth
              label="Địa chỉ"
              size="small"
              value={address}
              onChange={(e) => setAddress(e.target.value)}
            />
          </Grid>
          <Grid item xs={6}>
            <RadioGroup
              row
              value={sex}
              onChange={(e) => setSex(e.target.value)}
            >
              <FormControlLabel
                value={1}
                control={<Radio size="small" />}
                label="Nam"
              />
              <FormControlLabel
                value={0}
                control={<Radio size="small" />}
                label="Nữ"
              />
            </RadioGroup>
          </Grid>
        </Grid>
      </ModalUpdate>
    </Box>
  );
}

export default InfoAccount;
