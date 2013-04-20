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
                var id = int.Parse(row.ChildNodes[0].InnerText);
                var secondTd = row.ChildNodes[1];
                var name = secondTd.InnerText;
                var ops = int.Parse(row.ChildNodes[2].InnerText);
                var description = row.ChildNodes[3].InnerText;

                cards.Add(new Card { 
                    Id = id, 
                    Name = name, 
                    Ops = ops, 
                    Description = description, 
                    CanRemove = name.EndsWith("*") });
            }

            return cards;
        }
    }
}