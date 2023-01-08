import * as React from 'react';
import { styled, alpha } from '@mui/material/styles';
import AppBar from '@mui/material/AppBar';
import Box from '@mui/material/Box';
import Toolbar from '@mui/material/Toolbar';
import IconButton from '@mui/material/IconButton';
import Typography from '@mui/material/Typography';
import InputBase from '@mui/material/InputBase';
import MenuItem from '@mui/material/MenuItem';
import Menu from '@mui/material/Menu';
import MenuIcon from '@mui/icons-material/Menu';
import SearchIcon from '@mui/icons-material/Search';
import { useNavigate } from "react-router-dom";
import logo from '../resources/logo.PNG';
import { createTheme } from '@mui/system';
import Stack from '@mui/material/Stack';
import Button from '@mui/material/Button';
import FilterListIcon from '@mui/icons-material/FilterList';
import Accordion from '@mui/material/Accordion';
import AccordionSummary from '@mui/material/AccordionSummary';
import AccordionDetails from '@mui/material/AccordionDetails';
import ExpandMoreIcon from '@mui/icons-material/ExpandMore';
import TextField from '@mui/material/TextField';
import Checkbox from '@mui/material/Checkbox';

const theme = createTheme({
    palette: {
        paper: '#f4976c',
        paddingTop:10,  
    },
  });

const Search = styled('div')(({ theme }) => ({
  position: 'relative',
  borderRadius: theme.shape.borderRadius,
  backgroundColor: alpha(theme.palette.common.white, 0.15),
  '&:hover': {
    backgroundColor: alpha(theme.palette.common.white, 0.25),
  },
  marginRight: theme.spacing(2),
  marginLeft: 0,
  width: '100%',
  [theme.breakpoints.up('sm')]: {
    marginLeft: theme.spacing(3),
    width: 'auto',
  },
}));

const SearchIconWrapper = styled('div')(({ theme }) => ({
  padding: theme.spacing(0, 2),
  height: '100%',
  position: 'absolute',
  pointerEvents: 'none',
  display: 'flex',
  alignItems: 'center',
  justifyContent: 'center',
}));

const StyledInputBase = styled(InputBase)(({ theme }) => ({
  color: 'inherit',
  '& .MuiInputBase-input': {
    padding: theme.spacing(1, 1, 1, 0),
    // vertical padding + font size from searchIcon
    paddingLeft: `calc(1em + ${theme.spacing(4)})`,
    transition: theme.transitions.create('width'),
    width: '100%',
    [theme.breakpoints.up('md')]: {
      width: '20ch',
    },
  },
}));
const label = { inputProps: { 'aria-label': 'Checkbox demo' } };

export default function NavBarTrainee() {
    const navigate = useNavigate();
    const handleLogOut = () => {navigate("/")};

    const [anchorEl, setAnchorEl] = React.useState(null);
    const isMenuOpen = Boolean(anchorEl);

    const [filter, setfilter] = React.useState(null);
    const isFilterMenuOpen = Boolean(filter);


    const handleProfileMenuOpen = (event) => {
      setAnchorEl(event.currentTarget);
    };
    const handleMenuClose = () => {
      setAnchorEl(null);
    };

    const handleFiltering = (event) => {
      setfilter(event.currentTarget);
    };
    const isFilterMenuClose = () => {
      setfilter(null);
    };

  const menuId = 'primary-search-account-menu';
  const filterId = 'primary-search-account-menu';
  const renderMenu = (
    <Menu
      anchorEl={anchorEl}
      anchorOrigin={{
        vertical: 'top',
        horizontal: 'right',
      }}
      id={menuId}
      keepMounted
      transformOrigin={{
        vertical: 'top',
        horizontal: 'right',
      }}
      open={isMenuOpen}
      onClose={handleMenuClose}
    >
      <MenuItem onClick={handleMenuClose}>Profile</MenuItem>
      <MenuItem onClick={handleMenuClose}>Edit My account</MenuItem>
      <MenuItem onClick={handleLogOut}>Log Out</MenuItem>
    </Menu>
  );
  const renderFilterr = (
    <Menu
      filter={filter}
      anchorOrigin={{
        vertical: 45,
       horizontal:680,
      }}
      id={filterId}
      keepMounted
      transformOrigin={{
        vertical: 'top',
        horizontal: 'right',
      }}
  
      open={isFilterMenuOpen}
      onClose={isFilterMenuClose}
    >
       <div>
      <Accordion>
        <AccordionSummary
          expandIcon={<ExpandMoreIcon />}
          aria-controls="panel1a-content"
          id="panel1a-header"
        >
          <Typography>Filter By Price</Typography>
        </AccordionSummary>
        <AccordionDetails>
        <Stack direction="row">
        <TextField
          id="outlined-number"
          label="Minimum Price"
          type="number"
          InputLabelProps={{
            shrink: true,
          }}
        />
        <Box sx={{ flexGrow: 0.07}} />
          <TextField
          id="outlined-number"
          label="Maximum Price"
          type="number"
          InputLabelProps={{
            shrink: true,
          }}
        />
         <Box sx={{ flexGrow: 1}} />
         <Button  sx={{ bgcolor:theme.palette.paper }} variant="contained"  >Filter</Button>
          </Stack>
        </AccordionDetails>
      </Accordion>

      <Accordion>
        <AccordionSummary
          expandIcon={<ExpandMoreIcon />}
          aria-controls="panel2a-content"
          id="panel2a-header"
        >
          <Typography>Filter By subject</Typography>
        </AccordionSummary>
        <AccordionDetails>
        <Stack direction="row">
        <TextField id="outlined-basic" label="Subject" variant="outlined" />
        <Box sx={{ flexGrow: 0.07}} />
        <Button  sx={{ bgcolor:theme.palette.paper }} variant="contained"  >Filter</Button>
        </Stack>
        </AccordionDetails>
      </Accordion>

      <Accordion>
        <AccordionSummary
          expandIcon={<ExpandMoreIcon />}
          aria-controls="panel2a-content"
          id="panel2a-header"
        >
          <Typography>Filter By Rating</Typography>
        </AccordionSummary>
        <AccordionDetails>
        <Stack direction="row">
        <TextField
          id="outlined-number"
          label="Rating"
          type="number"
          InputLabelProps={{
            shrink: true,
          }}></TextField>
        <Box sx={{ flexGrow: 0.07}} />
        <Button  sx={{ bgcolor:theme.palette.paper }} variant="contained"  >Filter</Button>
        </Stack>
        </AccordionDetails>
      </Accordion>
    </div>
    </Menu>
  );

  
  return (
    <Box>
      <AppBar>
        <Toolbar>
      

        <Typography variant="h6" noWrap component="div"sx={{ display: { xs: 'none', sm: 'block' } }}>
            <a href="https://i.imgur.com/fe0T4nw.png"><img src={logo} onClick="https://google.com" alt="JALP Logo"/></a>
            </Typography>

          

          <Stack spacing={8} direction="row">

          <Stack direction="row">

          <Search><SearchIconWrapper ><SearchIcon /></SearchIconWrapper>
            <StyledInputBase sx={{ width:500 }} placeholder="Search…" inputProps={{ 'aria-label': 'search' }}/>
          </Search>
            < IconButton onClick={handleFiltering} size="large" edge="start" color="inherit" aria-label="open drawer" sx={{ mr: 2,paddingTop:1  }}>
          <FilterListIcon /> 
          </IconButton>
         
          </Stack>
         <Button  sx={{ bgcolor:theme.palette.paper }} variant="contained"  >View My Courses</Button>
         
		 

    </Stack>
          <Box sx={{ flexGrow: 1 }} />
          <IconButton onClick={handleProfileMenuOpen} size="large" edge="start" color="inherit" aria-label="open drawer" sx={{ mr: 2 }}>
            <MenuIcon /> 
            </IconButton>
            <Box sx={{ flexGrow: 0.05 }} />
        </Toolbar>
      </AppBar>
      {renderMenu}
      {renderFilterr}
    </Box>
  );
}