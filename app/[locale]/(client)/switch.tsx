'use client';

import { useChangeLocale, useCurrentLocale } from "@/app/ui/locales/client";
import { FormControl, MenuItem, Select } from "@mui/material";
import { useState } from "react";


export function Switch() {
  interface ChangeLocaleOptions {
    preserveSearchParams?: boolean;
  }
  
  const locale = useCurrentLocale();
  const changeLocale: (newLocale: string, options?: ChangeLocaleOptions) => void = useChangeLocale(/* { preserveSearchParams: true } */);
    const [lang , setLang] = useState(locale)
    const handle = (value: any) => {
        setLang(value);
        changeLocale(value);
    }
  return (
    <>
<FormControl sx={{ m: 1, minWidth: 120 }}>
        <Select
        value={lang}
          onChange={(e)=>handle(e.target.value)}
          displayEmpty
          inputProps={{ 'aria-label': 'Without label' }}
        >
          <MenuItem value="en">
          </MenuItem>
          <MenuItem value={'en'}>EN </MenuItem>
          <MenuItem value={'fr'}>VN</MenuItem>
        </Select>
      </FormControl>
    </>
  );
}