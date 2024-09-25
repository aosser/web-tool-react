import { Container, Table } from "react-bootstrap"


const Dashboard = () => {
  const subjects: Array<string> = [
    "cloud",
    "middleware",
    "security",
    "application",
    "devops",
    "analysis",
    "algorithm"
  ]
  const results = [
    {
      "teamName": "T01-gitonian",
      "score": 100,
      "answerStatus": {
        "cloud": 1,
        "middleware": 0,
        "security": 0,
        "application": 0,
        "devops": 0,
        "analysis": 0,
        "algorithm": 0
      }
    }
  ]


  return (
    <>
      <p>Dashboard Page</p>
      <Container>
        <Table striped bordered hover>
          <thead>
            <th>#</th>
            <th>チーム名</th>
            <th>スコア</th>
            {subjects.map((subject) => {
              return (
                <th>{subject}</th>
              );
            })}
          </thead>
          <tbody>
            {results.map((result, index) => {
              const { teamName, score, answerStatus } = result
              return (
                <tr>
                  <td>{index}</td>
                  <td>{teamName}</td>
                  <td>{score}</td>
                  {subjects.map((subject) => {
                    return (
                      <td>{ }</td>
                    );
                  })}
                </tr>
              );
            })}
          </tbody>
        </Table>
      </Container>

    </>
  )
}

export default Dashboard