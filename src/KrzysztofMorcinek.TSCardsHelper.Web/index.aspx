<%@ Page Language="C#" AutoEventWireup="true" CodeBehind="index.aspx.cs" Inherits="KrzysztofMorcinek.TSCardsHelper.Web.index" %>

<!DOCTYPE html>

<html xmlns="http://www.w3.org/1999/xhtml">
<head runat="server">
    <title></title>
</head>
<body>
    <form id="form1" runat="server">
        <div>
            <p>konio</p>
            <ul data-bind="foreach: cards">

                <li>
                    <label>
                        <input type="checkbox" name="flavorGroup" />
                        <span data-bind="text: Name"></span>
                    </label>
                </li>

            </ul>
        </div>
    </form>

    <script src="/Scripts/jquery-1.9.1.js"></script>
    <script src="/Scripts/knockout-2.2.1.js"></script>
    <script src="/Scripts/knockout.mapping-latest.js"></script>

    <script src="/Content/Scripts/index.js"></script>
    <script>
        $(function () {
            indexPage(<%# GetCards() %>);
        });
    </script>
</body>
</html>
