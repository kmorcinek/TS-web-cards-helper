using System;
using System.Collections.Generic;
using System.IO;
using System.Linq;
using System.Web;
using System.Web.UI;
using System.Web.UI.WebControls;
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

            var names = File.ReadAllLines(@"D:\NieWirtualki\Work\GitHub\TS-web-cards-helper\src\KrzysztofMorcinek.TSCardsHelper.Web\cardNames.txt");

            foreach (var name in names)
            {
                cards.Add(new Card { Name = name, CanRemove = name.EndsWith("*") });
            }

            return JsonNetSerializer.SerializeToString(cards);
        }
    }
}