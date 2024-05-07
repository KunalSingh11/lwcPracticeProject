public with sharing class AccountController
{
	@AuraEnabled (cacheable = true )
	public static List<Account> getRecentAccounts()
	{
		return [SELECT
			Id, 
			Name, 
			(SELECT
				Id, 
				Name, 
				StageName, 
				Amount, 
				CloseDate
			FROM
				Opportunities)
		FROM
			Account
		ORDER BY
			CreatedDate
		LIMIT 10];
	}
}