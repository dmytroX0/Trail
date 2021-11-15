({
    
     doInit: function(component, event, helper) {
       
        var action = component.get("c.getAllAccounts");
        action.setCallback(this, function(result){
            var accounts = result.getReturnValue();
            console.log(accounts);
            component.set("v.accounts",accounts);
            
            window.setTimeout(
                $A.getCallback( function() {
                   
                    component.find("Op").set("v.value", accounts[4].Id);
                }));
        });
        $A.enqueueAction(action);
    },
    
   handleAccountChange : function(component, event, helper) {
        
        var accId = event.getSource().get("v.value");
        var action = component.get("c.getAllContacts");

        action.setParams({
           "ParentId": accId
        });
        action.setCallback(this, function(response){
        var state = response.getState();
            if (component.isValid() && state === "SUCCESS"){
               
                component.set("v.contacts", response.getReturnValue());
             }
            else {
                console.log("Failed with state" + state);
            }
           
        })
        $A.enqueueAction(action);
         component.set("v.isOpen", true);  
        },
     Close: function(component, event, helper) {
       
                                       
        component.set("v.isOpen", false);
   },
 });