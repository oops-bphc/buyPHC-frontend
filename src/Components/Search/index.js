import React from "react";
import {
  IconButton,
  Backdrop,
  Fade,
  Modal,
  Box,
  Typography,
  Input,
  ListItem,
} from "@mui/material";
import SearchIcon from "@mui/icons-material/Search";
import CloseIcon from "@mui/icons-material/Close";
import { Link } from "react-router-dom";
import { ReactComponent as UndrawLocationSearch } from "../../Media/UndrawLocationSearch.svg";
import { ReactComponent as UndrawVoid } from "../../Media/UndrawVoid.svg";

export default function SearchModal({ data }) {
  const [open, setOpen] = React.useState(false);
  const [searchWord, setSearchWord] = React.useState("");
  const [cursor, setCursor] = React.useState(null);
  const [filterData, setFilterData] = React.useState([]);

  // const [border, setBorder] = React.useState("0.75rem 0.75rem 0 0");

  const handleOpen = () => {
    setOpen(true);
  };

  const handleClose = (e) => {
    setOpen(false);
    setCursor(null);
    setSearchWord("");
    setFilterData([]);
  };

  const handleFilter = (event) => {
    const searchWord = event.target.value;
    setSearchWord(searchWord);

    if (searchWord !== "") {
      setFilterData(
        data.filter(({ name }) =>
          name.toLowerCase().includes(searchWord.toLowerCase())
        )
      );
    } else {
      setFilterData([]);
    }
  };

  const handleCursor = (event) => {
    if (event.keyCode === 38 && cursor !== 0) {
      setCursor((cursor) => cursor - 1);
    }
    if (event.keyCode === 38 && cursor === 0) {
      setCursor(null);
    }
    if (event.keyCode === 40 && cursor !== 7) {
      setCursor((cursor) => cursor + 1);
    }
    if (event.keyCode === 40 && cursor === null) {
      setCursor(0);
    }
    if (event.keyCode === 13) {
      document.getElementsByClassName("active-listitem")[0].click();
    }
  };

  console.log(filterData);
  return (
    <div>
      <IconButton aria-label="Search" color="primary" onClick={handleOpen}>
        <SearchIcon />
      </IconButton>
      <Modal
        aria-labelledby="transition-modal-title"
        aria-describedby="transition-modal-description"
        open={open}
        onClose={handleClose}
        closeAfterTransition
        BackdropComponent={Backdrop}
        BackdropProps={{
          timeout: 1000,
        }}
        sx={{ backgroundColor: "rgba(0,0,0,0.85)" }}
      >
        <Fade>
          <>
            <Box
              sx={{
                width: "100%",
                display: "flex",
                justifyContent: "center",
              }}
            >
              <Input
                autoFocus
                sx={{
                  borderRadius: "0.75rem 0.75rem 0 0",
                  backgroundColor: "rgba(34,34,34,0.7)",
                  WebkitBackdropFilter: "blur(10px) saturate(180%)",
                  backdropFilter: "blur(10px) saturate(180%)",
                  boxShadow: "0px -1px 5px 0px rgba(255,255,255,0.5)",
                  border: "0.01rem solid rgba(255,255,255,0.2)",
                  color: "secondary.main",
                  width: { xs: "100%", md: "50%" },
                  paddingX: 2,
                  paddingY: 1,
                  position: "relative",
                  marginTop: { xs: 0, md: "15%" },
                }}
                placeholder="Search..."
                onChange={handleFilter}
                onKeyDown={handleCursor}
              />
              <IconButton
                aria-label="closeModal"
                sx={{
                  position: "relative",
                  marginTop: { xs: 0, md: "15%" },
                  marginLeft: -5,
                }}
                onClick={handleClose}
              >
                <CloseIcon color="primary" />
              </IconButton>
            </Box>
            <Box
              sx={{
                width: "100%",
                display: "flex",
                justifyContent: "center",
              }}
            >
              <Box
                sx={{
                  backgroundColor: "rgba(34,34,34,0.7)",
                  WebkitBackdropFilter: "blur(10px) saturate(180%)",
                  backdropFilter: "blur(10px) saturate(180%)",
                  boxShadow: "0px 1px 5px 0px rgba(255,255,255,0.5)",
                  border: "0.01rem solid rgba(255,255,255,0.2)",
                  borderRadius: "0 0 0.75rem 0.75rem",
                  color: "secondary.main",
                  width: { xs: "100%", md: "50%" },
                }}
              >
                {filterData?.map((item, id) => (
                  <Link
                    key={id}
                    to={`/product?id=${item.id}`}
                    onClick={handleClose}
                    className={cursor === id ? "active-listitem" : null}
                    role={"button"}
                  >
                    <ListItem
                      sx={{
                        width: "100%",
                        paddingY: 1.5,
                        ":hover": {
                          background: "#222222",
                        },
                        background: cursor === id ? "#222222" : null,
                      }}
                    >
                      <Typography
                        variant="subtitle1"
                        sx={{
                          color: item.name ? "primary.main" : "secondary.main",
                          fontWeight: 400,
                        }}
                      >
                        {item.name}
                      </Typography>
                    </ListItem>
                  </Link>
                ))}
                {filterData?.length > 7 ? (
                  <Link
                    to={`/search?search=${searchWord}`}
                    onClick={handleClose}
                    className={cursor === 7 ? "active-listitem" : null}
                    role={"button"}
                  >
                    <ListItem
                      sx={{
                        width: "100%",
                        ":hover": {
                          background: "#222222",
                        },
                        background: cursor === 7 ? "#222222" : null,
                      }}
                    >
                      <Typography
                        variant="body2"
                        color="primary"
                        sx={{
                          fontWeight: 400,
                        }}
                      >
                        Show all
                      </Typography>
                    </ListItem>
                  </Link>
                ) : null}
              </Box>
            </Box>
            {(filterData?.length === 0) & (searchWord === "") ? (
              <UndrawLocationSearch
                style={{
                  position: "relative",
                  width: "50%",
                  height: "50%",
                  left: "50%",
                  transform: "translateX(-50%)",
                }}
              />
            ) : (filterData?.length === 0) & (searchWord !== "") ? (
              <UndrawVoid
                style={{
                  position: "relative",
                  width: "50%",
                  height: "50%",
                  left: "55%",
                  transform: "translateX(-50%)",
                }}
              />
            ) : null}
          </>
        </Fade>
      </Modal>
    </div>
  );
}
