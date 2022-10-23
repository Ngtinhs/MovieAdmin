import { useContext, useEffect, useState } from "react";
import "./newList.css";
import storage from "../../firebase";
import { createMovie, getMovies } from "../../context/movieContext/apiCalls";
import { MovieContext } from "../../context/movieContext/MovieContext";
import { ListContext } from "../../context/listContext/ListContext";
import { createList } from "../../context/listContext/apiCalls";
import { useHistory } from "react-router-dom";

export default function NewList() {
  const [list, setList] = useState(null);
  const history = useHistory()

  const { dispatch } = useContext(ListContext);
  const { movies, dispatch: dispatchMovie } = useContext(MovieContext);

  useEffect(() => {
    getMovies(dispatchMovie);
  }, [dispatchMovie]);

  const handleChange = (e) => {
    const value = e.target.value;
    setList({ ...list, [e.target.name]: value });
  };

  const handleSelect = (e) => {
    let value = Array.from(e.target.selectedOptions, (option) => option.value);
    setList({ ...list, [e.target.name]: value });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    createList(list, dispatch);
    history.push("/lists")
  };

  return (
    <div className="newProduct">
      <h1 className="addProductTitle">THÊM DANH SÁCH PHIM</h1>
      <form className="addProductForm">
        <div className="formLeft">
          <div className="addProductItem">
            <label>Tiêu đề</label>
            <input
              type="text"
              placeholder="Nhập tiêu đề danh sách"
              name="title"
              onChange={handleChange}
            />
          </div>
          <div className="addProductItem">
            <label>Thể loại</label>
            <input
              type="text"
              placeholder="Thể loại"
              name="genre"
              onChange={handleChange}
            />
          </div>
          <div className="addProductItem">
            <label>Loại phim</label>
            <select name="Loại" onChange={handleChange}>
              <option value="movie">Phim</option>
              <option value="series">Phim truyền hình</option>
            </select>
          </div>
        </div>
        <div className="formRight">
          <div className="addProductItem">
            <label>Chọn phim</label>
            <select
              multiple
              name="content"
              onChange={handleSelect}
              style={{ height: "280px" }}
            >
              {movies.map((movie) => (
                <option key={movie._id} value={movie._id}>
                  {movie.title}
                </option>
              ))}
            </select>
          </div>
        </div>
        <button className="addProductButton" onClick={handleSubmit}>
          Tạo
        </button>
      </form>
    </div>
  );
}
