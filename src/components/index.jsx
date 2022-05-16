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
import Avatar from './Avatar';
import Badge from './Badge';
import Collapse from './Collapse';
import Slider from './Slider';

const cpns = [
  <Text />,
  <Button />,
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
  // <Transfer />,
  <Avatar />,
  <Badge />,
  <Collapse />,
  // <Slider />,
  // <List />,
  // <Divider />,
  // <Grid />,
];

function genCpns(num) {
  const res = [];
  for (let i = 0; i < Math.floor(Math.random() * num + 3); i++) {
    const tmp = cpns[Math.floor(cpns.length * Math.random())];
    res.push(tmp);
  }
  return res;
}

const Components = (props) => {
  return <div style={{ display: 'inline' }}>{genCpns(props.num)}</div>;
};

export default Components;
Components.defaultProps = {
  num: 3,
};
