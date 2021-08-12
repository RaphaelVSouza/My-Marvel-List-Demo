import * as S from './styles'
import {
  PAGINATION_MAX_ITEMS as MAX_ITEMS,
  PAGINATION_MAX_LEFT as MAX_LEFT,
} from 'utils/constants'

export type PaginationProps = {
  limit: number
  total: number
  currentPage: number
  setCurrentPage: (currentPage: number) => void
}

const Pagination = ({
  limit,
  total,
  currentPage,
  setCurrentPage,
}: PaginationProps) => {
  const pages = Math.ceil(total / limit)
  const first = Math.max(currentPage - MAX_LEFT, 1)

  const isFirstPage = currentPage === 1
  const isLastPage = currentPage === pages
  const penultimatePage = pages - 1

  let visibleItems: number

  if (pages < MAX_ITEMS) {
    visibleItems = pages
  } else {
    switch (currentPage) {
      case penultimatePage:
        visibleItems = MAX_ITEMS - 1
        break

      case pages:
        visibleItems = MAX_ITEMS - 2
        break

      default:
        visibleItems = MAX_ITEMS
        break
    }
  }

  return (
    <S.Wrapper>
      {!isFirstPage && (
        <S.Arrow id="arrow-initial" onClick={() => setCurrentPage(1)}>
          &lt;&lt;
        </S.Arrow>
      )}
      {!isFirstPage && (
        <S.Arrow
          id="arrow-previous"
          onClick={() => setCurrentPage(currentPage - 1)}
        >
          &lt;
        </S.Arrow>
      )}

      {Array.from({ length: visibleItems })
        .map((_, index) => index + first)
        .map((page, index) => (
          <li key={index}>
            <S.Index
              onClick={() => setCurrentPage(page)}
              isActive={currentPage === page}
            >
              {page}
            </S.Index>
          </li>
        ))}

      {!isLastPage && (
        <S.Arrow
          id="arrow-next"
          onClick={() => setCurrentPage(currentPage + 1)}
        >
          &gt;
        </S.Arrow>
      )}
      {!isLastPage && (
        <S.Arrow id="arrow-final" onClick={() => setCurrentPage(pages)}>
          &gt;&gt;
        </S.Arrow>
      )}
    </S.Wrapper>
  )
}

export default Pagination
