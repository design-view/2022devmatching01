import { fetchList } from "./api.js"
import SearchInput from "./components/SearchInput.js"
import SelectLists from "./components/SelectLists.js"
import Suggestion from "./components/Suggestion.js"

export default function App({
    $target
}) {
    //app에서 관리할 상태값
    this.state = {
        selectedlist: [],
        fetchedlist: []
    }
    //상태값 변경하기
    this.setState = (newState) => {
        this.state = {
            ...this.state,
            ...newState
        }
        console.log(this.state.selectedlist)
        suggestion.setState({ 
            selectedIndex: 0,
            fetchlist: this.state.fetchedlist 
        })
        selectLists.setState(this.state.selectedlist)
    }
    //선택한 항목을 나타내는 SelectLists컴포넌트 생성
    const selectLists = new SelectLists({
        $target,
        initialState: []
    })
    const searchInput = new SearchInput({
        $target,
        initialState: '',
        onChange: async (keyword) => {
            if (keyword.length > 0) {
                const language = await fetchList(keyword)
                this.setState({
                    fetchedlist: language
                })
                console.log(this.state.fetchedlist)
            } else {
                this.setState({
                    fetchedlist: []
                })
            }

        }
    })
    //조회된 항목 나타내는 컴포넌트 Suggestion컴포넌트 생성
    const suggestion = new Suggestion({
        $target,
        initialState: [],
        onSelect: (list) => {
            const { selectedlist } = this.state;
            const index = selectedlist.findIndex(selist=> selist === list)
            if (index > -1){
                selectedlist.splice(index,1)
            }
            selectedlist.push(list)
            //배열의 갯수를 5개로 제한하기
            if(selectedlist.length > 5){
                const startPosition = selectedlist.length - 5
                const nselectedlist = selectedlist.slice(startPosition, 5+startPosition)
                this.setState({ selectedlist: nselectedlist })
            }else {
                this.setState({ selectedlist: selectedlist })
            }
            
        }
    })
    
}
