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
                var id = row.ChildNodes[0]; 
                var secondTd = row.ChildNodes[1];
                var name = secondTd.InnerText;

                cards.Add(new Card { Name = name, CanRemove = name.EndsWith("*") });
            }

            return cards;
        }
    }
}