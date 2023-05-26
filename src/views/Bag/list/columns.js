import moment from "moment";
import { Eye } from "react-feather";
import { Link } from "react-router-dom";
import { UncontrolledTooltip } from "reactstrap";

export const columns = [
  {
    name: "Bag ID",
    sortable: true,
    minWidth: "320px",
    sortField: "bag_id",
    selector: (row) => row.bag_id,
    cell: (row) => <span className="">{row?.bag_id}</span>,
  },
  {
    name: "Total Letter",
    sortable: true,
    minWidth: "320px",
    sortField: "total",
    selector: (row) => row?.total,
    cell: (row) => <span className="">{row?.letter_id?.length}</span>,
  },
  {
    name: "Created Date",
    sortable: true,
    minWidth: "220px",
    sortField: "role",
    selector: (row) => row?.date,
    cell: (row) => <span>{moment(row?.date).format("DD/MM/YYYY")}</span>,
  },
  {
    name: "Action",
    minWidth: "100px",
    cell: (row) => (
      <div className="d-flex align-items-center">
        <Link
          className="text-truncate text-capitalize align-middle"
          to={`/bag-letter/${row.id}`}
          id={`view-${row.id}`}
        >
          <Eye size={18} className={`me-50`} />
          <UncontrolledTooltip placement="top" target={`view-${row.id}`}>
            View all letter
          </UncontrolledTooltip>
        </Link>
      </div>
    ),
  },
];
