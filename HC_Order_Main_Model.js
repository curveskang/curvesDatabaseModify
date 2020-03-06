// From
//nameMappingTable_keys=Object.keys(nameMappingTable)
//var bbb=[];
//for (var i=0; i< nameMappingTable_keys.length; i++) {
//    bbb.push(nameMappingTable[nameMappingTable_keys[i]])
//}

var nameMappingTable = {
  "order_No":"訂單編號",
  "previous_Order_No":"前筆訂單編號",
  "sold_Franchise_Code":"販售店鋪代號",
  "sold_Franchise_Name":"販售店鋪名稱",
  "belonging_Franchise_Code":"所屬店鋪代號",
  "belonging_Franchise_Name":"所屬店鋪名稱",  
  "member_No":"會員編號",
  "member_Name":"會員姓名",
  "mobile_No":"手機號碼",
  "monthly_Shipment_Date":"每月出貨日",
  "order_Date":"送審日期",
  "firstShippingMonth":"首次出貨或異動月份",
  "coach_Name":"擔當教練",
  "birthday":"生日",
  "email_Address":"E-mail",
  "receiver_Name":"收件人姓名",
  "receiver_TEL":"收件人電話",
  "receiver_Zip_Code":"收件人郵遞區號",
  "receiver_City":"收件縣市",
  "receiver_Town":"收件鄉鎮",
  "receiver_Address":"收件地址",
  "member_Type":"會籍狀態",
  "fourIn1_Number":"四合一盒數",
  "lemon_Number":"檸檬盒數",
  "matcha_Number":"抹茶盒數",
  "sesame_Number":"芝麻盒數",
  "pumpkinPeanut_Number":"南瓜花生盒數",
  "tieguanyin_Number":"鐵觀音盒數",
  "protein_Recurring_Number":"乳清蛋白循環訂購盒數",
  "protein_Monthly_Charge":"乳清蛋白每月支付金額",
  "probiotics_Recurring_Number":"沛菌多循環訂購盒數",
  "probiotics_Monthly_Charge":"沛菌多每月支付金額",
  "credit_Card":"支付方式-信用卡扣款",
  "bank_Transfer":"支付方式--銀行匯款",
  "credit_Card_No":"信用卡號",
  "credit_Card_Period":"有效期限",
  "as_Member_Data":"信用卡同月費資料",
  "credit_Card_Relation":"持卡人關係",
  "credit_Card_Sign":"持卡人簽名",
  "protein_Bank_Transfer_People":"乳清蛋白匯款人數",
  "protein_Bank_Transfer_Charge":"乳清蛋白匯款金額",
  "probiotics_Bank_Transfer_People":"沛菌多匯款人數",
  "probiotics_Bank_Transfer_Charge":"沛菌多匯款金額",
  "bank_Transfer_Date":"匯款日期",
  "bank_Transfer_No":"匯款帳號",
  "depositor_Without_Bankbook_Name":"無摺存款人",
  "confirm_Terms":"我已詳細閱讀商品",
  "two_Copies_Invoice":"二聯發票",
  "e_Invoice_Vehicle_No":"電子發票載具號碼",
  "e_Invoice_Vehicle_Type":"電子發票載具類型",
  "three_Copies_Invoice":"三聯發票",
  "tax_ID_Number":"統一編號",
  "invoice_Title":"發票抬頭",
  "notice_1":"注意事項一",
  "notice_2":"注意事項二",
  "notice_3":"注意事項三",
  "notice_4":"注意事項四",
  "notice_5":"注意事項五",
  "notice_6":"注意事項六",
    
  "time_FA":"Time_FA",
  "time_FWO":"Time_FWO",
  "time_2W":"Time_2W",
  "time_1WM":"Time_1WM",
  "time_2_3WM":"Time_2_3WM",
  "time_Over_3WM":"Time_Over_3WM",

  "tools_BK":"營養日記",
  "tools_OpenL":"開放講座",
  "tools_ReservedL":"預約講座",

  "tools_PT":"因敏腸問卷而來",
  "tools_DM":"因DM而來",
  "tools_None":"無因工具而來",
 
  "order_Sign":"訂購人簽名",
  "order_Remark":"訂購單備註",
  
  /// 訂單狀態, 「P」暫停，「X」退訂，「E」有效訂購單，「R」送審中，「Z」無效，「空白」未定狀態
  "order_Status": "訂單狀態",
  "submission_Date":"送審日期",
  "approved_Date":"核覆日期",
  "approved":"核可受理",
  "funtion_Code":"功能編碼",
  "created_Date":"建檔日期",
  "creator_ID":"建檔人代碼",
  "creator_Name":"建檔人名稱",
  
  /// 20181206 記錄由 HC05 Grid 增加的出貨時間
 
  "出貨時間歷史記錄":"出貨時間歷史記錄",

  //    #region 暫停專區
  "suspend_Protein":"暫停品項-乳清蛋白",
  "suspend_Probiotics":"暫停品項-沛菌多",
  "suspend_Reason":"暫停原因-乳清蛋白及沛菌多",
  "suspend_Start_Month":"暫停出貨月份-起始",
  "suspend_End_Month":"暫停出貨月份-截止",
  "suspend_Confirm_Terms":"我已確認將於N月暫停",
  "recovery_Shipment_Month":"恢復出貨月份",
  "recovery_Shipment_Day":"恢復出貨日",
  
  //#endregion 暫停專區

  //#region 退訂專區
  "cancel_Reason_Protein":"退訂原因-乳清蛋白",
  "cancel_Confirm_Terms_Protein":"我已確認退訂乳清蛋白",
  "last_Shipment_Date_Protein":"最後出貨日-乳清蛋白",
  "cancel_Reason_Probiotics":"退訂原因-沛菌多",
  "cancel_Confirm_Terms_Probiotics":"我已確認退訂沛菌多",
  "last_Shipment_Date_Probiotics":"最後出貨日-沛菌多",
  //#endregion

  /// 190904 新增最後刷卡時間，由 SKBRProcess API 進行更新
 
  "最後刷卡時間":"最後刷卡時間",
  
  /// 191007 單盒配送箱(數量)，可由 HC01/HC05 更新
  "single_Delivery_Box":"單盒配送箱(數量)",

  //#region 訂單匯入專區
  "import_Order_No":"訂單匯入時使用的編號",
  "import_Time":"訂單匯入時間",
  "is_Import":"是否是經過匯入的訂單",
  "import_Ship_History":"經過匯入的出貨歷史紀錄",
  //#endregion

  "protein_Sold_Count":"現場已販售(乳清)",
  "probiotics_Sold_Count":"現場已販售(益菌)",
  "serverUpdateTime":"總部更新時間點(同步用)"
}

var typeMappingTable = {
  "order_No":"string",
  "previous_Order_No":"string",
  "sold_Franchise_Code":"string",
  "sold_Franchise_Name":"string",
  "belonging_Franchise_Code":"string",
  "belonging_Franchise_Name":"string",  
  "member_No":"string",
  "member_Name":"string",
  "mobile_No":"string",
  "monthly_Shipment_Date":"int",
  "order_Date":"dateTime",
  "firstShippingMonth":"dateTime",
  "coach_Name":"string",
  "birthday":"dateTime",
  "email_Address":"string",
  "receiver_Name":"string",
  "receiver_TEL":"string",
  "receiver_Zip_Code":"string",
  "receiver_City":"string",
  "receiver_Town":"string",
  "receiver_Address":"string",
  "member_Type":"string",
  "fourIn1_Number":"int",
  "lemon_Number":"int",
  "matcha_Number":"int",
  "sesame_Number":"int",
  "pumpkinPeanut_Number":"int",
  "tieguanyin_Number":"int",
  "protein_Recurring_Number":"int",
  "protein_Monthly_Charge":"double",
  "probiotics_Recurring_Number":"int",
  "probiotics_Monthly_Charge":"double",
  "credit_Card":"bool",
  "bank_Transfer":"bool",
  "credit_Card_No":"string",
  "credit_Card_Period":"dateTime",
  "as_Member_Data":"bool",
  "credit_Card_Relation":"string",
  "credit_Card_Sign":"byte[]",
  "protein_Bank_Transfer_People":"int",
  "protein_Bank_Transfer_Charge":"double",
  "probiotics_Bank_Transfer_People":"int",
  "probiotics_Bank_Transfer_Charge":"double",
  "bank_Transfer_Date":"dateTime",
  "bank_Transfer_No":"string",
  "depositor_Without_Bankbook_Name":"string",
  "confirm_Terms":"bool",
  "two_Copies_Invoice":"bool",
  "e_Invoice_Vehicle_No":"string",
  "e_Invoice_Vehicle_Type":"string",
  "three_Copies_Invoice":"bool",
  "tax_ID_Number":"string",
  "invoice_Title":"string",
  "notice_1":"bool",
  "notice_2":"bool",
  "notice_3":"bool",
  "notice_4":"bool",
  "notice_5":"bool",
  "notice_6":"bool",
    
  "time_FA":"bool",
  "time_FWO":"bool",
  "time_2W":"bool",
  "time_1WM":"bool",
  "time_2_3WM":"bool",
  "time_Over_3WM":"bool",

  "tools_BK":"bool",
  "tools_OpenL":"bool",
  "tools_ReservedL":"bool",

  "tools_PT":"bool",
  "tools_DM":"bool",
  "tools_None":"bool",
 
  "order_Sign":"byte[]",
  "order_Remark":"string",
  
  /// 訂單狀態, 「P」暫停，「X」退訂，「E」有效訂購單，「R」送審中，「Z」無效，「空白」未定狀態
  "order_Status": "string",
  "submission_Date":"dateTime",
  "approved_Date":"dateTime",
  "approved":"bool",
  "funtion_Code":"string",
  "created_Date":"dateTime",
  "creator_ID":"string",
  "creator_Name":"string",
  
  /// 20181206 記錄由 HC05 Grid 增加的出貨時間
 
  "出貨時間歷史記錄":"array",

  //    #region 暫停專區
  "suspend_Protein":"bool",
  "suspend_Probiotics":"bool",
  "suspend_Reason":"string",
  "suspend_Start_Month":"dateTime",
  "suspend_End_Month":"dateTime",
  "suspend_Confirm_Terms":"bool",
  "recovery_Shipment_Month":"dateTime",
  "recovery_Shipment_Day":"dateTime",
  
  //#endregion 暫停專區

  //#region 退訂專區
  "cancel_Reason_Protein":"string",
  "cancel_Confirm_Terms_Protein":"bool",
  "last_Shipment_Date_Protein":"dateTime",
  "cancel_Reason_Probiotics":"string",
  "cancel_Confirm_Terms_Probiotics":"bool",
  "last_Shipment_Date_Probiotics":"dateTime",
  //#endregion

  /// 190904 新增最後刷卡時間，由 SKBRProcess API 進行更新
 
  "最後刷卡時間":"dateTime",
  
  /// 191007 單盒配送箱(數量)，可由 HC01/HC05 更新
  "single_Delivery_Box":"int",

  //#region 訂單匯入專區
  "import_Order_No":"string",
  "import_Time":"dateTime",
  "is_Import":"bool",
  "import_Ship_History":"array",
  //#endregion

  "protein_Sold_Count":"int",
  "probiotics_Sold_Count":"int",
  "serverUpdateTime":"dateTime"
}


//  
//#if DevpServer || DEBUG
//		"TracingNode = DateTime.Now.ToString(GMAfSetting.AfSetting.DateFormat1);
// 
//		/// U: Update, C: Create
// 
//		"TracingAction = "U";
//#endif
//	}
//
//	 
//	/// 訂單總覽 View Model
//	 
//	public class HC05_ViewModel : DataConverter.IConvertAtoB<HC_Order_Main_Model>
//	{
//		#region Cosmos DB 表格專用
// 
//		/// 初始化
// 
//		public HC05_ViewModel()
//		{
//			SetTableType(CosmosDbTableType.HC_Order_Main);
//		}
//
//		[JsonProperty("id")]
//		"DbId":
//		public CosmosDbTableType TableType":
//
//		public void SetTableType(CosmosDbTableType tableType)
//		{
//			this.TableType = tableType;
//		}
//
//		public Ttarget CopyAToB<Tsource, Ttarget>(Tsource objSource)
//		{
//			return DataConverter.ConvertAtoB<Tsource, Ttarget>(objSource);
//		}
//
//		#endregion
//
// 
//		/// 訂單編號
// 
//		"Order_No":
// 
//		/// 前筆訂單編號
// 
//		"Previous_Order_No"
// 
//		/// 訂購日期
// 
//		"Order_Date":
//  
//		/// 首次出貨/異動月份
// 
//        "FirstShippingMonth":
//  
//        /// 所屬店鋪名稱
// 
//        "Belonging_Franchise_Name":
// 
//		/// 販售店鋪名稱
// 
//		"Sold_Franchise_Name":
// 
//		/// 會員編號
// 
//		"Member_No":
// 
//		/// 會員姓名
// 
//		"Member_Name":
// 
//		/// 手機號碼
// 
//		"Mobile_No":
// 
//		/// 每月出貨日
// 
//		 Monthly_Shipment_Date":
// 
//		/// 訂單狀態, 「P」暫停，「X」退訂，「E」有效訂購單，「R」送審中，「空白」未定狀態
// 
//		"Order_Status":
//  
//        /// 繳費方式
// 
//        "Payment_Method":
//  
//        /// 190904 新增最後刷卡時間，由 SKBRProcess API 進行更新
// 
//		"最後刷卡時間":
//  
//        /// 擔當教練
// 
//        "Coach_Name":
//  
//        /// 顯示 出貨時間歷史記錄 最新的一筆日期
// 
//        "出貨時間":
// 
//		/// 當月扣款結果
// 
//		"當月扣款結果":
//  
//		/// 訂購單備註
// 
//		"Order_Remark":
//  
//        /// 191007 單盒配送箱(數量)，可由 HC01/HC05 更新
// 
//         Single_Delivery_Box":
//  
//        /// 191007 單盒配送箱(數量)的修改值，供前端檢查
// 
//         Edit_Single_Delivery_Box":
//    }
//
//     
//    /// 待處理新訂單 View Model
//     
//    public class HC01_ViewModel : DataConverter.IConvertAtoB<HC_Order_Main_Model>
//	{
//		#region Cosmos DB 表格專用
// 
//		/// 初始化
// 
//		public HC01_ViewModel()
//		{
//			SetTableType(CosmosDbTableType.HC_Order_Main);
//		}
//
//		[JsonProperty("id")]
//		"DbId":
//		public CosmosDbTableType TableType":
//
//		public void SetTableType(CosmosDbTableType tableType)
//		{
//			this.TableType = tableType;
//		}
//
//		public Ttarget CopyAToB<Tsource, Ttarget>(Tsource objSource)
//		{
//			return DataConverter.ConvertAtoB<Tsource, Ttarget>(objSource);
//		}
//
//		#endregion
//
// 
//		/// 訂單編號
// 
//		"Order_No":
//  
//        /// 前筆訂單編號
// 
//        "Previous_Order_No":
//  
//        /// 訂單狀態, 「P」暫停，「X」退訂，「E」有效訂購單，「R」送審中，「S」資料待補，「空白」未定狀態
// 
//        "Order_Status":
// 
//		/// 訂購日期
// 
//		"Order_Date":
//  
//		/// 首次出貨/異動月份
// 
//        "FirstShippingMonth":
//  
//        /// 所屬店鋪名稱
// 
//        "Belonging_Franchise_Name":
// 
//		/// 擔當教練
// 
//		"Coach_Name":
// 
//		/// 會員編號
// 
//		"Member_No":
// 
//		/// 姓名
// 
//		"Member_Name":
// 
//		/// 手機號碼
// 
//		"Mobile_No":
// 
//		/// 每月出貨日
// 
//		 Monthly_Shipment_Date":
//  
//        /// 繳費方式
// 
//        "Payment_Method":
//  
//        /// 販售店鋪名稱
// 
//        "Sold_Franchise_Name":
// 
//		/// 系統顯示所有訂購品項口味名稱(盒數組合字串)
// 
//		"品項":
//  
//		/// 訂購單備註
// 
//		"Order_Remark":
//  
//        /// 使用於 HC01 Grid 操作：待處理 / 核可受理 / 資料待補
// 
//        public 訂單處理結果 處理結果": = 訂單處理結果.核可受理;
//  
//        /// 191007 單盒配送箱(數量)，可由 HC01/HC05 更新
// 
//         Single_Delivery_Box":
//  
//        /// 191007 單盒配送箱(數量)的修改值，供前端檢查
// 
//         Edit_Single_Delivery_Box":
//
//  
//        /// 現場已販售(乳清)
// 
//         Protein_Sold_Count":
//  
//        ///  現場已販售(益菌)
// 
//         Probiotics_Sold_Count":
//  
//		/// 191023 首次出貨/異動月份的修改值，供前端檢查
// 
//        "Edit_FirstShippingMonth":
//    }
//
//	 
//	/// 搭配 SKBR 查詢訂單出貨記錄
//	 
//	public class HC03_ViewModel
//	{
//		#region Cosmos DB 表格專用
// 
//		/// 初始化
// 
//		public HC03_ViewModel()
//		{
//			SetTableType(CosmosDbTableType.HC_Order_Main);
//		}
//
//		[JsonProperty("id")]
//		"DbId":
//		public CosmosDbTableType TableType":
//
//		public void SetTableType(CosmosDbTableType tableType)
//		{
//			this.TableType = tableType;
//		}
//
//		public Ttarget CopyAToB<Tsource, Ttarget>(Tsource objSource)
//		{
//			return DataConverter.ConvertAtoB<Tsource, Ttarget>(objSource);
//		}
//
//		#endregion
//
//		"Order_No":
//
//		#region 商品內容 (從原訂單)
// 
//		/// 四合一盒數
// 
//		 FourIn1_Number":
// 
//		/// 檸檬盒數
// 
//		 Lemon_Number":
// 
//		/// 抹茶盒數
// 
//		 Matcha_Number":
// 
//		/// 芝麻盒數
// 
//		 Sesame_Number":
//  
//		/// 南瓜花生盒數
// 
//		 PumpkinPeanut_Number":
//  
//        /// 鐵觀音盒數
// 
//         Tieguanyin_Number":
//  
//        /// 乳清蛋白循環訂購盒數
// 
//         Protein_Recurring_Number":
//  
//		/// 乳清蛋白每月支付金額
// 
//		"Protein_Monthly_Charge":
//  
//        /// 沛菌多循環訂購盒數
// 
//         Probiotics_Recurring_Number":
//  
//		/// 沛菌多每月支付金額
// 
//		"Probiotics_Monthly_Charge":
//  
//		/// 收件人姓名
// 
//		"Receiver_Name":
//  
//		/// 收件人電話
// 
//		"Receiver_TEL":
//  
//        /// 收件郵遞區號
// 
//        "Receiver_Zip_Code":
//  
//        /// 收件縣市
// 
//        "Receiver_City":
//  
//        /// 收件鄉鎮
// 
//        "Receiver_Town":
//  
//        /// 收件地址
// 
//        "Receiver_Address":
//  
//		/// 統一編號
// 
//		"Tax_ID_Number":
//  
//		/// 發票抬頭
// 
//		"Invoice_Title":
//  
//		/// 電子發票載具號碼
// 
//		"E_Invoice_Vehicle_No":
//  
//		/// 電子發票載具類型
// 
//		"E_Invoice_Vehicle_Type":
//  
//		/// E-mail
// 
//		"Email_Address":
//  
//		/// 信用卡號
// 
//		"Credit_Card_No":
//  
//		/// 所屬店鋪代號
// 
//		"Belonging_Franchise_Code":
//  
//        /// 所屬店鋪名稱
// 
//        "Belonging_Franchise_Name":
//  
//		/// 每月出貨日
// 
//		 Monthly_Shipment_Date":
//        #endregion
//
//        public List<DateTime> 出貨時間歷史記錄":
//
//		"取得最後出貨記錄()
//		{
//			if (出貨時間歷史記錄 != null && 出貨時間歷史記錄.Count >= 1)
//			{
//				return 出貨時間歷史記錄.Max(m => m);
//			}
//			else
//			{
//				return DateTime.MinValue;
//			}
//		}
//	}
//
//    public class HC08_ViewModel
//    {
//        #region Cosmos DB 表格專用
//  
//        /// 初始化
// 
//        public HC08_ViewModel()
//        {
//            SetTableType(CosmosDbTableType.HC_Order_Main);
//        }
//
//        [JsonProperty("id")]
//        "DbId":
//        public CosmosDbTableType TableType":
//
//        public void SetTableType(CosmosDbTableType tableType)
//        {
//            this.TableType = tableType;
//        }
//
//        public Ttarget CopyAToB<Tsource, Ttarget>(Tsource objSource)
//        {
//            return DataConverter.ConvertAtoB<Tsource, Ttarget>(objSource);
//        }
//        #endregion
//
//        #region 原訂單內容
//  
//        /// 訂單編號
// 
//        "Order_No":
//  
//		/// 訂購日期
// 
//		"Order_Date":
//  
//        /// 所屬店鋪名稱
// 
//        "Belonging_Franchise_Name":
//  
//		/// 販售店鋪名稱
// 
//		"Sold_Franchise_Name":
//  
//		/// 會員編號
// 
//		"Member_No":
//  
//		/// 姓名
// 
//		"Member_Name":
//  
//        /// 手機號碼
// 
//        "Mobile_No":
//        #endregion
//
//        #region 異動單內容
//  
//		/// 暫停出貨期間
// 
//		"Suspend_Period":
//  
//		/// 恢復出貨日(含月份)
// 
//		"Recovery_Shipment_Date":
//        #endregion
//    }
//
//    public enum 訂單處理結果
//	{
//		待處理 = 0,
//		核可受理 = 1,
//		資料待補 = 2,
//        退回 = 3,
//	}
//
//     
//    /// 訂單匯出資料專用
//     
//    public class OrderExportData
//    {
//  
//        /// 信用卡有效訂單
// 
//        public List<List<string>> Order_Credit": = new List<List<string>>();
//  
//        /// 年繳有效訂單
// 
//        public List<List<string>> Order_Bank": = new List<List<string>>();
//  
//        /// 暫停訂單
// 
//        public List<List<string>> Order_Suspend": = new List<List<string>>();
//  
//        /// 退訂訂單
// 
//        public List<List<string>> Order_Cancel": = new List<List<string>>();
//    }
//
//    public class OrderImportResult
//    {
//	    "ErrTag": = RandGenerator.GetRandHex(6);
//         SuccessCount": = 0;
//        public List<OrderImportFailInfo> FailList": = new List<OrderImportFailInfo>();
//        "FinalExcp"
//    }
//
//    public class OrderImportFailInfo
//    {
//        "Order_No"
//        "Reason"
//        "Reason_Excp": = null;
//    }
//
//	public class OrderRollback_ViewModel
//	{
//		#region Cosmos DB 表格專用
// 
//		/// 初始化
// 
//		public OrderRollback_ViewModel()
//		{
//			SetTableType(CosmosDbTableType.HC_Order_Main);
//		}
//
//		[JsonProperty("id")]
//		"DbId":
//		public CosmosDbTableType TableType":
//
//		public void SetTableType(CosmosDbTableType tableType)
//		{
//			this.TableType = tableType;
//		}
//
//		public Ttarget CopyAToB<Tsource, Ttarget>(Tsource objSource)
//		{
//			return DataConverter.ConvertAtoB<Tsource, Ttarget>(objSource);
//		}
//		#endregion
//
// 
//		/// 訂單編號
// 
//		"Order_No":
//
//		"TracingNode = DateTime.Now.ToString(GMAfSetting.AfSetting.DateFormat1);
// 
//		/// U: Update, C: Create
// 
//		"TracingAction = "U";
//	}
//}