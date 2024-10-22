const Counter = () => {
  // auto counter and stop at the given number

  return (
    <div className=" mt-4   h-full mb-20 px-4">
      <hr className=" border-cyan-500 py-4 " />
      <div className="  grid grid-cols-1  md:grid-cols-3 lg:grid-cols-4  xl:grid-cols-5   gap-5 ">
        <div className=" flex flex-col  items-center  ">
          <div className="text-4xl font-bold"> 25</div>
          <div className="text-sm   ">
            <p className=" text-center">
              <span className=" border-b-0   border brand_text px-2  uppercase  border-cyan-400       text-center  ">
                years
              </span>

              <br />

              <span className="  border brand_text px-2  uppercase    border-cyan-400   text-center  ">
                experience
              </span>
            </p>
          </div>
        </div>
        <div className=" flex flex-col  items-center  ">
          <div className="text-4xl font-bold">835</div>
          <div className="text-sm   ">
            <p className=" text-center">
              <span className="  border brand_text px-2  uppercase    border-cyan-400   text-center  ">
                Medicament
              </span>
              <br />
              <span className="  border-t-0  border brand_text px-2  uppercase   border-cyan-400    text-center  ">
                Invented
              </span>
            </p>
          </div>
        </div>
        <div className=" flex flex-col  items-center  ">
          <div className="text-4xl font-bold">75</div>
          <div className="text-sm   ">
            <p className=" text-center">
              <span className="  border brand_text px-2  uppercase  border-cyan-400     text-center  ">
                Awards
              </span>
              <br />
              <span className="border-t-0  border brand_text px-2  uppercase   border-cyan-400    text-center  ">
                Winned
              </span>
            </p>
          </div>
        </div>
        <div className=" flex flex-col  items-center  ">
          <div className="text-4xl font-bold">673k</div>
          <div className="text-sm   ">
            <p className=" text-center">
              <span className=" border-b-0 border brand_text px-2  uppercase  border-cyan-400     text-center  ">
                Happy
              </span>
              <br />
              <span className="   border brand_text px-2  uppercase    border-cyan-400   text-center  ">
                Clients
              </span>
            </p>
          </div>
        </div>
        <div className=" flex flex-col  items-center  ">
          <div className="text-4xl font-bold">85</div>
          <div className="text-sm   ">
            <p className=" text-center">
              <span className="  border brand_text px-2  uppercase border-cyan-400    text-center  ">
                Pharmacies
              </span>
              <br />
              <span className="  border-t-0  border brand_text px-2  uppercase    border-cyan-400  text-center  ">
                Partners
              </span>
            </p>
          </div>
        </div>
      </div>
    </div>
  )
}

export default Counter
