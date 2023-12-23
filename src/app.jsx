import { runApp } from 'ice';
import Avatar from './components/Avatar';
import Badge from './components/Badge';
import BreadCrumb from './components/BreadCrumb';
import Button from './components/Button';
import CheckBox from './components/CheckBox';
import Collapse from './components/Collapse';
import Icon from './components/Icon';
import Image from './components/Image';
import Input from './components/Input';
import MenuButton from './components/MenuButton';
import NumPicker from './components/NumPicker';
import Pagination from './components/Pagination';
import Radio from './components/Radio';
import Range from './components/Range';
import Rating from './components/Rating';
import Search from './components/Search';
import Select from './components/Select';
import Slider from './components/Slider';
import SplitButton from './components/SplitButton';
import Switch from './components/Switch';
import Tab from './components/Tab';
import Text from './components/Text';
import Transfer from './components/Transfer';
import Video from './components/Video';
import Across from './FuncBlock/Across';
import AppHead from './FuncBlock/AppHead';
import BtnGroup from './FuncBlock/BtnGroup';
import CardGroup from './FuncBlock/CardGroup';
import Navi from './FuncBlock/Navi';
const cpns = [
  <Image />,
  <Icon />,
  <Text />,
  <Button />,
  <MenuButton />,
  <SplitButton />,
  <BreadCrumb />,
  <Pagination />,
  <Tab />,
  <CheckBox />, // 10
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
  <Badge />, // 20
  <Collapse />,
  //
  <Slider />,
  <Video />,
  // <Across />,
  <AppHead />,
  <BtnGroup />,
  <CardGroup />,
  <Navi />,
  // <List />,
  // <Divider />,
  // <Grid />,
];
const cpnArr = cpns.map((item) => item.type.name);
window.localStorage.setItem('cpnArr', JSON.stringify(cpnArr));
const appConfig = {
  app: {
    rootId: 'ice-container',
  },
};
runApp(appConfig);
