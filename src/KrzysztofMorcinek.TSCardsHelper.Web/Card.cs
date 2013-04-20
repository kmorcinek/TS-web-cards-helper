namespace KrzysztofMorcinek.TSCardsHelper.Web
{
    public class Card
    {
        public int Id { get; set; }
        public string Name { get; set; }
        public int Ops { get; set; }
        public string Description { get; set; }
        public bool CanRemove { get; set; }
    }
}