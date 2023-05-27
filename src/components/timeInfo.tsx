import { BiTime } from 'react-icons/bi';

export default function TimeInfo() {
  return (
    <div className="bg-accent absolute top-[50%] left-[5%] p-10 text-white shadow-xl">
      <div className="flex items-center gap-2 text-2xl pb-5">
        <BiTime />
        <h2>진료 시간</h2>
      </div>
      <ul className="flex flex-col gap-2">
        <li>
          <h4>· 주간진료</h4>
          <p>10:00 ~ 20:00</p>
        </li>
        <li>
          <h4>· 야간진료</h4>
          <p>20:00 ~ 익일 10:00</p>
        </li>
        <li>
          <h4>· 특수동물진료</h4>
          <p>14:00 ~ 18:00(?)</p>
        </li>
        <li>
          <h4>· 면회시간</h4>
          <p>10:00 ~ 22:00</p>
        </li>
        <li>
          <h4 className="font-bold">연중 무휴 24시 진료</h4>
        </li>
      </ul>
    </div>
  );
}
