import styled from "styled-components";

const ToDoListFormContainer = styled.form`
  width: 100%;

  display: flex;
  /* justify-content: space-between; */
  align-items: center;

  margin: 20px 0;

  .form__input {
    width: 180px;
    height: 30px;

    margin-right: 10px;
    padding-left: 10px;

    border: 0.2px solid ${(props) => props.theme.accecntColor};
    border-radius: 7px;
    outline: none;
  }

  .form__submit--btn {
    width: 120px;
    height: 33px;

    background-color: ${(props) => props.theme.accecntColor};
    color: white;
    border: none;
    border-radius: 7px;
    cursor: pointer;

    :hover {
      background-color: white;
      border: 1px solid ${(props) => props.theme.accecntColor};
      color: ${(props) => props.theme.accecntColor};
    }
  }
`;

export default ToDoListFormContainer;
