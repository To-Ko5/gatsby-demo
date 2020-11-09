import React from 'react'
import { graphql } from 'gatsby'

import Layouts from '../components/Layouts'

export default function about({ data }) {
  return (
    <Layouts>
      <p>お探しのページは見つかりません</p>
    </Layouts>
  )
}
