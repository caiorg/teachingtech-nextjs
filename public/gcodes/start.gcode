; G-Code originally generated by Simplify3D(R) Version 4.1.2
; This calibration test gcode modified by the Teaching Tech Calibration website: https://teachingtechyt.github.io/calibration.html
;M80 ; power supply on
G90
M82
M106 S0
;bed0a
;bed0b
;temp0a
G28 ; home all axes
;G29 ; probe ABL
;M420 S1 ; restore ABL mesh
;temp0b
;customstart
G0 Z3; fix for delta printers that home at max`;