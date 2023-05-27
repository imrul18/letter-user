import moment from "moment";

export const columns = [
  {
    name: "Image",
    sortable: true,
    minWidth: "120px",
    sortField: "image",
    selector: (row) => row?.image_url,
    cell: (row) => (
      <span className="fw-bolder">
        <img src={row?.image_url} alt={row?.name} width="50" height="50" />
      </span>
    ),
  },
  {
    name: "Letter ID",
    sortable: true,
    minWidth: "320px",
    sortField: "letter_id",
    selector: (row) => row.letter_id,
    cell: (row) => <span className="">{row?.letter_id}</span>,
  },
  {
    name: "Type",
    sortable: true,
    minWidth: "320px",
    sortField: "type",
    selector: (row) => row.type,
    cell: (row) => <span className="">{row?.type?.name}</span>,
  },
  {
    name: "Received Date/Time",
    sortable: true,
    minWidth: "220px",
    sortField: "role",
    selector: (row) => row.received_at,
    cell: (row) => (
      <span>
        {moment(row?.received_at).format("DD/MM/YYYY hh:mm A")}
      </span>
    ),
  },
];
