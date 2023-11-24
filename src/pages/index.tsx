import { Box, CardHeader } from '@mui/material';
import Button from '@mui/material/Button';
import Card from '@mui/material/Card';
import CardContent from '@mui/material/CardContent';
import TextField from '@mui/material/TextField';
import { useState } from 'react';
import { Seo } from 'src/components/seo';
import { useNavigate } from 'react-router-dom';

const Page = () => {
    const [username, setUsername] = useState('');
    const navigate = useNavigate();

    const handleSubmit = () => {
        ('submit');
        navigate(`/dashboard?username=${username}`);
    }

    return (
        <>
            <Seo />
            <Box
                sx={{
                    display: 'flex',
                    flexDirection: 'column',
                    alignItems: 'center',
                    justifyContent: 'center',
                    minHeight: '100vh',
                    padding: 3,
                }}
            >
                <Card
                    elevation={16}
                    sx={{
                        width: 400,
                        margin: 'auto',
                        padding: 2,
                    }}
                >
                    <CardHeader
                        title="Github Lens"
                        subheader="Enter your username to view your github profile statistics"
                        sx={{

                        }}
                    />
                    <CardContent
                        sx={{
                            marginTop: -4,
                        }}
                    >
                        <TextField
                            fullWidth
                            label="Username"
                            name="username"
                            value={username}
                            onChange={(e) => setUsername(e.target.value)}
                        />
                        <Button
                            fullWidth
                            size="large"
                            sx={{ mt: 2 }}
                            variant="contained"
                            onClick={handleSubmit}
                        >
                            Go!
                        </Button>
                    </CardContent>
                </Card>
            </Box>
        </>
    );
};

export default Page;
