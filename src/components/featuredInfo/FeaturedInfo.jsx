import "./featuredInfo.css";
import { ArrowDownward, ArrowUpward } from "@material-ui/icons";

export default function FeaturedInfo() {
  return (
    <div className="featured">
      <div className="featuredItem">
        <span className="featuredTitle">DOANH THU</span>
        <div className="featuredMoneyContainer">
          <span className="featuredMoney">259.000đ</span>
          <span className="featuredMoneyRate">
            -10.400 <ArrowDownward  className="featuredIcon negative"/>
          </span>
        </div>
        <span className="featuredSub">So với tháng trước</span>
      </div>
    
    </div>
  );
}
