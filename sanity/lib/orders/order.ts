import { defineQuery } from "next-sanity";
import { sanityFetch } from "../live";

export async function getMyOrders(userId: string) {
  if (!userId) {
    throw new Error("User ID is required to fetch orders.");
  }
  const MY_ORDERS_QUERY =
    defineQuery(`*[_type == "order" && clerkUserId == $userId] | order(orderDate desc) {
    ..., 
    products[] {
        ...,
        product->
    }  
}`);

  try {
    // Use sanityFetch to get the orders for the user
    const orders = await sanityFetch({
      query: MY_ORDERS_QUERY,
      params: { userId },
    });

    return orders.data || [];
  } catch (error) {
    console.error("Error fetching orders:", error);
    throw new Error("Failed to fetch orders.");
  }
}
