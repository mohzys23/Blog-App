import React, { Component } from 'react';
import SearchOutlinedIcon from '@material-ui/icons/SearchOutlined';


class Searchbar extends Component {
    render() {
        return (
 <div>
<input type="search" /><SearchOutlinedIcon />
 </div>
  
        );
    }
}


export default Searchbar;