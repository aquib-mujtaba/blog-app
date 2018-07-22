export class IBlog
{
    id: number;
    authorId: number;
    title: string;
    text: string;
    postedDate:string;

constructor(id: number,authorId: number,title: string,text: string, postedDate:string)
{

    this.id=id;
    this.authorId=authorId;
    this.title=title;
    this.postedDate=postedDate;
    this.text=text
}
}