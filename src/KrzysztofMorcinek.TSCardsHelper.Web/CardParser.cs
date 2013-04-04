using System.Collections.Generic;
using System.Xml;

namespace KrzysztofMorcinek.TSCardsHelper.Web
{
    public class CardParser
    {
        public static IEnumerable<string> ParseCardsPage(string path)
        {
            var doc = new XmlDocument();
            doc.Load(path);

            var tbody = doc.ChildNodes[0];

            var names = new List<string>();

            foreach (XmlNode row in tbody)
            {
                var secondTd = row.ChildNodes[1];
                names.Add(secondTd.InnerText);
            }

            return names;
        }
    }
}