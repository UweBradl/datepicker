import * as React from 'react';
import { useState } from 'react';
import { DatePicker } from 'react-datepicker';

import './style.css';

export default function App() {

  const [startDate, setStartDate] = useState(new Date());

  return (
    [<div>
      <h1>Hello StackBlitz!</h1>
      <p>Start editing to see some magic happen :)</p>
    </div>, 
    <div>
        <DatePicker
        selected={startDate}
        onChange={(date) => setStartDate(date)}
        locale="en-GB"n
        placeholderText="Weeks start on Monday"
        />
    </div>
    ]
  );    
}

