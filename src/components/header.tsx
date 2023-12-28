import {
  AppBar,
  Avatar,
  Box,
  Button,
  Container,
  IconButton,
  Menu,
  MenuItem,
  Toolbar,
  Tooltip,
  Typography,
} from "@mui/material";
import HeaderContext from "../contexts/header-context";

import _ from "lodash";

import MenuIcon from "@mui/icons-material/Menu";
import DevicesIcon from "@mui/icons-material/Devices";
import { useState } from "react";

export default function Header() {
  const title = "Dev Breno Macedo";
  const sessions = ["About me", "Experience", "Skills", "Projects"];

  const [anchorElNav, setAnchorElNav] = useState<null | HTMLElement>(null);
  const [anchorElUser, setAnchorElUser] = useState<null | HTMLElement>(null);

  const handleOpenNavMenu = (event: React.MouseEvent<HTMLElement>) => {
    setAnchorElNav(event.currentTarget);
  };
  const handleOpenUserMenu = (event: React.MouseEvent<HTMLElement>) => {
    setAnchorElUser(event.currentTarget);
  };

  const handleCloseNavMenu = () => {
    setAnchorElNav(null);
  };

  const handleCloseUserMenu = () => {
    setAnchorElUser(null);
  };

  return (
    <HeaderContext.Provider
      value={{
        anchorElNav,
        anchorElUser,
        setAnchorElNav,
        setAnchorElUser,
        handleCloseNavMenu,
        handleCloseUserMenu,
        handleOpenNavMenu,
        handleOpenUserMenu,
        sessions,
        title,
      }}
    >
      <AppBar position="fixed">
        <Container maxWidth="xl">
          <Toolbar disableGutters sx={{ alignItems: "center" }}>
            <MediumDevicesComponents />
            <ExtraSmallDevicesComponents />
          </Toolbar>
        </Container>
      </AppBar>
    </HeaderContext.Provider>
  );
}

function MediumDevicesComponents(props: any) {
  const display = { flex: { xs: "none", md: "flex" } };

  return (
    <HeaderContext.Consumer>
      {(context) => (
        <>
          <DevicesIcon
            sx={{
              display: display.flex,
              mx: 1,
              width: "6rem",
              height: "6rem",
            }}
          />
          <Typography
            variant="h4"
            noWrap
            component="p"
            sx={{
              mx: 2,
              display: display.flex,
              cursor: "default",
              fontFamily: "'Inter', sans-serif",
              fontWeight: 600,
              letterSpacing: ".2rem",
              color: "white",
            }}
          >
            {context.title}
          </Typography>

          <Box
            sx={{ flexGrow: 1, display: display.flex, justifyContent: "end" }}
          >
            {context.sessions.map((session: string) => (
              <Button
                key={session}
                onClick={context.handleCloseNavMenu}
                sx={{
                  my: 2,
                  display: "block",
                }}
              >
                <Typography
                  textAlign="center"
                  sx={{
                    textDecoration: "none",
                    color: "white",
                    fontSize: "1.2rem",
                    fontWeight: "500",
                  }}
                  component="a"
                  href={`#${_.toLower(session).replaceAll(" ", "_")}`}
                >
                  {session}
                </Typography>
              </Button>
            ))}
          </Box>
        </>
      )}
    </HeaderContext.Consumer>
  );
}

function ExtraSmallDevicesComponents(props: any) {
  const display = {
    flex: { xs: "flex", md: "none" },
    block: { xs: "block", md: "none" },
  };

  return (
    <HeaderContext.Consumer>
      {(context) => (
        <>
          <Box sx={{ flexGrow: 1, display: display.flex }}>
            <IconButton
              size="large"
              aria-label="account of current user"
              aria-controls="menu-appbar"
              aria-haspopup="true"
              onClick={context.handleOpenNavMenu}
              color="inherit"
            >
              <MenuIcon sx={{ width: "3rem", height: "3rem" }} />
            </IconButton>
            <Menu
              id="menu-appbar"
              anchorEl={context.anchorElNav}
              anchorOrigin={{
                vertical: "bottom",
                horizontal: "left",
              }}
              keepMounted
              transformOrigin={{
                vertical: "top",
                horizontal: "left",
              }}
              open={Boolean(context.anchorElNav)}
              onClose={context.handleCloseNavMenu}
              sx={{
                display: display.block,
              }}
            >
              {context.sessions.map((session: string) => (
                <MenuItem key={session} onClick={context.handleCloseNavMenu}>
                  <Typography
                    textAlign="center"
                    sx={{
                      fontSize: "1.4rem",
                      textDecoration: "none",
                      color: "black",
                    }}
                    component="a"
                    href={`#${_.toLower(session).replaceAll(" ", "_")}`}
                  >
                    {session}
                  </Typography>
                </MenuItem>
              ))}
            </Menu>
          </Box>{" "}
          <DevicesIcon
            sx={{ display: display.flex, mr: 1, width: "4rem", height: "4rem" }}
          />
          <Typography
            variant="h5"
            noWrap
            component="p"
            sx={{
              mr: 2,
              display: display.flex,
              flexGrow: 1,
              cursor: "default",
              fontFamily: "'Inter', sans-serif",
              fontWeight: 600,
              letterSpacing: ".2rem",
              color: "white",
            }}
          >
            {context.title}
          </Typography>
        </>
      )}
    </HeaderContext.Consumer>
  );
}
