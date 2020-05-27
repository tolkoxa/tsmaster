<div class="service__menu">
                <ul class="service__items">
                {% for menu,link in content.jsonDb.service_menu %}
                    {% if menu != 'главная' %}
                    <hr class="service__hr" noshade color="#1b1b1b">
                    {% endif %}
                    <li class="service__item">
                        <a class="service__link" href="{{link}}">{{menu}}</a>
                    </li>
                {% endfor %}
                </ul>
            </div>