import TokenDetail from "./TokenDetail";

const TokenDetails = ({ details }) => {
  return (
    <table className="data-table table-striped table-bordered table-hover mt-5">
      <thead>
        <tr>
          <td> Contract Address </td>
          <td> Balance </td>
          <td> Token Type </td>
        </tr>
      </thead>
      <tbody>
        {
          details.map((detail) => <TokenDetail detail={detail} key={detail.contractAddress}/>)
        }
      </tbody>
    </table>
  )
}

export default TokenDetails;