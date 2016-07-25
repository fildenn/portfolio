angular.module('myApp', []).controller('userCtrl', function($scope) {

$scope.fname = '';
$scope.lname = '';
$scope.age = '';
$scope.address = '';
$scope.telephone = '';
$scope.mail = '';
$scope.users = [];
$scope.hideform = true;
$scope.editform = true;
$scope.edit = true;
check();

var ct = 1;

function check()
{
  if ($scope.users.length == 0)
  {
    document.getElementById("norec").innerHTML = "NO RECORDS";
  }

  else
  {
     document.getElementById("norec").innerHTML = "";
  }
};


$scope.editUser = function(id) 
{
  $scope.hideform = false;

  if (id == 'addnew') 
  {
    $scope.editform = true;
    $scope.edit = true;
    $scope.btnaddnew = true;
    $scope.fname = '';
    $scope.lname = '';
    $scope.age = '';
    $scope.address = '';
    $scope.telephone = '';
    $scope.mail = '';
  } 
  else 
  {
    for (var i =0; i < $scope.users.length; i++)
    {
     if ($scope.users[i].id === id) 
     {
        $scope.editform = false;
        $scope.hideform = true;
        $scope.hidid = true;
        $scope.btnaddnew = false;
        $scope.idd = $scope.users[i].id;
        $scope.efname = $scope.users[i].fname;
        $scope.elname = $scope.users[i].lname; 
        $scope.eage = $scope.users[i].age;
        $scope.eaddress = $scope.users[i].address;
        $scope.etelephone= $scope.users[i].telephone;
        $scope.eemail = $scope.users[i].mail;
     }
    }
  }
};

$scope.addnew = function() 
{
  var addid = ct;
  var addfname = $scope.fname;
  var addlname = $scope.lname;
  var addage = $scope.age;
  var addaddress = $scope.address;
  var addtelephone = $scope.telephone;
  var addmail = $scope.mail;
  var emailRegEx = /^[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,4}$/i;

  if (addfname == "" && addlname == "" && addage == "" && addaddress == "" && addtelephone == "" && addmail == "" )
  {
    alert("ALL FIELDS REQUIRED");
  }

  else if (addfname == "")
  {
    alert("First Name is required");
  }

  else if (addlname == "")
  {
    alert("Last Name is required");
  }

  else if (addage == "")
  {
    alert("Age is required");
  }

  else if (addaddress == "")
  {
    alert("Address is required");
  }

  else if (addtelephone == "")
  {
    alert("Telephone is required");
  }

  else if (document.addform.addemail.value.search(emailRegEx) == -1)
  {
     alert("Please enter a valid email address.");
  }

  else
  {
    $scope.users.push({'id': addid,'fname': addfname, 'lname': addlname, 'age': addage, 'address': addaddress, 'telephone': addtelephone,'mail': addmail }); 
    ct++;
    document.getElementById("validatetxt").innerHTML = "";
    check();
    $scope.fname = '';
    $scope.lname = '';
    $scope.age = '';
    $scope.address = '';
    $scope.telephone = '';
    $scope.mail = '';
    $scope.hideform = true;
    $scope.btnaddnew = false;
    check();
    alert("Record Saved.");
  }
};

//delete
$scope.delete = function(id) 
{
  for (var i =0; i < $scope.users.length; i++)
     if ($scope.users[i].id === id) 
     {
        $scope.users.splice(i,1);
        $scope.hideform = true;
        $scope.editform = true;
        $scope.btnaddnew = false;
        check();
        break;
     }
};

// saveedit
$scope.save = function() 
{
  var eid= $scope.idd;
  var efname = $scope.efname;
  var elname = $scope.elname;
  var eage = $scope.eage;
  var eaddress = $scope.eaddress;
  var etelephone = $scope.etelephone;
  var eemail = $scope.eemail;
  var emailRegEx = /^[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,4}$/i;

  //alert(efname);
  if (efname == "" && elname == "" && eage == "" && eaddress == "" && etelephone == "" && eemail == "" )
  {
    alert("ALL FIELDS REQUIRED");
  }

else if (document.editform.editfname.value == "")
  {
    alert("First Name is required");
  }

  else if (document.editform.editlname.value == "")
  {
    alert("Last Name is required");
  }

  else if (document.editform.editage.value == "")
  {
    alert("Age is required");
  }

  else if (document.editform.editaddress.value == "")
  {
    alert("Address is required");
  }

  else if (document.editform.edittelephone.value == "")
  {
    alert("Telephone is required");
  }

  else if (document.editform.editemail.value.search(emailRegEx) == -1)
  {
     alert("Please enter a valid email address.");
  }

  else
  {
    for (var i =0; i < $scope.users.length; i++)
       if ($scope.users[i].id === eid) 
       {
        $scope.users[i].fname = efname;
        $scope.users[i].lname = elname;
        $scope.users[i].age = eage;
        $scope.users[i].address = eaddress;
        $scope.users[i].telephone = etelephone;
        $scope.users[i].mail = eemail;
       }
    $scope.idd = '';
    $scope.efname = '';
    $scope.elname = '';
    $scope.eage = '';
    $scope.eaddress = '';
    $scope.etelephone = '';
    $scope.eemail = '';
    $scope.editform = true;
    $scope.hideform = true;
    check();
    alert("Changes Saved");
  }
  

};

$scope.cancel = function() 
{
  $scope.idd = '';
  $scope.efname = '';
  $scope.elname = '';
  $scope.eage = '';
  $scope.eaddress = '';
  $scope.etelephone = '';
  $scope.eemail = '';
  $scope.editform = true;
};

$scope.clear = function() 
{
  $scope.fname = '';
  $scope.lname = '';
  $scope.age = '';
  $scope.address = '';
  $scope.telephone = '';
  $scope.mail = '';
  alert("Fields Clear");
};

$scope.canceladd = function() 
{
  $scope.hideform = true;
  $scope.btnaddnew = false;
};

})