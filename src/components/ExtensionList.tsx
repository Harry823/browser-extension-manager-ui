'use client';

import ExtensionItem from "@/components/ExtensionItem";
import { SortType } from "@/types/enums/SortType";
import { Extension } from "@/types/extension";
import { useState } from "react";

type ExtensionListProps = {
    extensionData: Extension[]
}

const ExtensionList: React.FC<ExtensionListProps> = ({ extensionData }) => {
    const [sortBy, setSortBy] = useState<SortType>(SortType.All);
    const [extensions, setExtensions] = useState<Extension[]>(extensionData)

    const shouldExtensionShow = (extensionItem: Extension) => {
        const extensionSortStatus = extensionItem.isActive
            ? SortType.Active
            : SortType.Inactive;
        if (sortBy === SortType.All || sortBy === extensionSortStatus) {
            return true;
        } else {
            return false;
        }
    }

    return (
        <div className="mt-7">
            <div className="mb-4 text-center flex flex-wrap justify-center md:justify-between">
                <h1 className="text-3xl font-medium md:float-left">Extensions List</h1>
                <div className="flex my-6 gap-2 justify-center md:float-right">
                    {Object.keys(SortType).map((buttonType, index) =>
                        <button
                            key={index}
                            onClick={() => setSortBy(SortType[buttonType as keyof typeof SortType])}>
                            <div
                            // WIP conditional styling on active sort button
                            className={`inline rounded-3xl px-4 py-2 
                                ${'bg-[hsl(225,_23%,_24%)] border border-[hsl(226,_11%,_37%)]'}`}
                            style={{ backgroundColor: 'hsl(225, 23%, 24%)' }}
                            >
                                <span>{buttonType}</span>
                            </div>
                        </button>
                    )}
                </div>
            </div>
            <div className="grid gap-3 grid-cols-[repeat(auto-fit,_minmax(250px,_1fr))]">
                {extensions
                    .filter(shouldExtensionShow)
                    .map((extension, index) =>
                    <ExtensionItem extensionData={extension} key={index} />
                )}
            </div>
        </div>
    );
}

export default ExtensionList;
