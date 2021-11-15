public class RetrieveAccout 
{
    @AuraEnabled
    public static List<Account> getAccountData()
    {
        List<Account>Act=([select Name,Id,Phone,Type from Account Order By createddate Desc Limit 10]);
        return Act;
    }
    @AuraEnabled
    public static List<contact> getListofContacts(String AcctId)
    {
        List<contact> cnts=([Select FirstName,LastName,Email,Phone from Contact where AccountId=:AcctId]);    
        return cnts;
    }
}