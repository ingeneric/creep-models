data=`{
	"model": "Manson-Haferd",
	"material": "dmv 347",
	"logta": 27.8113679,
	"Ta": 0.6952841976,
	"stressRange": {
		"min": 65,
		"max": 215
	},
	"temperatureRange": {
		"min": 600,
		"max": 690
	},
	"masterCurve": {
		"coefficients": [0.05515300386,-0.1445369839,0.1024309944,-0.03243004268,0.003680107199],
		"trainData": {
			"stress": [215,197,182,168,155,142,130,119,108,99,159,145,134,120,109,100,90,81,72,65],
			"p": [-0.02729238259,-0.0269831046,-0.02668075755,-0.02638511105,-0.0260959448,-0.02581304805,-0.02553621907,-0.02526526474,-0.025,-0.02474024752,-0.0261461913,-0.02584990197,-0.02556025252,-0.02527702221,-0.025,-0.02472898399,-0.02446378093,-0.0242042058,-0.02395008132,-0.0237012376]
		},
		"testData": {
			"stress": [65,66.51515152,68.03030303,69.54545455,71.06060606,72.57575758,74.09090909,75.60606061,77.12121212,78.63636364,80.15151515,81.66666667,83.18181818,84.6969697,86.21212121,87.72727273,89.24242424,90.75757576,92.27272727,93.78787879,95.3030303,96.81818182,98.33333333,99.84848485,101.3636364,102.8787879,104.3939394,105.9090909,107.4242424,108.9393939,110.4545455,111.969697,113.4848485,115,116.5151515,118.030303,119.5454545,121.0606061,122.5757576,124.0909091,125.6060606,127.1212121,128.6363636,130.1515152,131.6666667,133.1818182,134.6969697,136.2121212,137.7272727,139.2424242,140.7575758,142.2727273,143.7878788,145.3030303,146.8181818,148.3333333,149.8484848,151.3636364,152.8787879,154.3939394,155.9090909,157.4242424,158.9393939,160.4545455,161.969697,163.4848485,165,166.5151515,168.030303,169.5454545,171.0606061,172.5757576,174.0909091,175.6060606,177.1212121,178.6363636,180.1515152,181.6666667,183.1818182,184.6969697,186.2121212,187.7272727,189.2424242,190.7575758,192.2727273,193.7878788,195.3030303,196.8181818,198.3333333,199.8484848,201.3636364,202.8787879,204.3939394,205.9090909,207.4242424,208.9393939,210.4545455,211.969697,213.4848485,215],
			"p": [-0.02370364496,-0.02375571113,-0.02380690356,-0.02385728424,-0.02390690882,-0.0239558273,-0.02400408476,-0.02405172186,-0.02409877539,-0.02414527867,-0.02419126194,-0.0242367527,-0.02428177598,-0.02432635461,-0.02437050948,-0.02441425968,-0.0244576227,-0.02450061463,-0.02454325024,-0.02458554313,-0.02462750586,-0.02466915002,-0.02471048633,-0.02475152472,-0.02479227441,-0.02483274396,-0.02487294135,-0.02491287398,-0.0249525488,-0.02499197227,-0.02503115046,-0.02507008904,-0.02510879333,-0.02514726836,-0.02518551882,-0.02522354917,-0.02526136359,-0.02529896604,-0.02533636027,-0.02537354984,-0.02541053812,-0.0254473283,-0.02548392344,-0.02552032644,-0.02555654006,-0.02559256695,-0.02562840964,-0.02566407056,-0.02569955201,-0.02573485624,-0.02576998537,-0.02580494147,-0.02583972653,-0.02587434244,-0.02590879107,-0.02594307419,-0.02597719352,-0.02601115074,-0.02604494746,-0.02607858525,-0.02611206564,-0.0261453901,-0.02617856007,-0.02621157695,-0.02624444212,-0.02627715689,-0.02630972257,-0.02634214042,-0.02637441168,-0.02640653756,-0.02643851925,-0.02647035789,-0.02650205464,-0.02653361059,-0.02656502684,-0.02659630445,-0.02662744448,-0.02665844796,-0.0266893159,-0.02672004929,-0.02675064911,-0.02678111633,-0.02681145189,-0.02684165673,-0.02687173175,-0.02690167788,-0.02693149599,-0.02696118696,-0.02699075167,-0.02702019096,-0.02704950568,-0.02707869667,-0.02710776473,-0.02713671068,-0.02716553532,-0.02719423944,-0.02722282382,-0.02725128924,-0.02727963645,-0.02730786621]
		}
	},
	"isoStressData": {
		"tr": [
			[10000,100000],
			[10000,100000],
			[10000,100000]
		],
		"stress": [119.5,108.5,99.5],
		"T": [
			[670,630],
			[680,640],
			[690,650]
		],
		"tolerance": 1
	},
	"isoStressFit": {
		"T": [
			[670,630],
			[680,640],
			[690,650]
		],
		"tr": [
			[9999.999997,100000],
			[10000,99999.99998],
			[9999.999996,100000]
		],
		"m": [
			[-0.02500000001],
			[-0.025],
			[-0.02500000001]
		],
		"c": [
			[27.57875001],
			[27.82875],
			[28.07875001]
		],
		"stress": [119.5,108.5,99.5]
	},
	"stressTest": {
		"stressActual": [
			[215,159],
			[197,145],
			[182,134],
			[168,120],
			[155,109],
			[142,100],
			[130,90],
			[119,81],
			[108,72],
			[99,65]
		],
		"stressPredicted": [
			[214.1681831,157.4607573],
			[197.9408124,144.232498],
			[182.7610677,131.8224381],
			[168.5341589,120.1753741],
			[155.1786592,109.2490892],
			[142.6251678,99.01493331],
			[130.8154828,89.45866951],
			[119.7022538,80.58100537],
			[109.2490892,72.39669479],
			[99.4310492,64.93058576]
		],
		"tr": [10000,100000],
		"T": [600,610,620,630,640,650,660,670,680,690],
		"errors": {
			"Err": [
				[-0.8318169454,-1.539242655],
				[0.9408124324,-0.7675019667],
				[0.7610677426,-2.177561942],
				[0.5341588911,0.1753740849],
				[0.1786591564,0.2490891834],
				[0.6251678406,-0.9850666856],
				[0.8154828217,-0.54133049],
				[0.7022537841,-0.4189946268],
				[1.249089177,0.3966947863],
				[0.4310491987,-0.06941424057]
			],
			"Abs": [
				[0.8318169454,1.539242655],
				[0.9408124324,0.7675019667],
				[0.7610677426,2.177561942],
				[0.5341588911,0.1753740849],
				[0.1786591564,0.2490891834],
				[0.6251678406,0.9850666856],
				[0.8154828217,0.54133049],
				[0.7022537841,0.4189946268],
				[1.249089177,0.3966947863],
				[0.4310491987,0.06941424057]
			],
			"Percentage": [
				[-0.3868916025,-0.9680771416],
				[0.4775697626,-0.5293117012],
				[0.4181690893,-1.625046225],
				[0.3179517209,0.1461450707],
				[0.1152639719,0.2285221866],
				[0.4402590427,-0.9850666856],
				[0.6272944782,-0.6014783222],
				[0.5901292304,-0.5172773171],
				[1.156564053,0.550964981],
				[0.435403231,-0.1067911393]
			],
			"Average": -0.01360152262,
			"AverageAbs": 0.7194914326,
			"AveragePercentage": -0.01078516581,
			"AverageAbsPercentage": 0.5612088477,
			"Min": -2.177561942,
			"Max": 1.249089177,
			"MinAbs": 0.06941424057,
			"MaxAbs": 2.177561942,
			"minPercentage": -1.625046225,
			"maxPercentage": 1.156564053,
			"minAbsPercentage": 0.1067911393,
			"maxAbsPercentage": 1.625046225,
			"MSE": 0.7581296198,
			"R": 0.9995306426
		}
	},
	"trTest": {
		"T": [600,610,620,630,640,650,660,670,680,690,600,610,620,630,640,650,660,670,680,690],
		"stress": [215,197,182,168,155,142,130,119,108,99,159,145,134,120,109,100,90,81,72,65],
		"trActual": [10000,10000,10000,10000,10000,10000,10000,10000,10000,10000,100000,100000,100000,100000,100000,100000,100000,100000,100000,100000],
		"trPredicted": [9693.737233,10380.17579,10323.79427,10238.51278,10083.30518,10310.2792,10428.10968,10386.83589,10737.38672,10261.95434,93455.51349,96500.58041,89922.22547,100909.2366,101365.6351,94500.99384,96751.09625,97304.85465,102838.5685,99467.91723],
		"errors": {
			"Err": [-306.2627667,380.1757858,323.794271,238.5127787,83.30517771,310.279202,428.1096844,386.8358916,737.3867153,261.9543373,-6544.486509,-3499.419589,-10077.77453,909.2365701,1365.635118,-5499.006156,-3248.903747,-2695.145346,2838.568499,-532.0827738],
			"Abs": [
				[306.2627667],
				[380.1757858],
				[323.794271],
				[238.5127787],
				[83.30517771],
				[310.279202],
				[428.1096844],
				[386.8358916],
				[737.3867153],
				[261.9543373],
				[6544.486509],
				[3499.419589],
				[10077.77453],
				[909.2365701],
				[1365.635118],
				[5499.006156],
				[3248.903747],
				[2695.145346],
				[2838.568499],
				[532.0827738]
			],
			"Percentage": [-3.062627667,3.801757858,3.23794271,2.385127787,0.8330517771,3.10279202,4.281096844,3.868358916,7.373867153,2.619543373,-6.544486509,-3.499419589,-10.07777453,0.9092365701,1.365635118,-5.499006156,-3.248903747,-2.695145346,2.838568499,-0.5320827738],
			"Average": -1206.96437,
			"AverageAbs": 2033.343773,
			"AveragePercentage": 0.07287661525,
			"AverageAbsPercentage": 3.588821247,
			"Min": -10077.77453,
			"Max": 2838.568499,
			"MinAbs": 83.30517771,
			"MaxAbs": 10077.77453,
			"minPercentage": -10.07777453,
			"maxPercentage": 7.373867153,
			"minAbsPercentage": 0.5320827738,
			"maxAbsPercentage": 10.07777453,
			"MSE": 10858842.03,
			"R": 0.9946376089
		}
	},
	"constT": {
		"T": 645,
		"stress": [10,11.20603015,12.4120603,13.61809045,14.8241206,16.03015075,17.2361809,18.44221106,19.64824121,20.85427136,22.06030151,23.26633166,24.47236181,25.67839196,26.88442211,28.09045226,29.29648241,30.50251256,31.70854271,32.91457286,34.12060302,35.32663317,36.53266332,37.73869347,38.94472362,40.15075377,41.35678392,42.56281407,43.76884422,44.97487437,46.18090452,47.38693467,48.59296482,49.79899497,51.00502513,52.21105528,53.41708543,54.62311558,55.82914573,57.03517588,58.24120603,59.44723618,60.65326633,61.85929648,63.06532663,64.27135678,65.47738693,66.68341709,67.88944724,69.09547739,70.30150754,71.50753769,72.71356784,73.91959799,75.12562814,76.33165829,77.53768844,78.74371859,79.94974874,81.15577889,82.36180905,83.5678392,84.77386935,85.9798995,87.18592965,88.3919598,89.59798995,90.8040201,92.01005025,93.2160804,94.42211055,95.6281407,96.83417085,98.04020101,99.24623116,100.4522613,101.6582915,102.8643216,104.0703518,105.2763819,106.4824121,107.6884422,108.8944724,110.1005025,111.3065327,112.5125628,113.718593,114.9246231,116.1306533,117.3366834,118.5427136,119.7487437,120.9547739,122.160804,123.3668342,124.5728643,125.7788945,126.9849246,128.1909548,129.3969849,130.6030151,131.8090452,133.0150754,134.2211055,135.4271357,136.6331658,137.839196,139.0452261,140.2512563,141.4572864,142.6633166,143.8693467,145.0753769,146.281407,147.4874372,148.6934673,149.8994975,151.1055276,152.3115578,153.5175879,154.7236181,155.9296482,157.1356784,158.3417085,159.5477387,160.7537688,161.959799,163.1658291,164.3718593,165.5778894,166.7839196,167.9899497,169.1959799,170.4020101,171.6080402,172.8140704,174.0201005,175.2261307,176.4321608,177.638191,178.8442211,180.0502513,181.2562814,182.4623116,183.6683417,184.8743719,186.080402,187.2864322,188.4924623,189.6984925,190.9045226,192.1105528,193.3165829,194.5226131,195.7286432,196.9346734,198.1407035,199.3467337,200.5527638,201.758794,202.9648241,204.1708543,205.3768844,206.5829146,207.7889447,208.9949749,210.201005,211.4070352,212.6130653,213.8190955,215.0251256,216.2311558,217.4371859,218.6432161,219.8492462,221.0552764,222.2613065,223.4673367,224.6733668,225.879397,227.0854271,228.2914573,229.4974874,230.7035176,231.9095477,233.1155779,234.321608,235.5276382,236.7336683,237.9396985,239.1457286,240.3517588,241.5577889,242.7638191,243.9698492,245.1758794,246.3819095,247.5879397,248.7939698,250],
		"tr": [
			[4.941988954e+17],
			[1.063325684e+17],
			[3.119686389e+16],
			[1.149255544e+16],
			[5.025575923e+15],
			[2.507597925e+15],
			[1.387503011e+15],
			[8.335840197e+14],
			[5.351759193e+14],
			[3.627268651e+14],
			[2.570857106e+14],
			[1.891219689e+14],
			[1.435422266e+14],
			[1.118667895e+14],
			[8.916727962e+13],
			[7.245966611e+13],
			[5.987123896e+13],
			[5.018898838e+13],
			[4.260486989e+13],
			[3.6566972e+13],
			[3.168977691e+13],
			[2.769849818e+13],
			[2.439366124e+13],
			[2.162803637e+13],
			[1.92912958e+13],
			[1.729960966e+13],
			[1.558846502e+13],
			[1.410762846e+13],
			[1.281755856e+13],
			[1.168681562e+13],
			[1.069016692e+13],
			[9.80718419e+12],
			[9.021193784e+12],
			[8.318482616e+12],
			[7.687691677e+12],
			[7.11934858e+12],
			[6.605504161e+12],
			[6.139447686e+12],
			[5.715481952e+12],
			[5.328744416e+12],
			[4.975063954e+12],
			[4.650845427e+12],
			[4.35297607e+12],
			[4.07874915e+12],
			[3.825801363e+12],
			[3.592061215e+12],
			[3.375706266e+12],
			[3.175127527e+12],
			[2.988899689e+12],
			[2.815756113e+12],
			[2.654567735e+12],
			[2.5043252e+12],
			[2.364123672e+12],
			[2.233149867e+12],
			[2.110670957e+12],
			[1.99602502e+12],
			[1.888612817e+12],
			[1.787890673e+12],
			[1.693364298e+12],
			[1.60458341e+12],
			[1.521137047e+12],
			[1.442649452e+12],
			[1.368776468e+12],
			[1.299202367e+12],
			[1.233637048e+12],
			[1.171813556e+12],
			[1.113485893e+12],
			[1.058427057e+12],
			[1.006427312e+12],
			[9.572926284e+11],
			[9.108433005e+11],
			[8.669126981e+11],
			[8.253461499e+11],
			[7.859999376e+11],
			[7.487403892e+11],
			[7.134430593e+11],
			[6.799919886e+11],
			[6.482790317e+11],
			[6.182032479e+11],
			[5.896703466e+11],
			[5.625921827e+11],
			[5.36886296e+11],
			[5.124754913e+11],
			[4.892874534e+11],
			[4.672543959e+11],
			[4.463127377e+11],
			[4.26402807e+11],
			[4.074685691e+11],
			[3.894573759e+11],
			[3.723197347e+11],
			[3.560090956e+11],
			[3.404816551e+11],
			[3.256961742e+11],
			[3.116138108e+11],
			[2.981979637e+11],
			[2.854141293e+11],
			[2.73229767e+11],
			[2.61614176e+11],
			[2.505383793e+11],
			[2.399750172e+11],
			[2.298982474e+11],
			[2.202836517e+11],
			[2.111081503e+11],
			[2.023499206e+11],
			[1.939883223e+11],
			[1.860038267e+11],
			[1.783779516e+11],
			[1.710931996e+11],
			[1.64133001e+11],
			[1.574816598e+11],
			[1.511243039e+11],
			[1.450468375e+11],
			[1.392358973e+11],
			[1.336788111e+11],
			[1.283635588e+11],
			[1.232787362e+11],
			[1.184135206e+11],
			[1.137576388e+11],
			[1.093013368e+11],
			[1.050353516e+11],
			[1.009508841e+11],
			[9.70395743e+10],
			[9.329347769e+10],
			[8.970504273e+10],
			[8.626709002e+10],
			[8.297279254e+10],
			[7.981565696e+10],
			[7.678950614e+10],
			[7.388846252e+10],
			[7.11069325e+10],
			[6.843959168e+10],
			[6.588137096e+10],
			[6.342744337e+10],
			[6.107321163e+10],
			[5.881429647e+10],
			[5.664652548e+10],
			[5.456592264e+10],
			[5.256869843e+10],
			[5.065124043e+10],
			[4.881010444e+10],
			[4.704200611e+10],
			[4.534381296e+10],
			[4.371253689e+10],
			[4.214532703e+10],
			[4.0639463e+10],
			[3.919234851e+10],
			[3.780150533e+10],
			[3.64645675e+10],
			[3.517927593e+10],
			[3.394347319e+10],
			[3.275509867e+10],
			[3.161218391e+10],
			[3.051284817e+10],
			[2.945529429e+10],
			[2.843780469e+10],
			[2.745873762e+10],
			[2.651652357e+10],
			[2.560966189e+10],
			[2.473671754e+10],
			[2.389631804e+10],
			[2.308715055e+10],
			[2.23079591e+10],
			[2.155754197e+10],
			[2.083474916e+10],
			[2.013848005e+10],
			[1.94676811e+10],
			[1.882134372e+10],
			[1.81985022e+10],
			[1.759823181e+10],
			[1.701964688e+10],
			[1.646189909e+10],
			[1.592417575e+10],
			[1.540569822e+10],
			[1.49057204e+10],
			[1.442352725e+10],
			[1.395843342e+10],
			[1.350978195e+10],
			[1.307694298e+10],
			[1.26593126e+10],
			[1.225631164e+10],
			[1.186738469e+10],
			[1.149199895e+10],
			[1.112964333e+10],
			[1.077982746e+10],
			[1.04420808e+10],
			[1.011595181e+10],
			[9801007074],
			[9496830598],
			[9203023001],
			[8919200833],
			[8644995891],
			[8380054572],
			[8124037257],
			[7876617714],
			[7637482540],
			[7406330620],
			[7182872611],
			[6966830455],
			[6757936901],
			[6555935063]
		]
	},
	"constStress": {
		"stress": 129.5,
		"T": [
			[400],
			[401.758794],
			[403.5175879],
			[405.2763819],
			[407.0351759],
			[408.7939698],
			[410.5527638],
			[412.3115578],
			[414.0703518],
			[415.8291457],
			[417.5879397],
			[419.3467337],
			[421.1055276],
			[422.8643216],
			[424.6231156],
			[426.3819095],
			[428.1407035],
			[429.8994975],
			[431.6582915],
			[433.4170854],
			[435.1758794],
			[436.9346734],
			[438.6934673],
			[440.4522613],
			[442.2110553],
			[443.9698492],
			[445.7286432],
			[447.4874372],
			[449.2462312],
			[451.0050251],
			[452.7638191],
			[454.5226131],
			[456.281407],
			[458.040201],
			[459.798995],
			[461.5577889],
			[463.3165829],
			[465.0753769],
			[466.8341709],
			[468.5929648],
			[470.3517588],
			[472.1105528],
			[473.8693467],
			[475.6281407],
			[477.3869347],
			[479.1457286],
			[480.9045226],
			[482.6633166],
			[484.4221106],
			[486.1809045],
			[487.9396985],
			[489.6984925],
			[491.4572864],
			[493.2160804],
			[494.9748744],
			[496.7336683],
			[498.4924623],
			[500.2512563],
			[502.0100503],
			[503.7688442],
			[505.5276382],
			[507.2864322],
			[509.0452261],
			[510.8040201],
			[512.5628141],
			[514.321608],
			[516.080402],
			[517.839196],
			[519.5979899],
			[521.3567839],
			[523.1155779],
			[524.8743719],
			[526.6331658],
			[528.3919598],
			[530.1507538],
			[531.9095477],
			[533.6683417],
			[535.4271357],
			[537.1859296],
			[538.9447236],
			[540.7035176],
			[542.4623116],
			[544.2211055],
			[545.9798995],
			[547.7386935],
			[549.4974874],
			[551.2562814],
			[553.0150754],
			[554.7738693],
			[556.5326633],
			[558.2914573],
			[560.0502513],
			[561.8090452],
			[563.5678392],
			[565.3266332],
			[567.0854271],
			[568.8442211],
			[570.6030151],
			[572.361809],
			[574.120603],
			[575.879397],
			[577.638191],
			[579.3969849],
			[581.1557789],
			[582.9145729],
			[584.6733668],
			[586.4321608],
			[588.1909548],
			[589.9497487],
			[591.7085427],
			[593.4673367],
			[595.2261307],
			[596.9849246],
			[598.7437186],
			[600.5025126],
			[602.2613065],
			[604.0201005],
			[605.7788945],
			[607.5376884],
			[609.2964824],
			[611.0552764],
			[612.8140704],
			[614.5728643],
			[616.3316583],
			[618.0904523],
			[619.8492462],
			[621.6080402],
			[623.3668342],
			[625.1256281],
			[626.8844221],
			[628.6432161],
			[630.4020101],
			[632.160804],
			[633.919598],
			[635.678392],
			[637.4371859],
			[639.1959799],
			[640.9547739],
			[642.7135678],
			[644.4723618],
			[646.2311558],
			[647.9899497],
			[649.7487437],
			[651.5075377],
			[653.2663317],
			[655.0251256],
			[656.7839196],
			[658.5427136],
			[660.3015075],
			[662.0603015],
			[663.8190955],
			[665.5778894],
			[667.3366834],
			[669.0954774],
			[670.8542714],
			[672.6130653],
			[674.3718593],
			[676.1306533],
			[677.8894472],
			[679.6482412],
			[681.4070352],
			[683.1658291],
			[684.9246231],
			[686.6834171],
			[688.4422111],
			[690.201005],
			[691.959799],
			[693.718593],
			[695.4773869],
			[697.2361809],
			[698.9949749],
			[700.7537688],
			[702.5125628],
			[704.2713568],
			[706.0301508],
			[707.7889447],
			[709.5477387],
			[711.3065327],
			[713.0653266],
			[714.8241206],
			[716.5829146],
			[718.3417085],
			[720.1005025],
			[721.8592965],
			[723.6180905],
			[725.3768844],
			[727.1356784],
			[728.8944724],
			[730.6532663],
			[732.4120603],
			[734.1708543],
			[735.9296482],
			[737.6884422],
			[739.4472362],
			[741.2060302],
			[742.9648241],
			[744.7236181],
			[746.4824121],
			[748.241206],
			[750]
		],
		"tr": [
			[4.238598742e+17],
			[3.82265231e+17],
			[3.447523951e+17],
			[3.109208066e+17],
			[2.804092134e+17],
			[2.528918147e+17],
			[2.280747809e+17],
			[2.056931173e+17],
			[1.855078335e+17],
			[1.673033923e+17],
			[1.508854077e+17],
			[1.360785692e+17],
			[1.227247702e+17],
			[1.106814197e+17],
			[9.98199194e+16],
			[9.002429074e+16],
			[8.118993655e+16],
			[7.322252409e+16],
			[6.603697775e+16],
			[5.955657067e+16],
			[5.371210542e+16],
			[4.84411751e+16],
			[4.368749701e+16],
			[3.940031164e+16],
			[3.553384066e+16],
			[3.204679809e+16],
			[2.890194949e+16],
			[2.606571433e+16],
			[2.350780745e+16],
			[2.120091566e+16],
			[1.912040609e+16],
			[1.724406318e+16],
			[1.555185144e+16],
			[1.402570153e+16],
			[1.264931729e+16],
			[1.140800177e+16],
			[1.028850027e+16],
			[9.27885882e+15],
			[8.36829652e+15],
			[7.547090434e+15],
			[6.80647177e+15],
			[6.138532241e+15],
			[5.536139625e+15],
			[4.992861606e+15],
			[4.502897092e+15],
			[4.061014269e+15],
			[3.662494735e+15],
			[3.30308312e+15],
			[2.978941647e+15],
			[2.686609151e+15],
			[2.422964121e+15],
			[2.185191371e+15],
			[1.970751975e+15],
			[1.777356161e+15],
			[1.60293886e+15],
			[1.445637652e+15],
			[1.303772885e+15],
			[1.175829734e+15],
			[1.060442029e+15],
			[9.563776655e+14],
			[8.625254511e+14],
			[7.778832365e+14],
			[7.015472169e+14],
			[6.327022802e+14],
			[5.706133041e+14],
			[5.146173058e+14],
			[4.641163631e+14],
			[4.185712296e+14],
			[3.77495577e+14],
			[3.404508016e+14],
			[3.070413413e+14],
			[2.769104518e+14],
			[2.49736397e+14],
			[2.252290138e+14],
			[2.031266139e+14],
			[1.831931888e+14],
			[1.652158907e+14],
			[1.490027588e+14],
			[1.343806703e+14],
			[1.211934913e+14],
			[1.093004098e+14],
			[9.857443213e+13],
			[8.890102687e+13],
			[8.017690194e+13],
			[7.230890161e+13],
			[6.521301179e+13],
			[5.881346297e+13],
			[5.304192111e+13],
			[4.783675799e+13],
			[4.314239317e+13],
			[3.890870048e+13],
			[3.509047277e+13],
			[3.164693923e+13],
			[2.854132998e+13],
			[2.57404835e+13],
			[2.32144925e+13],
			[2.093638458e+13],
			[1.888183425e+13],
			[1.702890311e+13],
			[1.535780567e+13],
			[1.385069805e+13],
			[1.249148743e+13],
			[1.126566023e+13],
			[1.016012713e+13],
			[9.163083325e+12],
			[8.263882422e+12],
			[7.452922806e+12],
			[6.721545093e+12],
			[6.061939674e+12],
			[5.467063317e+12],
			[4.930563964e+12],
			[4.446712905e+12],
			[4.010343605e+12],
			[3.616796535e+12],
			[3.261869422e+12],
			[2.941772373e+12],
			[2.65308741e+12],
			[2.392731969e+12],
			[2.157925991e+12],
			[1.946162228e+12],
			[1.75517948e+12],
			[1.582938443e+12],
			[1.427599937e+12],
			[1.287505265e+12],
			[1.161158504e+12],
			[1.047210531e+12],
			[9.444446142e+11],
			[8.51763426e+11],
			[7.681773213e+11],
			[6.927937723e+11],
			[6.248078375e+11],
			[5.634935667e+11],
			[5.081962496e+11],
			[4.583254244e+11],
			[4.133485732e+11],
			[3.727854355e+11],
			[3.362028805e+11],
			[3.032102815e+11],
			[2.734553454e+11],
			[2.466203505e+11],
			[2.224187544e+11],
			[2.005921336e+11],
			[1.809074247e+11],
			[1.631544355e+11],
			[1.471436004e+11],
			[1.327039567e+11],
			[1.196813187e+11],
			[1.079366312e+11],
			[9.734448522e+10],
			[8.779177835e+10],
			[7.917650731e+10],
			[7.140667871e+10],
			[6.439932674e+10],
			[5.807962728e+10],
			[5.238009891e+10],
			[4.72398824e+10],
			[4.260409077e+10],
			[3.842322331e+10],
			[3.465263694e+10],
			[3.125206954e+10],
			[2.818521004e+10],
			[2.541931068e+10],
			[2.292483733e+10],
			[2.067515415e+10],
			[1.864623914e+10],
			[1.681642766e+10],
			[1.516618108e+10],
			[1.367787815e+10],
			[1.233562687e+10],
			[1.112509473e+10],
			[1.003335575e+10],
			[9048752400],
			[8160771134],
			[7359930139],
			[6637678076],
			[5986302779],
			[5398848898],
			[4869043631],
			[4391229747],
			[3960305176],
			[3571668528],
			[3221169962],
			[2905066873],
			[2619983931],
			[2362877034],
			[2131000810],
			[1921879296],
			[1733279506],
			[1563187579],
			[1409787284],
			[1271440621],
			[1146670332],
			[1034144127],
			[932660455.7],
			[841135682.4],
			[758592510.1],
			[684149547.4],
			[617011896.4],
			[556462664.8],
			[501855311.2]
		]
	}
}
`;