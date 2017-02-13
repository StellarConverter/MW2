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
    protected xp: number;
    public get XP() { return this.xp;}
    public set XP(val:number) 
    {
        let maxXPForTHisLevel = this.MaxXPForLevel(this.Level);
        if (val > maxXPForTHisLevel)
        {
            this.xp = maxXPForTHisLevel; 
        }
        else if (val < 0)
        {
            this.xp = 0;
        }
        else
        {
            this.xp = val;
        }
    }


    public Level:number;

    private personalName:string;
    public get PersonalName():string {return this.personalName;} 
    public set PersonalName(val:string)
    {
        this.personalName = val;
        this.UpdateName();
    }


    public get MaxLevel():number { return this.levelNames.length;}

    private levelNames:string[];

    constructor()
    {
        super();
        this.XP = 0;
        this.Level = 1;
        this.levelNames = ["Scrawny", "Meager", "Ample", "Sturdy", "Tough", "Mighty"];
        this.PersonalName = "Konan";
    }

    Heartbeat(z:StuffRoot)
    {
        this.XP += z.Camp.Level;
    }

    public GetSummary() : string
    {
        return "Level:" + this.Level + " XP: "+ this.XP;
    }

    private UpdateName()
    {
        this.Name = "Warrior: " + this.levelNames[this.Level-1] + " " + this.personalName;
    }

    public MaxXPForLevel(targetLevel:number) : number
    {
        return targetLevel * 10;
    }

    public get NextLevelDeedName() : string
    {
        return this.levelNames[this.Level];
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
        let randomNumber = 50; // LOLCAT -- this is not right
        if (randomNumber >= chanceGap)
        {
            //success!
            this.Level++;
            this.XP = 1;
            this.UpdateName();
            return this.createVictoryCard();
        } 
        else
        {
            //failure....
            this.XP = 1;
            return this.createFailureCard();
        }
    }

    public get IsMaxLevel() : boolean {return this.Level >= this.MaxLevel; }

    private createVictoryCard() : WarriorVictory
    {
        let result = new WarriorVictory();
        result.AdditionalText = "Your Warrior's new title is: " + this.levelNames[this.Level-1];
        return result;
    }

    private createFailureCard() : WarriorVictory
    {
        let result = new WarriorFailure();
        result.AdditionalText = "You remain '" + this.levelNames[this.Level-1] + "'";
        return result;
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
