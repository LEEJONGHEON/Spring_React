import React, { useEffect, useState } from 'react';

//https://mui.com/material-ui/getting-started/learn/
import {
    ListItem, ListItemText,
    InputBase, Checkbox,
    ListItemSecondaryAction, IconButton
} from "@mui/material";
import { DeleteOutline } from '@mui/icons-material';
import { BASE_URL } from '../App';

const Todo = ({ item, remove, update }) => {

    const [itemState, setItemState] = useState(item);
    const { id, title, regDate, done } = itemState;

    useEffect(() => {
        update(itemState);
    }, [itemState]);

    // 삭제 이벤트 핸들러
    const removeHandler = e => {
        remove(item);
    };

    // done 값 수정 버튼 이벤트
    const checkHandler = e => {
        setItemState({ ...itemState, done: !itemState.done })
    }

    return (
        <ListItem>
            <Checkbox checked={done} onChange={checkHandler} />
            <ListItemText>
                <InputBase
                    inputProps={{ "aria-label": "naked" }}
                    type="text"
                    id={id.toString()}
                    name={id.toString()}
                    value={title}
                    multiline={true}
                    fullWidth={true}
                />
            </ListItemText>
            {regDate}
            {/* 삭제 버튼 */}
            <ListItemSecondaryAction>
                <IconButton aria-label="Delete Todo" onClick={removeHandler}>
                    <DeleteOutline />
                </IconButton>
            </ListItemSecondaryAction>
        </ListItem>
    );
}

export default Todo;