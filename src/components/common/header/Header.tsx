import { useRecoilState, useSetRecoilState } from "recoil";
import HeaderContainer from "./Header.styled";
import { categoryState, darkModeState } from "../../../atoms/atoms";

export default function Header() {
  const setCategory = useSetRecoilState(categoryState);
  const [isDark, setIsDark] = useRecoilState(darkModeState);

  const handleClickCategory = (event: React.MouseEvent<HTMLLIElement>) => {
    const {
      currentTarget: {
        dataset: { category },
      },
    } = event;

    console.log(category);
    setCategory(category as any);
  };

  const handleDarkMode = () => {
    setIsDark((prev) => !prev);
  };

  return (
    <HeaderContainer>
      <h1 className="header__title">🛫여행, 어디까지 가봤니?</h1>

      <ul className="header__list">
        <li
          data-category="DOING"
          onClick={handleClickCategory}
          className="header__list__item"
        >
          가고싶은 나라들
        </li>
        <li
          data-category="PENDING"
          onClick={handleClickCategory}
          className="header__list__item"
        >
          갈 예정인 나라들
        </li>
        <li
          data-category="DONE"
          onClick={handleClickCategory}
          className="header__list__item"
        >
          가본 나라들
        </li>
      </ul>

      <div onClick={handleDarkMode} className="header__darkmode--btn">
        {isDark ? "🌞" : "🌛"}
      </div>
    </HeaderContainer>
  );
}
