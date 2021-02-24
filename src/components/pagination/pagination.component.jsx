import './pagination.styles.scss';

const Pagination = ({ totalPosts, postsPerPage, paginate, currentPage }) => {
  const pageNumbers = [];

  for (let i = 1; i <= Math.ceil(totalPosts / postsPerPage); i++) { // i <=  100 / 10 -> 10  // 100 / 9 -> 12
    pageNumbers.push(i);
  }

  return (
    <ul className="pagination pagination__list">
      {pageNumbers.map(number => (
        <li
          key={number}
          onClick={() => paginate(number)}
          className={`pagination__item ${number === currentPage ? 'active' : ''}`}
        >
          {number}
        </li>
      ))}
    </ul>
  )
}

export default Pagination;

