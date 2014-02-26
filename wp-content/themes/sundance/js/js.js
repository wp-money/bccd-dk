Type.registerNamespace('http://bccd.dk/ws/bccdws.asmx/Nemetos.Bccd.Ws');
Nemetos.Bccd.Ws.BccdWS=function() {
Nemetos.Bccd.Ws.BccdWS.initializeBase(this);
this._timeout = 0;
this._userContext = null;
this._succeeded = null;
this._failed = null;
}
Nemetos.Bccd.Ws.BccdWS.prototype={
_get_path:function() {
 var p = this.get_path();
 if (p) return p;
 else return Nemetos.Bccd.Ws.BccdWS._staticInstance.get_path();},
GetLatestEv:function(nrEvents,currentPageIndex,rootID,eventPeriod,month,year,eventCategory,paginationIndex,succeededCallback, failedCallback, userContext) {
return this._invoke(this._get_path(), 'GetLatestEv',false,{nrEvents:nrEvents,currentPageIndex:currentPageIndex,rootID:rootID,eventPeriod:eventPeriod,month:month,year:year,eventCategory:eventCategory,paginationIndex:paginationIndex},succeededCallback,failedCallback,userContext); },
GetNews:function(nrNews,currentPageIndex,rootID,newsPeriod,month,year,paginationIndex,newsType,succeededCallback, failedCallback, userContext) {
return this._invoke(this._get_path(), 'GetNews',false,{nrNews:nrNews,currentPageIndex:currentPageIndex,rootID:rootID,newsPeriod:newsPeriod,month:month,year:year,paginationIndex:paginationIndex,newsType:newsType},succeededCallback,failedCallback,userContext); },
GetNewsletters:function(nbNewsletters,rootID,succeededCallback, failedCallback, userContext) {
return this._invoke(this._get_path(), 'GetNewsletters',false,{nbNewsletters:nbNewsletters,rootID:rootID},succeededCallback,failedCallback,userContext); },
GetNewslettersPaged:function(nbNewsletters,rootID,pageNumber,year,month,succeededCallback, failedCallback, userContext) {
return this._invoke(this._get_path(), 'GetNewslettersPaged',false,{nbNewsletters:nbNewsletters,rootID:rootID,pageNumber:pageNumber,year:year,month:month},succeededCallback,failedCallback,userContext); }}
Nemetos.Bccd.Ws.BccdWS.registerClass('Nemetos.Bccd.Ws.BccdWS',Sys.Net.WebServiceProxy);
Nemetos.Bccd.Ws.BccdWS._staticInstance = new Nemetos.Bccd.Ws.BccdWS();
Nemetos.Bccd.Ws.BccdWS.set_path = function(value) { Nemetos.Bccd.Ws.BccdWS._staticInstance.set_path(value); }
Nemetos.Bccd.Ws.BccdWS.get_path = function() { return Nemetos.Bccd.Ws.BccdWS._staticInstance.get_path(); }
Nemetos.Bccd.Ws.BccdWS.set_timeout = function(value) { Nemetos.Bccd.Ws.BccdWS._staticInstance.set_timeout(value); }
Nemetos.Bccd.Ws.BccdWS.get_timeout = function() { return Nemetos.Bccd.Ws.BccdWS._staticInstance.get_timeout(); }
Nemetos.Bccd.Ws.BccdWS.set_defaultUserContext = function(value) { Nemetos.Bccd.Ws.BccdWS._staticInstance.set_defaultUserContext(value); }
Nemetos.Bccd.Ws.BccdWS.get_defaultUserContext = function() { return Nemetos.Bccd.Ws.BccdWS._staticInstance.get_defaultUserContext(); }
Nemetos.Bccd.Ws.BccdWS.set_defaultSucceededCallback = function(value) { Nemetos.Bccd.Ws.BccdWS._staticInstance.set_defaultSucceededCallback(value); }
Nemetos.Bccd.Ws.BccdWS.get_defaultSucceededCallback = function() { return Nemetos.Bccd.Ws.BccdWS._staticInstance.get_defaultSucceededCallback(); }
Nemetos.Bccd.Ws.BccdWS.set_defaultFailedCallback = function(value) { Nemetos.Bccd.Ws.BccdWS._staticInstance.set_defaultFailedCallback(value); }
Nemetos.Bccd.Ws.BccdWS.get_defaultFailedCallback = function() { return Nemetos.Bccd.Ws.BccdWS._staticInstance.get_defaultFailedCallback(); }
Nemetos.Bccd.Ws.BccdWS.set_enableJsonp = function(value) { Nemetos.Bccd.Ws.BccdWS._staticInstance.set_enableJsonp(value); }
Nemetos.Bccd.Ws.BccdWS.get_enableJsonp = function() { return Nemetos.Bccd.Ws.BccdWS._staticInstance.get_enableJsonp(); }
Nemetos.Bccd.Ws.BccdWS.set_jsonpCallbackParameter = function(value) { Nemetos.Bccd.Ws.BccdWS._staticInstance.set_jsonpCallbackParameter(value); }
Nemetos.Bccd.Ws.BccdWS.get_jsonpCallbackParameter = function() { return Nemetos.Bccd.Ws.BccdWS._staticInstance.get_jsonpCallbackParameter(); }
Nemetos.Bccd.Ws.BccdWS.set_path("bccdws.asmx.htm"/*tpa=http://bccd.dk/ws/bccdws.asmx*/);
Nemetos.Bccd.Ws.BccdWS.GetLatestEv= function(nrEvents,currentPageIndex,rootID,eventPeriod,month,year,eventCategory,paginationIndex,onSuccess,onFailed,userContext) {Nemetos.Bccd.Ws.BccdWS._staticInstance.GetLatestEv(nrEvents,currentPageIndex,rootID,eventPeriod,month,year,eventCategory,paginationIndex,onSuccess,onFailed,userContext); }
Nemetos.Bccd.Ws.BccdWS.GetNews= function(nrNews,currentPageIndex,rootID,newsPeriod,month,year,paginationIndex,newsType,onSuccess,onFailed,userContext) {Nemetos.Bccd.Ws.BccdWS._staticInstance.GetNews(nrNews,currentPageIndex,rootID,newsPeriod,month,year,paginationIndex,newsType,onSuccess,onFailed,userContext); }
Nemetos.Bccd.Ws.BccdWS.GetNewsletters= function(nbNewsletters,rootID,onSuccess,onFailed,userContext) {Nemetos.Bccd.Ws.BccdWS._staticInstance.GetNewsletters(nbNewsletters,rootID,onSuccess,onFailed,userContext); }
Nemetos.Bccd.Ws.BccdWS.GetNewslettersPaged= function(nbNewsletters,rootID,pageNumber,year,month,onSuccess,onFailed,userContext) {Nemetos.Bccd.Ws.BccdWS._staticInstance.GetNewslettersPaged(nbNewsletters,rootID,pageNumber,year,month,onSuccess,onFailed,userContext); }
Type.registerNamespace('Nemetos.Bccd.Utilities');
if (typeof(Nemetos.Bccd.Utilities.EventPeriodEnum) === 'undefined') {
Nemetos.Bccd.Utilities.EventPeriodEnum = function() { throw Error.invalidOperation(); }
Nemetos.Bccd.Utilities.EventPeriodEnum.prototype = {Upcoming: 1,Past: 2,All: 3}
Nemetos.Bccd.Utilities.EventPeriodEnum.registerEnum('Nemetos.Bccd.Utilities.EventPeriodEnum', true);
}
if (typeof(Nemetos.Bccd.Utilities.NewsPeriodEnum) === 'undefined') {
Nemetos.Bccd.Utilities.NewsPeriodEnum = function() { throw Error.invalidOperation(); }
Nemetos.Bccd.Utilities.NewsPeriodEnum.prototype = {News: 1,Archive: 2,All: 3}
Nemetos.Bccd.Utilities.NewsPeriodEnum.registerEnum('Nemetos.Bccd.Utilities.NewsPeriodEnum', true);
}
