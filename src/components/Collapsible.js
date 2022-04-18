import React from "react"
import useCollapse from 'react-collapsed';

export default function Collapsible () {
  
    const { getCollapseProps, getToggleProps, isExpanded } = useCollapse();
    return (
        <div className="collapsible">
            <div className="header" {...getToggleProps()}>
                {isExpanded ? `expanded` : "collapsed" }
            </div>
            <div {...getCollapseProps()}>
                <div className="content">
                    this is the content <br /><br />
                    Click again to hide...
                </div>
            </div>
        </div>
    );
}
  