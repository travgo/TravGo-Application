import { StatusBar } from 'expo-status-bar';
import React from 'react';
import { StyleSheet, Text, View, Button, Image,ImageBackground } from 'react-native';
import { NavigationContainer } from '@react-navigation/native';
import { createStackNavigator } from '@react-navigation/stack';
import 'react-native-gesture-handler';
import { color } from 'react-native-reanimated';
 
const Stack = createStackNavigator();
 
export default function App() {
  return (
    <NavigationContainer>
      <Stack.Navigator>
        <Stack.Screen name="Getting Started" component={Get} />
        <Stack.Screen name="Home" component={Home} />
        <Stack.Screen name="Destinations" component={Destinations} />
        <Stack.Screen name="Luzon" component={Luzon} />
        <Stack.Screen name="Visayas" component={Visayas} />
        <Stack.Screen name="Mindanao" component={Mindanao} />
        <Stack.Screen name="About" component={About} />
        <Stack.Screen name="Kayangan Lake" component={l1} />
        <Stack.Screen name="Banaue Rice Terraces" component={l2} />
        <Stack.Screen name="Racuh A Payaman" component={l3} />
        <Stack.Screen name="Big Lagoon and Small Lagoon" component={l4} />
        <Stack.Screen name="Hidden Beach" component={l5} />
        <Stack.Screen name="Boracay" component={v1} />
        <Stack.Screen name="Bantayan Island" component={v2} />
        <Stack.Screen name="Chocolate Hills" component={v3} />
        <Stack.Screen name="Panglao Island" component={v4} />
        <Stack.Screen name="Cambugahay Falls" component={v5} />
        <Stack.Screen name="Island Garden City of Samal" component={m1} />
        <Stack.Screen name="Cloud 9" component={m2} />
        <Stack.Screen name="Magpupungko Rock Pools" component={m3} />
        <Stack.Screen name="Hinatuan Enchanted River " component={m4} />
        <Stack.Screen name="Naked Island" component={m5} />
 
      </Stack.Navigator>
    </NavigationContainer>
  );
};
function Get({navigation}) {
  return (
    <View >
       <ImageBackground style={styles.container} source={{
          uri: 'https://th.bing.com/th/id/Rba129d912de5dafddeaaf758a98e7042?rik=Sc%2f0UeHyHR9IDw&riu=http%3a%2f%2fwww.netanimations.net%2fgif-ocean-sunset-travel-water-Favim.com-375203_large.gif&ehk=JQ0YFh%2bYo1gLStmBcugUiEo%2bSItw%2bFMk0gH5ZeKuU30%3d&risl=&pid=ImgRaw',
        }}>
      <Text> </Text>
      <Text> </Text>
      <Text> </Text>
      <Text> </Text>
      <Text> </Text>
      <Text> </Text>
       <Image
        style={styles.logoStyle4}
        source={{
          uri: 'https://freepikpsd.com/wp-content/uploads/2019/10/choose-philippines-logo-png-5-Transparent-Images-Free.png',
        }}
      />
      <Text> </Text>
      <Text style={styles.getText}> EXPLORE & ENJOY the Beautiful Island of Philippines</Text>
      <Text> </Text>
      <Text> </Text>  
      <View>
      <Button color="black"title="GET STARTED" onPress={() => navigation.navigate('Home')}/>
    </View>
    </ImageBackground>
    </View>
    
  );
}
function Home({navigation}) {
  return (
    <View style={styles.buttonContainer}>
       <ImageBackground style={styles.container} source={{
          uri: 'https://th.bing.com/th/id/R63c7321a5e52cd4d392d324f8a643f34?rik=cexVGSGTrtfoHg&riu=http%3a%2f%2fmedia.giphy.com%2fmedia%2fCf4qsIEIrFs6Q%2fgiphy.gif&ehk=inWM49CQwu05FyMq8DjullyBDpuBie2pbz9T3BycTGE%3d&risl=&pid=ImgRaw',
        }}>
      <Text> </Text>
      <Text> </Text>
      <Text> </Text>
      <Text> </Text>
      <Text> </Text>
      <Text> </Text>
      <Text> </Text>
      <Text> </Text>
       <Image
        style={styles.logoStyle4}
        source={{
          uri: 'https://freepikpsd.com/wp-content/uploads/2019/10/choose-philippines-logo-png-5-Transparent-Images-Free.png',
        }}
      />
     
     <View style={styles.buttonContainer}>
        <Button
        color="#4169e1"
        title="Destinations"
        
        onPress={() => navigation.navigate("Destinations")}
      /> 
      </View>
      <View style={styles.buttonContainer}> 
        <Button 
        color="#4169e1"
        title="About"
        
        onPress={() => navigation.navigate("About")}
      /> 
      </View>
      
 
      </ImageBackground>
    </View>
    
    
  );
}
function Destinations({navigation}) {
  return (
    <View style={styles.buttonContainer}>
       <ImageBackground style={styles.container} source={{
          uri: 'https://th.bing.com/th/id/R63c7321a5e52cd4d392d324f8a643f34?rik=cexVGSGTrtfoHg&riu=http%3a%2f%2fmedia.giphy.com%2fmedia%2fCf4qsIEIrFs6Q%2fgiphy.gif&ehk=inWM49CQwu05FyMq8DjullyBDpuBie2pbz9T3BycTGE%3d&risl=&pid=ImgRaw',
        }}>
      <Text> </Text>
      <Text> </Text>
      <Text> </Text>
       <Image
        style={styles.logoStyle1}
        source={{
          uri: 'https://www.jing.fm/clipimg/detail/297-2979367_philippine-map-luzon-visayas-mindanao.png',
        }}
      />
     <Text> </Text>
     <View style={styles.buttonContainer}>
        <Button
        color="#4169e1"
        title="Luzon"
        
        onPress={() => navigation.navigate("Luzon")}
      /> 
      </View>
      <View style={styles.buttonContainer}> 
        <Button
        color="#4169e1" 
        title="Visayas"
        
        onPress={() => navigation.navigate("Visayas")}
      /> 
      </View>
      <View style={styles.buttonContainer}> 
        <Button
        color="#4169e1" 
        title="Mindanao"
        
        onPress={() => navigation.navigate("Mindanao")}
      /> 
      </View>
      
 
      </ImageBackground>
    </View>
    
    
  );
}

function About({navigation}) {
  return (
    <View style={styles.buttonContainer}>
       <ImageBackground style={styles.container} source={{
          uri: 'https://th.bing.com/th/id/R63c7321a5e52cd4d392d324f8a643f34?rik=cexVGSGTrtfoHg&riu=http%3a%2f%2fmedia.giphy.com%2fmedia%2fCf4qsIEIrFs6Q%2fgiphy.gif&ehk=inWM49CQwu05FyMq8DjullyBDpuBie2pbz9T3BycTGE%3d&risl=&pid=ImgRaw',
        }}>
      <Text> </Text>
      <Text> </Text>
      <Text> </Text>
       <Image
        style={styles.logoStyle5}
        source={require('./assets/logo.png')}
      />
     <Text style={{fontWeight:"bold", textAlign:"center", fontSize: 25}}>TravGo</Text>
      <Text style={{
            height: 180,
            width: 360,
            textAlign: "center",
            fontSize: 16
          }}>TravGo is a travel brochure application that will guide tourists on which tourist attractions in a given region they should visit. Your go-to travel guide in exploring our country. It includes historical backgrounds and expectations in the place. It is easy to use and useful to people who want to explore the Philippines.</Text>
      <View style={{
            borderColor: "white",
            borderWidth: 3,
            height: 150,
            width: 360
          }}>
            <Text style={{fontWeight:"bold", textAlign:"center"}}>SYNTAX ERROR GROUP</Text>
      <Text style={{textAlign:"center", fontStyle:"italic"}}>CERVANTES, Qay</Text>
      <Text style={{textAlign:"center", fontStyle:"italic"}}>ELOPRE, Hannah Jane</Text>
      <Text style={{textAlign:"center", fontStyle:"italic"}}>MERCADO, Eunard</Text>
      <Text style={{textAlign:"center", fontStyle:"italic"}}>MONTOPAR, Gielin</Text>
      <Text style={{textAlign:"center", fontStyle:"italic"}}>PACIS, Uriel Jeremiah</Text>
      <Text style={{textAlign:"center", fontStyle:"italic"}}>RICALDE, Jonathan</Text>
      </View>
      <StatusBar style="auto" />
 
      </ImageBackground>
    </View>
    
    
  );
}

function Luzon({navigation}) {
  return (
    <View style={styles.buttonContainer}>
       <ImageBackground style={styles.container} source={{
          uri: 'https://i2.wp.com/www.alinasemjonov.com/wp-content/uploads/2016/01/featured-1.jpg?fit=593%2C593',
        }}>
      <Text> </Text>
       <Image
        style={styles.logoStyle4}
        source={{
          uri: 'https://freepikpsd.com/wp-content/uploads/2019/10/choose-philippines-logo-png-5-Transparent-Images-Free.png',
        }}
      />
      <Text> </Text>
     <Image
        style={styles.logoStyle3}
        source={{
          uri: 'https://1.bp.blogspot.com/-7aPkBAyPwYM/XxTuzj8oXHI/AAAAAAAAzJ8/nICKyeVQF9E_H4amvBm1EW7-uptiCp58wCLcBGAsYHQ/s1600/Coron%2BPalawan_Kayangan%2BLake.jpg',
        }}
      />
     <View style={styles.buttonContainer}>
        <Button
        color="#4169e1" 
        title="Kayangan Lake"
        
        onPress={() => navigation.navigate("Kayangan Lake")}
      /> 
      </View>
      <Text> </Text>
      <Image
        style={styles.logoStyle3}
        source={{
          uri: 'https://www.thepoortraveler.net/wp-content/uploads/2012/06/Banaue-Rice-Terraces.jpg',
        }}
      />
      <View style={styles.buttonContainer}> 
        <Button 
        color="#4169e1"
        title="Banaue Rice Terraces "
        
        onPress={() => navigation.navigate("Banaue Rice Terraces")}
      /> 
      </View>
      <Text> </Text>
      <Image
        style={styles.logoStyle3}
        source={{
          uri: 'https://th.bing.com/th/id/Rc00a3d971e4c1f48b89fa9c2d7c77fd6?rik=P6zuD5OsM%2b1ALg&riu=http%3a%2f%2fwww.goway.com%2fmedia%2f_versions%2fasia%2fimages%2fphilippines%2fpalawan%2fel_nido%2c_palawan%2c_philippines_753626092_hero.jpg&ehk=vXd1tpewiuO%2bjJvRlDtQ8pdDmdb4oFHxxQAIPi8x4FM%3d&risl=&pid=ImgRaw',
        }}
      />
      <View style={styles.buttonContainer}> 
        <Button 
        color="#4169e1"
        title="Big Lagoon and Small Lagoon"
        
        onPress={() => navigation.navigate("Big Lagoon and Small Lagoon")}
      /> 
      </View>
      <Text> </Text>
      <Image
        style={styles.logoStyle3}
        source={{
          uri: 'https://th.bing.com/th/id/R15d22ff929298f33d6936dc6b235daf1?rik=vlSnQ1WuNVJH3g&riu=http%3a%2f%2fwww.awnwtravel.com%2fuploads%2f5%2f6%2f2%2f0%2f5620327%2f4866638_orig.jpg&ehk=wQvpx%2f4CdevgzECBcVUSr5LrzD1kqkNx2iJXJ4aHvGY%3d&risl=&pid=ImgRaw',
        }}
      />
      <View style={styles.buttonContainer}>
        <Button 
        color="#4169e1"
        title="Racuh A Payaman"
        
        onPress={() => navigation.navigate("Racuh A Payaman")}
      /> 
      <Text> </Text>
      <Image
        style={styles.logoStyle3}
        source={{
          uri: 'https://philippineslifestyle.com/wp-content/uploads/header-asia-beach1.jpg',
        }}
      />
      </View>
      <View style={styles.buttonContainer}>
        <Button
        color="#4169e1" 
        title="Hidden Beach"
        
        onPress={() => navigation.navigate("Hidden Beach")}
      /> 
      </View>
 
      </ImageBackground>
    </View>
    
    
  );
}
function Visayas({navigation}) {
  return (
    <View style={styles.buttonContainer}>
       <ImageBackground style={styles.container} source={{
          uri: 'https://i2.wp.com/www.alinasemjonov.com/wp-content/uploads/2016/01/featured-1.jpg?fit=593%2C593',
        }}>
      <Text> </Text>
       <Image
        style={styles.logoStyle4}
        source={{
          uri: 'https://freepikpsd.com/wp-content/uploads/2019/10/choose-philippines-logo-png-5-Transparent-Images-Free.png',
        }}
      />
      <Text> </Text>
     <Image
        style={styles.logoStyle3}
        source={{
          uri: 'https://foundtheworld.com/wp-content/uploads/2016/10/Boracay-Philippines-9.jpg',
        }}
      />
     <View style={styles.buttonContainer}>
        <Button 
        color="#4169e1"
        title="Boracay"
        
        onPress={() => navigation.navigate("Boracay")}
      /> 
      </View>
      <Text> </Text>
      <Image
        style={styles.logoStyle3}
        source={{
          uri: 'https://th.bing.com/th/id/OIP.rgOdXw7wtMw5p1ss90M9EgHaEK?pid=ImgDet&rs=1',
        }}
      />
      <View style={styles.buttonContainer}> 
        <Button
        color="#4169e1" 
        title="Bantayan Island"
        
        onPress={() => navigation.navigate("Bantayan Island")}
      /> 
      </View>
      <Text> </Text>
      <Image
        style={styles.logoStyle3}
        source={{
          uri: 'https://i0.wp.com/unusualplaces.org/wp-content/uploads/2019/05/chocolatehills.jpg?fit=1680%2C1050&ssl=1',
        }}
      />
      <View style={styles.buttonContainer}> 
        <Button
        color="#4169e1" 
        title="Chocolate Hills"
        
        onPress={() => navigation.navigate("Chocolate Hills")}
      /> 
      </View>
      <Text> </Text>
      <Image
        style={styles.logoStyle3}
        source={{
          uri: 'https://youimg1.tripcdn.com/target/10091f000001gsov709D0_C_750_500.jpg?proc=source%2Ftrip',
        }}
      />
      <View style={styles.buttonContainer}>
        <Button 
        color="#4169e1"
        title="Panglao Island"
        
        onPress={() => navigation.navigate("Panglao Island")}
      /> 
      </View>
      <Text> </Text>
      <Image
        style={styles.logoStyle3}
        source={{
          uri: 'https://dailytravelpill.com/wp-content/uploads/2019/12/cambugahay-falls-bamboo-raft.jpg',
        }}
      />
      <View style={styles.buttonContainer}>
        <Button 
        color="#4169e1"
        title="Cambugahay Falls"
        
        onPress={() => navigation.navigate("Cambugahay Falls")}
      /> 
      </View>
 
      </ImageBackground>
    </View>
    
    
  );
}
function Mindanao({navigation}) {
  return (
    <View style={styles.buttonContainer}>
       <ImageBackground style={styles.container} source={{
          uri: 'https://i2.wp.com/www.alinasemjonov.com/wp-content/uploads/2016/01/featured-1.jpg?fit=593%2C593',
        }}>
      <Text> </Text>
       <Image
        style={styles.logoStyle4}
        source={{
          uri: 'https://freepikpsd.com/wp-content/uploads/2019/10/choose-philippines-logo-png-5-Transparent-Images-Free.png',
        }}
      />
      <Text> </Text>
     <Image
        style={styles.logoStyle3}
        source={{
          uri: 'https://www.goodinfonet.com/uploads/news/goodinfonet_my_first_local_travel_island_garden_city_of_samal_1597708880_0.jpg',
        }}
      />
     <View style={styles.buttonContainer}>
        <Button 
        color="#4169e1"
        title="Island Garden City of Samal"
        
        onPress={() => navigation.navigate("Island Garden City of Samal")}
      /> 
      </View>
      <Text> </Text>
      <Image
        style={styles.logoStyle3}
        source={{
          uri: 'https://jonnymelon.com/wp-content/uploads/2018/10/cloud-9-13.jpg?x62219',
        }}
      />
      <View style={styles.buttonContainer}> 
        <Button 
        color="#4169e1"
        title="Cloud 9"
        
        onPress={() => navigation.navigate("Cloud 9")}
      /> 
      </View>
      <Text> </Text>
      <Image
        style={styles.logoStyle3}
        source={{
          uri: 'https://th.bing.com/th/id/OIP.nwnOmBbDn8WJEo7xJvH4_wHaFj?pid=ImgDet&rs=1',
        }}
      />
      <View style={styles.buttonContainer}> 
        <Button 
        color="#4169e1"
        title="Magpupungko Rock Pools"
        
        onPress={() => navigation.navigate("Magpupungko Rock Pools")}
      /> 
      </View>
      <Text> </Text>
      <Image
        style={styles.logoStyle3}
        source={{
          uri: 'https://atchuup.com/wp-content/uploads/2014/05/er14.jpg',
        }}
      />
      <View style={styles.buttonContainer}>
        <Button
        color="#4169e1" 
        title="Hinatuan Enchanted River"
        
        onPress={() => navigation.navigate("Hinatuan Enchanted River ")}
      /> 
      </View>
      <Text> </Text>
      <Image
        style={styles.logoStyle3}
        source={{
          uri: 'https://i1.wp.com/www.gamintraveler.com/wp-content/uploads/2018/12/Naked-Island-Siargao-0336.jpg?fit=986%2C739&ssl=1',
        }}
      />
      <View style={styles.buttonContainer}>
        <Button 
        color="#4169e1"
        title="Naked Island"
        
        onPress={() => navigation.navigate("Naked Island")}
      /> 
      </View>
 
      </ImageBackground>
    </View>
    
    
  );
}

function l1({navigation}) {
  return (
    <View >
       <ImageBackground style={styles.container} source={{
          uri: 'https://i2.wp.com/www.alinasemjonov.com/wp-content/uploads/2016/01/featured-1.jpg?fit=593%2C593',
        }}>
          <Text> </Text>
          <Image
        style={styles.logoStyle2}
        source={{
          
          uri: 'https://freepikpsd.com/wp-content/uploads/2019/10/choose-philippines-logo-png-5-Transparent-Images-Free.png',
        }}
      />
      <Text> </Text>
       <Image
        style={styles.logoStyle}
        source={{
          
          uri: 'https://www.zenrooms.com/blog/wp-content/uploads/2020/11/Kayangan-Lake-2.jpg',
        }}
      />
      <Text> </Text>
      <View>
      <Text style={{fontWeight:"bold", textAlign:"center", fontSize: 20}}>Kayangan Lake </Text>
      <Text style={{
            height: 240,
            width: 360,
            textAlign: "center",
            fontSize: 15
          }}> While Palawan boasts its pristine beaches and lagoons, making it the best island in the world, it also has picture-perfect lakes that will make your jaw drop. One of the most famous is Kayangan Lake in Coron.
 
Surrounded by towering limestone cliffs dotted with greenery, Kayangan is the cleanest lake in the Philippines and one of the cleanest in Asia. The water is so clear that you can see through to the rock formations beneath the surface. It is one of two lakes in Coron (out of 8 lakes) that are open to the public. The lake is 70% freshwater and 30% saltwater, making it ideal for swimming.  </Text>
      </View>
      <Text> </Text>
      <View style={{
            borderColor: "white",
            borderWidth: 3,
            height: 100,
            width: 360,
          }}>
      <Text style={{fontWeight:"bold", textAlign:"center"}}>How to get there: </Text>
      <Text style= {{fontWeight:"bold", textAlign:"center"}}>Book a flight bound for Coron. Upon arrival get the Tour A which is the most popular way to visit Kayangan Lake.</Text>
      </View>
      <StatusBar style="auto" />
 
      
      </ImageBackground>
    </View>
    
    
  );
}
function l2({navigation}) {
  return (
    <View >
       <ImageBackground style={styles.container} source={{
          uri: 'https://i2.wp.com/www.alinasemjonov.com/wp-content/uploads/2016/01/featured-1.jpg?fit=593%2C593',
        }}>
      <Text> </Text>
          <Image
        style={styles.logoStyle2}
        source={{
          
          uri: 'https://freepikpsd.com/wp-content/uploads/2019/10/choose-philippines-logo-png-5-Transparent-Images-Free.png',
        }}
      />
      <Text> </Text>
       <Image
        style={styles.logoStyle}
        source={{
          uri: 'https://www.zenrooms.com/blog/wp-content/uploads/2020/11/banaue-rice-terraces-1.jpg',
        }}
      />
      <Text> </Text>
      <View>
      <Text style={{fontWeight:"bold", textAlign:"center", fontSize: 20}}>Banaue Rice Terraces</Text>
      <Text style={{
            height: 150,
            width: 360,
            textAlign: "center",
            fontSize: 15
          }}>One of the places to visit in Luzon that will take your breath away is Banaue Rice Terraces. Locally known as the Hagdan-Hagdang Palayan, this beautiful spot in Luzon is undoubtedly a source of pride not just for the Ifugaos but also for Filipinos across the world. Because of its magnificence, it has been inscribed on the UNESCO World Heritage List in 1995. </Text>
      </View>
      <Text> </Text>
      <View style={{
            borderColor: "white",
            borderWidth: 3,
            height: 160,
            width: 360
          }}>
      <Text style={{fontWeight:"bold", textAlign:"center"}}>How to get there: </Text>
      <Text style={{fontWeight:"bold", textAlign:"center"}}>From Cubao or Sampaloc in Manila, you can ride a bus bound for Banaue. There are two buses that go straight to Banaue: Coda Lines and Ohayami Trans. The travel time will take about 9 hours at the minimum. Upon arrival in Banaue bus terminal, you can ride a tricycle going to your hotel or just tour the area directly.</Text>
      </View>
      <StatusBar style="auto" />
    
 
      
      </ImageBackground>
    </View>
    
    
  );
}

function l3({navigation}) {
  return (
    <View >
       <ImageBackground style={styles.container} source={{
          uri: 'https://i2.wp.com/www.alinasemjonov.com/wp-content/uploads/2016/01/featured-1.jpg?fit=593%2C593',
        }}>
      <Text> </Text>
          <Image
        style={styles.logoStyle2}
        source={{
          
          uri: 'https://freepikpsd.com/wp-content/uploads/2019/10/choose-philippines-logo-png-5-Transparent-Images-Free.png',
        }}
      />
      <Text> </Text>
       <Image
        style={styles.logoStyle}
        source={{
          uri: 'https://www.zenrooms.com/blog/wp-content/uploads/2020/11/racuh-a-payaman-batanes-1.jpg',
        }}
      />
      <Text> </Text>
      <View>
      <Text style={{fontWeight:"bold", textAlign:"center", fontSize: 20}}>Racuh A Payaman</Text>
      <Text style={{
            height: 220,
            width: 360,
            textAlign: "center",
            fontSize: 15
          }}>If we’re to describe Racuh A Payaman in Batanes in one word, it’d be magical. There are rolling hills and knolls everywhere, surrounded by a carpet of the greenest grass you’ll ever see, that you’ll notice even the tiniest grass is swaying as Batanes wind blows. You could almost imagine being in the 1965 film Sound of Music and hear Julie Andrews sing “the hills are alive…”
 
From there, you can also see Mt. Iraya, Diura Beach, Tayid Lighthouse, and the Pacific Ocean. All in one place. Racuh A Payaman is one of the top tourist spots in Luzon. </Text>
      </View>
      <Text> </Text>
      <View style={{
            borderColor: "white",
            borderWidth: 3,
            height: 100,
            width: 360
          }}>
      <Text style={{fontWeight:"bold", textAlign:"center"}}>How to get there: </Text>
      <Text style={{fontWeight:"bold", textAlign:"center"}}>From Manila, book a flight to Batanes. You can rent a van, tricycle, or motorbike to reach Racuh A Payaman.</Text>
      </View>
      <StatusBar style="auto" />
 
      
      </ImageBackground>
    </View>
    
    
  );
}

function l4({navigation}) {
  return (
    <View >
       <ImageBackground style={styles.container} source={{
          uri: 'https://i2.wp.com/www.alinasemjonov.com/wp-content/uploads/2016/01/featured-1.jpg?fit=593%2C593',
        }}>
      <Text> </Text>
          <Image
        style={styles.logoStyle2}
        source={{
          
          uri: 'https://freepikpsd.com/wp-content/uploads/2019/10/choose-philippines-logo-png-5-Transparent-Images-Free.png',
        }}
      />
      <Text> </Text>
       <Image
        style={styles.logoStyle}
        source={{
          uri: 'https://www.zenrooms.com/blog/wp-content/uploads/2020/11/big-lagoon-1.jpg',
        }}
      />
      <Text> </Text>
      <View>
      <Text style={{fontWeight:"bold", textAlign:"center", fontSize: 20}}>Big Lagoon and Small Lagoon</Text>
      <Text style={{
            height: 160,
            width: 360,
            textAlign: "center",
            fontSize: 15
          }}>Undoubtedly, El Nido always makes it to the top list of beautiful places in Luzon. Don’t miss the Big and Small Lagoons as these are the best tourist spots in El Nido. You can go kayaking, paddle boarding, or swimming in these lagoons while digesting its majestic views. Aside from these lagoons, make sure to also visit Nacpan Beach as it is one of the most beautiful beaches in the Philippines. </Text>
      </View>
      <Text> </Text>
      <View style={{
            borderColor: "white",
            borderWidth: 3,
            height: 160,
            width: 360
          }}>
      <Text style={{fontWeight:"bold", textAlign:"center"}}>How to get there: </Text>
      <Text style={{fontWeight:"bold", textAlign:"center"}}>As of writing, only one airline (Air Swift) flies to El Nido directly but it’s a bit expensive. If you’re on a budget, you can book a flight to Puerto Princesa then ride a van to El Nido. Travel time from Pueto Princesa is around 5-7 hours. Upon arrival in El Nido, book tour A.</Text>
      </View>
      <StatusBar style="auto" />
    
 
      
      </ImageBackground>
    </View>
    
    
  );
}

function l5({navigation}) {
  return (
    <View >
       <ImageBackground style={styles.container} source={{
          uri: 'https://i2.wp.com/www.alinasemjonov.com/wp-content/uploads/2016/01/featured-1.jpg?fit=593%2C593',
        }}>
      <Text> </Text>
          <Image
        style={styles.logoStyle2}
        source={{
          
          uri: 'https://freepikpsd.com/wp-content/uploads/2019/10/choose-philippines-logo-png-5-Transparent-Images-Free.png',
        }}
      />
      <Text> </Text>
       <Image
        style={styles.logoStyle}
        source={{
          uri: 'https://www.zenrooms.com/blog/wp-content/uploads/2020/10/Blog-cover_hidden-beach-el-nido-1-1.jpg',
        }}
      />
      <Text> </Text>
      <View>
      <Text style={{fontWeight:"bold", textAlign:"center", fontSize: 20}}>Hidden Beach</Text>
      <Text style={{
            height: 200,
            width: 360,
            textAlign: "center",
            fontSize: 15
          }}>Contrary to its name, Hidden Beach in El Nido, Palawan is not-so-hidden anymore especially since Condé Nast Traveler named it as one of the world’s 30 best beaches. The Hidden Beach hides behind tall natural stone walls, with only a tiny break from which to enter and exit. It’s perfect for swimming, chillaxing, and picture-taking! If these are not enough to convince you it’s amazing, we don’t know what else will. If you’re looking for a beach, this is the best tourist spot in Luzon to see. </Text>
      </View>
      <Text> </Text>
      <View style={{
            borderColor: "white",
            borderWidth: 3,
            height: 145,
            width: 360
          }}>
      <Text style={{fontWeight:"bold", textAlign:"center"}}>How to get there: </Text>
      <Text style={{fontWeight:"bold", textAlign:"center"}}>As of writing, only one airline (Air Swift) flies to El Nido directly but it’s a bit expensive. If you’re on a budget, you can book a flight to Puerto Princesa then ride a van to El Nido. Travel time from Pueto Princesa is around 5-7 hours. Upon arrival in El Nido, book tour C to enjoy Hidden Beach.</Text>
      </View>
      <StatusBar style="auto" />
 
      
      </ImageBackground>
    </View>
    
    
  );
} 
 
function v1({navigation}) {
  return (
    <View >
       <ImageBackground style={styles.container} source={{
          uri: 'https://i2.wp.com/www.alinasemjonov.com/wp-content/uploads/2016/01/featured-1.jpg?fit=593%2C593',
        }}>
      <Text> </Text>
          <Image
        style={styles.logoStyle2}
        source={{
          
          uri: 'https://freepikpsd.com/wp-content/uploads/2019/10/choose-philippines-logo-png-5-Transparent-Images-Free.png',
        }}
      />
      <Text> </Text>
       <Image
        style={styles.logoStyle}
        source={{
          uri: 'https://www.zenrooms.com/blog/wp-content/uploads/2020/09/boracay-2-1.jpg',
        }}
      />
      <Text> </Text>
      <View>
      <Text style={{fontWeight:"bold", textAlign:"center", fontSize: 20}}>Boracay</Text>
      <Text style={{
            height: 160,
            width: 360,
            textAlign: "center",
            fontSize: 15
          }}> Oh, Boracay. Does this island even need an introduction? Boracay is not just a famous Western Visayas tourist spot but it’s popular all over the world. What makes travelers visit this island paradise is, well…a lot! From the finest white sand, cerulean waters, fun water activities, and amazing nightlife, Boracay will surely captivate you. </Text>
      </View>
      <Text> </Text>
      <View style={{
            borderColor: "white",
            borderWidth: 3,
            height: 150,
            width: 360
          }}>
      <Text style={{fontWeight:"bold", textAlign:"center"}}>How to get there:</Text>
      <Text style={{fontWeight:"bold", textAlign:"center"}}>Manila you can choose to travel to Boracay via either Kalibo Airport or Caticlan which is otherwise known as Boracay Airport. Caticlan is 30 minutes from Boracay so it's the most convenient option. Flights to Kalibo are usually a bit cheaper, but from Kalibo it takes about 2 hours to reach Boracay.</Text>
      <StatusBar style="auto" />
      </View>
      
      </ImageBackground>
    </View>
    
    
  );
}
function v2({navigation}) {
  return (
    <View >
       <ImageBackground style={styles.container} source={{
          uri: 'https://i2.wp.com/www.alinasemjonov.com/wp-content/uploads/2016/01/featured-1.jpg?fit=593%2C593',
        }}>
     <Text> </Text>
          <Image
        style={styles.logoStyle2}
        source={{
          
          uri: 'https://freepikpsd.com/wp-content/uploads/2019/10/choose-philippines-logo-png-5-Transparent-Images-Free.png',
        }}
      />
      <Text> </Text>
       <Image
        style={styles.logoStyle}
        source={{
          uri: 'https://www.zenrooms.com/blog/wp-content/uploads/2020/09/bantayan-island-cebu-1.jpg',
        }}
      />
      <Text> </Text>
      <View>
      <Text style={{fontWeight:"bold", textAlign:"center", fontSize: 20}}>Bantayan Island</Text>
      <Text style={{
            height: 220,
            width: 360,
            textAlign: "center",
            fontSize: 15
          }}>If you’re looking for peace and quiet with a view, Bantayan Island is what paradise dreams are made of. It is a place where you can find calmness and serenity in spite of the numerous tourists who travel there every day. Once you step out of your boat and walk to Bantayan’s fine white sand, you’ll be welcomed by fresh air and crashing waves of its clear blue waters that become a perfect harmony letting you hear the sound of nature. Because of these, Bantayan is considered as one of the most beautiful Cebu tourist spots.</Text>
      </View>
      <Text> </Text>
      <View style={{
            borderColor: "white",
            borderWidth: 3,
            height: 120,
            width: 360
          }}>
      <Text style={{fontWeight:"bold", textAlign:"center"}}>How to get there: </Text>
      <Text style={{fontWeight:"bold", textAlign:"center"}}>Fly from Manila (MNL) to Mactan–Cebu (CEB) MNL - CEB.
Take the bus from Cebu North Bus Terminal to Hagnaya Port, San Remigio.
Take the car ferry from Hagnaya Port, San Remigio to Santa Fe Pier, Bantayan.
</Text>
</View>
      <StatusBar style="auto" />
 
      
      </ImageBackground>
    </View>
    
    
  );
}
function v3({navigation}) {
  return (
    <View >
       <ImageBackground style={styles.container} source={{
          uri: 'https://i2.wp.com/www.alinasemjonov.com/wp-content/uploads/2016/01/featured-1.jpg?fit=593%2C593',
        }}>
      <Text> </Text>
          <Image
        style={styles.logoStyle2}
        source={{
          
          uri: 'https://freepikpsd.com/wp-content/uploads/2019/10/choose-philippines-logo-png-5-Transparent-Images-Free.png',
        }}
      />
      <Text> </Text>
       <Image
        style={styles.logoStyle}
        source={{
          uri: 'https://www.zenrooms.com/blog/wp-content/uploads/2020/10/chocolate-hills-bohol.jpg',
        }}
      />
      <Text> </Text>
      <View>
      <Text style={{fontWeight:"bold", textAlign:"center", fontSize: 20}}>Chocolate Hills</Text>
      <Text style={{
            height: 200,
            width: 360,
            textAlign: "center",
            fontSize: 15
          }}>Chocolate Hills is composed of more than 1,000 symmetrical mounds, conical and dome-shaped that most people liken them to Hershey’s Kisses. It is called the Chocolate Hills not because it’s made of chocolate but because of its color.
 
In the rainy season, the grass blanketing the hills gives them a soft and lush appearance. While in the summer, the vegetation dies off and turns to a chocolatey brown hue, giving them their name.</Text>
      </View>
      <Text> </Text>
      <View style={{
            borderColor: "white",
            borderWidth: 3,
            height: 140,
            width: 360
          }}>
      <Text style={{fontWeight:"bold", textAlign:"center"}}>How to get there: </Text>
      <Text style={{fontWeight:"bold", textAlign:"center"}}>The fastest and easiest way is by plane. Cebu Pacific Air, Philippine Airlines (PAL), and AirAsia Zest operate multiple flights from Manila to Tagbilaran City, the capital of Bohol. Travel time is around 1 hour and 15 minutes. You may also opt to travel by boat.</Text>
      </View>
      <StatusBar style="auto" />
 
      
      </ImageBackground>
    </View>
    
    
  );
}
function v4({navigation}) {
  return (
    <View >
       <ImageBackground style={styles.container} source={{
          uri: 'https://i2.wp.com/www.alinasemjonov.com/wp-content/uploads/2016/01/featured-1.jpg?fit=593%2C593',
        }}>
      <Text> </Text>
          <Image
        style={styles.logoStyle2}
        source={{
          
          uri: 'https://freepikpsd.com/wp-content/uploads/2019/10/choose-philippines-logo-png-5-Transparent-Images-Free.png',
        }}
      />
      <Text> </Text>
       <Image
        style={styles.logoStyle}
        source={{
          uri: 'https://www.zenrooms.com/blog/wp-content/uploads/2021/01/panglao.jpg',
        }}
      />
      <Text> </Text>
      <View>
      <Text style={{fontWeight:"bold", textAlign:"center", fontSize: 20}}>Panglao Island</Text>
      <Text style={{
            height: 180,
            width: 360,
            textAlign: "center",
            fontSize: 15
          }}>Bohol tourist spots fit every traveler’s taste and if you’re the type of traveler who loves the beach, you’ll definitely enjoy Panglao Island. Known for its white-sand beaches and diving sites, Panglao Island never disappoints its visitors. Aside from the stunning beaches, its marine life makes it a great snorkeling and diving spot as well. </Text>
      </View>
      <Text> </Text>
      <View style={{
            borderColor: "white",
            borderWidth: 3,
            height: 165,
            width: 360
          }}>
      <Text style={{fontWeight:"bold", textAlign:"center"}}>How to get there: </Text>
      <Text style={{fontWeight:"bold", textAlign:"center"}}>Bohol has a new airport which is situated in Panglao Island. It is called Bohol-Panglao International Airport and you can fly there from Manila with Airasia, Cebu Pacific or Philippine Airlines. You can also book your flights through Skyscanner.</Text>
<Text style={{fontWeight:"bold", textAlign:"center"}}>Fly from Manila (MNL) to Panglao Island (TAG) MNL - TAG.</Text>
</View>
      <StatusBar style="auto" />
 
      
      </ImageBackground>
    </View>
    
    
  );
}
function v5({navigation}) {
  return (
    <View >
       <ImageBackground style={styles.container} source={{
          uri: 'https://i2.wp.com/www.alinasemjonov.com/wp-content/uploads/2016/01/featured-1.jpg?fit=593%2C593',
        }}>
      <Text> </Text>
          <Image
        style={styles.logoStyle2}
        source={{
          
          uri: 'https://freepikpsd.com/wp-content/uploads/2019/10/choose-philippines-logo-png-5-Transparent-Images-Free.png',
        }}
      />
      <Text> </Text>
       <Image
        style={styles.logoStyle}
        source={{
          uri: 'https://www.zenrooms.com/blog/wp-content/uploads/2020/11/cambugahay-falls-siquijor-tourist-spots.jpg',
        }}
      />
      <Text> </Text>
      <View>
      <Text style={{fontWeight:"bold", textAlign:"center", fontSize: 20}}>Cambugahay Falls</Text>
      <Text style={{
            height: 200,
            width: 360,
            textAlign: "center",
            fontSize: 15
          }}>Located in the town of Lazi in Siquijor, Cambugahay Falls is considered one of the most beautiful waterfalls in the Philippines. Cambugahay Falls is a catch for tourists because of its turquoise clean and warm water originating from natural springs. Its water will invite you to plunge in, the moment you see it. If you want a more thrilling experience, jump on the cliff there or dive into the waters using the swing.</Text>
      </View>
      <Text> </Text>
      <View style={{
            borderColor: "white",
            borderWidth: 3,
            height: 100,
            width: 360
          }}>
      <Text style={{fontWeight:"bold", textAlign:"center"}}>How to get there: </Text>
      <Text style={{fontWeight:"bold", textAlign:"center"}}>Philippines Airlines and Cebu Pacific have daily flights to Dumaguete City (Negros Oriental) Travel time is about an hour.</Text>
      </View>
      <StatusBar style="auto" />
 
      
      </ImageBackground>
    </View>
    
    
  );
} 
 
function m1({navigation}) {
  return (
    <View >
       <ImageBackground style={styles.container} source={{
          uri: 'https://i2.wp.com/www.alinasemjonov.com/wp-content/uploads/2016/01/featured-1.jpg?fit=593%2C593',
        }}>
      <Text> </Text>
          <Image
        style={styles.logoStyle2}
        source={{
          
          uri: 'https://freepikpsd.com/wp-content/uploads/2019/10/choose-philippines-logo-png-5-Transparent-Images-Free.png',
        }}
      />
      <Text> </Text>
       <Image
        style={styles.logoStyle}
        source={{
          uri: 'https://centurytravelandtours.com/images/destinations_local/davao_large.jpg',
        }}
      />
      <Text> </Text>
      <View>
      <Text style={{fontWeight:"bold", textAlign:"center", fontSize: 20}}>Island Garden City of Samal</Text>
      <Text style={{
            height: 180,
            width: 360,
            textAlign: "center",
            fontSize: 15
          }}>If you’re craving the sun, sand, and sea, the Island Garden City of Samal tops the list. Here you’d find some of Davao’s most pristine beaches including Samal Island and Talikud Island. These places will definitely give the relaxation you need while enjoying a great view of the ocean. It’s one of the best Davao tourist spots that you shouldn’t miss for an awesome beach getaway. </Text>
      </View>
      <Text> </Text>
      <View style={{
            borderColor: "white",
            borderWidth: 3,
            height: 150,
            width: 360
          }}>
      <Text style={{fontWeight:"bold", textAlign:"center"}}>How to get there: </Text>
      <Text style={{fontWeight:"bold", textAlign:"center"}}>From Manila, take a flight bound for Davao International Airport or Francisco Bangoy International Airport. Upon arrival, you will have to take two jeepney rides to reach your preferred port, either Sasa Wharf or Santa Ana Wharf. Once at the port, take the ferry bound for Samal Island.</Text>
      </View>
      <StatusBar style="auto" />
 
      
      </ImageBackground>
    </View>
    
    
  );
}
function m2({navigation}) {
  return (
    <View >
       <ImageBackground style={styles.container} source={{
          uri: 'https://i2.wp.com/www.alinasemjonov.com/wp-content/uploads/2016/01/featured-1.jpg?fit=593%2C593',
        }}>
      <Text> </Text>
          <Image
        style={styles.logoStyle2}
        source={{
          
          uri: 'https://freepikpsd.com/wp-content/uploads/2019/10/choose-philippines-logo-png-5-Transparent-Images-Free.png',
        }}
      />
      <Text> </Text>
       <Image
        style={styles.logoStyle}
        source={{
          uri: 'https://www.zenrooms.com/blog/wp-content/uploads/2020/11/cloud-9-siargao-2.jpg',
        }}
      />
      <Text> </Text>
      <View>
      <Text style={{fontWeight:"bold", textAlign:"center", fontSize: 20}}>Cloud 9</Text>
      <Text style={{
            height: 200,
            width: 360,
            textAlign: "center",
            fontSize: 15
          }}>Another stunning tourist spot in Mindanao is Cloud 9 in Siargao. This place is a perfect setting to experience the best Siargao waves. If you’re not game to surf, you can just go to the boardwalk and watch pro surfers. Its three-story wooden pier lets you pick the best spot to get a view of the huge waves while feeling the cool breeze of the air as you wait for the sun to set. And by the way, this is one of the best spots to see the beautiful Siargao sunset. It’s like a sketch that represents the beauty of Mindanao.</Text>
      </View>
      <Text> </Text>
      <View style={{
            borderColor: "white",
            borderWidth: 3,
            height: 120,
            width: 360
          }}>
      <Text style={{fontWeight:"bold", textAlign:"center"}}>How to get there: </Text>
      <Text style={{fontWeight:"bold", textAlign:"center"}}>Take a flight bound for Siargao. Upon arrival at the airport, you can rent a motorcycle to go straight in Cloud 9. It’s near General Luna and very easy to spot. Or you can just ride a tricycle to drop you off in Cloud 9. </Text>
      </View>
      <StatusBar style="auto" />
 
      
      </ImageBackground>
    </View>
    
    
  );
}
function m3({navigation}) {
  return (
    <View >
       <ImageBackground style={styles.container} source={{
          uri: 'https://i2.wp.com/www.alinasemjonov.com/wp-content/uploads/2016/01/featured-1.jpg?fit=593%2C593',
        }}>
      <Text> </Text>
          <Image
        style={styles.logoStyle2}
        source={{
          
          uri: 'https://freepikpsd.com/wp-content/uploads/2019/10/choose-philippines-logo-png-5-Transparent-Images-Free.png',
        }}
      />
      <Text> </Text>
       <Image
        style={styles.logoStyle}
        source={{
          uri: 'https://th.bing.com/th/id/R1bfa8321ff1ba91800f53cb8dcf11bed?rik=r6D4RmiaJmzXbw&riu=http%3a%2f%2fwww.onedayoneadventure.com%2fwp-content%2fuploads%2f2018%2f07%2f32231481_10155787100444541_1420653264575135744_o.jpg&ehk=js0TK23L2RUpvgIBsJQnafaHR%2f5ooScSbtdyOUOU8RE%3d&risl=&pid=ImgRaw',
        }}
      />
      <Text> </Text>
      <View>
      <Text style={{fontWeight:"bold", textAlign:"center", fontSize: 20}}>Magpupungko Rock Pools</Text>
      <Text style={{
            height: 200,
            width: 360,
            textAlign: "center",
            fontSize: 15
          }}>Magpupungko Rock Pools is a great spot for cliff jumping, swimming, and exploring. From General Luna, where most of the tourist accommodations are, it’s just a 45-minute motorbike ride. Its formation is unbelievably beautiful but there is a catch though. Some days, Magpupungko is closed to tourists so be sure to check before you make the trip there. And before going there, make sure what you prefer more because the area gives unique experiences during the low tide and high tide.  </Text>
      </View>
      <Text> </Text>
      <View style={{
            borderColor: "white",
            borderWidth: 3,
            height: 120,
            width: 360
          }}>
      <Text style={{fontWeight:"bold", textAlign:"center"}}>How to get there: </Text>
      <Text style={{fontWeight:"bold", textAlign:"center"}}>From General Luna, it’s a 45-minute drive by motorcycle. The roads in Siargao are smooth so don’t worry about driving there. If you want a more comfortable trip, you can also rent a van that will take you there.</Text>
      </View> 
      <StatusBar style="auto" />
 
      
      </ImageBackground>
    </View>
    
    
  );
}
function m4({navigation}) {
  return (
    <View >
       <ImageBackground style={styles.container} source={{
          uri: 'https://i2.wp.com/www.alinasemjonov.com/wp-content/uploads/2016/01/featured-1.jpg?fit=593%2C593',
        }}>
      <Text> </Text>
          <Image
        style={styles.logoStyle2}
        source={{
          
          uri: 'https://freepikpsd.com/wp-content/uploads/2019/10/choose-philippines-logo-png-5-Transparent-Images-Free.png',
        }}
      />
      <Text> </Text>
       <Image
        style={styles.logoStyle}
        source={{
          uri: 'https://www.zenrooms.com/blog/wp-content/uploads/2020/11/hinatuan-enchanted-river-1.jpg',
        }}
      />
      <Text> </Text>
      <View>
      <Text style={{fontWeight:"bold", textAlign:"center", fontSize: 20}}>Hinatuan Enchanted River</Text>
      <Text style={{
            height: 115,
            width: 360,
            textAlign: "center",
            fontSize: 15
          }}>Arguably the most magnificent tourist attraction in Mindanao, and one of the most beautiful places in the Philippines, Hinatuan Enchanted River is a magically clear blue saltwater river hidden in the jungle, and flawlessly flowing into the Pacific Ocean.  </Text>
      </View>
      <Text> </Text>
      <View style={{
            borderColor: "white",
            borderWidth: 3,
            height: 220,
            width: 360
          }}>
      <Text style={{fontWeight:"bold", textAlign:"center"}}>How to get there: </Text>
      <Text style={{fontWeight:"bold", textAlign:"center"}}>From Manila, you can reach Bislig City by riding a plane going to Davao City, Butuan City, or Surigao City. From there, you can ride a bus going to Mangagoy, part of Bislig City. The fare costs PHP 250 to PHP 300 one way. The travel time depends on where you’re coming from. From Butuan City, the trip takes about 3 to 4 hours; while from Davao City, it takes 5 to 6 hours. 
 
When you’re in Bislig already, ride a bus to Hinatuan Terminal. Upon arrival, ride a tricycle that will take you to the Enchanted River.</Text>
</View>
      <StatusBar style="auto" />
 
      
      </ImageBackground>
    </View>
    
    
  );
}
function m5({navigation}) { 
  return (
    <View >
       <ImageBackground style={styles.container} source={{
          uri: 'https://i2.wp.com/www.alinasemjonov.com/wp-content/uploads/2016/01/featured-1.jpg?fit=593%2C593',
        }}>
      <Text> </Text>
          <Image
        style={styles.logoStyle2}
        source={{
          
          uri: 'https://freepikpsd.com/wp-content/uploads/2019/10/choose-philippines-logo-png-5-Transparent-Images-Free.png',
        }}
      />
      <Text> </Text>
       <Image
        style={styles.logoStyle}
        source={{
          uri: 'https://www.zenrooms.com/blog/wp-content/uploads/2020/11/Naked-Island-siargao-tourist-spots-in-mindanao.jpg',
        }}
      />
      <Text> </Text>
      <View>
      <Text style={{fontWeight:"bold", textAlign:"center", fontSize: 20}}>Naked Island</Text>
      <Text style={{
            height: 150,
            width: 360,
            textAlign: "center",
            fontSize: 15
          }}>If you want to see a naked beach, literally, you’ll find one in Siargao. Naked island, as the name suggests, is completely bare. This tourist spot in Mindanao has nothing but white sand and azure waters surrounding it, no distractions for the 360° view of the island. </Text>
      </View>
      <Text> </Text>
      <View style={{
            borderColor: "white",
            borderWidth: 3,
            height: 105,
            width: 360
          }}>
      <Text style={{fontWeight:"bold", textAlign:"center"}}>How to get there: </Text>
      <Text style={{fontWeight:"bold", textAlign:"center"}}>From General Luna, you will just have to board a rented boat. It’s usually part of the three-island tour in Siargao where you’ll visit Naked Island, Guyam Island, and Daku Island. </Text>
      </View>
      <StatusBar style="auto" />
 
      
      </ImageBackground>
    </View>
    
    
  );
} 































const styles = StyleSheet.create({
  container: {
    
    flex: 1,
    alignItems: 'center',
    justifyContent: 'center',
    width:383,
    height:850,
    justifyContent: 'space-between'
  },
 
  logoStyle:{
    borderTopLeftRadius: 20,
    width:350,
    height:250,
    justifyContent: 'center',
    resizeMode: 'contain',
    borderColor:'black',
    borderWidth:5
  },

  logoStyle1:{
    width:300,
    height:400,
    justifyContent: 'center',
    borderWidth:10,
    borderColor:'black'
  },
 
  othercontainer: {
    justifyContent: 'center',
    width:250,
    height:250,
  },
  
  buttonContainer: {
    width:383,
    margin:5,
    borderColor:'black',
    borderWidth:1,
  },

  logoStyle2:{
    width:250,
    height:150,
    justifyContent: 'center',
    resizeMode: 'contain',
  },

  logoStyle3:{
    width:383,
    height:50,
    justifyContent: 'center',
    borderWidth:4,
    borderColor:'white'
  },

  logoStyle4:{
    borderTopLeftRadius: 20,
    width:350,
    height:250,
    justifyContent: 'center',
    resizeMode: 'contain',
  },
  
  logoStyle5:{
    width:350,
    height:350,
    justifyContent: 'center',
    borderWidth:4,
    borderColor:'black',
  },

  title: {
    textAlign: 'center',
    marginVertical: 10,
  },

  getText: {
    fontWeight:"bold",
    textAlign:"center", 
    fontStyle: "italic",
    fontSize: 25,
     color:"#001a66"
  }
  
 
});