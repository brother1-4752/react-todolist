import styled from "styled-components";

const ToDoListItemContainer = styled.li`
  line-height: 48px;

  font-size: 36px;
  font-weight: bold;

  display: flex;
  align-items: center;

  .todo__text {
    margin-right: 15px;
    color: white;
  }

  .todo__checkbtn {
    padding: 5px;

    border-radius: 5px;
    border: none;
    margin-right: 10px;

    cursor: pointer;

    color: ${(props) => props.theme.accecntColor};
    background-color: white;

    :hover {
      color: white;
      background-color: ${(props) => props.theme.accecntColor};
    }
  }
`;

export default ToDoListItemContainer;
