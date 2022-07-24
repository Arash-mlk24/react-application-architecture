import { useEffect, useState } from 'react';
import { ScaleLoader } from 'react-spinners';
import AppError from '../../core/util/AppError';
import HomePageProps from '../../model/view/HomePageProps';
import UserInfoResultDto from '../../network/dto/UserInfoResultDto';
import '../../res/styles/Home.css'


const Home = ({ controller }: HomePageProps) => {

    // --------------------  states  --------------------
    const [processing, setProcessing] = useState<boolean>(true)
    const [data, setData] = useState<UserInfoResultDto>()

    // --------------------  functions  --------------------
    const getItems = () => {
        controller.getUserInfo()
            .then(data => {
                setData(data)
                setProcessing(false)
            })
            .catch((er: AppError) => {
                alert(er.message)
            })
            .catch(er => {
                alert("خطای سیستمی")
            });
    }

    useEffect(() => {
        getItems()
    }, [])

    // --------------------  render  --------------------
    return (
        <div>

            {processing ?

                <div className='home home-loading'>
                    <ScaleLoader color='#031926' width={5} height={42} />
                </div> :

                <div className='home'>

                </div>

            }

        </div>
    )
}

export default Home