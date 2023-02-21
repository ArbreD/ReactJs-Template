import { useNavigate } from "react-router-dom";
import { useState } from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faEye, faEyeSlash } from "@fortawesome/free-regular-svg-icons";
import {
  Container,
  Row,
  Col,
  Card,
  Form,
  InputGroup,
  Button,
} from "react-bootstrap";

import "./LoginLY.scss";
import config from "~/config";
import { useUserAuth } from "~/context/UserAuthContext";
import {
  emailPattern,
  templateEmailPlaceholder,
} from "~/system/Constants/Constants";
import { checkEmailMessage, checkPasswordMessage } from "~/system/Validation";

function Login() {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [passwordType, setPasswordType] = useState("password");
  const [showPassword, setShowPassword] = useState(false);
  const [validated, setValidated] = useState(false);

  const navigate = useNavigate();
  const { loginWithEmail } = useUserAuth();

  const handleSubmit = async (e) => {
    e.preventDefault();
    e.stopPropagation();
    const form = e.currentTarget;
    if (form.checkValidity() === false) {
      setValidated(true);
    } else if (emailPattern.test(email)) {
      const user = await loginWithEmail(email, password);
      console.log("User: ", user);
      if (user) {
        navigate(config.routes.dashboard);
      }
    }
  };

  const handleSetAutoDomain = (e) => {
    if (e.key === "@") {
      let newEmail = email;
      newEmail += "store.vn";
      setEmail(newEmail);
    }
  };

  const handleShowPassword = () => {
    return passwordType === "password"
      ? (setPasswordType("text"), setShowPassword(true))
      : (setPasswordType("password"), setShowPassword(false));
  };

  return (
    <div className="d-flex flex-row">
      <Container>
        <Row className="justify-content-center">
          <Col xs={8} sm={8} md={6} lg={4} xl={3}>
            <Form noValidate validated={validated} onSubmit={handleSubmit}>
              <Card className="py-2 mt-5">
                <Card.Body>
                  <h4 className="text-center">Đăng nhập</h4>
                  <Form.Group className="mb-3" controlId="validationEmail">
                    <Form.Label>
                      Email <span className="text-danger">*</span>
                    </Form.Label>
                    <InputGroup>
                      <Form.Control
                        type="email"
                        autoFocus
                        required
                        value={email}
                        onChange={(e) => setEmail(e.target.value)}
                        onKeyUp={handleSetAutoDomain}
                        placeholder={templateEmailPlaceholder}
                        isInvalid={email && !emailPattern.test(email)}
                      />
                      <Form.Control.Feedback type="invalid">
                        {checkEmailMessage(email)}
                      </Form.Control.Feedback>
                    </InputGroup>
                  </Form.Group>

                  <Form.Group className="mb-4" controlId="passwordGroup">
                    <Form.Label>
                      Mật khẩu <span className="text-danger">*</span>
                    </Form.Label>
                    <InputGroup>
                      <Form.Control
                        type={passwordType}
                        required
                        value={password}
                        minLength={6}
                        maxLength={10}
                        onChange={(e) => setPassword(e.target.value)}
                      />
                      <div className="input-group-append">
                        <InputGroup.Text>
                          <FontAwesomeIcon
                            onClick={handleShowPassword}
                            icon={showPassword ? faEyeSlash : faEye}
                          />
                        </InputGroup.Text>
                      </div>
                      <Form.Control.Feedback type="invalid">
                        {checkPasswordMessage(password)}
                      </Form.Control.Feedback>
                    </InputGroup>
                  </Form.Group>
                  <Row>
                    <Col>
                      <Button type="submit">Đăng nhập</Button>
                    </Col>
                  </Row>
                </Card.Body>
              </Card>
            </Form>
          </Col>
        </Row>
      </Container>
    </div>
  );
}

export default Login;
