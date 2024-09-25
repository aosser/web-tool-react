
import { Button, Container, Form, FormGroup } from "react-bootstrap";


const Evaluation = () => {
  const evaluations = [
    {
      "subject": "cloud",
      "displaySubjectName": "クラウド",
      "problems": ["Lv1", "Lv2", "Lv3"],
      "requirements": ["secret key"]
    },
    {
      "subject": "middleware",
      "displaySubjectName": "ミドルウェア",
      "problems": ["Lv1", "Lv2", "Lv3"]
    },
    {
      "subject": "security",
      "displaySubjectName": "セキュリティ",
      "problems": ["Lv1", "Lv2", "Lv3"],
      "requirements": ["secret key"]
    },
    {
      "subject": "application",
      "displaySubjectName": "アプリ",
      "problems": ["Lv1", "Lv2", "Lv3"]
    },
    {
      "subject": "devops",
      "displaySubjectName": "DevOps",
      "problems": ["Lv1", "Lv2", "Lv3"]
    },
    {
      "subject": "analysis",
      "displaySubjectName": "データ分析",
      "problems": [""]
    },
    {
      "subject": "algorithm",
      "displaySubjectName": "アルゴリズム",
      "problems": ["Lv1", "Lv2", "Lv3"]
    }
  ];


  const evaluateOnClick = (url: string): void => {
    alert(url)
  };

  return (
    <>
      <Container className="my-2 p-3">
        <h1>評価システム</h1>
      </Container>
      {evaluations.map((subject) => {
        const { displaySubjectName, problems, requirements } = subject;
        return (
          <Container className="my-3 p-3">
            <h2>{displaySubjectName}</h2>
            {problems.map((problem) => {
              return (
                <Button variant="primary" className="m-1" onClick={() => { evaluateOnClick(`${problem}実行`) }}>{problem}評価実行</Button>
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

export default Evaluation;