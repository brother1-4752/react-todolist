import styled from "styled-components";

const ToDoListContainer = styled.div`
  width: 300px;

  margin: 30px;

  .todolist__title--category {
    margin-bottom: 20px;

    font-size: 30px;
    font-weight: bold;
    color: ${(props) => props.theme.accecntColor};
  }
`;

export default ToDoListContainer;
