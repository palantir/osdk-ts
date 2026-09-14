import{j as i}from"./iframe-BpUcg2zG.js";import{O as p}from"./object-table-BXzXnMPi.js";import{E as c}from"./Employee-BAk2o20h.js";import{d as l,o as u,T as d,a as y}from"./objectTableStoryHelpers-BnxRUTwZ.js";import"./preload-helper-B2UTcXFP.js";import"./Table-C8Mqu-X6.js";import"./index-7N6MUyxI.js";import"./Dialog-B6nwdW0S.js";import"./cross-Qiz9Cl6T.js";import"./svgIconContainer-g6F9ILDM.js";import"./useBaseUiId-Bv3X91q5.js";import"./InternalBackdrop-DMk-kvEU.js";import"./composite-CFjjm5Bq.js";import"./index-DI63_yx7.js";import"./index-CvEJHu1s.js";import"./index-C3OHRfdp.js";import"./useEventCallback-CpJFT7Nx.js";import"./SkeletonBar-YHGj4uus.js";import"./LoadingCell-0KwxVok-.js";import"./ColumnConfigDialog-DfxH2UYm.js";import"./DraggableList-DhI9Nd92.js";import"./search-BLWHV2Ka.js";import"./Input-DaPfruQG.js";import"./useControlled-DdOa4Phy.js";import"./Button-DFuiuLIT.js";import"./small-cross-Bb_UEV9u.js";import"./ActionButton-daXbDUYm.js";import"./Checkbox-KmgOVCCy.js";import"./useValueChanged-DQZMmpA-.js";import"./CollapsiblePanel-Dn0E0YbQ.js";import"./MultiColumnSortDialog-C-lsqtR_.js";import"./MenuTrigger-DddfjYoS.js";import"./CompositeItem-C2o4b7lZ.js";import"./ToolbarRootContext-J_sWFt16.js";import"./getDisabledMountTransitionStyles-sJoPqg4c.js";import"./getPseudoElementBounds-BdWd26b0.js";import"./chevron-down-C_xyEVbG.js";import"./index-jSPKquLn.js";import"./error-DVz4lqLc.js";import"./BaseCbacBanner-Dgd3clMy.js";import"./makeExternalStore-Cwp1LGPC.js";import"./Tooltip-kYiBGujl.js";import"./PopoverPopup-CyIGwRoM.js";import"./debounce-CXzI_OHH.js";import"./useOsdkClient-Dnj4xecm.js";import"./tick-B3uICQ16.js";import"./DropdownField-Br3l3qOB.js";import"./isEqual-BE6QLmil.js";import"./withOsdkMetrics-D52jnuF5.js";const{expect:e,screen:t,userEvent:T,within:f}=__STORYBOOK_MODULE_TEST__,ue={...u,title:"Components/ObjectTable"},n={args:{objectType:c,columnDefinitions:l},parameters:{docs:{description:{story:"Minimal setup showing Employee data with default column definitions."},source:{code:"<ObjectTable objectType={Employee} />"}}},render:o=>i.jsx("div",{className:"object-table-container",style:{height:"600px"},children:i.jsx(p,{...o})}),play:async({canvasElement:o})=>{const a=f(o);await a.findByText(d),await y(a,"fullName"),await e(await t.findByRole("menuitem",{name:"Sort ascending"})).toBeInTheDocument(),await e(t.getByRole("menuitem",{name:"Sort descending"})).toBeInTheDocument(),await e(t.getByRole("menuitem",{name:"Pin column"})).toBeInTheDocument(),await e(t.getByRole("menuitem",{name:"Configure Columns"})).toBeInTheDocument(),await T.keyboard("{Escape}")}};var m,r,s;n.parameters={...n.parameters,docs:{...(m=n.parameters)==null?void 0:m.docs,source:{originalSource:`{
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
