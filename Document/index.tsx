import React from 'react'
import { SafeAreaView, ScrollView } from 'react-native'
import { Text } from '../Text'
import Header from '../Header'
import styles from './styles'
import { styles as headerStyles } from '../Header/styles'
import FontAwesome from 'react-native-vector-icons/Ionicons'
import { useScroller } from '../ScrollContext'

export const Document = (props: any) => {

  const scroller = useScroller();

  return (
    <SafeAreaView style={{ flex: 1 }}>
      <Header
        title='My Header'
        headerLeft={
          <Text
            style={headerStyles.headerText}
            onPress={() => console.log('Go Back')}
            primaryColor heading>
            <FontAwesome
              name='ios-arrow-back'
              size={15}
            /> Back
          </Text>
        }
      />
      <ScrollView
        contentContainerStyle={styles.container}
        onScroll={({ nativeEvent }) => {
          scroller.updateOffset(nativeEvent.contentOffset.y);
        }}
        scrollEventThrottle={200}
      >
        <Text style={styles.title}>My Header</Text>

        <Text style={styles.paragraph}>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Donec auctor nisl ut sapien blandit congue. Donec vehicula nulla augue, ac pretium justo malesuada eget. Donec placerat, nulla in convallis consectetur, est erat ornare ex, non lobortis augue risus eu lectus. Curabitur egestas ut magna vitae vehicula. Quisque non semper felis. Cras dictum nisl sed magna tempus lobortis. Nunc arcu ligula, dignissim nec tincidunt vel, eleifend et est.</Text>

        <Text style={styles.paragraph}>Cras viverra turpis ac iaculis posuere. Mauris ut nulla sed leo maximus vulputate. Aenean augue eros, viverra egestas tristique at, aliquam et lacus. Etiam suscipit varius ligula, at tempus lectus pellentesque ac. Donec maximus euismod velit ultrices imperdiet. Suspendisse sem tellus, accumsan quis faucibus sed, tempus id urna. Phasellus id mauris aliquam, elementum mi eu, vestibulum nisl. Sed quis fringilla lorem.</Text>

        <Text style={styles.paragraph}>Nullam ac est id dolor vulputate blandit sed ut purus. Aliquam pharetra sollicitudin eros ac condimentum. Cras luctus risus ante, a mollis libero vehicula eget. Nulla nulla nulla, lacinia vitae feugiat eu, placerat non metus. Cras viverra neque id augue scelerisque, id tristique diam finibus. Vestibulum ante ipsum primis in faucibus orci luctus et ultrices posuere cubilia Curae; Fusce tempus, est non ornare porta, urna leo pulvinar orci, vel blandit quam magna quis justo. Maecenas magna orci, pulvinar eu ligula vel, convallis cursus lorem.</Text>

        <Text style={styles.paragraph}>Curabitur commodo, massa ut scelerisque elementum, purus augue venenatis ex, et tempus massa ex nec ipsum. Nam eu ante quis mauris ornare egestas eget vitae lorem. Mauris ullamcorper nunc commodo turpis rutrum suscipit. Fusce convallis semper ultrices. Donec vel mi id elit aliquam tristique sed et nulla. Morbi feugiat lorem ut eleifend iaculis. Mauris tempus elit vitae enim rutrum porttitor vitae quis ex. Fusce lobortis efficitur tortor, sit amet auctor nunc vulputate id. Nunc sit amet congue lacus.</Text>

        <Text style={styles.paragraph}>Praesent blandit, ante et condimentum laoreet, nisl est maximus orci, nec blandit tortor diam eget massa. Pellentesque habitant morbi tristique senectus et netus et malesuada fames ac turpis egestas. Morbi vehicula molestie nibh, in volutpat nisi placerat eget. In porttitor erat in lobortis euismod. Maecenas ultricies dapibus leo, lacinia congue augue placerat in. Aenean at sapien eget lectus tristique tempor quis ac enim. Curabitur efficitur felis convallis lorem iaculis, quis venenatis augue rutrum. Ut elementum ultricies purus vitae sagittis. Fusce tempor nibh eu orci dapibus, id ultrices ex euismod. Nulla euismod enim eget enim semper, vel sodales nisl sollicitudin. Donec nunc sem, malesuada in commodo eget, euismod ut enim. Morbi eu lobortis elit, et elementum mauris. Nulla eros velit, suscipit at nulla sed, tristique porta tortor. Nunc fringilla fermentum ex sit amet gravida. Vestibulum et metus nunc.</Text>

        <Text style={styles.paragraph}>Cras posuere est ipsum, rhoncus porttitor ligula accumsan sit amet. Mauris dapibus, nisl vitae interdum scelerisque, diam lorem maximus magna, nec imperdiet eros velit nec metus. Aenean in commodo nibh. Sed feugiat, leo tincidunt semper eleifend, sem dui placerat metus, et efficitur lorem nisi auctor massa. Aenean quis pulvinar nulla. Nunc vitae tortor tortor. Ut dignissim tincidunt sapien, at malesuada ante molestie vitae. Aenean consequat congue nulla. Phasellus quis rutrum sem. Integer et semper justo. Donec ut cursus est. Fusce sagittis in velit at egestas. Nullam tincidunt mi ac odio pulvinar interdum eu a lorem.</Text>

        <Text style={styles.paragraph}>Ut fringilla velit quis justo accumsan convallis. Proin ultricies ex at placerat ultricies. Curabitur sed tortor nunc. Suspendisse nec mauris nec turpis lacinia venenatis id et lectus. Pellentesque non viverra mi. Donec mollis, metus ac iaculis rutrum, ante augue mollis nisl, commodo eleifend odio purus quis erat. Donec auctor nec augue ac lobortis. Morbi augue enim, fringilla aliquet lectus eu, ultricies pulvinar leo. Suspendisse potenti. Quisque sit amet bibendum tellus, a consequat nulla. In mattis neque non est pretium ultrices. Morbi in quam neque. Nullam feugiat orci risus, eget convallis risus lobortis ac. Integer pulvinar justo a odio lobortis, eu pharetra nisl luctus. Vestibulum at venenatis massa, a sodales sem. Nunc commodo condimentum felis, id dapibus sem tempor ut.</Text>

        <Text style={styles.paragraph}>Aliquam vehicula nibh sit amet leo luctus cursus. Ut arcu arcu, lacinia rhoncus tortor a, ornare lobortis ex. Etiam eu metus purus. Donec consequat convallis ligula, aliquet sollicitudin ipsum facilisis non. Donec aliquam leo eu vestibulum consequat. Maecenas maximus justo sit amet justo molestie, nec placerat sapien pharetra. Nam ac consectetur ipsum. Maecenas porta placerat lectus. Pellentesque porta rhoncus turpis non tincidunt. Pellentesque lorem orci, rhoncus nec augue ut, fermentum faucibus nisi. Sed at leo sit amet purus pulvinar gravida sit amet vitae tellus. Praesent ullamcorper, ante at mollis dignissim, metus enim cursus elit, non dignissim augue sapien sit amet dolor.</Text>
      </ScrollView>
    </SafeAreaView>
  );
}

export default Document;