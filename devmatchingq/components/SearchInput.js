export default function SearchInput({
    $target,
    initialState,
    onChange
}) {
    this.state = initialState;
    //폼태그 생성
    this.$element = document.createElement('form');
    //class지정
    this.$element.className = 'searchForm';
    //id가 App인 요소의 자식요소로 폼태그 추가
    $target.appendChild(this.$element);
    this.setState = (newState) => {
        this.state = newState;
    }
    this.render = () => {
        this.$element.innerHTML = `
        <input type="text" value="${this.state}" placeholder="검색할 언어를 입력하세요" />
        `
    }
    this.render();
    this.$element.addEventListener('keyup', (e) => {
        const exceptList = ['Enter', 'ArrowLeft', 'ArrowRight', 'ArrowUp', 'ArrowDown']
        if (!exceptList.includes(e.key)) {
            onChange(e.target.value);
        }

    })
    this.$element.addEventListener('submit', (e) => {
        e.preventDefault();
    })
}