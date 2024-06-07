const MenuData = [
  {
    title: "Dashboard",
    link: "/dashboard"
  },
  {
    title: "Orders",
    dropdown: true,
    items: [
      { title: "Live Orders", link: "/orders/liveOrders" },
      { title: "Orders History", link: "/orders/ordersHistory" }
    ]
  },
  {
    title: "Menu Managment",
    link: "/menuManagment"
  },
  {
    title: "Store",
    dropdown: true,
    items: [
      { title: "Overview", link: "/store/overview" },
      { title: "Manage stores", link: "/store/manageStores" }
    ]
  },
  {
    title: "Customers",
    dropdown: true,
    items: [
      { title: "Manage Customer", link: "/customers/manageCustomer" },
      
      { title: "Manage User", link: "/customers/manageUser" },
      { title: "Manage Roles", link: "/customers/manageRoles" },
      { title: "Customer Reviews", link: "/customers/customerReviews" }
    ]
  },
  {
    title: "Reports",
    link: "/reports"
  },
  {
    title: "Settings",
    link: "/settings"
  }
];


  export default MenuData;