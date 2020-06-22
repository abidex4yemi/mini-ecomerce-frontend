import React from 'react';
import styled from 'styled-components';
import CKEditor from '@ckeditor/ckeditor5-react';
import ClassicEditor from '@ckeditor/ckeditor5-build-classic';

const Body = (props) => {
  const {
    handleProductTitleChange,
    handleProductAttributeChange,
    newProductDetails,
    handleTextAreaInputChange,
    categories,
    handleProductCategoryChange,
    handleImageUpload,
    sizes,
    uploadingImage,
  } = props;

  const renderCategories = () => {
    return (
      <select onChange={handleProductCategoryChange}>
        {categories.map((category) => (
          <option value={category._id} key={category._id}>
            {category.name}
          </option>
        ))}
      </select>
    );
  };

  const renderSizes = () => {
    return (
      <StyledProductSizes>
        <p>Select sizes</p>
        <ul>
          {sizes.map((size) => (
            <li key={size}>{size}</li>
          ))}
        </ul>
      </StyledProductSizes>
    );
  };

  return (
    <StyledProductDetails>
      <StyledImageUploadContainer>
        {uploadingImage && <p>uploading...</p>}

        <ImageStyled>
          <label htmlFor="file">
            <input
              type="file"
              id="file"
              aria-label="product image"
              onChange={handleImageUpload}
              accept="image/*"
            />
            <span></span>
          </label>

          <img src={newProductDetails.attributes.imageUrl} alt="" />
        </ImageStyled>

        <div>
          <p>Select category</p>
          <div>{renderCategories()}</div>
        </div>
      </StyledImageUploadContainer>

      <StyledProductInfoForm>
        <form>
          <StyledFormGroup>
            <label htmlFor="productName">Product name</label>
            <input
              type="text"
              name="name"
              id="productName"
              value={newProductDetails.name}
              placeholder="Enter digital product name..."
              onChange={handleProductTitleChange}
            />
          </StyledFormGroup>

          <StyledFormGroup>
            <label htmlFor="price">Pricing</label>
            <input
              type="number"
              min="0.00"
              name="price"
              value={newProductDetails.attributes.price}
              placeholder="$0.00"
              id="price"
              onChange={handleProductAttributeChange}
            />
          </StyledFormGroup>

          <StyledFormGroup>
            <label htmlFor="description">Description</label>
            <CKEditor
              editor={ClassicEditor}
              onChange={handleTextAreaInputChange}
            />
          </StyledFormGroup>
        </form>

        {renderSizes()}
      </StyledProductInfoForm>
    </StyledProductDetails>
  );
};

export default Body;

const StyledProductDetails = styled.article`
  padding: 20px;
  display: flex;
  justify-content: space-between;
  min-height: 300px;

  > div {
    box-sizing: border-box;
    padding: 10px;
    display: flex;
    flex-direction: column;
    justify-content: space-between;
  }

  .label {
    margin-bottom: 10px;
  }
`;

const StyledProductInfoForm = styled.div`
  width: 60%;

  h4 {
    margin: 30px 0 0 0;
  }
`;

const StyledFormGroup = styled.div`
  margin-bottom: 20px;

  input,
  textarea {
    box-sizing: border-box;
    width: 100%;
    border: none;
    border: 1px solid #dedede;
    border-radius: 5px;
    padding: 5px 10px;
    line-height: 30px;
    outline: none;
    font-size: 1.4rem;
    border: 2px solid #dedede;
    margin-top: 10px;

    :focus {
      border-color: #f2ea79;
    }
  }
`;

const StyledImageUploadContainer = styled.div`
  width: 35%;

  select {
    font-size: 1.8rem;
  }
`;

const ImageStyled = styled.div`
  input::-webkit-file-upload-button {
    display: none;
  }

  span::before {
    content: 'Select Product image';
    display: inline-block;
    background: linear-gradient(top, #f9f9f9, #e3e3e3);
    border: 1px solid #999;
    border-radius: 3px;
    padding: 5px 8px;
    outline: none;
    white-space: nowrap;
    -webkit-user-select: none;
    cursor: pointer;
    text-shadow: 1px 1px #fff;
    font-weight: 700;
    font-size: 10pt;
  }
  span:hover::before {
    border-color: black;
  }
  span:active::before {
    background: -webkit-linear-gradient(top, #e3e3e3, #f9f9f9);
  }

  img {
    max-width: 100%;
    max-height: 100%;
    margin-top: 20px;
  }
`;

const StyledProductSizes = styled.div`
  p {
    font-weight: bold;
    margin-bottom: 10px;
  }

  ul {
    list-style: none;
    margin: 0;
    padding: 0;

    li {
      display: inline-block;
      padding: 5px;
      margin-right: 8px;
      text-align: center;
      min-width: 30px;
      border-radius: 2px;
      box-sizing: border-box;
      border: 1px solid #dedede;
    }
  }
`;
