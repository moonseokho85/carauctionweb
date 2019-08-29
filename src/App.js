import React from 'react';
import MemberScreen from './screens/MemberScreen'
import VehicleScreen from './screens/VehicleScreen'
import AuctioneerScreen from './screens/AuctioneerScreen'
import VehicleListingScreen from './screens/VehicleListingScreen'
import OfferScreen from './screens/OfferScreen'
import CloseBiddingScreen from './screens/CloseBiddingScreen'

function App() {
  return (
    <div className="App">
      <AuctioneerScreen />
      <MemberScreen />
      <VehicleScreen />
      <VehicleListingScreen />
      <OfferScreen />
      <CloseBiddingScreen />
    </div>
  );
}

export default App;
