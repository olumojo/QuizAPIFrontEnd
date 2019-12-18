export class Constants {

    static getDays(): string[] {
        return ['1','2','3','4','5','6','7','8','9','10','11','12','13','14','15','16','17','18','19','20','21','22','23','24','25','26','28','29','30','31'];
    }

    static getMonth() : string[] {
        return ['Jan','Feb','Mar','Apr','May','June','July','Aug','Sep','Oct','Nov','Dec'];
    }

    static getYears(startYear: number) : string[] {
        var years: string [] =  [];
        var today = (new Date().getFullYear())-1;
        for(var num=startYear;num < today;num++) {
            years.push(num.toString())
         }
         return years;
        
    }

    static getRoles() : string[] {
        return ['Super Administrator','Administrator','User']
    }
}