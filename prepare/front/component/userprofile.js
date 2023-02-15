import React, {useCallback} from "react";
import {Card, Avatar, Button} from 'antd';
import styled from 'styled-components';
import { useDispatch } from "react-redux";
import { logoutAction } from "../reducers";
const ButtonWrapper = styled(Button)`
    margin-top:10px;
`

const UserProfile = () => {
  const dispatch = useDispatch();
  const logOut = useCallback(() => {
    dispatch(logoutAction());
  },[]);
  return(
    <>
      <Card
        actions={[
          <div key="setting">짹짹<br /></div>,
          <div key="edit">팔로워<br />@</div>,
          <div key="ellipsis">팔로잉<br />@</div>,
        ]}
      >
        <Card.Meta
        avatar={<Avatar>Biny</Avatar>}
        title="Card title"
        />
        <ButtonWrapper onClick={logOut}>로그아웃</ButtonWrapper>
      </Card>
    </>
  );
}

export default UserProfile;