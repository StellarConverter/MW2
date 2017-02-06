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

alert(this.DisplayName());//LOLCAT this is just for now

        if (this.builderAdjust != null)
        {
            zzz.Builder.RecoveryTime += this.builderAdjust;
        }
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
        this.desc ="the descrption goes here";
        this.builderAdjust = 3;
    }
}

export class Leery extends BaseCard
{
    constructor ()
    {
        super();
        this.displayName="Leery";
        this.desc ="the descrption goes here";
        this.builderAdjust = 1;
    }
}

export class Moribund extends BaseCard
{
    constructor ()
    {
        super();
        this.displayName="Moribund";
        this.desc ="the descrption goes here";
        this.builderAdjust = 2;
    }
}
