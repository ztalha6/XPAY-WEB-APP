import {FC} from 'react';
import {Link, useLocation} from 'react-router-dom';
import {BsChevronRight} from "react-icons/bs"

interface BreadcrumbsProps {}

const BreadCrumb: FC<BreadcrumbsProps> = () => {
    const location = useLocation();
    const pathnames = location.pathname.split('/').filter((x) => x);

    return (
        <div>
            <Link to="/">Home</Link>
            {pathnames.length > 0 && (
                <>
                    <span> <BsChevronRight/> </span>
                    <span>{pathnames[0]}</span>
                </>
            )}
            {pathnames.length > 1 && (
                <>
                    <span> <BsChevronRight/> </span>
                    <Link to={`/${pathnames[0]}/${pathnames[1]}`}>{pathnames[1]}</Link>
                </>
            )}
            {pathnames.length > 2 && (
                <>
                    <span> <BsChevronRight/> </span>
                    <span style={{color:'#267A42'}}>{pathnames[2]}</span>
                </>
            )}
        </div>
    );
};

export default BreadCrumb;