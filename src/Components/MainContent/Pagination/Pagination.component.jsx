import React from "react";
import {
  PaginationWrapper,
  PageNLink,
  PaginationPage,
  PrevPage,
  PagePrev,
  PrevIcon,
  PrevSpan,
  NextPage,
  PageSkip,
  PageNext,
  NextIcon,
  NextSpan,
} from "./Pagination.styles";
const Pagination = ({ page, setPage, tabRef, scrollToRef }) => {
  const prevPage = () => {
    page > 1 ? setPage(page - 1) : setPage(page);
  };
  const nextPage = () => {
    setPage(page + 1);
  };
  const currentPage = (page) => {
    setPage(page);
  };

  return (
    <PaginationWrapper>
      <PrevPage onClick={() => scrollToRef(tabRef)}>
        <PagePrev onClick={prevPage}>
          <PrevIcon />
          <PrevSpan>Previous</PrevSpan>
        </PagePrev>
      </PrevPage>

      <PaginationPage>
        {Array(10)
          .fill()
          .map((n, pageind) => (
            <PageNLink
              active={pageind + 1 === page}
              key={pageind}
              onClick={(e) => {
                currentPage(pageind + 1);
                scrollToRef(tabRef);
              }}
            >
              {pageind + 1}
            </PageNLink>
          ))}

        <PageSkip>...</PageSkip>
        <PageNLink
          active={page >= 99}
          onClick={(e) => currentPage(page > 99 ? page : 99)}
        >
          {page > 99 ? page : 99}
        </PageNLink>
      </PaginationPage>
      <NextPage onClick={() => scrollToRef(tabRef)}>
        <PageNext onClick={nextPage}>
          <NextSpan>Next</NextSpan>
          <NextIcon />
        </PageNext>
      </NextPage>
    </PaginationWrapper>
  );
};

export default Pagination;
