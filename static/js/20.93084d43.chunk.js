(window.webpackJsonp=window.webpackJsonp||[]).push([[20],{1350:function(e,t,o){"use strict";o.d(t,"a",function(){return a});var r=o(0);function a(e){var t=r.useState(e),o=t[0],a=t[1],i=e||o;return r.useEffect(function(){null==o&&a("mui-".concat(Math.round(1e5*Math.random())))},[o]),i}},1465:function(e,t,o){"use strict";var r=o(2),a=o(82),i=o(6),n=o(30),_=o(0),l=o(25),s=(o(4),o(8)),c=o(1315),p=o(29),d=o(10),u=o(12),m=o(1263),f=o(1904),h=o(26),b=o(1350),g=o(108),v=o(343),w=o(194),y=o(48);function k(e){return Math.round(1e5*e)/1e5}var x=!1,T=null;var O=_.forwardRef(function(e,t){var o=e.arrow,n=void 0!==o&&o,p=e.children,d=e.classes,k=e.disableFocusListener,O=void 0!==k&&k,j=e.disableHoverListener,z=void 0!==j&&j,E=e.disableTouchListener,M=void 0!==E&&E,R=e.enterDelay,q=void 0===R?100:R,L=e.enterNextDelay,P=void 0===L?0:L,S=e.enterTouchDelay,N=void 0===S?700:S,D=e.id,B=e.interactive,C=void 0!==B&&B,F=e.leaveDelay,W=void 0===F?0:F,A=e.leaveTouchDelay,I=void 0===A?1500:A,H=e.onClose,$=e.onOpen,J=e.open,V=e.placement,G=void 0===V?"bottom":V,K=e.PopperComponent,Q=void 0===K?f.a:K,U=e.PopperProps,X=e.title,Y=e.TransitionComponent,Z=void 0===Y?m.a:Y,ee=e.TransitionProps,te=Object(i.a)(e,["arrow","children","classes","disableFocusListener","disableHoverListener","disableTouchListener","enterDelay","enterNextDelay","enterTouchDelay","id","interactive","leaveDelay","leaveTouchDelay","onClose","onOpen","open","placement","PopperComponent","PopperProps","title","TransitionComponent","TransitionProps"]),oe=Object(y.a)(),re=_.useState(),ae=re[0],ie=re[1],ne=_.useState(null),_e=ne[0],le=ne[1],se=_.useRef(!1),ce=_.useRef(),pe=_.useRef(),de=_.useRef(),ue=_.useRef(),me=Object(w.a)({controlled:J,default:!1,name:"Tooltip",state:"open"}),fe=Object(a.a)(me,2),he=fe[0],be=fe[1],ge=he,ve=Object(b.a)(D);_.useEffect(function(){return function(){clearTimeout(ce.current),clearTimeout(pe.current),clearTimeout(de.current),clearTimeout(ue.current)}},[]);var we=function(e){clearTimeout(T),x=!0,be(!0),$&&$(e)},ye=function(){var e=!(arguments.length>0&&void 0!==arguments[0])||arguments[0];return function(t){var o=p.props;"mouseover"===t.type&&o.onMouseOver&&e&&o.onMouseOver(t),se.current&&"touchstart"!==t.type||(ae&&ae.removeAttribute("title"),clearTimeout(pe.current),clearTimeout(de.current),q||x&&P?(t.persist(),pe.current=setTimeout(function(){we(t)},x?P:q)):we(t))}},ke=Object(v.a)(),xe=ke.isFocusVisible,Te=ke.onBlurVisible,Oe=ke.ref,je=_.useState(!1),ze=je[0],Ee=je[1],Me=function(){var e=!(arguments.length>0&&void 0!==arguments[0])||arguments[0];return function(t){ae||ie(t.currentTarget),xe(t)&&(Ee(!0),ye()(t));var o=p.props;o.onFocus&&e&&o.onFocus(t)}},Re=function(e){clearTimeout(T),T=setTimeout(function(){x=!1},800+W),be(!1),H&&H(e),clearTimeout(ce.current),ce.current=setTimeout(function(){se.current=!1},oe.transitions.duration.shortest)},qe=function(){var e=!(arguments.length>0&&void 0!==arguments[0])||arguments[0];return function(t){var o=p.props;"blur"===t.type&&(o.onBlur&&e&&o.onBlur(t),ze&&(Ee(!1),Te())),"mouseleave"===t.type&&o.onMouseLeave&&t.currentTarget===ae&&o.onMouseLeave(t),clearTimeout(pe.current),clearTimeout(de.current),t.persist(),de.current=setTimeout(function(){Re(t)},W)}},Le=function(e){se.current=!0;var t=p.props;t.onTouchStart&&t.onTouchStart(e)},Pe=Object(h.a)(ie,t),Se=Object(h.a)(Oe,Pe),Ne=_.useCallback(function(e){Object(g.a)(Se,l.findDOMNode(e))},[Se]),De=Object(h.a)(p.ref,Ne);""===X&&(ge=!1);var Be=!ge&&!z,Ce=Object(r.a)({"aria-describedby":ge?ve:null,title:Be&&"string"===typeof X?X:null},te,p.props,{className:Object(s.a)(te.className,p.props.className),onTouchStart:Le,ref:De}),Fe={};M||(Ce.onTouchStart=function(e){Le(e),clearTimeout(de.current),clearTimeout(ce.current),clearTimeout(ue.current),e.persist(),ue.current=setTimeout(function(){ye()(e)},N)},Ce.onTouchEnd=function(e){p.props.onTouchEnd&&p.props.onTouchEnd(e),clearTimeout(ue.current),clearTimeout(de.current),e.persist(),de.current=setTimeout(function(){Re(e)},I)}),z||(Ce.onMouseOver=ye(),Ce.onMouseLeave=qe(),C&&(Fe.onMouseOver=ye(!1),Fe.onMouseLeave=qe(!1))),O||(Ce.onFocus=Me(),Ce.onBlur=qe(),C&&(Fe.onFocus=Me(!1),Fe.onBlur=qe(!1)));var We=_.useMemo(function(){return Object(c.a)({popperOptions:{modifiers:{arrow:{enabled:Boolean(_e),element:_e}}}},U)},[_e,U]);return _.createElement(_.Fragment,null,_.cloneElement(p,Ce),_.createElement(Q,Object(r.a)({className:Object(s.a)(d.popper,C&&d.popperInteractive,n&&d.popperArrow),placement:G,anchorEl:ae,open:!!ae&&ge,id:Ce["aria-describedby"],transition:!0},Fe,We),function(e){var t=e.placement,o=e.TransitionProps;return _.createElement(Z,Object(r.a)({timeout:oe.transitions.duration.shorter},o,ee),_.createElement("div",{className:Object(s.a)(d.tooltip,d["tooltipPlacement".concat(Object(u.a)(t.split("-")[0]))],se.current&&d.touch,n&&d.tooltipArrow)},X,n?_.createElement("span",{className:d.arrow,ref:le}):null))}))});t.a=Object(d.a)(function(e){return{popper:{zIndex:e.zIndex.tooltip,pointerEvents:"none"},popperInteractive:{pointerEvents:"auto"},popperArrow:{'&[x-placement*="bottom"] $arrow':{top:0,left:0,marginTop:"-0.71em",marginLeft:4,marginRight:4,"&::before":{transformOrigin:"0 100%"}},'&[x-placement*="top"] $arrow':{bottom:0,left:0,marginBottom:"-0.71em",marginLeft:4,marginRight:4,"&::before":{transformOrigin:"100% 0"}},'&[x-placement*="right"] $arrow':{left:0,marginLeft:"-0.71em",height:"1em",width:"0.71em",marginTop:4,marginBottom:4,"&::before":{transformOrigin:"100% 100%"}},'&[x-placement*="left"] $arrow':{right:0,marginRight:"-0.71em",height:"1em",width:"0.71em",marginTop:4,marginBottom:4,"&::before":{transformOrigin:"0 0"}}},tooltip:{backgroundColor:Object(p.d)(e.palette.grey[700],.9),borderRadius:e.shape.borderRadius,color:e.palette.common.white,fontFamily:e.typography.fontFamily,padding:"4px 8px",fontSize:e.typography.pxToRem(10),lineHeight:"".concat(k(1.4),"em"),maxWidth:300,wordWrap:"break-word",fontWeight:e.typography.fontWeightMedium},tooltipArrow:{position:"relative",margin:"0"},arrow:{overflow:"hidden",position:"absolute",width:"1em",height:"0.71em",boxSizing:"border-box",color:Object(p.d)(e.palette.grey[700],.9),"&::before":{content:'""',margin:"auto",display:"block",width:"100%",height:"100%",backgroundColor:"currentColor",transform:"rotate(45deg)"}},touch:{padding:"8px 16px",fontSize:e.typography.pxToRem(14),lineHeight:"".concat(k(16/14),"em"),fontWeight:e.typography.fontWeightRegular},tooltipPlacementLeft:Object(n.a)({transformOrigin:"right center",margin:"0 24px "},e.breakpoints.up("sm"),{margin:"0 14px"}),tooltipPlacementRight:Object(n.a)({transformOrigin:"left center",margin:"0 24px"},e.breakpoints.up("sm"),{margin:"0 14px"}),tooltipPlacementTop:Object(n.a)({transformOrigin:"center bottom",margin:"24px 0"},e.breakpoints.up("sm"),{margin:"14px 0"}),tooltipPlacementBottom:Object(n.a)({transformOrigin:"center top",margin:"24px 0"},e.breakpoints.up("sm"),{margin:"14px 0"})}},{name:"MuiTooltip",flip:!1})(O)},1919:function(e,t,o){"use strict";o.r(t);var r=o(0),a=o.n(r),i=o(1465),n=o(1313),_=o(21),l=["3d_rotation","ac_unit","access_alarm","access_alarms","access_time","accessibility","accessible","account_balance","account_balance_wallet","account_box","account_circle","adb","add","add_a_photo","add_alarm","add_alert","add_box","add_circle","add_circle_outline","add_location","add_shopping_cart","add_to_photos","add_to_queue","adjust","airline_seat_flat","airline_seat_flat_angled","airline_seat_individual_suite","airline_seat_legroom_extra","airline_seat_legroom_normal","airline_seat_legroom_reduced","airline_seat_recline_extra","airline_seat_recline_normal","airplanemode_active","airplanemode_inactive","airplay","airport_shuttle","alarm","alarm_add","alarm_off","alarm_on","album","all_inclusive","all_out","android","announcement","apps","archive","arrow_back","arrow_downward","arrow_drop_down","arrow_drop_down_circle","arrow_drop_up","arrow_forward","arrow_upward","art_track","aspect_ratio","assessment","assignment","assignment_ind","assignment_late","assignment_return","assignment_returned","assignment_turned_in","assistant","assistant_photo","attach_file","attach_money","attachment","audiotrack","autorenew","av_timer","backspace","backup","battery_alert","battery_charging_full","battery_full","battery_std","battery_unknown","beach_access","beenhere","block","bluetooth","bluetooth_audio","bluetooth_connected","bluetooth_disabled","bluetooth_searching","blur_circular","blur_linear","blur_off","blur_on","book","bookmark","bookmark_border","border_all","border_bottom","border_clear","border_color","border_horizontal","border_inner","border_left","border_outer","border_right","border_style","border_top","border_vertical","branding_watermark","brightness_1","brightness_2","brightness_3","brightness_4","brightness_5","brightness_6","brightness_7","brightness_auto","brightness_high","brightness_low","brightness_medium","broken_image","brush","bubble_chart","bug_report","build","burst_mode","business","business_center","cached","cake","call","call_end","call_made","call_merge","call_missed","call_missed_outgoing","call_received","call_split","call_to_action","camera","camera_alt","camera_enhance","camera_front","camera_rear","camera_roll","cancel","card_giftcard","card_membership","card_travel","casino","cast","cast_connected","center_focus_strong","center_focus_weak","change_history","chat","chat_bubble","chat_bubble_outline","check","check_box","check_box_outline_blank","check_circle","chevron_left","chevron_right","child_care","child_friendly","chrome_reader_mode","class","clear","clear_all","close","closed_caption","cloud","cloud_circle","cloud_done","cloud_download","cloud_off","cloud_queue","cloud_upload","code","collections","collections_bookmark","color_lens","colorize","comment","compare","compare_arrows","computer","confirmation_number","contact_mail","contact_phone","contacts","content_copy","content_cut","content_paste","control_point","control_point_duplicate","copyright","create","create_new_folder","credit_card","crop","crop_16_9","crop_3_2","crop_5_4","crop_7_5","crop_din","crop_free","crop_landscape","crop_original","crop_portrait","crop_rotate","crop_square","dashboard","data_usage","date_range","dehaze","delete","delete_forever","delete_sweep","description","desktop_mac","desktop_windows","details","developer_board","developer_mode","device_hub","devices","devices_other","dialer_sip","dialpad","directions","directions_bike","directions_boat","directions_bus","directions_car","directions_railway","directions_run","directions_subway","directions_transit","directions_walk","disc_full","dns","do_not_disturb","do_not_disturb_alt","do_not_disturb_off","do_not_disturb_on","dock","domain","done","done_all","donut_large","donut_small","drafts","drag_handle","drive_eta","dvr","edit","edit_location","eject","email","enhanced_encryption","equalizer","error","error_outline","euro_symbol","ev_station","event","event_available","event_busy","event_note","event_seat","exit_to_app","expand_less","expand_more","explicit","explore","exposure","exposure_neg_1","exposure_neg_2","exposure_plus_1","exposure_plus_2","exposure_zero","extension","face","fast_forward","fast_rewind","favorite","favorite_border","featured_play_list","featured_video","feedback","fiber_dvr","fiber_manual_record","fiber_new","fiber_pin","fiber_smart_record","file_download","file_upload","filter","filter_1","filter_2","filter_3","filter_4","filter_5","filter_6","filter_7","filter_8","filter_9","filter_9_plus","filter_b_and_w","filter_center_focus","filter_drama","filter_frames","filter_hdr","filter_list","filter_none","filter_tilt_shift","filter_vintage","find_in_page","find_replace","fingerprint","first_page","fitness_center","flag","flare","flash_auto","flash_off","flash_on","flight","flight_land","flight_takeoff","flip","flip_to_back","flip_to_front","folder","folder_open","folder_shared","folder_special","font_download","format_align_center","format_align_justify","format_align_left","format_align_right","format_bold","format_clear","format_color_fill","format_color_reset","format_color_text","format_indent_decrease","format_indent_increase","format_italic","format_line_spacing","format_list_bulleted","format_list_numbered","format_paint","format_quote","format_shapes","format_size","format_strikethrough","format_textdirection_l_to_r","format_textdirection_r_to_l","format_underlined","forum","forward","forward_10","forward_30","forward_5","free_breakfast","fullscreen","fullscreen_exit","functions","g_translate","gamepad","games","gavel","gesture","get_app","gif","golf_course","gps_fixed","gps_not_fixed","gps_off","grade","gradient","grain","graphic_eq","grid_off","grid_on","group","group_add","group_work","hd","hdr_off","hdr_on","hdr_strong","hdr_weak","headset","headset_mic","healing","hearing","help","help_outline","high_quality","highlight","highlight_off","history","home","hot_tub","hotel","hourglass_empty","hourglass_full","http","https","image","image_aspect_ratio","import_contacts","import_export","important_devices","inbox","indeterminate_check_box","info","info_outline","input","insert_chart","insert_comment","insert_drive_file","insert_emoticon","insert_invitation","insert_link","insert_photo","invert_colors","invert_colors_off","iso","keyboard","keyboard_arrow_down","keyboard_arrow_left","keyboard_arrow_right","keyboard_arrow_up","keyboard_backspace","keyboard_capslock","keyboard_hide","keyboard_return","keyboard_tab","keyboard_voice","kitchen","label","label_outline","landscape","language","laptop","laptop_chromebook","laptop_mac","laptop_windows","last_page","launch","layers","layers_clear","leak_add","leak_remove","lens","library_add","library_books","library_music","lightbulb_outline","line_style","line_weight","linear_scale","link","linked_camera","list","live_help","live_tv","local_activity","local_airport","local_atm","local_bar","local_cafe","local_car_wash","local_convenience_store","local_dining","local_drink","local_florist","local_gas_station","local_grocery_store","local_hospital","local_hotel","local_laundry_service","local_library","local_mall","local_movies","local_offer","local_parking","local_pharmacy","local_phone","local_pizza","local_play","local_post_office","local_printshop","local_see","local_shipping","local_taxi","location_city","location_disabled","location_off","location_on","location_searching","lock","lock_open","lock_outline","looks","looks_3","looks_4","looks_5","looks_6","looks_one","looks_two","loop","loupe","low_priority","loyalty","mail","mail_outline","map","markunread","markunread_mailbox","memory","menu","merge_type","message","mic","mic_none","mic_off","mms","mode_comment","mode_edit","monetization_on","money_off","monochrome_photos","mood","mood_bad","more","more_horiz","more_vert","motorcycle","mouse","move_to_inbox","movie","movie_creation","movie_filter","multiline_chart","music_note","music_video","my_location","nature","nature_people","navigate_before","navigate_next","navigation","near_me","network_cell","network_check","network_locked","network_wifi","new_releases","next_week","nfc","no_encryption","no_sim","not_interested","note","note_add","notifications","notifications_active","notifications_none","notifications_off","notifications_paused","offline_pin","ondemand_video","opacity","open_in_browser","open_in_new","open_with","pages","pageview","palette","pan_tool","panorama","panorama_fish_eye","panorama_horizontal","panorama_vertical","panorama_wide_angle","party_mode","pause","pause_circle_filled","pause_circle_outline","payment","people","people_outline","perm_camera_mic","perm_contact_calendar","perm_data_setting","perm_device_information","perm_identity","perm_media","perm_phone_msg","perm_scan_wifi","person","person_add","person_outline","person_pin","person_pin_circle","personal_video","pets","phone","phone_android","phone_bluetooth_speaker","phone_forwarded","phone_in_talk","phone_iphone","phone_locked","phone_missed","phone_paused","phonelink","phonelink_erase","phonelink_lock","phonelink_off","phonelink_ring","phonelink_setup","photo","photo_album","photo_camera","photo_filter","photo_library","photo_size_select_actual","photo_size_select_large","photo_size_select_small","picture_as_pdf","picture_in_picture","picture_in_picture_alt","pie_chart","pie_chart_outlined","pin_drop","place","play_arrow","play_circle_filled","play_circle_outline","play_for_work","playlist_add","playlist_add_check","playlist_play","plus_one","poll","polymer","pool","portable_wifi_off","portrait","power","power_input","power_settings_new","pregnant_woman","present_to_all","print","priority_high","public","publish","query_builder","question_answer","queue","queue_music","queue_play_next","radio","radio_button_checked","radio_button_unchecked","rate_review","receipt","recent_actors","record_voice_over","redeem","redo","refresh","remove","remove_circle","remove_circle_outline","remove_from_queue","remove_red_eye","remove_shopping_cart","reorder","repeat","repeat_one","replay","replay_10","replay_30","replay_5","reply","reply_all","report","report_problem","restaurant","restaurant_menu","restore","restore_page","ring_volume","room","room_service","rotate_90_degrees_ccw","rotate_left","rotate_right","rounded_corner","router","rowing","rss_feed","rv_hookup","satellite","save","scanner","schedule","school","screen_lock_landscape","screen_lock_portrait","screen_lock_rotation","screen_rotation","screen_share","sd_card","sd_storage","search","security","select_all","send","sentiment_dissatisfied","sentiment_neutral","sentiment_satisfied","sentiment_very_dissatisfied","sentiment_very_satisfied","settings","settings_applications","settings_backup_restore","settings_bluetooth","settings_brightness","settings_cell","settings_ethernet","settings_input_antenna","settings_input_component","settings_input_composite","settings_input_hdmi","settings_input_svideo","settings_overscan","settings_phone","settings_power","settings_remote","settings_system_daydream","settings_voice","share","shop","shop_two","shopping_basket","shopping_cart","short_text","show_chart","shuffle","signal_cellular_4_bar","signal_cellular_connected_no_internet_4_bar","signal_cellular_no_sim","signal_cellular_null","signal_cellular_off","signal_wifi_4_bar","signal_wifi_4_bar_lock","signal_wifi_off","sim_card","sim_card_alert","skip_next","skip_previous","slideshow","slow_motion_video","smartphone","smoke_free","smoking_rooms","sms","sms_failed","snooze","sort","sort_by_alpha","spa","space_bar","speaker","speaker_group","speaker_notes","speaker_notes_off","speaker_phone","spellcheck","star","star_border","star_half","stars","stay_current_landscape","stay_current_portrait","stay_primary_landscape","stay_primary_portrait","stop","stop_screen_share","storage","store","store_mall_directory","straighten","streetview","strikethrough_s","style","subdirectory_arrow_left","subdirectory_arrow_right","subject","subscriptions","subtitles","subway","supervisor_account","surround_sound","swap_calls","swap_horiz","swap_vert","swap_vertical_circle","switch_camera","switch_video","sync","sync_disabled","sync_problem","system_update","system_update_alt","tab","tab_unselected","tablet","tablet_android","tablet_mac","tag_faces","tap_and_play","terrain","text_fields","text_format","textsms","texture","theaters","thumb_down","thumb_up","thumbs_up_down","time_to_leave","timelapse","timeline","timer","timer_10","timer_3","timer_off","title","toc","today","toll","tonality","touch_app","toys","track_changes","traffic","train","tram","transfer_within_a_station","transform","translate","trending_down","trending_flat","trending_up","tune","turned_in","turned_in_not","tv","unarchive","undo","unfold_less","unfold_more","update","usb","verified_user","vertical_align_bottom","vertical_align_center","vertical_align_top","vibration","video_call","video_label","video_library","videocam","videocam_off","videogame_asset","view_agenda","view_array","view_carousel","view_column","view_comfy","view_compact","view_day","view_headline","view_list","view_module","view_quilt","view_stream","view_week","vignette","visibility","visibility_off","voice_chat","voicemail","volume_down","volume_mute","volume_off","volume_up","vpn_key","vpn_lock","wallpaper","warning","watch","watch_later","wb_auto","wb_cloudy","wb_incandescent","wb_iridescent","wb_sunny","wc","web","web_asset","weekend","whatshot","widgets","wifi","wifi_lock","wifi_tethering","work","wrap_text","youtube_searched_for","zoom_in","zoom_out","zoom_out_map"];t.default=(()=>a.a.createElement("div",{className:"m-sm-30"},a.a.createElement("div",{className:"mb-sm-30"},a.a.createElement(_.a,{routeSegments:[{name:"Material",path:"/material"},{name:"Icons"}]})),a.a.createElement(_.i,{title:"icons"},a.a.createElement("div",{className:"flex flex-wrap"},l.map((e,t)=>a.a.createElement("div",{className:"py-16 pr-16",key:t},a.a.createElement(i.a,{title:e,fontSize:"large"},a.a.createElement(n.a,{fontSize:"large"},e))))))))}}]);
//# sourceMappingURL=20.93084d43.chunk.js.map