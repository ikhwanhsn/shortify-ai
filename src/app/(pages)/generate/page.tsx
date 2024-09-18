const GeneratePage = () => {
  return (
    <main className="min-h-screen flex justify-center items-center">
      <section>
        <h1 className="text-3xl font-bold text-center">
          Generate Your Content
        </h1>
        <section className="mt-3 flex gap-1 items-center">
          <select className="select select-bordered bg-white w-44">
            <option disabled selected>
              Platform
            </option>
            <option>Shorts Youtube</option>
            <option>Videos TikTok</option>
            <option>Reels Instagram</option>
            <option>Reels Facebook</option>
          </select>
          <input
            type="text"
            name="topic"
            id="topic"
            placeholder="Topic..."
            className="input input-bordered bg-white w-44"
          />
          <input
            type="text"
            name="keyword"
            id="keyword"
            placeholder="Keyword..."
            className="input input-bordered bg-white w-44"
          />
          <select className="select select-bordered bg-white w-44">
            <option disabled selected>
              Tone of voice
            </option>
            <option>Formal</option>
            <option>Casual</option>
            <option>Humorous</option>
            <option>Professional</option>
          </select>
          <select className="select select-bordered bg-white w-44">
            <option disabled selected>
              Duration
            </option>
            <option>15 seconds</option>
            <option>30 seconds</option>
            <option>45 seconds</option>
            <option>60 seconds</option>
          </select>
          <select className="select select-bordered bg-white w-44">
            <option disabled selected>
              Type of content
            </option>
            <option>Faceless</option>
            <option>Show face</option>
          </select>
        </section>
        <center className="mt-2 space-x-1">
          <button className="btn btn-warning text-white w-32">
            Save settings
          </button>
          <button className="btn btn-primary text-white w-32">
            Generate now!
          </button>
          <button className="btn btn-error text-white w-32">Clear all</button>
        </center>
      </section>
    </main>
  );
};

export default GeneratePage;
