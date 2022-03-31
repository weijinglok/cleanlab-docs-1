Search.setIndex({docnames:["cleanlab/classification","cleanlab/coteaching","cleanlab/count","cleanlab/example_models/cifar_cnn","cleanlab/example_models/index","cleanlab/example_models/mnist_pytorch","cleanlab/filter","cleanlab/internal/index","cleanlab/internal/label_quality_utils","cleanlab/internal/latent_algebra","cleanlab/internal/util","cleanlab/noise_generation","cleanlab/rank","index","notebooks/Image_Tut"],envversion:{"sphinx.domains.c":2,"sphinx.domains.changeset":1,"sphinx.domains.citation":1,"sphinx.domains.cpp":4,"sphinx.domains.index":1,"sphinx.domains.javascript":2,"sphinx.domains.math":2,"sphinx.domains.python":3,"sphinx.domains.rst":2,"sphinx.domains.std":2,"sphinx.ext.todo":2,"sphinx.ext.viewcode":1,nbsphinx:4,sphinx:56},filenames:["cleanlab/classification.rst","cleanlab/coteaching.rst","cleanlab/count.rst","cleanlab/example_models/cifar_cnn.rst","cleanlab/example_models/index.rst","cleanlab/example_models/mnist_pytorch.rst","cleanlab/filter.rst","cleanlab/internal/index.rst","cleanlab/internal/label_quality_utils.rst","cleanlab/internal/latent_algebra.rst","cleanlab/internal/util.rst","cleanlab/noise_generation.rst","cleanlab/rank.rst","index.rst","notebooks/Image_Tut.ipynb"],objects:{"cleanlab.classification":[[0,1,1,"","LearningWithNoisyLabels"]],"cleanlab.classification.LearningWithNoisyLabels":[[0,2,1,"","fit"],[0,2,1,"","get_label_issues"],[0,2,1,"","get_params"],[0,2,1,"","predict"],[0,2,1,"","predict_proba"],[0,2,1,"","score"],[0,2,1,"","set_params"]],"cleanlab.coteaching":[[1,3,1,"","adjust_learning_rate"],[1,3,1,"","evaluate"],[1,3,1,"","forget_rate_scheduler"],[1,3,1,"","initialize_lr_scheduler"],[1,3,1,"","loss_coteaching"],[1,3,1,"","train"]],"cleanlab.count":[[2,3,1,"","calibrate_confident_joint"],[2,3,1,"","compute_confident_joint"],[2,3,1,"","converge_estimates"],[2,3,1,"","estimate_confident_joint_and_cv_pred_proba"],[2,3,1,"","estimate_cv_predicted_probabilities"],[2,3,1,"","estimate_joint"],[2,3,1,"","estimate_latent"],[2,3,1,"","estimate_noise_matrices"],[2,3,1,"","estimate_py_and_noise_matrices_from_probabilities"],[2,3,1,"","estimate_py_noise_matrices_and_cv_pred_proba"],[2,3,1,"","get_confident_thresholds"],[2,3,1,"","num_label_issues"]],"cleanlab.example_models":[[3,0,0,"-","cifar_cnn"],[5,0,0,"-","mnist_pytorch"]],"cleanlab.example_models.cifar_cnn":[[3,1,1,"","CNN"],[3,3,1,"","call_bn"]],"cleanlab.example_models.cifar_cnn.CNN":[[3,4,1,"","T_destination"],[3,2,1,"","__call__"],[3,2,1,"","add_module"],[3,2,1,"","apply"],[3,2,1,"","bfloat16"],[3,2,1,"","buffers"],[3,2,1,"","children"],[3,2,1,"","cpu"],[3,2,1,"","cuda"],[3,2,1,"","double"],[3,4,1,"","dump_patches"],[3,2,1,"","eval"],[3,2,1,"","extra_repr"],[3,2,1,"","float"],[3,2,1,"id0","forward"],[3,2,1,"","get_buffer"],[3,2,1,"","get_extra_state"],[3,2,1,"","get_parameter"],[3,2,1,"","get_submodule"],[3,2,1,"","half"],[3,2,1,"","load_state_dict"],[3,2,1,"","modules"],[3,2,1,"","named_buffers"],[3,2,1,"","named_children"],[3,2,1,"","named_modules"],[3,2,1,"","named_parameters"],[3,2,1,"","parameters"],[3,2,1,"","register_backward_hook"],[3,2,1,"","register_buffer"],[3,2,1,"","register_forward_hook"],[3,2,1,"","register_forward_pre_hook"],[3,2,1,"","register_full_backward_hook"],[3,2,1,"","register_parameter"],[3,2,1,"","requires_grad_"],[3,2,1,"","set_extra_state"],[3,2,1,"","share_memory"],[3,2,1,"","state_dict"],[3,2,1,"","to"],[3,2,1,"","to_empty"],[3,2,1,"","train"],[3,4,1,"","training"],[3,2,1,"","type"],[3,2,1,"","xpu"],[3,2,1,"","zero_grad"]],"cleanlab.example_models.mnist_pytorch":[[5,1,1,"","CNN"],[5,1,1,"","SimpleNet"],[5,3,1,"","get_mnist_dataset"],[5,3,1,"","get_sklearn_digits_dataset"]],"cleanlab.example_models.mnist_pytorch.CNN":[[5,4,1,"","batch_size"],[5,4,1,"","dataset"],[5,4,1,"","epochs"],[5,2,1,"id0","fit"],[5,2,1,"","get_params"],[5,4,1,"","loader"],[5,4,1,"","log_interval"],[5,4,1,"","lr"],[5,4,1,"","momentum"],[5,4,1,"","no_cuda"],[5,2,1,"id1","predict"],[5,2,1,"id2","predict_proba"],[5,4,1,"","seed"],[5,2,1,"","set_params"],[5,4,1,"","test_batch_size"]],"cleanlab.example_models.mnist_pytorch.SimpleNet":[[5,4,1,"","T_destination"],[5,2,1,"","__call__"],[5,2,1,"","add_module"],[5,2,1,"","apply"],[5,2,1,"","bfloat16"],[5,2,1,"","buffers"],[5,2,1,"","children"],[5,2,1,"","cpu"],[5,2,1,"","cuda"],[5,2,1,"","double"],[5,4,1,"","dump_patches"],[5,2,1,"","eval"],[5,2,1,"","extra_repr"],[5,2,1,"","float"],[5,2,1,"","forward"],[5,2,1,"","get_buffer"],[5,2,1,"","get_extra_state"],[5,2,1,"","get_parameter"],[5,2,1,"","get_submodule"],[5,2,1,"","half"],[5,2,1,"","load_state_dict"],[5,2,1,"","modules"],[5,2,1,"","named_buffers"],[5,2,1,"","named_children"],[5,2,1,"","named_modules"],[5,2,1,"","named_parameters"],[5,2,1,"","parameters"],[5,2,1,"","register_backward_hook"],[5,2,1,"","register_buffer"],[5,2,1,"","register_forward_hook"],[5,2,1,"","register_forward_pre_hook"],[5,2,1,"","register_full_backward_hook"],[5,2,1,"","register_parameter"],[5,2,1,"","requires_grad_"],[5,2,1,"","set_extra_state"],[5,2,1,"","share_memory"],[5,2,1,"","state_dict"],[5,2,1,"","to"],[5,2,1,"","to_empty"],[5,2,1,"","train"],[5,4,1,"","training"],[5,2,1,"","type"],[5,2,1,"","xpu"],[5,2,1,"","zero_grad"]],"cleanlab.filter":[[6,3,1,"","find_label_issues"],[6,3,1,"","find_label_issues_using_argmax_confusion_matrix"],[6,3,1,"","find_predicted_neq_given"],[6,3,1,"","keep_at_least_n_per_class"],[6,3,1,"","multiclass_crossval_predict"],[6,3,1,"","reduce_prune_counts"]],"cleanlab.internal":[[8,0,0,"-","label_quality_utils"],[9,0,0,"-","latent_algebra"],[10,0,0,"-","util"]],"cleanlab.internal.label_quality_utils":[[8,3,1,"","get_normalized_entropy"]],"cleanlab.internal.latent_algebra":[[9,3,1,"","compute_inv_noise_matrix"],[9,3,1,"","compute_noise_matrix_from_inverse"],[9,3,1,"","compute_ps_py_inv_noise_matrix"],[9,3,1,"","compute_py"],[9,3,1,"","compute_py_inv_noise_matrix"],[9,3,1,"","compute_pyx"]],"cleanlab.internal.util":[[10,1,1,"","VersionWarning"],[10,3,1,"","assert_inputs_are_valid"],[10,3,1,"","clip_noise_rates"],[10,3,1,"","clip_values"],[10,3,1,"","confusion_matrix"],[10,3,1,"","estimate_pu_f1"],[10,3,1,"","int2onehot"],[10,3,1,"","onehot2int"],[10,3,1,"","print_inverse_noise_matrix"],[10,3,1,"","print_joint_matrix"],[10,3,1,"","print_noise_matrix"],[10,3,1,"","print_square_matrix"],[10,3,1,"","remove_noise_from_class"],[10,3,1,"","round_preserving_row_totals"],[10,3,1,"","round_preserving_sum"],[10,3,1,"","value_counts"]],"cleanlab.internal.util.VersionWarning":[[10,2,1,"","is_compatible"]],"cleanlab.noise_generation":[[11,3,1,"","generate_n_rand_probabilities_that_sum_to_m"],[11,3,1,"","generate_noise_matrix"],[11,3,1,"","generate_noise_matrix_from_trace"],[11,3,1,"","generate_noisy_labels"],[11,3,1,"","noise_matrix_is_valid"],[11,3,1,"","randomly_distribute_N_balls_into_K_bins"]],"cleanlab.rank":[[12,3,1,"","get_confidence_weighted_entropy_for_each_label"],[12,3,1,"","get_label_quality_ensemble_scores"],[12,3,1,"","get_label_quality_scores"],[12,3,1,"","get_normalized_margin_for_each_label"],[12,3,1,"","get_self_confidence_for_each_label"],[12,3,1,"","order_label_issues"]],cleanlab:[[0,0,0,"-","classification"],[1,0,0,"-","coteaching"],[2,0,0,"-","count"],[6,0,0,"-","filter"],[11,0,0,"-","noise_generation"],[12,0,0,"-","rank"]]},objnames:{"0":["py","module","Python module"],"1":["py","class","Python class"],"2":["py","method","Python method"],"3":["py","function","Python function"],"4":["py","attribute","Python attribute"]},objtypes:{"0":"py:module","1":"py:class","2":"py:method","3":"py:function","4":"py:attribute"},terms:{"0":[0,1,2,3,5,6,8,9,10,11,12,14],"000":14,"00068":12,"001":1,"01":5,"03":6,"05":11,"0s":10,"1":[0,1,2,3,5,6,8,9,10,11,12],"10":[2,3,14],"100":[2,10],"10000":11,"100000":10,"11":14,"1150":[3,5],"12":14,"1206":14,"128":14,"13031":14,"1352":14,"15":14,"15942":14,"18598":14,"1911":12,"1913":[3,5],"1914":[3,5],"1d":[10,14],"1e":[2,11],"1l":[3,5],"1s":10,"2":[0,1,2,3,5,6,8,9,10,12],"20":2,"2018":6,"2021":0,"20735":14,"20820":14,"20l":[3,5],"2324":[3,5],"2325":[3,5],"2382":[3,5],"24798":14,"25":3,"250":1,"2517":14,"2524":14,"255":14,"28":14,"2856":14,"2d":[0,2,6,10,14],"3":[0,2,3,5,6,8,9,10],"31134":14,"3420":[3,5],"3741":[3,5],"3863":14,"3889":14,"39327":14,"39457":14,"4":6,"4027":14,"4055":14,"4154":14,"4228":14,"4245":14,"4317":14,"4443":[3,5],"4477":14,"4491":14,"4525":14,"47":10,"4714":14,"4724":14,"4757":14,"4804":14,"4818":14,"4935":14,"4946":14,"4961":14,"4d":[3,5],"5":[0,2,5,6],"50":5,"5075":14,"5112":[3,5],"5113":[3,5],"5154":14,"5156":14,"5161":14,"5262":14,"5263":14,"53216":14,"5367":14,"5418":14,"5467":14,"5511":14,"5522":14,"5552":14,"5554":14,"5593":[3,5],"5751":14,"5899":14,"5918":14,"5934":14,"5955":14,"59915":14,"5l":[3,5],"6":[2,5,10],"6122":[3,5],"61247":14,"6168":14,"61790":14,"6182":14,"64":5,"6467":14,"6484":14,"66091":14,"6706":14,"6985":14,"7":10,"70":14,"7006":14,"7010":14,"7029":14,"7030":14,"7035":14,"7037":14,"7046":14,"7068":14,"7111":14,"7116":14,"7128":14,"7144":14,"7150":14,"7155":14,"7162":14,"7166":14,"7172":14,"7176":14,"7196":14,"7200":14,"7215":14,"7222":14,"7274":14,"7275":14,"7283":14,"7291":14,"7308":14,"7328":14,"7335":14,"7336":14,"7340":14,"7347":14,"7367":14,"7465":14,"7622":14,"7862":14,"8":[2,14],"80":1,"8047":14,"8053":14,"8249":14,"8389":14,"8407":14,"8462":14,"8562":14,"8573":14,"8587":14,"8652":14,"8682":14,"8712":14,"8713":14,"8729":14,"8750":14,"8766":14,"8795":14,"8797":14,"8827":14,"8829":14,"8860":14,"8863":14,"8905":14,"8910":14,"8913":14,"8942":14,"8957":14,"8962":14,"8978":14,"9":[10,14],"9280":14,"9375":14,"9511":14,"9615":14,"9688":14,"9707":14,"9834":14,"99999":11,"boolean":6,"break":[3,5],"case":14,"class":[0,1,2,3,5,6,8,9,10,11,12,13],"default":[0,1,2,3,5,6,9,11,12],"do":[2,3,5,10,11,12,14],"final":0,"float":[1,2,3,5,6,8,10,11,12],"function":[0,1,2,3,5,6,8,9,10,11,12,13,14],"import":[0,2,13,14],"int":[0,1,2,3,5,6,10,11,12],"new":[0,3,5,14],"return":[0,2,3,5,6,8,9,10,11,12,13,14],"short":10,"throw":[3,5],"true":[0,1,2,3,5,6,9,10,11,12],"try":6,"while":[0,2,3,5,6,10],A:[0,1,2,3,5,6,9,10,11,12],AND:[6,12],As:14,At:13,BE:10,Be:5,By:6,For:[2,3,5,6,9,12],If:[0,2,3,5,6,9,11,14],In:[2,3,5,11],It:[0,3,5,9],Its:[3,5],Such:2,That:6,The:[0,2,3,5,6,8,9,10,11,12,13],There:[0,2],These:[0,6,7,12],To:[2,3,5,6,12,13],With:14,__:[0,5],__call__:[3,5],__init__:[0,1],_load_from_state_dict:[3,5],_metadata:[3,5],_python_version_is_compat:10,_subtract_confident_threshold:12,ab:12,about:[1,8],abov:[3,5,10,14],accept:[3,5,6,12],access:[3,5],accessor:0,accord:13,accordingli:14,account:12,accur:[2,6],accuraci:[0,1,12],achiev:[0,3,5,11],across:[0,2],activ:8,actual:2,ad:[3,5],adam:1,adapt:[3,10,13,14],add:[2,3,5],add_modul:[3,5],addit:[3,5],addition:11,adher:[0,5],adjust:[1,6,12],adjust_learning_r:1,adjust_pred_prob:[6,12],advanc:6,affect:[3,5],after:[3,5,6,10],afterward:[3,5],again:2,against:[3,5],aggreg:12,agre:2,agreement:2,al:[0,12],algorithm:[0,11],alia:[3,5],all:[2,3,5,6,9,10,11,12,14],allow:[3,5,13],alongsid:[3,5],alpha_plan:1,alreadi:[3,5,9,13],also:[0,2,3,5,6,11,14],altern:[2,6,12],although:[3,5],alwai:[3,5],among:5,amount:[2,6,11],an:[0,2,3,5,6,8,9,10,12,14],ani:[0,2,3,5,6,10,11,12,13,14],anomal:12,anoth:[2,12],any_other_class:10,anywher:6,api:13,appli:[3,5],approach:6,appropri:[3,5,12],ar:[0,2,3,5,6,7,9,10,11,12,13,14],arbitrari:14,architectur:[3,5],arg:[0,1,3,5,6,12],argmax:[2,6,12],argsort:12,argument:[0,2,3,5,6,12],around:0,arrai:[0,1,2,5,6,8,9,10,11,12,14],art:0,articl:6,arxiv:12,ascii:0,assert_inputs_are_valid:10,assign:[11,14],associ:[3,5],assum:[0,2,9,10,11],astyp:[11,14],asynchron:[3,5],attribut:[3,5],attributeerror:[3,5],augment:14,autograd:[3,5],autom:0,automat:[0,13],averag:[2,3,5,11,12],avoid:[6,10],axi:[2,9,14],backward:[3,5],bad:12,base:[0,2,3,5,6,9,10,12],baseestim:[0,5],baselin:[2,3,6],basic:5,batch_siz:5,batchnorm:[3,5],bc:[3,5],becaus:[2,6,9,10],been:[0,2,6,8,9],befor:[3,5,11],behavior:[3,5],being:[3,5,6,12],belong:[0,2,6,8,9,12],below:[2,3,5,6,11],benchmark:[3,13],best:10,beta1_plan:1,beta:1,better:[3,5,11,12],between:[0,1,2,3,5,6,7,8,11,12],bfloat16:[3,5],bhanml:3,bia:[3,5],binari:10,bincount:[2,10],blob:3,bn:3,bool:[0,2,3,5,6,10,11,12],both:[2,3,5,6,12],bound:[2,3,5],boundari:6,bring:14,buf:[3,5],buffer:[3,5],build:[3,5,14],bump:[3,5],byod:14,c:[12,13],caffe2:0,calcul:2,calibr:[2,6],calibrate_confident_joint:2,call:[0,2,3,5,6,10,13],call_bn:3,callabl:[3,5],caller:[3,5],can:[0,2,3,5,6,12,13,14],canon:2,care:[3,5],cast:[3,5],cat:10,caus:6,caution:[2,6,12],cdoubl:[3,5],certain:[0,2,3,5],cgdeboer:10,chang:[2,3,5,14],channels_last:[3,5],charact:10,cheatsheet:8,check:[3,5,10,14],child:[3,5],children:[3,5],choic:11,choos:[10,12],chosen:12,cifar:4,cifar_cnn:3,cj:[2,9,10],cj_ish:2,claesen:10,class_weight:1,class_without_nois:10,classif:[2,6,12,13],classifi:[0,2,10,13],clean:[0,12,13,14],cleanlab:[0,1,2,3,5,6,7,8,9,10,11,12],clf:[0,2,13],clf_final_kwarg:0,clf_kwarg:[0,2],click:14,clip:10,clip_noise_r:10,clip_valu:10,clonabl:0,clone:0,close:[0,2],cmap:14,cnn:[4,5],cnt:[2,9],co:[1,3],code:[3,5,6,9,10,14],column:[0,2,6,8,9,10,11,12],com:[3,8,10,13],combin:2,comment:2,compar:[3,5],comparison:[3,5],compat:[3,5,13],complet:[2,14],complex128:[3,5],complex:[3,5],compliant:0,compon:[0,5],comptuation:0,comput:[0,1,2,3,5,6,8,9,10,12,13],compute_confident_joint:[2,6,10],compute_inv_noise_matrix:9,compute_noise_matrix_from_invers:9,compute_pi:9,compute_ps_py_inv_noise_matrix:9,compute_py_inv_noise_matrix:9,compute_pyx:9,con:2,conda:13,condit:[0,2,6,9,10,11,12],confid:[0,2,6,9,12],confidence_weighted_entropi:[6,12],confident_bin:2,confident_joint:[2,6,10],confident_learn:6,confident_threshold:2,confus:[3,5,6,10],confusion_matrix:10,congratul:14,conjunct:6,consid:[0,2,3,5,6,14],consist:[0,2,10],constrain:2,construct:[3,5],contain:[0,1,2,3,5,6,8,9,10,11,12,14],context:[3,5],continu:6,control:[0,6],conv4:[3,5],conv5:[3,5],conv:[3,5],conveni:14,convent:[3,5],converg:2,converge_estim:2,converge_latent_estim:[0,2],convert:[3,5,10],copi:[3,5],correct:[0,6,8,12],correctli:[0,2,3,5,6,9,10,12],correspond:[0,2,3,5,6,8,9,12],count:[0,6,9,10,14],count_joint:11,cover:[2,11],cpu:[3,5,6],creat:[0,6,11],creation:5,cross:[0,2,6,8,9,12,13,14],cross_val_predict:[5,14],cuda:[3,5],current:[0,2,3,5],curv:6,custom:[3,5],cutoff:0,cv:14,cv_n_fold:[0,2],d:[0,2,14],data:[0,1,2,5,6,12,14],dataload:1,datapoint:[2,6,12],dataset:[0,2,5,6,9,10,12,13],datatyp:[3,5],debug:11,decid:14,decim:[1,10],decreas:2,deep:[0,5],def:[0,3,5,14],defin:[0,1,2,3,5,6],degre:[3,5],delet:6,demonstr:14,denot:[0,10,12],depend:[2,8,10],deprec:[3,5,11],descend:[3,5],describ:12,descript:[10,12],desir:[3,5],destin:[3,5],detail:[3,5,10],determin:[0,6,12],deviat:2,devic:[3,5],diagon:[2,6,9,10,11],diagram:[3,5],dict:[0,2,3,5,6,12],dictionari:[3,5],differ:[0,2,3,5,6,7],digit:[5,14],dim:14,dimension:10,direct:[3,5],directli:13,dirichlet:11,dirti:12,disabl:[3,5],discrep:2,discret:[0,2,6,9,10,12],displai:[10,14],distinct:[10,11],distribut:[2,5,6,12],divid:12,doc:[3,5],docstr:[2,3,5,10],document:[3,5,12],doe:[6,11],dog:10,don:2,done:2,dot:9,doubl:[3,5],download:5,dr:2,dropout:[3,5,14],dropout_r:3,dst_type:[3,5],dtype:[2,3,5],due:2,dump_patch:[3,5],duplic:[3,5],dur:14,dure:[0,13],e:[0,2,3,5,6,9,10,11,12],each:[0,1,2,3,5,6,8,9,10,11,12],easi:9,easier:[2,11],easiest:0,easili:[9,14],ec57bc067c0b:8,edg:14,effect:[3,5],effici:[2,9],either:[3,5,6,12],element:[2,10,12],elif:2,els:0,empti:9,en:8,enabl:5,encod:[0,6,10],encount:6,end:2,enforc:[0,3,5],ensembl:12,ensur:[0,3,5,6],entir:[6,9,12,13,14],entri:[2,3,5,6,10,11],entropi:[6,8,12],entropy_:8,enumer:[2,3,5,14],epoch:[1,5,14],epoch_decay_start:1,eqn:[2,9],equival:[0,2,3,5,6],erron:[0,2,6,9,10,12],error:[0,2,3,5,6,12],especi:0,estim:[0,2,5,6,9,10,12,13],estimate_confident_joint_and_cv_pred_proba:2,estimate_cv_predicted_prob:2,estimate_joint:2,estimate_lat:2,estimate_noise_matric:2,estimate_pu_f1:10,estimate_py_and_noise_matrices_from_prob:2,estimate_py_noise_matrices_and_cv_pred_proba:2,et:[0,12],etc:[0,3,5],eval:[3,5],evalu:[1,2,3,5,6,12],even:[2,9],everi:[0,2,3,5,6,9,10,11,12],everyth:0,exact:2,exactli:[3,5,6,11],exampl:[0,1,2,3,5,6,8,9,10,11,12,13],example_model:[0,3,5],except:12,exist:[2,3,5,13],expect:[2,12,13],explain:11,explan:[3,5],expon:1,extra:[0,3,5],extra_repr:[3,5],f1:[6,10],f:14,fals:[0,2,3,5,6,11,12],fast:11,favor:[3,5],featur:[0,2,14],feel:14,fetch_openml:14,few:14,fewer:[6,10,14],field:[3,5],file:2,fill_:[3,5],filter:[0,2,14],filter_bi:[0,6],find:[0,2,6,12],find_label_issu:[0,2,6,13,14],find_label_issues_kwarg:0,find_label_issues_using_argmax_confusion_matrix:6,find_predicted_neq_given:6,fine:2,finetun:[3,5],first:[0,2,14],fit:[0,2,5,13],five:2,fix:[13,14],flag:6,flexibl:5,float16:[3,5],float32:14,float64:[3,5],fn:[3,5],fold:[0,2,6,8,9],follow:[0,2,3,5,6,14],forc:[0,2,5,11],forget:1,forget_r:1,forget_rate_schedul:1,form:[0,1,2,3,5,9,10,11],format:[0,2,3,5,6,9,10,12],former:[3,5],formula:6,forward:[1,3,5],found:[3,5,13,14],four:0,frac_nois:[0,6],frac_zero_noise_r:11,fraction:[0,1,2,6,9,10,11],free:14,freez:[3,5],from:[0,1,2,3,5,6,9,10,11,12,13,14],fulli:[3,5],functor:10,furthermor:0,futur:[3,5],g:[0,2,3,5,6,10,11],gan:[3,5],gener:[0,2,10,11,12,14],generate_n_rand_probabilities_that_sum_to_m:11,generate_noise_matrix:11,generate_noise_matrix_from_trac:11,generate_noisy_label:11,get:[0,2,3,5,13],get_buff:[3,5],get_confidence_weighted_entropy_for_each_label:12,get_confident_threshold:2,get_extra_st:[3,5],get_label_issu:0,get_label_quality_ensemble_scor:12,get_label_quality_scor:[6,12],get_mnist_dataset:5,get_normalized_entropi:8,get_normalized_margin_for_each_label:12,get_param:[0,5],get_paramet:[3,5],get_self_confidence_for_each_label:12,get_sklearn_digits_dataset:5,get_submodul:[3,5],gist:2,git:13,github:[3,10,13],give:12,given:[0,1,3,5,6,8,9,11,12,13,14],good:[3,12],gpu1:[3,5],gpu:[3,5],grad:[3,5],grad_input:[3,5],grad_output:[3,5],gradient:[3,5],grai:14,greater:[0,2,10],guarante:[2,3,5,7,11],guess:[2,9],h_pad:14,ha:[0,2,3,5,6,9,10,13,14],had:[0,2],half:[3,5],handl:[3,5],handwritten:[5,14],happen:[6,11],hard:5,harder:2,have:[0,2,3,5,6,8,9,10,11,14],held:[2,6,12,13],help:[3,5,13,14],helper:[8,10],here:[2,8,10,13,14],high:[0,2,6,10,11],higher:[0,2,6,8,9,11],holdout:[0,2,12],hook:[3,5],host:[3,5],hot:[6,10],how:[0,1,2,3,5,9,12,13,14],howev:10,html:6,http:[3,6,8,10,12,13],hundr:14,i:[0,2,6,9,10,12],id:14,id_it:14,idea:12,ident:10,identifi:[0,6,12,13,14],idx:[3,5],idx_flip:11,ie:12,ignor:[2,3,5],imagenet:13,imbal:12,imbdb:14,immedi:[3,5],impact:0,implement:[0,2,3,5,9,10,11,13],impli:11,imposs:11,imshow:14,in_featur:[3,5],includ:[0,3,5,6,10,12],incorrect:[12,13],increas:[6,9,12],independ:[0,2],index:[6,12],indic:[2,5,6,8,12,13,14],individu:[3,5,12],inform:[3,5],information_theori:8,inherit:[0,1],init:[3,5],init_weight:[3,5],initi:[3,5],initialize_lr_schedul:1,inplac:[3,5],input:[0,2,3,5,6,13],input_channel:3,instal:3,instanc:[0,3,5],instead:[0,2,3,5,6,9,11,14],instruct:13,int2onehot:10,int64:14,integ:[0,2,6,10,11,12],integr:[3,5],intend:7,intern:[0,8,9,10],inv_noise_matrix:2,inv_noise_matrix_iter:2,invalid:[3,5],invers:[2,9,10],inverse_noise_matrix:[0,2,9,10],inverse_noise_rate_class_k:6,invok:[3,5],is_compat:10,issu:[0,2,6,12,13],item:[2,10],iter:[0,2,3,5,6,10],iteround:10,its:[2,3,5,6,12,14],itself:[3,5],j:[2,3,5,6],joint:[2,6,9,10],joint_estim:2,joint_matrix:10,just:[1,2,6,12,14],k:[0,2,6,8,9,10,11,12],k_:[0,2,9,10,11],k_y:[0,2,9,10,11],keep:0,keep_at_least_n_per_class:6,keep_var:[3,5],kei:[3,5],keyword:[0,2,3,5,6,12],known:[2,14],kwarg:[0,3,5],l:[3,5],label:[0,1,2,5,6,8,9,10,11,12],label_issues_idx:[6,12],label_issues_mask:[0,6,12],label_quality_scor:12,label_quality_util:7,labels_maybe_with_error:0,larg:6,larger:11,last:5,latent:[0,2,6,9],latent_algebra:7,latter:[0,3,5],learn:[0,1,5,6,8,10,11,12,13],learnabl:11,learningwithnoisylabel:[0,13],least:6,leav:0,left:[6,10,11],left_nam:10,len:[2,9,11,14],length:[0,1,6,10,11],less:[11,12],let:[3,5,12,13,14],librari:5,like:[0,3,5,6,9,10,12,13],likelihood:12,line:[3,5],linear:[3,5,14],linear_model:[0,13],link:6,list:[0,1,2,3,5,6,10,12,14],list_of_compatible_vers:10,littl:2,live:[3,5],ll:14,lnl:13,load:[3,5],load_state_dict:[3,5],loader:5,local:[3,5],log_interv:5,logist:[0,2,13],logisticregress:[0,2,13],logit:1,logreg:0,look:[3,5,14],loop:[2,9,10,11],loss:[0,1],loss_coteach:1,low:[10,11],lower:12,lr:[1,5],m:[0,3,5,11],machin:0,made:2,magnifi:2,mai:[0,2,3,5,6,9,10,11,12],major:2,make:[2,3,5,6,10,11,14],manag:10,mani:2,manual:[0,13],map:[0,3,5],margin:[2,6,9,12],marginal_p:[2,9],mask:6,master:3,mat:2,match:[3,5,6],mathemat:[0,2],matplotlib:14,matric:[2,9],matrix:[0,2,6,8,9,10,11,12],matter:[6,10],max:[6,11,12],max_:12,max_balls_per_bin:11,max_it:11,max_noise_r:11,max_prob:11,max_prob_not_label:12,max_trace_prob:11,maxim:6,maximum:11,mayb:0,mean:[0,1,2,5,9,11],mechan:[3,5],member:[3,5],memo:[3,5],memori:[3,5],memory_format:[3,5],method:[0,2,3,5,6,7,9,10,11,12,13,14],metric:10,min_balls_per_bin:11,min_examples_per_class:[0,6],min_noise_r:11,min_prob:11,min_trace_prob:11,minimum:[6,11,13],minu:12,minut:14,mislabel:[0,2,6,9,13],miss:[3,5],missing_kei:[3,5],ml:13,mnist:[5,13],mnist_784:14,mnist_pytorch:4,mode:[3,5],model1:1,model2:1,model:[0,1,2,3,5,6,8,9,12],model_select:14,model_skorch:14,modifi:[3,5,10],modul:[1,3,5,6,12],momentum:5,more:[0,2,3,5,6,8,11,12,13,14],most:[2,6],move:[3,5],movi:14,ms:10,much:[0,6],multi:[0,2,3,5,6,10,12],multi_label:[2,6],multiclass:[0,6],multiclass_crossval_predict:6,multipl:[0,10],multipli:6,multiprocess:6,must:[0,1,2,3,5,6,8,9,10,12,13],n:[0,2,3,5,6,8,9,11,12,14],n_job:6,n_output:3,name:[0,3,5,10],named_buff:[3,5],named_children:[3,5],named_modul:[3,5],named_paramet:[3,5],namedtupl:[3,5],natur:[0,11],ncol:14,necessari:[0,11],need:[0,2,3,5,6,13,14],nest:[0,3,5],net:[3,5,14],net_b:[3,5],net_c:[3,5],network:[0,3,5,14],neural:[0,14],neuralnetclassifi:14,never:[2,6,10,12,13],new_sum:10,ninja:6,nn:[1,3,5,14],no_cuda:5,no_grad:[3,5],nois:[0,2,6,9,10,11],noise_matrix:[0,2,9,10,11],noise_matrix_is_valid:11,noise_matrix_iter:2,noise_r:11,noisi:[0,1,2,5,6,9,10,11,12],noisy_label:6,non:[2,3,5,6,11],non_block:[3,5],none:[0,1,2,3,5,6,9,10,11],normal:[6,8,10,12],normalized_margin:[6,12],northcutt:[0,12],note:[2,3,5,6,11,13],notion:0,np:[0,1,2,6,8,9,10,11,12],nrow:14,num_confident_bin:2,num_examples_s_equal_k:6,num_examples_with_s_equal_k:6,num_featur:[3,5],num_gradu:1,num_iter_per_epoch:1,num_label_issu:2,num_to_remove_per_class:6,number:[0,1,2,3,5,6,9,10,11],number_of_mislabeled_examples_in_class_k:6,numer:[0,2],numpi:[0,2,5,6,8,11,12,14],o:[3,5,12],obj:6,object:[0,1,3,5,10],obscur:14,observ:[0,2,9],obtain:[0,2,6,12,13],obviou:10,occur:[2,11],odd:14,off:[2,6,14],often:[2,9],ok:[2,6,12],onc:[3,5],one:[2,3,5,6,10,12,13,14],onehot2int:10,onehot:10,onehot_matrix:10,ones:[3,5,11,14],onli:[0,2,3,5,6,8,9,11,12,13],ood:12,open:0,oper:[3,5,12],opposit:11,optim:[1,2,3,5],optimizer1:1,optimizer2:1,option:[0,2,3,5,6,9,10,12],order:[0,2,6,8,9,12,13],order_label_issu:12,ordered_label_issu:13,ordereddict:[3,5],org:[3,8,12],origin:[0,6,10],other:[0,2,3,5,6,9,10,11,12,13],otherwis:[3,5,6],our:14,out:[0,2,6,12,13],out_featur:[3,5],outlier:12,output:[0,1,2,3,5,10,11],over:[2,3,5],overfit:[2,6,12,13],overrid:5,overridden:[3,5],overview:14,overwritten:0,own:[3,5,14],p:[0,2,6,8,9,10,11,12],p_:[2,6],packag:[0,7,14],pair:[2,6],panda:14,paper:[0,12],parallel:[2,6],param:[0,3,5],paramet:[0,1,2,3,5,6,8,9,10,11,12,14],parse_arg:1,parser:1,part:[3,5],partial:13,particular:[3,5,6,11],pass:[0,2,3,5,6,12],path:[3,5],per:[6,10],percent:2,perfect:[0,11],perfectli:0,perform:[0,2,3,5,11],persist:[3,5],perturb:2,pickl:[3,5],pickleabl:[3,5],pin:[3,5],pip:[13,14],pipelin:[0,5],place:[3,5],plot_exampl:14,plt:14,point:[3,5,13],poor:2,poorli:[2,9],popular:13,posit:[3,5,10],possibl:[0,2,3,5,6,8,9,11,12],potenti:[2,12,13],practic:2,pragma:11,pre:[3,5],precomput:9,pred:[0,6,10],pred_prob:[0,2,6,8,9,10,12,13,14],pred_proba:2,pred_probs_list:12,predict:[0,2,5,6,8,9,10,12,13],predict_proba:[0,2,5,14],predicted_neq_given:6,prefer:12,prefix:[3,5],prepend:[3,5],preserv:[6,10],pretti:10,previous:[2,6,12],print:[0,3,5,6,10,11,12,14],print_freq:1,print_inverse_noise_matrix:10,print_joint_matrix:10,print_noise_matrix:10,print_square_matrix:10,prior:[2,6,9,11],pro:2,prob_label:12,prob_s_eq_1:10,probabl:[0,2,5,6,8,9,10,11,12,13],problem:11,process:[6,14],produc:11,prone:0,proper:10,proport:2,provid:[0,2,3,5,6,9,11,12,13],proxi:2,prune:[0,2,6,13],prune_by_class:6,prune_by_noise_r:6,prune_count_matrix:6,prune_counts_matrix:6,ps:[2,9],pseudocod:11,pu:[0,10],pulearn:[0,10],py:[2,3,6,9,11],py_method:[2,9],pyplot:14,python:[6,11],pytorch:[0,1,3,5],pyx:[6,9],qualifi:[3,5],qualiti:[6,8,12,13],queri:[3,5],quickli:1,quickstart:14,rais:[3,5],randint:10,random:[0,2,10,11],randomli:11,randomly_distribute_n_balls_into_k_bin:11,rang:[2,6,9,10,11,14],rank:[2,6],rank_bi:12,rank_by_kwarg:[6,12],ranked_label_issu:14,rare:6,rate:[0,1,2,6,10,11],rate_schedul:1,re:[0,3,5],reach:10,read:8,real:13,reason:[0,2,3,5],receiv:[0,3,5],recip:[3,5],recomput:2,record:[3,5],recurs:[3,5],reduc:[6,13],reduce_prune_count:6,refer:[3,5],referenc:[3,5],reflect:6,regist:[3,5],register_backward_hook:[3,5],register_buff:[3,5],register_forward_hook:[3,5],register_forward_pre_hook:[3,5],register_full_backward_hook:[3,5],register_paramet:[3,5],regress:[0,2,13],rel:6,relat:[0,2],reliabl:13,relu:14,remain:0,remov:[3,5,6,13,14],removablehandl:[3,5],remove_dupl:[3,5],remove_noise_from_class:10,renorm:12,repeat:2,repeatedli:2,replac:11,repres:[2,6,9,10],represent:[3,5,10],requir:[0,2,3,5,6,9,10,11,12],requires_grad:[3,5],requires_grad_:[3,5],research:6,reshap:14,resolv:[3,5],respect:[3,5],rest:6,result:[0,2,3,5,10],retain:10,return_count:10,return_indices_of_off_diagon:2,return_indices_ranked_bi:[6,13,14],robust:[0,9],roc:6,round:[6,10,11],round_plac:10,round_preserving_row_tot:10,round_preserving_sum:10,row:[0,2,6,8,9,10,12],rp:0,run:[3,5],running_mean:[3,5],running_var:[3,5],runtim:[3,5],runtimeerror:[3,5],s:[0,2,3,5,6,8,10,12,13],s_label:2,sai:[3,5],same:[2,3,5,6,10,12,13],sampl:[0,2,6,8,12,13],sample_weight:[0,5],satisfi:[6,11],save:[3,5],scenario:12,schedul:1,scheme:12,scikit:[5,13],score:[0,2,6,8,12,13],see:[0,2,3,5,6,10,12,14],seed:[0,2,5,11],self:[0,1,2,3,5,12],self_confid:[6,12,13,14],separ:[2,6,12],sequenti:[3,5,14],serial:[3,5],set:[0,2,3,5,6,10,11,12,13,14],set_extra_st:[3,5],set_param:[0,5],set_to_non:[3,5],sever:[3,5],shall:[3,5],shape:[0,1,2,6,8,9,10,11,12],share:6,share_memori:[3,5],share_memory_:[3,5],short_titl:10,shorthand:2,shortlist:14,should:[0,2,3,5,6,8,9,10,12,13],show:[3,5,10],shown:3,signatur:[3,5],silent:[3,5],similar:[3,5,10],similarli:[3,5],simpl:[0,3,5,12,14],simplenet:5,simplest:6,simpli:2,simplif:2,simplifi:2,sinc:[3,5],singl:[2,3,5,6],single_label:2,size:[3,5],sklearn:[0,2,5,10,13,14],sklearn_digits_test_s:5,skorch:[0,14],slow:2,small:[2,11],smaller:11,smallest:6,so:[0,2,3,5,6,13],softmax:14,some:[0,2,3,5,6,9,10,12,13],someth:[3,5,12],sometim:2,sort:[12,14],sourc:[0,1,2,3,5,6,8,9,10,11,12,13],specif:14,specifi:[2,3,5,6,12,13],speed:[2,6,14],split:[0,2],squar:10,stabl:7,start:[3,13,14],state:[0,2,3,5,10],state_dict:[3,5],statement:[0,6,12],still:5,stochast:11,storag:[3,5],store:[0,3,5],str:[2,3,5,6,9,10,12],strict:[3,5],strictli:[3,5],string:[3,5,6,10],subclass:[3,5],subfield:0,submodul:[3,5],subobject:[0,5],subplot:14,subsequ:[3,5],subset:[2,6,12],subtract:[6,12],sum:[0,2,9,10,11],supervis:0,support:[2,3,5,6],suppress:[0,12],sure:[0,6,10],suspici:14,t:[1,2,3,5],t_destin:[3,5],take:[3,5,12],target:[0,1,3,5,14],task:[0,2,6,12],teach:[1,3],technic:[3,5],tell:[1,13],templat:[0,5],tend:9,tensor:[1,3,5],tensorflow:0,term:[2,6,10],test:[0,5],test_batch_s:5,test_load:1,test_set:5,text:14,th:12,than:[0,2,6,10,11,12],thei:[0,1,2,3,5,6,7,10],them:[0,2,3,5],theori:0,therefor:[2,12],thi:[0,1,2,3,5,6,8,9,10,11,12,13,14],thing:5,those:2,thousand:13,thread:6,three:[0,2],threshold:[0,2,6,12],thu:[3,5],tight_layout:14,tild:0,time:[2,3,5,10],timeit:10,tip:6,titl:[10,14],tl:2,to_empti:[3,5],to_numpi:14,todo:6,too:[2,6],top1:1,top5:1,top:[10,14],top_bn:3,top_nam:10,topk:1,torch:[1,3,5,14],torchvis:14,total:[2,6,10],towardsdatasci:8,trace:[2,11],tractabl:11,tradition:10,train:[0,1,2,3,5,6,10,12,14],train_idx:5,train_label:5,train_load:[1,5],train_loss:14,transit:[3,5],transpos:6,tri:[3,5,11],true_label:[0,2,6,9,10,11],true_labels_class_count:9,truth:2,tupl:[0,2,3,5],tutori:14,two:[0,2,3,5,13],type:[0,2,3,5,6,8,9,10,11,12],typevar:[3,5],typic:[3,5],uncertainti:[0,8,12],unchang:[3,5],under:[2,3,5],understand:2,unexpect:[3,5],unexpected_kei:[3,5],uniform:[2,12],uniformli:[6,11],union:[3,5],uniqu:[2,10],unknown:2,unless:[3,5],unlik:[6,8],unsuit:[2,6,12,13],until:[6,11],up:[2,6,11,14],updat:[0,2,5],us:[0,1,2,3,5,6,7,8,9,11,12,13,14],user:[3,5,6],util:[1,3,5,7],valid:[0,2,6,8,9,11,12,13,14],valid_acc:14,valid_loss:14,valid_noise_matrix:11,valu:[0,1,2,3,5,6,8,9,10,11],value_count:10,variabl:[2,10,14],varieti:0,ve:13,vector:[0,2,6,9,10,12],verbos:[0,6,11,12],versa:2,version:[3,5,7],versionwarn:10,versu:2,via:[0,5,12,13,14],vice:2,view:[3,5,14],w:12,wa:[2,6,10,12],wai:[0,2],warn:[6,10],warning_already_issu:10,warning_str:10,we:[0,2,3,5,10,11,13,14],weak:0,weight:[0,1,3,5,12],weight_ensemble_members_bi:12,weird:12,well:[0,2,3,5,9,12,14],were:[2,5,13],what:[1,6,11],when:[0,2,3,5,6,9,10,11,12,13,14],where:[0,2,6,10,11,12,13,14],whether:[3,5,10,14],which:[0,2,3,5,6,9,12,13],whichev:12,whole:[3,5,14],whose:[3,5,6],why:10,wiki:8,wikipedia:8,window:6,within:[2,3,5,7],without:[0,3,5,11],wmz:6,won:[3,5],word:2,work:[0,2,3,5,6,9,12,13],world:13,would:[0,2,3,5,6],wrap:[0,3,5,14],wrapper:0,x:[0,1,2,3,5,6,8,9,10,11,12,13,14],x_test:0,x_train:0,xpu:[3,5],y:[0,2,5,9,10,11,13,14],y_1:1,y_2:1,yield:[3,5,11],you:[0,2,3,5,6,11,12,13,14],your:[0,2,3,5,6,12],yourmodel:0,zero:[2,3,5,11],zero_grad:[3,5],zoom:14},titles:["classification","coteaching","count","cifar.cnn","example_models","mnist_pytorch","filter","internal","label_quality_utils","latent_algebra","util","noise_generation","rank","cleanlab documentation","Image Classification with PyTorch and Cleanlab"],titleterms:{"1":[13,14],"2":[13,14],"3":[13,14],"4":14,"5":14,"6":14,"7":14,cifar:3,classif:[0,14],classifi:14,cleanlab:[13,14],cnn:3,compat:14,comput:14,coteach:1,count:2,data:13,dataset:14,defin:14,depend:14,document:13,ensur:14,error:[13,14],exampl:14,example_model:4,fetch:14,filter:6,find:[13,14],imag:14,instal:[13,14],intern:7,label:[13,14],label_quality_util:8,latent_algebra:9,learn:14,like:14,mislabel:14,mnist:14,mnist_pytorch:5,model:[13,14],most:14,next:14,noise_gener:11,noisi:13,out:14,potenti:14,predict:14,probabl:14,pytorch:14,quickstart:13,rank:12,requir:14,review:14,robust:13,run:14,s:14,sampl:14,scale:14,scikit:14,some:14,train:13,util:10,what:14,your:[13,14]}})