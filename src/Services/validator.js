export class ValidatorServices{
    static min(inputValue,min){
        if(inputValue.length < min){
            return true;
        }
       
    }
    static max(inputValue,max){
        if(inputValue.length>max){
            return `Cannot be greater than ${max}`;
        }
    }
}