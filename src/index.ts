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
        console.log();
    }

    print() :void {
        console.log(`Nickname: ${this.nickname}`);
        console.log(`HP: ${this.hp}`);
        console.log(`Score: ${this.score}`);
        console.log(`Weapon: ${this.weapon}`);
    }
}

let weapon1: Weapon = new Axe("Double-bit axe");
let player1: Player = new Player("pro228", 6767, 666, weapon1);

player1.print();