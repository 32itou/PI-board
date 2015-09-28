#!/usr/bin/env bash

rrdtool create local.rrd \
--step 600 \
DS:intemps:GAUGE:1800:-10:50 \
