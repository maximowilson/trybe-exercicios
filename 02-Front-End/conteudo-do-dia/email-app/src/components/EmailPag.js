import { useState } from 'react';

function Email() {
  const [userEmail, setUserEmail] = useState(
    {
     id: 1,
    title: "Título do email",
    status: 0,
    }
  );

  return (
    <div>My Divzona</div>
  );
};

export default Email;
