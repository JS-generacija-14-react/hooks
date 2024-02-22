import { useState, useEffect } from "react";

const Select = () => {
  const [selectValue, setSelectValue] = useState("posts");
  const [items, setItems] = useState([]);

  const handleChange = (e) => {
    setSelectValue(e.target.value);
  };

  useEffect(() => {
    console.log("selectValue has changed");
    fetch(`https://jsonplaceholder.typicode.com/${selectValue}`).then(
      (response) => response.json().then((json) => setItems(json))
    );
  }, [selectValue]);

  useEffect(() => {
    console.log("items has changed");
  }, [items]);

  return (
    <div>
      <select value={selectValue} onChange={handleChange}>
        <option value="posts">Posts</option>
        <option value="comments">Comments</option>
        <option value="albums">Albums</option>
      </select>
      <ul>
        {items.map((item) => {
          return <li key={item.id}>{JSON.stringify(item)}</li>;
        })}
      </ul>
    </div>
  );
};

export default Select;
