import {shallow} from 'enzyme'
import Header from './Header'

it("render Header",() => {
        expect(shallow(<Header />)).toMatchSnapshot()
})