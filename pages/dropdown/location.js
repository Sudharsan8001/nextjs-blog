// import { useRouter } from 'next/router';

// export default function City() {

//   const router = useRouter();
//   console.log(router.query);
//   return (
//     <h1> {router.query.location} {router.query.city}</h1>
//   )
// }

import Link from 'next/link';
import React from 'react';
import FormControl from "@material-ui/core/FormControl";
import InputLabel from "@material-ui/core/InputLabel";
import Select from "@material-ui/core/Select";
import MenuItem from "@material-ui/core/MenuItem";

export default function Location() {
  const [simpleSelect, setSimpleSelect] = React.useState("");
  const handleSimple = event => {
    setSimpleSelect(event.target.value);
  };
  const classes = '';
  return (
    <>
    <FormControl fullWidth className={classes.selectFormControl}>
          <InputLabel
            htmlFor="simple-select"
            className={classes.selectLabel}
          >
            Location
          </InputLabel>
          <Select
            MenuProps={{
              className: classes.selectMenu,
              href: ""
            }}
            classes={{
              select: classes.select
            }}
            value={simpleSelect}
            onChange={handleSimple}
            inputProps={{
              name: "simpleSelect",
              id: "simple-select"
            }}
          >
            <MenuItem
              disabled
              classes={{
                root: classes.selectMenuItem
              }}
            >
              Location
            </MenuItem>
            <MenuItem
              classes={{
                root: classes.selectMenuItem,
                selected: classes.selectMenuItemSelected
              }}
              value="2"
            >
              <Link href="/dropdownitem/london/london">
            London 
            </Link>
            </MenuItem>
            <MenuItem
              classes={{
                root: classes.selectMenuItem,
                selected: classes.selectMenuItemSelected
              }}
              value="3"
            >
              <Link href="/dropdownitem/paris/paris">
              Paris
              </Link>
            </MenuItem>
            <MenuItem
              classes={{
                root: classes.selectMenuItem,
                selected: classes.selectMenuItemSelected
              }}
              value="4"
            >
              <Link href="/dropdownitem/frankfurt/frankfurt">
              Frankfurt
              </Link>
            </MenuItem>
          </Select>
        </FormControl>
      {/* <select name="forma" onChange="location = this.value;">
        <option value="" disabled selected>Location</option>
        <option value="London">London</option>
        <option value="Paris">Paris</option>
        <option value="Frankfurt">Frankfurt</option>
      </select>
      <ul>
        <li>
          <Link href="/dropdownItem/london/london">
            <a>London</a>
          </Link>
        </li>
        <li>
          <Link href="/dropdownItem/paris/paris">
            <a>Paris</a>
          </Link>
        </li>
        <li>
          <Link href="/dropdownItem/frankfurt/frankfurt">
            <a>Frankfurt</a>
          </Link>
        </li>
      </ul> */}
    </>
  )
}
