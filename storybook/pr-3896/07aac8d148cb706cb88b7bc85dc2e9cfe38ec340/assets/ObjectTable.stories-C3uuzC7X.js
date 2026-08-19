import{j as i}from"./iframe-CgO27IRu.js";import{O as p}from"./object-table-DXNAiDf6.js";import{E as c}from"./Employee-BAk2o20h.js";import{d as l,o as u,T as d,a as y}from"./objectTableStoryHelpers-CXHHHqsg.js";import"./preload-helper-BFaeybdJ.js";import"./Table-BIALEz5r.js";import"./index-BYcjpIix.js";import"./Dialog-CkwYR2xh.js";import"./cross-7f4N_TUE.js";import"./svgIconContainer-DhCCLzjj.js";import"./useBaseUiId-BO2BnfXi.js";import"./InternalBackdrop-Cz0WVhEG.js";import"./composite-p801Jdqa.js";import"./index-D2mMtCtu.js";import"./index-BUqQhE-Z.js";import"./index-mNj5KG8f.js";import"./useEventCallback-DFjx1zjN.js";import"./SkeletonBar-BX4lka8z.js";import"./LoadingCell-D3D5c3XV.js";import"./ColumnConfigDialog-1UCfeJwM.js";import"./DraggableList-WrqVXuVf.js";import"./search-BsJeG7XA.js";import"./Input-Dj3Aq0gE.js";import"./useControlled-DQw2ttEs.js";import"./Button-IqR8HyTq.js";import"./small-cross-CPs8amt9.js";import"./ActionButton-DOTNR6TX.js";import"./Checkbox-BbzMjnfd.js";import"./useValueChanged-BE8D05Iz.js";import"./CollapsiblePanel-PEWKdp4D.js";import"./MultiColumnSortDialog-CjR7xFOj.js";import"./MenuTrigger-SbjN_ntN.js";import"./CompositeItem-DM5Ux4XM.js";import"./ToolbarRootContext-Dk5396e8.js";import"./getDisabledMountTransitionStyles-DXJXIwd_.js";import"./getPseudoElementBounds-DowlDy4M.js";import"./chevron-down-BHGyaEjN.js";import"./index-D4Z8a6hC.js";import"./error-CvjVBbuk.js";import"./BaseCbacBanner-BAMy2tjK.js";import"./makeExternalStore-BWlpa4eR.js";import"./Tooltip-BUDoMBLR.js";import"./PopoverPopup-DwKTUNJI.js";import"./debounce-CKeaQRTn.js";import"./useOsdkClient-B_-tZKM9.js";import"./tick-BaoeG2cB.js";import"./DropdownField-Doi6icK-.js";import"./isEqual-BZS2mAgW.js";import"./withOsdkMetrics-DT_01Uro.js";const{expect:e,screen:t,userEvent:T,within:f}=__STORYBOOK_MODULE_TEST__,ue={...u,title:"Components/ObjectTable"},n={args:{objectType:c,columnDefinitions:l},parameters:{docs:{description:{story:"Minimal setup showing Employee data with default column definitions."},source:{code:"<ObjectTable objectType={Employee} />"}}},render:o=>i.jsx("div",{className:"object-table-container",style:{height:"600px"},children:i.jsx(p,{...o})}),play:async({canvasElement:o})=>{const a=f(o);await a.findByText(d),await y(a,"fullName"),await e(await t.findByRole("menuitem",{name:"Sort ascending"})).toBeInTheDocument(),await e(t.getByRole("menuitem",{name:"Sort descending"})).toBeInTheDocument(),await e(t.getByRole("menuitem",{name:"Pin column"})).toBeInTheDocument(),await e(t.getByRole("menuitem",{name:"Configure Columns"})).toBeInTheDocument(),await T.keyboard("{Escape}")}};var m,r,s;n.parameters={...n.parameters,docs:{...(m=n.parameters)==null?void 0:m.docs,source:{originalSource:`{
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
