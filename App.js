import { StatusBar } from 'expo-status-bar';
import React, { Component } from 'react'
import { Share, StyleSheet, Image, Text, View, Button, Animated, ActivityIndicator } from 'react-native';
import { TouchableOpacity } from 'react-native-gesture-handler';
import { Ionicons } from '@expo/vector-icons';
import { Entypo } from '@expo/vector-icons'; 

const quotes = [
{
  message:  'Quiconque substitue la mécréance à la foi ségare du droit chemin.',
  author: 'Sourate II V 108',
},{
  message:  'Ne semez pas la corruption sur la terre.',
  author: 'Sourate II V 11',
},{
  message:  'Ne semez pas de troubles sur la terre comme des fauteurs de désordre.',
  author: 'Sourate II V 60',
},{
  message:  'Dieu vous a fait la terre pour lit, et le ciel pour toit.',
  author: 'Sourate II V 20',
},{
  message:  'À celui qui est dans la gêne, accordez un sursis jusquà ce quil soit dans laisance.',
  author: 'Sourate II V 280',
},{
  message:  'La vérité plane et ne se laisse jamais dominer.',
  author: 'Sourate IX V 33',
},{
  message:  'Soyez généreux et justes envers ceux qui respectent votre religion.',
  author: 'Sourate LX V 8',
},{
  message:  "On sera placé, le Jour du Jugement, parmi les gens qu'on aura aimé.",
  author: 'Prophet Muhammad',
}, {
  message: "Quiconque veut apprendre la Science des premiers et des derniers, qu'il lise le Coran.",
  author: 'Prophet Muhammad',
}, {
  message:"La vraie richesse d'un homme en ce monde se mesure au bien qu'il a fait autour de lui.",
    author: 'Prophet Muhammad',
}, {
  message: 'Ce que vous faites de bien et de mal, vous le faites à vous-même.',
  author: 'Prophet Muhammad',
},{
  message: 'Lisez le Coran, car Allah ne torturera pas un coeur qui aura contenu le Coran.',
  author: 'Prophet Muhammad',
},{
  message: 'Ne choisissez pas ce qui est vil ou défectueux pour en faire un acte de charité.',
  author: 'Sourate II V 267',
},{
  message: 'Croyants, réservez pour vos aumônes le meilleur de ce que vous possédez.',
  author: 'Sourate II V 267',
},{
  message: 'Ne livrez pas aux incapables les biens que Dieu vous a accordés.',
  author: 'Sourate IV V 5',
},{
  message: 'Ceux qui savent repousser le mal par le bien hériteront du paradis.',
  author: 'Sourate XXXXIX V 11 ',
},{
  message: 'Ne vous tournez pas les uns les autres en ridicule.',
  author: 'Sourate XXXXIX V 11',
},{
  message: 'Qui souffre avec patience accomplit une action méritoire.',
  author: 'Sourate XVI V 127',
},{
  message: 'Le paradis est aux pieds des mères.',
  author: 'Proverbe Soufi',
},{
  message: 'Allah, donne-moi un fils, et mets le comble à tes faveurs.',
  author: 'Sourate XIX V 5',
},{
  message: 'Malheur à ceux qui pèsent à faux poids.',
  author: 'Sourate LXXXIII V 1',
},{
  message: 'Que ceux qui veulent un appui le cherchent en Dieu.',
  author: 'Sourate XIV V 15',
},{
  message: 'Dieu pardonne le passé, mais celui qui retombera éprouvera la vengeance céleste.',
  author: 'Sourate V V 96',
},{
  message: 'Les dissipateurs sont les frères de Satan.',
  author: 'Sourate XVII V 29',
},{
  message: "Se plaindre à un autre que Dieu, c'est s'avilir.",
  author: 'Proverbe Soufi',
},{
  message: "Le paradis n'est pas le séjour des superbes.",
  author: 'Sourate VII V 12',
},{
  message: 'Vos femmes sont votre champ de labour.',
  author: 'Sourate II V 223',
},{
  message: 'La sincérité est la perle qui se forme dans la coquille du coeur.',
  author: 'Proverbe Soufi',
},{
  message: 'Dieu est avec les patients.',
  author: 'Sourate II V 148',
},{
  message: "La vérité a paru et le mensonge s'est dissipé comme une vapeur légère.",
  author: 'Sourate XVII V 83',
}

];

class App extends Component { 
  state = {
    activeQuoteIndex: 0 
   
  }
  nextQuote = () => {
    const {activeQuoteIndex} = this.state;
    if (activeQuoteIndex < quotes.length -1) {
      this.setState({
        activeQuoteIndex: activeQuoteIndex + 1
      });
    } else {
      this.setState({
        activeQuoteIndex: 0
      });
    }
  }

  
  render(){
    const activeQuote = quotes[this.state.activeQuoteIndex];
   return (
     
    <View style={styles.container}>

      <View  style={styles.head}>

        <Image style={styles.header} source={require('./assets/single.png')} />

        </View>

      
      <TouchableOpacity style={styles.container} onPress={this.nextQuote}>

        
            <View style={styles.quote}>
              
              <Text style={styles.texture}>{activeQuote.message}</Text>
            </View>

            <View style={styles.author}>
              <Text style={styles.nom}>{activeQuote.author}</Text>
            </View>


            <View style={styles.more}>

       <Text style={styles.tap}>Taper pour en voir plus </Text> 
      

      </View>
      

      </TouchableOpacity>

      
      
    </View>
  );
}
}
const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: 'black',
    alignItems: 'center',
    justifyContent: 'center',
  },
  quote: {
    paddingRight:49,
  
     paddingBottom:150,
  },
  texture: {
    color: 'white',
    fontSize:26,
   
    width:270
    
  },
  author: {
    paddingRight:100,
    paddingTop:20,
    position:'absolute',
    
    

  },
  nom: {
    color: '#b2b2ad',
    fontSize:20,

    paddingLeft:0,
    width:200
   
  },


   header:{
    
  height:25,
  width:30
  },

  head:{
   paddingRight:240,
    paddingTop:120,
  
    
  },
  more: {
    color: '#fff',
    position:"absolute",
    paddingTop:400,
    
   
  },
  tap: {
    color: '#fff',
   fontSize:18
  },
  
});

export default App;