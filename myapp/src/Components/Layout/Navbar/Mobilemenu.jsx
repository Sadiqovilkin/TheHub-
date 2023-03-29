import { MultilevelMenu } from "react-multilevel-menu";

export default function MobileMenu() {
  const list = [
    {
      label: "Our courses",
      faIcon: "fas fa-chevron-down",
      activeImageIcon: "/ironman.jpg",
      items: [
        {
          label: "Item 1.1",
          faIcon: "fab fa-accusoft",
          onSelected: function () {
            console.log("Item 1.2.2.1");
          },
        },
        {
          label: "Item 1.2",
          faIcon: "fab fa-accessible-icon",
        },
        {
          label: "Item 1.1",
          faIcon: "fab fa-accusoft",
          onSelected: function () {
            console.log("Item 1.2.2.1");
          },
        },
        {
          label: "Item 1.2",
          faIcon: "fab fa-accessible-icon",
        },
        {
          label: "Item 1.1",
          faIcon: "fab fa-accusoft",
          onSelected: function () {
            console.log("Item 1.2.2.1");
          },
        },
        {
          label: "Item 1.2",
          faIcon: "fab fa-accessible-icon",
        },
        {
          label: "Item 1.1",
          faIcon: "fab fa-accusoft",
          onSelected: function () {
            console.log("Item 1.2.2.1");
          },
        },
        {
          label: "Item 1.2",
          faIcon: "fab fa-accessible-icon",
        },
        {
          label: "Item 1.1",
          faIcon: "fab fa-accusoft",
          onSelected: function () {
            console.log("Item 1.2.2.1");
          },
        },
        {
          label: "Item 1.2",
          faIcon: "fab fa-accessible-icon",
        },
      ],
    },
    {
      label: "Team Traning",
      faIcon: "fas fa-chevron-down",
      activeFaIcon: "fas fa-anchor",
      onSelected: function () {
        console.log("Item 3");
      },
    },
    {
      label: "Resources",
      faIcon: "fas fa-chevron-down",
      items: [
        {
          label: "Item 2.1",
          faIcon: "fab fa-accusoft",
          activeFaIcon: "fab fa-accusoft",
          disabled: true,
        },
        {
          label: "Item 2.2",
          faIcon: "fas fa-anchor",
          activeFaIcon: "fab fa-accusoft",
        },
      ],
    },
    {
      label: "About Us",
      faIcon: "fas fa-chevron-down",
      activeFaIcon: "fas fa-anchor",
      onSelected: function () {
        console.log("Item 3");
      },
    },
    {
      label: "Contact Us",
      faIcon: "fas fa-chevron-down",
      activeFaIcon: "fas fa-anchor",
      onSelected: function () {
        console.log("Item 3");
      },
    },
    {
      label: "Log In",
      faIcon: "fas fa-chevron-down",
      activeImageIcon: "/ironman.jpg",
      link: "https://www.npmjs.com/package/ng-material-multilevel-menu",
      hrefTargetType: "_blank",
      items: [
        {
          label: "Item 1.1",
          faIcon: "fab fa-accusoft",
          hidden: true,
          onSelected: function () {
            console.log("Item 1.2.2.1");
          },
        },
        {
          label: "Item 1.2",
          faIcon: "fab fa-accessible-icon",
          hidden: true,
          items: [
            {
              label: "Item 1.2.1",
              faIcon: "fas fa-allergies",
              hidden: true,
              onSelected: function () {
                console.log("Item 1.2.2.1");
              },
            },
            {
              label: "Item 1.2.2",
              faIcon: "fas fa-ambulance",
              hidden: true,
              items: [
                {
                  label: "Item 1.2.2.1",
                  faIcon: "fas fa-anchor",
                  onSelected: function () {
                    console.log("Item 1.2.2.1");
                  },
                },
              ],
            },
          ],
        },
      ],
    },
  ];

  const selectedItem = (event) => {
    console.log(event);
  };

  const config = {
    paddingAtStart: true,
    classname: "my-custom-class",
    listBackgroundColor: `rgb(208, 241, 239)`,
    fontColor: `rgb(8, 54, 71)`,
    backgroundColor: `rgb(208, 241, 239)`,
    selectedListFontColor: `red`,
    highlightOnSelect: true,
    useDividers: false,
  };

  return (
    <MultilevelMenu
      list={list}
      configuration={config}
      selectedListItem={selectedItem}
      selectedLabel={selectedItem}
    />
  );
}
