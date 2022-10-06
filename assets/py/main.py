import fastf1 as ff1
import pandas as pd
from fastf1 import plotting
from matplotlib import pyplot as plt
import mysql.connector as mysql

def connect(Host, User, Password, Db, Test=False):
    try:
        db = mysql.connect(
            host = Host,
            user = User,
            password = Password,
            database = Db
        )
        if Test == True:
            print("Connection works")
        else: return db
    except: print("Error during Connection")

def Speed(driver1, driver2, race):
    plotting.setup_mpl()
    ff1.Cache.enable_cache('cache')
    race = ff1.get_session(2022, race, 'R')
    laps = race.load_laps(with_telemetry=True)
    lapsDriver1 = laps.pick_driver(driver1)
    lapsDriver2 = laps.pick_driver(driver2)

# connect("localhost", "root", "", "f1+", True)