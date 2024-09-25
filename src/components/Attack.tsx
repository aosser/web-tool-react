
import { Button, Container, Form, FormGroup } from "react-bootstrap";


const Attack = () => {
  const attacks = [
    {
      "subject": "cloud",
      "displaySubjectName": "クラウド",
      "problems": ["Lv3"],
      "requirements": ["URL"]
    },
    {
      "subject": "middleware",
      "displaySubjectName": "ミドルウェア",
      "problems": ["Lv2", "Lv3"]
    },
    {
      "subject": "security",
      "displaySubjectName": "セキュリティ",
      "problems": ["Lv1", "Lv2", "Lv3"],
      "requirements": ["secret key"]
    }
  ];


  const evaluateOnClick = (url: string): void => {
    alert(url)
  };

  return (
    <>
      <Container className="my-2 p-3">
        <h1>攻撃システム</h1>
      </Container>
      {attacks.map((subject) => {
        const { displaySubjectName, problems, requirements } = subject;
        return (
          <Container className="my-3 p-3">
            <h2>{displaySubjectName}</h2>
            {problems.map((problem) => {
              return (
                <Button variant="danger" className="m-1" onClick={() => { evaluateOnClick(`${problem}実行`) }}>{problem}攻撃実行</Button>
              );
            })}

            <Form>
              <FormGroup>
                {requirements?.map((requirement) => {
                  return (
                    <>
                      <Form.Label>{requirement}</Form.Label>
                      <Form.Control className="w-auto" placeholder={requirement} />
                    </>
                  );
                })}
              </FormGroup>
            </Form>

          </Container>

        );
      })}
    </>
  )
};

export default Attack;