export class TrafficSigns {
    id: number;
    type: string;
    name: string;
    code: string;
    description: string;
    img: string;

    constructor(type: string, name: string, code: string, description: string, img: string) {
        this.type = type;
        this.name = name;
        this.code = code;
        this.description = description;
        this.img = img;
    };
}
