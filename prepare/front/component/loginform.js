import React, {useState,useCallback} from 'react';
import {Form, Input, Button} from 'antd';
import Link from 'next/link';
import styled from 'styled-components';
import PropsTypes from 'prop-types';
import useInput from '../hook/useInput'

const LogareaForm = styled.div`
  margin-top:10px;
`

const Loginform = ({setIslogedin}) => {
  const [id, onChangeId] = useInput('');
  const [password, onChangePassword] = useInput('');
  const onSubmitForm = useCallback(() => {
    setIslogedin(true);
    console.log(setIslogedin);
  },[id, password]);
  return(
    <Form onFinish={onSubmitForm}>
      <div>
        <label htmlFor="user-id">아이디</label>
        <br />
        <Input name="user-id" value={id} onChange={onChangeId} required />
      </div>
      <div>
        <label htmlFor="user-password">비밀번호</label>
        <br />
        <Input name="user-password" value={password} type="password" onChange={onChangePassword} required />
      </div>
      <LogareaForm>
        <Button type="primary" htmlType="submit" loading={false}>로그인</Button>
        <Link href="/signup"><a><Button>회원가입</Button></a></Link>
      </LogareaForm>
    </Form>
  );
}

Loginform.propsTypes = {
  setIslogedin : PropsTypes.func.isRequired,
}

export default Loginform;