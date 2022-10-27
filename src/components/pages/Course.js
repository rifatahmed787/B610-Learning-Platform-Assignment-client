import React from "react";
import { Link, useLoaderData } from "react-router-dom";
import { PDFDownloadLink } from "@react-pdf/renderer";
import {
  Document,
  Page,
  View,
  Image,
  Text,
  StyleSheet,
} from "@react-pdf/renderer";

const styles = StyleSheet.create({
  page: {
    flexDirection: "row",
    backgroundColor: "#E4E4E4",
  },
  image: {
    width: "20%",
    padding: 10,
  },
  text: {
    fontSize: "12px",
    margin: "10px",
  },
  section: {
    margin: 10,
    padding: 10,
    flexGrow: 1,
  },
});

const Course = () => {
  const course = useLoaderData();
  // console.log(course);
  const { title, details, image_url, category_id } = course;

  const MyDoc = () => (
    <Document>
      <Page size="A4" style={styles.page}>
        <View style={styles.section}>
          <Image style={styles.image} src={image_url}></Image>
          <Text>{title}</Text>
          <Text style={styles.text}>{details}</Text>
        </View>
      </Page>
    </Document>
  );

  return (
    <div>
      <div className="mt-3 text-center">
        <Link></Link>
      </div>
      <div className="flex flex-row">
        <div className="card w-96 bg-base-100 my-5 shadow-xl">
          <h2 className="card-title my-3 mx-auto">{title}</h2>
          <figure>
            <img src={image_url} alt="" />
          </figure>
          <div className="card-body">
            <p>{details}</p>
            <div className="card-actions justify-end">
              <Link to="/checkout">
                <button className="btn btn-accent">Get premium access</button>
              </Link>
            </div>
          </div>
        </div>

        <div>
          <PDFDownloadLink document={<MyDoc />} fileName="coursedetail.pdf">
            <div className=" mt-10 ml-5 my-auto mx-auto">
              <h1 className="text-xl text-orange-500 ">
                Click the button and download pdf
              </h1>
              <button
                type="button"
                className="font-semibold py-1 px-2 rounded-md bg-teal-600 text-gray-100 mt-3"
              >
                DownLoad PDF
              </button>
            </div>
          </PDFDownloadLink>
        </div>
      </div>
    </div>
  );
};

export default Course;
