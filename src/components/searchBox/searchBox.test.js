import {shallow} from 'enzyme'
import SearchBox from './searchBox'

describe("SearchBox",() => {
    const onSearchChange= jest.fn()
    const props = {onSearchChange}
    const event ={
        target: {
            value: 'some value'
        }
    }
    const robots=[
        {
            id : 1,
            name: 'saied',
            email: 'saied@gmail.com'
        },
        {
            id : 2,
            name: 'saied1',
            email: 'saied1@gmail.com'
        },
        {
            id : 3,
            name: 'saied2',
            email: 'saied2@gmail.com'
        },
        {
            id : 4,
            name: 'saied3',
            email: 'saied3@gmail.com'
        }
    ]
    const wrapperSearchBox = shallow(<SearchBox {...props}/>)

        it("render searchBox",() => {
            expect(wrapperSearchBox).toMatchSnapshot()
        })
        it("check if change event called properly", () => {
            wrapperSearchBox.find('input').simulate('change', (event,robots))
            expect(onSearchChange).toBeCalledWith((event,robots))
        })           
})