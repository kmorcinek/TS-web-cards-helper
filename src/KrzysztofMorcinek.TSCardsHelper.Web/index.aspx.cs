using System;
using System.Collections.Generic;
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
            var cards = new Card[]
                {
                    new Card{Name = "5 Year plan"},
                    new Card{Name = "Truman"},
                };

            return JsonNetSerializer.SerializeToString(cards);
        }
    }
}