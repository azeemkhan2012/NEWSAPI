import React from "react";
import { Box, Button, MenuItem, TextField } from "@mui/material";
import { sortOptions } from "../Data/data";

const Filters = ({ data, onSearch, handleChange }) => {
  return (
    <>
      <Box
        component="form"
        sx={{
          "& .MuiTextField-root": { m: 3.5, width: "25ch" },
        }}
        noValidate
        autoComplete="off"
      >
        <TextField
          id="outlined-textarea"
          label="Search"
          name="q"
          type="search"
          defaultValue={data.q}
          placeholder="Search"
          helperText="Search with a Key Word"
          onChange={(e) => handleChange(e)}
        />
        <TextField
          id="standard-number"
          label="From"
          type="date"
          name="from"
          defaultValue={data.from}
          InputLabelProps={{
            shrink: true,
          }}
          helperText="Starting Date"
          onChange={(e) => handleChange(e)}
        />
        <TextField
          id="standard-number"
          label="To"
          type="date"
          name="to"
          defaultValue={data.to}
          InputLabelProps={{
            shrink: true,
          }}
          helperText="Ending Date"
          onChange={(e) => handleChange(e)}
        />
        <TextField
          id="standard-number"
          label="Page Size"
          type="number"
          name="pageSize"
          defaultValue={data.pageSize}
          InputLabelProps={{
            shrink: true,
          }}
          helperText="Select Page Size "
          onChange={(e) => handleChange(e)}
        />
        <TextField
          id="outlined-select-currency"
          select
          label="Sort By"
          name="sortBy"
          defaultValue={data.sortBy}
          helperText="Sort items By "
          onChange={(e) => handleChange(e)}
        >
          {sortOptions.map((option) => {
            return (
              <MenuItem key={option} value={option}>
                {option}
              </MenuItem>
            );
          })}
        </TextField>
      </Box>
      <Button
        variant="contained"
        sx={{ mb: "50px", ml: "25px" }}
        onClick={onSearch}
      >
        Search
      </Button>
    </>
  );
};
export default Filters;
