import React from 'react';
import MemberScreen from './screens/MemberScreen'
import VehicleScreen from './screens/VehicleScreen'
import AuctioneerScreen from './screens/AuctioneerScreen'
import VehicleListingScreen from './screens/VehicleListingScreen'

function App() {
  return (
    <div className="App">
      <AuctioneerScreen />
      <MemberScreen />
      <VehicleScreen />
      <VehicleListingScreen />
    </div>
  );
}

export default App;
