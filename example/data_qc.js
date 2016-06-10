var base = [
{read_length_r1:140,ratio_2x:0.8489,read_length_r2:200,ratio_20x:0.7655,ratio_10x:0.7725,average_depth:65.7578,mean_insert_size:351.23,ratio_30x:0.6131,mapped_reads:33860998,total_reads:50340277,duplicate_reads:5297450,id:"SAMPLE1",},
{read_length_r1:245,ratio_2x:0.9129,read_length_r2:105,ratio_20x:0.8114,ratio_10x:0.8664,average_depth:79.2468,mean_insert_size:254.54,ratio_30x:0.7709,mapped_reads:42026268,total_reads:91491485,duplicate_reads:6677377,id:"SAMPLE10",},
{read_length_r1:125,ratio_2x:0.7441,read_length_r2:155,ratio_20x:0.7093,ratio_10x:0.7136,average_depth:60.4026,mean_insert_size:303.70,ratio_30x:0.5626,mapped_reads:56156227,total_reads:47526656,duplicate_reads:5588705,id:"SAMPLE6",},
{read_length_r1:185,ratio_2x:0.8244,read_length_r2:105,ratio_20x:0.7185,ratio_10x:0.8118,average_depth:61.4498,mean_insert_size:115.30,ratio_30x:0.5580,mapped_reads:52800804,total_reads:16262100,duplicate_reads:1617257,id:"SAMPLE27",},
{read_length_r1:120,ratio_2x:0.9047,read_length_r2:140,ratio_20x:0.7032,ratio_10x:0.8303,average_depth:70.9654,mean_insert_size:696.23,ratio_30x:0.6801,mapped_reads:89163960,total_reads:72885114,duplicate_reads:6726021,id:"SAMPLE3",},
{read_length_r1:270,ratio_2x:0.8642,read_length_r2:260,ratio_20x:0.6105,ratio_10x:0.7420,average_depth:62.1023,mean_insert_size:165.61,ratio_30x:0.5883,mapped_reads:50101692,total_reads:59472175,duplicate_reads:2280924,id:"SAMPLE25",},
{read_length_r1:210,ratio_2x:0.9621,read_length_r2:140,ratio_20x:0.6721,ratio_10x:0.7697,average_depth:67.7888,mean_insert_size:709.45,ratio_30x:0.6470,mapped_reads:70964954,total_reads:79883229,duplicate_reads:9386857,id:"SAMPLE16",},
{read_length_r1:120,ratio_2x:0.9814,read_length_r2:175,ratio_20x:0.6045,ratio_10x:0.8236,average_depth:63.3750,mean_insert_size:496.34,ratio_30x:0.5889,mapped_reads:88010999,total_reads:90635480,duplicate_reads:8347508,id:"SAMPLE2",},
{read_length_r1:160,ratio_2x:0.9589,read_length_r2:200,ratio_20x:0.8193,ratio_10x:0.9013,average_depth:79.1567,mean_insert_size:396.30,ratio_30x:0.7615,mapped_reads:28982192,total_reads:42618281,duplicate_reads:8522864,id:"SAMPLE23",},
{read_length_r1:240,ratio_2x:0.9103,read_length_r2:180,ratio_20x:0.5332,ratio_10x:0.6820,average_depth:54.9026,mean_insert_size:989.53,ratio_30x:0.5081,mapped_reads:97405324,total_reads:57989549,duplicate_reads:2571314,id:"SAMPLE24",},
{read_length_r1:265,ratio_2x:0.9919,read_length_r2:125,ratio_20x:0.5852,ratio_10x:0.9020,average_depth:62.6190,mean_insert_size:600.30,ratio_30x:0.5704,mapped_reads:22574857,total_reads:37671560,duplicate_reads:7470808,id:"SAMPLE18",},
{read_length_r1:245,ratio_2x:0.9115,read_length_r2:140,ratio_20x:0.6118,ratio_10x:0.7634,average_depth:56.8754,mean_insert_size:937.79,ratio_30x:0.5130,mapped_reads:53133100,total_reads:44936207,duplicate_reads:4117077,id:"SAMPLE12",},
{read_length_r1:245,ratio_2x:0.9584,read_length_r2:255,ratio_20x:0.5399,ratio_10x:0.7770,average_depth:56.3643,mean_insert_size:683.46,ratio_30x:0.5115,mapped_reads:80905156,total_reads:69481336,duplicate_reads:4876706,id:"SAMPLE13",},
{read_length_r1:140,ratio_2x:0.9356,read_length_r2:145,ratio_20x:0.8107,ratio_10x:0.8272,average_depth:67.4675,mean_insert_size:559.43,ratio_30x:0.6180,mapped_reads:47234823,total_reads:48211895,duplicate_reads:7986392,id:"SAMPLE19",},
{read_length_r1:265,ratio_2x:0.9796,read_length_r2:270,ratio_20x:0.6844,ratio_10x:0.7680,average_depth:70.0474,mean_insert_size:343.92,ratio_30x:0.6747,mapped_reads:56262203,total_reads:94315157,duplicate_reads:7964009,id:"SAMPLE0",},
{read_length_r1:150,ratio_2x:0.9413,read_length_r2:100,ratio_20x:0.6356,ratio_10x:0.9166,average_depth:61.7747,mean_insert_size:930.26,ratio_30x:0.5532,mapped_reads:85814766,total_reads:58937974,duplicate_reads:1132653,id:"SAMPLE28",},
{read_length_r1:295,ratio_2x:0.8959,read_length_r2:145,ratio_20x:0.5713,ratio_10x:0.7705,average_depth:58.9151,mean_insert_size:865.65,ratio_30x:0.5455,mapped_reads:12086409,total_reads:82545007,duplicate_reads:1635412,id:"SAMPLE17",},
{read_length_r1:170,ratio_2x:0.9034,read_length_r2:225,ratio_20x:0.5549,ratio_10x:0.6346,average_depth:57.1832,mean_insert_size:460.28,ratio_30x:0.5423,mapped_reads:57904670,total_reads:74627576,duplicate_reads:7590138,id:"SAMPLE22",},
{read_length_r1:165,ratio_2x:0.9503,read_length_r2:135,ratio_20x:0.7247,ratio_10x:0.7848,average_depth:62.7957,mean_insert_size:444.53,ratio_30x:0.5720,mapped_reads:53115657,total_reads:85950331,duplicate_reads:9267061,id:"SAMPLE7",},
{read_length_r1:290,ratio_2x:0.9651,read_length_r2:115,ratio_20x:0.7654,ratio_10x:0.8688,average_depth:77.7188,mean_insert_size:203.44,ratio_30x:0.7536,mapped_reads:27606775,total_reads:85935701,duplicate_reads:8485139,id:"SAMPLE29",},
{read_length_r1:135,ratio_2x:0.9809,read_length_r2:225,ratio_20x:0.8532,ratio_10x:0.8914,average_depth:71.0792,mean_insert_size:257.35,ratio_30x:0.6495,mapped_reads:33812378,total_reads:20827838,duplicate_reads:1674241,id:"SAMPLE9",},
{read_length_r1:295,ratio_2x:0.9052,read_length_r2:155,ratio_20x:0.6644,ratio_10x:0.6839,average_depth:65.8415,mean_insert_size:266.25,ratio_30x:0.6365,mapped_reads:31572200,total_reads:41341138,duplicate_reads:5433218,id:"SAMPLE8",},
{read_length_r1:205,ratio_2x:0.9284,read_length_r2:140,ratio_20x:0.6132,ratio_10x:0.7648,average_depth:61.2099,mean_insert_size:750.69,ratio_30x:0.5695,mapped_reads:87262118,total_reads:98637407,duplicate_reads:7885535,id:"SAMPLE14",},
{read_length_r1:240,ratio_2x:0.8566,read_length_r2:100,ratio_20x:0.7093,ratio_10x:0.7852,average_depth:64.5386,mean_insert_size:129.20,ratio_30x:0.6022,mapped_reads:69541829,total_reads:71129050,duplicate_reads:9901039,id:"SAMPLE21",},
{read_length_r1:230,ratio_2x:0.9776,read_length_r2:110,ratio_20x:0.6720,ratio_10x:0.9452,average_depth:69.9653,mean_insert_size:731.98,ratio_30x:0.6518,mapped_reads:28793615,total_reads:92572101,duplicate_reads:9794813,id:"SAMPLE4",},
{read_length_r1:295,ratio_2x:0.8545,read_length_r2:245,ratio_20x:0.6754,ratio_10x:0.7307,average_depth:59.6889,mean_insert_size:991.14,ratio_30x:0.5495,mapped_reads:71859220,total_reads:45926490,duplicate_reads:9626645,id:"SAMPLE15",},
{read_length_r1:215,ratio_2x:0.9525,read_length_r2:265,ratio_20x:0.9211,ratio_10x:0.9439,average_depth:62.7939,mean_insert_size:888.80,ratio_30x:0.5245,mapped_reads:71290366,total_reads:29193095,duplicate_reads:9957241,id:"SAMPLE5",},
{read_length_r1:105,ratio_2x:0.9466,read_length_r2:250,ratio_20x:0.5497,ratio_10x:0.6965,average_depth:55.3307,mean_insert_size:511.25,ratio_30x:0.5078,mapped_reads:22399169,total_reads:34533646,duplicate_reads:7138343,id:"SAMPLE20",},
{read_length_r1:280,ratio_2x:0.8136,read_length_r2:140,ratio_20x:0.6143,ratio_10x:0.7779,average_depth:55.8067,mean_insert_size:750.31,ratio_30x:0.5017,mapped_reads:47907389,total_reads:49876287,duplicate_reads:1104591,id:"SAMPLE26",},
{read_length_r1:160,ratio_2x:0.9002,read_length_r2:295,ratio_20x:0.6313,ratio_10x:0.6480,average_depth:57.0187,mean_insert_size:638.58,ratio_30x:0.5283,mapped_reads:88052624,total_reads:45779338,duplicate_reads:4694248,id:"SAMPLE11",},

];
function get_data_base() {return base;}
