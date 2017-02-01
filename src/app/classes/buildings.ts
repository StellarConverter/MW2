export class Marketplace
{
    private _level:number;
    public get Level():number
    {
        return this._level;
    }
    public set Level(value:number)
    {
        if (value > 0)
        {
            this._level = value;
        }
    }   

    constructor()
    {
        this.Level = 1;
    }

    private _levelNames:string[]=['Stall', 'Tent', 'Shoppe', 'Alley', 'Marketplace', 'Plaza' ];

    public Name():string
    {
        if (this.Level < 7 )
        {
            return this._levelNames[this._level - 1];
        }
        else
        {
            let bazLevel = this._level - 6;
            return 'Bazaar Level ' + bazLevel;
        }
    }

    public GetUpgradePrice() : number
    {
        //return Math.pow(3, this._level);
        return Math.pow(2, this._level);
    }
}


export class ArmyCamp
{
    private _level:number;
    public get Level():number
    {
        return this._level;
    }
    public set Level(value:number)
    {
        if (value > 0)
        {
            this._level = value;
        }
    }   

    constructor()
    {
        this.Level = 1;
    }

    private _levelNames:string[]=['Basement', 'Gravel Pit', 'Tennis Court', 'Weight Room', 'Gym', 'Arena' ];

    public Name():string
    {
        if (this.Level < 5 )
        {
            return this._levelNames[this._level - 1];
        }
        else
        {
            return 'Stadium Level ';// + this._level - 5;   LOLCAT
        }
    }
}
