<div class="service__menu service__menu_margin">
  <ul class="service__items service__items-part">
    {% for menu,link in content.jsonDb.service_menu %} {% if menu != 'главная'
    %}
    <hr class="service__hr service__hr-part" noshade color="#1b1b1b" />
    {% endif %}
    <li class="service__item">
      <a class="service__link" href="{{ link }}">{{ menu | raw }}</a>
    </li>
    {% endfor %}
  </ul>
</div>
