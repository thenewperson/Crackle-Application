import React, { PropTypes} from 'react';
import { StyleSheet,TabBarIOS,TouchableOpacity,FlatList,NavigatorIOS,  TouchableHighlight,Text, View } from 'react-native';
import { AppRegistry,Alert,SectionList, Image,TouchableNativeFeedback, ListView, ScrollView } from 'react-native';

export default class App extends React.Component {

  constructor(props) {
      super(props);
      const ds = new ListView.DataSource({rowHasChanged: (r1, r2) => r1 !== r2});
      this.state = {
        tabimage1:require('./img/video_selected.png'),
        tabimage2:require('./img/movie_unselected.png'),
        tabimage3:require('./img/flame_unselected.png'),
        tabimage4:require('./img/watch_unselected.png'),
        tabimage5:require('./img/profile_unselected.png'),
        datasource: ds.cloneWithRows(['http://7wallpapers.net/wp-content/uploads/2_Despicable-Me-3.jpg', 'http://7wallpapers.net/wp-content/uploads/1_The-Croods-2.jpg','http://7wallpapers.net/wp-content/uploads/6_Cars-3-250x150.jpg',
      'http://7wallpapers.net/wp-content/uploads/2_A-Dogs-Purpose-250x150.jpg','http://7wallpapers.net/wp-content/uploads/3_The-Boss-Baby.jpg','http://7wallpapers.net/wp-content/uploads/1_Kingsman-The-Golden-Circle-250x150.jpg','http://7wallpapers.net/wp-content/uploads/2_Beauty-and-the-Beast-250x150.jpg']),
        horrorClips: ds.cloneWithRows(['http://7wallpapers.net/wp-content/uploads/1_Rings.jpg', 'http://7wallpapers.net/wp-content/uploads/7_Jeepers-Creepers-3-Cathedral-250x150.jpg','http://7wallpapers.net/wp-content/uploads/11_The-Dark-Tower-250x150.jpg','http://www.free4geeks.com/wp-content/uploads/2014/06/Dracula-Untold.jpg','http://7wallpapers.net/wp-content/uploads/3_The-Bye-Bye-Man-250x150.jpg','http://7wallpapers.net/wp-content/uploads/1_The-Bye-Bye-Man-250x150.jpg','http://7wallpapers.net/wp-content/uploads/6_The-Mummy-250x150.jpg']),
        actionClips: ds.cloneWithRows(['http://images.newseveryday.com/data/thumbs/full/54581/720/0/0/0/resident-evil-the-final-chapter.png', 'http://7wallpapers.net/wp-content/uploads/4_Avengers-Age-Of-Ultron.jpg',
      'http://7wallpapers.net/wp-content/uploads/2_World-War-Z-2-250x150.jpg','http://7wallpapers.net/wp-content/uploads/4_World-War-Z-2-250x150.jpg','http://7wallpapers.net/wp-content/uploads/6_Power-Rangers-250x150.jpg','http://7wallpapers.net/wp-content/uploads/3_Justice-League-250x150.jpg']),
        thrillerClips: ds.cloneWithRows(['http://7wallpapers.net/wp-content/uploads/12_Baywatch.jpg','http://7wallpapers.net/wp-content/uploads/20_Ghost-in-the-Shell-250x150.jpg','http://7wallpapers.net/wp-content/uploads/7_Ghost-in-the-Shell-250x150.jpg','http://7wallpapers.net/wp-content/uploads/11_Beauty-and-the-Beast-250x150.jpg', 'http://7wallpapers.net/wp-content/uploads/3_Sleepless.jpg',
           'http://7wallpapers.net/wp-content/uploads/1_The-Divergent-Series-Ascendant.jpg','http://7wallpapers.net/wp-content/uploads/2_The-Divergent-Series-Ascendant.jpg']),
           scifiClips: ds.cloneWithRows(['http://7wallpapers.net/wp-content/uploads/4_Valerian-and-the-City-of-a-Thousand-Planets.jpg','http://7wallpapers.net/wp-content/uploads/5_Beauty-and-the-Beast-250x150.jpg','http://7wallpapers.net/wp-content/uploads/1_Life-250x150.jpg','http://7wallpapers.net/wp-content/uploads/1_A-Cure-for-Wellness-250x150.jpg','http://7wallpapers.net/wp-content/uploads/17_A-Cure-for-Wellness-250x150.jpg','http://7wallpapers.net/wp-content/uploads/1_Jeepers-Creepers-3-Cathedral-250x150.jpg','http://7wallpapers.net/wp-content/uploads/4_Valerian-and-the-City-of-a-Thousand-Planets.jpg']),
           adventureClips: ds.cloneWithRows(['http://7wallpapers.net/wp-content/uploads/10_Wonder-Woman.jpg','http://7wallpapers.net/wp-content/uploads/7_Wonder-Woman.jpg','http://7wallpapers.net/wp-content/uploads/19_Kingsman-The-Golden-Circle-250x150.jpg','http://7wallpapers.net/wp-content/uploads/10_John-Wick-Chapter-Two-250x150.jpg','http://7wallpapers.net/wp-content/uploads/8_John-Wick-Chapter-Two-250x150.jpg','http://7wallpapers.net/wp-content/uploads/2_War-for-the-Planet-of-the-Apes.jpg','http://7wallpapers.net/wp-content/uploads/2_Transformers-The-Last-Knight-250x150.jpg','http://7wallpapers.net/wp-content/uploads/6_Justice-League-250x150.jpg']),
      };
       this.tabToast = this.tabToast.bind(this);
    }

    displayToast(rowData) {
        console.log('item: '+rowData)
        Alert.alert(
           'Movie URL',
           rowData,
         [
           {text: 'Ok', onPress: () => console.log('OK Pressed')}
         ],
           { cancelable: true }
         )
     }
     tabToast(data) {
       console.log('Tab bar pressed: '+data)
       if(data==='Watch Now'){
         this.setState({
            tabimage1:require('./img/video_selected.png'),
            tabimage2:require('./img/movie_unselected.png'),
            tabimage3:require('./img/flame_unselected.png'),
            tabimage4:require('./img/watch_unselected.png'),
            tabimage5:require('./img/profile_unselected.png'),
          });
       }else if(data==='Movies'){
         this.setState({
            tabimage1:require('./img/video_unselected.png'),
            tabimage2:require('./img/movie_selected.png'),
            tabimage3:require('./img/flame_unselected.png'),
            tabimage4:require('./img/watch_unselected.png'),
            tabimage5:require('./img/profile_unselected.png'),
          });
       }else if(data==='Trending'){
         this.setState({
            tabimage1:require('./img/video_unselected.png'),
            tabimage2:require('./img/movie_unselected.png'),
            tabimage3:require('./img/flame_selected.png'),
            tabimage4:require('./img/watch_unselected.png'),
            tabimage5:require('./img/profile_unselected.png'),
          });
       }else if(data==='Watch Later'){
         this.setState({
            tabimage1:require('./img/video_unselected.png'),
            tabimage2:require('./img/movie_unselected.png'),
            tabimage3:require('./img/flame_unselected.png'),
            tabimage4:require('./img/watch_selected.png'),
            tabimage5:require('./img/profile_unselected.png'),
          });
       }else{
         this.setState({
            tabimage1:require('./img/video_unselected.png'),
            tabimage2:require('./img/movie_unselected.png'),
            tabimage3:require('./img/flame_unselected.png'),
            tabimage4:require('./img/watch_unselected.png'),
            tabimage5:require('./img/profile_selected.png'),
          });
       }
      }

    /*displayToast(rowData) {
       Alert.alert(
          'Movie',
          'What you would like to do?',
        [
          {text: 'Cancel', onPress: () => console.log('cancel Pressed'),
          {text: 'View', onPress: () => console.log('OK Pressed')},
        ],
          { cancelable: false }
        )
     }*/

    render() {
      return (
        <View style={styles.containermain}>
          <View style={{flexDirection:'row', alignItems:'center',marginBottom:5}}>
          <Image
          style={{width: 30, height: 30, marginLeft:10,marginRight:10}}
          source={require('./img/cracklelogo.jpg')}
          />
          <View style={{flexDirection:'column', alignItems:'center',}}>
          <Text style={{fontSize:15,fontWeight:'bold',color:'darkorange',marginLeft:10}}>Crackle</Text>
          <Text style={{fontSize:10,marginLeft:10}}>Trending Movies</Text>
          </View>
          </View>
         <ScrollView>
        <View style={styles.container}>
         <View style={styles.container}>
          <Text style={{color:'orange',marginTop:10, marginBottom:5, marginLeft:10,
          fontSize:19}}>Crackle Animated</Text>
          <ListView
             horizontal={true}
             dataSource={this.state.datasource}
             renderRow={(rowData) =>
                       <View style={styles.containerr}>
                          <TouchableOpacity  style={{width: 250, height: 150, marginLeft:10,marginRight:10}}
                           onPress={() => this.displayToast(rowData) } >
                           <Image
                              source={{uri: rowData}}
                              style={styles.imaget}>
                              <View style={{flexDirection:'column'}}>
                                <Text
                                   style={styles.paragraph}>
                                     Animated
                               </Text>
                               </View>
                              </Image>
                          </TouchableOpacity>
                      </View>
          }
        />
        </View>
        <View style={styles.container}>
          <Text style={{color:'#56aea4',marginTop:10, marginBottom:5, marginLeft:10,
          fontSize:19}}>Crackle Horror</Text>
          <ListView
             horizontal={true}
             dataSource={this.state.horrorClips}
             renderRow={(rowData) =>
                      <View style={styles.containerr}>
                          <TouchableOpacity  style={{width: 250, height: 150, marginLeft:10,marginRight:10}}
                           onPress={() => this.displayToast(rowData) } >
                              <Image
                                 source={{uri: rowData}}
                                 style={styles.imaget}>
                                 <Text
                                      style={styles.paragraph}>
                                        Horror
                                  </Text>
                                 </Image>
                          </TouchableOpacity>
                      </View>
          }
        />
        </View>
        <View style={styles.container}>
          <Text style={{color:'#f0e364',marginTop:10, marginBottom:5, marginLeft:10,
          fontSize:19}}>Crackle Action</Text>
          <ListView
             horizontal={true}
             dataSource={this.state.actionClips}
             renderRow={(rowData) =>
                         <View style={styles.containerr}>
                             <TouchableOpacity  style={{width: 250, height: 150, marginLeft:10,marginRight:10}}
                              onPress={() => this.displayToast(rowData) } >
                                 <Image
                                    style={styles.imaget}
                                    source={{uri: rowData}}>
                                    <Text
                                         style={styles.paragraph}>
                                           Action
                                     </Text>
                                    </Image>
                             </TouchableOpacity>
                         </View>
          }
        />
        </View>
        <View style={styles.container}>
         <Text style={{color:'#7CB583',marginTop:10, marginBottom:5, marginLeft:10,
         fontSize:19}}>Crackle Thriller</Text>
         <ListView
            horizontal={true}
            dataSource={this.state.thrillerClips}
            renderRow={(rowData) =>
                      <View style={styles.containerr}>
                         <TouchableOpacity  style={{width: 250, height: 150, marginLeft:10,marginRight:10}}
                          onPress={() => this.displayToast(rowData) } >
                          <Image
                             source={{uri: rowData}}
                             style={styles.imaget}>
                             <View style={{flexDirection:'column'}}>
                               <Text
                                  style={styles.paragraph}>
                                    Thriller
                              </Text>
                              </View>
                             </Image>
                         </TouchableOpacity>
                     </View>
         }
       />
       </View>
       <View style={styles.container}>
        <Text style={{color:'#707E9D',marginTop:10, marginBottom:5, marginLeft:10,
        fontSize:19}}>Crackle Sci-Fi</Text>
        <ListView
           horizontal={true}
           dataSource={this.state.scifiClips}
           renderRow={(rowData) =>
                     <View style={styles.containerr}>
                        <TouchableOpacity  style={{width: 250, height: 150,marginLeft:10,marginRight:10}}
                         onPress={() => this.displayToast(rowData) } >
                         <Image
                            source={{uri: rowData}}
                            style={styles.imaget}>
                            <View style={{flexDirection:'column'}}>
                              <Text
                                 style={styles.paragraph}>
                                   Sci-Fi
                             </Text>
                             </View>
                            </Image>
                        </TouchableOpacity>
                    </View>
        }
      />
      </View>
      <View style={styles.container}>
       <Text style={{color:'orange',marginTop:10, marginBottom:5, marginLeft:10,
       fontSize:19}}>Crackle Adventure</Text>
       <ListView
          horizontal={true}
          dataSource={this.state.adventureClips}
          renderRow={(rowData) =>
                    <View style={styles.containerr}>
                       <TouchableOpacity  style={{width: 250, height: 150, marginLeft:10,marginRight:10}}
                        onPress={() => this.displayToast(rowData) } >
                        <Image
                           source={{uri: rowData}}
                           style={styles.imaget}>
                           <View style={{flexDirection:'column'}}>
                             <Text
                                style={styles.paragraph}>
                                  Adventure
                            </Text>
                            </View>
                           </Image>
                       </TouchableOpacity>
                   </View>
       }
     />
     </View>
        </View>
        </ScrollView>
        <View>
            <View style={{flexDirection:'row', alignItems:'center',backgroundColor:'lightgrey'}}>
                 <TouchableOpacity
                 style={{flex:1,flexDirection:'column'}}
                 onPress={()=> this.tabToast('Watch Now')}>
                   <View style={{flex:1,flexDirection:'column'}}>
                    <Image
                        style={styles.imageTab}
                        source={this.state.tabimage1}
                     />
                     <Text style={styles.textTab}>Watch Now</Text>
                   </View>
                </TouchableOpacity>
                <TouchableOpacity
                style={{flex:1,flexDirection:'column'}}
                onPress={()=> this.tabToast('Movies')}>
                   <View style={{flex:1,flexDirection:'column'}}>
                     <Image
                       style={styles.imageTab}
                       source={this.state.tabimage2}
                     />
                     <Text style={styles.textTab}>Movies</Text>
                   </View>
                </TouchableOpacity>
                <TouchableOpacity
                style={{flex:1,flexDirection:'column'}}
                onPress={()=> this.tabToast('Trending')}>
                     <View style={{flex:1,flexDirection:'column'}}>
                       <Image
                          style={styles.imageTab}
                        source={this.state.tabimage3}
                       />
                       <Text style={styles.textTab}>Trending</Text>
                    </View>
                </TouchableOpacity>
                <TouchableOpacity
                style={{flex:1,flexDirection:'column'}}
                onPress={()=> this.tabToast('Watch Later')}>
                 <View style={{flex:1,flexDirection:'column'}}>
                <Image
                  style={styles.imageTab}
                  source={this.state.tabimage4}
                 />
                <Text style={styles.textTab}>Watch Later</Text>
                  </View>
                    </TouchableOpacity>
                  <View style={{flex:1,flexDirection:'column'}}>
                 <Image
                   style={styles.imageTab}
                   source={this.state.tabimage5}
                   onPress={()=> this.tabToast('Profile')}
                  />
                 <Text style={styles.textTab}>Profile</Text>
                   </View>
                  </View>
        </View>
        </View>
      );
    }
  }

  const styles = StyleSheet.create({
  container: {
   flex: 1,
    flexDirection:'column',
    backgroundColor:'#eee'
  },
  containermain: {
   flex: 1,
   paddingTop: 22,
    flexDirection:'column',
  },
  textTab: {fontSize:14,marginTop:5,marginBottom:2,textAlign:'center'},
  imageTab: {width: 25, height: 25, marginTop:10,alignSelf:'center'},
  containerr: {
   flex: 1,
   alignItems:'center',
   paddingTop:10,
    flexDirection:'row',
  },
  transp:{
    flex: 1,
    alignItems: 'stretch',
    justifyContent: 'center',
  },
  textStyle: {
    fontSize:20,
    fontWeight:'bold',
    color:'red',
    fontStyle:'italic',
    backgroundColor:'transparent'
  },
  item: {
    padding: 10,
    fontSize: 18,
    height: 44,
  },
  scene: {
       padding: 10,
       paddingTop: 74,
       flex: 1
   },
   imageStyle: {
     width: 250,
     height: 150,
      margin:10,
     backgroundColor: 'rgba(0,0,0,.6)'
   },
   overlay: {
     position: 'absolute',
  top: 0,
  left: 0,
  right: 0,
  bottom: 0,
    backgroundColor: 'rgba(0,0,0,0.5)'
  },
imaget: {
   flexGrow:1,
   height:null,
   width:null,
   alignItems: 'flex-end',
   justifyContent:'flex-end',
 },
 paragraph: {
   textAlign: 'left',
   color:'white',
   padding:3,
   backgroundColor:'orange'
 },
})
