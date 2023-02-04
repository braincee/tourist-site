import React from 'react'
import Logo from '../public/image/ghana-map.png'
import Image from 'next/image'

const AboutUS = () => {
  return (
    <div className='about-us'>
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
  )
}

export default AboutUS