import styled from "styled-components";
import makeListMarker from "../../utils/makeListMarker";

const ToDoListContainer = styled.div`
  width: 65%;
  height: 70vh;

  margin: 30px;

  .todolist__title--category {
    font-size: 45px;
    font-weight: bold;
    color: ${(props) => props.theme.accecntColor};
  }

  .todolist__list {
    width: 100%;
    height: 80%;

    padding: 50px;

    position: relative;

    background-color: #5b98ec;
    border-radius: 20px;

    .todolist--marker {
      width: 25px;
      height: 25px;

      position: absolute;

      background-color: ${(props) => props.theme.accecntColor};
      border-radius: 50%;
    }

    //nth-child 인자로 x같은거 넣을 수 있나?
    .todolist--marker:nth-child(1) {
      ${makeListMarker(0)}
    }

    .todolist--marker:nth-child(2) {
      ${makeListMarker(1)}
    }
  }
`;

export default ToDoListContainer;
