import * as React from "react";
import Tabs from "@mui/material/Tabs";
import Tab from "@mui/material/Tab";
import Box from "@mui/material/Box";

export default function TabsWrappedLabel() {
  const [value, setValue] = React.useState("one");

  const handleChange = (event, newValue) => {
    setValue(newValue);
  };

  return (
    <Box sx={{ width: "100%" }}>
      <Tabs
        value={value}
        onChange={handleChange}
        aria-label="wrapped label tabs example"
      >
        <Tab
          value="one"
          label="Tab 1"
          wrapped
          sx={{
            ml: 20,
            bgcolor: "info.main",
            color: "whitesmoke",
            borderRadius: 2,
          }}
        >

        </Tab>
        <Tab
          value="two"
          label="Tab 2"
          sx={{
            ml: 20,
            bgcolor: "info.main",
            color: "whitesmoke",
            borderRadius: 2,
          }}
        >

        </Tab>
        <Tab
          value="three"
          label="Tab 3"
          sx={{
            ml: 20,
            bgcolor: "info.main",
            color: "whitesmoke",
            borderRadius: 2,
          }}
        >

        </Tab>
      </Tabs>
    </Box>
  );
}
