import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import styled from 'styled-components';
import Header from '../Components/Header';
import Couple1 from '../Components/Couple1.jpeg';

const MainWrap = styled.div`
  border: 1px solid black;
  width: 70rem;
  height: 40rem;
  margin: auto;
  justify-content: center;
  align-items: center;
  display: flex;
  flex-direction: column;
`;

const TitleWrap = styled.div`
  width: 30rem;
  height: 5rem;
  margin: 1rem 0;
  justify-content: center;
  align-items: center;
  display: flex;
  font-size: 30px;
`;

const Title = styled.input`
  border: 1px solid black;
  font-size: 30px;
  justify-content: center;
  align-items: center;
  display: flex;
  margin-left: 1rem;
`;

const CenterWrap = styled.div`
  width: 50rem;
  height: 30rem;
  justify-content: center;
  align-items: center;
  display: flex;
`;

const SubTitleWrap = styled.div`
  width: 50rem;
  height: 4rem;
  justify-content: center;
  align-items: center;
  display: flex;
`;

const SubTitle = styled.div`
  width: 10rem;
  height: 3rem;
  justify-content: center;
  align-items: center;
  display: flex;
  font-size: 20px;
  margin: 0 5.5rem;
`;

const PictureWrap = styled.div`
  border: 1px solid black;
  width: 20rem;
  height: 25rem;
  margin-right: 2rem;
  justify-content: center;
  align-items: center;
  display: flex;
  background-image: url(${Couple1});
  background-position: center;
  background-size: 3rem;
  background-repeat: no-repeat;
`;

const UploadImage = styled.img`
  width: 20rem;
  height: 30rem;
  object-fit: scale-down;
`;

const WriteWrap = styled.textarea`
  border: 1px solid black;
  width: 20rem;
  height: 25rem;
  font-size: 20px;
  white-space: pre-wrap;
`;

const BtnWrap = styled.div`
  width: 20rem;
  height: 5rem;
  display: flex;
  justify-content: center;
  align-items: center;
`;

const PictureUpload = styled.input`
  display: none;
`;

const PictureBtn = styled.label`
  width: 5rem;
  height: 3rem;
  background-color: lightpink;
  display: flex;
  justify-content: center;
  align-items: center;
  border-radius: 10rem;
  border: none;
  margin: 0 1rem;
`;

const Btn = styled.button`
  width: 5rem;
  height: 3rem;
  background-color: lightpink;
  border-radius: 10rem;
  border: none;
  margin-right: 1rem;
`;

function Story() {
  const [fileImage, setFileImage] = useState('');
  const [fileIma, setFileIma] = useState('');
  const [visible, setVisible] = useState(false);

  const deleteFileImage = () => {
    URL.revokeObjectURL(fileImage);
    URL.revokeObjectURL(fileIma);
    setFileIma('');
    setFileImage('');
    setVisible(false);
  };

  const handleSelect = async (e) => {
    const file = e.target.files[0];
    const Image = URL.createObjectURL(file);
    setFileIma(Image);
    setFileImage(file);
    setVisible(true);
  };

  return (
    <div>
      <Header />
      <MainWrap>
        <TitleWrap>
          제목 : <Title />
        </TitleWrap>
        <SubTitleWrap>
          <SubTitle>사진</SubTitle>
          <SubTitle>내용</SubTitle>
        </SubTitleWrap>
        <CenterWrap>
          <PictureWrap />
          <WriteWrap />
        </CenterWrap>
        <BtnWrap>
          <Btn>
            <Link
              to={{ pathname: '/' }}
              style={{ color: 'inherit', textDecoration: 'inherit' }}
            >
              메인
            </Link>
          </Btn>
        </BtnWrap>
      </MainWrap>
    </div>
  );
}

export default Story;
