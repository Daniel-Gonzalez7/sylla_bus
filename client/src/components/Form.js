import React, { useState } from "react";
import {
  Checkbox,
  Paper,
  TextField,
  Typography,
  FormControlLabel,
} from "@mui/material";
import { Container } from "@material-ui/core"; //the Container component from @mui/material wouldn't work for me :(
import { Grid, Button, styled } from "@mui/material";
import { TimePicker } from "@mui/lab";
import AdapterDateFns from "@mui/lab/AdapterDateFns";
import LocalizationProvider from "@mui/lab/LocalizationProvider";
import theme from "../theme";

const MEETINGDAYS = ["Monday", "Tuesday", "Wednesday", "Thursday", "Friday"];

const Form = () => {
  const [formData, setFormData] = useState({
    courseTitle: "XYZ4000",
    instructor: "My Instructor",
    instructorEmail: "myinstructor@fsu.edu",
    room: "",
    school: "My University",
    phoneNumber: "(813)-458-2674",
    objectives: "Course Objectives",
    academicPolicy: "Academic Policy",
    textbook: "",
    gradingNotes: "The Final Grade will be determined by ...",
    //figure out a way to do letter grade distribution
    attendancePolicy: "Students are expected to show up for class",
    accomodations: "Students with Disablilities ___",
    meetingTimeStart: new Date("2020-01-01 12:00"),
    meetingTimeEnd: new Date("2020-01-01 12:00"),
    meetingDates: [],
  });

  const FormButton = styled(
    Button,
    {}
  )({
    color: theme.palette.primary.main,
  });

  return (
    <>
      <Container maxWidth="lg">
        <div>(leave blank if not applicable)</div>
        <form noValidate autoComplete="off">
          <Grid
            container
            spacing={1}
            justifyContent="center"
            alignItems="center"
          >
            <Grid item xs={12} sm={12} md={2}>
              <TextField
                variant="filled"
                label="Instructor Name"
                placeholder="Daniel Gonzalez"
              />
            </Grid>
            <Grid item xs={12} sm={12} md={2}>
              <TextField
                variant="filled"
                label="Course Title"
                placeholder="XXX4000"
              />
            </Grid>
            <Grid item xs={12} sm={12} md={2}>
              <TextField
                variant="filled"
                label="School Name"
                placeholder="Florida State University"
              />
            </Grid>
            <Grid item xs={12} sm={12} md={2}>
              <TextField
                variant="filled"
                label="Instructor Email"
                placeholder="dg18c@fsu.edu"
              />
            </Grid>
            <Grid item xs={12} sm={12} md={2}>
              <LocalizationProvider dateAdapter={AdapterDateFns}>
                <TimePicker
                  renderInput={(params) => <TextField {...params} />}
                  value={formData.meetingTimeStart}
                  label="Start Time"
                  onChange={(newValue) => {
                    setFormData({ ...formData, meetingTimeStart: newValue });
                  }}
                />
              </LocalizationProvider>
            </Grid>
            <Grid item xs={12} sm={12} md={2}>
              <LocalizationProvider dateAdapter={AdapterDateFns}>
                <TimePicker
                  variant="filled"
                  renderInput={(params) => <TextField {...params} />}
                  value={formData.meetingTimeEnd}
                  label="End Time"
                  onChange={(newValue) => {
                    setFormData({ ...formData, meetingTimeEnd: newValue });
                  }}
                />
              </LocalizationProvider>
            </Grid>

            <Grid item xs={12} sm={12} md={2}>
              <TextField variant="filled" label="Room" placeholder="EOA 1045" />
            </Grid>

            <Grid item xs={12} sm={12} md={2}>
              <TextField
                variant="filled"
                label="Phone Number"
                placeholder="(XXX)-111-1111"
              />
            </Grid>
            <Grid item xs={12} sm={12} md={8}>
              <TextField
                fullWidth={true}
                variant="filled"
                label="Textbook"
                placeholder="Understanding Earth by John Grotzinger & Thomas H. Jordan. First Edition."
              />
            </Grid>
            {MEETINGDAYS.map((day, i) => {
              return (
                <Grid item xs={12} sm={12} md={2}>
                  <FormControlLabel
                    control={<Checkbox defaultChecked />}
                    label={day}
                  />
                </Grid>
              );
            })}
            <Grid item xs={12} sm={12} md={12}>
              <TextField
                fullWidth={true}
                multiline={true}
                variant="filled"
                label="Course Objectives"
                placeholder="This course is designed to provide you with an overview of the 
physical and chemical processes that have shaped the Earth in the past..."
              />
            </Grid>

            <Grid item xs={12} sm={12} md={12}>
              <TextField
                fullWidth={true}
                multiline={true}
                variant="filled"
                label="Grading Notes"
                placeholder="Your final grade will be based on two midterm exams, a final exam and your
final lab grade. Each exam is worth 25% and your lab score is worth 25%..."
              />
            </Grid>
            <Grid item xs={12} sm={12} md={12}>
              <TextField
                fullWidth={true}
                multiline={true}
                variant="filled"
                label="Attendance Policy"
                placeholder="Excused absences include documented illness, deaths in the family and other documented
crises, call to active military duty or jury duty, religious holy days..."
              />
            </Grid>
            <Grid item xs={12} sm={12} md={12}>
              <TextField
                fullWidth={true}
                multiline={true}
                variant="filled"
                label="Accomodations for Students with Disabilities"
                placeholder="Students with disabilities needing academic accommodation should:
(1) register with and provide documentation to the Student Disability Resource Center; and
(2) bring a letter to the instructor indicating the need for accommodation and what type."
              />
            </Grid>
          </Grid>
        </form>
        <FormButton fullWidth>Generate Syllabus</FormButton>
      </Container>
    </>
  );
};

export default Form;
