import React, { useState } from 'react';
import { View, TextInput, StyleSheet } from 'react-native';
import { FontAwesomeIcon } from '@fortawesome/react-native-fontawesome';
import { faSearch } from '@fortawesome/free-solid-svg-icons';

const SearchBox = () => {
  const [searchText, setSearchText] = useState('');

  const handleSearch = (text) => {
    setSearchText(text);
    // Perform search logic or update search results
  };

  return (
    <View style={styles.container}>
      <FontAwesomeIcon icon={faSearch} size={20} color="#555" style={styles.icon} />
      <TextInput
        style={styles.input}
        placeholder="Search Places"
        onChangeText={handleSearch}
        value={searchText}
      />
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flexDirection: 'row',
    alignItems: 'center',
    backgroundColor: '#f5f5f5',
    borderRadius: 8,
    paddingHorizontal: 10,
    paddingVertical: 5,
    marginTop: 10,
  },
  icon: {
    marginRight: 15,
  },
  input: {
    flex: 1,
    height: 40,
    fontSize: 18,
    outlineStyle: 'none',
  },
});

export default SearchBox;
