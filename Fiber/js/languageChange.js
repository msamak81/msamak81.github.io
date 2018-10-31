// JavaScript Document
function changeToArabicLanguage()
{
	var currentURL = document.location.href;
	if( currentURL.indexOf("english")==-1 && currentURL.indexOf("arabic")==-1 )
	{
		currentURL = currentURL+"/wps/wcm/connect/arabic/individual/individual";
	}
	else
	{
		currentURL = currentURL.replace("/english/","/arabic/");
	}	
	document.location = currentURL;
}

function changeToEnglishLanguage()
{
	var currentURL = document.location.href;
	if( currentURL.indexOf("english")==-1 && currentURL.indexOf("arabic")==-1 )
	{
		currentURL = currentURL+"/wps/wcm/connect/english/individual/individual";
	}
	else
	{
		currentURL = currentURL.replace("/arabic/","/english/");
	}
	
	
	document.location = currentURL;
}

$(document).ready(function(){
	var languages=["english","arabic","urdu","tagalog","indonesian","bengali"]; // languages
	var currentURL = document.location.href.toString().toLowerCase();
	var newURL= '';
	var editindMode="connect";
	var libraryName="";
	if(currentURL!=null && currentURL.indexOf("myconnect")!=-1)
	{
		editindMode="myconnect";
	}
	for(index=0;index<languages.length;index++)
	{
		currentURL = currentURL.substring(currentURL.indexOf("/"+languages[index]+"/"),currentURL.length);
		if(currentURL.indexOf("/"+languages[index]+"/")!=-1)
		{
			libraryName = languages[index];
			if(currentURL!=null && currentURL.indexOf("/individual")!=-1)
			{
				newURL = "/wps/wcm/"+editindMode+"/"+libraryName+"/individual/individual";
			}
			else if(currentURL!=null && currentURL.indexOf("/wholesales")!=-1)
			{
				newURL = "/wps/wcm/"+editindMode+"/"+libraryName+"/business/wholesales/wholeSale";
			}
			else if(currentURL!=null && currentURL.indexOf("/smallandmediumbusiness")!=-1)
			{
				newURL = "/wps/wcm/"+editindMode+"/"+libraryName+"/business/smallAndMediumBusiness/smallBusiness";
			}
			else if(currentURL!=null && currentURL.indexOf("/business")!=-1)
			{
				newURL = "/wps/wcm/"+editindMode+"/"+libraryName+"/business/largeAndEnterpriseBusiness/largeAndEnterpriseBusiness";
			}
			else if(currentURL!=null && currentURL.indexOf("/stc/")!=-1)
			{
				newURL = "/wps/wcm/"+editindMode+"/"+libraryName+"/stc/stclanding";
			}
			else if(currentURL!=null && currentURL.indexOf("/helpandsupport/")!=-1)
			{
				newURL = "/wps/wcm/"+editindMode+"/"+libraryName+"/individual/individual";
			}
			else 
			{
				// default one is invidual home
				newURL = "/wps/wcm/"+editindMode+"/"+libraryName+"/individual/individual";
			}

		}
	}
	//document.location = newURL;
	$("#logo").attr("href",newURL);
	
	
	 currentURL = document.location.href;
	if( libraryName.indexOf("english")>-1)
	{
		if(currentURL.indexOf("/prepaid/")>-1||currentURL.indexOf("/fingerprint")>-1)
		{
			$("#urdu").attr("href",currentURL.replace("/"+libraryName+"/","/urdu/"));
			$("#bengali").attr("href",currentURL.replace("/"+libraryName+"/","/bengali/"));
			$("#tagalog").attr("href",currentURL.replace("/"+libraryName+"/","/tagalog/"));
			$("#indonesian").attr("href",currentURL.replace("/"+libraryName+"/","/indonesian/"));
		}
		currentURL = currentURL.replace("/english/","/arabic/");
		$("#arabic").attr("href",currentURL);
	}
	else if(libraryName.indexOf("arabic")>-1)
	{
		if(currentURL.indexOf("/prepaid/")>-1||currentURL.indexOf("/fingerprint")>-1)
		{
			$("#urdu").attr("href",currentURL.replace("/"+libraryName+"/","/urdu/"));
			$("#bengali").attr("href",currentURL.replace("/"+libraryName+"/","/bengali/"));
			$("#tagalog").attr("href",currentURL.replace("/"+libraryName+"/","/tagalog/"));
			$("#indonesian").attr("href",currentURL.replace("/"+libraryName+"/","/indonesian/"));
		}
		currentURL = currentURL.replace("/arabic/","/english/");
		$("#english").attr("href",currentURL);
	}
	else
	{
		$("#arabic").attr("href",currentURL.replace("/"+libraryName+"/","/arabic/"));
		$("#english").attr("href",currentURL.replace("/"+libraryName+"/","/english/"));
		$("#urdu").attr("href",currentURL.replace("/"+libraryName+"/","/urdu/"));
		$("#bengali").attr("href",currentURL.replace("/"+libraryName+"/","/bengali/"));
		$("#tagalog").attr("href",currentURL.replace("/"+libraryName+"/","/tagalog/"));
		$("#indonesian").attr("href",currentURL.replace("/"+libraryName+"/","/indonesian/"));
	}

	
	
	
});