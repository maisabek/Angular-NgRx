export const INCREMEANT = '[Counter] increament'
export const DECREMEANT = '[Counter] decreament'

export class incremeantAction {
    type:string = INCREMEANT;
    payload : number
    constructor(payload:number){
        this.payload=payload;
    }
}
export class decremeantAction {
    type:string = DECREMEANT;
    payload : number
    constructor(payload:number){
        this.payload=payload;
    }
}