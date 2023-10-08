import pandas as pd
import data
import random
agency_df = pd.read_csv(r"C:\Users\kshir\OneDrive\Desktop\bus_data\agency.txt")
stops_df = pd.read_csv(r"C:\Users\kshir\OneDrive\Desktop\bus_data\stops.txt")
routes_df = pd.read_csv(r"C:\Users\kshir\OneDrive\Desktop\bus_data\routes.txt")
calenders_df = pd.read_csv(r"C:\Users\kshir\OneDrive\Desktop\bus_data\calendar_dates.txt")
trips_df = pd.read_csv(r"C:\Users\kshir\OneDrive\Desktop\bus_data\trips.txt")
shapes_df = pd.read_csv(r"C:\Users\kshir\OneDrive\Desktop\bus_data\shapes.txt")
stoptimes_df = pd.read_csv(r"C:\Users\kshir\OneDrive\Desktop\bus_data\stop_times.txt")
# print(stoptimes_df)
spotify_df = tracks_data = pd.read_csv(r"C:\Users\kshir\Downloads\music11\data.csv")
stoptimes_df = stoptimes_df.dropna()
trip_id = 1
origin_stop_id = 2204
destination_stop_id = 27662
# trip_id_sp = trips_df[trips_df['route_id'] == route_id]
origin_stop_times = stoptimes_df[stoptimes_df['stop_id'] == origin_stop_id]
destination_stop_times = stoptimes_df[stoptimes_df['stop_id'] == destination_stop_id]
import datetime
for ind2 in origin_stop_times.index:
      if origin_stop_times['trip_id'][ind2] == trip_id :
          origin_arrival_time = str(origin_stop_times['departure_time'][ind2])
for ind2 in destination_stop_times.index:
        if destination_stop_times['trip_id'][ind2] == trip_id:
            destination_departure_time = str(destination_stop_times['arrival_time'][ind2])

origin_arrival_time = origin_arrival_time.replace(":", " ")
destination_departure_time = destination_departure_time.replace(':', ' ')
print(origin_arrival_time)
print(destination_departure_time)
if "26" in origin_arrival_time:
    origin_arrival_time = origin_arrival_time.replace("26", "2")
elif "26" in destination_departure_time:
     destination_departure_time = destination_departure_time.replace("26", "2")
elif "25" in origin_arrival_time:
    origin_arrival_time = origin_arrival_time.replace("25", "1")
elif "25" in destination_departure_time:
     destination_departure_time = destination_departure_time.replace("25", "1")
origin_time = datetime.datetime.strptime(origin_arrival_time, '%H %M %S')
destination_time = datetime.datetime.strptime(destination_departure_time, '%H %M %S')
travel_time = destination_time - origin_time

travel_timeint = travel_time.seconds

# Make Spotify Playlist
# while travel_time > 0:
# spotify_PL_time = spotify_df[spotify['']]

def spotify_playlist():
    spotify_new_pL = spotify_df.sample(n=1)
    if (travel_timeint > (spotify_new_pL['duration_ms'] * 1000)):
        print(spotify_new_pL)
    else:
        while travel_time > 0:
            index = 0
            spotify_new_pL = spotify_new_pL.append(spotify_df.sample(n=1))
            print(spotify_new_pL)
            travel_time = travel_time - (spotify_new_pL['duration_ms'][index] *1000)
            index = index + 1
spotify_playlist()