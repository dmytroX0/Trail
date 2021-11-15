({
    getActs : function(component) 
    {
        var action = component.get('c.getAccountData');    
            action.setCallback(this, function(actionResult) 
                           {
                               var Results=actionResult.getReturnValue();
                               component.set("v.Accc",Results);
                               
                           });
        $A.enqueueAction(action);
        
    }   
})