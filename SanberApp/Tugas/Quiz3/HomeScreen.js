import React from 'react';
import {
  View,
  Text,
  StyleSheet,
  FlatList,
  Image,
  TouchableOpacity,
  Dimensions,
  TextInput,
  Button,
  Card,
} from 'react-native';

import data from './data.json';

const DEVICE = Dimensions.get('window');

export default class HomeScreen extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      searchText: '',
      totalPrice: 0,
    };
  }

  currencyFormat(num) {
    return 'Rp ' + num.toFixed(0).replace(/(\d)(?=(\d{3})+(?!\d))/g, '$1.');
  }

  updatePrice = (price) => {
    price = this.state.totalPrice + parseInt(price);
    this.setState({ totalPrice: price });
  }

  // ketika maneh pake () => {} dibaca arrow function, 
  // itu secara otomatis memasukan "this" kedalam class tersebut.

  // [2:43 PM, 2/1/2021] T Rahmac: coba experiment gini

  // 1. di <ListItem updatePrice={this.updatePrice} /> si updatePrice pake fungsi biasa // updatePrice(price) {}
  // 2. di <ListItem updatePrice={this.updatePrice} /> si updatePrice pake arrow function // updatePrice = (price) => {}
  // [2:44 PM, 2/1/2021] T Rahmac: itu untuk ngejawab kenapa tadi maneh pake yg nomor 1 diatas muncul error.
  // [2:44 PM, 2/1/2021] T Rahmac: karena ga ada "this" didalem fungsinya.
  // [2:45 PM, 2/1/2021] T Rahmac: supaya si this ada didalem fungsi tersebut, maka dibikinlah arrow fuuction ketika manggilnya.
//   [2:49 PM, 2/1/2021] T Rahmac: jadi maneh harus teliti untuk pake fungsi.
// [2:49 PM, 2/1/2021] T Rahmac: antara fungsinya dibikin arrow, atau ngirimnya pake arrow.

  render() {
    console.log(data);
    return (
      <View style={styles.container}>
        <View
          style={{
            minHeight: 50,
            width: DEVICE.width * 0.88 + 20,
            marginVertical: 8,
          }}
        >
          <View
            style={{ flexDirection: 'row', justifyContent: 'space-between' }}
          >
            <Text>
              Hai,{'\n'}
              {/* //? #Soal 1 Tambahan, Simpan userName yang dikirim dari halaman Login pada komponen Text di bawah ini */}
              
              <Text style={styles.headerText}>
                {this.props.route.params.userName}
              </Text>
            </Text>

            {/* //? #Soal Bonus, simpan Total Harga dan state.totalPrice di komponen Text di bawah ini */}
            <Text style={{ textAlign: 'right' }}>
              Total Harga{'\n'}
              <Text style={styles.headerText}>
                {this.currencyFormat(this.state.totalPrice)}
              </Text>
            </Text>
          </View>
          <View></View>
          <TextInput
            style={{ backgroundColor: 'white', marginTop: 8 }}
            placeholder="Cari barang.."
            onChangeText={(searchText) => this.setState({ searchText })}
          />
        </View>

        {/* 
        //? #Soal No 2 (15 poin)
        //? Buatlah 1 komponen FlatList dengan input berasal dari data.json
        //? dan pada prop renderItem menggunakan komponen ListItem -- ada di bawah --
        //? dan memiliki 2 kolom, sehingga menampilkan 2 item per baris (horizontal)

        // Lanjutkan di bawah ini!
        */}
        {/* clue dapat dilihat di https://snack.expo.io/@kameyin/two-column-flatlist-(method-1) */}
        
        <FlatList
          data={data.produk}
          renderItem={(data)=>
          <ListItem 
            data={data.item} 
            updatePrice={this.updatePrice} 
            // updatePrice={(harga) => this.updatePrice(harga)}
// [2:49 PM, 2/1/2021] T Rahmac: antara fungsinya dibikin arrow, atau ngirimnya pake arrow.
// [2:51 PM, 2/1/2021] T Rahmac: iya <ListItem updatePrice={() => this.updatePrice()} /> itu maneh ngirim this.updatePrice kedalem ListItem.
// [2:51 PM, 2/1/2021] T Rahmac: atau bisa juga maneh bikin <ListItem updatePrice={this.updatePrice} /> tapi si this updatePrice harus arrow function.
// [2:52 PM, 2/1/2021] T Rahmac: umunya orang bikin fungsi pake arrow, supaya ga muncul error kaya maneh tadi.
// [2:53 PM, 2/1/2021] T Rahmac: terus masalah passing parameter tergantung cara maneh tadi juga.
// [2:54 PM, 2/1/2021] T Rahmac: <ListItem updatePrice={(params) => this.updatePrice(params)} />
// [2:54 PM, 2/1/2021] T Rahmac: <ListItem updatePrice={this.updatePrice} /> kalo pake cara ini, params yg dikirim otomatis langsung dikirim ke fungsinya, tapa perlu maneh definisiin dulu.
          />
        }
          keyExtractor={(item)=>item.id}
          numColumns={2}
        />

      </View>
    );
  }
}

class ListItem extends React.Component {
  currencyFormat(num) {
    return 'Rp ' + num.toFixed(0).replace(/(\d)(?=(\d{3})+(?!\d))/g, '$1.');
  }

  //? #Soal No 3 (15 poin)
  //? Buatlah styling komponen ListItem, agar dapat tampil dengan baik di device
  
  render() {
    
    let data = this.props.data;
    // let updatePrice = this.props.updatePrice
    return (
      <View style={styles.itemContainer}>
        <Image
          source={{ uri: data.gambaruri }}
          style={styles.itemImage}
          resizeMode="contain"
        />
        <Text numberOfLines={2} ellipsizeMode="tail" style={styles.itemName}>
          {data.nama}
        </Text>
        <Text style={styles.itemPrice}>
          {this.currencyFormat(Number(data.harga))}
        </Text>
        <Text style={styles.itemStock}>Sisa stok: {data.stock-1 }</Text>
        <Button 
          title="BELI" 
          color="blue" 
          onPress={() => 
            this.props.updatePrice(data.harga)} 
        />
      </View>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
  },
  headerText: {
    fontSize: 18,
    fontWeight: 'bold',
  },

  //? Lanjutkan styling di sini
  itemContainer: {
    width: DEVICE.width * 0.44,
    alignItems: 'center',
    justifyContent: 'space-between',
    backgroundColor: '#FFFFFF',
    marginHorizontal: 5,
    marginVertical: 5,
    padding: 5,
  },
  itemImage: {
    height:100,
    alignSelf:'stretch'
    
  },
  itemName: {
    fontWeight:'bold'
  },
  itemPrice: {
    color:'blue',
    fontSize:20,
   
  },
  itemStock: {
  },
  itemButton: {
  },
  buttonText: {
  },
});
