export const INCREMENT = "INCREMENT";
export const DECREMENT = "DECREMENT";

export const incrementNumber=(number)=>{
    return {
        type: INCREMENT,
        payload:number,
    }
}