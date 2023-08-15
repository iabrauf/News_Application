import React, { FC, MouseEvent } from 'react';
interface PaginationProps {
  NewsPerPage: number;
  totalNews: number;
  currentPage: number;
  paginate: (pageNumber: number) => void;
  firstPage: () => void;
  lastPage: () => void;
  prevPage: () => void;
  nextPage: () => void;
  loading: boolean;
}

const Pagination: FC<PaginationProps> = ({
  NewsPerPage,
  totalNews,
  currentPage,
  paginate,
  firstPage,
  lastPage,
  prevPage,
  nextPage,
  loading,
}) => {
  const pageNumbers: number[] = [];

  for (let i = 1; i <= Math.ceil(totalNews / NewsPerPage); i++) {
    pageNumbers.push(i);
  }

  const displayPageNumbers: (number | '...')[] = [];

  if (pageNumbers.length <= 3) {
    displayPageNumbers.push(...pageNumbers);
  } else {
    if (currentPage <= 2) {
      displayPageNumbers.push(1, 2, 3, '...', pageNumbers.length);
    } else if (currentPage >= pageNumbers.length - 1) {
      displayPageNumbers.push(1, '...', pageNumbers.length - 2, pageNumbers.length - 1, pageNumbers.length);
    } else {
      displayPageNumbers.push(1, '...', currentPage - 1, currentPage, currentPage + 1, '...', pageNumbers.length);
    }
  }

  return (
    <>
      {!loading ? (
        <nav className="mt-12">
          <ul className="flex items-center justify-center space-x-px h-8 text-sm mb-12">
            <li>
              <a
                href="#"
                onClick={firstPage}
                className={`flex items-center justify-center px-3 h-8 ml-0 leading-tight ${currentPage === 1
                  ? 'text-gray-700 bg-gray-200'
                  : 'text-gray-500 bg-white'
                  } border border-gray-300 rounded-l-lg hover:bg-gray-100 hover:text-gray-700`}
              >
                First
              </a>
            </li>
            <li>
              <a
                onClick={prevPage}
                href="#"
                className="flex items-center justify-center px-3 h-8 ml-0 leading-tight text-gray-500 bg-white border border-gray-300 hover:bg-gray-100 hover:text-gray-700"
              >
                <span className="sr-only">Previous</span>
                <svg
                  className="w-2.5 h-2.5"
                  aria-hidden="true"
                  xmlns="http://www.w3.org/2000/svg"
                  fill="none"
                  viewBox="0 0 6 10"
                >
                  <path
                    stroke="currentColor"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth="2"
                    d="M5 1 1 5l4 4"
                  />
                </svg>
              </a>
            </li>
            {displayPageNumbers.map((number, index) => (
              <li key={index}>
                {number === '...' ? (
                  <span className="flex items-center justify-center px-3 h-8 leading-tight text-gray-500 bg-white border border-gray-300">
                    ...
                  </span>
                ) : (
                  <a
                    href="#"
                    onClick={() => paginate(number as number)}
                    className={`flex items-center justify-center px-3 h-8 leading-tight ${currentPage === number
                      ? 'text-gray-700 bg-gray-200'
                      : 'text-gray-500 bg-white'
                      } border border-gray-300 hover:bg-gray-100 hover:text-gray-700`}
                  >
                    {number}
                  </a>
                )}
              </li>
            ))}
            <li>
              <a
                onClick={nextPage}
                href="#"
                className="flex items-center justify-center px-3 h-8 leading-tight text-gray-500 bg-white border border-gray-300 hover:bg-gray-100 hover:text-gray-700"
              >
                <span className="sr-only">Next</span>
                <svg
                  className="w-2.5 h-2.5"
                  aria-hidden="true"
                  xmlns="http://www.w3.org/2000/svg"
                  fill="none"
                  viewBox="0 0 6 10"
                >
                  <path
                    stroke="currentColor"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth="2"
                    d="m1 9 4-4-4-4"
                  />
                </svg>
              </a>
            </li>
            <li>
              <a
                href="#"
                onClick={lastPage}
                className={`flex items-center justify-center px-3 h-8 leading-tight ${currentPage === pageNumbers.length
                  ? 'text-gray-700 bg-gray-200'
                  : 'text-gray-500 bg-white'
                  } border border-gray-300 rounded-r-lg hover:bg-gray-100 hover:text-gray-700`}
              >
                Last
              </a>
            </li>
          </ul>
        </nav>
      ) : (
        <></>
      )}
    </>
  );
};

export default Pagination;
