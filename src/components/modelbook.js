import React from 'react';

import { connect } from 'react-redux';


const Modelbook = ({ id, title }) => (
    <div>
         <p key={id}>{title}</p>
    </div>
);
export default connect()(Modelbook);