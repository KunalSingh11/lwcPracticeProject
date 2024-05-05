public with sharing class AccordionData {
    @AuraEnabled(cacheable=true)
    public static List<Account> forAccordionData(){
        return [SELECT Id, Name, CreatedDate, (SELECT Id, Name, Phone, Email, Account.Name FROM Contacts) 
        FROM Account 
        ORDER BY CreatedDate DESC 
        LIMIT 5];
    }
}