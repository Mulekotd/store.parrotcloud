import './GameCard.css';
import GamePromo from './GamePromo/GamePromo';

const GameCard = () => {

    const game = [
        <GamePromo
        image='https://firebasestorage.googleapis.com/v0/b/parrotcloud-5801b.appspot.com/o/games%2FThe%20Binding%20of%20Isaac%3A%20Rebirth%2Fcapsule_616x353.jpg?alt=media&token=7a96dec0-92d2-4847-a344-fe18a4e97a2c'
        price='R$ 27,99'
        newPrice='R$ 19,99'
        url = "https://store.steampowered.com/app/250900/The_Binding_of_Isaac_Rebirth/"
        name='The Biding of Isaac: Rebirth'
        key={1}
        />,
            
        <GamePromo
        image='https://firebasestorage.googleapis.com/v0/b/parrotcloud-5801b.appspot.com/o/games%2FHollow%20Knight%2Fhollow.jpg?alt=media&token=1ed8e0fa-476c-4fcf-ba7c-77416a5697c5'
        price='R$ 27,99'
        newPrice='R$ 10,99'
        url = "https://store.steampowered.com/app/367520/Hollow_Knight/"
        name='Hollow Knight'
        key={2}
        />,

        <GamePromo
        image='https://firebasestorage.googleapis.com/v0/b/parrotcloud-5801b.appspot.com/o/games%2FDays%20Gone%2Fdays%20gone%20(1).jpeg?alt=media&token=9142402d-a3cc-44e9-8b43-9272829636fd'
        price='R$ 199,90'
        newPrice='R$ 100,99'
        url = "https://store.steampowered.com/app/1259420/Days_Gone/"
        name='Days Gone'
        key={3}
        />,

        <GamePromo
        image='https://firebasestorage.googleapis.com/v0/b/parrotcloud-5801b.appspot.com/o/games%2FGatekeeper%2F7a6b99f1aec544f199bf7259767e4951.png?alt=media&token=808b3444-1a85-497d-a4bc-3fde4fdc8558'
        price='R$ 9,99'
        newPrice='R$ 8,00'
        url = "https://drive.google.com/file/d/1v6RTY-AH7-_TkItIthY6ZJVXPjGDSEN_/view?usp=sharing"
        name='GateKeeper'
        key={4}
        />,

        <GamePromo
        image='https://firebasestorage.googleapis.com/v0/b/parrotcloud-5801b.appspot.com/o/games%2FHotline%20Miami%202%3A%20Wrong%20Number%2F51d989f487f16291037f2a20fea23dab_large.jpg?alt=media&token=b7c84321-f04f-469a-a9b8-dc8ea0852f57'
        price='R$ 46,99'
        newPrice='R$ 29,99'
        url = "https://store.steampowered.com/app/274170/Hotline_Miami_2_Wrong_Number"
        name='Hotline Miami 2: Wrong Number'
        key={5}
        />,

        <GamePromo
        image='https://firebasestorage.googleapis.com/v0/b/parrotcloud-5801b.appspot.com/o/games%2FKatana%20Zero%2Fmaxresdefault.jpg?alt=media&token=6908984b-b7fc-47d4-aa19-ddef423a7ba4'
        price='R$ 28,99'
        newPrice='R$ 14,99'
        url = "https://store.steampowered.com/app/460950/Katana_ZERO/"
        name='Katana Zero'
        key={6}
        />,

        <GamePromo
        image='https://firebasestorage.googleapis.com/v0/b/parrotcloud-5801b.appspot.com/o/games%2FEnter%20the%20Gungeon%2Fheader.jpg?alt=media&token=000b01df-3c76-4e8b-9e86-5881f4ea70a0'
        price='R$ 46,99'
        newPrice='R$ 30,99'
        url = "https://store.steampowered.com/app/311690/Enter_the_Gungeon/"
        name='Enter the Gungeon'
        key={7}
        />,

        <GamePromo
        image='https://firebasestorage.googleapis.com/v0/b/parrotcloud-5801b.appspot.com/o/games%2FCuphead%2Fcapsule_616x353%20(1).jpg?alt=media&token=a1c72ca6-3973-4e02-a76e-d0966c176965'
        price='R$ 36,99'
        newPrice='R$ 20,99'
        url = "https://store.steampowered.com/app/268910/Cuphead/"
        name='Cuphead'
        key={8}
        />
    ]

    return (
        <div className='gamecard'>
            {game}
        </div>
    )
}

export default GameCard;