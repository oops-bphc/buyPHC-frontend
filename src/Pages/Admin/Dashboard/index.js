import * as React from "react";
import Box from "@mui/material/Box";
import Toolbar from "@mui/material/Toolbar";
import List from "@mui/material/List";
import Typography from "@mui/material/Typography";
import Divider from "@mui/material/Divider";
import Paper from "@mui/material/Paper";
import {
  Accordion,
  AccordionDetails,
  AccordionSummary,
  Container,
  ListItemButton,
  ListItemIcon,
  ListItemText,
} from "@mui/material";
import { DashboardSharp, Delete, Download, Edit } from "@mui/icons-material";
import { CustomIconButton } from "../../../Components/Button/CustomButton";
import { useNavigate } from "react-router-dom";

function Item({ item }) {
  const [hoverState, setHoverState] = React.useState(false);
  const navigate = useNavigate();
  return (
    <Paper
      sx={{ background: "#444", color: "white", padding: 2, my: 1 }}
      onMouseEnter={() => setHoverState(true)}
      onMouseLeave={() => setHoverState(false)}
    >
      <Typography>Name of the Product</Typography>
      <Typography>7 in stock</Typography>
      <CustomIconButton
        onClick={() =>
          navigate({
            pathname: "/product",
            search: `id=${1}`,
          })
        }
      >
        <Edit />
      </CustomIconButton>
      <CustomIconButton>
        <Delete style={{ color: "red" }} />
      </CustomIconButton>
      <Accordion
        expanded={hoverState}
        sx={{
          background: "transparent",
          color: "white",
          width: "100%",
        }}
      >
        <AccordionSummary>
          <Typography variant="body2">Hover for details</Typography>
        </AccordionSummary>
        <AccordionDetails>
          <Typography variant="subtitle1">Name: </Typography>
          <Typography variant="subtitle1">Price: </Typography>
          <Typography variant="subtitle1">Offer: </Typography>
          <Typography variant="subtitle1">Qty Available: </Typography>
          <Typography variant="subtitle1">Delivery Time: </Typography>
          <Typography variant="subtitle1">Category: </Typography>
          <Typography variant="subtitle1">Description: </Typography>
        </AccordionDetails>
      </Accordion>
    </Paper>
  );
}

function Report({ item }) {
  return (
    <Paper sx={{ background: "#444", color: "white", padding: 2, my: 1 }}>
      <Typography>Report about something</Typography>
      <CustomIconButton>
        <Download />
      </CustomIconButton>
    </Paper>
  );
}

export default function Dashboard() {
  const [menuItem, setMenuItem] = React.useState(1);

  React.useEffect(() => {}, [menuItem, setMenuItem]);

  return (
    <Box sx={{ display: "flex", background: "black", top: 2 }}>
      <div
        style={{
          background: "black",
          width: 240,
          marginTop: 80,
          position: "sticky",
          top: 80,
        }}
      >
        <List component="nav">
          <ListItemButton
            onClick={() => setMenuItem(1)}
            sx={{
              transitionDuration: "0.2s",
              "&:hover": {
                background: "#222",
              },
            }}
          >
            <ListItemIcon>
              <DashboardSharp style={{ color: "white" }} />
            </ListItemIcon>
            <ListItemText primary="All Items" />
          </ListItemButton>
          <ListItemButton
            onClick={() => setMenuItem(2)}
            sx={{
              transitionDuration: "0.2s",
              "&:hover": {
                background: "#222",
              },
            }}
          >
            <ListItemIcon>
              <DashboardSharp style={{ color: "white" }} />
            </ListItemIcon>
            <ListItemText primary="In stock Items" />
          </ListItemButton>
          <ListItemButton
            onClick={() => setMenuItem(3)}
            sx={{
              transitionDuration: "0.2s",
              "&:hover": {
                background: "#222",
              },
            }}
          >
            <ListItemIcon>
              <DashboardSharp style={{ color: "white" }} />
            </ListItemIcon>
            <ListItemText primary="Out of stock Items" />
          </ListItemButton>

          <Divider sx={{ my: 1, background: "white" }} />

          <ListItemButton
            onClick={() => setMenuItem(4)}
            sx={{
              transitionDuration: "0.2s",
              "&:hover": {
                background: "#222",
              },
            }}
          >
            <ListItemIcon>
              <DashboardSharp style={{ color: "white" }} />
            </ListItemIcon>
            <ListItemText primary="Generate Report" />
          </ListItemButton>
          <Divider sx={{ my: 1, background: "white" }} />

          <ListItemButton
            onClick={() => setMenuItem(4)}
            sx={{
              transitionDuration: "0.2s",
              "&:hover": {
                background: "#222",
              },
            }}
          >
            <ListItemIcon>
              <DashboardSharp style={{ color: "white" }} />
            </ListItemIcon>
            <ListItemText primary="Manage Managers" />
          </ListItemButton>

          <ListItemButton
            onClick={() => setMenuItem(4)}
            sx={{
              transitionDuration: "0.2s",
              "&:hover": {
                background: "#222",
              },
            }}
          >
            <ListItemIcon>
              <DashboardSharp style={{ color: "white" }} />
            </ListItemIcon>
            <ListItemText primary="Manage Users" />
          </ListItemButton>
        </List>
      </div>
      <Box
        component="main"
        sx={{
          backgroundColor: "#333333",
          flexGrow: 1,
          height: "100vh",
          overflow: "auto",
        }}
      >
        <Toolbar />
        <Container maxWidth="lg" sx={{ mt: 4, mb: 4 }}>
          {menuItem === 1
            ? [1, 1, 1, 1, 1, 1, 1, 1].map((item) => <Item />)
            : [1, 1, 1, 1, 1, 1, 1, 1].map((item) => <Report />)}
        </Container>
      </Box>
    </Box>
  );
}
