import React from 'react';
import { Link,useNavigate } from 'react-router-dom';

function Mailbox() {
  const navigate = useNavigate();
  return (
    <div>
      <div>
      <Link to='/user/anil/1'>Anil</Link>
      <br />
      <Link to='/user/sai/2'>Sai</Link>
      </div>
      <div>
      <button onClick={()=>navigate("/")}>Go Back to home</button>
      </div>
    </div>
  )
}

export default Mailbox
