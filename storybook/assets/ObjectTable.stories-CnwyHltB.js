import{j as i}from"./iframe-ZKDPnRYv.js";import{O as p}from"./object-table-CnDM1U0V.js";import{E as c}from"./Employee-BAk2o20h.js";import{d as l,o as u,T as d,a as y}from"./objectTableStoryHelpers-ZVAW8PKI.js";import"./preload-helper-Dp1pzeXC.js";import"./Table-3jPWWjAw.js";import"./index-DNWYE-f1.js";import"./Dialog-BghOWFAy.js";import"./cross-f6oJQcWu.js";import"./svgIconContainer-DrDKA2Lc.js";import"./useBaseUiId-Ce1gy8Rx.js";import"./InternalBackdrop-Bk7MtY68.js";import"./composite-BmiDYLqb.js";import"./index-CBLMz6-B.js";import"./index-Cb1Rmdlc.js";import"./index-BBP5lmMx.js";import"./useEventCallback-Caii2npr.js";import"./SkeletonBar-Df3vB-p_.js";import"./LoadingCell-BGMW0NlQ.js";import"./ColumnConfigDialog-BKZ3sAGQ.js";import"./DraggableList-BGJGtglx.js";import"./search-BicHh123.js";import"./Input-BVhJywkb.js";import"./useControlled-F5SgWL0g.js";import"./Button-BJSgrwjd.js";import"./small-cross-CLB6s8ng.js";import"./ActionButton-ClL1Aria.js";import"./Checkbox-D5ir3gbv.js";import"./useValueChanged-BSi0Bf_-.js";import"./CollapsiblePanel-G2MoBTxk.js";import"./MultiColumnSortDialog-C-4tvmha.js";import"./MenuTrigger-BIsb4_2t.js";import"./CompositeItem-C1cGzStq.js";import"./ToolbarRootContext-4_ztJASm.js";import"./getDisabledMountTransitionStyles-Bt3-436K.js";import"./getPseudoElementBounds-Bhyrjl8_.js";import"./chevron-down-DWL-RGCQ.js";import"./index-CW4IzwL-.js";import"./error-FVA4fmQK.js";import"./BaseCbacBanner-DnsdBiWC.js";import"./makeExternalStore-CRRSMSB3.js";import"./Tooltip-C6ZYQEwS.js";import"./PopoverPopup-B0pYxYci.js";import"./debounce-C4lP9Ak6.js";import"./useOsdkClient-B1FD65_T.js";import"./tick-CJIFmP2c.js";import"./DropdownField-8SVn-ItU.js";import"./isEqual-CzNo4Xxw.js";import"./withOsdkMetrics-tBsYI7eh.js";const{expect:e,screen:t,userEvent:T,within:f}=__STORYBOOK_MODULE_TEST__,ue={...u,title:"Components/ObjectTable"},n={args:{objectType:c,columnDefinitions:l},parameters:{docs:{description:{story:"Minimal setup showing Employee data with default column definitions."},source:{code:"<ObjectTable objectType={Employee} />"}}},render:o=>i.jsx("div",{className:"object-table-container",style:{height:"600px"},children:i.jsx(p,{...o})}),play:async({canvasElement:o})=>{const a=f(o);await a.findByText(d),await y(a,"fullName"),await e(await t.findByRole("menuitem",{name:"Sort ascending"})).toBeInTheDocument(),await e(t.getByRole("menuitem",{name:"Sort descending"})).toBeInTheDocument(),await e(t.getByRole("menuitem",{name:"Pin column"})).toBeInTheDocument(),await e(t.getByRole("menuitem",{name:"Configure Columns"})).toBeInTheDocument(),await T.keyboard("{Escape}")}};var m,r,s;n.parameters={...n.parameters,docs:{...(m=n.parameters)==null?void 0:m.docs,source:{originalSource:`{
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
