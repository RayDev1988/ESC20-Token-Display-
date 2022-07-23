import { IBalance } from "../common/types";

const TokenDetail = ({
  detail
}: {
  detail:IBalance
}) => {
  return (
    <tr>
      <td>{detail.contractAddress}</td>
      <td>{detail.balance}</td>
      <td>{detail.symbol}</td>
    </tr>
  )
}

export default TokenDetail;