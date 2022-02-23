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
    courseTitle: "",
    instructor: "",
    email: "",
    room: "",
    school: "",
    courseCode: "",
    courseObjectives: "",
    academicPolicy: "",
    textbook: "",
    gradingNotes: "",
    //figure out a way to do letter grade distribution
    attendancePolicy: "",
    accomodations: "",
    meetingTimeStart: new Date("2020-01-01 12:00"),
    meetingTimeEnd: new Date("2020-01-01 12:00"),
    meetingDates: [true, false, true, false, true],
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
                onChange={(e) => {
                  setFormData({
                    ...formData,
                    instructor: e.target.value,
                  });
                }}
              />
            </Grid>
            <Grid item xs={12} sm={12} md={2}>
              <TextField
                variant="filled"
                label="Course Title"
                placeholder="Intro to Geology"
                onChange={(e) => {
                  setFormData({
                    ...formData,
                    courseTitle: e.target.value,
                  });
                }}
              />
            </Grid>
            <Grid item xs={12} sm={12} md={2}>
              <TextField
                variant="filled"
                label="School Name"
                placeholder="Florida State University"
                onChange={(e) => {
                  setFormData({
                    ...formData,
                    school: e.target.value,
                  });
                }}
              />
            </Grid>
            <Grid item xs={12} sm={12} md={2}>
              <TextField
                variant="filled"
                label="Instructor Email"
                placeholder="dg18c@fsu.edu"
                onChange={(e) => {
                  setFormData({
                    ...formData,
                    email: e.target.value,
                  });
                }}
              />
            </Grid>
            <Grid item xs={12} sm={12} md={2}>
              <LocalizationProvider dateAdapter={AdapterDateFns}>
                <TimePicker
                  renderInput={(params) => <TextField {...params} />}
                  value={formData.meetingTimeStart}
                  label="Start Time"
                  onChange={(e) => {
                    setFormData({
                      ...formData,
                      meetingTimeStart: e.target.value,
                    });
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
                    setFormData({
                      ...formData,
                      meetingTimeEnd: newValue.toString(),
                    });
                  }}
                />
              </LocalizationProvider>
            </Grid>

            <Grid item xs={12} sm={12} md={2}>
              <TextField
                variant="filled"
                label="Room"
                placeholder="EOA 1045"
                onChange={(val) =>
                  setFormData({
                    ...formData,
                    room: val.target.value,
                  })
                }
              />
            </Grid>

            <Grid item xs={12} sm={12} md={2}>
              <TextField
                variant="filled"
                label="Course Code"
                placeholder="XXX4000"
                onChange={(val) =>
                  setFormData({
                    ...formData,
                    courseCode: val.target.value,
                  })
                }
              />
            </Grid>
            <Grid item xs={12} sm={12} md={8}>
              <TextField
                fullWidth={true}
                variant="filled"
                label="Textbook"
                onChange={(val) =>
                  setFormData({ ...formData, textbook: val.target.value })
                }
                placeholder="Understanding Earth by John Grotzinger & Thomas H. Jordan. First Edition."
              />
            </Grid>
            {MEETINGDAYS.map((day, i) => {
              return (
                <Grid key={`day ${day}`} item xs={12} sm={12} md={2}>
                  <FormControlLabel
                    control={<Checkbox />}
                    label={day}
                    checked={formData.meetingDates[i]}
                    onChange={(e) => {
                      let newDays = formData.meetingDates.slice();
                      newDays[i] = e.target.checked;
                      setFormData({ ...formData, meetingDates: newDays });
                    }}
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
                onChange={(val) =>
                  setFormData({
                    ...formData,
                    courseObjectives: val.target.value,
                  })
                }
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
                onChange={(val) =>
                  setFormData({
                    ...formData,
                    gradingNotes: val.target.value,
                  })
                }
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
                onChange={(val) =>
                  setFormData({
                    ...formData,
                    attendancePolicy: val.target.value,
                  })
                }
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
                onChange={(val) =>
                  setFormData({
                    ...formData,
                    accomodations: val.target.value,
                  })
                }
              />
            </Grid>
            <Grid item xs={12} sm={12} md={12}>
              <TextField
                fullWidth={true}
                multiline={true}
                variant="filled"
                label="Academic Honor Policy"
                placeholder="The Florida State University Academic Honor Policy outlines the 
University's expectations for the integrity of students' academic work, the procedures for 
resolving alleged violations of those expectations, and the rights and responsibilities of students 
and faculty members throughout the process.  Students are responsible for..."
                onChange={(val) =>
                  setFormData({
                    ...formData,
                    academicPolicy: val.target.value,
                  })
                }
              />
            </Grid>
          </Grid>
        </form>
        <FormButton
          fullWidth
          onClick={() => alert("now we send over the data")}
        >
          Generate Syllabus
        </FormButton>
      </Container>
    </>
  );
};
//academicPolicy

export default Form;
