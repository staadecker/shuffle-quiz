import { useGame } from "../game_logic/GameContext";

export const UserCard = ({ userId }: { userId: string }) => {
  const { state } = useGame();
  const user = state.context.users[userId];
  const you = userId === state.context.currentUserUid;

  return (
    <div className="flex flex-row">
      <div className="flex flex-row p-2 bg-white rounded-lg shadow hover:shadow-md justify-start items-center gap-2 transition-height ease-in duration-500">
        <div
          className={`w-6 h-6 rounded-full justify-center items-center flex ${user.displayColor}`}
        >
          <img src={`/avatars/${user.displayName}.png`} />
        </div>
        <div className="text-black text-xs cursor-default">
          Anonymous {user.displayName} {you ? "(You)" : ""}
        </div>
      </div>
    </div>
  );
};
export const avatar_colors = [
  "bg-[#3f00ff]",
  "bg-[#00FF00]",
  "bg-[#FF1300]",
  "bg-[#ff6600]",
  "bg-[#DFFF00]",
  "bg-[#ff00ff]",
  "bg-[#BF00FF]",
  "bg-[#4CBB17]",
  "bg-[#0047AB]",
  "bg-[#FF0000]",
  "bg-[#00FF7F]",
  "bg-[#FF6FFF]",
  "bg-[#6F00FF]",
  "bg-[#FFD700]",
];
export const avatars = [
  "Alligator",
  "Anteater",
  "Armadillo",
  "Auroch",
  "Axolotl",
  "Badger",
  "Bat",
  "Beaver",
  "Buffalo",
  "Camel",
  "Capybara",
  "Chameleon",
  "Cheetah",
  "Chinchilla",
  "Chipmunk",
  "Chupacabra",
  "Cormorant",
  "Coyote",
  "Crow",
  "Dingo",
  "Dinosaur",
  "Dolphin",
  "Duck",
  "Elephant",
  "Ferret",
  "Fox",
  "Frog",
  "Giraffe",
  "Gopher",
  "Grizzly",
  "Hedgehog",
  "Hippo",
  "Hyena",
  "Ibex",
  "Ifrit",
  "Iguana",
  "Jackal",
  "Kangaroo",
  "Koala",
  "Kraken",
  "Lemur",
  "Leopard",
  "Liger",
  "Llama",
  "Manatee",
  "Mink",
  "Monkey",
  "Moose",
  "Narwhal",
  "Nyan Cat",
  "Orangutan",
  "Otter",
  "Panda",
  "Penguin",
  "Platypus",
  "Pumpkin",
  "Python",
  "Quagga",
  "Rabbit",
  "Raccoon",
  "Rhino",
  "Sheep",
  "Shrew",
  "Skunk",
  "Squirrel",
  "Tiger",
  "Turtle",
  "Walrus",
  "Wolf",
  "Wolverine",
  "Wombat",
];
