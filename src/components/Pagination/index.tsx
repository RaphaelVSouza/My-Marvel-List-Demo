import * as S from './styles'

export type PaginationProps = {
  limit: number
  total: number
  offset: number
  setOffset: (offset: number) => void

}

const MAX_ITEMS = 5;
const MAX_LEFT = (MAX_ITEMS - 1) / 2;

const Pagination = ({ limit, total, offset, setOffset }: PaginationProps) => {
  const current = offset ? (offset / limit) + 1 : 1;
  const pages = Math.ceil(total / limit);

  const first = Math.max(current - MAX_LEFT, 1);
  const firstPage = 0;
  const penultimatePage = (pages * limit) - limit * 2;
  const finalPage = (pages * limit) - limit * 1;

  let visibleItems: number;

  if (pages < MAX_ITEMS) {
    visibleItems = pages
  } else {
    switch (offset) {
      case penultimatePage:
        visibleItems = MAX_ITEMS - 1;
        break;

      case finalPage:
        visibleItems = MAX_ITEMS - 2;
        break;

      default:
        visibleItems = MAX_ITEMS;
        break;
    }
  }

  return (
    <S.Wrapper>
      {offset !== firstPage && <S.Arrow onClick={() => setOffset(0)}>&lt;&lt;</S.Arrow>}
      {offset !== firstPage && <S.Arrow onClick={() => setOffset((offset - limit))}>&lt;</S.Arrow>}

      {Array.from({ length: visibleItems })
        .map((_, index) => index + first)
        .map((page, index) =>
          <li key={index}>
            <S.Index
              onClick={() => setOffset((page - 1) * limit)}
              isActive={current === page ? true : false}
            >
              {page}
            </S.Index>
          </li>
        )
      }

      {offset !== finalPage && <S.Arrow onClick={() => setOffset((offset + limit))}>&gt;</S.Arrow>}
      {offset !== finalPage && <S.Arrow onClick={() => setOffset(finalPage)}>&gt;&gt;</S.Arrow>}
    </S.Wrapper>
  )
}

export default Pagination
