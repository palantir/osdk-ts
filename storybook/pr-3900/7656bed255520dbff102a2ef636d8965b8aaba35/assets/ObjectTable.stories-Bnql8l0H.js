import{j as i}from"./iframe-DNLO30Ww.js";import{O as p}from"./object-table-sgCBFiy6.js";import{E as c}from"./Employee-BAk2o20h.js";import{d as l,o as u,T as d,a as y}from"./objectTableStoryHelpers-BSZWDOTZ.js";import"./preload-helper-DMPS02wq.js";import"./Table-CvdSvmR6.js";import"./index-BXPwi4ll.js";import"./Dialog-BZZOdUSR.js";import"./cross-DyXX2kzu.js";import"./svgIconContainer-BhTCIoRp.js";import"./useBaseUiId-BD76vFJo.js";import"./InternalBackdrop-CgHl6qqD.js";import"./composite-Dh6pm8eM.js";import"./index-ByST95mm.js";import"./index-SmrZ48_U.js";import"./index-D6M7-y6_.js";import"./useEventCallback-CqB29WRK.js";import"./SkeletonBar-Dzoc_fkT.js";import"./LoadingCell-C_ceOiHB.js";import"./ColumnConfigDialog-CjYS5qyG.js";import"./DraggableList-B3aeQJdM.js";import"./search-BPhsSIu0.js";import"./Input-ChfQp7iv.js";import"./useControlled-DrtjR5iX.js";import"./Button-G1G-2Ckd.js";import"./small-cross-BAGSfF0m.js";import"./ActionButton-DPUhH6Lo.js";import"./Checkbox-CZW1Pp-G.js";import"./useValueChanged-DCJA7BE8.js";import"./CollapsiblePanel-BPvxPRY4.js";import"./MultiColumnSortDialog-uD75VtMT.js";import"./MenuTrigger-Cz4PIlaQ.js";import"./CompositeItem-C2jJgszn.js";import"./ToolbarRootContext-CSBtcNyO.js";import"./getDisabledMountTransitionStyles-CaxoHLLt.js";import"./getPseudoElementBounds-C7vUDRr2.js";import"./chevron-down-DkxMLSoH.js";import"./index-DAQea2-r.js";import"./error-DXYf62L2.js";import"./BaseCbacBanner-aHxz9-6a.js";import"./makeExternalStore-DaD-3fW6.js";import"./Tooltip-BOZFqeeI.js";import"./PopoverPopup-Tdg4qabi.js";import"./debounce-spsT2235.js";import"./useOsdkClient-BWnKxiQN.js";import"./tick-BmhstWDK.js";import"./DropdownField-Cqy_ppKQ.js";import"./isEqual-2hh4sGtV.js";import"./withOsdkMetrics-CAvqvWGd.js";const{expect:e,screen:t,userEvent:T,within:f}=__STORYBOOK_MODULE_TEST__,ue={...u,title:"Components/ObjectTable"},n={args:{objectType:c,columnDefinitions:l},parameters:{docs:{description:{story:"Minimal setup showing Employee data with default column definitions."},source:{code:"<ObjectTable objectType={Employee} />"}}},render:o=>i.jsx("div",{className:"object-table-container",style:{height:"600px"},children:i.jsx(p,{...o})}),play:async({canvasElement:o})=>{const a=f(o);await a.findByText(d),await y(a,"fullName"),await e(await t.findByRole("menuitem",{name:"Sort ascending"})).toBeInTheDocument(),await e(t.getByRole("menuitem",{name:"Sort descending"})).toBeInTheDocument(),await e(t.getByRole("menuitem",{name:"Pin column"})).toBeInTheDocument(),await e(t.getByRole("menuitem",{name:"Configure Columns"})).toBeInTheDocument(),await T.keyboard("{Escape}")}};var m,r,s;n.parameters={...n.parameters,docs:{...(m=n.parameters)==null?void 0:m.docs,source:{originalSource:`{
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
