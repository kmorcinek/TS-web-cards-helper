using System.Collections.Generic;
using System.Xml;

namespace KrzysztofMorcinek.TSCardsHelper.Web
{
    public class CardParser
    {
        public static IEnumerable<Card> ParseCardsPage(string path)
        {
            var doc = new XmlDocument();
            doc.Load(path);

            var tbody = doc.ChildNodes[0];

            var cards = new List<Card>();

            foreach (XmlNode row in tbody)
            {
                var secondTd = row.ChildNodes[1];

                cards.Add(new Card { 
                    Id = int.Parse(row.ChildNodes[0].InnerText), 
                    Name = secondTd.InnerText, 
                    Href = row.ChildNodes[1].ChildNodes[0].Attributes["href"].InnerText,
                    Ops = int.Parse(row.ChildNodes[2].InnerText), 
                    Description = row.ChildNodes[3].InnerText, 
                    CanRemove = secondTd.InnerText.EndsWith("*") });
            }

            return cards;
        }
    }
}