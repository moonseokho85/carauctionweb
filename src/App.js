import React from 'react';
import MemberScreen from './screens/MemberScreen'
import VehicleScreen from './screens/VehicleScreen'
import AuctioneerScreen from './screens/AuctioneerScreen'

function App() {
  return (
    <div className="App">
      <AuctioneerScreen />
      <MemberScreen />
      <VehicleScreen />
    </div>
  );
}

export default App;
