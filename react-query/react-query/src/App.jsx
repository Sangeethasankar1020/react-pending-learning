import { useState } from "react";
import styled from "styled-components";
import { useQuery } from "@tanstack/react-query";
import "./App.css";
import { getPosts } from "./service";

const Container = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  margin-top: 50px;
`;

const Title = styled.h1`
  font-size: 36px;
  font-weight: bold;
  margin-bottom: 20px;
`;

const List = styled.ul`
  list-style: none;
  padding: 0;
  margin: 0;
`;

const ListItem = styled.li`
  background-color: #f5f5f5;
  border-radius: 5px;
  box-shadow: 0 2px 5px rgba(0, 0, 0, 0.1);
  padding: 30px;
  margin-bottom: 30px;
  cursor: pointer; /* Added cursor pointer for better UX */
`;

function App() {
  const [selectedPost, setSelectedPost] = useState(null);
  const {
    isLoading,
    error,
    data: posts,
  } = useQuery({
    queryKey: ["posts"],
    queryFn: getPosts,
  });

  if (isLoading) return <p>...loading data</p>;

  if (error) return <p>Error fetching data: {error.message}</p>;

  return (
    <Container>
      <Title>List of Posts using React Query</Title>
      <List>
        {posts?.map((item) => (
          <ListItem
            key={item.id}
            onClick={() => setSelectedPost(item.id)}
            style={{
              backgroundColor: selectedPost === item.id ? "#e0e0e0" : "#f5f5f5",
            }}
          >
            <h3>{item.title}</h3>
            <p>{item.body}</p>
          </ListItem>
        ))}
      </List>
      {selectedPost && (
        <div>
          <h2>Selected Post ID: {selectedPost}</h2>
        </div>
      )}
    </Container>
  );
}

export default App;
