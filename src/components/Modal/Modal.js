import { useEffect } from "react";

const Modal = ({ handleClose, show, child }) => {
  const showHideClassName = show ? "display-block" : "display-none";
  const modal = document.querySelector('.modal')
  const switchTab = () => {
    // TODO Switch between Add event & Event list
  }

  // Close modal with esc key
  useEffect(() => {
    const keyPressed = (e) => {
      if(e.key === 'Escape') {
        handleClose()
      }
    }
    window.addEventListener('keydown', keyPressed);

    return () => {
      window.removeEventListener('keydown', keyPressed);
    }
  })

  // TODO Close modal when click outside
  // useEffect(() => {
  //   const handleClick = (e) => {
  //     if(show && !modal.contains(e.target)) {
  //       handleClose()
  //     }
  //   }
  //   document.addEventListener('click', handleClick);

  //   return () => {
  //     document.removeEventListener('click', handleClick);
  //   }
  // }, [modal, show])
  

    return (
      <>
      TODO place modal in the center
        <div className={showHideClassName + ' modal absolute top-0 left-[23%] h-full w-3/5 flex text-center'}>
          <div className="modal-content h-3/4 w-3/4 max-h-75 max-w-75 mt-8 mx-auto bg-bg-light overflow-auto">
            <div className='modal-heading flex sticky top-0 items-center z-20 pt-8 bg-bg-secondary font-semibold'>
              <button className="w-1/2 h-10 lg:h-12 flex items-center justify-center bg-bg-light border-t-2 border-border-secondary">
                <div className="w-full sm:w-1/2 lg:w-1/3 flex justify-evenly items-center">
                  <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 20 20" fill="currentColor" className="w-5 h-5">
                    <path d="M10.75 4.75a.75.75 0 00-1.5 0v4.5h-4.5a.75.75 0 000 1.5h4.5v4.5a.75.75 0 001.5 0v-4.5h4.5a.75.75 0 000-1.5h-4.5v-4.5z" />
                  </svg>
                  Add Event
                </div>
              </button>
              <button className="w-1/2 h-10 lg:h-12 flex items-center justify-center border-l-2 border-b-2 bg-bg-secondary border-border-secondary bg-opacity-60 hover:bg-bg-light hover:bg-opacity-0">
                <div className="w-full sm:w-1/2 lg:w-1/3 flex justify-evenly items-center">
                  <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 20 20" fill="currentColor" className="w-5 h-5">
                    <path fillRule="evenodd" d="M6 4.75A.75.75 0 016.75 4h10.5a.75.75 0 010 1.5H6.75A.75.75 0 016 4.75zM6 10a.75.75 0 01.75-.75h10.5a.75.75 0 010 1.5H6.75A.75.75 0 016 10zm0 5.25a.75.75 0 01.75-.75h10.5a.75.75 0 010 1.5H6.75a.75.75 0 01-.75-.75zM1.99 4.75a1 1 0 011-1H3a1 1 0 011 1v.01a1 1 0 01-1 1h-.01a1 1 0 01-1-1v-.01zM1.99 15.25a1 1 0 011-1H3a1 1 0 011 1v.01a1 1 0 01-1 1h-.01a1 1 0 01-1-1v-.01zM1.99 10a1 1 0 011-1H3a1 1 0 011 1v.01a1 1 0 01-1 1h-.01a1 1 0 01-1-1V10z" clipRule="evenodd" />
                  </svg>
                  Events
                </div>
              </button>
            </div>
            {child}
            <div className="">
              <p>Lorem ipsum dolor sit, amet consectetur adipisicing elit. Quos maiores eveniet labore distinctio dicta quia molestias dolor possimus nesciunt, atque rem. Tempore asperiores deserunt cumque explicabo adipisci autem, consectetur consequatur quas illum vel debitis id ut omnis recusandae! Alias repudiandae eaque provident eius sed nostrum iure laudantium amet dolorum repellat non odio, officiis molestias recusandae ad doloremque modi vel quae hic ea saepe. Ratione, sapiente! Soluta esse unde, laudantium assumenda aliquid deleniti dignissimos reiciendis laboriosam, corporis earum similique alias tempora suscipit nam temporibus adipisci voluptates necessitatibus ullam minus tempore possimus id voluptas ratione vel? Amet recusandae hic sapiente dolore, tempora labore dolorum aut ex sed veritatis maiores ab quae obcaecati nobis placeat iusto soluta quos animi optio et atque. Fugiat harum laudantium commodi ducimus nemo quo quia fugit distinctio explicabo officia. Aperiam, in dicta consequuntur tempora sint explicabo voluptatum mollitia quis iure aliquid soluta eaque ipsum repellat dolores rerum dolor veritatis delectus accusantium quae quas fugit eligendi. Ducimus animi recusandae qui. Nobis, quis accusamus. Expedita, labore voluptatibus voluptas cupiditate, laboriosam dignissimos officia, minus non aut doloremque quaerat cumque eligendi porro adipisci mollitia suscipit tempora modi facere molestias est repellat neque? Consectetur ad ipsa eum enim, ipsam consequatur quod sit consequuntur, rem non inventore iste pariatur voluptates voluptate harum sint quia blanditiis dolor delectus suscipit veritatis. Deserunt tempore dolorem error harum illo sapiente maiores nobis? Maxime id consectetur voluptate impedit quo dicta delectus, magni officiis rerum eius odio beatae cum quidem, reiciendis, suscipit ab natus explicabo ipsum voluptatum porro eos? Sint eligendi repudiandae dolores magnam unde ullam temporibus ratione provident velit sequi non necessitatibus, esse atque quia adipisci iure perspiciatis nihil itaque consectetur! Assumenda nobis possimus maxime accusantium, neque dignissimos laboriosam rem voluptatibus magni consequuntur incidunt nisi dolorem sint harum repellendus qui quas natus ullam cupiditate, excepturi a fugit? Natus accusantium modi similique praesentium repellat expedita, magnam ea, libero nesciunt quibusdam illum corporis laudantium ipsum maiores sit quae, alias sunt. Rem et quia error hic. Distinctio fuga, repellat adipisci omnis et tempora excepturi obcaecati suscipit autem eligendi, tenetur a culpa nemo illum. Suscipit obcaecati voluptate ex voluptas deserunt mollitia distinctio adipisci incidunt velit nihil rem alias, numquam, excepturi natus placeat impedit doloribus odio accusamus libero perspiciatis. Quam quas veritatis laborum ipsum alias eveniet consequuntur, vitae optio debitis, possimus harum dolores quod! Rerum distinctio laudantium, dolorem officia aspernatur at architecto incidunt, libero, voluptatem quae cupiditate nam itaque aliquam! Eius, esse. Corrupti similique repudiandae deserunt. Accusantium odit adipisci numquam et earum odio ea eligendi debitis veniam illum fuga quibusdam perferendis, ex voluptatum nostrum praesentium omnis, impedit excepturi dolorum. Similique porro quam asperiores ipsa quibusdam nostrum ea esse quaerat eum eius est cumque, quasi quis dolor consectetur corrupti qui. Officia doloribus adipisci distinctio eaque architecto neque eum cum cumque? Repellat vel ipsam vero ullam odit aliquid deleniti, id possimus! Reprehenderit inventore unde quibusdam laborum, illum accusamus soluta possimus minima fuga aut nihil vitae, eaque voluptates. Dolore dolores minima dolorem ipsum quae perspiciatis voluptate temporibus magni soluta pariatur delectus necessitatibus, dolorum repellendus quas dignissimos quia!</p>
            </div>
          </div>
        </div>
      </>
    );
  }

  export default Modal;