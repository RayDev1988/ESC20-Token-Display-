import { IBalance } from '../common/types';
import TokenDetail from './TokenDetail';

const TokenDetails = ({ details }: { details: IBalance[] }) => {
  return (
    <div className="table-responsive">
      <table className="data-table table-striped table-bordered table-hover mt-5">
        <thead>
          <tr>
            <th> Contract Address </th>
            <th> Balance </th>
            <th> Token Type </th>
          </tr>
        </thead>
        <tbody>
          {details.map((detail, idx) => (
            <TokenDetail detail={detail} key={idx} />
          ))}
        </tbody>
      </table>
    </div>
  );
};

export default TokenDetails;
