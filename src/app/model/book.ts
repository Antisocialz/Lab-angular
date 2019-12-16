export class Book {
    constructor(
        public title: string,
        public author: string,
        public price?: number,
        public preview?: string,
        public desc: string = 'Sans description',
        public available: boolean = false,

    ) { }
}
