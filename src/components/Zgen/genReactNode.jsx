import { Icon } from '@alifd/next';
import randomIcon from './genIcon';
import randomSelect from './genSelect';
import randomString from './genText';
import randomColor from './genColor';

export default function randomReactNode() {
  const nodes = [null, null, null, <Icon color={randomColor(0)[0]} type={randomIcon()} />];
  return randomSelect(nodes);
}
