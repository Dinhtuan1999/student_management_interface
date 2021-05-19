function Validator (formSelector) { 
	function getParent(element, selector) {	  
        while (element.parentElement) {					
            if (element.parentElement.matches(selector)) {			
                return element.parentElement;				
            }
            element = element.parentElement;				
        }
	}


	var formRules = {};

	/**
	 * Quy ước tạo rule:
	 * - nếu có lỗi thì return 'error message'
	 * - nếu không có lỗi thì return 'undefined'
	 */
	var validatorRules = {
		required : function (value) {
			return value ? undefined : 'vui lòng nhập trường này';
		},
		email : function (value) {
			var regex = /^[a-z][a-z0-9_\.]{5,32}@[a-z0-9]{2,}(\.[a-z0-9]{2,4}){1,2}$/ ;
			return regex.test(value) ? undefined : 'vui lòng nhập email';
		},
		min: function(min) {
			return function (value) {
				return value.length >= min ? undefined : 'vui lòng nhập ít nhất ${min}  kí tư';
			}
		}
	}

	// Lấy ra  element trong DOM theo 'formSelector'
	var formElement = document.querySelector(formSelector)

	//chỉ sử lý khi có element trong DOM
	if (formElement) 
	{
		var inputs = formElement.querySelectorAll('[name][rules]');

		for (var input of inputs) {
			var rules = input.getAttribute('rules').split('|');  //split biến từ chuỗi thành 1 mảng 
			for (var rule of rules ){
				var ruleInfo;
				var isRuleHasValue = rule.includes(':'); /** kiểm tra ":" xem có trong mảng không
													nếu có thì tách chuỗi thành mảng [ min , giá trị]															*/
				if (isRuleHasValue) {
					ruleInfo = rule.split(':');
					rule = ruleInfo[0];    // gán rule bằng giá trị có vị trí đầu tiên trong mảng 
				}				

				var ruleFunc = validatorRules[rule];

				if (isRuleHasValue) {    // gán rule bằng giá trị có vị trí thứ 2 trong mảng 
					ruleFunc = ruleFunc(ruleInfo[1]); 
				}

				if (Array.isArray(formRules[input.name])) {
					formRules[input.name].push(ruleFunc);
				} else {
					formRules[input.name] = [ruleFunc]; /**  đầu tiên formRules chạy và gán formRules 
															thành mảng chứa function ruleFunc */
				}
				}

				// lắng nghe sự kiện để validate 
				input.onblur = handlaValidate ;	
				input.oninput = handleClearError;		
			}	

			//hàm thực hiện validate 
			function handlaValidate(event){
				var rules = formRules[event.target.name];
				var errorMessage;

				 rules.find(function (rule){
					errorMessage = rule(event.target.value);
					return errorMessage;
				});
			
				//nếu có lỗi hiển thị ra message lỗi 
				if  (errorMessage){					
					var formGroup = getParent(event.target, '.form-group');						
					if (formGroup) {
						formGroup.classList.add('invalid');	
						var formMessage = formGroup.querySelector('.form-message');
						if (formMessage) {
							formMessage.innerText = errorMessage;
						}
					}
				}
				return !errorMessage;
			} 


			//hàm clear message lỗi 
			function handleClearError (event) {
				var formGroup = getParent(event.target, '.form-group');
				if (formGroup.classList.contains('invalid')); 
				{
					formGroup.classList.remove('invalid');

					var formMessage = formGroup.querySelector('.form-message');
						if (formMessage) {
							formMessage.innerText = '';
						}
				}
			}
			
		}

		//xử lí hành vi submit form 
		formElement.onsubmit = function(event) {
			event.preventDefault();

			var inputs =  formElement.querySelectorAll('[name][rules]');
			var isVali = true;

			for ( var input of inputs ) {
				if (!handlaValidate({target : input})) {
					isVali =false;
				}
				 
			}
		}
		
	}

	
