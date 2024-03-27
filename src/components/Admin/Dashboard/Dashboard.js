import { Box, Grid, Heading, Stack, Text } from '@chakra-ui/react';
import Sidebar from '../Sidebar';
import DataBox from './DataBox';
import Bar from './Bar';
import { DoughnutChart, LineChart } from './Chart';
import { useDispatch, useSelector } from 'react-redux';
import { useEffect } from 'react';
import { getDashboardStats } from '../../../redux/actions/admin';
import Loader from '../../Loader/Loader';

const Dashboard = () => {
  const dispatch = useDispatch();
  const {
    loading,
    stats,
    usersCount,
    usersPercentage,
    viewsCount,
    viewsPercentage,
    subscriptionCount,
    subscriptionPercentage,
    usersProfit,
    viewsProfit,
    subscriptionProfit,
  } = useSelector(state => state.admin);

  useEffect(() => {
    dispatch(getDashboardStats());
  }, []);
  return (
    <Grid minH={'100vh'} templateColumns={['1fr', '5fr 1fr']}>
      {loading || !stats ? (
        <Loader color="blue.500" />
      ) : (
        <Box boxSizing="border-box" py={'16'} px={['4', '0']}>
          <Text
            textAlign={'center'}
            opacity={0.5}
            children={`Last change was on ${
              String(new Date(stats[11].createdAt)).split('G')[0]
            }`}
          />
          <Heading
            children="Dashboard"
            ml={['0', '16']}
            mb={'16'}
            textAlign={['center', 'left']}
          />

          <Stack
            direction={['column', 'row']}
            minH={'24'}
            justifyContent={'space-evenly'}
          >
            <DataBox
              title="Views"
              qty={viewsCount}
              qtyPercentage={viewsPercentage}
              profile={viewsProfit}
            />
            <DataBox
              title="Users"
              qty={usersCount}
              qtyPercentage={usersPercentage}
              profile={usersProfit}
            />
            <DataBox
              title="Subscription"
              qty={subscriptionCount}
              qtyPercentage={subscriptionPercentage}
              profile={subscriptionProfit}
            />
          </Stack>
          <Box
            m={['0', '16']}
            p={['0', '16']}
            mt={['4', '16']}
            borderRadius={'lg'}
            boxShadow={'-2px 0 10px rgba(45, 85, 255, 0.5)'}
          >
            <Heading
              textAlign={['center', 'left']}
              size={'md'}
              children={'Views Graph'}
              pt={['8', '0']}
              ml={['0', '16']}
            />
            <LineChart views={stats.map(item => item.views)} />
          </Box>

          <Grid templateColumns={('1fr', '2fr 1fr')}>
            <Box p={'4'}>
              <Heading
                children="Progress Bar"
                textAlign={['center', 'left']}
                size={'md'}
                my={'8'}
                ml={['0', '16']}
              />
              <Box>
                <Bar
                  profit={viewsProfit}
                  title="Views"
                  value={viewsPercentage}
                />
                <Bar
                  profit={usersProfit}
                  title="Users"
                  value={usersPercentage}
                />
                <Bar
                  profit={subscriptionProfit}
                  title="Subscription"
                  value={subscriptionPercentage}
                />
              </Box>
            </Box>
            <Box p={['0', '16']} boxSizing="border-box" py={'4'}>
              <Heading
                children="Users"
                textAlign={'center'}
                size={'md'}
                mb={'4'}
              />
              <DoughnutChart
                users={[subscriptionCount, usersCount - subscriptionCount]}
              />
            </Box>
          </Grid>
        </Box>
      )}
      <Sidebar />
    </Grid>
  );
};

export default Dashboard;
