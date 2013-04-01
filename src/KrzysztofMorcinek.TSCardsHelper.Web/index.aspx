<%@ Page Language="C#" AutoEventWireup="true" CodeBehind="index.aspx.cs" Inherits="KrzysztofMorcinek.TSCardsHelper.Web.index" %>

<!DOCTYPE html>

<html xmlns="http://www.w3.org/1999/xhtml">
<head runat="server">
    <title>Twilight struggle cards helper</title>
    <link type="text/css" href="/Content/Styles/Style.css" rel="stylesheet"/>
</head>
<body>
    <form id="form1" runat="server">
        <div id="main-container">
            <%--<button data-bind="click:start3rdTurn">Start 3rd turn</button>--%>
            <%--<h2>Sure in hands this turn</h2>
            <ul data-bind="foreach: sureInHands">

                <li>
                    <button data-bind="text: Name"></button>
                </li>

            </ul>--%>
            <div>
                <h2>In deck or in hands</h2>
                <ul data-bind="foreach: cards">

                    <li>
                        <button data-bind="text: Name, click: $parent.discard"></button>
                    </li>

                </ul>
            </div>
            <div>
                <h2>Discarded pile</h2>
                <ul data-bind="foreach: discardedPile">
                    <li data-bind="text: Name"/>
                </ul>
            </div>
            <div>
                <h2>Removed pile</h2>
                <ul data-bind="foreach: removedPile">
                    <li data-bind="text: Name"/>
                </ul>
            </div>
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
