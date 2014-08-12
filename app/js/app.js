require([
    'dojo/dom',
    'dojo/dom-construct'
    //'demo/myModule'
], function (
	dom, 
	domConstruct
	//myModule
) {
	'use strict';
    var greetingNode = dom.byId('greeting');
    domConstruct.place('<i> Dojo!</i>', greetingNode);

    //myModule.setText('greeting', 'Hello Dojo!');
 
    // setTimeout(function () {
    //     myModule.restoreText('greeting');
    // }, 3000);
});
