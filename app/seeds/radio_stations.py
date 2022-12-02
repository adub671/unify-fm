from app.models import db, User, RadioStation, environment, SCHEMA


# Adds a demo user, you can add other users here if you want
def seed_radio_stations():
    kiosk = RadioStation(
        name='Kiosk Radio',
        admin_id=2,
        stream_url="https://kioskradiobxl.out.airtime.pro/kioskradiobxl_b",
        image_url="https://yt3.ggpht.com/ytc/AMLnZu_yB69zZxUW9guNKoN6WG5_URTPZRsmTIlfGRr_ug=s900-c-k-c0x00ffffff-no-rj", website_url="https://kioskradio.com/",
        chat_url="",
        now_playing_url="https://kioskradiobxl.airtime.pro/api/live-info-v2",
        calendar_url="",
        additional_link_1="",
        additional_label_1="",
        additional_link_2="",
        additional_label_2="",
        additional_link_3="",
        additional_label_3="",)
    ifmdisco = RadioStation(
        name='Intergalactic FM: Disco Fetish', admin_id=2,
        stream_url="https://radio.intergalactic.fm/2",
        image_url="https://cdn-profiles.tunein.com/s99619/images/logog.png?t=152604",
        website_url="https://www.intergalactic.fm/channels/disco-fetish",
        chat_url="",
        now_playing_url="https://www.intergalactic.fm/now-playing?channel=Disco%20Fetish",
        calendar_url="",
        additional_link_1="",
        additional_label_1="",
        additional_link_2="",
        additional_label_2="",
        additional_link_3="",
        additional_label_3="",)
    ifmcbs = RadioStation(
        name='Intergalactic FM: Cybernetic BroadCasting System',
        admin_id=1,
        stream_url="https://radio.intergalactic.fm/1",
        image_url="https://cdn-profiles.tunein.com/s99619/images/logog.png?t=152604",
        website_url="https://static-media.streema.com/media/cache/05/ea/05eafaaa52fe52cc9f984b1989432b7c.jpg",
        chat_url="",
        now_playing_url="https://www.intergalactic.fm/now-playing?channel=Cybernetic%20Broadcasting%20System",
        calendar_url="",
        additional_link_1="",
        additional_label_1="",
        additional_link_2="",
        additional_label_2="",
        additional_link_3="",
        additional_label_3="",)
    refuge = RadioStation(
        name='Refuge WorldWide',
        admin_id=2,
        stream_url="https://streaming.radio.co/s3699c5e49/listen",
        image_url="https://refugeworldwide.com/og-thumb.jpg",
        website_url="https://refugeworldwide.com/",
        chat_url="https://refugeworldwide.com/chat",
        now_playing_url="https://public.radio.co/stations/s3699c5e49/status",
        calendar_url="",
        additional_link_1="",
        additional_label_1="",
        additional_link_2="",
        additional_label_2="",
        additional_link_3="",
        additional_label_3="",)

    particle = RadioStation(
        name='Particle FM',
        admin_id=2,
        stream_url="https://azuracast.particle.fm/radio/8000/radio.mp3",
        image_url="https://i1.sndcdn.com/avatars-oEn7XKE76IZpyoKB-ANzgWg-t500x500.jpg",
        website_url="https://particle.fm/",
        chat_url="https://particle.fm/chat.html",
        now_playing_url="https://azuracast.particle.fm/api/nowplaying/1",
        calendar_url="",
        additional_link_1="",
        additional_label_1="",
        additional_link_2="",
        additional_label_2="",
        additional_link_3="",
        additional_label_3="",)

    nts1 = RadioStation(
        name='NTS 1',
        admin_id=2,
        stream_url="https://stream-relay-geo.ntslive.net/stream?client=NTSWebApp&t=1669765344306",
        image_url="https://upload.wikimedia.org/wikipedia/commons/thumb/2/20/NTS_Radio_logo.svg/1280px-NTS_Radio_logo.svg.png",
        website_url="https://www.nts.live",
        chat_url="https://www.nts.live/chat/1",
        now_playing_url="https://www.nts.live/api/v2/live",
        calendar_url="",
        additional_link_1="",
        additional_label_1="",
        additional_link_2="",
        additional_label_2="",
        additional_link_3="",
        additional_label_3="",

    )

    db.session.add(kiosk)
    db.session.add(ifmdisco)
    db.session.add(ifmcbs)
    db.session.add(refuge)
    db.session.add(particle)
    db.session.add(nts1)
    db.session.commit()


# Uses a raw SQL query to TRUNCATE or DELETE the users table. SQLAlchemy doesn't
# have a built in function to do this. With postgres in production TRUNCATE
# removes all the data from the table, and RESET IDENTITY resets the auto
# incrementing primary key, CASCADE deletes any dependent entities.  With
# sqlite3 in development you need to instead use DELETE to remove all data and
# it will reset the primary keys for you as well.
def undo_radio_stations():
    if environment == "production":
        db.session.execute(
            f"TRUNCATE table {SCHEMA}.radio_stations RESTART IDENTITY CASCADE;")
    else:
        db.session.execute("DELETE FROM radio_stations")

    db.session.commit()
