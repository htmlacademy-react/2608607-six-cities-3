import MainPage from '../../pages/main/main';

type AppScreenProps = {
  locationCount: number;
};

export default function App({locationCount}: AppScreenProps): JSX.Element {
  return (
    <MainPage locationCount={locationCount} />
  );
}
