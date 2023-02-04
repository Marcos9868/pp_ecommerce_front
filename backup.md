

items list V2 
.items-list {
  @include flex(row, space-between, start);
  gap: 2rem;

  &__item_V2 {
    @include flex(column, start, start);
    width: 100%;
    max-width: 27.8rem;
    &__image {
      margin-bottom: 1rem;
      overflow: hidden;
      border-radius: 1rem;

      .image-item {
        object-fit: cover;
        width: 27.8rem;
        height: 35.1rem;
        transition: all 0.2s ease-in;
        box-shadow: inset 0px 0px;
      }
      &:hover .image-item {
        transform: scale(1.05);
      }
    }
    &__info {
      h3 a {
        font-weight: 500;
        font-size: 2rem;
        line-height: 3rem;
        color: $main-color;
      }

      span {
        display: block;
        
      }
      .publisher {
        font-style: italic;
        font-weight: 400;
        font-size: 1.5rem;
        line-height: 1.8rem;
        color: rgba($main-color, 0.5);
        margin-bottom: 0.7rem;
      }
      .price {
        font-weight: 700;
        font-size: 2rem;
        line-height: 3rem;
        color: $main-color;
        del{

          text-decoration: line-through;
          font-weight: 400;

          color: red;
          opacity: 0.5;
        }
      }
    }
  }
}


HTML

<section class="promotions">
<div class="container">
  <div class="banner">
    <img
      src="../pp_ecommerce_front/assets/img/games/spacebackground.jpg"
      alt="background do espaço sideral"
    />
    <h4>PROMOÇÃO SIDERAL 50% OFF</h4>
  </div>

  <div class="small-banner">
    <img
      src="../pp_ecommerce_front/assets/img/games/death-strading.webp"
      alt=""
    />
  </div>

  <div class="items-list">
    <div class="items-list__item_V2">
      <div class="items-list__item_V2__image">
        <label for="promotion-1"></label>
        <input id="promotion-1" class="like-btn" type="checkbox" />
        <a href="#"
          ><img
            class="image-item"
            src="./assets/img/games/starfield.jpg"
            alt="Item Image"
        /></a>
      </div>
      <div class="items-list__item_V2__info">
        <h3>
          <a href="#">Starfield</a>
        </h3>
        <span class="publisher">Publisher Name</span>
        <span class="price">
          R$300
          <del>R$400</del>
        </span>
      </div>
    </div>

    <div class="items-list__item_V2">
      <div class="items-list__item_V2__image">
        <label for="promotion-2"></label>
        <input id="promotion-2" class="like-btn" type="checkbox" />
        <a href="#"
          ><img
            class="image-item"
            src="./assets/img/games/no-mans-sky.jpg"
            alt="Item Image"
        /></a>
      </div>
      <div class="items-list__item_V2__info">
        <h3>
          <a href="#">No Man's Sky</a>
        </h3>
        <span class="publisher">Publisher Name</span>

        <span class="price">
          R$300
          <del>R$400</del>
        </span>
      </div>
    </div>
  </div>
</div>
</section>



//Variação promotion
.items-list__item_V2__image {
  position: relative;
  .like-btn {
    position: absolute;
    top: 1rem;
    right: 1rem;
    z-index: 2;
    border: none;
    background-color: transparent;
    cursor: pointer;
    &:active {
      background-color: red;
      background: url("../assets/img/full-heart-img.svg") no-repeat;
    }
  }

  input[type="checkbox"] {
    appearance: none;
    width: 2.5rem;
    height: 2.5rem;

    &:checked {
      background: url("../assets/img/full-heart-img.svg") no-repeat;
    }
  }

  & label {
    z-index: 3;
    position: absolute;
    right: 1rem;
    top: 1rem;
    width: 2.5rem;
    height: 2.5rem;
    background-image: url("../assets/img/heart-img.svg");
    background-repeat: no-repeat;
    cursor: pointer;
  }
}
