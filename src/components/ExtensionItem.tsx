import { Extension } from "@/types/extension";
import Image from "next/image";
import ToggleActiveButton from "./ToggleActiveButton";

interface ExtensionItemProps {
    extensionData: Extension;
    updateExtensionState: React.Dispatch<React.SetStateAction<Extension[]>>;
}

const ExtensionItem = ({ extensionData, updateExtensionState }: ExtensionItemProps) => {
    const imgPath = extensionData.logo.slice(1);

    return (
        <div
            className="flex flex-col justify-between max-w-xs h-[190px] rounded-xl px-4 py-4 border border-[hsl(226,_11%,_37%)]"
            style={{ backgroundColor: 'hsl(225, 23%, 24%)' }}
        >
            <div className="flex">
                <div className="relative size-[100px]">
                    <Image
                        src={imgPath}
                        alt="dev lens"
                        className="object-contain object-top"
                        fill
                    />
                </div>
                <div className="pl-4">
                    <h1 className="text-xl font-medium mb-1">{extensionData.name}</h1>
                    <p className="text-[hsl(0,_0%,_78%)]">{extensionData.description}</p>
                </div>
            </div>
            <div className="flex justify-between">
                <button
                    onClick={() => 
                        updateExtensionState(
                            prev => prev.filter(extension => extension.name !== extensionData.name)
                        )
                    }
                >
                    <div
                    className="cursor-pointer rounded-3xl px-4 py-2 border border-[hsl(226,_11%,_37%)]"
                    style={{ backgroundColor: 'hsl(226, 25%, 17%)' }}
                    >
                        <span>Remove</span>
                    </div>
                </button>
                <ToggleActiveButton
                    isActive={extensionData.isActive}
                    extensionNameRef={extensionData.name}
                    updateExtensionState={updateExtensionState}
                />
            </div>
        </div>
    );
}

export default ExtensionItem;
