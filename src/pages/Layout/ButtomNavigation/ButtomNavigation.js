import * as React from 'react';
import BottomNavigation from '@mui/material/BottomNavigation';
import MuiBottomNavigationAction from '@mui/material/BottomNavigationAction';
import { styled } from "@mui/material/styles";
import SvgIcon from '@mui/material/SvgIcon';
import { ReactComponent as AddIcon } from '../../../icon/add.svg';
import { ReactComponent as TransferIcon } from '../../../icon/transfer.svg';
import { ReactComponent as HelpIcon } from '../../../icon/help.svg';
import { ReactComponent as LadderIcon } from '../../../icon/ladder.svg';

const BottomNavigationAction = styled(MuiBottomNavigationAction)(`
  color: #333;
  &.Mui-selected {
    color: #445F8E;
  }
`);

export function ButtomNavigation(props) {
  const [value, setValue] = React.useState('recents');
  const { setItemModalOpen } = props;
  const handleChange = (event, newValue) => {
    setValue(newValue);
  };

  return (
    <BottomNavigation showLabels {...props} value={value} onChange={handleChange}>
      <BottomNavigationAction
        label="财富管理"
        value="favorites"
        icon={<SvgIcon 
          viewBox="0 0 1024 1024" 
          component={LadderIcon} sx={{
              fontSize: '25px'
          }}
        />}
      />
      <BottomNavigationAction
        label="转账"
        value="nearby"
        icon={
        <SvgIcon 
          onClick={() => setItemModalOpen && setItemModalOpen(true)}
          viewBox="0 0 1024 1024" 
          component={TransferIcon} sx={{
              fontSize: '25px'
          }}
        />}
      />
      <BottomNavigationAction label="更多" value="folder" icon={<SvgIcon 
          viewBox="0 0 1024 1024" 
          component={AddIcon} sx={{
              fontSize: '25px'
          }}
        />} />
      <BottomNavigationAction label="帮助" value="folder" icon={<SvgIcon 
          viewBox="0 0 1024 1024" 
          component={HelpIcon} sx={{
              fontSize: '25px'
          }}
        />} />
    </BottomNavigation>
  );
}