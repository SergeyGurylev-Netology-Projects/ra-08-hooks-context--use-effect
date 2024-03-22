import classes from './list.module.css'
import { useState, useEffect } from "react";
import Item from "./item.js";
import Detail from './detail.js';

export default function List() {
  const url = 'https://raw.githubusercontent.com/netology-code/ra16-homeworks/master/hooks-context/use-effect/data';
  const [listData, SetListData] = useState([]);
  const [activeItem, SetActiveItem] = useState(undefined);

  const loadList = () => {
    fetch(url + '/users.json')
      .then(response => response.json())
      .then(data => SetListData(data));
  }

  useEffect(() => {
    loadList();
    }, []
  );

  const onItemClick = (id) => {
    SetActiveItem(id);
  };

  return (
    <div className={classes["usersContainer"]}>
      <ul className={classes["items"]}>
        {listData.map((el) =>
          <Item
            id={el.id}
            name={el.name}
            isActive={el.id === activeItem}
            onItemClick={() => onItemClick(el.id)}
          />
        )}
      </ul>
      <div className={classes["detail"]}>
        <Detail
            id={activeItem}
            url={url}
        />
      </div>
    </div>
  )
}
