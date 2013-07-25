// ****************************************************************************
//
// edxJS 
// 
// ****************************************************************************
//
//     This file does the necessary work to allow the edX website (consumer) to
//   communicate through and iframe with pages (providers) that include it. It
//   gives the edX website the ability to call and get the return values of any
//   function on the provider. 
//     To use it, 
//
// ****************************************************************************



//   Take a string and find the nested object that corresponds to it. E.g.:
// deepKey(obj, "an.example") -> obj["an"]["example"]
var _deepKey = function(obj, path){
    for (var i = 0, p=path.split('.'), len = p.length; i < len; i++){
        obj = obj[p[i]];
    }
    return obj;
};


//     Get function `fnName` . `fnName` should be specified in method form;
//     that is, as 
//
//          something.somethingelse.somefn
//
//   Rether than as:
//
//          something.somethingelse["somefn"]
var _callAny = function(fnName) {
    return _deepKey(window, fnName);
};

var rpc = new easyXDM.Rpc({}, {
    local: {
        callAny: function(fnName) {
            var args = Array.prototype.slice.call(arguments, 1, -2);
            var ans = _callAny(fnName);
            rpc.returnVal(ans.apply(this, args));
            return;
        }
    },
    remote: {
        returnVal:{}
    }
});

