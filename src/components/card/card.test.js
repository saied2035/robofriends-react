import {shallow} from 'enzyme'
import Card from './card'

it("render card component",() => {
    const props= {
        id:1,
        name:'saied',
        email:"saied@gmail.com"
    }
    expect(shallow(<Card {...props}/>)).toMatchSnapshot()
})
