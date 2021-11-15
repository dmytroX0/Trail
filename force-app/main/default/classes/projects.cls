public class projects 
{
@AuraEnabled
    public static List<Account> getAccountDataAssignment27()
    {
        List<Account>Act=([select Name,Id,Phone,Type,(Select FirstName,LastName,Email,Phone from Contacts) from Account Order By createddate Desc Limit 10]);
        return Act;
    }
}