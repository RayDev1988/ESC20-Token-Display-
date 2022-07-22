
const TokenDetail = ({ detail }) => {
  return (
    <tr>
      <td>{detail.contractAddress}</td>
      <td>{detail.balance}</td>
      <td>{detail.symbol}</td>
    </tr>
  )
}

export default TokenDetail;