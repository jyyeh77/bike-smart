## Bike-Smart

An iOS-exclusive application built in React Native that makes your Citi-bike experience that 
much better. Bike-Smart seeks to replicate the existing functionality of
existing Citi-bike apps through a familiar interface, where users can click on 
any of the displayed Citi-bike stations in New York City and get live information.

After selecting and locking in their starting station and destination, 
users can then **predict** based on last week's data when to best plan their trip.
If they live near Union Square and the station at 12th St. and 3rd Ave normally empties
out around 8:30 AM, Bike-Smart allows them access this information ahead of time.

## Features

### Replicating the official Citi-bike application

#### Home Page


 <img src='./screenshots/map-overview.png'/ width='300'>

 Every Citi-bike station is displayed via markers on Apple Maps. 
 Users can zoom in by simply tapping the map.

#### Selecting Stations
 <img src='./screenshots/zoomin.png'/ width='250'>
 <img src='./screenshots/start.png'/ width='250'>
 <img src='./screenshots/end.png'/ width='250'>
 
#### Predicting Station Usages

By pressing the hamburger menu on the top-left corner, users can access
two scatter plots:

<img src='./screenshots/graphs.png'/ width='300'>

Top: Display # of bikes at the starting station throughout the day exactly one week ago.

Bottom: Display # of stations at the destination throughout the day exactly one week ago.
 
