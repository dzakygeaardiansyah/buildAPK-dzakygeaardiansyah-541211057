
import React from 'react';
import {View, Text, Image, Button, Linking, ScrollView, TextInput,  StyleSheet,TouchableOpacity,Dimensions } from 'react-native';

const windowWidth = Dimensions.get('window').width;
const windowHeight = Dimensions.get('window').height;
const masuk = () => alert('widi berhasil masuk')
const profil = () => {
  const url = 'https://instagram.com/geeeeaaaaa_?igshid=NGVhN2U2NjQ0Yg==';
  Linking.openURL(url);
}
const dribble = () => {
  const url = 'https://dribbble.com/dzakygea';
  Linking.openURL(url);
}
const BC = () => {
  const url = 'https://www.braincodesolution.com/#/';
  Linking.openURL(url);
}


const dashboard = () => {
  return(
    <ScrollView>
    <View style={{alignItems:'center', flex:1}}>
      <View style={{alignItems:'center', marginTop:50, paddingBottom:10}}>
          <Image style={{width:200, height:200, borderRadius:100, borderWidth: 5, borderColor:'#73BDA8'}}
            source={require('../assets/DzakyGeaA.jpeg')}
          />
      </View>
      <View style={{alignItems:'center'}}>
             <Text style={styles.judul_1 }> Dzaky Gea Ardiansyah </Text>
      </View>
      
      <View style={{alignItems:'center'}}>
             <Text style={styles.isi_1 }> Nama saya Dzaky gea. Saya lahir di Bekasi pada 28 April 2006. Saya siswa XII RPL 2, </Text>
      </View>
      
      <View style={styles.wadah_tombol}>
             <TouchableOpacity style={styles.button} onPress={profil} >
                     <Text style={styles.appButtonText}>Contact me ?</Text>
              </TouchableOpacity>
      </View>

      <View style={{alignItems:'center'}}>
             <Text style={styles.judul_2 }> My Recent Project </Text>
      </View>
      <View style={{alignItems:'center', marginTop:0, paddingBottom:10}}>
          <Image style={{width:300, height:200}}
            source={require('../assets/JAKECLOTH.png')}
          />
      </View>

        <View style={{alignItems:'center'}}>
             <Text style={styles.judul_porto1 }> JAKECLOTH UI DESIGN </Text>
        </View>
      <View style={styles.wadah_tombol2}>
             <TouchableOpacity style={styles.button_porto} onPress={dribble} >
                     <Text style={styles.appButtonText}>See Details</Text>
              </TouchableOpacity>
      </View>

      <View style={{alignItems:'center', marginTop:10}}>
          <Image style={{width:300, height:200}}
            source={require('../assets/ELEONORAP1.png')}
          />
      </View>

        <View style={{alignItems:'center'}}>
             <Text style={styles.judul_porto1 }> ELEONORA UI DESIGN </Text>
        </View>
      <View style={styles.wadah_tombol2}>
             <TouchableOpacity style={styles.button_porto} onPress={dribble} >
                     <Text style={styles.appButtonText}>See Details</Text>
              </TouchableOpacity>
      </View>



      <View style={{alignItems:'center', marginTop:10}}>
          <Image style={{width:300, height:200}}
            source={require('../assets/IMG-20230111-WA0012.jpg')}
          />
      </View>

        <View style={{alignItems:'center'}}>
             <Text style={styles.judul_porto1 }> THRILLED CUSTOM UI DESIGN </Text>
        </View>
      <View style={styles.wadah_tombol2}>
             <TouchableOpacity style={styles.button_porto} onPress={dribble} >
                     <Text style={styles.appButtonText}>See Details</Text>
              </TouchableOpacity>
      </View>



      <View style={{alignItems:'center', marginTop:10}}>
          <Image style={{width:300, height:200, imageSize:10}}
            source={require('../assets/BC.png')}
          />
      </View>

        <View style={{alignItems:'center'}}>
             <Text style={styles.judul_porto1 }> Company Profile  </Text>
        </View>
      <View style={styles.wadah_tombol2}>
             <TouchableOpacity style={styles.button_porto} onPress={BC} >
                     <Text style={styles.appButtonText}>See Details</Text>
              </TouchableOpacity>
      </View>




    </View>
    </ScrollView>

  );
  


}

const styles = StyleSheet.create({
  judul_1: {
      fontWeight:'700',
      marginLeft:15,
      color:'#73BDA8', 
      fontSize:40, 
      marginTop:10,
      fontFamily:'',
      textAlign:'center',
      paddingBottom:10,
      marginHorizontal:10
  },

    judul_porto1: {
      fontWeight:'700',
      marginLeft:15,
      color:'#73BDA8', 
      fontSize:20, 
      marginTop:10,
      fontFamily:'',
      textAlign:'center',
      paddingBottom:10,
      marginHorizontal:10
  },
    judul_2: {
      fontWeight:'700',
      marginLeft:15,
      color:'#73BDA8', 
      fontSize:30, 
      marginTop:30,
      fontFamily:'',
      textAlign:'center',
      paddingBottom:10,
      marginHorizontal:10
  },
  isi_1:{
    textAlign:'center',
    fontWeight:'semi-bold',
    fontSize:15,
    fontWeight:"600",
    marginHorizontal:60,
    color:'#787269'
  },
    button:{
    elevation: 8,
    backgroundColor: "#73BDA8",
    borderRadius: 10,
    paddingVertical: 10,
    paddingHorizontal: 12,
    height:43,
    width:200
  },
  button_porto:{
    elevation: 8,
    backgroundColor: "#73BDA8",
    borderRadius: 10,
    paddingVertical: 10,
    paddingHorizontal: 12,
    height:43,
    width:280
  },
  appButtonText:{
    fontSize: 15,
    color: "#fff",
    fontWeight: "bold",
    alignSelf: "center",
    textTransform: "uppercase"
  },
    wadah_tombol:{
    flex: 1,
    alignItems:'center',
    paddingHorizontal: 10,
    paddingTop:20,
  },
  wadah_tombol2:{
    flex: 1,
    alignItems:'center',
    paddingHorizontal: 10,
    paddingTop:20,
    paddingBottom:30,
  },
});
export default dashboard;
