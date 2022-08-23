export default function SelectLists({
    $target,
    initialState
}){
    this.$element = document.createElement('div');
    this.$element.className = 'selectlists';
    $target.appendChild(this.$element);
    this.state = {
        selects : initialState
    }
    this.setState = (newState) => {
        this.state = {
            selects: newState
        };
        console.log(this.state)
        this.render();
    }
    this.render = () => {
        const { selects = [] } = this.state;
        console.log(selects)
        this.$element.innerHTML = `
        <ul>
            ${selects.map(list=>`<li>${list}</li>`).join('')}
        </ul>
        `;
    }
    this.render();
}