<%@ Page Language="C#" AutoEventWireup="true" CodeBehind="index.aspx.cs" Inherits="KrzysztofMorcinek.TSCardsHelper.Web.index" %>

<!DOCTYPE html>

<html xmlns="http://www.w3.org/1999/xhtml">
<head runat="server">
    <title>Twilight struggle cards helper</title>
    <link type="text/css" href="/Content/Styles/Style.css" rel="stylesheet" />
</head>
<body>
    <p><%# this.GetCards() %></p>
</body>
</html>
