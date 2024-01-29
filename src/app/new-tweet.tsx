const NewTweet = () => {
  return (
    <div className="w-full p-4 bg-base-100 rounded-xl">
      <div className="prose">
        <h3>Tweet Baru</h3>
        <textarea
          className="textarea textarea-bordered w-full"
          placeholder="Tulis tweet disini"
          rows={4}
        ></textarea>
        <div className="flex justify-end">
          <button className="btn btn-primary btn-sm">Kirim</button>
        </div>
      </div>
    </div>
  );
};

export default NewTweet;
