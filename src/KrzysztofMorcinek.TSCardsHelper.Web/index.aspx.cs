using System;
using System.Collections.Generic;
using System.Dynamic;
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
            var cards = new List<Card>();

            foreach (var name in CardParser.ParseCardsPage(@"D:\NieWirtualki\Work\GitHub\TS-web-cards-helper\src\KrzysztofMorcinek.TSCardsHelper.Web\DataFiles\EarlyWar.xml"))
            {
                cards.Add(new Card { Name = name, CanRemove = name.EndsWith("*") });
            }

            dynamic x = new ExpandoObject();
            x.EarlyWar = cards.ToArray();

            return JsonNetSerializer.SerializeToString(x);
        }
    }
}