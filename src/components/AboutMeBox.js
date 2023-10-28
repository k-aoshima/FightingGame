import React from 'react';
import Box from '@mui/material/Box';

function AboutMeBox() {

  const AboutMeText = () =>{
    return(
        <Box sx={{ width: "100%", display: "flex", justifyContent: "center"}}>
          <div style={{ maxWidth:"1200px", fontSize: "16px", margin: "0 30px 0 30px"}}>
            静岡県出身。大学にて幅広く工学デザインを学んだのち、ハウスメーカーに営業職として就職。かねてから技術者になりたいという思いと、ITを駆使したものづくりに携わりたいという思いから、IT業界へ。今年で4年目になり、.NETのアプリケーションエンジニアとして設計から製造、テストまで幅広く業務を経験してきました。現在はクライアント様と会話させて頂きながら基本設計から詳細設計、製造、改修までが主な業務になります。
            <br/>
            <br/>【主な開発経験】
            <br/>・.NetFramewokを使用したMVCモデルの設計と製造
            <br/>・OpenCVを使用したアプリケーションの作成、メモリリークを抑えるための技術習得
            <br/>・VB6との連携を考えたDLLの実装
            <br/>・AESを使用したデータ暗号化・復号化の設計と実装
            <br/>・POSシステムを使用したDLLの実装
            <br/>・COM通信を使用したDLLの設計と実装
            <br/>・Jsonを利用したAPI通信の設計と実装
            <br/>

            <br/>GitHubには業務で使用した技術を応用したアプリケーションや自身の興味がある分野を中心に
            公開しています。
            <br/>
            <br/>- GitHub : <a href="https://github.com/k-aoshima">https://github.com/k-aoshima</a>
          </div>
        </Box>
    )
  }

  return (
    <Box sx={{ margin: "100px 0 100px 0"}}>
      <h3 style={{ width: "100%", display: "flex", justifyContent: "center", fontSize: "30px", marginBottom: "0px"}}>
        ABOUTME
      </h3>
      <Box sx={{ width: "100%", display: "flex", justifyContent: "center", margin: "20px 0 50px 0" }}>
        <img src={`${process.env.PUBLIC_URL}/img/keyboardIcon.png`} alt="" style={{ width: "300px" }}/>
      </Box>
      
      <AboutMeText />
    </Box>
  )
}

export default AboutMeBox