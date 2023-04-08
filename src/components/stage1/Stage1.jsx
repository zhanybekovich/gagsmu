import React from "react";
import "./stage1.scss";

const Stage1 = () => {
  return (
    <section className="section stage-1">
      <div className="container">
        <h2 className="section-title">
          Жергиликтүү жамааттарынын уставын <span>ишке ашыруу этаптары</span>
        </h2>
        <div className="stage-top">
          <h3 className="stage-title">1-Этап</h3>
        </div>
        <div className="stage-1-steps">
          <p>Агенттиктин буйругу</p>
          <p>Жергиликтүү жамааттын Типтүү уставы</p>
          <p>
            Жергиликтүү жамааттын Типтүү уставынын айрым жоболорун турмушка
            ашыруу боюнча усулдук көрсөтмө
          </p>
        </div>
        <p className="stage-1-final">
          Айыл өкмөт же шаар мэринин чечими менен уставдын долбоорун иштеп чыгуу
          боюнча жумушчу, демилгечи топтор түзүлөт (Устав 41 пункт)
        </p>
      </div>
    </section>
  );
};

export default Stage1;
