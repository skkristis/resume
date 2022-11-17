export default function FlexContainer({
  ArticleListInfo,
  className = "container-pg",
}) {
  return (
    <div className={className}>
      {ArticleListInfo.map((article) => {
        return (
          <article>
            <h5>{article.title}</h5>
            <h6>
              {article.company} <br />
              {article.timeStart} - {article.timeEnd}
            </h6>
            <p>
              <p className="not-bold"> {article.text}</p>
              <div className="article-list_container">
                {article.list.map((listText) => (
                  <p className="not-bold">• {listText}</p>
                ))}
              </div>
            </p>
          </article>
        );
      })}
    </div>
  );
}
