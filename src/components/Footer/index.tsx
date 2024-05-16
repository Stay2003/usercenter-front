import { GithubOutlined } from '@ant-design/icons';
import { DefaultFooter } from '@ant-design/pro-components';
import React from 'react';

const Footer: React.FC = () => {
  return (
    <DefaultFooter
      style={{
        background: 'none',
      }}
      links={[
        {
          key: 'CSDN主页',
          title: 'CSDN',
          href: 'https://blog.csdn.net/weixin_67976657?spm=1000.2115.3001.5343',
          blankTarget: true,
        },
        {
          key: 'github',
          title: <GithubOutlined />,
          href: 'https://github.com/Stay2003',
          blankTarget: true,
        },
        {
          key: '编程导航',
          title: '编程导航',
          href: 'https://code-nav.cn',
          blankTarget: true,
        },
      ]}
    />
  );
};

export default Footer;
