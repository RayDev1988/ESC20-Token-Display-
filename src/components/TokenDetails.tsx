import TokenDetail from "./TokenDetail";

const TokenDetails = ({ details }) => {
  return (
    <table className="data-table table-striped table-bordered table-hover mt-5">
      <thead>
        <tr>
          <th> Contract Address </th>
          <th> Balance </th>
          <th> Token Type </th>
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