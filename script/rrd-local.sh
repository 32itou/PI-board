#!/usr/bin/env bash

rrdtool create /home/pi/database/local.rrd \
--step 600 \
DS:intemps:GAUGE:1800:-10:50 \
