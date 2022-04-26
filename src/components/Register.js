import {
  Avatar,
  Button,
  Grid,
  Paper,
  TextField,
  Typography,
} from "@material-ui/core";
import React from "react";
import AddCircleOutlineOutlinedIcon from "@mui/icons-material/AddCircleOutlineOutlined";
import Radio from "@mui/material/Radio";
import RadioGroup from "@mui/material/RadioGroup";
import FormControlLabel from "@mui/material/FormControlLabel";
import FormControl from "@mui/material/FormControl";
import Checkbox from "@mui/material/Checkbox";
import FormLabel from "@mui/material/FormLabel";
import { Form, Formik, Field, ErrorMessage } from "formik";
import { FormHelperText } from "@material-ui/core";
import * as Yup from "yup";
import TextareaAutosize from '@mui/material/TextareaAutosize';

function Register() {
  const paperStyle = { padding: "30px 20px", width: 300, margin: "20px auto" };
  const headerStyle = { margin: 0 };
  const avatarStyle = { backgroundColor: "green" };
  const initialValues = {
    name: "",
    email: "",
    gender: "",
    phonenumber: "",
    password: "",
    confirmpassword: "",
    termsandConditions: false,
    country: "",
    state: "",
    city: "",
  };
  const validationSchema = Yup.object().shape({
    name: Yup.string().min(3, "its too short").required("Required"),
    email: Yup.string().email("Enter valid email").required("Required"),
    gender: Yup.string()
      .oneOf(["male", "female"], "Required")
      .required("Required"),
    phonenumber: Yup.number()
      .typeError("Please enter the valid phone number")
      .required("Required"),
    password: Yup.string()
      .min(8, "Password must be at least 8 characters")
      .required("Required"),
    confirmpassword: Yup.string()
      .oneOf([Yup.ref("password")], "Password not matched")
      .required("Required"),
    termsandConditions: Yup.string().oneOf(
      ["true"],
      "Accept terms & conditions"
    ),
    country: Yup.string().min(2, "its too short").required("Required"),
    city: Yup.string().required("Required"),
    state: Yup.string().required("Required"),
  });
  const onSubmit = (values, props) => {
    console.log(values);
    setTimeout(() => {
      props.resetForm();
      props.setSubmitting(false);
    }, 2000);
  };
  return (
    <Grid>
      <Paper elevation={20} style={paperStyle}>
        <Grid align="center">
          <Avatar style={avatarStyle}>
            <AddCircleOutlineOutlinedIcon />
          </Avatar>
          <h2 style={headerStyle}>Register</h2>
          <Typography variant="caption">
            Please fill this form to create an account!
          </Typography>
        </Grid>
        <Formik
          initialValues={initialValues}
          validationSchema={validationSchema}
          onSubmit={onSubmit}
        >
          {(props) => (
            <Form>
              <Field
                as={TextField}
                fullWidth
                name="name"
                label="Name"
                placeholder="Enter your name"
                helperText={<ErrorMessage name="name" />}
              />
              <Field
                as={TextField}
                fullWidth
                name="email"
                label="Email"
                placeholder="Enter your email"
                helperText={<ErrorMessage name="email" />}
              />
              <FormControl style={{ marginTop: 10 }}>
                <FormLabel id="demo-radio-buttons-group-label">
                  Gender
                </FormLabel>
                <Field
                  as={RadioGroup}
                  aria-labelledby="demo-radio-buttons-group-label"
                  name="gender"
                  style={{ display: "initial" }}
                >
                  <FormControlLabel
                    value="female"
                    control={<Radio />}
                    label="Female"
                  />
                  <FormControlLabel
                    value="male"
                    control={<Radio />}
                    label="Male"
                  />
                </Field>
              </FormControl>
              <FormHelperText>
                <ErrorMessage name="gender" />
              </FormHelperText>
              <Field
                as={TextField}
                fullWidth
                name="phonenumber"
                label="Phone Number"
                placeholder="Enter your phone number"
                helperText={<ErrorMessage name="phonenumber" />}
              />
              <Field
                as={TextField}
                fullWidth
                name="country"
                label="Country"
                placeholder="Enter your Country"
                helperText={<ErrorMessage name="country" />}
              />
              <Field
                as={TextField}
                fullWidth
                name="state"
                label="State"
                placeholder="Enter your state"
                helperText={<ErrorMessage name="state" />}
              />
              <Field
                as={TextField}
                fullWidth
                name="city"
                label="City"
                placeholder="Enter your city"
                helperText={<ErrorMessage name="city" />}
              />
              <Field
                as={TextField}
                fullWidth
                name="password"
                label="Password"
                type="password"
                placeholder="Enter your password"
                helperText={<ErrorMessage name="password" />}
              />
              <Field
                as={TextField}
                fullWidth
                name="confirmpassword"
                label="Confirm Password"
                type="password"
                placeholder="Confirm your password"
                helperText={<ErrorMessage name="confirmpassword" />}
              />
              <TextareaAutosize
                aria-label="minimum height"
                minRows={3}
                placeholder="Enter your message"
                style={{ width: 300, marginTop:"3px"}}
              />
              <FormControlLabel
                control={<Field as={Checkbox} name="termsandConditions" />}
                label="I accept the terms and conditions."
              />
              <FormHelperText>
                <ErrorMessage name="termsandConditions" />
              </FormHelperText>
              <Button
                type="submit"
                variant="contained"
                color="primary"
                disabled={props.isSubmitting}
              >
                {props.isSubmitting ? "Loading" : "Register"}
              </Button>
            </Form>
          )}
        </Formik>
      </Paper>
    </Grid>
  );
}

export default Register;
