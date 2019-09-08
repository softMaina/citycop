import React, {Component} from 'react';
import {NavigationActions} from 'react-navigation';
import {Text, View, StyleSheet, Image, TouchableOpacity} from 'react-native';
import Icon from 'react-native-vector-icons/MaterialCommunityIcons';

export default class drawerContentComponents extends Component {
  navigateToScreen = route => () => {
    const navigateAction = NavigationActions.navigate({
      routeName: route,
    });
    this.props.navigation.dispatch(navigateAction);
  };

  render() {
    return (
      <View style={styles.container}>
        <View style={styles.headerContainer}>
          <View style={styles.headerAvatar}>
            <Image
              source={require('../../assets/pic.jpeg')}
              style={{
                borderRadius: 50,
                marginLeft: '7%',
                marginBottom: 10,
                height: 100,
                width: 100,
              }}
            />
            <Text
              style={{
                color: '#fff',
                fontSize: 14,
                marginBottom: 10,
                marginLeft: '7%',
              }}>
              Uncle Bob
            </Text>
          </View>
        </View>
        <View style={styles.screenContainer}>
          {/* Dashboard */}
          <TouchableOpacity
            onPress={this.navigateToScreen('Home')}
            style={[
              styles.wrapper,
              this.props.activeItemKey == 'Home'
                ? styles.activeBackgroundColor
                : null,
            ]}>
            <View style={styles.screenStyle}>
              <Icon
                name="dashboard"
                size={24}
                color="blue"
                containerStyle={{marginLeft: 20}}
              />
              <Text
                style={[
                  styles.screenTextStyle,
                  this.props.activeItemKey == 'Home'
                    ? styles.selectedTextStyle
                    : null,
                ]}>
                Home
              </Text>
            </View>
          </TouchableOpacity>
          {/* Notifications */}
          <TouchableOpacity
            onPress={this.navigateToScreen('Crimes')}
            style={[
              styles.wrapper,
              this.props.activeItemKey == 'Crimes'
                ? styles.activeBackgroundColor
                : null,
            ]}>
            <View style={styles.screenStyle}>
              <Icon
                name="notifications"
                size={24}
                color="blue"
                containerStyle={{marginLeft: 20}}
              />
              <Text
                style={[
                  styles.screenTextStyle,
                  this.props.activeItemKey == 'Crimes'
                    ? styles.selectedTextStyle
                    : null,
                ]}>
                Crimes
              </Text>
            </View>
          </TouchableOpacity>

          {/* jobs */}
          <TouchableOpacity
            style={[
              styles.wrapper,
              this.props.activeItemKey == 'Settings'
                ? styles.activeBackgroundColor
                : null,
            ]}
            onPress={this.navigateToScreen('Settings')}>
            <View style={styles.screenStyle}>
              <Icon
                name="room-service"
                size={24}
                color="blue"
                containerStyle={{marginLeft: 20}}
              />
              <Text
                style={[
                  styles.screenTextStyle,
                  this.props.activeItemKey == 'Settings'
                    ? styles.selectedTextStyle
                    : null,
                ]}>
                Settings
              </Text>
            </View>
          </TouchableOpacity>
          {/* account */}
          <TouchableOpacity
            onPress={this.navigateToScreen('Account')}
            style={[
              styles.wrapper,
              this.props.activeItemKey == 'Account'
                ? styles.activeBackgroundColor
                : null,
            ]}>
            <View style={styles.screenStyle}>
              <Icon
                name="person"
                size={24}
                color={Colors.primary}
                containerStyle={{marginLeft: 20}}
              />
              <Text
                style={[
                  styles.screenTextStyle,
                  this.props.activeItemKey == 'Account'
                    ? styles.selectedTextStyle
                    : null,
                ]}>
                Account
              </Text>
            </View>
          </TouchableOpacity>
        </View>
      </View>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: 'center',
    backgroundColor: '#fff',
    height: '100%',
  },
  headerContainer: {
    height: '33%',
    backgroundColor: 'yellow',
    width: '100%',
    elevation: 9,
  },
  headerText: {
    color: '#fff8f8',
  },
  headerAvatar: {
    flex: 1,
    flexDirection: 'column',
    justifyContent: 'flex-end',
  },
  screenContainer: {
    paddingTop: 40,
    margin: 0,
    width: '100%',
  },
  screenStyle: {
    height: 30,
    marginTop: 4,
    flexDirection: 'row',
    alignItems: 'center',
    width: '100%',
  },
  screenTextStyle: {
    fontSize: 20,
    marginLeft: 20,
    textAlign: 'center',
    color: 'blue',
  },
  selectedTextStyle: {
    fontWeight: 'bold',
    color: '#fff',
  },
  activeBackgroundColor: {
    backgroundColor: 'purple',
  },
  wrapper: {
    flexDirection: 'row',
    paddingTop: 16,
    paddingBottom: 16,
    paddingRight: 24,
    borderBottomColor: 'white',
    borderBottomWidth: StyleSheet.hairlineWidth,
  },
});
