import "@styles/react/libs/flatpickr/flatpickr.scss";
import "@styles/react/libs/react-select/_react-select.scss";
import "@styles/react/libs/tables/react-dataTable-component.scss";
import { useEffect } from "react";
import DataTable from "react-data-table-component";
import { ChevronDown } from "react-feather";
import ReactPaginate from "react-paginate";
import { useDispatch, useSelector } from "react-redux";
import { useNavigate, useParams } from "react-router-dom";
import { Col, Row } from "reactstrap";
import { getBagLetter, setParams } from "../store/index";
import { columns } from "./columns";

const index = () => {
  const dispatch = useDispatch();
  const navigate = useNavigate();
  const { id } = useParams();
  const { paramsData, params, bagLetter } = useSelector((state) => state.bags);

  useEffect(() => {
    dispatch(getBagLetter(id));
  }, [params]);
  const CustomHeader = () => {
    return (
      <div className="invoice-list-table-header w-100 me-1 ms-50 mt-2 mb-75">
        <Row>
          <Col xl="3">
            Bag ID: {bagLetter?.bag_id}
          </Col>
          <Col xl="3">
            Date: {bagLetter?.date}
          </Col>
        </Row>
      </div>
    );
  };
  const CustomPagination = () => {
    const count = Number(Math.ceil(paramsData?.total / params?.perPage));

    return (
      <ReactPaginate
        previousLabel={""}
        nextLabel={""}
        pageCount={count || 1}
        activeClassName="active"
        forcePage={params?.page !== 0 ? params?.page - 1 : 0}
        onPageChange={(page) => {
          dispatch(setParams({ page: page.selected + 1 }));
        }}
        pageClassName={"page-item"}
        nextLinkClassName={"page-link"}
        nextClassName={"page-item next"}
        previousClassName={"page-item prev"}
        previousLinkClassName={"page-link"}
        pageLinkClassName={"page-link"}
        containerClassName={
          "pagination react-paginate justify-content-end my-2 pe-1"
        }
      />
    );
  };

  return (
    <div className="app-user-list">
      <div className="react-dataTable">
        <DataTable
          noHeader
          subHeader
          sortServer
          pagination
          responsive
          paginationServer
          columns={columns}
          // onSort={handleSort}
          sortIcon={<ChevronDown />}
          className="react-dataTable"
          paginationComponent={CustomPagination}
          data={bagLetter?.letters}
          subHeaderComponent={<CustomHeader />}
        />
      </div>
    </div>
  );
};
export default index;
