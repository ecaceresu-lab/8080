class FPU {
    constructor() {
        this.operandA = 0.0;
        this.operandB = 0.0;
        this.result = 0.0;
        this.status = "IDLE"; // IDLE, BUSY, DONE
    }

    setOperandA(val) {
        this.operandA = parseFloat(val);
    }

    setOperandB(val) {
        this.operandB = parseFloat(val);
    }

    // Ejecuta la operación basada en un código de operación
    execute(opCode) {
        this.status = "BUSY";
        switch (opCode) {
            case 1: // Suma
                this.result = this.operandA + this.operandB;
                break;
            case 2: // Resta
                this.result = this.operandA - this.operandB;
                break;
            case 3: // Multiplicación
                this.result = this.operandA * this.operandB;
                break;
            case 4: // División
                this.result = this.operandB !== 0 ? this.operandA / this.operandB : 0;
                break;
            default:
                this.result = 0.0;
        }
        this.status = "DONE";
        this.updateUI();
        return this.result;
    }

    updateUI() {
        const opAEl = document.getElementById('fpu-op-a');
        const opBEl = document.getElementById('fpu-op-b');
        const resEl = document.getElementById('fpu-result');
        const statusEl = document.getElementById('fpu-status');

        if (opAEl) opAEl.innerText = this.operandA;
        if (opBEl) opBEl.innerText = this.operandB;
        if (resEl) resEl.innerText = this.result.toFixed(4);
        if (statusEl) statusEl.innerText = this.status;
    }
}

const fpuInstance = new FPU();
