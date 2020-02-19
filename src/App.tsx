    import React from "react";
    import "./App.css";
    import SideBar from "./sideBar";



    const App: React.FC = () => {
        return (
            <>
                <div className='w-screen h-screen relative text-white ' style={{ backgroundColor: '#1B1D37' }}>
                    <div className=" w-56 h-full absolute border-r opacity-75  border-gray-400	">
                        <div className='header'>
                            <div className=' h-10 mx-4 mt-4 leading-loose font-bold	'>
                                <span>LingoScript </span>
                                <span className='text-blue-400 font-light'>API</span>
                            </div>
                            <div className=' h-8'>
                                <input  type="text" placeholder='Find anything' className='font-light placeholder-black text-sm border border-gray-700 w-48 ml-2 p-1 rounded-lg text-center'/>
                            </div>
                        </div>
                        <div className='pb-2 font-light text-sm p-4'>
                            <SideBar/>
                        </div>
                        <a className=' h-10 block border-t p-4' style={{ color: '#6F84F2' }}>登录 -></a>
                    </div>
                    <div className=' lg:w-9/12  absolute right-0 w-full h-full' style={{ backgroundColor: '#1B1D37' }}>
                        <div className=' h-12'>
                            <div className='float-right m-3 text-sm' style={{ color: '#6F84F2' }}>
                                <div className='float-left mr-3'>文件</div>
                                <div className='float-left mr-3 text-base border-b-2' style={{ borderBottomColor: "#6f84F2" }}>API</div>
                                <div className='float-left mr-3'>LingoScript</div>
                                <div className='float-left mr-3'>支持</div>
                                <div className='float-left mr-3'>登录 -></div>
                            </div>
                        </div>
                        <div className='font-light'>
                            <div className='p-16'>
                                <div className='w-1/2 float-left'>
                                    <div className='text-2xl font-normal'>API参考</div>
                                    <div className='opacity-75 mr-16 text-sm'>
                                        <p className='m-4 ml-0 text-base'>Stripe API围绕REST进行组织。我们的API具有可预测的面向资源的URL，接受形式编码的请求正文，返回JSON编码的响应，并使用标准的HTTP响应代码，身份验证和动词。</p>
                                        <p className='m-4 ml-0'>您可以在测试模式下使用Stripe API，这不会影响您的实时数据或与银行网络进行交互。您用于验证请求的API密钥确定请求是实时模式还是测试模式。</p>
                                        <p className='m-4 ml-0'>随着我们发布新版本和定制功能，Stripe API对于每个帐户都不同。登录以查看针对您的API版本定制的文档，以及您的测试密钥和数据。</p>
                                        <p className='m-4 ml-0'>订阅条纹“ 小号API announce邮件列表的更新。</p>
                                        <p className='m-4 ml-0'>本节对您有帮助吗？是否</p>
                                    </div>
                                </div>
                                <div className='w-1/2 float-right opacity-75 mt-12 '>
                                    <p className='m-4 ml-0'>刚开始?</p>
                                    <p className='m-4 ml-0'>查看我们的开发快速入门指南。</p>
                                    <p className='m-4 ml-0'>不是开发者？</p>
                                    <p className='m-4 ml-0'>使用我们合作伙伴提供的应用程序开始使用Stripe，并使用您的Stripe帐户进行更多操作- 无需代码。</p>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </>
        );
    };

    export default App;
