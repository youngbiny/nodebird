import React from 'react';
import PropTypes from 'prop-types';
import {List,Button,Card }from 'antd';
import {StopOutlined} from '@ant-design/icons'


const FallowList = ({header, data}) => {
  return(
    <List
      style={{marginBottom:20}}
      grid={{gutter:4,xs:2,md:3}}
      size="small"
      header={<div>{header}</div>}
      loadMore={<div style={{textAlign:'center',margin:'10px 0',}}><Button>더보기</Button></div>}
     />
  )
}

FallowList.propsTypes = {

}

export default FallowList;