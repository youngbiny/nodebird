import React, { useState } from 'react';
import PropsTypes from 'prop-types';
import Link from 'next/link';
import { Menu, Input, Row, Col } from 'antd';
import UserProfile from './userprofile';
import Loginform from './loginform';

const AppLayout = ({children}) => {
    const [isLogedin, setIslogedin] = useState(false);
    return(
      <>
        <div>
          <Menu mode="horizontal">
            <Menu.Item>
              <Link href="/"><a>Home</a></Link>
            </Menu.Item>
            <Menu.Item>
              <Link href="/profile"><a>프로필</a></Link>
            </Menu.Item>
            <Menu.Item>
              <Input.Search enterButton style={{verticalAlign:'middle'}} />
            </Menu.Item>
            <Menu.Item>
              <Link href="/signup"><a>회원가입</a></Link>
            </Menu.Item>
          </Menu>
          <Row gutter={4}>
            <Col xs={24} md={6}>
              {isLogedin ? <UserProfile setIslogedin={setIslogedin} /> : <Loginform setIslogedin={setIslogedin} /> }
            </Col>
            <Col xs={24} md={12}>
              {children}
            </Col>
            <Col xs={24} md={6}>
              <a href="/" target="_blank" rel="noreferrer noopener">Biny</a>
            </Col>
          </Row>
        </div>
      </>
    )
}

AppLayout.propsTypes = {
    children : PropsTypes.node.isRequired,
}


export default AppLayout;