<template>
  <div>

    <!-- First Box -->
    <div class="flex justify-center mx-auto w-11/12">
      <div class="block bg-transparent">
        <div class="block card-body w-full">
          <table class="border border-black w-full shadow-2xl">
            <thead>
              <tr>
                <td class="bg-yellow-200 text-left h-16 px-4">
                  <p class=" text-blue-600 text-center text-3xl font-bold">サワーソップ ティー</p>
                </td>
              </tr>
            </thead>
            <tbody>
              <tr class="bg-slate-50 text-left text-black border border-black">
                <td class="px-4">
                  <p class="text-black">がんを抑制すると言われているサワーソップの葉で煎じたお茶を飲みませんか。</p>
                  <p class="text-black">糖尿病、高血圧、疲労や不眠症の治療にも有効とされています。
                  </p>
                  <br />
                  <nuxt-link to="/business1/ipsoursop">
                    <a class="text-blue-600 underline">－クラチャイダムとは？－</a>
                  </nuxt-link>
                  <br />
                  <br />
                </td>
              </tr>
            </tbody>
          </table>
        </div>
      </div>
    </div>
    <br />
    <!-- 2nd Box -->

    <div class="w-2/3 mx-auto px-4">
      <div class='relative m-0 shadow-2xl flex bg-white'>
        <div class='flex'>
          <img alt='' class='w-64 h-76 block mx-auto' src='http://1excellence.com/official/img/store/sopfront.jpg'>
        </div>
        <div class='flex-1 block relative'>
          <div class="p-6">
            <p class='leading-normal text-black text-xl font-bold'>１パック￥2000</p>
            <p class="text-red-600 text-lg">※為替レートによって変動します。</p>
            <p class="text-red-600 text-lg">※送料、税金は別途含みます。</p>
            <p class="text-red-600 text-lg">※画像をクリックで表面と裏面が切り替わります。</p>
            <p class="text-black text-lg">商品の裏面に医学的効果などが記載されています。</p>
            <p class="text-black text-lg">和訳して以下に記載しておりますが、こちらは販売者による説明です。</p>
            <p class="text-red-600 text-lg">-性質-</p>
            <p class="text-black text-lg">・サワーソップティーは、がん細胞を抑制し12種類のがんを防ぐことができ、それらは｢化学療法｣より10,000倍強力です。</p>
            <p class="text-black text-lg">・糖尿病、高血圧、疲労や不眠症の治療に有効です。</p>
            <p class="text-red-600 text-lg">-飲み方-</p>
            <p class="text-black text-lg">・カップにサワーソップのティーバッグを入れ、お湯を注ぎ2分間待ちます。</p>
            <p class="text-black text-lg">・食事の30分前には飲む必要があります。1日に2～3回。</p>

            <nuxt-link to="/business1/b6import">
              <p class="text-blue-700 text-lg underline px-4">送料や税金についてはコチラ。</p>
            </nuxt-link>
            <p class="text-blue-700 text-lg underline">EMS(国際スピード郵便)による数量別送料の一例</p>

          </div>
        </div>
      </div>
    </div>
    <br />
    <!-- Table -->

    <div class="flex justify-center mx-auto w-3/5	bg-white">
      <table class=" border border-black w-full">
        <thead>
          <tr>
            <td class="w-2/12 border border-black">
              <p class="text-black px-2">製品名 </p>
            </td>
            <td class="w-10/12 border border-black">
              <p class="text-black px-2">サワーソップ ティー</p>
            </td>
          </tr>
        </thead>
        <tbody>
          <tr>
            <td class="w-2/12 border border-black">
              <p class="text-black px-2">名称</p>
            </td>
            <td class="w-10/12 border border-black">
              <p class="text-black px-2">サワーソップ茶葉のティーバッグ</p>
            </td>
          </tr>
          <tr>
            <td class="w-2/12 border border-black">
              <p class="text-black px-2">原材料</p>
            </td>
            <td class="w-10/12 border border-black">
              <p class="text-black px-2">サワーソップ茶葉<a class="text-red-600">100%</a></p>
            </td>
          </tr>
          <tr>
            <td class="w-2/12 border border-black">
              <p class="text-black px-2">内容量</p>
            </td>
            <td class="w-10/12 border border-black">
              <p class="text-black px-2">ティーバッグ30個</p>
            </td>
          </tr>
          <tr>
            <td class="w-2/12 border border-black">
              <p class="text-black px-2">重量</p>
            </td>
            <td class="w-10/12 border border-black">
              <p class="text-black px-2">75g</p>
            </td>
          </tr>
          <tr>
            <td class="w-2/12 border border-black">
              <p class="text-black px-2">用量</p>
            </td>
            <td class="w-10/12 border border-black">
              <p class="text-black px-2">食事の30分前に飲んでください。1日2～3回が目安です。</p>
            </td>
          </tr>
          <tr>
            <td class="w-2/12 border border-black">
              <p class="text-black px-2">原産国</p>
            </td>
            <td class="w-10/12 border border-black">
              <p class="text-black px-2">タイ</p>
            </td>
          </tr>
          <tr>
            <td class="w-2/12 border border-black">
              <p class="text-black px-2">保存方法</p>
            </td>
            <td class="w-10/12 border border-black">
              <p class="text-black px-2">直射日光及び高温多湿を避けて保存してください。</p>
            </td>
          </tr>
          <tr>
            <td class="w-2/12 border border-black">
              <p class="text-black px-2">賞味期限</p>
            </td>
            <td class="w-10/12 border border-black">
              <p class="text-black px-2">製造日から2年(パッケージに記載)</p>
            </td>
          </tr>
          <tr>
            <td class="w-2/12 border border-black">
              <p class="text-black px-2">備考</p>
            </td>
            <td class="w-10/12 border border-black">
              <p class="text-black px-2">・2gのティーバッグが１袋に30個入っています。</p>
              <p class="text-black px-2">・開封後は必ず密封して保存してください。</p>
              <p class="text-black px-2">・記載の賞味期限は未開封状態での保存期間です。</p>
              <p class="text-black px-2">・熱湯の取り扱いには十分ご注意ください。</p>
              <p class="text-black px-2">・カップにサワーソップのティーバッグを入れ、お湯を注ぎ2分間待ってください。</p>
              <p class="text-black px-2">・ティーバッグから細かい粉が袋の底や抽出後の底に溜まることがありますが、品質には問題ありません。</p>
            </td>
          </tr>
        </tbody>
      </table>
    </div>
    <br />

    <!-- Detail table -->

    <div class="flex justify-center mx-auto w-3/5">
      <table>
        <thead>
          <br />
          <tr>
            <td>
              <p class="text-blue-600 px-6">1パック単位でご購入いただいた場合の価格と送料(日本国内からの発送とタイから直接EMSPackage発送)の例</p>
            </td>
          </tr>
        </thead>
        <tbody>
          <tr>
            <td>
              <p class="text-black px-2">● サワーソップ ティー　タイから直送</p>
            </td>
          </tr>
          <tr>
            <td>
              <p class="text-black px-5">1パック￥2000　2パック￥4000、3パック￥6000、</p>
            </td>
          </tr>
          <tr>
            <td>
              <p class="text-black px-5">4パック￥8000、いずれも送料約￥3600</p>
            </td>
          </tr>
          <tr>
            <td>
              <p class="text-black px-5">5パック￥10000、送料約￥4000</p>
            </td>
          </tr>
          <tr>
            <td>
              <p class="text-black px-5">(梱包後の重量が500g～1kgとなった場合は送料が約￥4000になります。</p>
            </td>
          </tr>
          <tr>
            <td>
              <p class="text-black px-5">EMS World Box 1を使用する場合は送料が約￥4800になります)</p>
            </td>
          </tr>
          <tr>
            <td>
              <p class="text-black px-2">● サワーソップ ティー　日本国内発送</p>
            </td>
          </tr>
          <tr>
            <td>
              <p class="text-black px-5">1パック￥2000　から　5パック￥10,000まで　いずれも送料約￥1000</p>
            </td>
          </tr>
          <br />
        </tbody>
      </table>
    </div>
    <br />

    <!-- 3rd Box -->

    <div class="w-2/3 mx-auto px-4">
      <div class='relative m-0 shadow-2xl flex bg-white border border-t-black border-l-black border-r-black'>
        <div class="flex justify-center mx-auto">
          <p class="text-center text-2xl text-blue-700 font-bold">サワーソップってなに？</p>
        </div>
        <br />
      </div>
      <div class="flex bg-white border border-l-black border-r-black ">
        <div class="flex w-full">
          <table>
            <thead>
              <tr></tr>
              <tr></tr>
            </thead>
            <tbody>
              <tr>
                <td>
                  <img src="http://1excellence.com/official/img/store/soursop.jpg" width="500" height="450" />
                </td>
                <td>
                  <p class="text-black font-bold px-2">　サワーソップ(Soursop)とは、メキシコ、中米、カリブ諸島、北米、南米を原産とする常緑広葉樹の顕花植物である。日本語では<a
                      class="text-red-600">｢トゲバンレイシ｣や｢シャシャップ｣</a>とも呼ばれ、その他にも国によって<a
                      class="text-red-600">｢グヤバノ｣や｢グアナバナ｣</a>などと呼ばれている。</p>
                  <p class="text-black font-bold px-2">
                    椿の葉を大きくしたような直径15～19ｃｍの光沢のある革質の葉を持ち、細かな棘に包まれた実をつける。サワーソップティーには、この葉を用いている。</p>
                  <p class="text-black font-bold px-2">　サワーソップの香りは、「バナナやココナッツを思わせる基本のクリーミーな香りとは対照的に、イチゴとパイナップルを混ぜたも</p>
                </td>
              </tr>
            </tbody>
          </table>
        </div>
      </div>
      <div class="flex bg-white border border-l-black border-r-black border-b-black">
        <table>
          <thead>
            <tr>
              <td>
                <p class="text-black font-bold px-2">のに加えて酸っぱい柑橘系の香りが感じられる」とされており、<a
                    class="text-red-600">甘味とさわやかな酸味があり、果汁が非常に多い</a>とされる。</p>
                <p class="text-black font-bold px-2">そのまま、または加工して炭酸飲料やお菓子として食べられている<a
                    class="text-red-600"><sup>[1][2]</sup></a>。</p>
              </td>
            </tr>
          </thead>
        </table>
      </div>
    </div>
    <br />

    <!-- 4th Box -->

    <div class="w-2/3 mx-auto px-4">
      <div class='relative m-0 shadow-2xl flex bg-white border border-t-black border-l-black border-r-black'>
        <div class="flex justify-center mx-auto">
          <p class="text-center text-2xl text-blue-700 font-bold">古くから伝えられている効果も</p>
        </div>
        <br />
      </div>
      <div class="flex bg-white border border-l-black border-r-black ">
        <div class="flex w-full">
          <table>
            <thead>
              <tr></tr>
              <tr></tr>
            </thead>
            <tbody>
              <tr>
                <td>
                  <p class="text-black font-bold px-2">　古くから伝わる様々な用途が存在している。その中の一つとして、<a
                      class="text-red-600">強心効果</a>がある。</p>
                  <p class="text-black font-bold px-2">
                    原産地の一つである南米ギアナの原住民が、激しい運動を伴う狩猟などに出掛ける前や、豪雨にあって身体が冷え切った時にサワーソップの葉を煎じて飲む習慣を持っていたと言われている。</p>
                  <p class="text-black font-bold px-2">
                    　とある臨床データによると、糖尿病患者にサワーソップの乾燥葉の微粉末入りのティーバッグに熱湯を注ぎ、濃い番茶のようになるまで十分にエキスを浸出させたものを14日間飲用させることで、体重変化・血圧・空腹時血糖・血清コレステロール・血清中性脂肪・動脈効果指数・心電図・副作用の各項目で好結果を得たとされている。
                  </p>
                </td>
                <td class="w-80">
                  <img src="http://1excellence.com/official/img/store/energy.png" width="400" height="250"
                    class="px-2" />
                </td>
              </tr>
            </tbody>
          </table>
        </div>
      </div>
      <div class="flex bg-white border border-l-black border-r-black border-b-black">
        <table>
          <thead>
            <tr>
              <td>
                <p class="text-black font-bold px-2">その際に、心拍数の増加や血圧上昇などの副作用は認められなかったともある。</p>
                <p class="text-black font-bold px-2">　また、サワーソップの葉を煎じた汁の利用例として、<a
                    class="text-red-600">ナンキンムシやアタマジラミを殺すために使用</a>することや、<a class="text-red-600">発熱時に飲用</a>することもあったようだ。
                </p>
                <p class="text-black font-bold px-2">さらに、煎じた葉を湿布として利用することで<a
                    class="text-red-600">リウマチやアトピー性皮膚炎のような皮膚感染症を緩和させる効果</a>があったとされ、そうした用途からサワーソップの果実や葉から抽出された特定の化合物と化学物質は人間の正常な細胞を破壊せずにがん細胞を殺す効果があるという報告もある。
                </p>
                <p class="text-black font-bold px-2">　さらに、サワーソップの葉には<a class="text-red-600">鎮静および鎮静特性を有する</a>と考えられている。
                </p>
                <p class="text-black font-bold px-2">オランダ領アンティル諸島では、安眠を誘導するためにサワーソップの葉枕を利用、または傍に置いて寝たりしているそうだ<a
                    class="text-red-600"><sup>[2][3]</sup></a>。</p>
                <br />
                <br />
              </td>
            </tr>
          </thead>
        </table>
      </div>
    </div>
    <br />

    <!-- 5th Box -->

    <div class="w-2/3 mx-auto px-4">
      <div class='relative m-0 shadow-2xl flex bg-white border border-t-black border-l-black border-r-black'>
        <div class="flex justify-center mx-auto">
          <p class="text-center text-2xl text-blue-700 font-bold">がんの治療に効果的</p>
        </div>
        <br />
      </div>
      <div class="flex bg-white border border-l-black border-r-black ">
        <div class="flex w-full">
          <table>
            <thead>
              <tr></tr>
              <tr></tr>
            </thead>
            <tbody>
              <tr>
                <td>
                  <img src="http://1excellence.com/official/img/store/cancer.png" width="400" height="400"
                    class="px-2" />
                </td>
                <td>
                  <p class="text-black font-bold px-2">　サワーソップは、<a class="text-red-600">がんの治療に効果的</a>であると言われている。特に<a
                      class="text-red-600">乳がん、すい臓、大腸、前立腺、肺、肝臓がん</a>を治療するのに有効とされ、12種類のがんに効果的であるとされる。</p>
                  <p class="text-black font-bold px-2">なによりも健康な細胞を破壊せずに、危険であると疑われているがん細胞のみを選択して攻撃してくれるようだ。</p>
                  <p class="text-black font-bold px-2">
                    　科学医療に比べ、がん細胞の成長を鈍化させる力が１万倍あるとされている。</p>
                  <p class="text-black font-bold px-2">また、抗がん剤とは異なる利点として、<a
                      class="text-red-600">吐き気・体重減少・脱毛というような副作用がなく</a>、安全かつ自然にがん細胞を攻撃してくれると言われている。</p>
                </td>
              </tr>
            </tbody>
          </table>
        </div>
      </div>
      <div class="flex bg-white border border-l-black border-r-black border-b-black">
        <table>
          <thead>
            <tr>
              <td>
                <p class="text-black font-bold px-2">　これらは天然科学療法として考えられており、サワーソップの葉にも同様の効果があるとされている<a
                    class="text-red-600"><sup>[4]</sup></a>。</p>
                <br />
              </td>
            </tr>
          </thead>
        </table>
      </div>
    </div>
    <br />

    <!-- Violet Box -->

    <div class="flex mx-auto justify-center w-2/3">
      <div class="flex bg-violet-300">
        <br />
        <table>
          <thead>
            <tr>
              <td>
                <p class="text-left px-2 font-bold text-black">※上記は当ページで紹介しております、「サワーソップ ティー」の効能の説明ではありません。</p>
                <br />
                <p class="text-left px-2 text-black">
                  このような効能が期待されるサワーソップを手軽に入手できないかと探してみると、タイ国にてサワーソップの葉を使ったティーバッグを販売しておりました。</p>
                <p class="text-left px-2 text-black">個人差があるとは思いますが、試してみたい方は輸入代行いたします、よろしければご利用ください。</p>
                <p class="text-left px-2 text-blue-600 underline">サワーソップ ティーへ</p>
              </td>
            </tr>
          </thead>
        </table>
      </div>
    </div>
    <br />

    <!-- Info -->

    <div class="flex mx-auto justify-center w-2/3">
      <div class="flex">
        <br />
        <table>
          <thead>
            <tr>
              <td>
                <p class="text-left px-2 text-red-600">脚注</p>
                <br />
                <p class="text-left px-2 text-blue-600 underline"><a
                    href="https://ja.wikipedia.org/wiki/%E3%82%B5%E3%83%AF%E3%83%BC%E3%82%BD%E3%83%83%E3%83%97">[1]サワーソップ、Wikipedia</a>
                </p>
                <p class="text-left px-2 text-blue-600 underline"><a
                    href="http://blog.livedoor.jp/off0254/archives/51222487.html">[2]サワーサップ茶、健康食品事典、2008/05/07</a>
                </p>
                <p class="text-left px-2 text-blue-600 underline"><a
                    href="http://genkimainichi.blogspot.jp/2011/10/blog-post_07.html">[3]トロピカルフルーツ、グゥアバノの効果?、Hippy
                    Monday☆、2012/09/17</a></p>
                <p class="text-left px-2 text-blue-600 underline"><a
                    href="http://telavivcity.blog56.fc2.com/blog-entry-957.html">[4]癌とトゲバンレイシと他の疾患の予防と治療、健康と病気、2011/08/07</a>
                </p>
                <br />
              </td>
            </tr>
          </thead>
        </table>
      </div>
    </div>
    <br />

    <div class="flex w-2/3 mx-auto justify-center">
      <table>
        <thead>
          <tr>
            <td>
              <p class="text-black text-center font-bold">お勧め商品</p>
              <br />
              <nuxt-link to="/business1/B6Import">
                <p class="text-blue-600 underline">以下のタイ製の品を個人輸入代行致します。</p>
              </nuxt-link>
            </td>
          </tr>
        </thead>
      </table>
    </div>
    <br />
    <!-- Recommended -->

    <div class="flex justify-center w-2/5 mx-auto ">

      <div class="h-48 shadow-2xl hero bg-slate-50">
        <div class="flex-col hero-content lg:flex-row">
          <nuxt-link to="/business1/ipgacjuice">
            <img src="http://1excellence.com/official/img/store/gac_sub.png" width="150" height="250"
              class="max-w-sm rounded-lg shadow-2xl" />
          </nuxt-link>
          <div>
            <h1 class="text-2xl font-bold text-blue-600">GAC juice fruit mix</h1>
            <br />
            <p class="text-black">GAC fruit is a “gift from heaven” is now juice.</p>
            <p class="text-black">It is a mix juice and passion fruit.</p>
            <p class="text-black">For more information click on the image!</p>
          </div>
        </div>
      </div>

    </div>
    <br />

    <div class="flex justify-center w-2/5 mx-auto ">

      <div class="h-56 shadow-2xl hero bg-slate-50">
        <div class="flex-col hero-content lg:flex-row">
          <nuxt-link to="/business1/ipkrachai">
            <img src="http://1excellence.com/official/img/store/krachaidum.jpg" width="150" height="250"
              class="max-w-sm rounded-lg shadow-2xl" />
          </nuxt-link>
          <div>
            <h1 class="text-2xl font-bold text-blue-600">クラチャイダム天然カプセル</h1>
            <br />
            <p class="text-black">精力増進や滋養強壮の効果で知られるクラチャイダム。</p>
            <p class="text-black">クラチャイダムの粉末をカプセルに凝縮しました。</p>
            <p class="text-black">詳しくは画像をクリック！</p>
          </div>
        </div>
      </div>

    </div>
    <br />
    <div class="flex justify-center w-2/5 mx-auto ">

      <div class="shadow-2xl hero h-72 bg-slate-50">
        <div class="flex-col hero-content lg:flex-row">
          <nuxt-link to="/business1/ipsoursop">
            <img src="http://1excellence.com/official/img/store/sopfront.jpg" width="150" height="250"
              class="max-w-sm rounded-lg shadow-2xl" />
          </nuxt-link>
          <div>
            <h1 class="text-2xl font-bold text-blue-600">サワーソップ ティー</h1>
            <br />
            <p class="text-black">がんを抑制すると言われているサワーソップ。</p>
            <p class="text-black">サワーソップの葉を加工して作られたティーバッグです。</p>
            <p class="text-black">詳しくは画像をクリック！</p>
          </div>
        </div>
      </div>

    </div>
    <br />
    <br />
    <div class="flex justify-center mx-auto">

      <p class="text-black">ご質問など御座いましたら以下のお問い合わせフォームにてご連絡下さい。</p>
      <br />
    </div>
    <br />
    <div class="flex justify-center mx-auto">
      <nuxt-link to="/checkout">
        <a class="text-xl text-blue-600 text-center underline">>> お問い合わせフォーム</a>
      </nuxt-link>
    </div>
    <br />
    <div class="flex justify-center mx-auto">
      <nuxt-link to="/blank">
        <a class="text-xl text-blue-600 text-center underline">特定商取引法に基づく表記</a>
      </nuxt-link>
    </div>


  </div>
</template>
