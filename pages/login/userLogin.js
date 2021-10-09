import React, { useEffect, useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { getUsers } from '../../redux/actions/actions';

const Users = () => {
    const dispatch = useDispatch();
    const usersListData = useSelector((state) => state.usersList);
    const { loading, error, users } = usersListData;
    const { username, setUsername } = useState({});
    const { password, setPassword } = useState({});

    useEffect(() => {
        dispatch(getUsers());
    }, []);

    return (
        <div>
            <form>
                <input type="text" placeholder="Username..." />
                <input type="text" placeholder="Password..." /><br /><br />

                <input type="button" value="LOGIN"/>
            </form>
        </div>
    )
}

export default Users;