<template lang="pug">
  header.admin-header
    .admin-header__wrapper
      .container
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
      .container
        ul.admin-header__nav-list
          li.admin-header__nav-item
            a.admin-header__nav-item(href="#") Обо мне
          li.admin-header__nav-item
            a.admin-header__nav-item(href="#") Работы
          li.admin-header__nav-item
            a.admin-header__nav-item(href="#") Отзывы  
    section.admin-skils 
      .container
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
  }

  .subtitle {
    font-size: 18px;
    line-height: 34px;
  }

  .text {
    font-size: 16px;
    line-height: 30px;
  }

  .admin-header__wrapper {
    background-color: #43436a;
    color: #fff;
  }

  .admin-header__container {
    display: flex;
    flex-wrap: wrap;
    justify-content: space-between;
    align-items: center;
  }

  .admin-header__photo {
    flex-basis: 8%;
    padding-left: 30px;;
  }

  .admin-header__img {
    width: 45px;
    height: 45px;
    border-radius: 50%;
    object-fit: cover;
  }

  .admin-header__content {
    flex-basis: 92%;
    display: flex;
    flex-wrap: wrap;
    justify-content: space-between;
    align-items: center;
  }

  .admin-header__info {
    flex-basis: 50%;
    display: flex;
    flex-wrap: wrap;
    justify-content: space-between;
    align-items: baseline;
  }

  .admin-header__exit {
    flex-basis: 50%;
    display: flex;
  }

  .admin-header__exit-link {
    margin-left: auto;
  }

  
</style>

