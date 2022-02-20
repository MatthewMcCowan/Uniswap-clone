import { css } from '@emotion/react'
import { MoonLoader } from 'react-spinners'

const style = {
  wrapper: `text-white h-96 w-72 flex flex-col justify-center items-center`,
  title: `font-semibold text-xl mb-12`,
}

const cssOverride = css`
  display: block;
  margin: 0 auto;
  border-color: white;
`

const TransactionLoader = () => {
  return (
    <main className={style.wrapper}>
      <section className={style.title}>Transaction in progress</section>
      <MoonLoader color={'#fff'} loading={true} css={cssOverride} size={50} />
    </main>
  )
}

export default TransactionLoader
