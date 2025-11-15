import { Box } from "@mui/material";
import PostCard from "../../components/PostCard";

const Feed = () => {
    return (
        <Box display="flex" flexDirection="column" gap={2}>
            <PostCard />
            <PostCard />
        </Box>
    );
};

export default Feed;
