import { CitizenBase , Merchant, Warrior, Builder} from './citizen';
import {Marketplace, ArmyCamp} from './buildings';
import {Deck, BaseCard, UpgradeMarket, UpgradeCamp } from './cards';

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
    private currentcard: BaseCard;
    public get CurrentCard():BaseCard {return this.currentcard;}

    deckOfCards:Deck;

    constructor()
    {
        this.Merch = new Merchant();
        this.Warrior = new Warrior();
        this.Builder = new Builder();

        this.Citizens = [this.Warrior, this.Merch, this.Builder];

        this.Gold = 0;
        this.CycleCount = 0;

        this.cardRate = 5;
        this.currentcard = null;

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
            this.currentcard = card;
        }
        else
        {
            this.currentcard = null;
        }
    }

    public CanUpgradeMarket() : boolean
    {
        return  this.IsGaveActive && this.Builder.IsReady &&this.Gold >= this.Market.GetUpgradePrice();
    }

    public UpgradeMarket()
    {
        let price =this.Market.GetUpgradePrice(); 
        if (this.Gold >= price)
        {
            this.Gold -= price;
            this.Market.Level++;
            this.Builder.RecoveryTime+= this.Market.Level;
            this.currentcard = new UpgradeMarket();
            this.currentcard.AdditionalText="New Market Level: " + this.Market.Name;

        }
    }


    public CanUpgradeCamp() : boolean
    {
        return  this.IsGaveActive && this.Builder.IsReady && this.Gold >= this.Camp.GetUpgradePrice();
    }

    public UpgradeCamp()
    {
        let price =this.Camp.GetUpgradePrice(); 
        if (this.Gold >= price)
        {
            this.Gold -= price;
            this.Camp.Level++;
            this.Builder.RecoveryTime+= this.Camp.Level;
           this.currentcard = new UpgradeCamp();
           this.currentcard.AdditionalText="New Camp Level: " + this.Camp.Name;
        }
    }

    public AttemptDeed()
    {
        this.currentcard =  this.Warrior.AttemptDeed();
    }

    public get IsGaveActive() { return !this.Warrior.IsMaxLevel && this.CycleCount > 0; }

    public get IsGameComplete() { return this.Warrior.IsMaxLevel;}
}