using System;
using System.Collections.Generic;
using System.Dynamic;
using System.Linq;
using KrzysztofMorcinek.TSCardsHelper.Web.Helpers;
using System.IO;

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

            // TODO annoying right path
            var basePath = @"D:\Work\Git\TS-web-cards-helper\src";
            x.EarlyWar = CardParser.ParseCardsPage(Path.Combine(basePath, @"KrzysztofMorcinek.TSCardsHelper.Web\DataFiles\EarlyWar.xml"))
                .ToArray();

            x.MidWar = CardParser.ParseCardsPage(Path.Combine(basePath, @"KrzysztofMorcinek.TSCardsHelper.Web\DataFiles\MidWarToParse.xml"))
                .ToArray();

            x.LateWar = CardParser.ParseCardsPage(Path.Combine(basePath, @"KrzysztofMorcinek.TSCardsHelper.Web\DataFiles\LateWarToParsexml.xml"))
                .ToArray();

            return JsonNetSerializer.SerializeToString(x);
        }
    }
}