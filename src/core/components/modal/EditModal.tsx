import CancelIcon from '@mui/icons-material/Cancel';
import { Box, Button, Dialog, DialogContent, DialogTitle, FormControlLabel, Grid, IconButton, Radio, RadioGroup, Stack, TextField, Typography } from '@mui/material';
import { createClient } from '@supabase/supabase-js';
import * as React from 'react';
import { useEffect, useState } from 'react';
import { useTranslation } from "react-i18next";
import { ButtonPrimary } from '../button/Button';

interface Props {
  open: boolean;
  currentId: string;
  onClose: () => void;
}

export default function EditModal(props: Props) {
  const supabaseUrl = 'https://lxstflrwscwaenzwsiwv.supabase.co';
  const supabaseKey = 'eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpc3MiOiJzdXBhYmFzZSIsInJlZiI6Imx4c3RmbHJ3c2N3YWVuendzaXd2Iiwicm9sZSI6ImFub24iLCJpYXQiOjE2OTExMzk4NzYsImV4cCI6MjAwNjcxNTg3Nn0.ieQl89Swq9w-VJ6gOYtXG2sjEyhXlImJprtHhJWjxMU';
  const supabaseClient = createClient(supabaseUrl, supabaseKey);

  const { t } = useTranslation();
  const [name, setName] = useState('');
  const [role, setRole] = useState(false);
  const [title, setTitle] = useState('');
  const [department, setDepartment] = useState('');
  const [address, setAddress] = useState('');
  const [phone, setPhone] = useState('');
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');

  // useEffect(() => {



  useEffect(() => {
    supabaseClient
      .from('vallentuna_users')
      .select('name, role, title, department, address, phone, email, password')
      .eq('id', props.currentId)
      .then(({ data: user, error }) => {
        if (error) {
          console.error(error);
        } else if (user.length > 0) {
          console.log('User:', user[0]);
          setName(user[0].name);
          setRole(user[0].role);
          setEmail(user[0].email);
          setTitle(user[0].title);
          setAddress(user[0].address);
          setDepartment(user[0].department);
          setPhone(user[0].phone);
          setPassword(user[0].password);
        } else {
          console.error('User not found');
        }
      });
  }, [props.currentId]);

  const updateProfile = async (name: string, role: boolean, email: string, department: string, address: string, phone: string, title: string, password: string) => {
    try {
      const { data, error } = await supabaseClient
        .from('vallentuna_users')
        .update({ name, role, email, phone, address, department, title, password })
        .eq('id', props.currentId)
      if (error) {
        console.error(error);
        return null;
      }

      return { name, role, email, department, address, phone, title, password };
    } catch (error) {
      console.error(error);
      return null;
    }
  };

  const handleSave = async () => {
    if (!name || !title || !department || !address || !phone || !email || !password) {
      alert('All fields are required');
      return;
    }
  
    const savedUser = await updateProfile(name, role, email, phone, address, department, title, password);
  
    if (savedUser) {
      console.log('Updated successfully:', savedUser);
      window.location.reload();
    } else {
      console.error('Failed to save user');
    }
  };

  const handleRoleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    setRole(e.target.value === 'admin');
  };

  return (
    <Dialog
      open={props.open}
      onClose={props.onClose}
      aria-labelledby="qrcode-modal"
      aria-describedby="qrcode"
      fullWidth={true}
      maxWidth="sm"
    >
      <DialogTitle sx={{
        display: "flex",
        justifyContent: "space-between",
      }}>
        <IconButton
          aria-label='close'
          onClick={props.onClose}
        >
          <CancelIcon />
        </IconButton>
      </DialogTitle>

      <DialogContent>
        <Box sx={{
          textAlign: "center"
        }}>
          <form noValidate autoComplete="on">
            <Grid container padding={3}>
              <Grid item xs={12} paddingBottom={1}>
                <Stack sx={{ justifyContent: "space-between", alignItems: "center" }} direction={"row"}>
                  <Typography>{t("CRUD.Name")}:</Typography>
                  <TextField id="name" label="Name" value={name} onChange={(e) => setName(e.target.value)} />
                </Stack>
              </Grid>
              <Grid item xs={12} paddingBottom={1}>
                <Stack sx={{ justifyContent: "space-between", alignItems: "center" }} direction={"row"}>
                  <Typography>{t("CRUD.Email")}:</Typography>
                  <TextField id="email" label="Email" value={email} onChange={(e) => setEmail(e.target.value)} />
                </Stack>
              </Grid>
              <Grid item xs={12} paddingBottom={1}>
                <Stack sx={{ justifyContent: "space-between", alignItems: "center" }} direction={"row"}>
                  <Typography>{t("CRUD.Title")}:</Typography>
                  <TextField id="title" label="Title" value={title} onChange={(e) => setTitle(e.target.value)} />
                </Stack>
              </Grid>
              <Grid item xs={12} paddingBottom={1}>
                <Stack sx={{ justifyContent: "space-between", alignItems: "center" }} direction={"row"}>
                  <Typography>{t("CRUD.Department")}:</Typography>
                  <TextField id="department" label="Department" value={department} onChange={(e) => setDepartment(e.target.value)} />
                </Stack>
              </Grid>
              <Grid item xs={12} paddingBottom={1}>
                <Stack sx={{ justifyContent: "space-between", alignItems: "center" }} direction={"row"}>
                  <Typography>{t("CRUD.Address")}:</Typography>
                  <TextField id="address" label="Address" value={address} onChange={(e) => setAddress(e.target.value)} />
                </Stack>
              </Grid>
              <Grid item xs={12} paddingBottom={1}>
                <Stack sx={{ justifyContent: "space-between", alignItems: "center" }} direction={"row"}>
                  <Typography>{t("CRUD.PhoneNumber")}:</Typography>
                  <TextField id="phone" label="Phone Number" value={phone} onChange={(e) => setPhone(e.target.value)} />
                </Stack>
              </Grid>
              <Grid item xs={12} paddingBottom={1}>
                <Stack sx={{ justifyContent: "space-between", alignItems: "center" }} direction={"row"}>
                  <Typography>{t("CRUD.Password")}:</Typography>
                  <TextField id="password" label="Password" value={password} onChange={(e) => setPassword(e.target.value)} />
                </Stack>
              </Grid>
              
              <Grid item xs={12} paddingBottom={1}>
                <Stack sx={{ justifyContent: "space-between", alignItems: "center" }} direction={"row"}>
                  <Typography>{t("CRUD.Role")}:</Typography>
                  <RadioGroup
                    row
                    aria-labelledby="demo-row-radio-buttons-group-label"
                    name="row-radio-buttons-group"
                    value={role ? 'admin' : 'manager'}
                    onChange={handleRoleChange}
                  >
                    <FormControlLabel value="admin" control={<Radio />} label={t("CRUD.Admin")} />
                    <FormControlLabel value="manager" control={<Radio />} label={t("CRUD.Handler")} />
                  </RadioGroup>
                </Stack>
              </Grid>
            </Grid>
            <ButtonPrimary variant="contained" color="primary" onClick={handleSave}>
            {t("CRUD.Save")}
          </ButtonPrimary>
          </form>
        </Box>
      </DialogContent>
    </Dialog >
  );
}