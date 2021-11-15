public class AccRelatedConC{    
    @AuraEnabled
    public static List<Account> fetchAcc (){
        return [SELECT Id, Name, Phone FROM Account LIMIT 20];
    }    
    @AuraEnabled
    public static List<Contact> fetchCon (String recordId){
        return [SELECT Id, Name, Phone FROM Contact WHERE AccountId=:recordId];
    }
}