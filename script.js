function calculateFee() {

	console.log("------------------------------------------");
	var ticketCost1 = $("#ticketCost1").val();
	var ticketQuantity1 = $("#ticketQuantity1").val();
	var ticketCost2 = $("#ticketCost2").val();
	var ticketQuantity2 = $("#ticketQuantity2").val();

	//reset value if input is empty
	if (ticketCost1 == 0) {
		$("#ticketCost1").val(0);
		ticketCost1 = 0;
	}
	if (ticketQuantity1 == 0) {
		$("#ticketQuantity1").val(0);
		ticketQuantity1 = 0;
	} 
	if (ticketCost2 == 0) {
		$("#ticketCost2").val(0);
		ticketCost2 = 0;
	}
	if (ticketQuantity2 == 0) {
		$("#ticketQuantity2").val(0);
		ticketQuantity2 = 0;
	} 

	if ($('#ticketType').val() == 1) {
		ticketCost2 = 0;
		ticketQuantity2 = 0;
	}
	
	//calculate total revenue	
	var revenue1 = parseFloat(ticketCost1) * parseFloat(ticketQuantity1); 
	var revenue2 = parseFloat(ticketCost2) * parseFloat(ticketQuantity2);
	var revenue = revenue1 + revenue2;
	var revenueRounded = Math.round(revenue * 100) / 100;
	
	//calculate total ticket quantity
	var totalTicketQuantity = parseInt(ticketQuantity1) + parseInt(ticketQuantity2);
	
	//calculate fee of each provider
	var eventChainFee = 0.025 * revenue + 0.79 * parseFloat(totalTicketQuantity);
	console.log("revenue = " + revenue);
	console.log("totalTicketQuantity = " + totalTicketQuantity);
	console.log("eventChainFee = " + eventChainFee);
	var eventBriteFee = 0.035 * revenue + 1.65 * parseFloat(totalTicketQuantity);
	
	var eventChainFeeRounded = Math.round(eventChainFee * 100) / 100;
	var eventBriteFeeRounded = Math.round(eventBriteFee * 100) / 100;
	var savingsFee = Math.round((eventBriteFeeRounded - eventChainFeeRounded) * 100) / 100;
	var currencySelected = $("#selectedCurrency").val();
	
	$("#revenue").val(revenueRounded);
	$('#eventChainFee').text(currencySelected + " " + eventChainFeeRounded);
	$('#eventBriteFee').text(currencySelected + " " + eventBriteFeeRounded);
	$('#savingsFee').text(currencySelected + " " + savingsFee);
}

$(".fee-button").click(function(){
	var resultElement = $(".result");
	if (resultElement.css('display') === 'none') {
		//show
		resultElement.css('display', 'block');
	}
	calculateFee();
});

$("#ticketType").change(function(){
	if ($('#ticketType').val() == 2) {
		$('#costSecondTicketType').css('display', '');
		$('#quantitySecondTicketType').css('display', '');
	}  
	else {
		$('#costSecondTicketType').css('display', 'none');
		$('#quantitySecondTicketType').css('display', 'none');
	}
	calculateFee();
});

$("#ticketQuantity1").keyup(function(){
	calculateFee();
});

$("#revenue").change(function(){
	calculateFee();
});

$("#ticketCost1").keyup(function(){
	calculateFee();
});

$("#ticketCost2").keyup(function(){
	calculateFee();
});

$("#ticketQuantity2").keyup(function(){
	calculateFee();
});


$("#selectedCurrency").change(function(){
	currencySelected = $("#selectedCurrency").val();
	$('#ticket-cost-currency').text(currencySelected);
	$('#revenue-currency').text(currencySelected);
	calculateFee();
});