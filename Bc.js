import { StyleSheet } from 'react-native';

const bc = StyleSheet.create({
    // Backgound colors
    black:{backgroundColor: 'black'},
    orange:{backgroundColor: 'orange'},
    skyblue:{backgroundColor: 'skyblue'},
    link:{backgroundColor: '#0000C7'},
    mint:{backgroundColor: '#A2E4B8'},
    indigo:{backgroundColor: 'indigo'},
    red:{backgroundColor: 'red'},
    yellow:{backgroundColor: 'yellow'},
    gold:{backgroundColor: 'gold'},
    goldenrod:{backgroundColor: 'goldenrod'},
    green:{backgroundColor: '#4CAF50'},
    grass:{backgroundColor: '#50DD50'},
    // Text colors
    blackText:{color: 'black'},
    orangeText:{color: 'orange'},
    skyblueText:{color: 'skyblue'},
    linkText:{color: '#0000C7'},
    mintText:{color: '#A2E4B8'},
    indigoText:{color: 'indigo'},
    redText:{color: 'red'},
    yellowText:{color: 'yellow'},
    goldText:{color: 'gold'},
    goldenrodText:{color: 'goldenrod'},
    greenText:{color: '#4CAF50'},
    grassText:{color: '#50DD50'},
    // Border color
    blackBdc:{borderColor: 'black'},
    orangeBdc:{borderColor: 'orange'},
    skyblueBdc:{borderColor: 'skyblue'},
    linkBdc:{borderColor: '#0000C7'},
    mintBdc:{borderColor: '#A2E4B8'},
    indigoBdc:{borderColor: 'indigo'},
    redBdc:{borderColor: 'red'},
    yellowBdc:{borderColor: 'yellow'},
    goldBdc:{borderColor: 'gold'},
    goldenrodBdc:{borderColor: 'goldenrod'},
    greenBdc:{borderColor: '#4CAF50'},
    grassBdc:{borderColor: '#50DD50'},
    // Border type
    border:{borderWidth:1},
    border5:{borderWidth:5},
    border10:{borderWidth:10},
    border25:{borderWidth:25},
    // Opacity
    halfOpacity:{opacity:0.5},
    fullOpacity:{opacity:1},
    // Margin
    margin:{margin:0},
    margin10:{margin:10},
    margin25:{margin:25},
    // Border Radius
    radius0:{borderRadius:0},
    radius5:{borderRadius:5},
    radius10:{borderRadius:10},
    radius25:{borderRadius:25},
    // Other tuff
    fixed:{position:'fixed'},
    // Position based
    trueCenter:{
      position: 'fixed',
      top: '50%',
      left: '50%'
    },
    textAlign:{
      textAlign:'center'
    },
    alignItems:{alignItems: 'center'},
    // Padding
    padding0:{padding:0},
    padding5:{padding:5},
    padding10:{padding:10},
    padding25:{padding:25}
});

export { bc }
