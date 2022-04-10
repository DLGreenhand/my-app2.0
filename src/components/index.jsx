import * as React from 'react';
import Button from './Button';
import Text from './Text';
import Divider from './Divider';
import Grid from './Grid';
import Icon from './Icon';
import MenuButton from './MenuButton';
import Image from './Image';
import SplitButton from './SplitButton';
import BreadCrumb from './BreadCrumb';
import randomBool from './Zgen/genBool';
import Nav from './Nav';
import Pagination from './Pagination';
import Step from './Step';
import Tab from './Tab';
import CheckBox from './CheckBox';
import Input from './Input';
import NumPicker from './NumPicker';
import Radio from './Radio';
import Range from './Range';
import Rating from './Rating';
import Search from './Search';
import Select from './Select';
import Switch from './Switch';
import Transfer from './Transfer';
import UploadCpn from './Upload';
import Avatar from './Avatar';
import Badge from './Badge';
import Collapse from './Collapse';
import List from './List';
import Menu from './Menu';
import Progress from './Progress';
import Slider from './Slider';

const cpns = [
  <Text />,
  <Button />,
  // <Divider />,
  // <Grid />,
  <Icon />,
  <MenuButton />,
  <Image width="15%" />,
  <SplitButton />,
  <BreadCrumb />,
  <Pagination />,
  <Tab />,
  <CheckBox />,
  <Input />,
  <NumPicker />,
  <Radio />,
  <Range />,
  <Rating />,
  <Search />,
  <Select />,
  <Switch />,
  <Transfer />,
  <Avatar />,
  <Badge />,
  <Collapse />,
  // <List />,
];

const cpnArr = cpns.map(item => item.type.name);

function genCpns() {
  const res = [];
  for (let i = 0; i < Math.floor(Math.random() * 3 + 3); i++) {
    const tmp = cpns[Math.floor(cpns.length * Math.random())];
    res.push(tmp);
  }
  return res;
}

const Components = () => {
  window.localStorage.setItem('cpnArr', JSON.stringify(cpnArr))
  return (
    <div className="component" id="Random">
      <div style={{ float: 'left' }}>{genCpns()}</div>
    </div>
  );
};

export default Components;
