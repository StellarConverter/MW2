import {StuffRoot } from './StuffRoot';

export abstract class BaseCard
{
    protected displayName:string;
    public get DisplayName() :string { return this.displayName;}

    protected desc:string;
    public get Description() {return this.desc};

    protected builderAdjust:number;
    public get BuilderAdjust():number {return this.builderAdjust;} 

    protected additionalText:string;
    public get AdditionalText():string {return this.additionalText;}
    public set AdditionalText(val:string) { this.additionalText = val;}

    protected goldAdjust:number;
    public get GoldAdjust():number {return this.goldAdjust;}

    protected warriorResetXP:boolean;
    public get WarriorResetXP() { return this.warriorResetXP;}

    protected xpAdjust:number;
    public get XPAdjuist() { return this.xpAdjust;}     

    public ApplyCard(zzz:StuffRoot)
    {
        if (this.builderAdjust != null)
        {
            zzz.Builder.RecoveryTime += this.builderAdjust;
        }

        if (this.GoldAdjust != null)
        {
            zzz.Gold += this.GoldAdjust;
        }

        if (this.WarriorResetXP == true)
        {
            zzz.Warrior.XP = 0;
        }

        if (this.xpAdjust != null)
        {
            zzz.Warrior.XP += this.XPAdjuist; 
        }
    }
}

export class Deck
{
    private cards:BaseCard[];

   constructor()
    {
        this.Shuffle();
    }

    public Shuffle()
    {
        let allCards = this.getAllPlayingCards();
        let allCardsLength = allCards.length; 
        this.cards = [];

        for (let idx = 0; idx < allCardsLength ; idx++)
        {
           let targetIdx =  Math.floor(Math.random() * allCards.length);
           this.cards.push(allCards[targetIdx]);
           allCards.splice(targetIdx, 1);
        }
    }

    private getAllPlayingCards() : BaseCard[]
    {
        return [
            new Flummoxed(), new Leery(), new Moribund(), new Mercurial(), new Crestfallen(),
            new BeatenSoundly(), new MagicBeans(), new ScandalousLeggings(), new Bamboozler, new BoldLimericks(), new ElixirOfArdor(),
            new MortalWombat(), new DireHedgehog(),
            new NothingHappens()];
    }

    public TakeCard() : BaseCard
    {
        if (this.cards.length == 0)
        {
            this.Shuffle();
        }
        let result = this.cards[this.cards.length-1];
        this.cards.splice(this.cards.length - 1);
        return result;
    } 
}


/////////  MISC CARDS


export class NothingHappens extends BaseCard
{
    constructor ()
    {
        super();
        this.displayName="Nothing Happens";
        this.desc = "Nothing particularly interesting happens today.";
    }
}

//////////// BUILDER CARDS


export class Flummoxed extends BaseCard
{
    constructor ()
    {
        super();
        this.displayName="Flummoxed";
        this.desc ="The Builder has become flummoxed.  It will take some time for his mind to clear... being a Builder is a complicated thing.";
        this.builderAdjust = 3;
    }
}

export class Leery extends BaseCard
{
    constructor ()
    {
        super();
        this.displayName="Leery";
        this.desc ="The Builder has become leery of progressing further.  Perhaps he'll need to have a sit down and think things through before resuming his duties.";
        this.builderAdjust = 1;
    }
}

export class Moribund extends BaseCard
{
    constructor ()
    {
        super();
        this.displayName="Moribund";
        this.desc ="A dark mood settles over The Builder.  It is unlikely that he will be able to proceed until he's had a good sulk and a pout.";
        this.builderAdjust = 2;
    }
}

export class Mercurial extends BaseCard
{
    constructor ()
    {
        super();
        this.displayName="Mercurial";
        this.desc = "The Builder stalks off the work site in a fit of rage.  Sometimes the Builder's poor mastery of his moods is his undoing.";
        this.builderAdjust = 2;
    }
}

export class Crestfallen extends BaseCard
{
    constructor ()
    {
        super();
        this.displayName="Crestfallen";
        this.desc = "The Builder acutely feels that his expectations of a better life are out of reach.  He's taking a personal day today to sort things out.";
        this.builderAdjust = 1;
    }
}


/////////////// MERCHANT CARDS


export class BeatenSoundly extends BaseCard
{
    constructor()
    {
        super();
        this.displayName="Beaten Soundly";
        this.desc = "The Merchant teases the Warrior, and is beaten soundly.  It requires some gold to heal The Merchant.";
        this.goldAdjust = -5;
        this.xpAdjust = 1;
    }
}

export class MagicBeans extends BaseCard
{
    constructor()
    {
        super();
        this.displayName="Magic Beans";
        this.desc = "The Merchant invests the Kingdom's gold in magic beans.  They don't pan out.";
        this.goldAdjust = -5;
    }
}

export class ScandalousLeggings extends BaseCard
{
    constructor()
    {
        super();
        this.displayName="Scandalous Leggings";
        this.desc = "The Merchant is spotted wearing leggings of a scandalous nature in a neighhboring village.  It costs money to spring him from jail.";
        this.goldAdjust = -10;
    }
}

export class BoldLimericks extends BaseCard
{
    constructor()
    {
        super();
        this.displayName="Bold Limericks";
        this.desc = "The Merchant is overheard reciting limericks of a bold nature in a neighhboring village.  It costs money to spring him from jail.";
        this.goldAdjust = -7;
    }
}

export class Bamboozler extends BaseCard
{
    constructor()
    {
        super();
        this.displayName="Bamboozler";
        this.desc = "The Merchant manages to bamboozle some hapless citizens in a neighhboring village.  His winnings are confiscated (for the good of our Kingdom).";
        this.goldAdjust = 5;
    }
}

export class ElixirOfArdor extends BaseCard
{
    constructor()
    {
        super();
        this.displayName="Elixir of Ardor";
        this.desc = "The Merchant does a brisk trade in an elixir for increasing manly ardor.  The Kingdom's future prosperity is looking up.";
        this.goldAdjust = 10;
    }
}


////////////////// WARRIOR CARDS


export class MortalWombat extends BaseCard
{
    constructor()
    {
        super();
        this.displayName="Mortal Wombat";
        this.desc = "The Warrior attempts to defeat a giant wombat in combat... The Warrior is thrashed severely.";
        this.warriorResetXP = true;
    }
}

export class DireHedgehog extends BaseCard
{
    constructor()
    {
        super();
        this.displayName="Dire Hedgehog";
        this.desc = "The Warrior tussles with, and defeats, a Dire Hedgehog.  The Kingdom is safe once again!";
        this.xpAdjust = 5;
    }
}

///////////////////// ACTION CARDS

export class WarriorVictory extends BaseCard
{
    constructor ()
    {
        super();
        this.displayName="Victory!";
        this.desc ="You have moved to a new level";
    }
}


export class WarriorFailure extends BaseCard
{
    constructor ()
    {
        super();
        this.displayName="Failure";
        this.desc ="You tried....   but it was not to be";
    }
}

export class UpgradeMarket extends BaseCard
{
    constructor()
    {
        super();
        this.displayName="Market Upgraded";
    }
}


export class UpgradeCamp extends BaseCard
{
    constructor()
    {
        super();
        this.displayName="Camp Upgraded";
    }
}