abstract class Weapon {
    private type: string;

    constructor(type: string) {
        this.type = type;
    }
    abstract fight() : void;
}
class AtomicBomb extends Weapon {
    constructor(type: string) {
        super(type);
    }

    fight(): void {
        console.log("Atomic bomb is selected!");
    }
}
class Axe extends Weapon {
    constructor(type: string) {
        super(type);
    }

    fight(): void {
        console.log("Axe is selected!");
    }
}
class Ballista extends Weapon {
    constructor(type: string) {
        super(type);
    }

    fight(): void {
        console.log("Ballista is selected!");
    }
}


class Player {
    private nickname: string;
    private hp: number;
    private score: number;
    private weapon: Weapon;
 
    public constructor(nickname: string, hp: number, score: number, weapon: Weapon) {
        this.nickname = nickname;
        this.hp = hp;
        this.score = score;
        this.weapon = weapon;
    }

    attack() :void {
        this.weapon.fight();
    }

    print() :void {
        console.log(`Nickname: ${this.nickname}`);
        console.log(`HP: ${this.hp}`);
        console.log(`Score: ${this.score}\n`);
    }
}

let weapon1: Weapon = new Axe("Double-bit axe");
let weapon2: Weapon = new AtomicBomb("Atomic bomb");
let weapon3: Weapon = new Ballista("Heavy balista");

let player1: Player = new Player("pro228", 6767, 666, weapon1);
let player2: Player = new Player("pro228", 2288, 333, weapon2);
let player3: Player = new Player("pro228", 4242, 123, weapon3);


player1.print();
player2.print();
player3.print();

player1.attack();
player2.attack();
player3.attack();