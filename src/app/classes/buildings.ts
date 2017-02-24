export abstract class BuildingBase
{
    constructor()
    {
        this.Level = 1;
    }

    protected levelNames:string[];

    protected buildingLevel:number;
    public get Level():number
    {
        return this.buildingLevel;
    }
    public set Level(value:number)
    {
        if (value > 0)
        {
            this.buildingLevel = value;
        }
    }       

    public get Name():string
    {
        if (this.Level < this.levelNames.length )
        {
            return this.levelNames[this.Level - 1];
        }
        else
        {
            let sublevel = this.Level - (this.levelNames.length - 1);
            return this.levelNames[this.levelNames.length - 1] + ' L ' + sublevel;
        }
    }

    public abstract GetUpgradePrice() : number;       
}


export class Marketplace extends BuildingBase
{
    constructor()
    {
        super();
        this.levelNames=['Stall', 'Tent', 'Shoppe', 'Alley', 'Marketplace', 'Bazaar', 'Plaza' ];
    }

    public GetUpgradePrice() : number
    {
        return Math.pow(2, this.Level);
    }
}


export class ArmyCamp extends BuildingBase
{
    constructor()
    {
        super();
        this.levelNames=['Gravel Pit', 'Tennis Court', 'Gym', 'Arena', 'Stadium'];
    }

    public GetUpgradePrice() : number
    {
        return Math.pow(3, this.Level);
    }
}