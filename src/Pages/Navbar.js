import * as React from 'react';
import BottomNavigation from '@mui/material/BottomNavigation';
import BottomNavigationAction from '@mui/material/BottomNavigationAction';
import FolderIcon from '@mui/icons-material/Folder';
import RestoreIcon from '@mui/icons-material/Restore';
import FavoriteIcon from '@mui/icons-material/Favorite';
import LocationOnIcon from '@mui/icons-material/LocationOn';
import { Outlet, Link } from "react-router-dom";

export default function Navbar() {
  const [value, setValue] = React.useState('recents');


  const handleChange = (event, newValue) => {
    setValue(newValue);
  };

  return (
    <>
{

     
    <BottomNavigation sx={{ width: "100%" }} value={value} onChange={handleChange}>
      <Link to="/">
      <BottomNavigationAction label="Folder" value="folder" icon={<FolderIcon />} />
    </Link>


      <Link to="/like">

    <BottomNavigationAction
        label="Favorites"
        value="favorites"
        icon={<FavoriteIcon />}
      />
      </Link>
     <Link to="map">
      <BottomNavigationAction
        label="Nearby"
        value="nearby"
        icon={<LocationOnIcon />}
      />

     </Link>
     <Link to="history">
      <BottomNavigationAction
        label="Recents"
        value="recents"
        icon={<RestoreIcon />}
      />
      </Link>
      
    </BottomNavigation>

     






}
<Outlet />
</>

  );
}
