export default class Calculator {
    constructor() {
        this.root = document.getElementById("app")
        this.rootView = document.createElement("div")
        this.calculatorResult = document.createElement("div")
        this.resultView = document.createElement("div")
        this.wrapperViewButton = document.createElement("div")

        this.currentOperator = undefined
        this.currentValue = ''
        this.secondValue = ''
        this.dataSource = [
            [
                {
                    type: 'number',
                    value: 0,
                    label: '0',
                    flex_grow: "2"
                },
                {
                    type: 'number',
                    value: ',',
                    label: '.',
                    flex_grow: "1"
                },
                {
                    type: 'equal',
                    value: '=',
                    label: '=',
                    isfunc: true,
                    flex_grow: "1"
                }
            ],
            [
                {
                    type: 'number',
                    value: 1,
                    label: '1',
                    flex_grow: "1"
                },
                {
                    type: 'number',
                    value: 2,
                    label: '2',
                    flex_grow: "1"
                },
                {
                    type: 'number',
                    value: 3,
                    label: '3',
                    flex_grow: "1"
                },
                {
                    type: 'operator',
                    value: '+',
                    label: '+',
                    isfunc: true,
                    flex_grow: "1"
                },
            ],
            [
                {
                    type: 'number',
                    value: 4,
                    label: '4',
                    flex_grow: "1"
                },
                {
                    type: 'number',
                    value: 5,
                    label: '5',
                    flex_grow: "1"
                },
                {
                    type: 'number',
                    value: 6,
                    label: '6',
                    flex_grow: "1"
                },
                {
                    type: 'operator',
                    value: '-',
                    label: '-',
                    isfunc: true,
                    flex_grow: "1"
                },
            ],
            [
                {
                    type: 'number',
                    value: 7,
                    label: '7',
                    flex_grow: "1"
                },
                {
                    type: 'number',
                    value: 8,
                    label: '8',
                    flex_grow: "1"
                },
                {
                    type: 'number',
                    value: 9,
                    label: '9',
                    flex_grow: "1"
                },
                {
                    type: 'operator',
                    value: '*',
                    label: '*',
                    isfunc: true,
                    flex_grow: "1"
                },
            ],
            [
                {
                    type: 'operator',
                    value: 'all',
                    label: 'AC',
                    flex_grow: "1"
                },
                {
                    type: 'operator',
                    value: 'arg',
                    label: '+/-',
                    flex_grow: "1"
                },
                {
                    type: 'operator',
                    value: 'per',
                    label: '%',
                    flex_grow: "1"
                },
                {
                    type: 'operator',
                    value: '/',
                    label: '/',
                    isfunc: true,
                    flex_grow: "1"
                },
            ]
        ]
        this.init()
    }
    init() {
        this.rootView.classList.add("wrapper")
        this.calculatorResult.classList.add("wrapper-calculator-view")
        this.resultView.classList.add("wrapper-calculator-result")
        this.wrapperViewButton.classList.add("wrapper-view-button")
        this.setResult(0)
        let _that = this

        this.dataSource.forEach(item => {
            let div = document.createElement("div")
            div.classList.add("wrapper-row")
            item.forEach(i => {
                let button = document.createElement("button")
                button.type = 'button'
                button.value = i.value
                button.innerText = i.label
                if (i.flex_grow === "2") {
                    button.classList.add("wrapper-button-two-column")
                } else button.classList.add("wrapper-button")
                if (i?.isfunc) {
                    button.style.background = '#F0A143'
                }
                button.dataset.type = i.type
                button.addEventListener('click', _that.handleClick.bind(_that))
                div.appendChild(button)
            })
            _that.wrapperViewButton.appendChild(div)
        })

        this.root.appendChild(this.rootView)
        this.rootView.appendChild(this.calculatorResult)
        this.rootView.appendChild(this.wrapperViewButton)
        this.calculatorResult.appendChild(this.resultView)
    }

    handleClick(e) {
        switch (e.target.dataset.type) {
            case 'operator':
                this.handleOperatorClick(e)
                break;
            case 'number':
                this.handleNumberClick(e)
                break;
            case 'equal':
                this.compute()
                break;
            default:
                break;
        }
    }
    handleNumberClick(e) {
        let value = (e.target.value).toString()
        if (this.currentOperator === undefined) {
            this.currentValue = this.currentValue + value
            this.setResult(this.currentValue)

        } else {
            this.secondValue = this.secondValue + value
            this.setResult(this.secondValue)

        }
        console.log(this.currentValue);
    }
    handleOperatorClick(e) {
        this.currentOperator = e.target.value
        console.log(this.currentOperator);
        // this.removeActiveOperator()
        this.activeClickedOperator()
    }

    setResult(value) {
        this.resultView.innerText = value
    }

    activeClickedOperator() {
        let _that = this
        let divOperator = document.querySelectorAll('[data-type="operator"]');
        divOperator.forEach(item => {
            item.classList.remove("clicked-button")
            if (item.value === _that.currentOperator) {
                item.classList.toggle("clicked-button")
            }
        })
    }
    removeActiveOperator() {
        let divOperator = document.querySelectorAll('[data-type="operator"]');
        divOperator.forEach(item => {
            item.classList.remove("clicked-button")
        })
    }

    compute(operator, value1, value2) {
        console.log('equal');
        switch (this.currentOperator) {
            case '+':
                this.resultValue= parseFloat(this.currentValue) + parseFloat(this.secondValue)
                break;
            case '-':
                this.resultValue= parseFloat(this.currentValue) - parseFloat(this.secondValue)
                break;
            case '*':
                this.resultValue= parseFloat(this.currentValue) * parseFloat(this.secondValue)
                break;
            case '/':
                this.resultValue= parseFloat(this.currentValue) / parseFloat(this.secondValue)
                break;
            default:
                break;
        }
        this.currentValue=this.resultValue.toString()
        this.setResult(this.resultValue)
        this.removeActiveOperator()
    }
}
