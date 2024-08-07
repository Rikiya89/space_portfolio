// Projects.tsx
import React from "react";
import ProjectCard from "../sub/ProjectCard";

const Projects = () => {
  return (
    <div className="flex flex-col items-center justify-center py-20" id="projects">
      <h1 className="xl:text-5xl font-semibold text-transparent bg-clip-text bg-gradient-to-r from-purple-500 to-cyan-500 py-20 font-panno 
      lg:text-4xl md:text-4xl sm:text-4xl">
        My Projects
      </h1>
      <div className="2xl:max-w-7xl 2xl:gap-10 2xl:grid-cols-3 2xl:justify-center 2xl:justify-items-center 2xl:gird 
      xl:max-w-7xl xl:grid-cols-3 xl:gap-10 xl:px-10 xl:justify-items-center xl:justify-center xl:grid 
      lg:max-w-7xl lg:grid-cols-2 lg:gap-10 lg:px-10 lg:justify-items-center lg:justify-center lg:grid 
      md:max-w-2xl md:grid-cols-2 md:gap-10 md:px-10 md:justify-items-center md:justify-center md:flex 
      sm:max-w-4xl sm:gap-10 sm:flex-col sm:flex">
        <ProjectCard
          src="/img/portfolio_no1.webp"
          title="Portfolio Website"
          description="これは私の最初のポートフォリオサイトです。HTML、SCSS、JavaScriptを使用して構築されたこのサイトは、
          直感的なナビゲーションと魅力的なビジュアルで、私の技術と過去に取り組んだプロジェクトの中から厳選した作品を紹介しています。
          各プロジェクトには、背景情報、使用技術、目標、そして達成した成果が詳細に記述されています。"
          url="https://www.rikiya-okawa963.jp/index.html/" 
        />
        <ProjectCard
          src="/img/weather_app.webp"
          title="React Weather App"
          description="デザインと技術の理想的な結合、React Weather Appを体験してください。
          ReactとJavaScriptで構築されたこのアプリケーションは、天気と地理座標のAPIを活用して、正確な実時間の気象予報を提供します。
          市間をスムーズに移動し、直感的なインターフェイスを通じて気象パターンをインタラクティブに探ることができます。"
          url="https://relaxed-youtiao-4c1124.netlify.app/"  
        />
        <ProjectCard
          src="/img/iphone14_clonewebsite.webp"
          title="iPhone 14 Clone 3D Website"
          description="iPhone 14をテーマにした私の3D Reactポートフォリオを探索してください。
          各インタラクションは、iPhone 14の精巧なデザインと機能性を表現する活動的なアニメーションで構成されています。
          クリックする度に、iPhone 14の洗練された美学と革新的な特性を反映する、アートとテクノロジーの完璧な統合を体験することができる、創造的で卓越した技術の旅に出てください。"
          url="https://apple-iphone3d-website.netlify.app/"  
        />
        <ProjectCard
            src="/img/guardians.webp"
            title="GUARDIANS OF THE MOON"
            description="卒業プロジェクトとして、VR・AR施設のサービス向上を目指し、UnityとTouchDesignerを使用してVRゲームとインタラクティブ映像を製作しました。
            VRゲームはUnityとC#を利用し、Unityアセットストアからの無料アセットを使用しています。このゲームの開発期間は約1ヶ月でした。
            また、TouchDesignerを活用した実空間でのインタラクティブな演出は約1週間で完成しました。"
            url="/guardians_jp"
          />
        <ProjectCard
            src="/img/water_drops_culpture.webp"
            title="Water Drop Effect"
            description="視覚芸術と技術的巧みさが一体となったTouchDesignerの作品を体験してください。
            GLSLシェーダーとTOPを使用して水の本質を描くアニメーションで、各ノードが物語を伝えます。
            流体力学とデジタルアートの結合が、魅力的なビジュアル体験を生み出す変化に富んだインタラクションを通じて、私のクラフトを感じてください。"
            url="https://www.instagram.com/reel/C5I0TBkSrk6/?utm_source=ig_web_copy_link&igsh=MzRlODBiNWFlZA=="
          />
          <ProjectCard
            src="/img/of.webp"
            title="The Art of Dynamic Mesh"
            description="私のopenFrameworksプロジェクトをご覧ください—技術的な能力と視覚的な創造力の融合です。
            画像処理とメッシュダイナミクスがどのようにして光と動きの魅力的な物語を紡ぎ出すかを確認してください。
            各頂点と線が絡み合い、アルゴリズムの優雅さと芸術的な才能が融合した驚くべき視覚的なスペクタクルを創出します。"
            url="https://www.instagram.com/p/Ctv2k7Nvcrb/?utm_source=ig_web_copy_link&igsh=MzRlODBiNWFlZA=="
          />
          <ProjectCard
            src="/img/heart.webp"
            title="Pulse of Reflection"
            description="視覚的芸術と技術的専門知識が融合したTouchDesigner作品です。
            各ノードはCHOPsとTOPsを駆使して反射するハートをアニメーション化し、流れるようなダイナミックな動きを作り出します。
            指数関数を使用したLFO CHOPによって、ハートに命が吹き込まれ、その反射面が強調されています。
            動的なモーションとデジタルクリエイティビティが交錯する魅力的な視覚体験をお楽しみください。"
            url="https://www.instagram.com/p/C8PaH0kSQ2Z/?utm_source=ig_web_copy_link&igsh=MzRlODBiNWFlZA=="
          />
      </div>
    </div>
  );
};

export default Projects;
