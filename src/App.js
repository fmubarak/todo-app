import React, { useState, useEffect } from 'react';
import {List, ListItem, ListItemButton, ListItemIcon, ListItemText, IconButton} from '@mui/material/';
import Checkbox from '@mui/material/Checkbox';
import DeleteIcon from '@mui/icons-material/Delete';

export default function App() {
  const [list, setList] = useState([]);

  useEffect(() => {
    getToDolist();
  }, []);

  const getToDolist = () => {
    const items = [
      { id: 1, text: 'Do the Coding Challenge', done: true },
      { id: 2, text: 'Review the code with Alison', done: false },
      { id: 3, text: 'Get hired', done: false },
      { id: 4, text: 'Start working with ASRC', done: false },
    ];
    setList(items);
  };

  const handleToggle = (id) => {
    const updatedList = list.map((item) =>
      item.id === id ? { ...item, done: !item.done } : item
    );

    setList(updatedList);
  };
  const deleteToDoItem = (id) => {
    const updatedList = list.filter((item) => item.id !== id);
    setList(updatedList);
    //if I delete it from database I would call axios.get(url) to update the list
  };
  return (
    <List sx={{ width: '100%', maxWidth: 360, bgcolor: 'background.paper' }}>
      {list.length > 0 &&
        list.map((value) => {
          return (
            <ListItem key={value.id} secondaryAction={<IconButton onClick={()=>{deleteToDoItem(value.id)}}edge="end" aria-label="comments"><DeleteIcon /></IconButton>} disablePadding>
              <ListItemButton onClick={() => handleToggle(value.id)} dense>
                <ListItemIcon>
                  <Checkbox edge="start" checked={value.done} tabIndex={-1} disableRipple inputProps={{ 'aria-labelledby': value.text }} />
                </ListItemIcon>
                <ListItemText id={value.id} primary={value.text} />
              </ListItemButton>
            </ListItem>
          );
        })}
    </List>
  );
}

//ReactDOM.render(<TodoApp />, document.querySelector("#app"))

