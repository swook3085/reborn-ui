import { selectPetList } from '@controller/petController'
import { ReducerType } from '@modules/store/rootReducer'
import { ISearchFilter } from '@modules/store/slices/searchFilter'
import { IPetParams } from '@shared/interface/IPet'
import { dateFormatYYYYMMDD } from '@shared/utils'
import { useEffect, memo } from 'react'
import { useInfiniteQuery } from 'react-query'
import { useSelector } from 'react-redux'
import styled from 'styled-components'
import { useInView } from 'react-intersection-observer'

const AnimalList = () => {
  const { ref, inView } = useInView()
  const { startDate, endDate, upKind, kind, sido, sigungu } = useSelector<
    ReducerType,
    ISearchFilter
  >((state) => state.sliceSearchFilter)
  const get = async (page: string) => {
    const params: IPetParams = {
      bgnde: dateFormatYYYYMMDD(startDate),
      endde: dateFormatYYYYMMDD(endDate),
      upKind: upKind === '0' ? '' : upKind,
      kind,
      uprCd: sido,
      orgCd: sigungu,
      page,
      limit: '20',
      state: 'notice',
    }
    console.log('params', params)
    return await selectPetList(params)
  }

  const { isLoading, data, fetchNextPage } = useInfiniteQuery(
    ['infinitePersons', { startDate, endDate, upKind, kind, sido, sigungu }],
    async ({ pageParam = 1 }) => {
      return await get(pageParam)
    },
    {
      getNextPageParam: (lastPage, allPages) => {
        const { total } = lastPage
        console.log(allPages.length * 20 > total)
        // 다음 페이지 요청에 사용될 pageParam값 return 하기
        return allPages.length * 20 > total ? undefined : allPages.length + 1 // 여기서는 pageParam을 따로 사용하지 않기 떄문에 true return
      },
    },
  )

  useEffect(() => {
    if (inView) {
      console.log('inView')
      fetchNextPage()
    }
  }, [inView, fetchNextPage])

  if (isLoading) return <div>loading</div>

  return (
    <Wrapper>
      <Person.Container>
        {data
          ? data.pages.map((page, pageIndex) => {
              return page.list.map((person, personIndex) => {
                return (
                  <Person.Box
                    key={`${person.noticeNo}/${pageIndex}`}
                    // 가장 마지막에 있는 Box를 boxRef로 등록
                    ref={
                      page.list.length * pageIndex + personIndex ===
                      data.pages.length * page.list.length - 1
                        ? ref
                        : null
                    }
                  >
                    <Person.Title>{person.noticeNo}.</Person.Title>
                    <Person.Text>{person.kindCd}</Person.Text>
                    <Person.Text>({person.age})</Person.Text>
                  </Person.Box>
                )
              })
            })
          : null}
      </Person.Container>
    </Wrapper>
  )
}

const Wrapper = styled.div`
  max-width: 728px;

  margin: 0 auto;
`

const LoadingText = styled.h3`
  text-align: center;
`

const Person = {
  Container: styled.div`
    padding: 8px;
  `,

  Box: styled.div`
    border-bottom: 2px solid olive;
  `,

  Title: styled.h2`
    display: inline-block;

    margin: 0 12px;

    line-height: 48px;
  `,

  Text: styled.span`
    margin: 0 6px;
  `,
}

export default memo(AnimalList)
