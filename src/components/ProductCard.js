import React from "react";

const ProductCard = ({ product }) => {
  return (
    <div className="product">
      <div className="productRating">
        <p>Pre Owned</p>
        <div className="ratingLogo">
          <svg
            height="20px"
            width="20px"
            version="1.1"
            id="_x32_"
            viewBox="0 0 512 512"
            fill="#000000"
          >
            <g id="SVGRepo_bgCarrier" stroke-width="0"></g>
            <g
              id="SVGRepo_tracerCarrier"
              stroke-linecap="round"
              stroke-linejoin="round"
            ></g>
            <g id="SVGRepo_iconCarrier">
              {" "}
              <style type="text/css"> fill:#000000; </style>{" "}
              <g>
                {" "}
                <path
                  class="st0"
                  d="M13.175,203.061c0,0-0.004-0.013-0.007-0.026l-0.672-1.763L13.175,203.061z"
                ></path>{" "}
                <path
                  class="st0"
                  d="M17.239,163.415l11.178-7.3c0.006,0,0.012-0.007,0.019-0.014L17.239,163.415z"
                ></path>{" "}
                <path
                  class="st0"
                  d="M480.364,260.466c-0.549-1.436-0.823-2.951-0.823-4.466c0-1.521,0.274-3.042,0.826-4.492l16.869-44.275 l1.586-4.172c1.74-4.564,2.582-9.324,2.582-14.006c0.006-12.986-6.458-25.516-17.835-32.953l-5.599-3.656l-37.84-24.708 c-2.569-1.684-4.447-4.276-5.25-7.247l-13.548-50.047c-4.675-17.23-20.28-29.075-37.978-29.075c-0.669,0-1.335,0.013-2.004,0.052 L329.766,44v-0.006l-0.774,0.02c-2.896,0-5.687-0.98-7.933-2.788l-37.766-30.42l-2.598-2.089 C273.507,2.912,264.725-0.006,256.002,0c-8.72-0.013-17.504,2.912-24.697,8.717l0.01-0.007L195.11,37.87l-4.159,3.35 c-2.256,1.815-5.057,2.795-7.94,2.795L182.338,44l-51.555-2.572l-0.033-0.007c-0.8-0.046-1.502-0.052-2.102-0.052 c-17.701,0-33.303,11.844-37.978,29.075l-13.549,50.047c-0.806,2.983-2.693,5.582-5.278,7.273l-3.732,2.436l-39.694,25.915 c-11.371,7.444-17.828,19.966-17.822,32.946c0,4.675,0.839,9.415,2.573,13.973l18.465,48.473l0.003,0.006 c0.548,1.437,0.826,2.965,0.826,4.486c0,1.522-0.274,3.043-0.826,4.48l-18.461,48.46l0.003-0.006 c-1.74,4.564-2.583,9.318-2.583,13.999c-0.006,12.987,6.451,25.523,17.838,32.966l32.218,21.038l11.201,7.313 c2.583,1.684,4.463,4.27,5.269,7.26l13.549,50.041c4.671,17.23,20.28,29.075,37.978,29.081c0.6-0.006,1.254-0.013,1.952-0.052 l-1.482,0.078l53.439-2.67h-0.026l0.5-0.007c2.866,0,5.658,0.98,7.91,2.795l40.371,32.522h0.003 c7.185,5.792,15.964,8.71,24.687,8.704c8.72,0.007,17.502-2.912,24.691-8.71l43.841-35.318l-3.467,2.795 c2.253-1.815,5.038-2.788,7.907-2.788l0.6,0.013l52.189,2.605l-0.262-0.012c0.568,0.026,1.186,0.039,1.855,0.045 c17.691-0.006,33.306-11.844,37.978-29.081l13.548-50.041c0.806-2.99,2.684-5.569,5.262-7.254l43.45-28.37 c11.364-7.444,17.818-19.966,17.812-32.947c0-4.682-0.842-9.442-2.586-14.012L480.364,260.466z M455.38,241.988 c-1.72,4.512-2.582,9.265-2.582,14.012c0,4.754,0.862,9.507,2.582,14.019l18.449,48.44l0.003,0.007 c0.565,1.482,0.829,2.984,0.829,4.473c-0.007,4.166-2.063,8.188-5.716,10.571l-43.41,28.344h0.003 c-8.086,5.275-13.95,13.346-16.474,22.67l-13.548,50.04c-1.485,5.524-6.513,9.324-12.16,9.317l-0.751-0.02l-0.189-0.006 l-51.474-2.566h0.036c-0.634-0.039-1.303-0.052-2.004-0.059c-8.968,0-17.685,3.069-24.694,8.717l-3.47,2.801l-36.897,29.721 c-2.324,1.874-5.086,2.788-7.91,2.788c-2.82,0-5.586-0.914-7.913-2.788l-40.368-32.522c-7.006-5.641-15.719-8.71-24.69-8.71 c-0.601,0-1.303,0.007-2.106,0.052v0.007l-51.64,2.579l0.016-0.006l-0.652,0.013c-5.642,0.006-10.676-3.794-12.161-9.317 l-13.548-50.04c-2.524-9.324-8.387-17.394-16.474-22.67l-32.212-21.031l-11.194-7.313c-3.65-2.377-5.713-6.405-5.72-10.578 c0.003-1.496,0.265-2.997,0.826-4.466l18.461-48.454l-0.003,0.007c1.72-4.518,2.582-9.265,2.582-14.019 c0-4.753-0.858-9.506-2.582-14.018L38.848,195.33l-0.679-1.776c-0.565-1.489-0.826-2.997-0.83-4.492 c0.007-4.172,2.067-8.188,5.716-10.564l43.414-28.343l0.007-0.007c8.082-5.288,13.94-13.352,16.464-22.67l13.548-50.047 c1.482-5.517,6.523-9.324,12.161-9.317l0.503,0.006l51.91,2.592l0.056,0.007c0.63,0.026,1.264,0.04,1.894,0.046 c8.968,0,17.688-3.063,24.701-8.704l40.386-32.529c2.321-1.874,5.08-2.782,7.904-2.788c2.821,0,5.583,0.914,7.907,2.788 l-2.602-2.096l42.979,34.618c7.022,5.654,15.752,8.704,24.707,8.704c0.666,0,1.263-0.02,1.792-0.033h-0.14l52.075-2.599h0.035 l0.601-0.013c5.641-0.007,10.678,3.8,12.16,9.317l13.548,50.047c2.524,9.317,8.38,17.381,16.464,22.67l49.018,32.006l-5.602-3.656 c3.653,2.377,5.71,6.392,5.716,10.558c0,1.496-0.264,2.998-0.832,4.492l-20.832,54.683L455.38,241.988z"
                ></path>{" "}
                <path
                  class="st0"
                  d="M196.151,226.298l-13.784,2.709c-0.725,0.15-1.123,0.725-0.979,1.463l10.254,52.175l-0.597,0.124 l-39.528-46.423c-0.653-0.757-1.45-0.986-2.305-0.816l-14.636,2.88c-0.725,0.144-1.123,0.718-0.966,1.455l15.817,80.448 c0.14,0.738,0.725,1.136,1.45,0.992l13.783-2.71c0.725-0.15,1.123-0.731,0.983-1.469l-10.242-52.051l0.61-0.118l39.613,46.28 c0.653,0.757,1.338,0.999,2.318,0.816l14.509-2.86c0.724-0.144,1.122-0.725,0.966-1.463l-15.814-80.454 C197.46,226.54,196.876,226.155,196.151,226.298z"
                ></path>{" "}
                <path
                  class="st0"
                  d="M280.868,279.649l-35.731,7.026c-0.483,0.105-0.78-0.091-0.865-0.581l-3.385-17.192 c-0.102-0.483,0.098-0.77,0.581-0.874l29.757-5.85c0.725-0.144,1.123-0.719,0.983-1.449l-2.546-12.922 c-0.144-0.724-0.728-1.123-1.453-0.986l-29.754,5.857c-0.484,0.091-0.784-0.111-0.881-0.594l-3.232-16.454 c-0.098-0.49,0.101-0.784,0.584-0.875l35.731-7.026c0.725-0.144,1.123-0.725,0.966-1.456l-2.56-13.038 c-0.144-0.738-0.725-1.13-1.453-0.986l-53.152,10.454c-0.741,0.144-1.126,0.725-0.982,1.462l15.817,80.454 c0.156,0.732,0.724,1.123,1.465,0.98l53.152-10.454c0.728-0.144,1.126-0.725,0.97-1.456l-2.563-13.046 C282.178,279.91,281.593,279.506,280.868,279.649z"
                ></path>{" "}
                <path
                  class="st0"
                  d="M377.221,190.694l-15.605,3.068c-0.852,0.164-1.266,0.634-1.224,1.515l-1.221,54.291l-0.258,0.046 l-24.847-49.16c-0.398-0.699-0.983-1.084-1.708-0.94l-10.61,2.083c-0.839,0.17-1.237,0.744-1.338,1.541l-3.911,54.82l-0.242,0.052 l-22.19-49.701c-0.255-0.718-0.839-1.096-1.691-0.927l-15.732,3.082c-0.852,0.17-0.996,0.706-0.725,1.417l37.266,76.23 c0.398,0.685,0.98,1.084,1.708,0.94l12.19-2.403c0.852-0.163,1.25-0.751,1.348-1.528l4.368-54.415l0.242-0.045l24.521,48.728 c0.385,0.685,0.97,1.084,1.822,0.914l12.19-2.403c0.852-0.157,1.365-0.77,1.352-1.535l5.504-84.645 C378.4,190.955,378.073,190.524,377.221,190.694z"
                ></path>{" "}
              </g>{" "}
            </g>
          </svg>
          <svg
            fill="#000000"
            height="20px"
            width="20px"
            version="1.1"
            id="Capa_1"
            viewBox="0 0 23.382 23.382"
          >
            <g id="SVGRepo_bgCarrier" stroke-width="0"></g>
            <g
              id="SVGRepo_tracerCarrier"
              stroke-linecap="round"
              stroke-linejoin="round"
            ></g>
            <g id="SVGRepo_iconCarrier">
              {" "}
              <g>
                {" "}
                <path d="M14.58,15.181c0.438-0.732,1.082-1.107,1.936-1.117c0.854-0.01,1.285-0.445,1.299-1.301 c0.012-0.852,0.383-1.496,1.115-1.932c0.734-0.438,0.893-1.027,0.475-1.773c-0.416-0.744-0.416-1.488,0-2.234 c0.418-0.744,0.26-1.332-0.475-1.77c-0.732-0.439-1.104-1.082-1.115-1.938c-0.014-0.852-0.445-1.287-1.299-1.297 c-0.854-0.012-1.498-0.385-1.936-1.117c-0.438-0.734-1.027-0.893-1.771-0.475c-0.744,0.416-1.49,0.416-2.234,0 C9.83-0.19,9.241-0.032,8.803,0.702C8.366,1.435,7.721,1.808,6.868,1.819c-0.852,0.01-1.285,0.445-1.297,1.297 C5.557,3.972,5.186,4.614,4.454,5.054C3.72,5.492,3.559,6.079,3.979,6.824c0.418,0.746,0.418,1.49,0,2.234 c-0.42,0.746-0.26,1.336,0.475,1.773c0.732,0.436,1.104,1.08,1.117,1.932c0.012,0.855,0.445,1.291,1.297,1.301 c0.854,0.01,1.498,0.385,1.936,1.117c0.438,0.734,1.027,0.893,1.771,0.473c0.744-0.412,1.49-0.412,2.234,0 C13.553,16.073,14.143,15.915,14.58,15.181z M11.694,12.614c-2.582,0-4.674-2.092-4.674-4.674c0-2.58,2.092-4.672,4.674-4.672 c2.58,0,4.672,2.092,4.672,4.672C16.366,10.522,14.274,12.614,11.694,12.614z"></path>{" "}
                <path d="M6.793,14.749c-0.898,0-1.018-0.418-1.018-0.418l-3.507,6.893l2.812-0.316l1.555,2.34c0,0,3.24-6.76,3.24-6.715 C8.196,16.491,8.864,14.794,6.793,14.749z"></path>{" "}
                <path d="M17.563,14.601c-2.562,0.268-2.041,0.904-2.627,1.398c-0.674,0.719-1.516,0.578-1.516,0.578l3.955,6.805l0.973-2.52 l2.766,0.361L17.563,14.601z"></path>{" "}
                <polygon points="12.67,6.909 11.692,4.929 10.713,6.909 8.524,7.229 10.106,8.772 9.733,10.954 11.692,9.925 13.651,10.954 13.278,8.772 14.86,7.229 "></polygon>{" "}
                <g> </g> <g> </g> <g> </g> <g> </g> <g> </g> <g> </g> <g> </g>{" "}
                <g> </g> <g> </g> <g> </g> <g> </g> <g> </g> <g> </g> <g> </g>{" "}
                <g> </g>{" "}
              </g>{" "}
            </g>
          </svg>
          <svg
            viewBox="0 0 1024 1024"
            class="icon"
            height="20px"
            width="20px"
            version="1.1"
            xmlns="http://www.w3.org/2000/svg"
            fill="#000000"
          >
            <g id="SVGRepo_bgCarrier" stroke-width="0"></g>
            <g
              id="SVGRepo_tracerCarrier"
              stroke-linecap="round"
              stroke-linejoin="round"
            ></g>
            <g id="SVGRepo_iconCarrier">
              <path
                d="M748.6 612.8l52.6-50.8c-43.5-45.1-95.5-78.7-152.6-99.3 49.4-40.3 81.1-101.6 81.1-170.2 0-121-98.4-219.4-219.4-219.4s-219.4 98.4-219.4 219.4c0 69.1 32.1 130.8 82.1 171.1-153.7 56.6-263.6 204.5-263.6 377.7h73.1c0-181.5 147.7-329.1 329.1-329.1 90.2-0.1 174.4 35.7 237 100.6zM510.3 146.3c80.7 0 146.3 65.6 146.3 146.3S591 438.9 510.3 438.9 364 373.2 364 292.6s65.6-146.3 146.3-146.3zM692.7 679.2l160.9 160.9 58.9-219.8-219.8 58.9z m132.5 54.9l-26.5-26.5 36.3-9.7-9.8 36.2zM616.2 913.9L836 855 675.1 694.1l-58.9 219.8z m87.3-113.8l26.5 26.5-36.3 9.7 9.8-36.2z"
                fill="#0F1F3C"
              ></path>
            </g>
          </svg>
        </div>
      </div>
      <div className="image-container">
        <img
          className="primaryImg"
          src={product.thumbnail}
          alt={product.title}
        />
        {product.images[1] && (
          <img
            className="secondaryImg"
            src={product.images[1]}
            alt={product.title}
          />
        )}
        <img src="https://picsum.photos/200/300" alt={product.title} />
      </div>
      <div className="product-details">
        <h3>{product.title}</h3>
        <div className="details-container">
          <p className="rating">Rating: {product.rating}</p>
          <p className="description">{product.description}</p>
          <p className="price">${product.price}</p>
        </div>
      </div>
    </div>
  );
};

export default ProductCard;
