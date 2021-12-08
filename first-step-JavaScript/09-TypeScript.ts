const input1 : number = 10;
const input2 : number = 15;

function sum(a : number,b : number) : number {
    return a + b
}

console.log(sum(input1, input2));

// boolean
let isOpen: boolean;
isOpen = true;

// string
let message: string;
message = `foo ${isOpen}`

// number
let total: number = 15;

// array (type[])
let items: string[];
items = ['foo', 'bar'];

let values: Array<number>;
values = [1,2,3];

// tuple
let title: [number, string, string];
title = [1, 'foo', 'bar'];

// enum
enum Colors {
    blue = '#3236a8',
    red = '#e02c10',
    white = '#fff',
    black = '#000'
}

// any (anything). Is not cool.
let coisa: any;
coisa = [1,2,3];
coisa = '123'
coisa = 123

// void (vazio)
function logger(): void {
    console.log('foo');
}

// null | undefined
let variable: null

// never
function error(): never {
    throw new Error('error');
}

// object
let cart : object;

cart = {
    key : 'foo'
}

// Type inference
let message2 = 'Lorem ipsum dolor.'
message2 = 'Lorem ipsum dolor sit amet, consectetur.'

// Type alias
type Uid = number | string | undefined;

function logInfo(uid : Uid, user : string){
    console.log(`An user with ${uid} has a name as ${user}.`);
}

logInfo(123, "Raul Aquino");
logInfo("123", "Raul Aquino");

type Platform = 'Windows' | 'Linux' | 'MAC OS' | 'IOS'

function renderPlatform(platform: Platform) {
    return platform;
}

renderPlatform('IOS');

type AccountInfo = {
    id: number;
    name: string;
    email?: string;
}

const account: AccountInfo = {
    id: 123,
    name : "Raul Aquino"
}

type ChartInfo = {
    nickname: string;
    level: number
}

const char: ChartInfo = {
    nickname : "Raulzinho Gameplay",
    level : 100
}

// Intersection
type PlayerInfo = AccountInfo & ChartInfo

const player : PlayerInfo = {
    id : 123,
    name : "Raul Aquino",
    nickname : "Raulzinho Gameplays",
    level : 100
}

console.log(account, char);
console.log(player);

// Class
class UserAccount {
    name! : string;
    age! : number;

    constructor(name : string, age : number) {
        this.name = name;
        this.age = age;
    }
}

const raul = new UserAccount("Raul Aquino", 22);
console.log(raul);

class CharAccount extends UserAccount {
    nickname! : string;
    level!: number;

    constructor(name: string, age : number, nickname : string, level : number){
        super(name, age);

        this.nickname = nickname;
        this.level = level;
    }
}

const raulzinho = new CharAccount("Raul", 22, "Raulzinho Gameplay", 150);
console.log(raulzinho);

interface Game {
    title : string;
    description : string;
    genre : string;
    platform ?: string[];
    getSimilars ?: (title : string) => void;
}

const tlou : Game = {
    title : 'The Last of Us',
    description : 'The best game in the world',
    genre : 'Action',
    platform : ['PS3', 'PS4'],
    getSimilars: (title : string) => {
        console.log(`Similar games to ${title} : Uncharted`);
    }
}

class CreateGame implements Game {
    title: string;
    description: string;
    genre: string;

    constructor(t : string, d : string, g : string) {
        this.title = t;
        this.description = d;
        this.genre = g;
    }
}