/**
 * 
 */
Ext.define("DeviceTrackingApp.view.DeviceTrackingView",{
	//extend : "Ext.panel.Panel",
	extend : 'Ext.container.Container',
	layout : "anchor",
	style : "background-color:white",
	title : 'Tracker',
	items : [
	        {
	        	 xtype : "container",
	        	 //html : "header",
	        	 //region : "north",
	        	 margin : '5 5 5 10',
	        	 //height : "8%",
	        	 //width : "100%",
				 anchor : "100% 8%",
				 style : 'background-color:#6688FF',
	        	 layout : {
	        		 type : 'hbox'
	        	 },
				 items : [
	        	      {
	        	    	  xtype : 'image',
						  margin : '5 5 5 10',
	        	    	  src : '../client/extjs/build/images/logo.png'
	        	      },
					  /* {
						  
						  xtype : 'container',
						  width : '50%',
						  items : [
							{
									xtype : 'toolbar',
									//height : '10%',
									items: [
										{
											text: 'Button'
										},
										{
											xtype: 'splitbutton',
											text : 'Split Button'
										},
										'->',
										{
											xtype    : 'textfield',
											name     : 'field1',
											emptyText: 'enter search term'
										}
									]
	        	
								}
						  ]
					  }, */
	        	      {
	        	    	  xtype : 'container',
	        	    	  width : '80%',
	        	    	  layout : {
	        	    		  type : 'hbox',
	        	    		  pack : 'end'
	        	    	  },
	        	    	  items : [
	        	    	           {
	        	    	        	   xtype : 'label',
	        	    	        	   text : userName,
	        	    	        	   margin : '15 5 5 5',
									   style:'color:white;font-weight:bold'
	        	    	           },
	        	    	           {
	        	    	        	   xtype : 'label',
	        	    	        	   text : 'Logout',
	        	    	        	   margin : '15 5 5 25',
									   style:'color:white;font-weight:bold'
	        	    	        		   
	        	    	           }
	        	    	  ]
	        	      }
	        	 ]
	        	 
	         }, 
			 {
				 xtype : "container",
				 anchor : "82% 5%",
				 layout : {
					 type : 'hbox',
					 pack : 'end'
				 },
				 items :[
					{
							xtype : 'button',
							text : 'History',
							margin : '5 0 5 5',
							itemId : 'History',
							width : 100
						 },
						 {
							xtype : 'button',
							text : 'From Previous',
							margin : '5 5 5 5',
							itemId : 'history2',
							width : 120
							
						
						 }
				 ]
			 },
			 {
				 xtype : "container",
				anchor : "100% 85%",
				itemId : 'dtMapPanel',
				layout : 'hbox',
				items : [
					{
	        	 xtype : "container",
	        	 //html : "Test this now",
	        	 margin : '20 20 5 10',
	        	 //region : "center",
	        	 width : "85%",
				 height : "100%",
	        	 layout : 'fit',
	        	 style : 'border : 1px solid black',
	        	 items :{   xtype: 'gmappanel',
      				        gmapType: 'map',
							itemId : 'dtMap',
      				        center: {
      				            geoCodeAddr: "Chennai",
      				            marker: {
      				                title: 'Vicky Home'
      				            }
      				        },
      				        mapOptions : {
      				            mapTypeId: google.maps.MapTypeId.ROADMAP
      				        }
	        	          }
	        	 
	         },
	         {
	        	 xtype : "panel",
	        	 //html : "navigator",
	        	 margin : '20 5 5 5',
	        	 //region : "east",
	        		width : "12%",
					height : "100%",
					collapsible : true,
					title : 'Devices',
					border:"0 0 0 0",
					 layout : {type :'vbox',pack : 'start'},
					 items : [
						 {
							xtype : 'button',
							text : 'Car',
							margin : '5 5 5 5',
							itemId : 'device1',
							width : 120
						 },
						 {
							xtype : 'button',
							text : 'Bike',
							margin : '5 5 5 5',
							itemId : 'device2',
							width : 120
							
						
						 },
						 {
							xtype : 'button',
							text : 'Son',
							margin : '5 5 5 5',
							itemId : 'device3',
							width : 120,
							listeners : {
								click : function(btn){
									
									var deviceTrackingView = btn.up('[itemId=dtMapPanel]').up('[itemId=deviceTrackingParentContainer]');
									var gmapCtrl = deviceTrackingView.down('[itemId=dtMap]');
									//var mpoint = new google.maps.LatLng(13,80);
									//var marker = gmapCtrl.addMarker(mpoint,{title:'Device1'},false,false, null);
									//gmapCtrl.center=mpoint;
									
									gmapCtrl.center= {
										geoCodeAddr: "Madurai",
										marker: {
											title: 'Vicky Home'
										}
									};
									gmapCtrl.center();
									google.maps.event.trigger(gmapCtrl, 'resize');
								}
							}
						
						 },{
							xtype : 'button',
							text : 'Daughter',
							margin : '5 5 5 5',
							itemId : 'device4',
							width : 120
						
						 },
						 {
							xtype : 'button',
							text : 'Technician',
							margin : '5 5 5 5',
							itemId : 'device5',
							width : 120
						
						 }
					 
					 ]
	        		 
	         } 
				
				]
			 
			 } 
	 ]
});