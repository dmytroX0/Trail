({
    doInit : function(component, event, helper)
    {
        helper.getActs(component);
    },    
    ShowContacts : function(component, event, helper)
    {
        var actId = event.getSource().get("v.value");
        var action = component.get("c.getListofContacts");
        action.setParams({"AcctId":actId});
        action.setCallback(this,function(result)
                           {
                               var state = result.getState();
                               if (state =="SUCCESS")
                               {
                                   var v=result.getReturnValue();
                                   if(v == null || v == '')
                                   {
                                       alert("No contact Record Exists for this Account");
                                       component.set("v.Conts",'');
                                   }
                                   else
                                   {                                     
                                       component.set("v.Conts",result.getReturnValue());
                                                                           
                               		}
                               }
                           });
        $A.enqueueAction(action);
    }
})