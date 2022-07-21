import * as React from 'react';
import BottomNavigation from '@mui/material/BottomNavigation';
import BottomNavigationAction from '@mui/material/BottomNavigationAction';
import FolderIcon from '@mui/icons-material/Folder';
import FavoriteIcon from '@mui/icons-material/Favorite';
import LocationOnIcon from '@mui/icons-material/LocationOn';

export function ButtomNavigation(props) {
  const [value, setValue] = React.useState('recents');
  const { setItemModalOpen } = props;
  const handleChange = (event, newValue) => {
    setValue(newValue);
  };

  return (
    <BottomNavigation {...props} value={value} onChange={handleChange}>
      <BottomNavigationAction
        label="财富管理"
        value="favorites"
        icon={<FavoriteIcon />}
      />
      <BottomNavigationAction
        label="转账"
        value="nearby"
        icon={<LocationOnIcon 
        onClick={() => setItemModalOpen && setItemModalOpen(true)}
        />}
      />
      <BottomNavigationAction label="更多" value="folder" icon={<FolderIcon />} />
      <BottomNavigationAction label="帮助" value="folder" icon={<FolderIcon />} />
    </BottomNavigation>
  );
}