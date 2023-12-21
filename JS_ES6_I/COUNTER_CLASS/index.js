class Counter{
    constructor(){
        this.toggleBtn = document.getElementById('startCount')
        this.incrementBtn = document.getElementById('incrementCount')
        this.decrementBtn = document.getElementById('decrementCount')
        this.counterValue = document.getElementById('counterDisplay')
        this.value = 0
        this.intervalID = null
        this.autoIncrementEnabled = false

        this.toggleBtn.addEventListener('click', this.toggle.bind(this));
        this.incrementBtn.addEventListener('click', this.increment.bind(this));
        this.decrementBtn.addEventListener('click', this.decrement.bind(this));
    }

    toggle(){
        if (this.autoIncrementEnabled) {
            this.stopAutoIncrement()
        }
        else {
            this.startAutoIncrement()
        }
    }

    startAutoIncrement(){
        this.autoIncrementEnabled = true;
        this.intervalId = setInterval(() => {
            this.value++
            this.updateCounter()
        }, 1000)
        this.toggleBtn.textContent = 'Stop'
    }

    stopAutoIncrement(){
        this.autoIncrementEnabled = false
        clearInterval(this.intervalId)
        this.toggleBtn.textContent = 'Start'
    }

    increment(){
        this.stopAutoIncrement()
        this.value++
        this.updateCounter()
    }

    decrement(){
        this.stopAutoIncrement()
        this.value--
        this.updateCounter()
    }

    updateCounter(){
        this.counterValue.textContent = this.value
    }
}

const counterInstance = new Counter()