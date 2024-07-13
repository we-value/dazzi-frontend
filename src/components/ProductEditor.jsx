import "./ProductEditor.css";

const ProductEditor = () => {
  return (
    <div className="Editor">
      <section className="date_section">
        <h4>오늘의 날짜</h4>
        <input
          name="createdDate"
          //   value={getStringedDate(input.createdDate)}
          //   onChange={onChangeInput}
          type="date"
        />
      </section>
      <section className="emotion_section">
        <h4>오늘의 감정</h4>
        <div className="emotion_list_wrapper">
          {/* {emotionList.map((item) => (
            <EmotionItem
              onClick={() =>
                onChangeInput({
                  target: {
                    name: "emotionId",
                    value: item.emotionId,
                  },
                })
              }
              key={item.emotionId}
              {...item}
              isSeleted={item.emotionId === input.emotionId} */}
          {/* /> */}
          {/* ))} */}
        </div>
      </section>
      <section className="content_section">
        <h4>오늘의 일기</h4>
        <textarea
          name="content"
          //   value={input.content}
          //   onChange={onChangeInput}
          placeholder="오늘은 어떠셨나요?"
        />
      </section>
      <section className="button_section">
        {/* <Button onClick={() => nav(-1)} text={"취소하기"} />
        <Button
          onClick={onClickSubmitButton}
          text={"작성완료"}
          type={"POSITIVE"}
        /> */}
      </section>
    </div>
  );
};

export default ProductEditor;
