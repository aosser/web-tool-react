import { FC, useContext } from "react";
import { Container, Form, FormControl, Navbar } from "react-bootstrap";
import { Link } from "react-router-dom";
import { AccountIDContext } from "../App";

const Header: FC = () => {
  const { accountID, setAccountID } = useContext(AccountIDContext);

  const setAccountIDOnChange = (event) => {
    setAccountID(event.data);
  };

  console.log(accountID);

  return (
    <header className="sticky-top">
      <Navbar expand="lg" className="bg-body-tertiary" bg="primary" data-bs-theme="dark">
        <Container>
          <Navbar.Brand>Contest Web Tool</Navbar.Brand>

          <Link to="/evaluation">
            <Navbar.Text>評価システム</Navbar.Text>
          </Link>
          <Link to="/attack">
            <Navbar.Text>疑似攻撃システム</Navbar.Text>
          </Link>
          <Link to="/evalandattack">
            <Navbar.Text>評価&攻撃システム</Navbar.Text>
          </Link>
          <Link to="/genai">
            <Navbar.Text>生成AI活用プラットフォーム</Navbar.Text>
          </Link>
          <Link to="/dashboard">
            <Navbar.Text>スコアダッシュボード</Navbar.Text>
          </Link>

          <Form>
            <Form.Control
              placeholder="AWS Account ID"
              value={accountID}
              onChange={(event) => { setAccountIDOnChange(event); }}
            />
          </Form>
        </Container>
      </Navbar>
    </header>
  );
};

export default Header;