import { fetchList } from "./api.js"
import SearchInput from "./components/SearchInput.js"
import Suggestoin from "./components/Suggestion.js"

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
        suggestion.setState({ fetchlist: this.state.fetchedlist })
    }
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
    const suggestion = new Suggestoin({
        $target,
        initialState: []
    })
}
