import * as React from "react";

export const EmailTemplate = ({
  name,
  email,
  phone,
  city,
  addr,
  propname,
}: {
  name: any;
  email: any;
  phone: any;
  city: any;
  addr: any;
  propname: any;
}) => (
  <div>
    <p>Hello Baka,</p>
    <p>
      {name} has submitted the Landlord form on your website.
      <br />
      Email:{email}
      <br />
      Phone:{phone}
      <br />
    </p>
    <p>
      Property Details:
      <br />
      Name of property :{propname}
      <br />
      City :{city}
      <br />
      Address :{addr}
      <br />
      Regards,
      <br />
      Coffee
    </p>
  </div>
);
