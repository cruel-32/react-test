import React from 'react';
import { useParams } from "react-router-dom";

const AccountDetail = props => {
  console.log('props : ', props);
  
  const { _id } = useParams();

  console.log('_id : ', _id);

  return (
    <div>
      AccountDetail : {props.source}
    </div>
  )
}

export default AccountDetail
