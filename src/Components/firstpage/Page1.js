import * as React from 'react';
import PropTypes from 'prop-types';
import Tabs from '@mui/material/Tabs';
import Tab from '@mui/material/Tab';
import Typography from '@mui/material/Typography';
import Box from '@mui/material/Box';
import Module1 from '../Module1/Module1';
import Module2 from '../Module2/Module2';
import Module3 from '../Module3/Module3';
import Module4 from '../Module4/Module4';
import Module5 from '../Module5/Module5';

function TabPanel(props) {
  const { children, value, index, ...other } = props;

  return (
    <div
      role="tabpanel"
      hidden={value !== index}
      id={`vertical-tabpanel-${index}`}
      aria-labelledby={`vertical-tab-${index}`}
      {...other}
    >
      {value === index && (
        <Box sx={{ p: 0,width: '70rem' }}>
          <Typography>{children}</Typography>
        </Box>
      )}
    </div>
  );
}

TabPanel.propTypes = {
  children: PropTypes.node,
  index: PropTypes.number.isRequired,
  value: PropTypes.number.isRequired,
};

function a11yProps(index) {
  return {
    id: `vertical-tab-${index}`,
    'aria-controls': `vertical-tabpanel-${index}`,
  };
}

export default function VerticalTabs() {
  const [value, setValue] = React.useState(0);

  const handleChange = (event, newValue) => {
    setValue(newValue);
  };

  return (
    <Box
      sx={{ flexGrow: 1, bgcolor: 'background.paper', display: 'flex', height: 250, mt: 1 }}
    >
      <Tabs
        orientation="vertical"
        value={value}
        onChange={handleChange}
        aria-label="Vertical tabs example"
        sx={{ borderRight: 1, borderColor: 'error.main' }}
      >
        <Tab label="Module One" {...a11yProps(0)} />
        <Tab label="Module Two" {...a11yProps(1)} />
        <Tab label="Module Three" {...a11yProps(2)} />
        <Tab label="Module Four" {...a11yProps(3)} />
        <Tab label="Module Five" {...a11yProps(4)} />
      </Tabs>
      <TabPanel value={value} index={0} >
        <Module1 />
      </TabPanel>
      <TabPanel value={value} index={1}>
        <Module2 />
      </TabPanel>
      <TabPanel value={value} index={2}>
        <Module3 />
      </TabPanel>
      <TabPanel value={value} index={3}>
        <Module4 />
      </TabPanel>
      <TabPanel value={value} index={4}>
        <Module5 />
      </TabPanel>
    </Box>
  );
}
