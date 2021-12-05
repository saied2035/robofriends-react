import {shallow} from 'enzyme'
import CardList from './cardList'

describe("render cardList",() => {
        it("no error case",() => {
            const props = {
                            robots: [
                                          {
                                            id: 1,
                                            name: 'saied',
                                            email: 'saiedgaffer@gmail.com'
                                           }
                                        ],
                            error: ""            
                        }
            
            expect(shallow(<CardList {...props} />)).toMatchSnapshot()
            
        })

        it("error case",() => {
            const props = {
                            mockRobots: [],
                            error: "error"            
                          }
            
            expect(shallow(<CardList {...props} />)).toMatchSnapshot()
            
        })            
})
