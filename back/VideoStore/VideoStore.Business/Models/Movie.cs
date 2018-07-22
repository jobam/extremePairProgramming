namespace VideoStore.Business.Models
{
    public class Movie
    {
        public const int REGULAR     = 0;
        public const int NEW_RELEASE = 1;
        public const int CHILDREN    = 2;

        public int PriceCode { get; set; }
        public virtual string Title { get; }

        public Movie(string title, int priceCode)
        {
            this.Title     = title;
            this.PriceCode = priceCode;
        }
    }
}
