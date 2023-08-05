{REPLACE "; process" ";process"}
{REPLACE "; layer" ";layer"}
{STRIP "; "}
{STRIP "M82"}
{STRIP "G90"}
{STRIP "M106 S0"}
{STRIP "M104"}
{STRIP "M109"}
{STRIP "M140"}
{STRIP "M190"}
{STRIP ";layer end"}
{REPLACE "G1 E-5.0000 F2400\n" ";retract1\n"}
{REPLACE "G1 E0.0000 F2400\n" ";unretract1\n"}
{REPLACE "G1 E-5.5000 F2460\n" ";retract2\n"}
{REPLACE "G1 E0.0000 F2460\n" ";unretract2\n"}
{REPLACE "G1 E-6.0000 F2520\n" ";retract3\n"}
{REPLACE "G1 E0.0000 F2520\n" ";unretract3\n"}
{REPLACE "G1 E-6.5000 F2580\n" ";retract4\n"}
{REPLACE "G1 E0.0000 F2580\n" ";unretract4\n"}
{REPLACE "G1 E-7.0000 F2640\n" ";retract5\n"}
{REPLACE "G1 E0.0000 F2640\n" ";unretract5\n"}
{REPLACE "G1 E-7.5000 F2700\n" ";retract6\n"}
{REPLACE "G1 E0.0000 F2700\n" ";unretract6\n"}