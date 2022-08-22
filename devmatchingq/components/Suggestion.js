export default function Suggestoin({
    $target,
    initialState
}) {
    this.$element = document.createElement('div');
    this.$element.className = 'suggestion';
    $target.appendChild(this.$element)
    this.state = {
        fetchlist: initialState,
        selectedIndex: 0
    }
    this.setState = (nextState) => {
        this.state = {
            ...this.state,
            ...nextState
        }
        this.render();
    }
    this.render = () => {
        const { fetchlist = [], selectedIndex } = this.state;
        if (fetchlist.length > 0) {
            this.$element.style.display = 'block';
            this.$element.innerHTML = `
            <ul>
                ${fetchlist.map((list, index) => `<li class="${index === selectedIndex ?
                'Suggestion__item--selected'
                : ''}" data-index="${index}">${list}</li>`).join("")}
            </ul>
            `;
        } else {
            this.$element.style.display = 'none';
            this.$element.innerHTML = ``;
        }

    }
    this.render();
    window.addEventListener('keyup', (e) => {
        const { fetchlist = [], selectedIndex } = this.state;
        const inclusionKeys = ['ArrowUp', 'ArrowDown'];
        let nextIndex = selectedIndex;
        const lastIndex = fetchlist.length - 1;
        if (inclusionKeys.includes(e.key)) {
            if (e.key === 'ArrowUp') {
                nextIndex = nextIndex === 0 ? lastIndex : nextIndex - 1;
            }
            else {
                nextIndex = nextIndex === lastIndex ? 0 : nextIndex + 1;
            }
            this.setState({
                selectedIndex: nextIndex
            })
        } else if (e.key === 'Enter') {
            alert(fetchlist[this.state.selectedIndex])
        }
    })
}