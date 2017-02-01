import {StuffRoot} from './StuffRoot';

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

    Heartbeat(z:StuffRoot)
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
    XP: number;
    XPRate:number;

    constructor()
    {
        super();
        this.Name = 'Warrior';
        this.XPRate = 1;
        this.XP = 1;
    }

    Heartbeat(z:StuffRoot)
    {
        this.XP += this.XPRate;
    }

    public GetSummary() : string
    {
        return "XP: "+ this.XP + " XP Rate: " + this.XPRate;
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
}
