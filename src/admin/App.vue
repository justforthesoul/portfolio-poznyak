<template lang="pug">
  .template-wrapper
    header.admin-header
      .admin-header__wrapper
        .admin-container
          .admin-header__container
            .admin-header__photo
              img.admin-header__img(src="../images/content/my_photo.jpg") 
            .admin-header__content
              .admin-header__info
                .admin-header__name.subtitle Позняк Павел
                h1.admin-header__title Панель администрирования
              .admin-header__exit
                a.admin-header__exit-link.text(href="#") Выйти
      nav.admin-header__nav
        .admin-container
          ul.admin-header__nav-list
            li.admin-header__nav-item
              a.admin-header__nav-link.admin-header__nav-link--active(href="#") Обо мне
            li.admin-header__nav-item
              a.admin-header__nav-link(href="#") Работы
            li.admin-header__nav-item
              a.admin-header__nav-link(href="#") Отзывы  
    section.admin-skills 
      .admin-container
        .admin-skills__content
          .admin-skills__header
            h2.admin-skills__title.title Блок «Обо мне»
            button(type="button").admin-skills__btn.admin-skills__btn--ad-item.text Добавить группу
          .admin-skills__wrapper
            ul.admin-skills__list
              li.admin-skills__item
                .admin-skills__card.skill-card
                  .skill-card__skills-title
                    input(type="text" placeholder="Название новой группы").skill-card__title-input.skill-input
                    .skill-card__btn-block.skill-card__btn-block--title
                      .skill-card__edit-btn-wrapper
                        button(type="button").skill-card__edit-btn
                        button(type="button").skill-card__clear-btn
                      .skill-card__decision-btn-wrapper
                        button(type="button").skill-card__accept-btn
                        button(type="button").skill-card__remove-btn
                  .skill-card__table
                    table.skill-table
                  .skill-card__edit
                    .skill-card__edit-title-wrapper
                      input(type="text" placeholder="Новый навык").skill-card__edit-title.skill-input
                    .skill-card__edit-percent-wrapper
                      input(type="text" placeholder="100%").skill-card__edit-percent.skill-input
                    .skill-card__edit-new-btn-wrapper  
                      button(type="button").skill-card__edit-new-btn +
              li.admin-skills__item
                .admin-skills__card.skill-card
                  .skill-card__skills-title
                    input(type="text" placeholder="Front-end").skill-card__title-input.skill-input
                    .skill-card__btn-block.skill-card__btn-block--title
                      .skill-card__edit-btn-wrapper
                        button(type="button").skill-card__edit-btn
                        button(type="button").skill-card__clear-btn
                      .skill-card__decision-btn-wrapper
                        button(type="button").skill-card__accept-btn
                        button(type="button").skill-card__remove-btn
                  .skill-card__table
                    table.skill-table
                      tr.skill-table__row
                        td.skill-table__column.skill-table__column--title
                          input(type="text" placeholder="HTML5").skill-table__column-input.skill-table__column-input--title.skill-input
                        td.skill-table__column.skill-table__column--percent
                          input(type="text" placeholder="75%").skill-table__column-input.skill-table__column-input--percent.skill-input
                        td.skill-table__column.skill-table__column--btn
                          .skill-card__btn-block.skill-card__btn-block--table
                            .skill-card__edit-btn-wrapper
                              button(type="button").skill-card__edit-btn
                              button(type="button").skill-card__clear-btn
                            .skill-card__decision-btn-wrapper
                              button(type="button").skill-card__accept-btn
                              button(type="button").skill-card__remove-btn
                      tr.skill-table__row
                        td.skill-table__column.skill-table__column--title
                          input(type="text" placeholder="CSS3").skill-table__column-input.skill-table__column-input--title.skill-input
                        td.skill-table__column.skill-table__column--percent
                          input(type="text" placeholder="75%").skill-table__column-input.skill-table__column-input--percent.skill-input
                        td.skill-table__column.skill-table__column--btn
                          .skill-card__btn-block.skill-card__btn-block--table
                            .skill-card__edit-btn-wrapper
                              button(type="button").skill-card__edit-btn
                              button(type="button").skill-card__clear-btn
                            .skill-card__decision-btn-wrapper
                              button(type="button").skill-card__accept-btn
                              button(type="button").skill-card__remove-btn  
                      tr.skill-table__row
                        td.skill-table__column.skill-table__column--title
                          input(type="text" placeholder="Javascript").skill-table__column-input.skill-table__column-input--title.skill-input
                        td.skill-table__column.skill-table__column--percent
                          input(type="text" placeholder="25%").skill-table__column-input.skill-table__column-input--percent.skill-input
                        td.skill-table__column.skill-table__column--btn
                          .skill-card__btn-block.skill-card__btn-block--table
                            .skill-card__edit-btn-wrapper
                              button(type="button").skill-card__edit-btn
                              button(type="button").skill-card__clear-btn
                            .skill-card__decision-btn-wrapper
                              button(type="button").skill-card__accept-btn
                              button(type="button").skill-card__remove-btn
                      tr.skill-table__row
                        td.skill-table__column.skill-table__column--title
                          input(type="text" placeholder="Jquery и Vue.js").skill-table__column-input.skill-table__column-input--title.skill-input
                        td.skill-table__column.skill-table__column--percent
                          input(type="text" placeholder="25%").skill-table__column-input.skill-table__column-input--percent.skill-input
                        td.skill-table__column.skill-table__column--btn
                          .skill-card__btn-block.skill-card__btn-block--table
                            .skill-card__edit-btn-wrapper
                              button(type="button").skill-card__edit-btn
                              button(type="button").skill-card__clear-btn
                            .skill-card__decision-btn-wrapper
                              button(type="button").skill-card__accept-btn
                              button(type="button").skill-card__remove-btn          
                  .skill-card__edit
                    .skill-card__edit-title-wrapper
                      input(type="text" placeholder="Новый навык").skill-card__edit-title.skill-input
                    .skill-card__edit-percent-wrapper
                      input(type="text" placeholder="100%").skill-card__edit-percent.skill-input
                    .skill-card__edit-new-btn-wrapper  
                      button(type="button").skill-card__edit-new-btn +
    section.admin-works
      .container
    section.admin-reviews
      .container

</template>
<style lang="postcss">
@import "../styles/mixins";

@import "../styles/main";

.title {
  font-size: 21px;
  line-height: 34px;
  font-weight: 700;

  @include tablets {
    font-size: 18px;
  }
}

.subtitle {
  font-size: 18px;
  line-height: 34px;
}

.text {
  font-size: 18px;
  line-height: 30px;
}

.admin-container {
  margin: 0 auto;
  max-width: 1480px;
  width: 90%;

  @include desktop {
    width: 92%;
  }

  @include tablets {
    width: 90%;
  }
}

.admin-header__wrapper {
  background-color: #43436a;
  color: #fff;
}

.admin-header__container {
  display: flex;
  justify-content: space-between;
  align-items: center;
  padding-top: 18px;
  padding-bottom: 18px;
}

.admin-header__img {
  width: 45px;
  height: 45px;
  border-radius: 50%;
  object-fit: cover;
}

.admin-header__content {
  flex-basis: 95%;
  display: flex;
  flex-wrap: wrap;
  justify-content: space-between;
  align-items: center;

  @include tablets {
    flex-basis: 80%;
  }
}

.admin-header__photo {
  flex-basis: 5%;

  @include desktop {
    flex-basis: 8%;
  }

  @include tablets {
    flex-basis: 20%;
    padding-left: 5px;
  }
}

.admin-header__info {
  flex-basis: 50%;
  display: flex;
  flex-wrap: wrap;
  align-items: baseline;
  padding-left: 10px;

  @include desktop {
    flex-basis: 70%;
    padding-left: 3px;
  }

  @include tablets {
    flex-basis: 100%;
    padding-left: 0;
  }
}

.admin-header__title {
  font-size: 14px;
  line-height: 30px;
  font-weight: 300;
  opacity: 0.5;
  padding-left: 30px;
  padding-bottom: 3px;

  @include tablets {
    display: none;
  }
}

.admin-header__name {
  @include tablets {
    font-size: 16px;
    line-height: 20px;
  }
}

.admin-header__exit {
  flex-basis: 50%;
  display: flex;

  @include desktop {
    flex-basis: 30%;
  }

  @include tablets {
    flex-basis: 100%;
  }
}

.admin-header__exit-link {
  margin-left: auto;
  font-weight: 300;
  padding-bottom: 2px;
  opacity: 0.5;
  transition: opacity 0.3s;
  &:hover,
  &:focus {
    opacity: 1;
    transition: opacity 0.3s;
  }

  @include tablets {
    margin-left: 0;
    margin-right: auto;
    font-size: 14px;
    line-height: 20px;
  }
}

.admin-header__nav {
  background-color: #fff;
  padding-top: 25px;
  padding-bottom: 28px;
}

.admin-header__nav-list {
  display: flex;
}

.admin-header__nav-item {
  flex-basis: 120px;
  text-align: center;

  @include tablets {
    flex-basis: 100px;
  }
}

.admin-header__nav-link {
  text-decoration: none;
  padding-top: 25px;
  padding-bottom: 28px;
  padding-left: 20px;
  padding-right: 20px;
  position: relative;

  &:active,
  &:hover {
    color: #373bd0;
    font-weight: 600;
    transition: color 0.3s;
  }

  @include tablets {
    font-size: 14px;
    line-height: 20px;
    padding-left: 15px;
    padding-right: 15px;
  }
}

.admin-header__nav-link--active {
  color: #373bd0;
  font-weight: 600;
  &::after {
    position: absolute;
    content: "";
    width: 100%;
    height: 3px;
    background: #373bd0;
    bottom: 0;
    right: 0;
    left: 0;
    transition: all 0.3s;
  }
}

.admin-skills__header {
  display: flex;
  flex-wrap: wrap;
  align-items: baseline;
  padding-top: 25px;

  @include desktop {
    padding-top: 20px;
  }

  @include desktop {
    padding-top: 28px;
  }
}

.admin-skills__title {
  padding-left: 2px;
}

.admin-skills__btn--ad-item {
  margin-left: 50px;
  padding-left: 40px;
  color: #373bd0;
  font-weight: 600;
  position: relative;

  @include desktop {
    font-size: 14px;
  }

  @include tablets {
    flex-basis: 100%;
    margin-left: 0;
    padding-left: 40px;
    text-align: left;
    margin-top: 17px;
  }

  &::before {
    position: absolute;
    content: "+";
    line-height: 1;
    color: #fff;
    padding: 2px 5.5px;
    top: 6px;
    left: 6px;
    border-radius: 50%;
    background-image: linear-gradient(to right, #006aed 5%, #3f35cb 50%);
  }
}

.admin-skills__list {
  display: flex;
  flex-wrap: wrap;
  justify-content: space-between;

  @include tablets {
    min-width: 272px;
    flex-grow: 1;
    margin-top: 25px;
  }
}

.admin-skills__item {
  flex-basis: 48.5%;
  min-height: 388px;
  background-color: #fff;
  margin-top: 52px;
  box-shadow: 0 0 10px rgba(#000, 0.1);

  @include desktop {
    margin-top: 40px;
  }

  @include tablets {
    min-width: 272px;
    flex-grow: 1;
    margin-top: 12px;
    min-height: 363px;
  }
}

.skill-card {
  display: flex;
  flex-direction: column;
  height: 100%;
  padding: 0 4% 5% 4%;

  @include desktop {
    padding: 0 6% 5% 6%;
  }

  @include tablets {
    padding: 0 1% 5% 1%;
  }
}

.skill-input {
  border: none;
  outline: none;
  width: 100%;

  &::placeholder {
    opacity: 1;
    transition: opacity 0.3s ease;

    @include tablets {
      font-size: 16px;
    }
  }

  &:focus::placeholder {
    opacity: 0;
    transition: opacity 0.3s ease;
  }
  &:focus {
    border-bottom: 1px solid #000;
  }
}

.skill-card__skills-title {
  display: flex;
  justify-content: space-between;
  border-bottom: 1px solid rgba(#000, 0.2);
  padding-bottom: 14px;
}

.skill-card__title-input {
  flex-basis: 58%;
  padding-bottom: 5px;
  border-bottom: 1px solid #000;
  font-size: 18px;
  line-height: 34px;
  padding-top: 20px;
  margin-left: 8px;

  @include desktop {
    flex-basis: 80%;
    max-width: 275px;
    margin-right: 10px;
  }
}

.skill-card__btn-block--title {
  flex-basis: 20%;
  display: flex;

  .skill-card__edit-btn-wrapper {
    display: none;
    margin-left: auto;
  }

  .skill-card__decision-btn-wrapper {
    margin-left: auto;
    display: flex;
    align-items: center;
    padding-top: 17px;
  }
}

.skill-card__btn-block--table {
  flex-basis: 42%;
  display: flex;

  .skill-card__edit-btn-wrapper {
    display: flex;
    margin-left: auto;
  }

  .skill-card__decision-btn-wrapper {
    margin-left: auto;
    display: none;
    align-items: center;
  }

  .skill-card__clear-btn {
    margin-right: 0;
  }
}

.skill-card__edit-btn {
  width: 15px;
  height: 15px;
  background-image: svg-load("pencil.svg", fill=rgba(#000, 0.3));
  background-repeat: no-repeat;
  background-size: contain;
  margin-right: 20px;
}

.skill-card__clear-btn {
  width: 15px;
  height: 15px;
  background-image: svg-load("trash.svg", fill=rgba(#000, 0.3));
  background-repeat: no-repeat;
  background-size: contain;
  margin-right: 7px;
}

.skill-card__accept-btn {
  width: 15px;
  height: 15px;
  background-image: svg-load("tick.svg", fill=#00d70a);
  background-repeat: no-repeat;
  background-size: contain;
  margin-right: 20px;
}

.skill-card__remove-btn {
  width: 14px;
  height: 12px;
  background-image: svg-load("remove.svg", fill=#bf2929);
  background-repeat: no-repeat;
  background-size: contain;
  margin-right: 7px;
}

.skill-table {
  width: 100%;
  padding: 1%;

  @include desktop {
    padding: 2% 1% 1% 1%;
  }
}

.skill-table__row {
  display: flex;
  align-items: center;
  padding-top: 18px;
}

.skill-table__column--title {
  width: 65%;
  padding-right: 10px;

  @include desktop {
    width: 52%;
  }
}

.skill-table__column--percent {
  width: 15%;
  padding-right: 30px;

  @include desktop {
    width: 23%;
  }
}

.skill-table__column--btn {
  width: 20%;

  @include desktop {
    width: 25%;
  }
}

.skill-card__edit {
  display: flex;
  justify-content: space-around;
  margin-top: auto;
  margin-left: auto;
  width: 79.5%;
  margin-bottom: 5px;

  @include desktop {
    width: 100%;
    margin-bottom: 13px;
  }
}

.skill-card__edit-title-wrapper {
  width: 55%;

  @include desktop {
    width: 47%;
  }
}

.skill-card__edit-title {
  padding-bottom: 15px;
  padding-left: 20px;
  border-bottom: 1px solid #000;
}

.skill-card__edit-percent-wrapper {
  width: 20%;

  @include desktop {
    width: 23%;
  }
}

.skill-card__edit-percent {
  padding-bottom: 15px;
  padding-left: 7px;
  border-bottom: 1px solid #000;
}

.skill-card__edit-new-btn-wrapper {
  width: 15%;

  @include desktop {
    width: 20%;
    padding-right: 2px;
  }
}

.skill-card__edit-new-btn {
  border-radius: 50%;
  background-image: linear-gradient(to right, #006aed 5%, #3f35cb 50%);
  color: #fff;
  line-height: 1;
  font-weight: 600;
  font-size: 28px;
  margin-left: 15px;
  padding: 6px 12px;

  @include desktop {
    margin-left: 13px;
  }
}
</style>

