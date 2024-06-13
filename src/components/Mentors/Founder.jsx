import React from "react";
import Box from "@mui/material/Box";
import Typography from "@mui/material/Typography";
import List from "@mui/material/List";
import ListItem from "@mui/material/ListItem";
import ListItemIcon from "@mui/material/ListItemIcon";
import ListItemText from "@mui/material/ListItemText";
import Avatar from "@mui/material/Avatar";
import CheckCircleIcon from "@mui/icons-material/CheckCircle";

const Founder = ({ image, name, bio, experiences }) => {
  return (
    <Box
      sx={{
        display: "flex",
        flexDirection: { xs: "column", sm: "row" },
        alignItems: "center",
        gap: 4,
        p: 4,
        backgroundColor: "#f9f9f9",
        borderRadius: 2,
        boxShadow: 3,
      }}
    >
      <Box
        sx={{
          flexBasis: { xs: "100%", sm: "50%" },
          display: "flex",
          justifyContent: "center",
        }}
      >
        <Avatar
          src={image}
          alt={name}
          sx={{
            width: "100%",
            height: "auto",
            maxWidth: 300, // Max width to ensure it doesn't get too large
          }}
        />
      </Box>
      <Box
        sx={{
          flexBasis: { xs: "100%", sm: "50%" },
          textAlign: { xs: "center", sm: "left" },
        }}
      >
        <Typography
          component="p"
          variant="body1"
          color="text.primary"
          sx={{ mb: 3 }}
        >
          {bio}
        </Typography>
        <List>
          {experiences.map((experience, index) => (
            <ListItem key={index}>
              <ListItemIcon>
                <CheckCircleIcon color="success" />
              </ListItemIcon>
              <ListItemText primary={experience} />
            </ListItem>
          ))}
        </List>
      </Box>
    </Box>
  );
};

export default Founder;
