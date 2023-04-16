import { createGlobalStyle, ThemeProvider } from "styled-components";
import { useRecoilValue } from "recoil";
import { isDarkAtom } from "./atoms";
import { isButtonElement } from "react-router-dom/dist/dom";
import { useState } from "react";

type Words = {
  [key: string]: string;
};

class Dict {
  public words: Words;
  constructor() {
    this.words = {};
  }

  add(word: Word) {
    if (this.words[word.term] === undefined) {
      this.words[word.term] = word.def;
    }
  }

  def(term: string) {
    if (this.words[term]) {
      console.log(this.words[term]);
    }
  }

  delete(word: Word) {
    if (this.words[word.term]) {
      delete this.words[word.term];
    }
  }

  update(word: Word, new_def: string) {
    if (this.words[word.term]) {
      this.words[word.term] = new_def;
    }
  }
}

class Word {
  constructor(public term: string, public def: string) {}
}
const my_dict = new Dict();

function App() {
  const isDark = useRecoilValue(isDarkAtom);
  const [term, setTerm] = useState("");
  const [def, setDef] = useState("");
  const [show, setShow] = useState(false);

  const handleTerm = (e: React.FormEvent<HTMLInputElement>): void => {
    setTerm(e.currentTarget.value);
  };

  const handleDef = (e: React.FormEvent<HTMLInputElement>): void => {
    setDef(e.currentTarget.value);
  };

  const handleAdd = (e: React.FormEvent<HTMLButtonElement>) => {
    e.preventDefault();
    const new_word = new Word(term, def);
    my_dict.add(new_word);
    console.dir(my_dict);
  };

  const showDict = (e: React.FormEvent<HTMLButtonElement>) => {
    e.preventDefault();
    setShow((prev) => !prev);
  };

  const handleDelete = (): void => {};

  const handleUpdate = (e: React.FormEvent<HTMLButtonElement>): void => {
    e.preventDefault();
  };
  return (
    <>
      <form>
        <input
          type="text"
          placeholder="Term..."
          name="term"
          onChange={handleTerm}
        />
        <input
          type="text"
          placeholder="Defition..."
          name="definition"
          onChange={handleDef}
        />
        <br />
        <button onClick={handleAdd}>추가</button>
        <button onClick={showDict}>확인</button>
        <button onClick={handleDelete}>삭제</button>
        <button type="submit" onClick={handleUpdate}>
          수정
        </button>
      </form>
      <div style={{ display: show ? "block" : "none" }}></div>
    </>
  );
}

export default App;
