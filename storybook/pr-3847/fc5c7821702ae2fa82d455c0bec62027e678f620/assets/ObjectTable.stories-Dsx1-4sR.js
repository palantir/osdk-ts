import{j as i}from"./iframe-Bfu51uKD.js";import{O as p}from"./object-table-ZisTagRp.js";import{E as c}from"./Employee-BAk2o20h.js";import{d as l,o as u,T as d,a as y}from"./objectTableStoryHelpers-CEbyg_qs.js";import"./preload-helper-CzYQogJ9.js";import"./Table-DsoGa2FL.js";import"./index-DQHJlggZ.js";import"./Dialog-BmpyHtLd.js";import"./cross-Cj0zRN-P.js";import"./svgIconContainer-BznedMGF.js";import"./useBaseUiId-BMFIksfI.js";import"./InternalBackdrop-vxJhONV7.js";import"./composite-cjjayGq4.js";import"./index-C7HMsQca.js";import"./index-bKbCmQEs.js";import"./index-DeDNMLrn.js";import"./useEventCallback-Ci69gKLi.js";import"./SkeletonBar-D3W8qW_m.js";import"./LoadingCell-DzIW3PIc.js";import"./ColumnConfigDialog-B6bW1hs_.js";import"./DraggableList-B18qaVoP.js";import"./search-DiqUH8-G.js";import"./Input-BARZRbjA.js";import"./useControlled-DiKj9TwT.js";import"./isEqual-zZQp1Tf_.js";import"./isObject-Dl748mdT.js";import"./Button-BczMqlK6.js";import"./ActionButton-DdI7_jIN.js";import"./Checkbox-D5o9wSO_.js";import"./useValueChanged-D3dCBJ9W.js";import"./CollapsiblePanel-wUtJF-2b.js";import"./MultiColumnSortDialog--0c-JbQA.js";import"./MenuTrigger-ISZjXtIA.js";import"./CompositeItem-DJ-aCdOv.js";import"./ToolbarRootContext-fCSUIj3k.js";import"./getDisabledMountTransitionStyles-DaieVKBp.js";import"./getPseudoElementBounds-DA_wzyEX.js";import"./chevron-down-zP9dxkSq.js";import"./index-yGcDT_JP.js";import"./error-DGXpdtF_.js";import"./BaseCbacBanner-f0-HF5WI.js";import"./makeExternalStore-CT8wDfgr.js";import"./Tooltip-CGMIo-xb.js";import"./PopoverPopup-D_2s96me.js";import"./toNumber-Bs_rfsY9.js";import"./useOsdkClient-Dw12XehB.js";import"./tick-WDJS8_jm.js";import"./DropdownField-Bd1ER7PN.js";import"./withOsdkMetrics-DUx07Whe.js";const{expect:e,screen:t,userEvent:T,within:f}=__STORYBOOK_MODULE_TEST__,ue={...u,title:"Components/ObjectTable"},n={args:{objectType:c,columnDefinitions:l},parameters:{docs:{description:{story:"Minimal setup showing Employee data with default column definitions."},source:{code:"<ObjectTable objectType={Employee} />"}}},render:o=>i.jsx("div",{className:"object-table-container",style:{height:"600px"},children:i.jsx(p,{...o})}),play:async({canvasElement:o})=>{const a=f(o);await a.findByText(d),await y(a,"fullName"),await e(await t.findByRole("menuitem",{name:"Sort ascending"})).toBeInTheDocument(),await e(t.getByRole("menuitem",{name:"Sort descending"})).toBeInTheDocument(),await e(t.getByRole("menuitem",{name:"Pin column"})).toBeInTheDocument(),await e(t.getByRole("menuitem",{name:"Configure Columns"})).toBeInTheDocument(),await T.keyboard("{Escape}")}};var m,r,s;n.parameters={...n.parameters,docs:{...(m=n.parameters)==null?void 0:m.docs,source:{originalSource:`{
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
