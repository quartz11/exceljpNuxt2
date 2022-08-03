<template>
  <div>

    <div class="flex justify-center mx-auto">
      <div class="justify-center max-w-sm overflow-hidden rounded shadow-2xl bg-slate-50" style="max-width: 60rem;">
        <div class="card-header" style="background-color:blueviolet; color:white;">&nbsp;&nbsp; Flow of form input</div>
        <div class="card-body">
          <p class="text-black card-text">The following empty We fill in the necessary information in, please check the
            input check box.
            If there is no mistake in the input content, please click the [Send] button.
            We will contact you than the person in charge.
            There is some time to answer it takes.
            If you hurry, reservations will wish by phone.</p>

          <p class="text-center text-black card-text">TEL 075-256-7872
            <br />
            ※ Please input the item of the mark always.
          </p>
        </div>
      </div>
    </div>
    <br />

    <!-- Show input form -->
    <div class="container justify-center mx-auto space-x-4">
      <div class="border shadow-2xl mockup-window bg-violet-600">
        <div class="flex justify-center px-4 py-16 text-xl text-black shadow-2xl bg-slate-200">

          <div class="container mx-auto">
            <table class="w-full text-sm text-left text-white dark:text-gray-400">
              <thead class="text-sm text-white dark:text-gray-400">
                <tr class="border-b border-gray-200 dark:border-gray-700">
                  <th scope="col" class="px-6 py-3 text-sm text-white w-60 dark:bg-slate-900 auto-cols-auto">
                    Name
                  </th>
                  <th scope="col" class="px-6 py-3 text-black bg-slate-400">

                  </th>
                </tr>
              </thead>
              <tbody>
                <tr class="border-b border-gray-200 dark:border-gray-700">
                  <th scope="row" class="px-6 py-4 font-medium text-white dark:bg-slate-900 auto-cols-auto">
                    Age
                  </th>
                  <td class="px-6 py-4 text-black bg-slate-400">

                  </td>

                </tr>
                <tr class="border-b border-gray-200 dark:border-gray-700">
                  <th scope="row" class="px-6 py-4 font-medium text-white dark:bg-slate-900 auto-cols-auto">
                    Sex
                  </th>
                  <td class="px-6 py-4 text-black bg-slate-400">

                  </td>
                </tr>

                <tr class="border-b border-gray-200 dark:border-gray-700">
                  <th scope="row" class="px-6 py-4 font-medium text-white dark:bg-slate-900 auto-cols-auto">
                    Country
                  </th>
                  <td class="px-6 py-4 text-black bg-slate-400">

                  </td>
                </tr>

                <tr class="border-b border-gray-200 dark:border-gray-700">
                  <th scope="row" class="px-6 py-4 font-medium text-white dark:bg-slate-900 auto-cols-auto">
                    Address-Number
                  </th>
                  <td class="px-6 py-4 text-black bg-slate-400">

                  </td>
                </tr>

                <tr class="border-b border-gray-200 dark:border-gray-700">
                  <th scope="row" class="px-6 py-4 font-medium text-white dark:bg-slate-900 auto-cols-auto">
                    Address
                  </th>
                  <td class="px-6 py-4 text-black bg-slate-400">

                  </td>
                </tr>

                <tr class="border-b border-gray-200 dark:border-gray-700">
                  <th scope="row" class="px-6 py-4 font-medium text-white dark:bg-slate-900 auto-cols-auto">
                    Telphone
                  </th>
                  <td class="px-6 py-4 text-black bg-slate-400">

                  </td>
                </tr>

                <tr class="border-b border-gray-200 dark:border-gray-700">
                  <th scope="row" class="px-6 py-4 font-medium text-white dark:bg-slate-900 auto-cols-auto">
                    e-Mail
                  </th>
                  <td class="px-6 py-4 text-black bg-slate-400">

                  </td>
                </tr>

                <tr class="border-b border-gray-200 dark:border-gray-700">
                  <th scope="row" class="px-6 py-4 font-medium text-white dark:bg-slate-900 auto-cols-auto">
                    Matter
                  </th>
                  <td class="px-6 py-4 text-black bg-slate-400">

                  </td>
                </tr>
                <br />
                <button
                  class="content-center px-4 py-2 font-bold text-white bg-blue-500 border border-blue-700 rounded hover:bg-blue-700">
                  Send
                </button>
              </tbody>
            </table>
          </div>
          <table>
            <thead>
              <tr>
                <th></th>
              </tr>
              <tr>
                <th>&nbsp;</th>
              </tr>
            </thead>
          </table>
          <!-- Form input -->
          <div class="container mx-auto">
            <table class="w-full text-sm text-left text-white dark:text-gray-400">
              <thead class="text-sm text-white dark:text-gray-400">
                <tr class="border-b border-gray-200 dark:border-gray-700">
                  <th scope="col" class="px-6 py-3 text-sm text-white dark:bg-slate-900 auto-cols-auto">
                    ※Name
                  </th>
                  <th scope="col" class="px-6 py-3 text-black bg-slate-400">
                <tr></tr>
                <label for="first_name">First Name</label>
                <input type="text" id="first_name"
                  class="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full h-8	 p-2.5 dark:bg-white dark:border-gray-600 dark:placeholder-gray-400 dark:text-black dark:focus:ring-blue-500 dark:focus:border-blue-500"
                  required>
                <br />
                <label for="middle_name">Middle Name</label>
                <input type="text" id="middle_name"
                  class="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full h-8	 p-2.5 dark:bg-white dark:border-gray-600 dark:placeholder-gray-400 dark:text-black dark:focus:ring-blue-500 dark:focus:border-blue-500"
                  required>
                <br />
                <label for="family_name">Family Name</label>
                <input type="text" id="family_name"
                  class="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full h-8	 p-2.5 dark:bg-white dark:border-gray-600 dark:placeholder-gray-400 dark:text-black dark:focus:ring-blue-500 dark:focus:border-blue-500"
                  required>
                </th>
                </tr>
              </thead>
              <tbody>
                <tr class="border-b border-gray-200 dark:border-gray-700">
                  <th scope="row" class="px-6 py-4 font-medium text-white dark:bg-slate-900 auto-cols-auto">
                    Age
                  </th>
                  <td class="px-6 py-4 text-black bg-slate-400">
                    <input type="text" id="Age"
                      class="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-20  h-8	p-2.5 dark:bg-white dark:border-gray-600 dark:placeholder-gray-400 dark:text-black dark:focus:ring-blue-500 dark:focus:border-blue-500"
                      required>
                  </td>
                </tr>
                <tr class="border-b border-gray-200 dark:border-gray-700">
                  <th scope="row" class="px-6 py-4 font-medium text-white dark:bg-slate-900 auto-cols-auto">
                    Sex
                  </th>
                  <td class="px-6 py-4 text-black bg-slate-400">
                    <input id="Sex_M" type="radio" value="" name="default-radio"
                      class="w-4 h-4 text-blue-600 bg-gray-100 border-gray-300 focus:ring-blue-500 dark:focus:ring-blue-600 dark:ring-offset-gray-800 focus:ring-2 dark:bg-gray-700 dark:border-gray-600">
                    <label for="Sex_M" class="ml-2 text-sm font-medium text-gray-900">Male</label>
                    &nbsp;&nbsp;
                    <input id="Sex_F" type="radio" value="" name="default-radio"
                      class="w-4 h-4 text-blue-600 bg-gray-100 border-gray-300 focus:ring-blue-500 dark:focus:ring-blue-600 dark:ring-offset-gray-800 focus:ring-2 dark:bg-gray-700 dark:border-gray-600">
                    <label for="Sex_F" class="ml-2 text-sm font-medium text-gray-900">Female</label>
                    &nbsp;&nbsp;
                    <input id="Sex_O" type="radio" value="" name="default-radio"
                      class="w-4 h-4 text-blue-600 bg-gray-100 border-gray-300 focus:ring-blue-500 dark:focus:ring-blue-600 dark:ring-offset-gray-800 focus:ring-2 dark:bg-gray-700 dark:border-gray-600">
                    <label for="Sex_O" class="ml-2 text-sm font-medium text-gray-900">--</label>
                  </td>
                </tr>
                <tr class="border-b border-gray-200 dark:border-gray-700">
                  <th scope="row" class="px-6 py-4 font-medium text-white dark:bg-slate-900 auto-cols-auto">
                    Country
                  </th>
                  <td class="px-6 py-4 text-black bg-slate-400">
                    <input type="text" id="Country"
                      class="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full h-8 p-2.5 dark:bg-white dark:border-gray-600 dark:placeholder-gray-400 dark:text-black dark:focus:ring-blue-500 dark:focus:border-blue-500"
                      required>
                  </td>
                </tr>

                                <tr class="border-b border-gray-200 dark:border-gray-700">
                  <th scope="row" class="px-6 py-4 font-medium text-white dark:bg-slate-900 auto-cols-auto">
                    Address-Number
                  </th>
                  <td class="px-6 py-4 text-black bg-slate-400">
                    <input type="text" id="AddressNum"
                      class="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full h-8 p-2.5 dark:bg-white dark:border-gray-600 dark:placeholder-gray-400 dark:text-black dark:focus:ring-blue-500 dark:focus:border-blue-500"
                      required>
                  </td>
                </tr>
                                                <tr class="border-b border-gray-200 dark:border-gray-700">
                  <th scope="row" class="px-6 py-4 font-medium text-white dark:bg-slate-900 auto-cols-auto">
                    ※Address
                  </th>
                  <td class="px-6 py-4 text-black bg-slate-400">
                    <input type="text" id="Address"
                      class="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full h-8 p-2.5 dark:bg-white dark:border-gray-600 dark:placeholder-gray-400 dark:text-black dark:focus:ring-blue-500 dark:focus:border-blue-500"
                      required>
                  </td>
                </tr>
                                                                <tr class="border-b border-gray-200 dark:border-gray-700">
                  <th scope="row" class="px-6 py-4 font-medium text-white dark:bg-slate-900 auto-cols-auto">
                    ※Telphone
                  </th>
                  <td class="px-6 py-4 text-black bg-slate-400">
                    <input type="text" id="Telphone"
                      class="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full h-8 p-2.5 dark:bg-white dark:border-gray-600 dark:placeholder-gray-400 dark:text-black dark:focus:ring-blue-500 dark:focus:border-blue-500"
                      required>
                  </td>
                </tr>
                                                                                <tr class="border-b border-gray-200 dark:border-gray-700">
                  <th scope="row" class="px-6 py-4 font-medium text-white dark:bg-slate-900 auto-cols-auto">
                    ※e-Mail
                  </th>
                  <td class="px-6 py-4 text-black bg-slate-400">
                    <input type="email" id="eMail"
                      class="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full h-8 p-2.5 dark:bg-white dark:border-gray-600 dark:placeholder-gray-400 dark:text-black dark:focus:ring-blue-500 dark:focus:border-blue-500"
                      required>
                  </td>
                </tr>
                                                                                                <tr class="border-b border-gray-200 dark:border-gray-700">
                  <th scope="row" class="px-6 py-4 font-medium text-white dark:bg-slate-900 auto-cols-auto">
                    Matter
                  </th>
                  <td class="px-6 py-4 text-black bg-slate-400">
<textarea id="message" rows="4" class="block p-2.5 w-full text-sm text-black bg-white rounded-lg border border-gray-300 focus:ring-blue-500 focus:border-blue-500 dark:bg-white dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"></textarea>

                  </td>
                </tr>
                <br />
              </tbody>
            </table>
          </div>

        </div>
      </div>
    </div>

  </div>
</template>
