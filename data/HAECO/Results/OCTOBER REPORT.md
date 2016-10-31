# Aircraft Monitoring Report : SEPTEMBER - OCTOBER 2016

This report provides a summary of preventive monitorings that triggerred in SEPTEMBER and OCTOBER and the results of maintenance actions performed further to alerts triggerred.
  

![Alt text](img/FLEET_MATRIX_OCT_SEP_2016.png?raw=true "WILCO monitorings that triggerred in OCT 2016 are shown in red")

### &#x2B55; &nbsp; 10 RED PREVENTIVE ALERTS were triggered by WILCO in September and October 2016, see red cells above in table
    1 x BLEED LEAK ALERT:     detects bleed leaks based on pressure difference between left and right PRV
    1 x FAN AIR VLV ALERT:    detects abnormal opening of Fan Air Valve during flight
    3 x A.ICE  VLV ALERTS:    detects abnormal positions of anti ice valves during cruise
    3 x ENG OIL TEMP ALERTS:  detects abnormal values of engine oil temperature or sensor fault
    1 x ENG OIL QTY ALERT:    detects abnormal values of engine oil quantities or sensor fault
    1 x VERTICAL ACCEL ALERT: detects abnormal levels of vertical acceleration or 3-axe sensor faults

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








<p>&nbsp; </p>
## BLEED LEAK Maintenance Actions & Results

&#x2B55; &nbsp; B-LDA  &nbsp; &nbsp; &nbsp; &nbsp; &#x1F477;  &nbsp; CONFIRMED BY MAINTENANCE &nbsp; &#x231B; &nbsp; PENDING</br>
#### `M420` BLEED leak confirmed by Maintenance at PACK turbine cooling level (minor leak) 
![Alt text](img/BLEED_LEAK.png?raw=true "WILCO Dashboard on BLEED system indentifying a BLEED LEAK probably located at PACK level.")


#### However BLEED LEAK seems to continue even after maintenance action ([A] on plot below). More investigation may be needed.

![Alt text](img/BLEED_LEAK_TRENDS.png?raw=true "WILCO Trends related to PRV pressure values identifying a constant offset between left and right pressure values")







<p>&nbsp; </p>
## FAN AIR VLV Maintenance Actions & Results

&#x2B55; &nbsp; B-LDB  &nbsp; &nbsp; &nbsp; &nbsp; &#x1F477;  &nbsp; CONFIRMED BY MAINTENANCE &nbsp; &#x2705;  &nbsp; ALERT FIXED</br>
#### `A302` No spring back function confirmed by Maintenance on Engine 2 FAN AIR VALVE, VALVE REPLACED
![Alt text](img/FAV_STUCK.png?raw=true "WILCO Dashboard on BLEED system indentifying a FAN AIR VALVE abnormally stuck open in flight conditions.")


#### Trends confirm ALERT dissappeared after maintenance action, see plot below.

![Alt text](img/FAV_TRENDS.png?raw=true "WILCO trends on PRE-COOLER teemperature confirming abnormaly low values dissappeared after FAV replacement.")








<p>&nbsp; </p>
## A.ICE VLV FAULTS Maintenance Actions & Results### A.ICE VLV ALERT
&#x2B55; &nbsp; B-LDB, B-LDD, B-LDF &nbsp; &nbsp; &nbsp; &nbsp;  &nbsp; &nbsp; &#x1F477;  &nbsp; CONFIRMED BY MAINTENANCE &nbsp; &#x231B; &nbsp; PENDING: Anti-Ice Valve under sourcing</br>
#### `M481`ANTI ICE VALVE MONITORING may be linked to micro switch issue on valve : the valve may be nearly in CLOSED position although the micro switch 'fully closed' is not set.

![Alt text](img/AICE_VLV_STUCK.png?raw=true "WILCO Dashboard on BLEED system indentifying a difference in position between left and right engine anti-ice valves")








<p>&nbsp; </p>
## ENG OIL TEMP ALERTS Maintenance Actions & Results
&#x2B55; &nbsp; B-LDB, B-LDE  &nbsp; &#x1F477;  &nbsp; CONFIRMED BY MAINTENANCE &nbsp; &#x2705;  &nbsp; ALERT FIXED</br>
&#x2B55; &nbsp; B-LDD  &nbsp; &nbsp;  &nbsp; &nbsp; &nbsp; &nbsp; &nbsp;  &#x1F477;  &nbsp; CONFIRMED BY MAINTENANCE &nbsp; &#x231B;  &nbsp; PENDING</br>

![Alt text](img/ENG_OIL_TEMP_TRENDS.png?raw=true "WILCO Trends on ENGINE OIL system indentifying abnormal values of oil temperature sensore on Engine 1")
#### &#x2705;  &nbsp; ALERT FIXED:</br>  `M451` Cleaning Engine oil connector fixes the issue






<p>&nbsp; </p>
## ENG OIL QTY ALERT Maintenance Actions & Results

&#x2B55; &nbsp; B-LDC &nbsp; &#x1F477;  &nbsp; CONFIRMED BY MAINTENANCE &nbsp; &#x2705;  &nbsp; ALERT FIXED</br>

![Alt text](img/ENG_OIL_QTY_TRENDS.png?raw=true "WILCO Trends on ENGINE OIL system indentifying abnormal values of soil quantity ensor on Engine 2")
#### &#x2705;  &nbsp; ALERT FIXED:</br>  `S620` OIL PX & QTY DUAL INDICATOR replacement fixes the issue







<p>&nbsp; </p>
## VERTICAL ACCEL ALERT Maintenance Actions & Results 
&#x2B55; &nbsp; B-LDD  &nbsp; &#x1F477;  &nbsp; CONFIRMED BY MAINTENANCE &nbsp; &#x2705;  &nbsp; ALERT FIXED</br>

![Alt text](img/GVER_TRENDS.png?raw=true "WILCO XY PLOT on GVERMAX and GVERMIN parameters indentifying a probable accelerometer failure")

#### &#x2705;  &nbsp; ALERT FIXED:</br> `A072` `A075` `A077` `M453` 17-Oct - ACARS VERTICAL G PRINT OUT INACCURATE. THREE - AXIS ACCELEROMETER 6TLS REPLACED. ACARS LOAD REPORT G-VER, G-LAT, G-LON. PARAMETER VALVE WITHIN SPECIFIC LIMIT.
