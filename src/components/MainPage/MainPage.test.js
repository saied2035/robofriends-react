import {shallow} from 'enzyme'
import MainPage from './MainPage'
describe("MainPage",() => {
    const onSearchChange= jest.fn()
    const onRequestRobots= jest.fn()
    const error = ""
    let robots=[]
    let filterRobots= []
    let isPending = true
    const props1 = {onSearchChange,error,filterRobots,robots,isPending,onRequestRobots}
    robots = [
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
    filterRobots = robots
    isPending= false
    const props2 = {onSearchChange,error,filterRobots,robots,isPending,onRequestRobots}    
    const wrapperMainPage1 = shallow(<MainPage {...props1}/>)
    const wrapperMainPage2 = shallow(<MainPage {...props2}/>)

        it("render MainPage pending case",() => {
            expect(wrapperMainPage1).toMatchSnapshot()
        })
        it("render MainPage no pending case",() => {
            expect(wrapperMainPage2).toMatchSnapshot()
        })

        it("try call filterrobots", () => {        
                const event ={
                    target: {
                        value: 'test'
                    }
                }
                wrapperMainPage2.find('Memo(SearchBox)').props().onSearchChange(event,robots)
                expect(onSearchChange).toBeCalledWith(event,robots)
        })
                
})