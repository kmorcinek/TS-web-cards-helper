using System;
using System.Collections.Generic;
using System.IO;
using System.Linq;
using System.Text;
using System.Xml;

namespace KrzysztofMorcinek.TSCardsHelper.Parser
{
    class Program
    {
        static void Main(string[] args)
        {
            ParseCardsPage();
        }

        private static void ParseCardsPage()
        {
            var path =
                @"DataFiles\LateWarToParsexml.xml";

            XmlDocument doc = new XmlDocument();
            doc.Load(path);

            var tbody = doc.ChildNodes[0];

            using (var sw = new StreamWriter("lateWarCards.txt"))
            {
                foreach (XmlNode row in tbody)
                {
                    var secondTd = row.ChildNodes[1];
                    sw.WriteLine(secondTd.InnerText);
                }
            }
        }

    }
}
