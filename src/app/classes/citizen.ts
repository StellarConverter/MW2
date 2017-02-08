import {StuffRoot} from './StuffRoot';
import {WarriorVictory, WarriorFailure, BaseCard} from './cards';

export abstract class CitizenBase
{
    public Name:string;
    public abstract Heartbeat(z:StuffRoot);
    public abstract GetSummary() : string;
}


export class Merchant extends CitizenBase
{
    constructor()
    {
        super();
        this.Name = 'Merchant';
    }

    public Heartbeat(z:StuffRoot)
    {
        z.Gold += z.Market.Level;
    }

    public GetSummary() : string
    {
        return "hello";
    }
}


export class Warrior extends CitizenBase
{
    public XP: number;
    public PersonalName:string;
    public Level:number;

    

    constructor()
    {
        super();
        this.PersonalName = "Konan";
        this.XP = 1;
        this.Level = 1;
        this.UpdateName();
    }

    Heartbeat(z:StuffRoot)
    {
        this.XP += z.Camp.Level;
        let maxXPForTHisLevel = this.MaxXPForLevel(this.Level);
        if (this.XP > maxXPForTHisLevel)
        {
            this.XP = maxXPForTHisLevel;
        }
    }

    public GetSummary() : string
    {
        return "Level:" + this.Level + " XP: "+ this.XP;
    }

    private UpdateName()
    {
        this.Name = "Warrior: " + this.PersonalName;//LOLCAT --- this should build a name based on title, such as {0} the Mighty, etc.
    }

    public MaxXPForLevel(targetLevel:number) : number
    {
        return targetLevel * 10;
    }

    public GetChanceString(): string
    {
        let maxXPForTHisLevel = this.MaxXPForLevel(this.Level);
        if (this.XP == maxXPForTHisLevel)
        {
            return "Victory is certain - do it noooowwwwww!!";
        }
        else
        {
            let chanceToGetNextLevel = this.GetChanceToGetNextLevel();
            return "Chance of success: " + chanceToGetNextLevel + "%";  
        }
    }

    public GetChanceToGetNextLevel(): number
    {
        let xpNextLevel = this.MaxXPForLevel(this.Level);
        return ( this.XP / xpNextLevel) * 100; 
    }
    
    public AttemptDeed(): BaseCard
    {
        let chanceGap = 100 - this.GetChanceToGetNextLevel();
        let randomNumber = 50;
        if (randomNumber >= chanceGap)
        {
            //success!
            this.Level++;
            this.XP = 1;
            return new WarriorVictory();
        } 
        else
        {
            //failure....
            this.XP = 1;
            return new WarriorFailure();
        }
    }
    
}

export class Builder extends CitizenBase
{
    RecoveryTime : number;

    constructor()
    {
        super();
        this.Name = 'Builder';
        this.RecoveryTime = 0;
    }

    Heartbeat(z:StuffRoot)
    {
        this.RecoveryTime--;
        if (this.RecoveryTime < 0)
        {
            this.RecoveryTime = 0;
        }
    }

    public GetSummary() : string
    {
        return "Recovery Time Left: "+ this.RecoveryTime;
    }

    public get IsReady():boolean
    {
         return this.RecoveryTime == 0;
     }
}
