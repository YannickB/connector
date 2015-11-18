Search.setIndex({envversion:46,filenames:["api/api_backend","api/api_backend_adapter","api/api_binder","api/api_channels","api/api_connector","api/api_event","api/api_exception","api/api_mapper","api/api_queue","api/api_runner","api/api_session","api/api_synchronizer","guides/bootstrap_connector","guides/code_overview","guides/concepts","guides/jobrunner","guides/multiprocessing","index","project/changes","project/contribute","project/contributors","project/license","project/roadmap"],objects:{"connector.backend":{Backend:[0,2,1,""]},"connector.backend.Backend":{get_class:[0,3,1,""],match:[0,3,1,""],parent:[0,1,1,""],register_class:[0,3,1,""],service:[0,1,1,""],version:[0,1,1,""]},"connector.backend_model":{ConnectorBackend:[0,2,1,""],ExternalBinding:[0,2,1,""]},"connector.backend_model.ConnectorBackend":{get_backend:[0,3,1,""],name:[0,1,1,""],version:[0,1,1,""]},"connector.backend_model.ExternalBinding":{sync_date:[0,1,1,""]},"connector.connector":{Binder:[4,2,1,""],ConnectorEnvironment:[4,2,1,""],ConnectorUnit:[4,2,1,""],MetaConnectorUnit:[4,2,1,""],get_openerp_module:[4,5,1,""],install_in_connector:[4,5,1,""],is_module_installed:[4,5,1,""],pg_try_advisory_lock:[4,5,1,""]},"connector.connector.Binder":{bind:[4,3,1,""],to_backend:[4,3,1,""],to_openerp:[4,3,1,""],unwrap_binding:[4,3,1,""],unwrap_model:[4,3,1,""]},"connector.connector.ConnectorEnvironment":{"_propagate_kwargs":[4,1,1,""],backend:[4,1,1,""],backend_record:[4,1,1,""],create_environment:[4,7,1,""],env:[4,1,1,""],get_connector_unit:[4,3,1,""],model:[4,1,1,""],model_name:[4,1,1,""],pool:[4,1,1,""],session:[4,1,1,""],set_lang:[4,3,1,""]},"connector.connector.ConnectorUnit":{advisory_lock_or_retry:[4,3,1,""],binder_for:[4,3,1,""],env:[4,1,1,""],environment:[4,1,1,""],get_binder_for_model:[4,3,1,""],get_connector_unit_for_model:[4,3,1,""],localcontext:[4,1,1,""],match:[4,7,1,""],model:[4,1,1,""],unit_for:[4,3,1,""]},"connector.connector.MetaConnectorUnit":{for_model_names:[4,1,1,""],model_name:[4,1,1,""]},"connector.event":{Event:[5,2,1,""],on_record_create:[5,6,1,""],on_record_unlink:[5,6,1,""],on_record_write:[5,6,1,""]},"connector.event.Event":{fire:[5,3,1,""],has_consumer_for:[5,3,1,""],subscribe:[5,3,1,""],unsubscribe:[5,3,1,""]},"connector.exception":{ChannelNotFound:[6,4,1,""],ConnectorException:[6,4,1,""],FailedJobError:[6,4,1,""],IDMissingInBackend:[6,4,1,""],InvalidDataError:[6,4,1,""],JobError:[6,4,1,""],ManyIDSInBackend:[6,4,1,""],MappingError:[6,4,1,""],NetworkRetryableError:[6,4,1,""],NoConnectorUnitError:[6,4,1,""],NoExternalId:[6,4,1,""],NoSuchJobError:[6,4,1,""],NotReadableJobError:[6,4,1,""],NothingToDoJob:[6,4,1,""],RetryableJobError:[6,4,1,""]},"connector.jobrunner":{channels:[3,0,0,"-"],runner:[15,0,0,"-"]},"connector.jobrunner.channels":{Channel:[15,2,1,""],ChannelJob:[3,2,1,""],ChannelManager:[3,2,1,""],ChannelQueue:[3,2,1,""],PriorityQueue:[3,2,1,""],SafeSet:[3,2,1,""]},"connector.jobrunner.channels.Channel":{configure:[3,3,1,""],fullname:[3,1,1,""],get_jobs_to_run:[3,3,1,""],get_subchannel_by_name:[3,3,1,""],remove:[3,3,1,""],set_done:[3,3,1,""],set_failed:[3,3,1,""],set_pending:[3,3,1,""],set_running:[3,3,1,""]},"connector.jobrunner.channels.ChannelManager":{get_channel_by_name:[3,3,1,""],get_channel_from_config:[3,3,1,""],get_jobs_to_run:[3,3,1,""],notify:[3,3,1,""],parse_simple_config:[3,7,1,""],remove_db:[3,3,1,""],remove_job:[3,3,1,""],simple_configure:[3,3,1,""]},"connector.jobrunner.channels.ChannelQueue":{add:[3,3,1,""],pop:[3,3,1,""],remove:[3,3,1,""]},"connector.jobrunner.channels.PriorityQueue":{add:[3,3,1,""],pop:[3,3,1,""],remove:[3,3,1,""]},"connector.jobrunner.channels.SafeSet":{remove:[3,3,1,""]},"connector.jobrunner.runner":{ConnectorRunner:[9,2,1,""],Database:[9,2,1,""]},"connector.jobrunner.runner.ConnectorRunner":{close_databases:[9,3,1,""],get_db_names:[9,3,1,""],initialize_databases:[9,3,1,""],process_notifications:[9,3,1,""],run:[9,3,1,""],run_jobs:[9,3,1,""],stop:[9,3,1,""],wait_notification:[9,3,1,""]},"connector.jobrunner.runner.Database":{close:[9,3,1,""],select_jobs:[9,3,1,""],set_job_enqueued:[9,3,1,""]},"connector.queue":{job:[8,0,0,"-"],model:[8,0,0,"-"],queue:[8,0,0,"-"],worker:[8,0,0,"-"]},"connector.queue.job":{Job:[8,2,1,""],JobStorage:[8,2,1,""],OpenERPJobStorage:[8,2,1,""],job:[8,5,1,""],related_action:[8,5,1,""]},"connector.queue.job.Job":{args:[8,1,1,""],cancel:[8,3,1,""],canceled:[8,1,1,""],date_created:[8,1,1,""],date_done:[8,1,1,""],date_enqueued:[8,1,1,""],date_started:[8,1,1,""],description:[8,1,1,""],eta:[8,1,1,""],exc_info:[8,1,1,""],func:[8,1,1,""],func_name:[8,1,1,""],func_string:[8,1,1,""],kwargs:[8,1,1,""],max_retries:[8,1,1,""],model_name:[8,1,1,""],perform:[8,3,1,""],postpone:[8,3,1,""],priority:[8,1,1,""],related_action:[8,3,1,""],result:[8,1,1,""],retry:[8,1,1,""],set_done:[8,3,1,""],set_enqueued:[8,3,1,""],set_failed:[8,3,1,""],set_pending:[8,3,1,""],set_started:[8,3,1,""],state:[8,1,1,""],user_id:[8,1,1,""],uuid:[8,1,1,""],worker_uuid:[8,1,1,""]},"connector.queue.job.JobStorage":{exists:[8,3,1,""],load:[8,3,1,""],store:[8,3,1,""]},"connector.queue.job.OpenERPJobStorage":{db_record:[8,3,1,""],db_record_from_uuid:[8,3,1,""],enqueue:[8,3,1,""],enqueue_resolve_args:[8,3,1,""],exists:[8,3,1,""],load:[8,3,1,""],store:[8,3,1,""]},"connector.queue.model":{JobChannel:[8,2,1,""],JobFunction:[8,2,1,""],QueueJob:[8,2,1,""],QueueWorker:[8,2,1,""],RequeueJob:[8,2,1,""]},"connector.queue.model.JobChannel":{complete_name:[8,1,1,""],job_function_ids:[8,1,1,""],name:[8,1,1,""],name_get:[8,3,1,""],parent_id:[8,1,1,""],parent_required:[8,3,1,""],unlink:[8,3,1,""],write:[8,3,1,""]},"connector.queue.model.JobFunction":{channel:[8,1,1,""],channel_id:[8,1,1,""],name:[8,1,1,""]},"connector.queue.model.QueueJob":{active:[8,1,1,""],autovacuum:[8,3,1,""],button_done:[8,3,1,""],channel:[8,1,1,""],company_id:[8,1,1,""],date_created:[8,1,1,""],date_done:[8,1,1,""],date_enqueued:[8,1,1,""],date_started:[8,1,1,""],eta:[8,1,1,""],exc_info:[8,1,1,""],func:[8,1,1,""],func_name:[8,1,1,""],func_string:[8,1,1,""],job_function_id:[8,1,1,""],max_retries:[8,1,1,""],model_name:[8,1,1,""],name:[8,1,1,""],open_related_action:[8,3,1,""],priority:[8,1,1,""],requeue:[8,3,1,""],result:[8,1,1,""],retry:[8,1,1,""],state:[8,1,1,""],user_id:[8,1,1,""],uuid:[8,1,1,""],worker_id:[8,1,1,""],write:[8,3,1,""]},"connector.queue.model.QueueWorker":{assign_jobs:[8,3,1,""],assign_then_enqueue:[8,3,1,""],date_alive:[8,1,1,""],date_start:[8,1,1,""],enqueue_jobs:[8,3,1,""],job_ids:[8,1,1,""],pid:[8,1,1,""],uuid:[8,1,1,""],worker_timeout:[8,1,1,""]},"connector.queue.model.RequeueJob":{job_ids:[8,1,1,""],requeue:[8,3,1,""]},"connector.queue.queue":{JobsQueue:[8,2,1,""]},"connector.queue.queue.JobsQueue":{dequeue:[8,3,1,""],enqueue:[8,3,1,""]},"connector.queue.worker":{Worker:[8,2,1,""],WorkerWatcher:[8,2,1,""],start_service:[8,5,1,""]},"connector.queue.worker.Worker":{enqueue_job_uuid:[8,3,1,""],job_storage_class:[8,1,1,""],queue_class:[8,1,1,""],run:[8,3,1,""],run_job:[8,3,1,""]},"connector.queue.worker.WorkerWatcher":{available_db_names:[8,8,1,""],check_alive:[8,3,1,""],run:[8,3,1,""],worker_for_db:[8,3,1,""],worker_lost:[8,3,1,""]},"connector.session":{ConnectorSession:[10,2,1,""],ConnectorSessionHandler:[10,2,1,""]},"connector.session.ConnectorSession":{browse:[10,3,1,""],change_context:[10,3,1,""],change_user:[10,3,1,""],close:[10,3,1,""],commit:[10,3,1,""],context:[10,1,1,""],cr:[10,1,1,""],create:[10,3,1,""],env:[10,1,1,""],from_env:[10,7,1,""],is_module_installed:[10,3,1,""],pool:[10,1,1,""],read:[10,3,1,""],rollback:[10,3,1,""],search:[10,3,1,""],uid:[10,1,1,""],unlink:[10,3,1,""],write:[10,3,1,""]},"connector.session.ConnectorSessionHandler":{context:[10,1,1,""],db_name:[10,1,1,""],session:[10,3,1,""],uid:[10,1,1,""]},"connector.unit":{backend_adapter:[1,0,0,"-"],mapper:[7,0,0,"-"],synchronizer:[11,0,0,"-"]},"connector.unit.backend_adapter":{BackendAdapter:[1,2,1,""],CRUDAdapter:[1,2,1,""]},"connector.unit.backend_adapter.CRUDAdapter":{"delete":[1,3,1,""],create:[1,3,1,""],read:[1,3,1,""],search:[1,3,1,""],search_read:[1,3,1,""],write:[1,3,1,""]},"connector.unit.mapper":{ExportMapChild:[7,2,1,""],ExportMapper:[7,2,1,""],ImportMapChild:[7,2,1,""],ImportMapper:[7,2,1,""],MapChild:[7,2,1,""],MapOptions:[7,2,1,""],MapRecord:[7,2,1,""],Mapper:[7,2,1,""],MappingDefinition:[7,2,1,""],MetaMapper:[7,2,1,""],backend_to_m2o:[7,5,1,""],changed_by:[7,5,1,""],convert:[7,5,1,""],follow_m2o_relations:[7,5,1,""],m2o_to_backend:[7,5,1,""],mapping:[7,5,1,""],none:[7,5,1,""],only_create:[7,5,1,""]},"connector.unit.mapper.ImportMapChild":{format_items:[7,3,1,""]},"connector.unit.mapper.MapChild":{format_items:[7,3,1,""],get_item_values:[7,3,1,""],get_items:[7,3,1,""],skip_item:[7,3,1,""]},"connector.unit.mapper.MapRecord":{parent:[7,1,1,""],source:[7,1,1,""],update:[7,3,1,""],values:[7,3,1,""]},"connector.unit.mapper.Mapper":{children:[7,1,1,""],direct:[7,1,1,""],finalize:[7,3,1,""],map_methods:[7,1,1,""],map_record:[7,3,1,""],options:[7,1,1,""]},"connector.unit.mapper.MappingDefinition":{changed_by:[7,1,1,""],only_create:[7,1,1,""]},"connector.unit.synchronizer":{DeleteSynchronizer:[11,1,1,""],Deleter:[11,2,1,""],ExportSynchronizer:[11,1,1,""],Exporter:[11,2,1,""],ImportSynchronizer:[11,1,1,""],Importer:[11,2,1,""],Synchronizer:[11,2,1,""]},"connector.unit.synchronizer.Synchronizer":{backend_adapter:[11,1,1,""],binder:[11,1,1,""],mapper:[11,1,1,""],run:[11,3,1,""]},connector:{backend:[0,0,0,"-"],backend_model:[0,0,0,"-"],connector:[4,0,0,"-"],event:[5,0,0,"-"],exception:[6,0,0,"-"],session:[10,0,0,"-"]}},objnames:{"0":["py","module","Python module"],"1":["py","attribute","Python attribute"],"2":["py","class","Python class"],"3":["py","method","Python method"],"4":["py","exception","Python exception"],"5":["py","function","Python function"],"6":["py","data","Python data"],"7":["py","classmethod","Python class method"],"8":["py","staticmethod","Python static method"]},objtypes:{"0":"py:module","1":"py:attribute","2":"py:class","3":"py:method","4":"py:exception","5":"py:function","6":"py:data","7":"py:classmethod","8":"py:staticmethod"},terms:{"0x4f1ae60":8,"0x4f3e190":5,"0x4f3e210":5,"0x4f3e250":5,"__doc__":8,"__init__":12,"__name__":8,"__openerp__":12,"_backend_typ":[0,12],"_base_backend_adapt":18,"_base_bind":18,"_base_mapp":18,"_build":19,"_call":13,"_column":0,"_context":10,"_descript":[0,12,13],"_export_invoic":13,"_get_lines_info":13,"_inherit":[0,4,8,12,13,14],"_magento_model":13,"_map_method":7,"_model_nam":[0,13],"_modul":4,"_name":[0,4,12,13,18],"_propagate_kwarg":4,"_removal_interv":8,"_select_vers":[0,12],"_sql_constraint":0,"abstract":[0,4,10],"b\u00e9al":20,"boolean":[4,7,8],"break":8,"case":[0,7,8,10,13,16,21],"char":[0,8,12,13],"class":[0,1,3,4,5,7,8,9,10,11],"default":[3,4,7,8,12,13,14,15,18],"export":[7,8,11,13,14,18],"final":[0,5,7,8,17,21],"float":7,"function":[4,5,7,8,13,14,18,21],"import":[3,4,7,11,12,13,14,17,18,21],"int":[0,4,8],"jo\u00ebl":20,"long":[7,12,21],"new":[3,4,5,9,10,12,13,14,15,17,18],"null":[8,13],"public":21,"return":[0,1,3,4,5,7,8,10,11,12,13,18,21],"rh\u00f4nalia":20,"s\u00e9bastien":20,"st\u00e9phane":[18,20],"static":8,"true":[0,3,4,5,6,7,8,9,10,12,13,18],"try":[4,8,16],"void":21,"while":[9,15],a_funct:7,abil:[14,17,21],abl:[0,4,5,8,13,14],abort:[9,15],about:[13,21],abov:[0,3,7,13,15,21],absenc:21,absent:3,absolut:21,abstractmodel:[0,12,18],accept:[9,15,19,21],access:[7,8,13,18,21],accompani:[14,21],accomplish:21,accord:[1,3,4,6,7,8,13,15,21],account:13,accountinvoiceadapt:13,accross:14,achiev:21,acknowledg:21,acquir:[4,21],across:[0,14,21],acson:[17,20],act_window:8,action:[4,8,14,16,18,21],activ:[5,7,8,21],actual:[3,9,15,19,21],adapt:0,add:[0,3,7,8,12,14,17,18,19,21,22],add_checkpoint:12,addit:[13,17,21],addon:[0,4,9,10,12,13,15,18],address:21,adopt:21,advanc:0,advancedimportmapp:0,advers:21,advic:19,advis:21,advisori:4,advisory_lock_or_retri:4,affect:21,affero:21,affirm:21,after:[3,4,6,7,8,9,15,19,21],against:21,aggreg:21,agpl3:21,agpl:[12,17,21],agre:[21,22],agreement:21,akret:[17,20],alexandr:20,alia:[7,8,11],aliv:[8,14],all:[0,3,5,7,8,9,13,14,15,17,18,19,20,21,22],alleg:21,allow:[0,7,8,10,15,18,20,21],along:21,alongsid:16,alreadi:[0,3,7,8,13,21],also:[0,3,5,7,8,12,13,14,15,18,19,21],altern:[9,15,21],although:[9,15],alwai:[5,7,8,10,14],amazon:17,among:21,amount:20,amp:17,ancillari:21,ani:[4,7,9,13,15,17,21],anonym:[9,15],anoth:[0,4,7,9,14,15,18],anti:21,anybox:[19,20],anyon:21,anyth:[4,14,21],apertoso:20,api:[0,3,4,9,10,12,13],app:17,appear:8,appli:[3,7,14,21],applic:[3,12,15,21],appreci:16,approach:19,appropri:[0,21],approxim:21,arbitrari:[3,7],archiv:21,arg:[0,1,4,5,7,8,9,10],argument:[5,7,8,10,16,18],aris:21,around:14,arrang:21,arriv:8,arthur:20,articl:21,articul:14,ask:[0,9,14,15],assert:[8,21],asset:21,assign:[7,8,14,18],assign_job:8,assign_then_enqueu:8,associ:[3,8,15,21],assum:[4,7,21],assumpt:21,asynchron:17,atom:8,attach:[3,8,10,21],attempt:[9,15,21],attr:[4,7],attribut:[0,3,4,7,8,18,21],auguria:20,author:[12,21],auto:3,auto_join:8,autocr:[3,15],automat:[8,9,15,18,21],autosub:3,autovacuum:8,avail:[0,3,7,8,12,13,14,15,17,21],available_db_nam:8,avanzosc:20,avoid:[14,18],awai:21,back:16,backend_adapt:[1,4,11,13,14,18],backend_id:[0,12,13],backend_model:0,backend_record:[4,12],backend_to_m2o:7,backendadapt:[1,4,11,13,14],backward:18,baconni:[17,20],bar:5,base:[0,1,3,4,5,6,7,8,9,10,11,14],base_class:[0,4],base_import_async:[9,15],basemodel:[7,10,18],basi:7,basic:[0,4,8,14,21],batteri:16,beau:20,becaus:[0,3,9,11,12,13,15,16,18,21],becom:21,bee:[5,20],been:[5,6,7,8,9,15,17,18,20,21],befor:[3,7,8,9,15],begin:4,behalf:21,behavior:0,believ:21,bello:20,belong:[13,19],below:[14,21],benefit:21,benoit:20,besid:12,bessi:20,best:21,better:21,between:[0,4,8,13,14,17,21],beyond:21,bidoul:[18,20],bin:19,bind:[0,4,7,8],binder_for:[4,14,18],binding_id:[4,13],bit:19,bitbucket:19,block:[17,18],bodi:21,boilerpl:12,bool:[0,8],bootstrap:[12,19],both:[4,14,21],box:8,brief:21,broad:14,broken:18,brows:[4,10,12,13,18],browsabl:4,browse_record:4,buffer:22,bug:19,build:[7,12,13,17,19],buildout:[16,19],built:4,builtin:16,burn:20,busi:[12,21],button:[8,18],button_don:8,call:[0,4,5,7,8,13,14,18,21],callabl:8,campaign:17,camptocamp:[17,20],can:[0,1,3,4,5,6,7,8,12,13,14,15,18,19,21,22],cancel:8,candid:8,cannot:[4,6,21],capabl:[4,14],capac:[3,15,18],care:7,carri:21,cascad:[0,8,13],cat:7,catalog:[0,19],categ_id:7,categori:[0,4,12],caus:[6,21],cautious:0,ceas:21,certain:[17,21],cessat:21,cfg:19,chambreuil:20,chanc:[9,15],chang:[0,4,7,8,17],change_context:[10,12,18],change_us:10,changed_bi:7,changed_by_field:18,channel_config_str:9,channel_id:8,channel_nam:3,channeljob:3,channelmanag:3,channelnotfound:6,channelqueu:3,character:21,charg:21,check:[4,7,8,9,15],check_al:8,child:[0,7,14],children:[3,7],choic:17,choos:[13,21],christoph:20,circumst:[0,21],circumvent:21,civil:21,claim:21,classmethod:[3,4,10],clean:18,clear:[21,22],client:[0,8],close:[9,10,21],close_databas:9,closur:7,cls_or_func:4,clutter:14,cmi:17,code:[0,7,12],coffe:12,coffee1900:12,coffee2900:12,coffee_id:12,coffee_model:12,coffeebackend:12,coffeebind:12,collect:21,colpaert:20,column1:8,column2:8,column:[0,8],com:[18,19,22],combel:20,combin:21,come:[3,14,15,21],command:[7,16,21],comment:13,commerc:[14,17,19],commerci:21,commit:[8,10,18,21],common:[13,14,18,21],commun:[18,21],comodel_nam:[0,8,12,13],compani:[17,20],company_id:8,compar:3,compat:[4,9,12,15,17],compet:[3,15],compil:[19,21],complet:[3,13,19],complete_nam:8,compli:21,complianc:21,compon:21,comput:[7,21],compute_st:7,concept:13,concern:[0,21],concret:[0,7,12,14],concurr:[4,15],condit:21,config:[3,16],config_str:3,configfil:16,configur:[3,7,9,12],confirm:[9,15],conflict:0,confus:18,connect:[9,12,15,17,21],connector:[0,1,3],connector_backend:[0,14],connector_coffe:12,connector_ecommerc:14,connector_env:[1,4,7,11],connector_magento:19,connector_unit_class:4,connector_xxx:19,connectorbackend:0,connectordb:19,connectorenviron:[0,4,18],connectorexcept:6,connectorrunn:9,connectorsess:[0,4,5,8,10,13,14,18],connectorsessionhandl:10,connectorunit:[0,1,4,6,7,11],consequ:21,consequenti:21,consid:[3,7,8,21],consist:21,consolid:0,conspicu:21,constitut:21,constru:21,consum:[5,13,14,21],contact:21,contain:[0,4,5,7,10,14,16,18,21],content:[8,21],context:[4,8,10,12,13,14,18,21],contextu:22,continu:21,contractu:21,contradict:21,contrast:21,contribut:17,control:21,conv_typ:7,convei:21,conveni:21,convent:[10,12],convers:[7,13,14],convert:[4,7,14],convey:21,cooper:21,copi:[7,21],copyleft:21,copyright:21,corp:20,correct:[4,21],correctli:[9,15],correspond:[4,7,8,21],cost:21,could:[0,4,6,18,21],count:8,counter:[6,18],counterclaim:21,countri:[7,21],country_id:7,cours:12,court:21,coven:21,cover:21,coverag:21,crash:[9,15],creat:[0,1,3,4,5,7,8,9,10,12,13,14,15,18],create_environ:4,createdb:19,creation:[3,7,14,18],criteria:1,criterion:21,crm:17,cron:[8,9,14,15],cronwork:14,cross:21,crowdfund:17,crud:[13,18],crudadapt:1,cure:21,current:[0,3,4,5,7,8,10,13,17,18],cursor:10,custom:[0,7,12,14,17,18,21],customari:21,customarili:21,dai:[8,17,21],damag:21,data:[0,6,8,11,12,13,14,18,21],databas:[8,9,10,14,15,18,19],date:[0,3,8,13,21],date_al:8,date_cr:[3,8],date_don:8,date_enqueu:8,date_start:8,datetim:[3,8,13],david:20,db_name:[3,8,9,10],db_record:8,db_record_from_uuid:8,dbname:[9,15],dead:[8,14],debonix:20,debug:[9,15],decemb:21,decid:21,declar:[0,3,7],declin:21,decor:[5,7,8,13,14],decoupl:14,dedic:[3,15,22],deem:21,def:[0,5,7,8,12,13],default_channel:8,default_lang_id:12,default_warehous:7,defect:21,defend:21,defens:21,defin:[0,6,7,13,14,18,21],definit:[0,12,21],del:20,delai:[8,11,13,14,18],delay_export_account_invoic:13,deleg:8,delet:[1,5,8,11,14,18],deletesynchron:[11,18],deni:21,denomin:21,depend:[4,12,19],deploy:[9,15],deprec:[4,16,18],depriv:21,dequeu:[3,8,15],describ:[14,16],descript:[8,12,18],design:[17,20,21],despit:3,destin:7,destroi:14,detail:[4,18,21],detect:[9,15],determin:[8,21],develop:[3,9,14],diagram:[3,15],dict:[7,8],dictionari:[3,8,18],differ:[0,3,4,8,14,21],difficult:[9,15],dijkstra:20,direct:[0,7,14,17,18,21,22],directli:21,disabl:[9,15],disclaim:21,discrimin:8,discriminatori:21,discuss:13,displai:[0,8,18,21],distinguish:21,distribut:21,dive:19,dlanguag:19,do_other_th:5,do_someth:5,do_something_product2:5,do_something_product:5,document:[3,9,12,14,18,19,21],doe:[3,4,6,7,8],doesn:4,domain:[8,10,19],done:[0,3,7,8,16,18,20],donelli:20,dot:[3,7,18],doubt:21,down:[3,9,15],downstream:[3,15,21],drupal:17,due:[9,15],duplic:[4,7],durabl:21,dure:[6,20],dwell:21,dynam:21,each:[0,4,5,7,8,9,14,15,21,22],earlier:[8,21],eas:[14,18],easi:17,easili:17,ebai:17,edit:[12,19],editor:18,eeze:20,effect:[18,21],effici:16,effort:21,either:[0,7,8,9,10,15,21],electron:21,elico:20,els:[4,12,14],email:13,embodi:21,employ:21,empti:[3,4,6,7,19],en_u:12,enabl:[9,15,21],encount:16,encourag:21,end:[4,7,10,21],enforc:[3,15,21],enova:20,enqueu:[3,8,9,14,15,16,22],enqueue_job:8,enqueue_job_uuid:8,enqueue_resolve_arg:8,ensur:[10,21],enter:21,entir:21,entiti:[12,21],env:[4,7,10,12,13,14,18],environ:[4,9,10],equal:[3,8],equival:21,eric:20,erp:17,error:[6,10,18,22],especi:19,essenti:21,establish:10,estim:8,eta:[3,8],etc:[3,15],even:[3,9,15,21],eventu:8,ever:21,everi:8,everyon:21,exact:[0,21],exampl:[0,3,4,7,8,12,13,14,15,16,17,19,21],exc_info:8,except:[0,3],excerpt:13,exclud:21,exclus:21,excus:21,execut:[3,4,5,7,8,13,14,15,21],exercis:21,exist:[0,3,4,6,7,8,9,11,12,15,19],exit:8,expect:[7,8,21],explic:3,explicitli:[7,15,21],exponenti:0,export_invoic:13,export_one_th:8,export_partn:8,export_product:8,exportmapchild:7,exportmapp:7,exportsynchron:[11,18],expos:13,express:21,expressli:21,extend:[0,7,10,14,17,21],extens:[0,8,21],extent:21,extern:[0,1,4,6,7,12,13,14],external_id:4,externalbind:0,extra_arg:8,extract:8,fabio:20,facil:[21,22],facilit:21,fail:[3,8,18,21],failedjoberror:6,failur:[6,21],fair:21,fall:16,fals:[3,4,6,7,8,12,13,15],famili:21,far:7,fashion:21,favor:[4,16,21],fayol:20,featur:12,fee:21,fell:20,few:[3,13],field:[0,5,7,8,10,12,13,14,18],field_nam:[5,18],field_valu:[5,18],file:[9,12,15,16,19,21],fill:[3,9,15],filter:[4,5,7,14],financ:17,find:[0,4,7,13,14,21],finish:[9,15],fire:[5,14],first:[3,5,8,12,16,18,21],fit:21,fix:[18,21],flexibl:17,flow:[3,13,14,15,21],flush:22,follow:[3,5,7,8,9,12,15,18,19,21],follow_m2o_rel:7,foo:5,footnot:[9,15],for_creat:7,for_model_nam:[4,18],forbid:21,forc:[7,9,13,15,17,21],form:[3,8,18,21],format:[4,7,21],format_item:7,found:[0,6,7,14,21],foundat:21,framework:[0,13,14],free:[9,15,21],freedom:21,freeed:14,french:18,from:[0,3,4,5,6,7,8,9,10,11,12,13,14,15,17,18,19,21,22],from_env:[10,18],frozendict:18,fsf:21,fulfil:21,full:[3,8,17,21],fulli:[9,15],fullnam:3,func:[4,7,8],func_nam:8,func_str:8,function_nam:8,fund:20,funder:20,further:[7,21],futur:16,fuzzi:19,gangloff:20,gener:[0,3,8,10,12,13,15,17,21],genericadapt:13,get:[3,7,8,12,13,14,15,21],get_backend:[0,4],get_binder_for_model:[4,18],get_channel_by_nam:3,get_channel_from_config:3,get_class:0,get_connector_unit:[0,4,13],get_connector_unit_for_model:[4,18],get_db_nam:9,get_environ:[12,13],get_item:7,get_item_valu:7,get_jobs_to_run:3,get_openerp_modul:4,get_subchannel_by_nam:3,gettext:19,github:[16,17,18,19,22],give:[4,8,13,14,21],given:[0,3,4,5,6,7,8,15,18,21],global:5,glpi:17,glue:0,gnu:21,goal:[9,15,21],gone:18,googl:17,goran:20,govern:21,gpl:21,grace:18,graev:20,grand:20,grant:21,graph:0,grati:21,greater:[7,9,15],greatest:21,guarante:21,guewen:[17,20],guid:12,guillaum:20,guillot:20,gusto:20,had:[6,21],halt:[9,15],handl:[0,1,3,7,8,10],handler:[9,15],hans:20,happen:[4,13,14],has_consumer_for:5,have:[0,3,4,5,6,7,8,9,12,14,15,16,18,19,21],hearten:21,help:22,helper:12,here:[0,3,7,13,14,17,18,19,20,22],hereaft:21,herit:7,hierarchi:[3,13,15],high:[3,14,17],higher:[3,8],histor:19,hold:[0,3,8],holder:21,hook:[7,14],hope:21,horizont:0,host:21,hour:8,household:21,how:[0,3],howev:[0,7,9,15,16,21],hsp:20,html:[18,19],http:[9,14,15,18,19,21,22],htw:20,human:8,ibo:20,idea:[13,14,19,21],ideal:19,identifi:21,idiom:7,idmissinginbackend:6,ignor:18,ignore_retri:[4,6],illustr:[3,15],imagin:12,immedi:[9,15],implement:[0,1,4,7,12,13,14,17,18,21],impli:21,import_record:4,importmapchild:7,importmapp:[0,7],importsynchron:[11,18],impos:21,improv:[18,21],inabl:21,inaccur:21,inact:7,inc:21,incident:21,includ:[7,16,21],include_com:13,inclus:21,incompat:18,incorpor:21,increas:[6,8],indemnif:21,independ:[16,21],index:[17,18],indic:[4,8,10],individu:21,industri:21,infinit:[3,8],info:[9,15,17],inform:[1,7,8],infring:21,inherit:[0,4,7,12,14,18],init:19,initi:[8,9,15,21],initialize_databas:9,inito:20,input_field:7,insert:[3,15],insid:18,instal:[0,4,8,9,10,12,15,18,19,21],install_in_connector:[4,18],instanc:[0,3,4,7,8,10,11,14,18],instanci:11,instanti:[4,5,18],instead:[0,18],intact:21,integ:[0,8,10],integr:13,intend:[3,4,7,8,9,21],intent:21,interact:[0,14,21],interchang:21,interest:[14,21],interf:21,interfac:[3,8,13,14,21],intermedi:15,intern:4,interpret:21,interprocess:16,interrupt:[9,15],intim:21,intl:19,introspect:7,invalid:[6,21],invaliddataerror:6,invers:8,inverse_nam:8,invoic:13,invoice_export:13,irrevoc:21,is_module_instal:[4,10],ish:7,issu:[9,15,16],itali:20,item:[3,7,13,21],items_valu:7,iter:3,itself:[8,9,12,14,15,21],jacobi:20,jean:20,job:[3,4,6],job_:8,job_function_id:8,job_id:8,job_storage_class:8,job_uuid:8,jobchannel:8,joberror:6,jobfunct:8,jobrunn:[3,9,15],jobsqueu:[8,14],jobstorag:8,join:[3,8,15],juliu:20,just:[13,18],karg:8,keep:[4,8,21,22],kei:[0,3,4,6,7,8,15,21],kernel:21,key1:10,key2:10,keyerror:3,keyword:[5,7,8,18],kind:[17,21],know:[7,8,9,10,14,15,21],knowingli:21,knowledg:21,kwarg:[0,1,4,5,7,8],kwd:[4,10],laetitia:20,lambda:8,lang:[4,12,18],lang_cod:[12,18],languag:[4,12,19,21],larger:21,last:[0,13],later:[4,6,7,8,13,21],latest:19,latter:[13,16],launch:16,launchpad:18,laurent:[18,20],law:21,lawsuit:21,lc_messag:19,lead:21,learn:17,least:[0,4,5,7,21],leav:17,lefev:20,left:12,legal:21,len:3,length:[0,8],leonardo:20,less:[3,15],let:[0,3,21],level:[3,4,14,18],liabil:21,liabl:21,librari:21,licens:[12,17],license:21,licensor:21,like:[0,7,18,21],likewis:21,limit:[0,3,7,8,10,15,21],line:[0,7,8,13,14,21],line_id:7,lines_info:13,link:[0,4,13,14,21],linko:20,list:[0,1,3,4,7,8,17,18,20,21,22],listen:[5,18],litig:21,live:4,load:[8,9,10,14,15],local:[19,21],localcontext:4,locat:[0,12,16],lock:4,lock_nam:4,log:[9,15,18,22],logfil:16,logger:22,logic:20,longer:[8,18],look:[10,12,19],loop:8,loss:21,lot:12,low:[8,18],lower:3,luc:[17,20],m2o:18,m2o_to_backend:7,machin:[12,21],made:21,magento1700:[0,13],magento2000:0,magento:[0,4,7,12,13,14,16,17,19,20],magento_backend:0,magento_country_id:7,magento_id:[0,13,18],magento_model:0,magento_ord:13,magento_order_id:13,magento_specif:0,magento_uniq:0,magentoaccountinvoic:13,magentobackend:0,magentoerpconnect:[0,19],magentoinvoicesynchron:13,magentorespartnercategori:0,mai:[3,9,11,12,15,19,21,22],mail:[17,18,21],mail_notif:13,main:[7,8,9,13,15],maintain:[9,15,17],maison:20,major:21,make:[8,9,15,17,19,21],malt:20,manag:[3,10,17,18],mandatori:[0,7,8],mani:[6,7,9,10,12,14,15,21],manner:[0,21],manual:[8,9,15],many2mani:8,many2on:[0,7,8,12,13],manyidsinbackend:6,map:[0,4,6,7],map_method:7,map_record:7,mapchild:7,mapopt:7,mapper:[0,4],mappingdefinit:7,mappingerror:6,maprecord:7,marcelo:20,march:21,mark:[3,15,20,21],martinelli:20,mask:21,match:[0,4],materi:21,mathia:20,maurer:[17,20],max_job:8,max_retri:8,maxim:[8,20],maximum:[0,3,8,15],mayb:12,mean:[3,7,8,14,15,21],measur:21,mechan:[0,3,9,15,18],medium:21,meet:21,memori:[8,9,14,15],menu:21,merchant:21,mere:21,merg:[10,18,19,21,22],messag:[9,15,18],met:21,metaclass:[4,7],metaconnectorunit:[0,4,7],metadata:14,metamapp:7,method:[0,1,4,7,8,12,14,18,21],mignon:[18,20],migrat:17,minut:8,misrepresent:21,miss:[3,18],mkdir:19,mock_job_delay_to_direct:18,mode:[16,21],model_nam:[0,4,5,8,12,13,18],modif:21,modifi:[0,7,14,18,19,21],modul:[0,3,4,8,9,10,12,14,15,16,17,19],modular:17,module_nam:[4,10],monitor:17,monk:20,more:[0,5,7,8,9,13,14,15,16,17,19,21,22],moreov:21,most:[0,13,19,21],mostli:14,msg00253:18,msg:[6,8],much:[16,18],multi:17,multicompani:18,multilin:8,multipl:[14,16],must:[3,4,8,9,12,15,16,21],myfield:7,myself:12,name:[0,3,4,5,7,8,10,12,14,15,17,18],name_get:8,name_of_the_modul:18,namedtupl:7,natur:[9,15,21],necessari:[3,8,12,14,21],need:[0,4,7,11,12,13,14,18,19,21],neither:21,net:18,network:[6,20,21],networkretryableerror:6,never:7,newer:16,next:[3,21],nicola:20,noconnectoruniterror:6,noexternalid:6,non:[3,21],noncommerci:21,none:[0,3,4,5,6,7,8,10,15,18],nor:21,normal:[3,4,8,9,15,21],nosuchjoberror:6,notat:[3,18],note:[3,12,14,15],noth:[6,12,21],nothingtodojob:6,notic:[13,21],notifi:[3,8,9,15,21,22],notreadablejoberror:6,notwithstand:21,novemb:21,now:[3,4,8,14,17,18],number:[4,6,7,8,21],object:[0,3,4,5,7,8,9,10,13,21],oblig:21,observ:[9,14,15],obtain:4,obvious:[9,15],oca:[18,19,22],occasion:21,occur:[6,10,21,22],odoo:[3,4,7,9],odoo_connector_channel:[9,15],odoo_connector_port:[9,15],offer:21,offici:21,offset:10,often:12,old:13,older:21,omit:3,on_chang:7,on_my_ev:5,on_record_cr:[5,13,14,18],on_record_unlink:[5,13],on_record_writ:[5,13,18],onc:8,ondelet:[0,8,12,13],one2mani:8,one_th:8,onli:[0,3,5,7,8,9,10,14,15,17,21,22],only_cr:7,open2bizz:20,open:[8,17,18],open_related_act:8,openbig:20,openerp:[0,4,7,8,9,10,11,12,13,15,16,17,18],openerp_id:[0,12,13],openerpjobstorag:8,oper:[8,21],opportun:21,option:[0,7,8,9,12,15,16,18,21],order:[7,10,13,14,15,20,21],order_increment_id:13,org:[19,21],organ:21,origin:[10,21],orm:18,oscommerc:17,other:[0,3,4,7,8,9,13,15,17,21],otherwis:[9,15,21],our:[12,21],out:[7,20,21],output:[7,18,21],output_field:7,output_valu:7,outsid:21,overflow:[3,15],overrid:[10,18],overridden:[0,7,8],own:[0,1,8,12,14,17,21,22],packag:21,page:17,paid:13,pair:[0,8],paper:21,paragraph:21,parallel:[9,15],paramet:[0,3,4,5,7,8,18],parent:[0,3,7,12,13,14,15],parent_id:8,parent_requir:8,pars:[3,22],parse_simple_config:3,part:[0,12,17,21],parti:21,particular:21,partner:[0,4,8,14,18,20],partner_id:8,pass:[3,8,15,18],password:[0,12,21],past:3,patch:19,patent:21,path:[7,16],pattern:[8,14,18],payment:21,peer:21,pend:[3,7,8,9,15],per:[12,14],perform:[8,21],perman:21,permiss:21,permit:21,perpetu:21,person:[19,21],pertin:21,peter:20,pg_try_advisory_lock:4,physic:21,pickl:8,pid:8,piec:[4,13,14,17,19,21],pipelin:7,piston:20,place:[0,18,21],plan:8,pleas:[8,12],pleasur:19,plu:21,plug:14,pluggabl:14,poedit:19,point:[3,7,14,15],pointer:[14,21],poll:[9,15],pool:[0,4,8,10,13],poor:12,pop:3,popul:[9,15],port:9,portion:21,posit:18,possess:21,possibl:[0,3,7,8,13,15,18,21],post:[8,13],postgr:[4,9,15],postgresql:22,postpon:8,pot:19,power:[17,21],pprint:3,practic:21,preambl:21,precis:21,predecessor:21,prefer:[10,21],prepar:7,present:[3,21],preserv:21,prestashop:[0,12,17,19],prestashop_id:0,prestashoperpconnect:19,prevent:[4,9,15,21],previou:21,price:21,primarili:21,print:5,print_bar:5,prior:21,prioriti:[3,7,8,9,15,18],prioritis:3,priorityqueu:3,privat:21,probabl:[0,12,19],problem:[7,16,21],procedur:21,process:[8,9,14,15,16,18],process_notif:9,procur:21,produc:21,product:[0,4,5,7,9,15,21],product_id:[7,8],product_tmpl_id:7,program:21,programm:21,prohibit:21,project:12,promin:21,propag:[4,5,21],properli:8,properti:[0,3,15,18,21],propos:[12,14,17,19],protect:21,protocol:[14,21],prove:21,provid:[0,7,8,10,21],provis:21,provision:21,proxi:21,public_buildbot_buildout:19,publicli:21,publish:21,pull:[18,19,22],purpos:[4,9,15,21],pursuant:21,put:[3,4,12],python:[0,8,12,16,19],pythonpath:16,qualifi:21,qualiti:21,quantiti:7,queue:[3,6],queue_class:8,queue_job:[9,15,18],queuejob:[8,14],queuework:[8,14],rais:[3,4,8,18,20],rapidli:17,rather:[0,4,7,17],raw:[7,19],read:[1,6,8,10,14,19,21],readabl:21,readi:[3,7,9,15],readili:21,real:[8,12,13],realli:7,reason:[4,19,21],rebuild:19,receipt:21,receiv:[9,15,21],recipi:21,recogn:21,record:[0,1,4,5,7,8,10,11,12,13,14,18],record_id:[5,12,13],recordset:[4,8,10],redefin:0,redistribut:21,redmin:[0,17],refactor:18,refer:[8,14],referenc:8,refrain:21,regard:12,regardless:21,regener:21,regist:[0,4,5,14],register_class:0,registri:[0,10,14],reimplement:4,reinstat:21,rel:0,rel_id:7,relat:[0,7,8,13,14,18],related_act:8,related_action_partn:8,related_action_product:8,relationship:[7,21],releas:[4,18,21],relev:21,reli:21,relicens:21,remain:[9,15,21],remot:21,remov:[3,5,8,14,18,21],remove_db:3,remove_job:[3,9],renam:18,render:21,repair:21,repeat:19,replac:[0,5,7,9,10,14,15,18,22],report:19,repres:[0,4,8,21],request:[9,15,17,19],requeu:[8,9,15],requeuejob:8,requir:[0,7,9,12,13,15,18,21],res_id:8,res_model:8,reserv:8,reset_retri:8,resolv:[6,9,15,21],respect:[7,13,18,19,21],respond:8,respons:[7,13,21],restart:[9,15],restor:10,restrain:18,restrict:[0,8,12,13,21],result:[8,18,19,21],retain:21,retri:[4,6,8,18],retriev:8,retry_count:8,retry_eta_second:8,retry_interv:[6,8],retry_pattern:[6,8],retry_second:4,retryabl:[8,18],retryable_exampl:8,retryablejoberror:[4,6,8,18],reus:19,review:[12,14,21],revis:21,right:21,risk:[3,15,21],roadmap:17,robust:17,rollback:10,rom:21,room:[3,15],root:[3,8,9,15],rove:20,royalti:21,rule:[3,21],run:[3,8,9,11,13,14,15,16,17,18,21],run_job:[8,9],runjob:[9,15],runner:3,runtimeerror:6,safe:[9,15],safeset:3,safest:21,sai:[0,3,14,21],sake:[0,12],sale:[7,13,14,21],sales_order_invoic:13,salesforc:17,same:[0,3,4,5,7,12,13,14,15,16,18,19,21],sane:19,satisfi:21,schedul:[3,16],school:21,scope:[14,21],script:[9,15,16,18,21],search:[0,1,4,7,8,10,14,17,18],search_read:1,sebastien:20,second:[4,5,6,8,18],secondari:21,secondarili:21,section:[14,21],secur:[9,15],see:[4,7,8,12,13,14,17,19,21,22],seen:7,select:[0,8,12],select_job:9,selection_add:[0,8],self:[0,4,7,12,13,14,18],sell:21,semant:18,semiconductor:21,sent:[3,15],separ:[3,16,21],seq:3,sequenc:[3,15],sequenti:[3,8,15],serv:21,server:[8,9,15,16,21],servic:[0,14,17,20,21],session:[0,4,5,8],session_hdl:10,set:[3,8,9,13,15,17],set_don:[3,8],set_enqueu:8,set_fail:[3,8],set_job_enqueu:9,set_lang:[4,18],set_pend:[3,8],set_run:3,set_start:8,sever:[14,17],shall:21,share:[0,8,14,21],shop:20,shortcut:10,shorten:18,should:[0,3,4,5,7,8,12,14,15,16,18,19,21],show:[13,18],shut:[9,15],sic:16,side:[8,12],sight:8,sign:21,signal:[8,10,14,16],signific:21,similar:[8,21],simpl:[0,3],simple_configur:3,simplifi:13,simultan:21,sinc:[0,4,8,9,15],singl:[0,8,21],situat:[9,15],size:[0,7,8],skip:7,skip_item:7,small:[7,14],smaller:[3,8],smile:20,snip:0,so10:7,softwar:[17,20,21],sold:21,sole:21,solerp:17,solr:17,solut:[13,20,21],some:[0,1,3,7,11,12,13,14,21],somemapp:7,someth:[7,8,14,18],soon:[0,8,13],sort:8,sourc:[0,1,3,4,5,6,7,8,9,10,11,14,15,17,18,19,21],spare:21,sparingli:0,speak:[14,21],special:[1,8,12,21],specif:[0,8,13,21],specifi:[0,7,8,10,21],sphinx:19,sphinx_bootstrap_them:19,sphinxopt:19,spirit:21,spreadsheet:17,spree:17,sql:[9,15],stabl:18,stale:[9,15],standard:21,standpoint:[9,15],start:[8,9,10,13,15,17,18],start_openerp:19,start_servic:8,startup:[9,15],starv:[9,15],state:[3,4,7,8,9,15,21],statement:[9,15,21],statu:[8,21],step:[12,13,19,21],still:8,stop:[8,9,15,18,19],storag:[6,8,21],store:[0,8,13,14,18],str:[4,5,7],straightforward:13,street:7,string:[0,3,4,8,12,13,18],structur:[0,3],stuff:10,sub:[3,7,14,15],subchannel:[3,8,15],subchannel_nam:3,subclass:[0,1,4,14],subdivid:21,subject:21,sublicens:21,submap:[7,14],submit:19,subprogram:21,subscrib:[5,13,14,17],subsect:21,subsequ:8,substanti:21,succeed:22,sue:21,suffic:21,sugarcrm:17,suit:3,summaris:14,sunjka:20,supplement:21,suppli:20,support:[0,3,7,14,16,18,19,21],sure:[9,15,21],surrend:21,surviv:21,sustain:21,suzann:20,sync:4,sync_dat:[0,13],synchron:[0,4,8],synchronis:11,synchronizer1700:0,syntax:15,system:[0,1,3,13,14,15,21],tabl:[8,9,15],tag:0,take:[0,5,7,8,12,16,21],taktik:20,tangibl:21,target:[7,8,13],target_field:7,task:[0,8,13],tax:0,tax_class_id:0,tax_includ:7,techniqu:[3,13,15],technolog:21,tell:21,term:[14,21],termin:21,test:18,text:8,than:[0,3,4,7,8,9,12,15,16,18,21],thank:[17,18,20],the_thing_to_export:8,thei:[0,3,4,7,8,9,13,14,15,18,21],them:[0,3,4,7,8,9,12,14,15,16,18,20,21,22],themselv:0,therefor:[9,15,21],thi:[0,3,4,5,7,8,9,10,12,14,15,17],thing:[0,12,13,21,22],third:[0,21],those:[8,14,21],though:21,thread:[8,9,15,16,18],three:21,through:[8,9,12,15,21],thu:[7,21],ticket:17,time:[0,3,4,6,7,8,9,15,21],timedelta:8,tip:[9,15,19],to_attr:7,to_backend:4,to_openerp:[4,18],togeth:[3,14,15],too:[9,12,15],tool:[4,21],top:4,total:12,traceback:8,tracker:17,trade:21,trademark:21,transact:[4,8,10,21],transfer:21,transform:[6,7,8,13,14],transientmodel:8,transifex:18,translat:[0,4,7,8,14,18],transmiss:21,transmit:8,treat:21,treati:21,tri:4,trigger:[7,14],tupl:[0,7],tutori:14,two:[3,15,21],type:[3,4,7,8,11,12,13,17,19],typic:[0,4,7,21],uid:[4,10,13,14],under:21,unicod:18,uniqu:[0,6],unit:[1,4,7,11,14],unit_for:[4,14,18],unless:21,unlimit:[8,15,21],unlink:[8,10],unmodifi:21,unnecessari:21,unpack:21,unregist:14,unsubscrib:[5,14],until:[3,4,19,21],unwrap:4,unwrap_bind:4,unwrap_model:4,updat:[1,5,7,9,10,15,18,19,21],upon:8,upstream:[3,15,19],url:18,usabl:4,usag:[4,5,7,8,10],useless:16,user:[0,5,8,10,14,18,21],user_id:8,usernam:[0,12],usual:[0,4,7,8,13,14],utf:12,uuid:[3,8,9,18],val:[5,18],valid:[12,13,21],valu:[0,3,4,5,7,8,10,15,18],value_a:5,value_b:5,vari:12,variabl:[9,15],vaucher:20,verbatim:21,veri:[8,16],vernichon:20,version:[0,4,12,13,14,16,17,18,21],vertic:0,via:0,view:[3,8,9,14,15,18,21],view_mod:8,view_typ:8,violat:21,visibl:21,visual:[3,15],volum:21,volumetri:17,vuillard:20,wai:[0,4,9,15,21],wait:[3,8,9,15],wait_notif:9,waiv:21,waiver:21,want:[0,4,7,8,12,13],warehous:7,warehouse_id:7,warranti:21,watcher:8,watcher_:8,water:[3,15],web:[9,15,21],web_kanban:[9,15],well:[0,14,21],were:[5,18,21],wget:19,what:[4,8],whatev:21,when:[0,3,4,5,7,8,9,10,12,13,14,15,16,18,21,22],whenev:[3,15],where:[3,4,8,9,10,12,15,21],wherein:8,whether:[0,4,8,10,21],which:[0,3,4,5,7,8,10,12,13,14,15,16,18,19,21,22],who:21,whole:21,whom:21,whose:21,wide:[14,21],widespread:21,willowit:20,window:21,wipo:21,wish:21,with_context:[10,18],with_inact:7,within:[10,21],without:[3,15,21],won:[0,13],woocommerc:17,wordpress:17,work:[3,4,8],worker_for_db:8,worker_id:[8,18],worker_lost:8,worker_timeout:8,worker_uuid:8,workerwatch:[8,14],worldwid:21,would:[0,7,16,21],wrap:4,write:[1,8,10,13,14,21],written:[14,21],wrong:18,www:21,xmlrpc_port:[9,15],xxx:19,yannick:20,year:[20,21],yet:4,yield:[3,7],you:[0,8,9,10,12,13,14,15,16,19,21],your:[0,8,14,17,21],yourself:21,zabbix:17},titles:["Backend","Backend Adapter","Binder","Channels","Connector","Event","Exceptions","Mapper","Queue","Job Runner","Session","Synchronizer","Boostrapping a connector","Code Overview","Connector Concepts","Configuring channels and the job runner","Use the connector with multiprocessing workers","Odoo Connector","Changes","Contribute","Contributors","License","Roadmap"],titleterms:{"abstract":12,"break":18,"class":12,"new":19,adapt:[1,14],api:17,backend:[0,1,12,13,14],base:17,bind:[12,13,14],binder:[2,14],boostrap:12,caveat:[9,15],chang:18,channel:[3,15],checkpoint:[12,14],code:13,compat:18,concept:14,configur:15,connector:[4,12,14,16,17,19],connectorunit:[12,13,14],contribut:19,contributor:[17,20],convent:19,core:17,creat:19,declar:12,develop:17,doc:19,doe:[9,15],environ:[12,14],event:[5,13,14],except:6,featur:17,financi:[17,20],framework:17,futur:18,guid:17,how:[9,15],indic:17,inform:17,job:[8,9,13,14,15],last:17,licens:21,maintain:19,manifest:12,map:14,mapper:7,minut:17,model:[0,8,12],multiprocess:16,name:19,odoo:[12,17],overview:[13,17],project:17,queue:[8,14],refer:17,regard:17,roadmap:22,runner:[9,15],session:[10,13,14],start:19,synchron:[11,14],tabl:17,thi:19,top:17,translat:19,want:19,warn:18,what:[9,15],work:[9,15],worker:[8,16]}})