import * as React from 'react';
import Box from '@mui/material/Box';
import BottomNavigation from '@mui/material/BottomNavigation';
import BottomNavigationAction from '@mui/material/BottomNavigationAction';
import WhatshotIcon from '@mui/icons-material/Whatshot';
import MovieIcon from '@mui/icons-material/Movie';
import TvIcon from '@mui/icons-material/Tv';
import SearchIcon from '@mui/icons-material/Search';
import { useNavigate } from 'react-router-dom';


import { useEffect } from 'react';

export default function SimpleBottomNavigation() {
  const [value, setValue] = React.useState(0);
  const navigate = useNavigate();
  useEffect(()=>{
    if(value===0 ) navigate('/');
    else if(value===1 ) navigate('/movies');
    else if(value===2 ) navigate('/series');
    else if(value===3 ) navigate('/search');
  },[value,navigate])

  return (
    <Box className='Box' >
      <BottomNavigation
        style={{background:"rgb(49, 47, 47)",width: "100%",position:"fixed",bottom:"0",zIndex:"100"}}
        showLabels
        value={value}
        onChange={(event, newValue) => {
          setValue(newValue);
        }}
      >
        <BottomNavigationAction style={{color : "#DDCDC6"}} label="Trends" icon={<WhatshotIcon />} />
        <BottomNavigationAction style={{color : "#DDCDC6"}} label="Movies" icon={<MovieIcon />} />
        <BottomNavigationAction style={{color : "#DDCDC6"}} label="Tv Series" icon={<TvIcon />} />
        <BottomNavigationAction style={{color : "#DDCDC6"}} label="Search" icon={<SearchIcon />} />
        
      </BottomNavigation>
    </Box>
  );
}
