import React, {useState} from 'react'
import { View, Text,StyleSheet, ImageBackground, Image, TouchableOpacity,ScrollView } from 'react-native';
import { FontAwesomeIcon } from '@fortawesome/react-native-fontawesome';
import { faCog, faToolbox, faFan,faKey,faLock,faUnlockAlt } from '@fortawesome/free-solid-svg-icons';
import Item from './Menu';

export default function CarItem(){
  const [locked, setLocked] = useState(true);
  function clickLock(){
    if(locked){
      setLocked(false);
    }else {
      setLocked(true)
    }
  }
  return (
    <View style={styles.container}>
      <ImageBackground
        source={require("../assets/background.png")}
        style={styles.backgroundImage}
      />
          <View style={styles.header}>
          <TouchableOpacity>
            <FontAwesomeIcon style={styles.icon} icon= {faCog} size={24}/>
          </TouchableOpacity> 
              <Text style={styles.headerTitle}>SamiMobile</Text>
          <TouchableOpacity>    
            <FontAwesomeIcon style={styles.icon} icon= {faToolbox} size={24}/>
          </TouchableOpacity>  
          </View>
          <View style={styles.battery}>
              <Image 
                    source={require("../assets/battery.png")}
                    style={styles.battryImage}
              />
              <Text style={styles.batteryText}>150 mi</Text>
          </View>
          <View style={styles.status}>
            <Text style={styles.statusText}>Parked</Text>
          </View>
          <ScrollView>
          <View style={styles.controls}>
          <TouchableOpacity>
              <View style={styles.controlsButtom}>
                  <FontAwesomeIcon style={styles.icon} icon= {faFan} size={24}/>
              </View>
          </TouchableOpacity>
          <TouchableOpacity>
              <View style={styles.controlsButtom}>
                <FontAwesomeIcon style={styles.icon} icon= {faKey} size={24}/>
              </View> 
          </TouchableOpacity>   
          <TouchableOpacity
            onPress={clickLock}
          >
              <View style={styles.controlsButtom}>
                <FontAwesomeIcon style={styles.icon} icon= {locked ? faLock : faUnlockAlt} size={24}/>
              </View> 
          </TouchableOpacity>  
          </View>
          <Item />
          </ScrollView>
          
    </View>
  )
};
const styles = StyleSheet.create({
  container: {
    backgroundColor: 'orange',
    width: '100%',
    height: '100%',
  },
  header: {
    marginTop: 50,
    marginLeft: 20,
    marginRight: 20,
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
    marginBottom: 10
  },
  headerTitle: {
    color: 'white',
    fontSize: 16,
    fontWeight: 'bold',
    alignItems: 'center',
    justifyContent: 'center'
  },
  icon: {
    color: 'white',
  },
  backgroundImage: {
    width: '100%',
    height: '100%',
    resizeMode: 'cover',
    position: 'absolute'
  },
  battery: {
    flexDirection: 'row',
    justifyContent: 'center',
    alignItems: 'center',
  },
  battryImage: {
    height: 26,
    width: 70,
    marginRight: 12
  },
  batteryText: {
    color: 'white',
    fontSize: 35,
    fontWeight: 'bold'
  },
  status: {
    alignItems: 'center'
  },
  statusText: {
    color: 'white',
    fontSize: 20,
    fontWeight: 'bold'
  },
  controls: {
    flexDirection: 'row',
    justifyContent: 'center',
    alignItems: 'center',
    marginTop: 120
  },
  controlsButtom: {
    borderWidth: 1,
    borderColor: 'white',
    borderRadius: 50,
    padding: 18,
    marginLeft: 25,
  }
});