<template>
  <div>

    <!-- First Box -->
    <div class="flex justify-center mx-auto w-11/12">
      <div class="block bg-transparent">
        <div class="block card-body w-full">
          <table class="border border-black w-full shadow-2xl">
            <thead>
              <tr>
                <td class="bg-yellow-200 text-left px-4">
                  <p class="text-xl text-blue-600">ガックジュース フルーツミックス</p>
                </td>
              </tr>
            </thead>
            <tbody>
              <tr class="bg-slate-50 text-left text-black border border-black">
                <td class="px-4">
                  東南アジア原産のスーパーフルーツ・ガックと、パッションフルーツをブレンドしたフルーツジュースです。
                  <br />
                  <nuxt-link to="/">
                    <a class="text-blue-600 underline">　－ガックフルーツとは？－　</a>
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
        <div class='flex block'>
          <table>
            <thead>
              <tr>
                <img alt='' class='w-64 h-64 block mx-auto'
                  src='http://1excellence.com/official/img/store/gacjuice_big.png'>
                <div class="text-base">
                  <nuxt-link to="/business1/b6import">
                    <p class="text-blue-800 underline px-4">送料や税金についてはコチラ。</p>
                  </nuxt-link>
                </div>
              </tr>
            </thead>
          </table>
        </div>
        <div class='flex-1 block relative'>
          <div class="p-6">
            <h4 class='font-medium text-xl text-blue-700'>ガックジュース</h4>
            <h4 class='font-medium text-xl text-blue-700'>フルーツミックス</h4>
            <h4 class='font-medium text-xl text-blue-700'>－180ml－</h4>
            <p class='leading-normal text-black font-bold'>１本￥300</p>
            <p class="text-red-600 text-lg">※為替レートによって変動します。</p>
            <p class="text-red-600 text-lg">※送料、税金は別途含みます。</p>
            <p class="text-black text-lg">価格例：10本→￥3000　20本→￥6000　30本→￥9000</p>
            <p class="text-red-600 text-lg">※27本以上になりますと総重量が10kgを超える可能性が御座います。その場合、関税がかかりますのでご了承くださいませ。</p>
            <p class="text-red-600 text-lg">※当商品は２本以上からのご注文をお願いしております。</p>
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
              <p class="text-black px-2">ガックジュース フルーツミックス－180ml－</p>
            </td>
          </tr>
        </thead>
        <tbody>
          <tr>
            <td class="w-2/12 border border-black">
              <p class="text-black px-2">名称</p>
            </td>
            <td class="w-10/12 border border-black">
              <p class="text-black px-2">果実混合飲料（清涼飲料水）</p>
            </td>
          </tr>
          <tr>
            <td class="w-2/12 border border-black">
              <p class="text-black px-2">原材料</p>
            </td>
            <td class="w-10/12 border border-black">
              <p class="text-black px-2"><a class="text-red-600">ガックフルーツ40％</a>・パッションフルーツ15%・砂糖2%・塩0.5%</p>
            </td>
          </tr>
          <tr>
            <td class="w-2/12 border border-black">
              <p class="text-black px-2">内容量</p>
            </td>
            <td class="w-10/12 border border-black">
              <p class="text-black px-2">180ml</p>
            </td>
          </tr>
          <tr>
            <td class="w-2/12 border border-black">
              <p class="text-black px-2">重量</p>
            </td>
            <td class="w-10/12 border border-black">
              <p class="text-black px-2">約325g</p>
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
              <p class="text-black px-2">高温多湿・直射日光を避け常温で保存してください。</p>
            </td>
          </tr>
          <tr>
            <td class="w-2/12 border border-black">
              <p class="text-black px-2">賞味期限</p>
            </td>
            <td class="w-10/12 border border-black">
              <p class="text-black px-2">製造日から1年（ラベルに記載）</p>
            </td>
          </tr>
          <tr>
            <td class="w-2/12 border border-black">
              <p class="text-black px-2">備考</p>
            </td>
            <td class="w-10/12 border border-black">
              <p class="text-black px-2">・開栓後はすぐにお飲みください。</p>
              <p class="text-black px-2">・果肉の成分が沈殿することがございますのでよく振ってお飲みください。</p>
              <p class="text-black px-2">・記載の賞味期限は未開封状態での保存期間です。</p>
              <p class="text-black px-2">・1度の過剰摂取はお控えください。</p>
            </td>
          </tr>
        </tbody>
      </table>
    </div>
    <br />

    <!-- 3rd Box -->

    <div class="w-2/3 mx-auto px-4">
      <div class='relative m-0 shadow-2xl flex bg-white'>
        <div class='flex'>
          <table>
            <thead>
              <div class="flex justify-center mx-auto">
                <tr>
                  <img alt='' class='w-64 h-64 block mx-auto'
                    src='http://1excellence.com/official/img/store/gacjuice_min.png'>
                  <div class="text-base">
                    <nuxt-link to="/business1/b6import">
                      <p class="text-blue-800 underline px-4">送料や税金についてはコチラ。</p>
                    </nuxt-link>
                  </div>
                </tr>
              </div>
            </thead>
          </table>
        </div>
        <div class='flex-1 card-block relative'>
          <div class="p-6">
            <h4 class='font-medium text-xl text-blue-700'>ガックジュース</h4>
            <h4 class='font-medium text-xl text-blue-700'>フルーツミックス</h4>
            <h4 class='font-medium text-xl text-blue-700'>－75ml－</h4>
            <p class='leading-normal text-black font-bold'>１本￥300</p>
            <p class="text-red-600 text-lg">※為替レートによって変動します。</p>
            <p class="text-red-600 text-lg">※送料、税金は別途含みます。</p>
            <p class="text-black text-lg">価格例：10本→￥3000　20本→￥6000　30本→￥9000　40本→￥12000　50本→￥15000</p>
            <p class="text-red-600 text-lg">※45本以上になりますと、総重量が10kgを超える可能性が御座います。その場合、関税がかかりますのでご了承くださいませ。</p>
            <p class="text-red-600 text-lg">※当商品は２本以上からのご注文をお願いしております。</p>
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
              <p class="text-black px-2">ガックジュース フルーツミックス－75ml－</p>
            </td>
          </tr>
        </thead>
        <tbody>
          <tr>
            <td class="w-2/12 border border-black">
              <p class="text-black px-2">名称</p>
            </td>
            <td class="w-10/12 border border-black">
              <p class="text-black px-2">果実混合飲料（清涼飲料水</p>
            </td>
          </tr>
          <tr>
            <td class="w-2/12 border border-black">
              <p class="text-black px-2">原材料</p>
            </td>
            <td class="w-10/12 border border-black">
              <p class="text-black px-2"><a class="text-red-600">ガックフルーツ70％</a>・パッションフルーツ15%・砂糖1%・塩0.5%</p>
            </td>
          </tr>
          <tr>
            <td class="w-2/12 border border-black">
              <p class="text-black px-2">内容量</p>
            </td>
            <td class="w-10/12 border border-black">
              <p class="text-black px-2">75ml</p>
            </td>
          </tr>
          <tr>
            <td class="w-2/12 border border-black">
              <p class="text-black px-2">重量</p>
            </td>
            <td class="w-10/12 border border-black">
              <p class="text-black px-2">約195g</p>
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
              <p class="text-black px-2">高温多湿・直射日光を避け常温で保存してください。</p>
            </td>
          </tr>
          <tr>
            <td class="w-2/12 border border-black">
              <p class="text-black px-2">賞味期限</p>
            </td>
            <td class="w-10/12 border border-black">
              <p class="text-black px-2">製造日から1年（ラベルに記載）</p>
            </td>
          </tr>
          <tr>
            <td class="w-2/12 border border-black">
              <p class="text-black px-2">備考</p>
            </td>
            <td class="w-10/12 border border-black">
              <p class="text-black px-2">・開栓後はすぐにお飲みください。</p>
              <p class="text-black px-2">・果肉の成分が沈殿することがございますのでよく振ってお飲みください。</p>
              <p class="text-black px-2">・記載の賞味期限は未開封状態での保存期間です。</p>
              <p class="text-black px-2">・1度の過剰摂取はお控えください。</p>
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
              <p class="text-blue-600 px-6">2本単位でご購入いただいた場合の価格と送料(EMS World Box)の例</p>
            </td>
          </tr>
        </thead>
        <tbody>
          <tr>
            <td>
              <p class="text-black px-2">● ガックジュースフルーツミックス－180ml－の場合</p>
            </td>
          </tr>
          <tr>
            <td>
              <p class="text-black px-5">2本￥600、送料約￥4800　4本￥1200、送料約￥4800</p>
            </td>
          </tr>
          <tr>
            <td>
              <p class="text-black px-5">6本￥1800、送料約￥4800　8本￥2400、送料約￥4800</p>
            </td>
          </tr>
          <tr>
            <td>
              <p class="text-black px-5">10本￥3000、送料約￥7800</p>
            </td>
          </tr>
          <br />
          <tr>
            <td>
              <p class="text-black px-2">● ガックジュースフルーツミックス－75ml－の場合</p>
            </td>
          </tr>
          <tr>
            <td>
              <p class="text-black px-5">2本￥600、送料約￥4800　4本￥1200、送料約￥4800</p>
            </td>
          </tr>
          <tr>
            <td>
              <p class="text-black px-5">6本￥1800、送料約￥4800　8本￥2400、送料約￥4800</p>
            </td>
          </tr>
          <tr>
            <td>
              <p class="text-black px-5">10本￥3000、送料約￥4800</p>
            </td>
          </tr>
          <br />
          <tr>
            <td>
              <p class="text-blue-600 px-5">ガックジュース組合せパターン例</p>
            </td>
          </tr>
          <tr>
            <td>
              <p class="text-black px-2">● 例１：180ml 20本約6500g + 75ml 10本約1950g = 合計30本約8450g ￥9000</p>
            </td>
          </tr>
          <tr>
            <td>
              <p class="text-black px-2">● 例２：180ml 15本約4875g + 75ml 20本約3900g = 合計35本約8775g ￥10500</p>
            </td>
          </tr>
          <br />
        </tbody>
      </table>
    </div>

    <div class="flex justify-center">
      <nuxt-link to="/">
        <p class="text-blue-600 underline">ガックフルーツについて。</p>
      </nuxt-link>
    </div>
    <br />
    <!-- Detail Foot-->

    <div class="flex justify-center mx-auto">
      <img src="http://1excellence.com/official/img/store/gacjuice_top.png" />
    </div>
    <br />
    <div class="flex justify-center mx-auto">
      <p class="text-left px-4 font-bold text-black">お勧め商品</p>

    </div>
    <br />
    <nuxt-link to="/business1/b6import">
      <p class="text-blue-600 text-center underline">以下のタイ製の品を個人輸入代行致します。</p>
    </nuxt-link>
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
          <nuxt-link to="/">
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
