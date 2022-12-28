import requests
from flask import jsonify


def now_playing_parser(station):
    url = station["now_playing_url"]
    r = requests.get(url=url)
    data = r.json()
    now_playing = "Data Not Found"
    # Kiosk Radio
    if url == "https://kioskradiobxl.airtime.pro/api/live-info-v2":
        now_playing = data["tracks"]["current"]["metadata"]["track_title"] + \
            " - " + data["shows"]["current"]["name"]

    # Particle FM
    if url.startswith("https://azuracast.particle"):

        if len(data["now_playing"]["streamer"]) > 0:
            now_playing = data["now_playing"]["streamer"] + \
                " - " + data["now_playing"]["song"]["title"]
        else:
            now_playing = data["now_playing"]["song"]["title"]

    # IFM
    if url.startswith("https://www.intergalactic.fm/"):
        now_playing = data["title"]
    # Rinse
    if url == "https://rinse.fm/_next/data/Mp-cYr2q7zwYct9IIxLpp/en/schedule.json":
        now_playing = data["pageProps"]["episodesData"]["entries"]["title"]
    # Balamii
    if url == "https://balamii.airtime.pro/api/live-info":
        now_playing = data["currentShow"][0]["name"]
    # dublab
    if url == "https://api-1.dublab.com/wp-json/lazystate/v1/stream?":
        now_playing = data["/stream"]["current"]["combo"]
    # Netil
    if url == "https://netilradio.airtime.pro/api/live-info":
        now_playing = data["currentShow"][0]["name"] + data["current"]["name"]
    # Refuge
    if url == "https://public.radio.co/stations/s3699c5e49/status":
        now_playing = data["history"][0]["title"]
    # NTS
    if url.startswith("https://www.nts.live/"):
        if "1" in station["name"]:
            now_playing = data["results"][0]["now"]["broadcast_title"]
        if "2" in station["name"]:
            now_playing = data["results"][1]["now"]["broadcast_title"]
    # Tune In
    if url.startswith("https://feed.tunein"):
        now_playing = data["Header"]["Subtitle"]
    elif url is None:
        now_playing = "Loading...."

    return jsonify(now_playing)
