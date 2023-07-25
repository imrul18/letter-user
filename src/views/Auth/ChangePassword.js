import { Fragment, useEffect } from "react";
import { Eye } from "react-feather";
import { useDispatch, useSelector } from "react-redux";
import { useNavigate } from "react-router-dom";
import {
    Button,
    Card,
    CardBody,
    CardHeader,
    Col,
    Input,
    InputGroup,
    Label,
    Row,
    Spinner,
} from "reactstrap";
import {
    PasswordChange,
    setPassword,
    setPasswordValidation,
    setPasswordVisivility,
} from "./store";

const ChangePassword = () => {
  const navigate = useNavigate();
  const dispatch = useDispatch();
  const { isLoading, password, passwordValidation, passwordVisivility } =
    useSelector((state) => state.Auth);

  const onChangePassword = (name, value) => {
    dispatch(setPassword({ ...password, [name]: value }));
  };

  const PasswordVisivility = (name, value) => {
    dispatch(setPasswordVisivility({ ...passwordVisivility, [name]: value }));
  };

  const validatePassword = () => {
    dispatch(
      setPasswordValidation({
        is_eight: password?.new_password?.length >= 8 ? true : false,
        is_upper:
          /[A-Z]/.test(password?.new_password) &&
          password?.new_password?.length > 0,
        is_lower:
          /[a-z]/.test(password?.new_password) &&
          password?.new_password?.length > 0,
        is_digit:
          /[0-9]/.test(password?.new_password) &&
          password?.new_password?.length > 0,
        is_special:
          /[!@#$%^&*(),.?":{}|<>]/.test(password?.new_password) &&
          password?.new_password?.length > 0,
        is_same:
          password?.new_password === password?.confirm_password &&
          password?.new_password?.length > 0,
        is_all:
          /[A-Z]/.test(password?.new_password) &&
          /[a-z]/.test(password?.new_password) &&
          /[0-9]/.test(password?.new_password) &&
          /[!@#$%^&*(),.?":{}|<>]/.test(password?.new_password) &&
          password?.new_password === password?.confirm_password &&
          password?.new_password?.length >= 8,
      })
    );
  };

  const OnSubmit = async (e) => {
    e.preventDefault();
    const res = await dispatch(PasswordChange());
    if (res?.payload) navigate("/");
  };

  useEffect(() => {
    validatePassword();
  }, [password?.new_password, password?.confirm_password]);

  return (
    <Fragment>
      <Card>
        <CardHeader>
          <h4 className="card-title">Change Password</h4>
        </CardHeader>
        <CardBody>
          <Row>
            <Col sm="6">
              <Row>
                <Col className="mb-1">
                  <Label>Old Password</Label>
                  <div>
                    <InputGroup>
                      <Input
                        type={
                          passwordVisivility?.old_password ? "text" : "password"
                        }
                        value={password?.old_password}
                        onChange={(e) =>
                          onChangePassword("old_password", e.target.value)
                        }
                        placeholder="Enter Old Password"
                      />
                      <Button
                        onClick={() =>
                          PasswordVisivility(
                            "old_password",
                            !passwordVisivility?.old_password
                          )
                        }
                      >
                        <Eye size={20} color="white" />
                      </Button>
                    </InputGroup>
                  </div>
                </Col>
              </Row>
              <Row>
                <Col className="mb-1">
                  <Label>New Password</Label>
                  <InputGroup>
                    <Input
                      type={
                        passwordVisivility?.new_password ? "text" : "password"
                      }
                      value={password?.new_password}
                      onChange={(e) =>
                        onChangePassword("new_password", e.target.value)
                      }
                      placeholder="Enter New Password"
                    />

                    <Button
                      onClick={() =>
                        PasswordVisivility(
                          "new_password",
                          !passwordVisivility?.new_password
                        )
                      }
                    >
                      <Eye size={20} color="white" />
                    </Button>
                  </InputGroup>
                </Col>
              </Row>
              <Row>
                <Col className="mb-1">
                  <Label>Confirm Password</Label>
                  <InputGroup>
                    <Input
                      type={
                        passwordVisivility?.confirm_password
                          ? "text"
                          : "password"
                      }
                      value={password?.confirm_password}
                      onChange={(e) =>
                        onChangePassword("confirm_password", e.target.value)
                      }
                      placeholder="Enter Confirm Password"
                    />

                    <Button
                      onClick={() =>
                        PasswordVisivility(
                          "confirm_password",
                          !passwordVisivility?.confirm_password
                        )
                      }
                    >
                      <Eye size={20} color="white" />
                    </Button>
                  </InputGroup>
                </Col>
              </Row>
            </Col>
            <Col sm="6">
              <div>
                <h4>Change Password Rules</h4>
              </div>
              <div>
                <ul>
                  <li
                    className={
                      passwordValidation?.is_eight
                        ? "text-success"
                        : "text-danger"
                    }
                  >
                    Minimum 8 character
                  </li>
                  <li
                    className={
                      passwordValidation?.is_digit
                        ? "text-success"
                        : "text-danger"
                    }
                  >
                    Minimum 1 number
                  </li>
                  <li
                    className={
                      passwordValidation?.is_special
                        ? "text-success"
                        : "text-danger"
                    }
                  >
                    Minimum 1 special character
                  </li>
                  <li
                    className={
                      passwordValidation?.is_upper
                        ? "text-success"
                        : "text-danger"
                    }
                  >
                    Minimum 1 uppercase character
                  </li>
                  <li
                    className={
                      passwordValidation?.is_lower
                        ? "text-success"
                        : "text-danger"
                    }
                  >
                    Minimum 1 lowercase character
                  </li>
                  <li
                    className={
                      passwordValidation?.is_same
                        ? "text-success"
                        : "text-danger"
                    }
                  >
                    Password and Confirm Password must be same
                  </li>
                </ul>
              </div>
            </Col>
          </Row>

          <Button
            color="primary"
            disabled={!passwordValidation?.is_all || isLoading}
            onClick={OnSubmit}
          >
            {isLoading ? (
              <span>
                <Spinner color="white" size="sm" />
                Please Wait
              </span>
            ) : (
              "Change Password"
            )}
          </Button>
        </CardBody>
      </Card>
    </Fragment>
  );
};

export default ChangePassword;
