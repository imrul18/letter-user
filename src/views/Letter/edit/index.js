import "@styles/react/libs/react-select/_react-select.scss";
import { Fragment, useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { useNavigate, useParams } from "react-router-dom";
import Select from "react-select";
import {
  Button,
  Card,
  CardBody,
  CardHeader,
  CardTitle,
  Col,
  Input,
  Label,
  Row,
  Spinner,
} from "reactstrap";
import { getData, getTypeOptions, setUploadData, updateData } from "../store";

const index = () => {
  const dispatch = useDispatch();
  const navigate = useNavigate();
  const { id } = useParams();
  const { options, uploadData, paramsData } = useSelector((state) => state.letters);

  useEffect(() => {
    dispatch(getData(id));
    dispatch(getTypeOptions())
  }, []);

  const onChange = (e) => {
    dispatch(
      setUploadData({ ...uploadData, [e?.target?.name]: e.target?.value })
    );
  };

  const onSelectChange = (e) => {
    dispatch(
      setUploadData({ ...uploadData, type: e?.value })
    );
  };

  const onSubmit = async () => {
    const res = await dispatch(updateData(id));
    if (res?.payload) {
      navigate("/letter");
    }
  };

  return (
    <Fragment>
      <Card>
        <CardHeader>
          <CardTitle tag="h4">Letter</CardTitle>
        </CardHeader>
        <CardBody>
          <Row>
            <Col md="4" sm="12">
              <Label className="form-label" for="name">
                Image
              </Label>
              <img
                src={uploadData?.image_url}
                alt="letter"
                style={{ width: "100%" }}
              />
            </Col>
            <Col md="4" sm="12">
              <Row>
                <Col sm="12">
                  <Label className="form-label" for="name">
                    ID
                  </Label>
                  <Input
                    type="text"
                    name="name"
                    id="name"
                    value={uploadData?.letter_id}
                    disabled
                  />
                </Col>
                <Col sm="12">
                  <Label className="form-label" for="name">
                    Sender Phone Number
                  </Label>
                  <Input
                    type="text"
                    name="name"
                    id="name"
                    value={uploadData?.sender_phone}
                    disabled
                  />
                </Col>
                <Col sm="12">
                  <Label className="form-label" for="name">
                    Receiver Phone Number
                  </Label>
                  <Input
                    type="text"
                    name="name"
                    id="name"
                    value={uploadData?.receiver_phone}
                    disabled
                  />
                </Col>
              </Row>
            </Col>
            <Col md="4" sm="12">
              <Row>
                <Col sm="12">
                  <Label className="form-label" for="name">
                    Type
                  </Label>
                  <Select
                    name="type"
                    id="type"
                    options={options?.typeOptions}
                    value={options?.typeOptions?.find(
                      (option) => option.value == uploadData?.type
                    )}

                    onChange={onSelectChange}
                  />
                </Col>
                <Col sm="12">
                  <Label className="form-label" for="name">
                    Stamp Value
                  </Label>
                  <Input
                    type="number"
                    name="stamp_value"
                    id="stamp_value"
                    value={uploadData?.stamp_value}
                    onChange={onChange}
                  />
                </Col>
                <Col sm="12">
                  <Label className="form-label" for="name">
                    Next Destination (optional)
                  </Label>
                  <Input
                    type="text"
                    name="next"
                    id="next"
                    value={uploadData?.next}
                    onChange={onChange}
                  />
                </Col>
              </Row>
            </Col>
          </Row>
          <Row>
            <Col sm="12" className="mt-1">
              <div className="d-flex">
                <Button
                  className="me-1"
                  color="primary"
                  type="submit"
                  onClick={(e) => {
                    e.preventDefault();
                    onSubmit();
                  }}
                  disabled={paramsData?.loading}
                >
                  {paramsData?.loading ? (
                    <>
                      <Spinner className="me-25" size="sm" />
                      Please Wait...
                    </>
                  ) : (
                    "Receive Letter"
                  )}
                </Button>
              </div>
            </Col>
          </Row>
        </CardBody>
      </Card>
    </Fragment>
  );
};
export default index;
