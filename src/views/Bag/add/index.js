import Board from "@lourenci/react-kanban";
import "@lourenci/react-kanban/dist/styles.css";
import moment from "moment";
import { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { useNavigate, useParams } from "react-router-dom";
import { Button, Card, CardBody, Col, Row, Spinner } from "reactstrap";
import { addData, getAllLetter, setParams, setUploadData } from "../store";

const index = () => {
  const { date } = useParams();
  const dispatch = useDispatch();
  const navigate = useNavigate();
  const { params, paramsData, uploadData } = useSelector((state) => state.bags);
  useEffect(() => {
    dispatch(setParams({ bag_date: moment(date).format("YYYY-MM-DD") }));
  }, []);

  useEffect(() => {
    dispatch(getAllLetter());
  }, [params]);

  function UncontrolledBoard() {
    const onCardDragEnd = (card) => {
      dispatch(setUploadData(card));
    };

    const handleColumnAdd = (newColumn) => {
      dispatch(setUploadData(newColumn));
    };
    return (
      <Board
        initialBoard={uploadData}
        onCardDragEnd={onCardDragEnd}
        disableColumnDrag
        allowAddColumn
        renderColumnAdder={({ addColumn }) => (
          <div>
            <Button
              color="primary m-1"
              onClick={() =>
                addColumn({
                  id: uploadData?.columns.length + 1,
                  title: `Bag-${uploadData?.columns.length + 1}`,
                  cards: [],
                })
              }
              disabled={paramsData?.loading}
            >
              Add new bag
            </Button>
          </div>
        )}
        onColumnNew={handleColumnAdd}
      />
    );
  }

  const handleSave = async() => {
    const res = await dispatch(addData())
    if(res?.payload){
      dispatch(setParams({ date: params?.bag_date }));
      navigate("/bag");
    }
  }

  return (
    <div>
      {uploadData && (
        <div>
          <Card>
            <CardBody>
              <Row>
                <Col>
                  After you have finished editing, please click the save button.
                  <Button
                    color="primary m-1"
                    onClick={handleSave}
                    disabled={paramsData?.loading}  
                  >
                    {paramsData?.loading ? (
                      <span>
                      <Spinner color="white" size="sm" />
                      Please wait...
                      </span>
                    ) : (
                      "Save"
                    )}
                  </Button>
                </Col>
              </Row>
              <Row>
                <UncontrolledBoard />
              </Row>  
            </CardBody>
          </Card>
        </div>
      )}
    </div>
  );
};

export default index;
