import React from 'react'
import styled from 'styled-components'
import * as R from 'ramda'

const borderLight = '1px solid rgba(0,0,0,.3)'
const borderBold = '2px solid red'

const Grid = styled.table`
  border-spacing: 0;
  border-collapse: collapse;
  box-sizing: border-box;
  border: ${borderLight};
  border-width: 3px;
`

const Row = styled.tr`
  height: 48px;
  display: flex;
  box-sizing: border-box;
  border-collapse: collapse;
  border-bottom: ${borderLight};

  &:nth-child(3n) {
    border-width: 3px;
  }

  &:last-child {
    border: none;
  }
`

const Cell = styled.td`
  width: 48px;
  height: 48px;
  display: flex;
  align-items: center;
  justify-content: center;
  border-collapse: collapse;
  box-sizing: border-box;
  border-right: ${borderLight};

  &:nth-child(3n) {
    border-width: 3px;
  }

  &:last-child {
    border: none;
  }
`

export default () => {
  const GRID_SIZE = 9

  const createGrid = R.pipe(
    () => R.range(0, GRID_SIZE),
    R.map(
      (x) => R.range(0, GRID_SIZE)
    )
  )

  const grid = createGrid()

  return (
    <Grid>
      {grid.map((row) => (
        <Row>{row.map((cell) => (
          <Cell>{cell}</Cell>
        ))}</Row>
      ))}
    </Grid>
  )
}
