import Link from "next/link";
import { withRouter } from "next/router";

const Pagination = ({ totalPages, router, ...rest }) => {
    
  if (totalPages <= 1) return null;
  const currentPage = router.query.page ? router.query.page : 1;
  // build an array from number of pages
  let numbers = [];
  for (let i = 1; i <= totalPages; i++) {
    numbers.push(i);
  }

    return (
        <nav aria-label="Blog page navigation">
        <ul className="pagination justify-content-center">
        {numbers.map(number => (
            <Link
            href={{
                pathname: router.pathname,
                query: {
                // keep previous url args
                ...router.query,
                page: number
                }
            }}
            key={number}
            >
            <li className={"page-item " + (number == currentPage ? 'active' : '')}>
            <a className={"page-link number " + (number == currentPage ? 'active' : '')}>
                {number}
            </a>
            </li>
            </Link>
        ))}
        </ul>
        <style jsx>{`
        .pagination {
            margin:2rem 0;
        }
        `}</style>
        </nav>
    );
  
};

export default withRouter(Pagination);