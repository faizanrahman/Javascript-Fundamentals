class ProgressBar extends HTMLElement {

    constructor(){
        super();

        this.shadow = this.createShadowRoot();
        this._complete = 0;
    }

    get complete() {
        return this._complete;
    }

    set complete(value) {
        this.setAttribute('complete', value);
    }

    static get observedAttributes() {
        return ['complete'];    
    }

    attributeChangedCallback(name, oldVal, newVal) {
        var innerBar = this.shadow.querySelector('.progress-bar-inner');
        
        switch(name){
            case 'complete':
                this._complete = parseInt(newVal, 0) || 0;

                innerBar.style.width = this.complete + '%';
                innerBar.innerHTML = this.complete + '%';
        }
    }

    connectedCallback() {
        var template = `
            <style>
                .progress-bar {
                    width: 50%;
                    height: 30px;
                    background-color: #EDF2F4;
                    border-radius: 5px;
                    color: #FFF;
                }

                .progress-bar-inner {
                    height: 100%;
                    line-height: 30px;
                    background: #2B2D42;
                    text-align: center;
                    border-radius: 5px;
                    transition: width 0.25s;
                }
            </style>
            <div class="progress-bar">
                <div class="progress-bar-inner">${this._complete}%</div>
            </div>
        `;

        this.shadow.innerHTML = template;
    }
}

// Register the component
window.customElements.define('progress-bar', ProgressBar);
