import React, { useState, useContext } from "react";

import Button from "@material-ui/core/Button";
import DeleteIcon from "@material-ui/icons/Delete";

import { useStyles } from "../Todo/styles";
import { DELETE_EVENT, REVERSE_CHECKED } from "../../actions/index";
import AppContext from "../../context/AppContext";

const Event = ({ event }) => {
  const styles = useStyles();
  const { dispatch, date } = useContext(AppContext);
  const [id, setId] = useState(1);
  const items = event.events;
  console.log(items);

  const deleteEvent = (e) => {
    e.preventDefault();
    const result = window.confirm(
      `イベント${event.id}を本当に削除して良いですか？`
    );
    if (result) {
      dispatch({ type: DELETE_EVENT, id });
    }
  };

  const reverseChecked = () => {
    dispatch({ type: REVERSE_CHECKED, id });
  };

  return items.map((e) => {
    if (e.date === date) {
      console.log("aaa");
      return (
        <>
          <tr>
            <td>
              <input type="checkbox" onChange={reverseChecked} />
            </td>
            <td>{e.title}</td>
            <td>{e.body}</td>
            <td>
              <Button
                startIcon={<DeleteIcon />}
                color="secondary"
                variant="contained"
                onClick={deleteEvent}
              >
                Delete
              </Button>
            </td>
          </tr>
        </>
      );
    }
  });
};
export default Event;
