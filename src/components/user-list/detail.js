import classes from './list.module.css'
import loadingGIF from './loading.gif'
import { useState, useEffect } from "react";

export default function Detail(props) {
  const [detailData, SetDetailData] = useState(undefined);
  const [loading, setLoading] = useState(true);
  const [imageLoading, setImageLoading] = useState(false);

  const loadDetail = () => {
    setLoading(true);
    setImageLoading(true);

    fetch(props.url + `/${props.id}.json`,
      )
      .then(response => response.json())
      .then(data => {
        SetDetailData(data);
        setLoading(false);
      });
  }

  useEffect(() => {
    if (props.id) loadDetail();
    }, [props.id]
  );

  const onLoadedImage = (id) => {
    setImageLoading(false);
  }

  return (
    <>
      <div className={classes["detailImage"]}>
        {imageLoading && <img className={classes["detailImageLoading"]} src={loadingGIF} alt=''/>}
        {!loading && <img src={detailData.avatar} alt={detailData.name} onLoad={() => onLoadedImage(props.id)}/>}
      </div>
      <div className={classes["detailName"]}>
        {!loading && detailData.name}
      </div>
      <div className={classes["detailCity"]}>
        City: {!loading && detailData.details.city}
      </div>
      <div className={classes["detailCompany"]}>
        Company: {!loading && detailData.details.company}
      </div>
      <div className={classes["detailPosition"]}>
        Position: {!loading && detailData.details.position}
      </div>
    </>
  )
}
