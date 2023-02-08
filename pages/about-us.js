import React from 'react'
import Logo from '../public/image/ghana-map.png'
import Image from 'next/image'
import Link from 'next/link'

const AboutUS = () => {
  return (
    <div className='about-us'>
      <div>
        <h2>History of Ghana</h2>
      </div>
      <div>
        <div>
        <p style={{ float: 'left', margin: '0 0 10px 10px'}}><Image src={Logo} width={200} height={200} alt="ghana-map" /></p>
        <p>The Republic of Ghana is named after the medieval West African Ghana Empire.
        The empire became known in Europe and Arabia as the Ghana Empire after the title of its Emperor, 
        the Ghana. The empire appears to have broken up following the 1076 conquest by the Almoravid General Abu-Bakr 
        Ibn-Umar. A reduced kingdom continued to exist after Almoravid rule ended, and the kingdom was later incorporated 
        into subsequent Sahelian empires, such as the Mali Empire several centuries later. Geographically, the ancient 
        Ghana Empire was approximately 500 miles (800 km) north and west of the modern state of Ghana, and controlled 
        territories in the area of the Sénégal River and east towards the Niger rivers, in modern Senegal, Mauritania 
        and Mali. In central Sub-Saharan Africa, agricultural expansion marked the period before 500 AD. Farming 
        began earliest on the southern tips of the Sahara, eventually giving rise to village settlements.Toward the end 
        of the classical era, larger regional kingdoms had formed in West Africa, one of which was the Kingdom of Ghana, 
        north of what is today the nation of Ghana. Before its fall at the beginning of the 10th century, Akans 
        migrated southward and founded several nation-states around their matriclans, including the first empire of 
        Bono state founded in the 11th century and for which the Brong-Ahafo (Bono Ahafo) region is named. The Mole-Dagbon
         people, who founded the earliest centralised political kingdoms of Ghana, migrated from Lake Chad to present day 
         Ghana. Later, Akan ethnic groups such as the Ashanti, Akwamu, Akyem, Fante state and others are thought to 
         possibly have roots in the original Bono state settlement at Bono Manso. The Ashanti kingdom's government 
         operated first as a loose network and eventually as a centralized empire-kingdom with an advanced, highly 
         specialized bureaucracy centred on the capital Kumasi.
         </p>
        </div>
        <div>
          <p>
          By the end of 16th century, most of the ethnic groups constituting the modern Ghanaian population 
          had settled in their present locations. Archaeological remains found in the coastal zone indicate 
          that the area has been inhabited since the Bronze Age (ca. 2000 BC), but these societies, based on 
          fishing in the extensive lagoons and rivers, have left few traces. Archaeological work also suggests 
          that central Ghana north of the forest zone was inhabited as early as 3,000 to 4,000 years ago.
          These migrations resulted in part from the formation and disintegration of a series of large states 
          in the western Sudan (the region north of modern Ghana drained by the Niger River). Strictly speaking,
           Ghana was the title of the king, but the Arabs, who left records of the kingdom, applied the term to 
           the King, the capital, and the state. The 9th-century Berber historian and geographer Al Yaqubi 
           described ancient Ghana as one of the three most organized states in the region (the others being Gao and Kanem in the central Sudan).
          Its rulers were renowned for their wealth in Gold, the opulence of their courts, and 
          their warrior/hunting skills. They were also masters of the trade in gold, which drew North African
           merchants to the western Sudan. The military achievements of these and later western Sudanic 
           rulers, and their control over the region's gold mines, constituted the nexus of their historical 
           relations with merchants and rulers in North Africa and the Mediterranean.
          Palace of Ashanti King Kwaku Dua of Kumasi, Kumasi, 1887 Ghana succumbed to attacks by its neighbors 
          in the 11th century, but its name and reputation endured. In 1957, when the leaders of the former 
          British colony of the Gold Coast sought an appropriate name for their newly independent state—the 
          first black African nation to gain its independence from colonial rule—they named their new country 
          after ancient Ghana. The choice was more than merely symbolic, because modern Ghana, like its 
          namesake, was equally famed for its wealth and trade in gold.
          Although none of the states of the western Sudan controlled territories in the area that is modern 
          Ghana, several kingdoms that later developed such as Bonoman, were ruled by nobles believed to have 
          immigrated from that region. The trans-Saharan trade that contributed to the expansion of kingdoms in 
          the western Sudan also led to the development of contacts with regions in northern modern Ghana, and 
          in the forest to the south.
          The growth of trade stimulated the development of early Akan states located on the trade route to the 
          goldfields, in the forest zone of the south. The forest itself was thinly populated, but 
          Akan-speaking peoples began to move into it toward the end of the 15th century, with the arrival 
          of crops from South-east Asia and the New World that could be adapted to forest conditions. These 
          new crops included sorghum, bananas, and cassava. By the beginning of the 16th century, European 
          sources noted the existence of the gold-rich states of Akan and Twifu in the Ofin River Valley.
          The Mole-Dagbon Kingdoms are the earliest political kingdoms of Modern Ghana. Found by Naa Gbewaa, 
          numerous kingdoms such as the Kingdom of Dagbon, Gmamprugu, Nanung and others emerged. These kingdoms 
          are spread across the Upper East Region, Upper West Region, North East Region, Ghana, and Northern 
          Region (Ghana) of Ghana. The Kingdom of Dagbon resisted slavery and colonisation fiercely, preferring 
          trade in commodities than humans. As a result, the Kingdom has been significantly influenced by Islam 
          due to trade with neighbouring Kingdoms under the rulership of Yaa Naa Zangina. European and colonial 
          influence was more in Southern and Central Ghana.
          </p>
        </div>
    </div>
    <Link href="https://en.wikipedia.org/wiki/History_of_Ghana#Early_history" target='_blank'><button>Read More</button></Link>
    </div>
    
  )
}

export default AboutUS