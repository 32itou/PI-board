#!/usr/bin/env bash

rrdtool create /home/pi/database/light.rrd \
--step 60 \
DS:light:GAUGE:180:0:40000 \
RRA:AVERAGE:0.5:1:21600 \
RRA:AVERAGE:0.5:60:8640 \
RRA:MIN:0.5:1:21600 \
RRA:MIN:0.5:60:8640 \
RRA:MAX:0.5:1:21600 \
RRA:MAX:0.5:60:8640 \