// high order Component (HOC) => A component that renders another component
// Reuse code
// Render hijacking
// Prop manupilation
// abstract state
import React from 'react';

const info = (props) => (
  <div>
    <p>The info is {props.info}</p>
  </div>
);

//this is a function and we are passing our component in it
const withAdminWarnings = (WrapperComponent) => {
  return (props) => (
    <div>
      <h1>Info : {props.isAdmin}</h1>
      <WrapperComponent {...props} />
    </div>
  );
};

//end result is the new component
const AdminInfoComponent = withAdminWarnings(info);
export default AdminInfoComponent;
