import React from "react"
import {Link, useLocation, useMatch} from 'react-router-dom';

export default function Breadcrumb() {
    const location = useLocation();
    const match = useMatch('/:url*'); // this will match any route

    // split the URL path into an array of segments
    const segments = location.pathname.split('/').filter((segment) => segment !== '');

    // generate the breadcrumb links
    const breadcrumbs = segments.map((segment, index) => {
        const url = `/${segments.slice(0, index + 1).join('/')}`;
        const isLastSegment = index === segments.length - 1;

        return (
            <React.Fragment key={url}>
                <Link to={url}>{segment}</Link>
                {!isLastSegment && <span> / </span>}
            </React.Fragment>
        );
    });

    return <div>{breadcrumbs}</div>;
}