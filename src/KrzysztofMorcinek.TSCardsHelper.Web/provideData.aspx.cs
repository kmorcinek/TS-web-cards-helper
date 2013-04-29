using System;
using System.Collections.Generic;
using System.Dynamic;
using System.Linq;
using System.Text;
using KrzysztofMorcinek.TSCardsHelper.Web.Helpers;
using System.IO;
using Newtonsoft.Json;
using Newtonsoft.Json.Serialization;

namespace KrzysztofMorcinek.TSCardsHelper.Web
{
    public partial class provideData : System.Web.UI.Page
    {
        // TODO annoying right path
        private string basePath = @"D:\NieWirtualki\Work\GitHub\TS-web-cards-helper\src";

        protected void Page_Load(object sender, EventArgs e)
        {
            if (IsPostBack)
                return;

            this.DataBind();
        }

        protected string GetCards()
        {
            dynamic cards = new ExpandoObject();

//            cards.EarlyWar = CardParser.ParseCardsPage(Path.Combine(basePath, @"KrzysztofMorcinek.TSCardsHelper.Web\DataFiles\EarlyWar.xml"))
//                .Select(card => new { card.Id, card.Name, PicturePath = GetPicturePath(card.Name), card.Href })
//                .ToArray();

//            cards.MidWar = CardParser.ParseCardsPage(Path.Combine(basePath, @"KrzysztofMorcinek.TSCardsHelper.Web\DataFiles\MidWarToParse.xml"))
//                .Select(card => new { card.Id, card.Name, PicturePath = GetPicturePath(card.Name), card.Href })
//                .ToArray();

            cards.LateWar = CardParser.ParseCardsPage(Path.Combine(basePath, @"KrzysztofMorcinek.TSCardsHelper.Web\DataFiles\LateWarToParsexml.xml"))
                .Select(card => new { card.Id, card.Name, PicturePath = GetPicturePath(card.Name), card.Href })
                .ToArray();

            var sb = new StringBuilder();
            foreach (dynamic card in cards.LateWar)
            {
                sb.AppendFormat("{0}\"id\":{2}, \"countryIds\":[], \"regionIds\":[]{1},// {3}<br/>", "{", "}", card.Id, card.Name);
                sb.AppendLine();
            }

            return sb.ToString();

            var jsonSerializerSettings = new JsonSerializerSettings { ContractResolver = new CamelCasePropertyNamesContractResolver() };
            return JsonConvert.SerializeObject(cards, Formatting.Indented, jsonSerializerSettings);
        }

        protected string GetCardsPictures()
        {
            IEnumerable<Card> cardsPage = CardParser.ParseCardsPage(Path.Combine(basePath, @"KrzysztofMorcinek.TSCardsHelper.Web\DataFiles\EarlyWar.xml"));

            var sb = new StringBuilder();

            foreach (var card in cardsPage)
            {
                sb.AppendFormat("<image src=\"" + GetPicturePath(card.Name) + "?w=160\"/>");
            }

            return sb.ToString();
        }

        private string GetPicturePath(string cardName)
        {
            var imagePath = cardName.ToLower()
                                    .Replace(' ', '-')
                                    .Replace("*", "")
                                    .Replace("/", "-");

            return string.Format(
                    "http://twilightstrategy.files.wordpress.com/2012/01/{0}.jpg",
                    imagePath);
        }
    }
}