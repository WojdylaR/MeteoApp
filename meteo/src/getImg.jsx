export default function GetImg(i){

    let address;
    switch(i.i) {
        case 0:
            address= 'soleil.svg'
            break;
        case 1:
            address= 'nuage-soleil.svg'
            break;
        case 2:
            address= 'nuage-soleil.svg'
            break;
        case 3:
            address= 'nuage.svg'
            break;
        case 4:
            address= 'nuage.svg'
            break;
        case 5:
            address= 'nuage.svg'
            break;
        case 6:
            address= 'nuage.svg'
            break;
        case 7:
            address= 'nuage.svg.svg'
            break;
        case 10:
            address= 'pluie-soleil.svg'
            break;
        case 11:
            address= 'pluie.svg'
            break;
        case 12:
            address= 'pluie.svg'
            break;
        case 13:
            address= 'pluie.svg'
            break;
        case 14:
            address= 'pluie.svg'
            break;
        case 15:
            address= 'pluie.svg'
            break;
        case 16:
            address= 'pluie.svg'
            break;
        case 20:
            address= 'neige-soleil.svg'
            break;
        case 21:
            address= 'neige.svg'
            break;
        case 22:
            address= 'neige.svg'
            break;
        case 30:
            address= 'neige.svg'
            break;
        case 31:
            address= 'neige.svg'
            break;
        case 32:
            address= 'neige.svg'
            break;
        case 40:
            address= 'pluie-soleil.svg'
            break;
        case 41:
            address= 'pluie-soleil.svg'
            break;
        case 42:
            address= 'pluie-soleil.svg'
            break;
        case 43:
            address= 'pluie-soleil.svg'
            break;
        case 44:
            address= 'pluie-soleil.svg'
            break;
        case 45:
            address= 'pluie-soleil.svg'
            break;
        case 46:
            address= 'pluie-soleil.svg'
            break;
        case 47:
            address= 'pluie-soleil.svg'
            break;
        case 48:
            address= 'pluie-soleil.svg'
            break;
        case 60:
            address= 'neige-soleil.svg'
            break;
        case 61:
            address= 'neige-soleil.svg'
            break;
        case 62:
            address= 'neige-soleil.svg'
            break;
        case 63:
            address= 'neige-soleil.svg'
            break;
        case 64:
            address= 'neige-soleil.svg'
            break;
        case 65:
            address= 'neige-soleil.svg'
            break;
        case 66:
            address= 'neige-soleil.svg'
            break;
        case 67:
            address= 'neige-soleil.svg'
            break;
        case 68:
            address= 'neige-soleil.svg'
            break;
        case 70:
            address= 'pluie.svg'
            break;
        case 71:
            address= 'pluie.svg'
            break;
        case 72:
            address= 'pluie.svg'
            break;
        case 73:
            address= 'pluie.svg'
            break;
        case 74:
            address= 'pluie.svg'
            break;
        case 75:
            address= 'pluie.svg'
            break;
        case 76:
            address= 'pluie.svg'
            break;
        case 77:
            address= 'pluie.svg'
            break;
        case 78:
            address= 'pluie.svg'
            break;
        case 100:
            address= 'orage.svg'
            break;
        case 101:
            address= 'orage.svg'
            break;
        case 102:
            address= 'orage.svg'
            break;
        case 103:
            address= 'orage.svg'
            break;
        case 104:
            address= 'orage.svg'
            break;
        case 105:
            address= 'orage.svg'
            break;
        case 106:
            address= 'orage.svg'
            break;
        case 107:
            address= 'orage.svg'
            break;
        case 108:
            address= 'orage.svg'
            break;
        case 120:
            address= 'orage.svg'
            break;
        case 121:
            address= 'orage.svg'
            break;
        case 122:
            address= 'orage.svg'
            break;
        case 123:
            address= 'orage.svg'
            break;
        case 124:
            address= 'orage.svg'
            break;
        case 125:
            address= 'orage.svg'
            break;
        case 126:
            address= 'orage.svg'
            break;
        case 127:
            address= 'orage.svg'
            break;
        case 128:
            address= 'orage.svg'
            break;
        case 130:
            address= 'orage.svg'
            break;
        case 131:
            address= 'orage.svg'
            break;
        case 132:
            address= 'orage.svg'
            break;
        case 133:
            address= 'orage.svg'
            break;
        case 134:
            address= 'orage.svg'
            break;
        case 135:
            address= 'orage.svg'
            break;
        case 136:
            address= 'orage.svg'
            break;
        case 137:
            address= 'orage.svg'
            break;
        case 138:
            address= 'orage.svg'
            break;
        case 140:
            address= 'orage.svg'
            break;
        case 141:
            address= 'orage.svg'
            break;
        case 142:
            address= 'pluie-soleil.svg'
            break;
        case 210:
            address= 'pluie-soleil.svg'
            break;
        case 211:
            address= 'pluie-soleil.svg'
            break;
        case 212:
            address= 'pluie-soleil.svg'
            break;
        case 220:
            address= 'neige-soleil.svg'
            break;
        case 221:
            address= 'neige-soleil.svg'
            break;
        case 222:
            address= 'neige-soleil.svg'
            break;
        case 230:
            address= 'pluie.svg'
            break;
        case 231:
            address= 'pluie.svg'
            break;
        case 232:
            address= 'pluie.svg'
            break;
        case 235:
            address= 'orage.svg'
            break;
    }
    return(
        <div>
            <img alt='imeMeteo' src={require(`./Assets/${address}`)} />
        </div>
    ) 
}