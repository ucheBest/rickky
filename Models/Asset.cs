using System;
using System.ComponentModel.DataAnnotations.Schema;


namespace Hahn.ApplicationProcess.Application.Models
{    
  public class Asset
  {
    public int ID { get; set; }
    public string AssetName { get; set; }
    public Department Department { get; set; }
    public string CountryOfDepartment { get; set; }
    public string EMailAddress { get; set; }
    [DatabaseGenerated(DatabaseGeneratedOption.Identity)]
    public DateTime PurchaseDate { get; set; } = DateTime.UtcNow;
    public bool Broken { get; set; }
  }
}
