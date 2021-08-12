import { useEffect, useState } from 'react'
import { useLocation, useHistory } from 'react-router-dom'
import { Formik, Form, FormikHelpers } from 'formik'
import qs from 'qs'
import { apiMarvel } from 'services/apiMarvel'
import CharacterCard from 'components/CharacterCard'
import marvelKeys from 'services/config/marvelKeys'
import { Container } from 'components/Container'
import { ListContainer } from 'components/ListContainer'
import TextField from 'components/TextField'
import Button from 'components/Button'
import Pagination from 'components/Pagination'
import Loading from 'components/Loading'

import { PAGINATION_LIMIT as limit } from 'utils/constants'

type SearchProps = {
  searchContent: string
}

export function ListCharacters() {
  const [totalCharacters, setTotalCharacters] = useState(0)
  const [characters, setCharacters] = useState([])
  const [isLoading, setIsLoading] = useState('loading')
  const [currentPage, setCurrentPage] = useState(1)

  const { search, page = 1 } = qs.parse(useLocation().search, {
    ignoreQueryPrefix: true,
  })
  const history = useHistory()
  console.log(page)
  const searchQuery = search ? { nameStartsWith: search } : ''
  const pagination = {
    limit,
    offset: page === 1 ? 0 : +page * limit,
  }

  useEffect(() => {
    if (isLoading === 'loading') {
      apiMarvel
        .get(
          `/characters?${qs.stringify({
            ...pagination,
            ...searchQuery,
            ...marvelKeys,
          })}`
        )
        .then(({ data: response }) => {
          setTotalCharacters(response.data.total)
          setCharacters(response.data.results)
          history.push({
            search: `?${qs.stringify(
              { search, page: page ? page : currentPage },
              { format: 'RFC1738' }
            )}`,
          })
          setIsLoading('ready')
        })
        .catch((error) => {
          console.error(error)

          alert('An error ocurred, try again later.')
          setIsLoading('ready')
        })
    }

    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [isLoading])

  useEffect(() => {
    setIsLoading('loading')
  }, [currentPage])

  function handleSearch(
    values: SearchProps,
    { setSubmitting }: FormikHelpers<SearchProps>
  ) {
    history.push({
      search: `?${qs.stringify(
        { search: values.searchContent, page: 1 },
        { format: 'RFC1738' }
      )}`,
    })

    if (currentPage === 1) setIsLoading('loading')

    setCurrentPage(1)

    setSubmitting(false)
  }

  return (
    <Container>
      <Formik
        initialValues={{
          searchContent: '',
        }}
        onSubmit={handleSearch}
      >
        <Form>
          <TextField
            label="Enter with the character name:"
            name="searchContent"
          />
          <Button children="Search" fullWidthOnMobile type="submit" />
        </Form>
      </Formik>
      {isLoading === 'loading' && <Loading />}
      <ListContainer>
        {isLoading === 'ready' &&
          characters.map(({ id, name, description, thumbnail }) => (
            <CharacterCard
              key={id}
              id={id}
              name={name}
              description={description}
              thumbnail={thumbnail}
            />
          ))}
      </ListContainer>
      {isLoading === 'ready' && (
        <Pagination
          limit={limit}
          total={totalCharacters}
          currentPage={currentPage}
          setCurrentPage={setCurrentPage}
        />
      )}
    </Container>
  )
}
