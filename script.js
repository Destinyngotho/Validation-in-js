function validateForm() 
{
        var x = document.forms["myForm"]["fname"].value;
        if (x == "")
        {
          alert("Name must be filled out");
          return false;
        }
		else 
    {
      document.write("Name submitted");
      return True;
    }  
      }