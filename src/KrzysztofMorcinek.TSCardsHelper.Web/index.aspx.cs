using System;
using System.Collections.Generic;
using System.Dynamic;
using System.Linq;
using KrzysztofMorcinek.TSCardsHelper.Web.Helpers;

namespace KrzysztofMorcinek.TSCardsHelper.Web
{
    public partial class index : System.Web.UI.Page
    {
        protected void Page_Load(object sender, EventArgs e)
        {
            if (IsPostBack)
                return;

            this.DataBind();
        }

        protected string GetCards()
        {
            dynamic x = new ExpandoObject();
            x.EarlyWar = CardParser.ParseCardsPage(@"D:\NieWirtualki\Work\GitHub\TS-web-cards-helper\src\KrzysztofMorcinek.TSCardsHelper.Web\DataFiles\EarlyWar.xml")
                .Select(name => new Card {Name = name, CanRemove = name.EndsWith("*")}).ToArray();

            x.MidWar = CardParser.ParseCardsPage(@"D:\NieWirtualki\Work\GitHub\TS-web-cards-helper\src\KrzysztofMorcinek.TSCardsHelper.Web\DataFiles\MidWarToParse.xml")
                .Select(name => new Card {Name = name, CanRemove = name.EndsWith("*")}).ToArray();

            x.LateWar = CardParser.ParseCardsPage(@"D:\NieWirtualki\Work\GitHub\TS-web-cards-helper\src\KrzysztofMorcinek.TSCardsHelper.Web\DataFiles\LateWarToParsexml.xml")
                .Select(name => new Card {Name = name, CanRemove = name.EndsWith("*")}).ToArray();

            return JsonNetSerializer.SerializeToString(x);
        }
    }
}