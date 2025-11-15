import { Card, CardContent, Typography } from "@mui/material";

const PostCard = () => (
    <Card>
        <CardContent>
            <Typography variant="h6">John Doe</Typography>
            <Typography variant="body2">This is a sample post.</Typography>
        </CardContent>
    </Card>
);

export default PostCard;
