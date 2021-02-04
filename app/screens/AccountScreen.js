import React, {useContext, useState} from 'react';
import {StyleSheet, View, TouchableOpacity} from 'react-native';
import AuthContext from '../auth/context';
import {ErrorMessage} from '../components/forms';
import colors from '../config/colors';
import AccountProfile from '../components/AccountProfile';
import AccountList from '../components/AccountList';
import {useNavigation} from '@react-navigation/core';
import Icon from '../components/Icon';
import logoutApi from '../api/logout';

function AccountScreen() {
  const {setUserData, userData} = useContext(AuthContext);

  const navigation = useNavigation();

  const [logoutFailed, setLogoutFailed] = useState(false);

  const AuthStr = 'Bearer '.concat(userData.data.access_token);
  const handlePress = async () => {
    const result = await logoutApi.logout(AuthStr);
    console.log(result.data);
    if (!result.ok) return setLogoutFailed(true);

    setLogoutFailed(false);
    if (result.status == 200) setUserData(null);
  };

  return (
    <View style={{flex: 1, backgroundColor: '#406BA2'}}>
      <View style={{flexDirection: 'row-reverse', top: 15, right: 10}}>
        <TouchableOpacity onPress={handlePress}>
          <Icon name="logout" />
        </TouchableOpacity>
        <TouchableOpacity>
          <Icon name="help-circle-outline" />
        </TouchableOpacity>
        <TouchableOpacity>
          <Icon name="cog-outline" />
        </TouchableOpacity>
      </View>

      <View style={{width: '100%', alignItems: 'center'}}>
        <ErrorMessage error="COULDN'T LOGOUT" visible={logoutFailed} />
        <View style={styles.container}>
          <AccountProfile
            bottom={100}
            onPress={() => navigation.navigate('ProfilePicture')}
          />
          <AccountList />
        </View>
      </View>
    </View>
  );
}
const styles = StyleSheet.create({
  container: {
    marginTop: 120,
    width: '95%',
    height: '100%',
    alignItems: 'center',
    backgroundColor: colors.white,
    borderRadius: 10,
  },
  iconContainer: {
    width: 35,
    height: 35,
    borderRadius: 17.5,
    justifyContent: 'center',
    alignItems: 'center',
  },
});

export default AccountScreen;
