import pandas as pd

# Read the GTFS files
agency_df = pd.read_csv(r"C:\Users\kshir\OneDrive\Desktop\bus_data\agency.txt")
stops_df = pd.read_csv(r"C:\Users\kshir\OneDrive\Desktop\bus_data\stops.txt")
routes_df = pd.read_csv(r"C:\Users\kshir\OneDrive\Desktop\bus_data\routes.txt")
calenders_df = pd.read_csv(r"C:\Users\kshir\OneDrive\Desktop\bus_data\calendar_dates.txt")
trips_df = pd.read_csv(r"C:\Users\kshir\OneDrive\Desktop\bus_data\trips.txt")
shapes_df = pd.read_csv(r"C:\Users\kshir\OneDrive\Desktop\bus_data\shapes.txt")
stoptimes_df = pd.read_csv(r"C:\Users\kshir\OneDrive\Desktop\bus_data\stop_times.txt")

# Merge DataFrames to associate stops with routes
merged_df = stoptimes_df.merge(trips_df, on='trip_id').merge(routes_df, on='route_id').merge(stops_df, on='stop_id')

# Group stops by route
stops_by_route = merged_df.groupby(['route_id', 'route_short_name'])['stop_name'].unique()

# Display stops by route
for (route_id, route_short_name), stop_names in stops_by_route.items():
    print(f"Route ID: {route_id}, Short Name: {route_short_name}")
    for stop_name in stop_names:
        print(f"  - {stop_name}")