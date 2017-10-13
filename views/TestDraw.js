/*
@author jxu
@description 该页面主要用于测试绘制详情页的功能
 */

var template = '<emptypanel v-bind:form="form" v-bind:content="content"></emptypanel>';
console.dir(EmptyPanel);
console.log(EmptyPanel.options.template);
var input = BaseComponents.input('input', '测试信息');
var form = BaseComponents.form();
var select = BaseComponents.select();
var textarea = BaseComponents.textarea();
form.add('<div>form add</div>');
form.add(select.template());
form.add(textarea.template());
console.log('========='+form.template());
EmptyPanel.options.template = form.template();
var TestDraw = Vue.extend({
	template: template,
	name: 'TestDraw',
	components: {
		'emptypanel': EmptyPanel
	},
	data: function () {
		var content = '<div>这个是添加的第一个组件</div>';
		var form = {
			input: ''
		};
		return {
			content: content,
			form: form
		}
	}
});