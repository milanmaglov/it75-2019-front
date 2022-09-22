import { Nacionalnost } from "./nacionalnost";
import { Tim } from "./tim";

export class Igrac{
    id!: number;
    brojReg!: number;
    datumRodjenja!: Date;
    ime!: string;
    prezime!: string;
    tim!: Tim;
    nacionalnost!: Nacionalnost;
}