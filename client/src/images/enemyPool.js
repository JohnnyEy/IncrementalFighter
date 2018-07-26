import deathKnight from './enemies/death_knight.png';
import demon from './enemies/demonspawn_black_male.png';
import elf from './enemies/deep_elf_high_priest.png';
import formicid from './enemies/formicid.png';
import gnoll from './enemies/gnoll_new.png';
import serpent from './enemies/guardian_serpent_new.png';
import hippo from './enemies/hippogriff_new.png';
import merfolk from './enemies/merfolk_impaler_old.png';
import beast from './enemies/mutant_beast.png';
import ogre from './enemies/ogre_old.png';
import orc from './enemies/orc_knight_old.png';



var imageSrc = deathKnight;
// var poolOfEnemies = [{hp: this.props.hp, 
//                         characterPic: this.props.pictureId}]

//     for(let i =0; i < poolOfEnemies.length;) {
//         if(this.props.hp <= 10) {
//             i++;
//         }
//         //display the image of character
//     }

const enemy = () => {

    if (imageSrc===demon){
        imageSrc = deathKnight
    } else if(imageSrc===deathKnight){
        imageSrc = elf
    } else if(imageSrc===elf){
        imageSrc = formicid
    } else if(imageSrc===formicid){
        imageSrc = gnoll
    } else if(imageSrc===gnoll){
        imageSrc = serpent
    } else if(imageSrc===serpent){
        imageSrc = hippo
    } else if(imageSrc===hippo){
        imageSrc = merfolk
    } else if(imageSrc===merfolk){
        imageSrc = beast
    } else if(imageSrc===beast){
        imageSrc = ogre
    } else if(imageSrc===ogre){
        imageSrc = orc
    } else {
        imageSrc = demon
    }

    return imageSrc;
}

export {enemy, imageSrc};