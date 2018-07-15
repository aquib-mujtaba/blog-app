export default class Comment {
    public id: number;
    public blogId: number;
    public name: string;
    public title: string;
    public text: string
constructor( id: number,blogId: number,name: string,title: string, text: string)
{
    this.id=id;
    this.blogId=blogId;
    this.name=name;
    this.title=title;
    this.text=text
}
} 