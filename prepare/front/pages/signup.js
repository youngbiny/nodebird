import React, {useState,useCallback} from 'react';
import AppLayout from "../component/AppLayout";
import Head from "next/head";
import {Form, Input, Checkbox, Button} from 'antd';
import styled from "styled-components";
import useInput from '../hook/useInput'

const Errormesege = styled.div`
  color:red;
`;

const Signup = () => {
  const [id, onChangeId] = useInput('');
  const [nickname, onChangeNickname] = useInput('');
  const [password, onChangePassword] = useInput('');

  const [passwordCheck, setPasswordCheck] = useState('');
  const [passwordError, setPasswordError] = useState(false);
  const onChangepasswordCheck = useCallback((e) => {
    setPasswordCheck(e.target.value);
    setPasswordError(e.target.value !== password);
  },[password])

  const [term, setTerm] = useState('');
  const [termError, setTermError] = useState(false);
  const onChangeTrem = useCallback((e) => {
    setTerm(e.target.checked);
    setTermError(false);
  },[])

  const onSubmitForm = useCallback(() => {
    if(password !== passwordCheck){
      return setPasswordError(true);
    }
    if(!term){
      return setTermError(true);
    }
  },[]);
  return(
    <>
      <AppLayout>
        <Head>
          <title>회원가입</title>
        </Head>
        <Form onFinish={onSubmitForm}>
          <div>
            <lable htmlFor="user-id">아이디</lable>
            <br />
            <Input name="user-id" value={id} required onChange={onChangeId} />
          </div>
          <div>
            <lable htmlFor="user-nick">닉네임</lable>
            <br />
            <Input name="user-nick" value={nickname} required onChange={onChangeNickname} />
          </div>
          <div>
            <lable htmlFor="user-password">비밀번호</lable>
            <br />
            <Input name="user-password" type="password" value={password} required onChange={onChangePassword} />
          </div>
          <div>
            <lable htmlFor="user-passwordCheck">비밀번호확인</lable>
            <br />
            <Input name="user-passwordCheck" type="password" value={passwordCheck} required onChange={onChangepasswordCheck} />
            {passwordError && <Errormesege>비밀번호가 일치하지 않습니다.</Errormesege>}
          </div>
          <div>
            <Checkbox name="user-trem" checked={term} onChange={onChangeTrem}> 동의합니다</Checkbox>
            {termError && <Errormesege>약관에 동의하셔야 합니다.</Errormesege>}
          </div>
          <div style={{marginTop: 10}}>
            <Button type="primary" htmlType="submit">가입하기</Button>
          </div>
        </Form>
      </AppLayout>
    </>
  )
}

export default Signup;