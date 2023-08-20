import "@styles/react/libs/react-select/_react-select.scss";
import "@styles/react/libs/tables/react-dataTable-component.scss";
import moment from "moment";
import { useEffect } from "react";
import { DebounceInput } from "react-debounce-input";
import { useDispatch, useSelector } from "react-redux";
import { useNavigate } from "react-router-dom";
import { Card, CardBody, Col, Row, Spinner } from "reactstrap";
import { getAllData, setData, setParams } from "../store/index";

const index = () => {
  const dispatch = useDispatch();
  const navigate = useNavigate();
  const { paramsData, params, data } = useSelector((state) => state.letters);

  useEffect(() => {
    if (params?.q?.length > 3) {
      dispatch(getAllData());
    } else {
      dispatch(setData([]));
    }
  }, [params?.q]);

  return (
    <div className="app-user-list">
      <Card>
        <CardBody>
          <Row className="mb-2">
            <Col
              xl="4"
              className="d-flex align-items-end align-content-center flex-wrap"
            >
              <div>Search by Letter Number/Sender Phone Number</div>
            </Col>
            <Col
              xl="3"
              className="d-flex align-items-sm-start justify-content-xl-start justify-content-start flex-xl-nowrap flex-wrap flex-sm-row flex-column pe-xl-1 p-0 mt-xl-0 mt-1"
            >
              <div className="d-flex align-items-center table-header-actions w-100">
                <DebounceInput
                  className="form-control"
                  color="primary"
                  debounceTimeout={500}
                  placeholder="Search Here"
                  autoFocus
                  value={params?.q}
                  onChange={(e) => {
                    e.preventDefault();
                    dispatch(setParams({ ...params, q: e.target.value }));
                  }}
                />
              </div>
            </Col>
          </Row>
          {paramsData?.loading && (
            <div className="text-center">
              <Spinner className="me-25" size="sm" />
              Searching...
            </div>
          )}
          {params?.q?.length > 3 ? (
            data?.length > 0 ? (
              data?.map((item) => (
                <div
                  key={item.id}
                  className="d-flex flex-row border rounded p-1"
                  onClick={(e) => {
                    e.preventDefault();
                    navigate(`/letter/${item?.id}`);
                  }}
                >
                  <div>
                    <img
                      src={item?.image_url}
                      alt={item?.letter_id}
                      width="100"
                      height="100"
                    />
                  </div>
                  <div className="mx-2">
                    <div>ID: {item?.letter_id}</div>
                    <div>
                      Date: {moment(item?.created_at).format("dd-MMM-yyyy")}
                    </div>
                    <div>Sender: {item?.sender_phone}</div>
                    <div>Receiver: {item?.receiver_phone}</div>
                  </div>
                </div>
              ))
            ) : (
              !paramsData?.loading && (
                <div className="text-center">No Data Found</div>
              )
            )
          ) : (
            <div className="text-center">
              Please enter at least 4 characters
            </div>
          )}
        </CardBody>
      </Card>
    </div>
  );
};
export default index;
