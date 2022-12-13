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
        additional_label_1="",
        additional_link_2="",
        additional_label_2="",
        additional_link_3="",
        additional_label_3="",)
    ifmcbs = RadioStation(
        name='Intergalactic FM: Cybernetic BroadCasting System',
        admin_id=1,
        stream_url="https://radio.intergalactic.fm/1",
        image_url="https://cdn-profiles.tunein.com/s99620/images/logod.png?t=636529271498330000",
        website_url="https://www.intergalactic.fm/channels/cybernetic-broadcasting-system",
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
    nts2 = RadioStation(
        name='NTS 2',
        admin_id=2,
        stream_url="https://stream-relay-geo.ntslive.net/stream2?client=NTSWebApp&t=1670930609260",
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
    # operator = RadioStation(
    #     name='Operator Radio',
    #     admin_id=2,
    #     stream_url="https://stream-relay-geo.ntslive.net/stream?client=NTSWebApp&t=1669765344306",
    #     image_url="https://i1.sndcdn.com/avatars-000303236229-opvt9x-t500x500.jpg",
    #     website_url="https://www.operator-radio.com/",
    #     chat_url="",
    #     now_playing_url="https://www.nts.live/api/v2/live",
    #     calendar_url="",
    #     additional_link_1="",
    #     additional_label_1="",
    #     additional_link_2="",
    #     additional_label_2="",
    #     additional_link_3="",
    #     additional_label_3="",

    # )
    rinse = RadioStation(
        name='Rinse FM',
        admin_id=2,
        stream_url="https://streamer-uk.rinse.fm:8443/stream",
        image_url="https://cdn-radiotime-logos.tunein.com/s92775d.png",
        website_url="https://rinse.fm/",
        chat_url="",
        now_playing_url="https://rinse.fm/_next/data/Mp-cYr2q7zwYct9IIxLpp/en/schedule.json",
        calendar_url="",
        additional_link_1="",
        additional_label_1="",
        additional_link_2="",
        additional_label_2="",
        additional_link_3="",
        additional_label_3="",
    )
    worldwide = RadioStation(
        name='WorldWide FM',
        admin_id=2,
        stream_url="https://worldwidefm.out.airtime.pro/worldwidefm_b",
        image_url="https://scontent-lax3-2.xx.fbcdn.net/v/t1.6435-9/38674327_2095627037178554_3408890189643251712_n.jpg?_nc_cat=100&ccb=1-7&_nc_sid=09cbfe&_nc_ohc=72Mmp1_Itr4AX9Xhlyu&_nc_oc=AQng4XuCsuRxfcqdupo3o1_rigR2Ydo6j6it0JcN0EzRuAA7VzdVC5pKps-Y3x-JLPYh33R-UjVGXHXwBj8-WpaC&_nc_ht=scontent-lax3-2.xx&oh=00_AfC0XxnZKs0Tds9kH0YCZ6cvrFP8o3V0T6Kj6NxIUo4vRg&oe=63B48F3F",
        website_url="https://worldwidefm.net/",
        chat_url="http://worldwidefm.chatango.com/",
        now_playing_url="",
        calendar_url="",
        additional_link_1="",
        additional_label_1="",
        additional_link_2="",
        additional_label_2="",
        additional_link_3="",
        additional_label_3="",
    )
    balamii = RadioStation(
        name='Balamii',
        admin_id=2,
        stream_url="https://balamii.out.airtime.pro/balamii_a",
        image_url="https://cdn-radiotime-logos.tunein.com/s262611d.png",
        website_url="https://www.balamii.com",
        chat_url="https://www.balamii.com/player",
        now_playing_url="https://balamii.airtime.pro/api/live-info",
        calendar_url="",
        additional_link_1="",
        additional_label_1="",
        additional_link_2="",
        additional_label_2="",
        additional_link_3="",
        additional_label_3="",
    )
    dublab = RadioStation(
        name='dublab',
        admin_id=2,
        stream_url="https://dublab.out.airtime.pro/dublab_a",
        image_url="https://cdn-profiles.tunein.com/s17176/images/logog.png?t=156260",
        website_url="https://www.dublab.com/",
        chat_url="",
        now_playing_url="https://api-1.dublab.com/wp-json/lazystate/v1/stream?",
        calendar_url="",
        additional_link_1="",
        additional_label_1="",
        additional_link_2="",
        additional_label_2="",
        additional_link_3="",
        additional_label_3="",
    )
    netil = RadioStation(
        name='Netil Radio',
        admin_id=2,
        stream_url="https://netilradio.out.airtime.pro/netilradio_a",
        image_url="https://cdn-profiles.tunein.com/s284683/images/logog.png?t=157654",
        website_url="https://www.netilradio.com/",
        chat_url="http://netil-radio.chatango.com/",
        now_playing_url="https://netilradio.airtime.pro/api/live-info",
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
    db.session.add(worldwide)
    db.session.add(balamii)
    db.session.add(dublab)
    db.session.add(netil)
    db.session.add(rinse)

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
