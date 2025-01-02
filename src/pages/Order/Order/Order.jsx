import { useState } from "react";
import coverImg from "../../../assets/shop/order.jpg";
import Cover from "../../../Shared/Cover/Cover";
import { Tab, Tabs, TabList, TabPanel } from "react-tabs";
import "react-tabs/style/react-tabs.css";
import useMenu from "../../../hooks/useMenu";
import OrderTab from "../OrderTab/OrderTab";
import { useParams } from "react-router-dom";
import { Helmet } from "react-helmet-async";

const Order = () => {
  const categories = ["salad", "pizza", "soup", "dessert", "drinks"];
  const { category } = useParams();
  const initialIndex = categories.indexOf(category);
  const [tabIndex, setTabIndex] = useState(initialIndex);
  const [menu] = useMenu();
  const dessertItems = menu.filter((item) => item.category === "dessert");
  const soupItems = menu.filter((item) => item.category === "soup");
  const saladItems = menu.filter((item) => item.category === "salad");
  const pizzaItems = menu.filter((item) => item.category === "pizza");
  const drinksItems = menu.filter((item) => item.category === "drinks");

  return (
    <div>
      <Helmet>
        <title>Bistro Boss | Order Food</title>
      </Helmet>
      <Cover img={coverImg} title={"Order Food"}></Cover>

      {/* tab from daisy ui */}
      {/* <div role="tablist" className="tabs tabs-lifted">
        <a role="tab" className="tab">
          Tab 1
        </a>
        <a role="tab" className="tab tab-active">
          Tab 2
        </a>
        <a role="tab" className="tab">
          Tab 3
        </a>
      </div> */}

      <Tabs defaultIndex={tabIndex} onSelect={(index) => setTabIndex(index)}>
        <TabList>
          <Tab>Salad</Tab>
          <Tab>Pizza</Tab>
          <Tab>Soup</Tab>
          <Tab>Dessert</Tab>
          <Tab>Drinks</Tab>
        </TabList>
        <TabPanel>
          {/* <div className="grid md:grid-cols-3 gap-10">
            {saladItems.map((item) => (
              <FoodCard key={item._id} item={item}></FoodCard>
            ))}
          </div> */}

          <OrderTab items={saladItems}></OrderTab>
        </TabPanel>
        <TabPanel>
          <OrderTab items={pizzaItems}></OrderTab>
        </TabPanel>
        <TabPanel>
          <OrderTab items={soupItems}></OrderTab>
        </TabPanel>
        <TabPanel>
          <OrderTab items={dessertItems}></OrderTab>
        </TabPanel>
        <TabPanel>
          <OrderTab items={drinksItems}></OrderTab>
        </TabPanel>
      </Tabs>
    </div>
  );
};

export default Order;
