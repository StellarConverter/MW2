import {StuffRoot } from './StuffRoot';

export abstract class BaseCard
{
    protected displayName:string;
    public DisplayName() { return this.displayName;}

    protected desc:string;
    public Description() {return this.desc};

    protected builderAdjust:number;
    public BuilderAdjust():number {return this.builderAdjust;} 

    public ApplyCard(zzz:StuffRoot)
    {
        if (this.builderAdjust != null)
        {
            zzz.Builder.RecoveryTime += this.builderAdjust;
        }

        //LOLCAT -- do other stuff
    }
}

export class Deck
{
    cards:BaseCard[];

   constructor()
    {
        this.Shuffle();
    }

    public Shuffle()
    {
        //LOLCAT -- this needs to be randomized
        this.cards = [new Flummoxed(), new Leery(), new Moribund()];
    }

    public TakeCard() : BaseCard
    {
        if (this.cards.length == 0)
        {
            this.Shuffle();
        }
        let result = this.cards[this.cards.length-1];
        this.cards.splice(this.cards.length - 1);//LOLCAT you are here
        return result;
    } 
}



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
        this.desc ="A dark mood settles over The Builder.  It is unlikely that he will be able to proceed until h's had a good sulk and a pout.";
        this.builderAdjust = 2;
    }
}
