import React, { useState } from "react";
import { TextField, Button, Grid, Input, Typography } from "@mui/material";
const ariaLabel = { "aria-label": "description" };

const ContactForm = () => {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    subject: "",
    message: "",
  });

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData({ ...formData, [name]: value });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    // You can implement your logic to send the email here
    console.log("Form submitted:", formData);
  };

  return (
    <form onSubmit={handleSubmit}>
      <Grid
        container
        spacing={0}
        padding={"50px"}
        sx={{
          borderColor: "#1796A0",
          border: "1px solid #1796A0",
          borderRadius: "20px",
        }}
        gap={5}
      >
        <Grid item xs={12}>
          <Typography fontWeight={500}>Your Name</Typography>

          <TextField
            variant="standard"
            fullWidth
            placeholder="Input your name"
            label="Input your Name"
            name="name"
            value={formData.name}
            onChange={handleChange}
          />
        </Grid>
        <Grid container justifyContent={"space-between"}>
          <Grid item xs={12} sm={5.4} md={5} lg={5.4}>
            <Typography fontWeight={500}>Your Email</Typography>

            <TextField
              variant="standard"
              fullWidth
              placeholder="Input your email"
              label="Your Email"
              name="email"
              type="email"
              value={formData.email}
              onChange={handleChange}
            />
          </Grid>
          <Grid item xs={12} sm={5.4} md={5} lg={5.4}>
            <Typography fontWeight={500}>Your Subject</Typography>

            <TextField
              variant="standard"
              fullWidth
              placeholder="Input your subject"
              label="Subject"
              name="subject"
              value={formData.subject}
              onChange={handleChange}
            />
          </Grid>
        </Grid>
        <Grid item xs={12}>
          <Typography fontWeight={500}>Your Message</Typography>
          <TextField
            variant="standard"
            fullWidth
            placeholder="Write your message"
            label="Message"
            name="message"
            multiline
            rows={4}
            value={formData.message}
            onChange={handleChange}
          />
        </Grid>
        <Grid item xs={12}>
          <Button
            type="submit"
            variant="contained"
            color="secondary"
            sx={{
              boxShadow: "none",
              ":hover": {
                color: "white",
                backgroundColor: "black",
              },
            }}
          >
            Send Message
          </Button>
        </Grid>
      </Grid>
    </form>
  );
};

export default ContactForm;
