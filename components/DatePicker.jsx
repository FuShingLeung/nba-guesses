import React from 'react';
import { useState } from 'react';
import dayjs from 'dayjs';

import {
  Container,
  AdapterDayjs,
  LocalizationProvider,
  DatePicker,
} from '@/components/mui';
import { format } from 'path';

function BasicDatePicker({ dateChange, date }) {
  const handleDateChange = (newDate) => {
    // const formattedDate = dayjs(newDate).format('YYYY-MM-DD');
    dateChange(newDate);
  };

  return (
    <LocalizationProvider dateAdapter={AdapterDayjs}>
      <DatePicker
        label="Date Picker"
        value={date}
        format="YYYY-MM-DD"
        onChange={handleDateChange}
      />
    </LocalizationProvider>
  );
}

export default BasicDatePicker;
