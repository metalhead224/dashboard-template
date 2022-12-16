import { Avatar, IconButton, Tooltip, Typography } from "@mui/material";
import React from "react";
import CommonButton from "../../components/common/commonButton/CommonButton";
import NotificationsBell from "../../components/common/notificationsBell/NotificationsBell";
import HelpIcon from "@mui/icons-material/Help";
import { Box } from "@mui/system";

const Navbar = ({title}) => {

  const headerStyles = {
    wrapper: {
        width: '100%',
        display: 'flex',
        flexDirection: 'column',
        backgroundColor: '#009be5',
        padding: '20px',
    },
    topRow: {
        display: 'flex',
        flexDirection: 'row',
        justifyContent: 'end',
        alignItems: 'center',
        marginBottom: '20px',
        '*': {
            marginRight: '5px',
        },
    },
    middleRow: {
        display: 'flex',
        flexDirection: 'row',
        alignItems: 'center',
        justifyContent: 'space-between',
        marginBottom: '20px',
        marginLeft: '320px',
    },
    link: {
        fontWeight: 500,
        color: 'rgba(255, 255, 255, 0.7)',
        "&:hover": {
            color: '#fff',
            cursor: 'pointer',
        },
    },
    webButton: {
        marginRight: '5px',
    },
};

  return (
    <Box sx={headerStyles.wrapper}>
            <Box sx={headerStyles.topRow}>
                <Typography
                    sx={headerStyles.link}
                >
                    Go to docs
                </Typography>
                <NotificationsBell
                    iconColor="white"
                />
                <Avatar />
            </Box>
            <Box sx={headerStyles.middleRow}>
                <Typography
                    variant="h1"
                    color="white"
                >
                    {title}
                </Typography>
                <Box>
                    <CommonButton
                        sx={headerStyles.webButton}
                        variant="outlined"
                    >
                        Web setup
                    </CommonButton>
                    <Tooltip
                        title="Help"
                    >
                        <IconButton
                            color="white"
                            sx={headerStyles.helpIcon}
                        >
                            <HelpIcon />
                        </IconButton>
                    </Tooltip>
                </Box>
            </Box>
        </Box>
  );
};

export default Navbar;