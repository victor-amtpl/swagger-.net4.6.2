(function () {
    $(function () {
        // Create a styled auth container
        var authContainer = $('<div class="auth-wrapper" style="top: 40px; right: 10px; z-index: 9999; background: #effad0; padding: 10px; box-shadow: 0 0 10px rgba(0,0,0,0.1); display: flex; align-items: center; gap: 10px;justify-content: end;"></div>').prependTo('body');

        var logoImg = $('<img src="https://static1.smartbear.co/swagger/media/assets/images/swagger_logo.svg" alt="Swagger Logo" style="height: 50px; margin-right: auto;" />');
        authContainer.append(logoImg);

        var logoImg2 = $('<img src="https://static1.smartbear.co/swagger/media/images/logos/oas_original-01.svg" alt="Swagger Logo" style="height: 50px; margin-right: auto;" />');
        authContainer.append(logoImg2);

        var logoImg3 = $('<img src="https://static1.smartbear.co/swagger/media/images/sb_horizontal_clr.svg" alt="Swagger Logo" style="height: 15px; margin-right: auto;" />');
        authContainer.append(logoImg3);


        var authInput = $('<input type="text" id="AuthInput" placeholder="Authorization" style="padding: 6px 10px; border: 1px solid #ccc; border-radius: 4px; font-size: 14px; width: 200px;" />');
        var authsaveBtn = $('<button style="padding: 6px 12px; background-color: #547f00; color: white; border: none; border-radius: 4px; font-size: 14px; cursor: pointer;font-weight: bold;">Authorize</button>');
        authsaveBtn.on('click', function () {
            var Authorization = $('#AuthInput').val();
            localStorage.setItem('Authorization', Authorization);
            var Auth = new SwaggerClient.ApiKeyAuthorization('Authorization', Authorization, 'header');
            window.swaggerUi.api.clientAuthorizations.add('Authorization', Auth);
            alert('Authorization saved and added to request headers.');
        });
        var savedAuthorization = localStorage.getItem('Authorization');
        if (savedAuthorization) {
            authInput.val(savedAuthorization);
            var Auth = new SwaggerClient.ApiKeyAuthorization('Authorization', savedAuthorization, 'header');
            window.swaggerUi.api.clientAuthorizations.add('Authorization', Auth);
        }

        var tokenInput = $('<input type="text" id="apiTokenInput" placeholder="apiToken" style="padding: 6px 10px; border: 1px solid #ccc; border-radius: 4px; font-size: 14px; width: 200px;" />');
        var saveBtn = $('<button style="padding: 6px 12px; background-color: #547f00; color: white; border: none; border-radius: 4px; font-size: 14px; cursor: pointer;font-weight: bold;">Apply Token</button>');
        saveBtn.on('click', function () {
            var token = $('#apiTokenInput').val();
            localStorage.setItem('apiToken', token);
            var apiTokenAuth = new SwaggerClient.ApiKeyAuthorization('apiToken', token, 'header');
            window.swaggerUi.api.clientAuthorizations.add('apiToken', apiTokenAuth);
            alert('apiToken saved and added to request headers.');
        });
        var savedToken = localStorage.getItem('apiToken');
        if (savedToken) {
            tokenInput.val(savedToken);
            var apiTokenAuth = new SwaggerClient.ApiKeyAuthorization('apiToken', savedToken, 'header');
            window.swaggerUi.api.clientAuthorizations.add('apiToken', apiTokenAuth);
        }

        authContainer.append(authInput).append(authsaveBtn).append(tokenInput).append(saveBtn);

        //authContainer.append(tokenInput).append(saveBtn);




        ///@@@@@@@@@@@@@@@@@@@@@@@ CSS @@@@@@@@@@@@@@@@@@@@@@@@
        var exploreBtn = document.getElementById('explore');
        if (exploreBtn) {
            exploreBtn.style.display = 'none';
        }

        var input_apiKey = document.getElementById('input_apiKey');
        if (input_apiKey) {
            input_apiKey.style.display = 'none';
        }

        var uiwrap = document.querySelector('.swagger-ui-wrap');
        if (uiwrap) {
            uiwrap.style.maxWidth = 'none';
        }

        var uicontainer = document.getElementById('swagger-ui-container');
        if (uicontainer) {
            uicontainer.style.maxWidth = 'none';
            uicontainer.style.margin = '10px';
        }

        var footerImage = $('<img src="https://static1.smartbear.co/swagger/media/images/solutions/sw_test_band1.svg?ext=.svg" alt="Footer Image" style="display: block; margin:auto;" />');
        $('body').append(footerImage);


    });
})();


// Right-Click Properties Set Build Action : Embedded Resource