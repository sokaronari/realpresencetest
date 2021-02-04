import React, {useContext, useEffect, useState} from 'react';
import {StyleSheet, View, Text} from 'react-native';
import AuthContext from '../auth/context';
import colors from '../config/colors';
import ProfilePicture from './ProfilePicture';
import getUserApi from '../api/getUser';

function AccountProfile() {
  const [user, setUser] = useState({});
  const [error, setError] = useState(false);
  const [isMounted, setIsMounted] = useState(false);
  const [unChangedData, setUnChangedData] = useState(400);
  const {userData} = useContext(AuthContext);
  const AuthStr = 'Bearer '.concat(userData.data.access_token);
  const userId = userData.data.user.id.toString();

  const getUserFunc = async () => {
    const result = await getUserApi.getUser(userId, AuthStr);
    if (!result.ok) return console.log('error');

    if (result.status == 200) {
      setError(false);
      console.log(result.data);
      setUser(result.data.data);
      setUnChangedData(result.data.code);
      console.log(unChangedData);
    }
  };

  useEffect(() => {
    setIsMounted(true);
    if (isMounted == true) getUserFunc();
    return () => {
      setIsMounted(false);
    };
  }, [unChangedData]);
  if (unChangedData == 400) getUserFunc();

  return (
    <View style={[styles.profileContainer]}>
      <View style={{alignItems: 'center'}}>
        <ProfilePicture />
        <Text
          style={{
            fontSize: 20,
            fontWeight: '100',
            color: colors.welcomePrimary,
            bottom: 65,
          }}>
          {user.nama}
        </Text>
        <Text style={{fontSize: 12, color: colors.welcomePrimary, bottom: 65}}>
          {user.email}
        </Text>
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  profileContainer: {
    width: '100%',
    height: 175,
    borderTopStartRadius: 10,
    borderTopEndRadius: 10,
    backgroundColor: colors.welcomeSecondary,
  },
});

export default AccountProfile;
