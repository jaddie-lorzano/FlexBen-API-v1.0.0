export default class FlexCycleCutOff {
    constructor({
        flexCycleCutOffId,
        flexCycleId,
        startDate,
        endDate,
        isActive = true,
        cutOffCapAmount,
        cutOffDescription
    }) {
        this._flexCycleCutOffId = flexCycleCutOffId;
        this._flexCycleId = flexCycleId;
        this._startDate = startDate;
        this._endDate = endDate;
        this._isActive = isActive;
        this._cutOffCapAmount = cutOffCapAmount;
        this._cutOffDescription = cutOffDescription;
    }

    get flexCycleCutOffId() { return this._flexCycleCutOffId; }
    get flexCycleId() { return this._flexCycleId; }
    get startDate() { return this._startDate; }
    get endDate() { return this._endDate; }
    get isActive() { return this._isActive; }
    get cutOffCapAmount() { return this._cutOffCapAmount; }
    get cutOffDescription() { return this._cutOffDescription; }

    set flexCycleId(flexCycleId) { 
        this._flexCycleId = flexCycleId; 
        return this; 
    }
    set startDate(startDate) { 
        this._startDate = startDate; 
        return this; 
    }
    set endDate(endDate) { 
        this._endDate = endDate; 
        return this; 
    }
    set isActive(isActive) { 
        this.isActive = isActive; 
        return this; 
    }
    set cutOffCapAmount(cutOffCapAmount) { 
        this.cutOffCapAmount = cutOffCapAmount; 
        return this 
    }
    set cutOffDescription(cutOffDescription) { 
        this.cutOffDescription = cutOffDescription; 
        return this; 
    }
}