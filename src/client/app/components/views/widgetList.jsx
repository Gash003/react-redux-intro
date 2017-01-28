import React from 'react';
import {Link} from 'react-router';

const WidgetList = (props) => 
            <ul className="widget-list">
                {
                    props.widgets.map(
                        (widget) => (
                            <li key={widget.id.toString()}>
                                <Link to={'/widgets/' + widget.id}>{widget.name}</Link>
                            </li>
                        )  
                    )
                }
            </ul>;

export default WidgetList;