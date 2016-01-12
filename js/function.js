
	$(document).ready(function(){

		$('#menu-ajax').jstree({
				'core' : {
					'data' : {
						"url" : "./menu.json",
						"dataType" : "json" // needed only if you do not supply JSON headers
					}
				}
			});

		$(".prsel").click(function(){
			$("#parameters").modal('show');
		

		});

		$(".syssel").click(function(){
			$("#syssel").modal('show');
			
			})
		
		$(".closel").click(function(){
			left = $(".closel").css("left");
			console.log($(".closel").css("left"));
			if(left == "255px"){
				$(".closel span").removeClass("rotate2");
				$(".closel span").addClass("rotate");
				$(".closel").css("left", "0px");
				$("#menu").hide();
				$("#content").css("margin-left", "0px");
			}

			if(left == "0px"){
				$(".closel span").removeClass("rotate");
				$(".closel span").addClass("rotate2");
				$(".closel").css("left", "255px");
				$("#menu").show();
				$("#content").css("margin-left", "270px");
			} 
			

			})
		
		$(".closel2").click(function(){
			right = $(".closel2").css("right");
			if(right == "300px"){
				$(".closel2 span").removeClass("rotate");
				$(".closel2 span").addClass("rotate2");
				$(".closel2").css("right", "2px");
				$(".a30").hide();
				$(".a70").css("width", "100%");
			}

			if(right == "2px"){
				$(".closel2 span").removeClass("rotate2");
				$(".closel2 span").addClass("rotate");
				$(".closel2").css("right", "300px");
				$(".a30").show();
				$(".a70").css("width", "600px");
			} 
			

			})
		
		$(".tree").click(function(){
			$("#tree").modal('show');
			});

	$("ul.drag").sortable({
         helper: 'clone'});
		
	$('[data-toggle="popover"]').popover();
		
	$('[data-toggle="message-pop"]').hover(function(e) {
            $('.message-pop').toggle();
        });
		
	$('.message-pop').hover(function(){}, function(e) {
            $('.message-pop').toggle();
        })
		
		$(".chkall").click(function (){
			
			chk = $(this).html();
			table = $(this).attr("tartab");
			
			if(chk == 'check_box_outline_blank'){
				$("#"+table).find( ".chk" ).html( "check_box" );
				$("#"+table).find( ".chk" ).parent().addClass( "chked" );
				$("#"+table).find( ".chk" ).parent().find( "input" ).prop('checked', true);
				$("#"+table).find( ".chkall" ).parent().find( "input" ).prop('checked', true);
				$(this).html( "check_box" );
				$(this).addClass( "chked" );
			} else {
				$("#"+table).find( ".chk" ).html( "check_box_outline_blank" );
				$("#"+table).find( ".chk" ).parent().removeClass( "chked" ); 
				$("#"+table).find( ".chk" ).parent().find( "input" ).prop('checked', false);
				$("#"+table).find( ".chkall" ).parent().find( "input" ).prop('checked', false);
				$(this).html( "check_box_outline_blank" );
				$(this).removeClass( "chked" ); 
			}
			
		})

		$(".chk").click(function (){ 
		
		td = $(this).parent();
		tr = td.parent();
		
			chk = $(this).html();
			if(chk == 'check_box_outline_blank'){ 
				
				$(this).parent().addClass( "chked" ); 
				$(this).html('check_box'); 
				td.addClass( "kk" );
				
				} 
				else { 
				$(this).parent().removeClass( "chked" ); 
				$(this).html('check_box_outline_blank'); 
				td.removeClass( "kk" ); }
		
		})


/* Data Tables*/

        $('#dtable').DataTable({bFilter: false, bInfo: false, "bPaginate": true, "columnDefs": [ {
            "searchable": false,
            "orderable": false,
            "sWidth": "2%",
            "targets": 0
        }, {
            "searchable": false,
            "orderable": false,
            "targets": 10
        } ],
			"order": [[ 1, 'asc' ]]});

		$('#dtable2').DataTable({bFilter: false, bInfo: false, "bPaginate": false, "columnDefs": [ {
				"searchable": false,
				"orderable": false,
				"targets": 0
			} ],
			"order": [[ 1, 'asc' ]]});
		/*
		$('#dtable td').dblclick(function(){ 
		
		htm = $(this).text();
		new_htm = '<input id="editor" value="'+htm+'">';
		$(this).html(new_htm);
		$(this).find( "input" ).focus(); })*/

});
