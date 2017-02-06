import { CitizenBase , Merchant, Warrior, Builder} from './citizen';
import {Marketplace, ArmyCamp} from './buildings';
import {Deck, BaseCard } from './cards';

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

    cardRate:number;

    deckOfCards:Deck;

    constructor()
    {
        this.Merch = new Merchant();
        this.Warrior = new Warrior();
        this.Builder = new Builder();

        this.Citizens = [this.Warrior, this.Merch, this.Builder];

        this.Gold = 0;
        this.CycleCount = 0;
        this.cardRate = 15;

        this.Market = new Marketplace();
        this.Camp = new ArmyCamp();

        this.deckOfCards = new Deck();
    }

    public ExecuteNext()
    {
        this.CycleCount++;
        for (let citizen of this.Citizens)
        {
            citizen.Heartbeat(this);
        }
        if (this.CycleCount % this.cardRate == 0)
        {
            let card = this.deckOfCards.TakeCard();
            card.ApplyCard(this);
            //LOLCAT -- now do something... update UI, swap to report
        }
    }

    public CanUpgradeMarket() : boolean
    {
        return  this.Builder.IsReady &&this.Gold >= this.Market.GetUpgradePrice();
    }

    public UpgradeMarket()
    {
        let price =this.Market.GetUpgradePrice(); 
        if (this.Gold >= price)
        {
            this.Gold -= price;
            this.Market.Level++;
            this.Builder.RecoveryTime+= this.Market.Level;
        }
    }


    public CanUpgradeCamp() : boolean
    {
        return this.Builder.IsReady && this.Gold >= this.Camp.GetUpgradePrice();
    }

    public UpgradeCamp()
    {
        let price =this.Camp.GetUpgradePrice(); 
        if (this.Gold >= price)
        {
            this.Gold -= price;
            this.Camp.Level++;
            this.Builder.RecoveryTime+= this.Camp.Level;
        }
    }

    public AttemptDeed()
    {
        this.Warrior.AttemptDeed();
    }
}