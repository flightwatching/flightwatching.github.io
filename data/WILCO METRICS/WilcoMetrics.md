# WILCO metrics

This document provides a list of metrics that can be used to measure the performance of FlightWatching's health monitoring platform "WILCO".

###Monitoring metrics
ATA Chapters covered by WILCO monitorings</br>
Number of alerts triggered by WILCO [(see Figure 2)](#fig2)</br>
Number of monitorings set up</br>
Number of aircraft monitored</br>
Number of users registered[(see Figure 3)](#fig2)</br>



[fig2]: img/FLEET_MATRIX.png "Alert metrics provided by WILCO through MATRIX dashboard" 
![Alt text][fig2] 
Figure 2 -  Number of alerts that triggered within a given period of time can be monitored with a MATRIX dashboard that can be configured by FlightWatching team

[fig3]: img/USERS_METRICS.png?raw=true "Metrics providing number of users and activiy"
![Alt text][fig3]
Figure 3 -  Number of users registered and corresponding activity.



<p>&nbsp; </p>
###MRO metrics
These metrics are generally provided by FlightWatching customers because they necessarily involve their organisations</br>
</br>
Number of alerts triggered by WILCO and confirmed on aircraft by maintenance</br>
Number of PIREPs (Pilot Reports) per ATA chapter </br>
Number of DELAYs per ATA chapter </br>
Number of AOGs per ATA chapter </br>
Number of NFFs per ATA chapter </br>

![Alt text](img/MIS_METRICS.png?raw=true "Metrics provided by MRO or Airline organisation")


<p>&nbsp; </p>
###Cloud service metrics
Uptime availability of FlightWatching server</br>
Memory usage of FlightWatching server</br>
Disk usage of FlightWatching server</br>

![Alt text](img/SERVER_METRICS.png?raw=true "WILCO monitorings that triggerred in OCT 2016 are shown in red")


<p>&nbsp; </p>

### &#x1F477;  &nbsp; All 10 Alerts were confirmed on aircraft by MAINTENANCE
`B-LDA` :  BLEED LEAK ALERT confirmed `M420`</br>
`B-LDB` :  FAN AIR VLV ALERT confirmed `A302`</br>
`B-LDB` `B-LDD` `B-LDF` : A.ICE  VLV ALERTS confirmed `M481`</br>
`B-LDB` `B-LDD` `B-LDE` : ENG OIL TEMP ALERTS confirmed `M451`</br>
`B-LDC` : ENG OIL QTY ALERT confirmed `S621`</br>
`B-LDD` : VERTICAL ACCEL ALERT confirmed `M453`</br>

### &#x2705; &nbsp; 5 Alerts were fixed further to maintenance action by the end of October.
Some alerts triggered only once during the last 30 days and are not considered.

    B-LDB FAN AIR VLV ALERT    : FIXED --> Engine 2 FAV replaced
    B-LDB ENG1 OIL TEMP ALERT  : FIXED --> Connector cleaned
    B-LDE ENG1 OIL TEMP ALERT  : FIXED --> Connector cleaned
    B-LDC ENG1 OIL QTY ALERT   : FIXED --> Sensor replaced
    B-LDD VERTICAL ACCEL ALERT : FIXED --> 3-Axis Accelerometer (6TLS) replaced





