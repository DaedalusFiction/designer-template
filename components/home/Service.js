import { Check } from "@mui/icons-material";
import {
  Button,
  List,
  ListItem,
  ListItemIcon,
  ListItemText,
  Paper,
  Typography,
} from "@mui/material";
import { Box } from "@mui/system";
import Link from "next/link";
import SizedImage from "../general/SizedImage";

const Service = ({ service, preview }) => {
  return (
    <Paper
      sx={{
        transition: "300ms",
        "&:hover": {
          boxShadow: "5px 5px 5px rgba(0, 0, 0, 0.3)",
          transform: "translate(-3px, -3px)",
        },
      }}
    >
      <SizedImage height="12rem" width="100%" image={service.image} />
      <Box sx={{ padding: "2rem 1rem" }}>
        <Typography
          sx={{ textAlign: "center", fontWeight: "400" }}
          variant="h3"
        >
          {service.title}
        </Typography>
        <br />
        <Typography variant="h4" sx={{ textAlign: "center" }}>
          {service.price}
        </Typography>
        <br />
        <Typography sx={{ textAlign: "center" }}>
          {service.description}
        </Typography>
        <br />
        <br />
        {preview && (
          <Box>
            <Typography sx={{ mt: 4, mb: 2 }} variant="h6" component="div">
              Icon with text
            </Typography>

            <List dense>
              {service.features.map((feature) => {
                return (
                  <ListItem>
                    <ListItemIcon>
                      <Check />
                    </ListItemIcon>
                    <ListItemText
                      primary={feature.primaryText}
                      secondary={feature.secondaryText}
                    />
                  </ListItem>
                );
              })}
            </List>
          </Box>
        )}
        <Box className="flex-1" sx={{ justifyContent: "center" }}>
          <Link href="/about">
            <Button
              variant="contained"
              color="secondary"
              size="large"
              // tabIndex={-1}
            >
              {service.button.text}
            </Button>
          </Link>
        </Box>
      </Box>
    </Paper>
  );
};

export default Service;
