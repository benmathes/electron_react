// automatically require all of our LESS files
require('../less/main.less');
'use strict';
import React from "react";


React.render(
    <div className="main-react">
        Hello, World, this is Electron+React
    </div>,
    document.getElementById('content')
);
