export class date {
    day:string;
    month:string;
    year:string;

    toProperDate(): Date {
        return new Date(+this.day,(+this.month)-1,+this.year);
    }
}