import { Box, Button, Grid, TextField, Select, MenuItem, FormLabel } from "@mui/material";
import React, { useState } from "react";
import SelectMajor from "../../../common/SelectMajor";

function CreateAccount() {
  const [name, setName] = useState("");
  const [code, setCode] = useState("");
  const [email, setEmail] = useState("");
  const [role, setRole] = useState(0);
  const [major, setMajor] = useState(null);

  const handleReset = () => {
    setName("");
    setCode("");
    setEmail("");
    setRole(0);
    setMajor(0);
  };

  const handleCreateUser = async (e) => {
    // try {
    //   e.preventDefault();
    //   const res = await create({
    //     name,
    //     username,
    //     password,
    //     email,
    //     role,
    //     major,
    //   });
    //   notify("success", "Thêm tài khoản thành công");
    //   setList((prev) => [{ ...res?.data, id: res?.data?._id }, ...prev]);
    //   handleReset();
    // } catch (error) {
    //   notify("error", error?.response?.data?.message);
    // }
  };

  return (
    <Box>
      <Button fullWidth size="large" variant="contained">
        Quản lý tài khoản
      </Button>
      <Box mt={2} component={"form"} onSubmit={handleCreateUser}>
        <Grid container spacing={2}>
          <Grid item xs={6}>
            <TextField
              fullWidth
              size="small"
              label="Họ tên"
              value={name}
              onChange={(e) => setName(e.target.value)}
              required
            />
          </Grid>
          <Grid item xs={6}>
            <TextField
              fullWidth
              size="small"
              label="Mã số"
              value={code}
              onChange={(e) => setCode(e.target.value)}
              required
            />
          </Grid>
          <Grid item xs={6}>
            <TextField
              fullWidth
              size="small"
              label="Email"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
              required
            />
          </Grid>
          <Grid item xs={6}>
            <TextField
              label="Vai trò"
              fullWidth
              size="small"
              value={role}
              select
              onChange={(e) => setRole(e.target.value)}
            >
              <MenuItem value={0}>Sinh Viên</MenuItem>
              <MenuItem value={1}>Giảng Viên</MenuItem>
              <MenuItem value={2}>Trường bộ môn</MenuItem>
            </TextField>
          </Grid>
          <Grid item xs={6}>
            <SelectMajor value={major} setValue={setMajor} />
          </Grid>
        </Grid>
        <Box
          display={"flex"}
          alignItems={"center"}
          justifyContent={"center"}
          height={"100%"}
          mt={2}
        >
          <Button variant="contained" type="submit">
            Thêm tài khoản
          </Button>
        </Box>
      </Box>
    </Box>
  );
}

export default CreateAccount;
