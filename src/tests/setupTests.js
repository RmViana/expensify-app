import Enzyme from 'Enzyme';
import Adapter from 'enzyme-adapter-react-16';
import DotEnv from 'dotenv';

DotEnv.config({ path: '.env.test' });
Enzyme.configure({
    adapter: new Adapter()
});