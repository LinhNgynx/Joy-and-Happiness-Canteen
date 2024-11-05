// Utility function to generate a unique order ID
let orderIdCounter = 1;

function generateUniqueOrderId() {
  return orderIdCounter++;
}

export const staff = [
  {
    id: 1,
    name: "Alice",
    email: "alice@domain.com",
    role: "Staff",
    orderHistory: [
      { id: generateUniqueOrderId(), items: "Pizza, Soda", totalAmount: 15.99, paymentMethod: "Credit Card", date: "10-01-2024" },
      { id: generateUniqueOrderId(), items: "Burger, Fries", totalAmount: 9.49, paymentMethod: "Cash", date: "10-05-2024" },
      { id: generateUniqueOrderId(), items: "Salad, Water", totalAmount: 7.99, paymentMethod: "Credit Card", date: "10-10-2024" },
      { id: generateUniqueOrderId(), items: "Pasta, Juice", totalAmount: 12.49, paymentMethod: "Debit Card", date: "10-12-2024" },
      { id: generateUniqueOrderId(), items: "Sandwich, Coffee", totalAmount: 8.99, paymentMethod: "Cash", date: "10-15-2024" },
      { id: generateUniqueOrderId(), items: "Steak, Wine", totalAmount: 24.99, paymentMethod: "Credit Card", date: "10-18-2024" },
      { id: generateUniqueOrderId(), items: "Sushi, Green Tea", totalAmount: 18.99, paymentMethod: "Debit Card", date: "10-20-2024" }
    ]
  },
  {
    id: 2,
    name: "Bob",
    email: "bob@domain.com",
    role: "Staff",
    orderHistory: [
      { id: generateUniqueOrderId(), items: "Coffee, Muffin", totalAmount: 4.99, paymentMethod: "Cash", date: "10-02-2024" },
      { id: generateUniqueOrderId(), items: "Wrap, Juice", totalAmount: 8.99, paymentMethod: "Credit Card", date: "10-07-2024" },
      { id: generateUniqueOrderId(), items: "Pasta, Salad", totalAmount: 10.49, paymentMethod: "Debit Card", date: "10-14-2024" },
      { id: generateUniqueOrderId(), items: "Tacos, Soda", totalAmount: 11.49, paymentMethod: "Cash", date: "10-18-2024" },
      { id: generateUniqueOrderId(), items: "Brownie, Ice Cream", totalAmount: 6.99, paymentMethod: "Credit Card", date: "10-25-2024" }
    ]
  },
  {
    id: 3,
    name: "Charlie",
    email: "charlie@domain.com",
    role: "Staff",
    orderHistory: [
      { id: generateUniqueOrderId(), items: "Salad, Soup", totalAmount: 9.99, paymentMethod: "Debit Card", date: "1-03-2024" },
      { id: generateUniqueOrderId(), items: "Grilled Chicken, Rice", totalAmount: 14.99, paymentMethod: "Credit Card", date: "10-09-2024" },
      { id: generateUniqueOrderId(), items: "Ice Cream, Waffle", totalAmount: 7.49, paymentMethod: "Cash", date: "1-16-2024" },
      { id: generateUniqueOrderId(), items: "Pasta Alfredo, Breadsticks", totalAmount: 11.99, paymentMethod: "Debit Card", date: "10-19-2024" },
      { id: generateUniqueOrderId(), items: "Nachos, Guacamole", totalAmount: 10.49, paymentMethod: "Credit Card", date: "10-24-2024" }
    ]
  },
  {
    id: 4,
    name: "Diana",
    email: "diana@domain.com",
    role: "Staff",
    orderHistory: [
      { id: generateUniqueOrderId(), items: "Cheeseburger, Fries", totalAmount: 11.49, paymentMethod: "Cash", date: "10-01-2024" },
      { id: generateUniqueOrderId(), items: "Spaghetti, Meatballs", totalAmount: 12.99, paymentMethod: "Credit Card", date: "4-06-2024" },
      { id: generateUniqueOrderId(), items: "Fruit Salad, Yogurt", totalAmount: 5.99, paymentMethod: "Debit Card", date: "2-11-2024" },
      { id: generateUniqueOrderId(), items: "Chicken Wings, Beer", totalAmount: 15.99, paymentMethod: "Cash", date: "1-14-2024" },
      { id: generateUniqueOrderId(), items: "Pancakes, Maple Syrup", totalAmount: 8.49, paymentMethod: "Credit Card", date: "10-21-2024" }
    ]
  },
  {
    id: 5,
    name: "Edward",
    email: "edward@domain.com",
    role: "Staff",
    orderHistory: [
      { id: generateUniqueOrderId(), items: "Vegetable Stir Fry, Rice", totalAmount: 9.49, paymentMethod: "Credit Card", date: "1-03-2024" },
      { id: generateUniqueOrderId(), items: "Quiche, Salad", totalAmount: 10.49, paymentMethod: "Debit Card", date: "10-08-2024" },
      { id: generateUniqueOrderId(), items: "Fish Tacos, Salsa", totalAmount: 12.99, paymentMethod: "Cash", date: "10-15-2024" },
      { id: generateUniqueOrderId(), items: "Lamb Chops, Mashed Potatoes", totalAmount: 18.99, paymentMethod: "Credit Card", date: "10-19-2024" },
      { id: generateUniqueOrderId(), items: "Cobb Salad, Dressing", totalAmount: 7.99, paymentMethod: "Debit Card", date: "10-23-2024" }
    ]
  }
];