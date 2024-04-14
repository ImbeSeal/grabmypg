import * as React from "react";

export const EmailTemplate = ({ type, name, email, phone, message }) => (
  <div>
    <p>Hello Baka,</p>
    <p>
      {type}: {name} has submitted the contact form on your website.
      <br />
      Email:{email}
      <br />
      Phone:{phone}
      <br />
    </p>
    <p>
      {message}
      <br />
      Regards,
      <br />
      Coffee
    </p>
  </div>
);
