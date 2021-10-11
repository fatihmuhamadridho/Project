import Layout from "./components/Layout";
import React, { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import {
  getProducts,
  deleteProduct,
  editProduct,
  addProduct,
} from "../redux/actions/productActions";
import Image from "next/image";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faTrash,
  faPen,
  faWindowClose,
  faInfoCircle,
} from "@fortawesome/free-solid-svg-icons";
import Modal from "react-modal";
import ProductDetail from "react-modal";
import EditProduct from "react-modal";
import Swal from "sweetalert2";
import Head from "next/head";

(Modal, ProductDetail, EditProduct).setAppElement();

const Products = () => {
  const dispatch = useDispatch();
  const allProductsData = useSelector((state) => state.Products);
  const { loading, error, products } = allProductsData;

  // MODAL
  const [modalIsOpen, setModalIsOpen] = useState(false);
  const [descModalIsOpen, setdescModalIsOpen] = useState(false);
  const [editModalIsOpen, seteditModalIsOpen] = useState(false);

  // LOAD DATA
  useEffect(() => {
    dispatch(getProducts());
  }, []);

  // SEARCH TITLE
  const [inputSearch, setInputSearch] = useState("");

  // HANDLE CHANGE
  const handleChange = (e) => {
    let data = { ...userInput };
    data[e.target.name] = e.target.value;
    setUserInput(data);
  };

  const handleChangeEdit = (e) => {
    let data = { ...userEdit };
    data[e.target.name] = e.target.value;
    setUserEdit(data);
  };

  const handleChangeSearch = (e) => {
    e.preventDefault();
    setInputSearch(e.target.value);
  };

  // ADD PRODUCT
  const [userInput, setUserInput] = useState({
    title: "",
    price: "",
    description: "",
    image: "",
    category: "",
  });

  const handleSubmit = (e) => {
    e.preventDefault();

    if (
      (userInput.title === "",
      userInput.price === "",
      userInput.description === "",
      userInput.image === "",
      userInput.category === "")
    ) {
      return false;
    }

    dispatch(
      addProduct({
        title: userInput.title,
        price: userInput.price,
        description: userInput.description,
        image: userInput.image,
        category: userInput.category,
      })
    );
    Swal.fire(
      "Berhasil Tambah Produk!",
      "Product " + userInput.title + " Berhasil di Tambah!",
      "success"
    );

    setUserInput({
      title: "",
      price: "",
      description: "",
      image: "",
      category: "",
    });
  };

  // EDIT AND UPDATE PRODUCT
  const [userEdit, setUserEdit] = useState({
    title: "",
    price: "",
    description: "",
    image: "",
    category: "",
  });

  const handleEdit = (product) => {
    setUserEdit({
      id: product.id,
      title: product.title,
      price: product.price,
      description: product.description,
      image: product.image,
      category: product.category,
    });
    console.log("Product = " + product.id);
  };

  const handleUpdate = (e) => {
    e.preventDefault();

    dispatch(
      editProduct({
        id: userEdit.id,
        title: userEdit.title,
        price: userEdit.price,
        description: userEdit.description,
        image: userEdit.image,
        category: userEdit.category,
      })
    );
    Swal.fire(
      "Berhasil Update Produk!",
      "Product " + userEdit.title + " Berhasil di Update!",
      "success"
    );

    setUserEdit({
      title: "",
      price: "",
      description: "",
      image: "",
      category: "",
    });
  };

  return (
    <div>
      <Head>
        <title>Product List</title>
        <link rel="icon" href="/logo1.ico" />
      </Head>
      <Layout />
      <section className="article">
        <h1 style={{ lineHeight: "0px", marginTop: "80px" }}>List Products</h1>
        {/* MODAL PRODUCT DETA…
