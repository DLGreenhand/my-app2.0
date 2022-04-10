import { Icon } from '@alifd/next';
import randomIcon from './genIcon';
import randomSelect from './genSelect';
import randomString from './genText';

export default function randomItem() {
  const nodes = [null, <Icon type={randomIcon()} />, randomString(4)];
  return randomSelect(nodes);
}
