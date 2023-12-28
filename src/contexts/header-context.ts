import { createContext } from "react"

type HeaderType = {

    title: string;
    sessions: string[];
    anchorElNav: HTMLElement | null;
    setAnchorElNav: React.Dispatch<React.SetStateAction<HTMLElement | null>>;
    anchorElUser: HTMLElement | null;
    setAnchorElUser: React.Dispatch<React.SetStateAction<HTMLElement | null>>;
    handleOpenNavMenu: (event: React.MouseEvent<HTMLElement>) => void;
    handleOpenUserMenu: (event: React.MouseEvent<HTMLElement>) => void;
    handleCloseNavMenu: () => void;
    handleCloseUserMenu: () => void

}

const context = createContext<HeaderType>(
    {
        title: "Dev Breno Macedo",
        sessions: ["About me", "Experience", "Skills", "Projects"],
        anchorElNav: null,
        setAnchorElNav: () => { },
        anchorElUser: null,
        setAnchorElUser: () => { },
        handleOpenNavMenu: (event: React.MouseEvent<HTMLElement>) => {
        },
        handleOpenUserMenu: (event: React.MouseEvent<HTMLElement>) => {
        },
        handleCloseNavMenu: () => {
        },
        handleCloseUserMenu: () => {
        }
    }
)

export default context;