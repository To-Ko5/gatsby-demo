import React from 'react'
import { graphql } from 'gatsby'

import Layouts from '../components/Layouts'
import Seo from '../components/Seo'

export default function about({ data }) {
  return (
    <Layouts>
      <Seo pageTitle="ページが見つかりません" />
      <p>お探しのページは見つかりません</p>
    </Layouts>
  )
}
