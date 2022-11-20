import React from 'react'
import { View,Text,StyleSheet, ImageBackground, Image, TouchableOpacity } from 'react-native'
import { FontAwesomeIcon } from '@fortawesome/react-native-fontawesome';
import { faMusic, faChevronRight } from '@fortawesome/free-solid-svg-icons';
import items from './items';

export default function item() {
  return (
    <View style={styles.menuItems}>
    {items.map(item => (
      <TouchableOpacity key={item.id}>
        <View style={styles.menuRow}>
          <FontAwesomeIcon style={styles.icon} icon={item.icon} />
            <View style={styles.menuTextBox}>
              <Text style={styles.menuText}>{item.title}</Text>
              {item.subTitle && (
                <Text style={styles.subTitle}>{item.subTitle}</Text>
              )}
            </View>
          <FontAwesomeIcon style={styles.arrowIcon} icon={faChevronRight} />
        </View>
      </TouchableOpacity>
    ))}
    </View>
  )
}

const styles = StyleSheet.create({
  menuItems: {
    marginTop: 20,
    marginLeft: 20,
    marginRight: 20,
  },
  menuRow: {
    flexDirection: 'row',
    alignItems: 'center',
    marginTop: 15,
    marginBottom: 15
  },
  icon: {
    color: 'white',
  },
  arrowIcon: {
    color: '#4D4D4E'
  },
  menuTextBox: {
    flexGrow: 1
  },
  menuText: {
    color: 'white',
    fontSize: 16,
    fontWeight: 'bold',
    marginLeft: 15,
    textTransform: 'uppercase'
  },
  subTitle: {
    color: 'gray',
    fontSize: 14,
    marginLeft: 15,
  }
})
