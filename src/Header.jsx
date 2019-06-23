import React from "react";
import {
    Button,
    Classes,
    Navbar,
    NavbarDivider,
    NavbarGroup,
    Popover,
    Menu,
    MenuItem,
  } from '@blueprintjs/core';
  
class Header extends React.Component{
    render(){
        return (
            <div id="Layout">
              <Navbar>
                <NavbarGroup>
                  <Button className={Classes.MINIMAL} icon="folder-open" />
                  <Popover content={<Menu><MenuItem text="File 1" /></Menu>}>
                    <Button className={Classes.MINIMAL} icon="chevron-down" />
                  </Popover>
                  <Button className={Classes.MINIMAL} icon="small-cross" />
                  <NavbarDivider />
                  <Button className={Classes.MINIMAL} icon="properties" />
                </NavbarGroup>
              </Navbar>
      </div>);    
    }
}

export default Header;