#!/usr/bin/env bash


for i in $(wget -O- -q http://data.geo.admin.ch.s3.amazonaws.com/ch.meteoschweiz.swissmetnet/VQHA69.txt); do
    echo $i
done


rrdtool update home/pi/database/light.rrd N:$light