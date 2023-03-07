import {FC} from 'react';
import {Link, useLocation} from 'react-router-dom';

interface BreadcrumbsProps {}

const BreadCrumb: FC<BreadcrumbsProps> = () => {
    const location = useLocation();
    const pathnames = location.pathname.split('/').filter((x) => x);

    return (
        <div>
            <Link to="/">Home</Link>
            {pathnames.length > 0 && (
                <>
                    <span> / </span>
                    <span>{pathnames[0]}</span>
                </>
            )}
            {pathnames.length > 1 && (
                <>
                    <span> / </span>
                    <Link to={`/${pathnames[0]}/${pathnames[1]}`}>{pathnames[1]}</Link>
                </>
            )}
            {pathnames.length > 2 && (
                <>
                    <span> / </span>
                    <span>{pathnames[2]}</span>
                </>
            )}
        </div>
    );
};

export default BreadCrumb;