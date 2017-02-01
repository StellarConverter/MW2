import { CitizenBase , Merchant, Warrior, Builder} from './citizen';
import {Marketplace, ArmyCamp} from './buildings';

export class StuffRoot
{
    Name:string;
    Merch:Merchant;
    Warrior:Warrior;
    Builder:Builder;
    Citizens:CitizenBase[];

    Gold:number;
    CycleCount:number;

    Market:Marketplace;
    Camp:ArmyCamp;

    constructor()
    {
        this.Merch = new Merchant();
        this.Warrior = new Warrior();
        this.Builder = new Builder();

        this.Citizens = [this.Warrior, this.Merch, this.Builder];

        this.Gold = 0;
        this.CycleCount = 0;

        this.Market = new Marketplace();
        this.Camp = new ArmyCamp();
    }

    public ExecuteNext()
    {
        for (let citizen of this.Citizens)
        {
            citizen.Heartbeat(this);
        }
    }

    public CanUpgradeMarket() : boolean
    {
        return this.Gold >= this.Market.GetUpgradePrice();
    }

    public UpgradeMarket()
    {
        let price =this.Market.GetUpgradePrice(); 
        if (this.Gold >= price)
        {
            this.Gold -= price;
            this.Market.Level++;
        }
    }
}