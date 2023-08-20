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
import {
  getData,
  getTypeOptions,
  setDefaultData,
  setUploadData,
  updateData,
} from "../store";

const index = () => {
  const dispatch = useDispatch();
  const navigate = useNavigate();
  const { id } = useParams();
  const { options, uploadData, defaultData, paramsData } = useSelector(
    (state) => state.letters
  );

  useEffect(() => {
    dispatch(getData(id));
    dispatch(getTypeOptions());
  }, []);

  const onChange = (e) => {
    if (e?.target?.name == "letter_type" || e?.target?.name == "isAd") {
      dispatch(
        setDefaultData({
          ...defaultData,
          [e?.target?.name]: e.target?.value,
        })
      );
    }
    dispatch(
      setUploadData({ ...uploadData, [e?.target?.name]: e.target?.value })
    );
  };

  const onSelectChange = (e) => {
    dispatch(setUploadData({ ...uploadData, type: e?.value }));
  };

  useEffect(() => {
    let cost = 0;
    //use switch case
    switch (parseInt(uploadData?.letter_type)) {
      case 1:
        cost = 5;
        break;
      case 2:
        cost = 8;
        break;
      case 3:
        cost = 10;
        break;
      case 4:
        cost = 15;
        break;
      default:
        cost = 5;
        break;
    }
    switch (parseInt(uploadData?.isAd)) {
      case 1:
        cost = cost + 0;
        break;
      case 2:
        cost = cost + 5;
        break;
      default:
        cost = cost + 0;
        break;
    }
    if (uploadData?.letter_type == 4 && uploadData?.weight > 1000) {
      cost = Math.ceil(uploadData?.weight / 100) + 5;
    }
    dispatch(setUploadData({ ...uploadData, cost }));
  }, [uploadData?.letter_type, uploadData?.isAd, uploadData?.weight]);

  const onSubmit = async () => {
    const res = await dispatch(updateData(id));
    if (res?.payload) {
      navigate("/letter");
    }
  };

  const ActionButton = (status) => {
    switch (parseInt(status)) {
      case 1:
        return "Receive Letter";
      case 2:
        return "Already received";
      case 3:
        return "Way of Delivering";
      case 4:
        return "Already Delivered";
      default:
        return "Receive Letter";
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
            <Col md="8" sm="12">
              <Row>
                <Col sm="8">
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
                <Col sm="4">
                  <Label className="form-label" for="name">
                    Status
                  </Label>
                  <Input
                    type="text"
                    name="name"
                    id="name"
                    value={uploadData?.current_status}
                    disabled
                  />
                </Col>
                <Col sm="6">
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
                <Col sm="6">
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
                <Col sm="4">
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
                <Col
                  sm="8"
                  className="d-flex align-items-end justify-content-around"
                >
                  <div className="d-flex">
                    <Input
                      type="radio"
                      name="letter_type"
                      id="letter_type"
                      value="1"
                      checked={uploadData?.letter_type == 1}
                      onChange={onChange}
                    />
                    <h4>General</h4>
                  </div>
                  <div className="d-flex">
                    <Input
                      type="radio"
                      name="letter_type"
                      id="letter_type"
                      value="2"
                      checked={uploadData?.letter_type == 2}
                      onChange={onChange}
                    />
                    <h4>Registry</h4>
                  </div>
                  <div className="d-flex">
                    <Input
                      type="radio"
                      name="letter_type"
                      id="letter_type"
                      value="3"
                      checked={uploadData?.letter_type == 3}
                      onChange={onChange}
                    />
                    <h4>GEP</h4>
                  </div>
                  <div className="d-flex">
                    <Input
                      type="radio"
                      name="letter_type"
                      id="letter_type"
                      value="4"
                      checked={uploadData?.letter_type == 4}
                      onChange={onChange}
                    />
                    <h4>Parcel</h4>
                  </div>
                </Col>
                {(uploadData?.letter_type == 2 ||
                  uploadData?.letter_type == 3) && (
                  <>
                    <Col sm="4"></Col>
                    <Col sm="8" className="py-1 d-flex justify-content-around">
                      <div className="d-flex">
                        <Input
                          type="radio"
                          name="isAd"
                          id="isAd"
                          value="1"
                          checked={uploadData?.isAd == 1}
                          onChange={onChange}
                        />
                        <h4>Non AD</h4>
                      </div>
                      <div className="d-flex">
                        <Input
                          type="radio"
                          name="isAd"
                          id="isAd"
                          value="2"
                          checked={uploadData?.isAd == 2}
                          onChange={onChange}
                        />
                        <h4>AD</h4>
                      </div>
                    </Col>
                  </>
                )}
                <Col sm="6">
                  <Label className="form-label" for="name">
                    Weight(in gram)
                  </Label>
                  <Input
                    type="number"
                    name="weight"
                    id="weight"
                    value={uploadData?.weight}
                    onChange={onChange}
                    max={30000}
                    disabled={uploadData?.letter_type == 4 ? false : true}
                  />
                </Col>
                <Col sm="6">
                  <Label className="form-label" for="name">
                    Cost(in TK)
                  </Label>
                  <Input
                    type="number"
                    name="cost"
                    id="cost"
                    value={uploadData?.cost}
                    disabled
                  />
                </Col>
              </Row>
            </Col>
          </Row>
          <Row>
            <Col sm="12" className="mt-1 d-flex justify-content-end">
              <Button
                className="me-1"
                color="primary"
                type="submit"
                onClick={(e) => {
                  e.preventDefault();
                  onSubmit();
                }}
                disabled={paramsData?.loading || uploadData?.status != 1}
              >
                {paramsData?.loading ? (
                  <>
                    <Spinner className="me-25" size="sm" />
                    Please Wait...
                  </>
                ) : (
                  ActionButton(uploadData?.status)
                )}
              </Button>
            </Col>
          </Row>
        </CardBody>
      </Card>
    </Fragment>
  );
};
export default index;
