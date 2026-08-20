import{j as i}from"./iframe-9DMBWr0q.js";import{O as p}from"./object-table-BibkEGbR.js";import{E as c}from"./Employee-BAk2o20h.js";import{d as l,o as u,T as d,a as y}from"./objectTableStoryHelpers-BeqdNiYo.js";import"./preload-helper-DalOHg7w.js";import"./Table-DHLmMlG-.js";import"./index-DQvdaF-W.js";import"./Dialog-Df8qvF-7.js";import"./cross-D2pRmhty.js";import"./svgIconContainer-54MNCtA9.js";import"./useBaseUiId-DsOnJdgo.js";import"./InternalBackdrop-CcIKsClD.js";import"./composite-pdHJBClF.js";import"./index-BmdeRFNN.js";import"./index-DHI41pZJ.js";import"./index-BC9PcR15.js";import"./useEventCallback-W8V2Dont.js";import"./SkeletonBar-B4ODr-AM.js";import"./LoadingCell-ndyblGvj.js";import"./ColumnConfigDialog-BSRPEeCB.js";import"./DraggableList-C2B-3KQT.js";import"./search-D5Zr1HOy.js";import"./Input-EUcX8Uzk.js";import"./useControlled-DytgQJGV.js";import"./Button-DUgj0L3T.js";import"./small-cross-a45cq7g8.js";import"./ActionButton-M4Hg-S07.js";import"./Checkbox-e6pqPY5D.js";import"./useValueChanged-CFHCDrlE.js";import"./CollapsiblePanel-C6jiw36r.js";import"./MultiColumnSortDialog-DA-66R8L.js";import"./MenuTrigger-DWvoMzGe.js";import"./CompositeItem-2UjtZXP3.js";import"./ToolbarRootContext-BPjGDrK2.js";import"./getDisabledMountTransitionStyles-D7rPIBuN.js";import"./getPseudoElementBounds-DhNL39RB.js";import"./chevron-down-CUeEPhCI.js";import"./index-BiO4atOF.js";import"./error-B9BZNthJ.js";import"./BaseCbacBanner-C0rOz-y3.js";import"./makeExternalStore-BHkeYhGJ.js";import"./Tooltip-CsXOXWqo.js";import"./PopoverPopup-yQY21wsF.js";import"./debounce-BXBIjcle.js";import"./useOsdkClient-D6FhjSll.js";import"./tick-zvtGaScm.js";import"./DropdownField-BWnA-PDI.js";import"./isEqual-BJFmr-bs.js";import"./withOsdkMetrics-BsCiBcgq.js";const{expect:e,screen:t,userEvent:T,within:f}=__STORYBOOK_MODULE_TEST__,ue={...u,title:"Components/ObjectTable"},n={args:{objectType:c,columnDefinitions:l},parameters:{docs:{description:{story:"Minimal setup showing Employee data with default column definitions."},source:{code:"<ObjectTable objectType={Employee} />"}}},render:o=>i.jsx("div",{className:"object-table-container",style:{height:"600px"},children:i.jsx(p,{...o})}),play:async({canvasElement:o})=>{const a=f(o);await a.findByText(d),await y(a,"fullName"),await e(await t.findByRole("menuitem",{name:"Sort ascending"})).toBeInTheDocument(),await e(t.getByRole("menuitem",{name:"Sort descending"})).toBeInTheDocument(),await e(t.getByRole("menuitem",{name:"Pin column"})).toBeInTheDocument(),await e(t.getByRole("menuitem",{name:"Configure Columns"})).toBeInTheDocument(),await T.keyboard("{Escape}")}};var m,r,s;n.parameters={...n.parameters,docs:{...(m=n.parameters)==null?void 0:m.docs,source:{originalSource:`{
  args: {
    objectType: Employee,
    columnDefinitions: defaultEmployeeColumns
  },
  parameters: {
    docs: {
      description: {
        story: "Minimal setup showing Employee data with default column definitions."
      },
      source: {
        code: \`<ObjectTable objectType={Employee} />\`
      }
    }
  },
  render: args => <div className="object-table-container" style={{
    height: "600px"
  }}>
      <ObjectTable {...args} />
    </div>,
  // Loads data, then opens a column header menu to confirm the default,
  // out-of-the-box header features are all present.
  play: async ({
    canvasElement
  }) => {
    const canvas = within(canvasElement);

    // Wait for the (MSW-mocked) rows to load.
    await canvas.findByText(TARGET_DATA);
    await openHeaderMenu(canvas, "fullName");
    await expect(await screen.findByRole("menuitem", {
      name: "Sort ascending"
    })).toBeInTheDocument();
    await expect(screen.getByRole("menuitem", {
      name: "Sort descending"
    })).toBeInTheDocument();
    await expect(screen.getByRole("menuitem", {
      name: "Pin column"
    })).toBeInTheDocument();
    await expect(screen.getByRole("menuitem", {
      name: "Configure Columns"
    })).toBeInTheDocument();

    // Dismiss the menu so the story is left in a clean state.
    await userEvent.keyboard("{Escape}");
  }
}`,...(s=(r=n.parameters)==null?void 0:r.docs)==null?void 0:s.source}}};const de=["Default"];export{n as Default,de as __namedExportsOrder,ue as default};
