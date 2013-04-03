<%@ Page Language="C#" AutoEventWireup="true" CodeBehind="index.aspx.cs" Inherits="KrzysztofMorcinek.TSCardsHelper.Web.index" %>

<!DOCTYPE html>

<html xmlns="http://www.w3.org/1999/xhtml">
<head runat="server">
    <title>Twilight struggle cards helper</title>
    <link type="text/css" href="/Content/Styles/Style.css" rel="stylesheet" />
</head>
<body>
    <div id="main-container">
        <button data-bind="click:start3rdTurn">Start 3rd turn</button>
        <div>
            <h2>Sure in hands this turn</h2>
            <ul data-bind="foreach: sureInHands">

                <li>
                    <button data-bind="click: $parent.discard">Discard</button>
                    <span data-bind="text: Name"></span>
                    <button data-bind="click: $parent.remove, visible: CanRemove">Remove</button>
                </li>

            </ul>
        </div>
        <div>
            <h2>In deck or in hands</h2>
            <ul data-bind="foreach: cards">

                <li>
                    <button data-bind="click: $parent.discard">Discard</button>
                    <span data-bind="text: Name"></span>
                    <button data-bind="click: $parent.remove, visible: CanRemove">Remove</button>
                </li>

            </ul>
        </div>
        <div>
            <h2>Discarded pile</h2>
            <ul data-bind="foreach: discardedPile">
                <li data-bind="text: Name" />
            </ul>
        </div>
        <div>
            <h2>Removed pile</h2>
            <ul data-bind="foreach: removedPile">
                <li data-bind="text: Name" />
            </ul>
        </div>
    </div>

    <script src="/Scripts/jquery-1.9.1.js"></script>
    <script src="/Scripts/knockout-2.2.1.js"></script>
    <script src="/Scripts/knockout.mapping-latest.js"></script>

    <script src="/Content/Scripts/index.js"></script>
    <script>
        $(function () {
            indexPage([{ "Name": "Asia Scoring", "CanRemove": false }, { "Name": "Europe Scoring", "CanRemove": false }, { "Name": "Middle East Scoring", "CanRemove": false }, { "Name": "Duck and Cover", "CanRemove": false }, { "Name": "Five Year Plan", "CanRemove": false }, { "Name": "Socialist Governments", "CanRemove": false }, { "Name": "Fidel*", "CanRemove": true }, { "Name": "Vietnam Revolts*", "CanRemove": true }, { "Name": "Blockade*", "CanRemove": true }, { "Name": "Korean War*", "CanRemove": true }, { "Name": "Romanian Abdication*", "CanRemove": true }, { "Name": "Arab-Israeli War", "CanRemove": false }, { "Name": "Comecon*", "CanRemove": true }, { "Name": "Nasser*", "CanRemove": true }, { "Name": "Warsaw Pact Formed*", "CanRemove": true }, { "Name": "De Gaulle Leads France*", "CanRemove": true }, { "Name": "Captured Nazi Scientist*", "CanRemove": true }, { "Name": "Truman Doctrine*", "CanRemove": true }, { "Name": "Olympic Games", "CanRemove": false }, { "Name": "NATO*", "CanRemove": true }, { "Name": "Independent Reds*", "CanRemove": true }, { "Name": "Marshall Plan*", "CanRemove": true }, { "Name": "Indo-Pakistani War", "CanRemove": false }, { "Name": "Containment*", "CanRemove": true }, { "Name": "CIA Created*", "CanRemove": true }, { "Name": "US/Japan Mutual Defense Pact*", "CanRemove": true }, { "Name": "Suez Crisis*", "CanRemove": true }, { "Name": "East European Unrest", "CanRemove": false }, { "Name": "Decolonization", "CanRemove": false }, { "Name": "Red Scare/Purge", "CanRemove": false }, { "Name": "UN Intervention", "CanRemove": false }, { "Name": "De-Stalinization*", "CanRemove": true }, { "Name": "Nuclear Test Ban", "CanRemove": false }, { "Name": "Formosan Resolution*", "CanRemove": true }, { "Name": "Defectors", "CanRemove": false }]);
        });
    </script>
</body>
</html>
