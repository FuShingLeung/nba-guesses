import React from 'react';
import { useState } from 'react';
import dayjs from 'dayjs';

import {
  Container,
  AdapterDayjs,
  LocalizationProvider,
  DatePicker,
} from '@/components/mui';

function BasicDatePicker({ dateChange, date }) {
  const newDateChange = (date) => {
    dateChange(date);
  };

  return (
    <LocalizationProvider dateAdapter={AdapterDayjs}>
      <DatePicker
        label="Controlled picker"
        value={date}
        format="YYYY-MM-DD"
        onChange={newDateChange}
      />
    </LocalizationProvider>
  );
}

export default BasicDatePicker;
