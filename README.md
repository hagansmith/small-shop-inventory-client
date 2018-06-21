# Small Shop | Inventory (Client)
###Small Shop is an Inventory Management Tool

####Currently In Version 1 Small Shop is planned to evolve into a full Warehouse Management System(WMS) Including Modules For:
- [ ] General Inventory Management
    - [X] Product imports and updates (from Shopify)
    - [X] Customer orders update stock counts (from Shopify)
    - [X] Product locations
        - [ ] Pick locations vs. Stock locations
    - [X] Product counts and minimum levels
    - [X] Low inventory monitoring
    - [X] Restock order tracking
    - [ ] Historical/Projected Sales for reorder guidance 
- [ ] Pick/Pack
- [ ] Shipping
- [ ] Ordering
- [ ] Analytics
- [ ] Performance Improvement/Management

##### Screen Shots
![AllProductsPage](https://github.com/hagansmith/small-shop-inventory-client/blob/master/AllProducts.png)
![Tracking](https://github.com/hagansmith/small-shop-inventory-client/blob/master/Tracking.png)
![Receive](https://github.com/hagansmith/small-shop-inventory-client/blob/master/Receive.png)




##### Tech Stack
- ReactJS
- C#
- SQL
- Azure Hosting

##### Motivation and Additional Information
After being contracted to optimize a small warehouse and identify software that could assist in improving 
operations it became clear that software in WMS space was either not robust enough - lacking 
essential functionality (like location tracking, real time updating, or the ability to integrate 
with online webstores like Shopify), or too robust built for use in major operations.

Knowing what I was looking for from the warehouse management and consulting side I decided to build what I 
could not find, a WMS for small and medium businesses that would allow business owners and employees to get 
quick insight into their inventory whether it's in their garage on shelves or in a dedicated warehouse.

- Endpoints currently exist for integration with Shopify Webhook Events (Products, Orders)
- Server side repo [here](https://github.com/hagansmith/SmallShopDAL)
