import React from 'react';
import ReactDOM from 'react-dom';
import App from './views/app/app';
import zhCN from 'antd/lib/locale-provider/zh_CN';
import { LocaleProvider } from 'antd';
import { Provider } from 'react-redux';
import store from './store/index';

let Pro = <Provider store={store}><LocaleProvider locale={zhCN}><App /></LocaleProvider></Provider>
ReactDOM.render(Pro, document.getElementById('root'));



/*
    盗墓笔记之七星鲁王宫
    张家古楼
    云顶天宫
    探险
*/
