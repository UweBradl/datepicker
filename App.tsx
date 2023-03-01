import * as React from 'react';
import { useState } from 'react';
import {formatDistance} from 'date-fns/esm';
import {en, de} from 'date-fns/esm/locale'
import DatePicker from 'react-datepicker';

import "./styles/datepicker.scss";

export default function App() {

  const [startDate, setStartDate] = useState(new Date());

  const result = formatDistance(
    new Date(2016, 7, 1),
    new Date(2015, 0, 1),
    {locale: de} // Pass the locale as an option
  )
  console.log('Selected Date: ', result);

  return (
    [<div>
      <h1>Hello StackBlitz!</h1>
      <p>Start editing to see some magic happen :)</p>
    </div>, 
    <div>
        <DatePicker
          selected={startDate}
          onChange={(date) => setStartDate(date)}
          locale="en-US"
          placeholderText="Weeks start on Monday"
        />
    </div>
    ]
  );    
}

