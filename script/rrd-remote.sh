#!/usr/bin/env bash

rrdtool create remote.rrd \
--step 600 \
DS:outtemps:GAUGE:1800:-30:40 \
DS:outpressure:GAUGE:1800:900:1100 \
RRA:AVERAGE:0.5:1:1440 \
RRA:AVERAGE:0.5:6:8640 \
RRA:MIN:0.5:1:1440 \
RRA:MIN:0.5:6:8640 \
RRA:MAX:0.5:1:1440 \
RRA:MAX:0.5:6:8640 \