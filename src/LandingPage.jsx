import React, { useState } from "react";
import {
  AppBar,
  Toolbar,
  Container,
  Typography,
  Grid,
  Card,
  CardMedia,
  CardContent,
  Button,
  Dialog,
  DialogTitle,
  DialogContent,
  TextField,
  DialogActions,
  Box,
} from "@mui/material";
import { useNavigate } from "react-router-dom";
import c1 from "../src/assets/c1.webp";
import c2 from "../src/assets/c2.jpg";
import c3 from "../src/assets/c3.jpg";
import c4 from "../src/assets/c4.jpg";
const courses = [
  {
    id: 1,
    name: "Machine Learning",
    code: "CS771",
    credits: 9,
    description: "An advanced course on machine learning algorithms.",
    image: c1, // Placeholder image
  },
  {
    id: 2,
    name: "Data Structures",
    code: "ESO207",
    credits: 11,
    description: "Learn about arrays, linked lists, trees, and more.",
    image: c2, // Placeholder image
  },
  {
    id: 3,
    name: "Artificial Intelligence",
    code: "CS778",
    credits: 9,
    description:
      "Explore the fundamentals of AI, including neural networks, search algorithms, and more.",
    image: c3, // Placeholder image
  },
  {
    id: 4,
    name: "Web Development",
    code: "CS601",
    credits: 6,
    description:
      "Build full-stack web applications using modern frameworks like React and Node.js.",
    image: c4, // Placeholder image
  },
];

const LandingPage = () => {
  const [openEdit, setOpenEdit] = useState(false);
  const [openAdd, setOpenAdd] = useState(false);
  const [selectedCourse, setSelectedCourse] = useState(null);
  const [newCourse, setNewCourse] = useState({
    name: "",
    code: "",
    credits: "",
    description: "",
  });

  const navigate = useNavigate();

  const handleEditClick = (course) => {
    setSelectedCourse(course);
    setOpenEdit(true);
  };

  const handleCloseEdit = () => {
    setOpenEdit(false);
    setSelectedCourse(null);
  };

  const handleAddCourse = () => {
    setOpenAdd(true);
  };

  const handleCloseAdd = () => {
    setOpenAdd(false);
    setNewCourse({ name: "", code: "", credits: "", description: "" });
  };

  return (
    <Box
      sx={{
        display: "flex",
        flexDirection: "column",
        minHeight: "100vh",
      }}
    >
      {/* Title Bar */}
      <AppBar position="static">
        <Toolbar>
          <Typography variant="h6" style={{ flexGrow: 1 }}>
            Course Helper
          </Typography>
          <Button
            color="inherit"
            onClick={() => navigate("/login")}
            style={{ marginLeft: "auto" }}
          >
            Login
          </Button>
        </Toolbar>
      </AppBar>

      {/* Main Content */}
      <Container
        sx={{
          flexGrow: 1,
          marginTop: 4,
          display: "flex",
          flexDirection: "column",
        }}
      >
        <Grid container spacing={3}>
          {courses.map((course) => (
            <Grid item xs={12} sm={6} md={4} key={course.id}>
              <Card
                sx={{
                  height: "100%",
                  display: "flex",
                  flexDirection: "column",
                }}
              >
                <CardMedia
                  component="img"
                  image={course.image}
                  alt={course.name}
                  height="150"
                />
                <CardContent
                  sx={{
                    flexGrow: 1,
                    display: "flex",
                    flexDirection: "column",
                    justifyContent: "space-between",
                  }}
                >
                  <div>
                    <Typography variant="h6">{course.name}</Typography>
                    <Typography variant="subtitle1">
                      Code: {course.code}
                    </Typography>
                    <Typography variant="subtitle2">
                      Credits: {course.credits}
                    </Typography>
                    <Typography variant="body2">{course.description}</Typography>
                  </div>
                  <Button
                    variant="contained"
                    color="primary"
                    sx={{ marginTop: 2 }}
                    onClick={() => handleEditClick(course)}
                  >
                    Edit
                  </Button>
                </CardContent>
              </Card>
            </Grid>
          ))}
        </Grid>
      </Container>

      {/* Footer */}
      <footer
        style={{
          padding: 16,
          backgroundColor: "#f0f0f0",
          textAlign: "center",
        }}
      >
        <Button variant="contained" color="success" onClick={handleAddCourse}>
          Add New Course
        </Button>
      </footer>

      {/* Edit Course Dialog */}
      <Dialog open={openEdit} onClose={handleCloseEdit}>
        <DialogTitle>Edit Course Details</DialogTitle>
        <DialogContent>
          {selectedCourse && (
            <>
              <TextField
                fullWidth
                label="Course Name"
                value={selectedCourse.name}
                margin="normal"
              />
              <TextField
                fullWidth
                label="Course Code"
                value={selectedCourse.code}
                margin="normal"
              />
              <TextField
                fullWidth
                label="Credits"
                value={selectedCourse.credits}
                margin="normal"
              />
              <TextField
                fullWidth
                label="Description"
                value={selectedCourse.description}
                margin="normal"
              />
            </>
          )}
        </DialogContent>
        <DialogActions>
          <Button variant="contained" color="primary">
            Update
          </Button>
          <Button variant="contained" color="error" onClick={handleCloseEdit}>
            Cancel
          </Button>
        </DialogActions>
      </Dialog>

      {/* Add New Course Dialog */}
      <Dialog open={openAdd} onClose={handleCloseAdd}>
        <DialogTitle>Add New Course</DialogTitle>
        <DialogContent>
          <TextField
            fullWidth
            label="Course Name"
            value={newCourse.name}
            onChange={(e) =>
              setNewCourse((prev) => ({ ...prev, name: e.target.value }))
            }
            margin="normal"
          />
          <TextField
            fullWidth
            label="Course Code"
            value={newCourse.code}
            onChange={(e) =>
              setNewCourse((prev) => ({ ...prev, code: e.target.value }))
            }
            margin="normal"
          />
          <TextField
            fullWidth
            label="Credits"
            value={newCourse.credits}
            onChange={(e) =>
              setNewCourse((prev) => ({ ...prev, credits: e.target.value }))
            }
            margin="normal"
          />
          <TextField
            fullWidth
            label="Description"
            value={newCourse.description}
            onChange={(e) =>
              setNewCourse((prev) => ({ ...prev, description: e.target.value }))
            }
            margin="normal"
          />
        </DialogContent>
        <DialogActions>
          <Button
            variant="contained"
            color="success"
            onClick={() => {
              console.log("New Course Added:", newCourse);
              handleCloseAdd();
            }}
          >
            Add
          </Button>
          <Button variant="contained" color="error" onClick={handleCloseAdd}>
            Cancel
          </Button>
        </DialogActions>
      </Dialog>
    </Box>
  );
};

export default LandingPage;

