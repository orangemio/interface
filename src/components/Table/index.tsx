import React from 'react'
import styled from 'styled-components'
import { useTranslation } from 'react-i18next'

export const StyledTable = styled.table`
  // custom css goes here
`;

export const THead = styled.thead`
 // custom css goes here
`;

export const TFoot = styled.tfoot`
  // custom css goes here
`;

export const TBody = styled.tbody`
 // custom css goes here
`;

export const TR = styled.tr`
  // custom css goes here
`;

export const TH = styled.th`
  // custom css goes here
`;

export const TD = styled.td`
  // custom css goes here
`;

 export function Table({ pool, tvl, reward,apr }: any) {
  return (
      <StyledTable>
          <THead>
              <TR>
                  <TH>资金池</TH>
                  <TH>TVL</TH>
                  <TH>奖励</TH>
                  <TH>APR</TH>
              </TR>
          </THead>
          <TBody>
             <TR>
                <TD>1111</TD>
                <TD>222232</TD>
                <TD>33333</TD>
                <TD>4444444</TD>
             </TR>
          </TBody>
      </StyledTable>
  )
}


export default Table;