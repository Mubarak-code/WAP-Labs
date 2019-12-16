$(document).ready(function() {
    $("#btn1").click(rudyTimer);
    $("#btn2").click(stopTimer);
    $("#btn3").click(module);


    function rudyTimer() {
        intervalID = setInterval(delayMsg, 1000);
    }

    function stopTimer() {
        clearInterval(intervalID);
    }

    function delayMsg() {
        $("#lbl1").append("Rudy!");

        //document.getElementById("lbl1").innerHTML += "Rudy!";
    }

    function module() {
        var name = $("#accountName").val();
        var balance = $("#deposit").val();
        var accountInfoList = [];

        newAccount = account();
        newAccount.createAccount(name, balance);
        accountInfoList.push(newAccount);

        var show = "";

        for (var i = 0; i < accountInfoList.length; i++) {
            show = accountInfoList[i].print() + "\n";

        }
        $("#textArea").append(show);
        // console.log(show);
    }

    function account() {

        var accountName = "";
        var deposit = 1;

        function getName() {
            return accountName;
        }

        function getDeposit() {
            return deposit;
        }


        return {
            createAccount: function(accountName, deposit) {
                this.accountName = accountName;
                this.deposit = deposit;

            },

            print: function() {
                return "Account name : " + this.accountName + "\nBalance : " + this.deposit;
            }

        };
    }

});

//     // var createAccount = {};
//     var accountList = [];
//     // acctName = $("#accountName").val();
//     // console.log(acctName);

//     function createAccount(name, balance) {
//         this.name = $("#accountName").val();
//         this.balance = $("#deposit").val();

//     }

// accountList.push(createAccount())

//     console.log()