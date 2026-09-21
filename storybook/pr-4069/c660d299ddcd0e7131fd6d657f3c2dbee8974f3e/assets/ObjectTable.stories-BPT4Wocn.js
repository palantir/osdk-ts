import{j as i}from"./iframe-Cfzzxn_n.js";import{O as p}from"./object-table-pEqPj5J4.js";import{E as c}from"./Employee-BAk2o20h.js";import{d as l,o as u,T as d,a as y}from"./objectTableStoryHelpers-CtxMBSbg.js";import"./preload-helper-Dg7pGUOS.js";import"./Table-D5T8uZzE.js";import"./index-CMN6-XKQ.js";import"./Dialog-DDMFP6hk.js";import"./cross-DQq_Xwh6.js";import"./svgIconContainer-BI8ujPzn.js";import"./useBaseUiId-jVad5k1_.js";import"./InternalBackdrop-DAR7W5Wj.js";import"./composite-CLlDBj0Z.js";import"./index-CBbyaHPU.js";import"./index-CPjSGEwp.js";import"./index-Cg0AkbTX.js";import"./useEventCallback-B7JsYCH4.js";import"./SkeletonBar-jkEtksym.js";import"./LoadingCell-B3AsKuLF.js";import"./ColumnConfigDialog-C9DfDGwe.js";import"./DraggableList-Dztt1KCX.js";import"./search-Dkia1gOi.js";import"./Input-CnQ0L5k0.js";import"./useControlled-CNmeQlt3.js";import"./Button-BI-1kn4u.js";import"./small-cross-DyTVyiiv.js";import"./ActionButton-AnBXq9dB.js";import"./Checkbox-CeKAFdf6.js";import"./useValueChanged-BMGXXoQd.js";import"./CollapsiblePanel-Cu4Eaeg8.js";import"./MultiColumnSortDialog-AlYAe39k.js";import"./MenuTrigger-CH7Ey5R9.js";import"./CompositeItem-CcHRWvUR.js";import"./ToolbarRootContext-D5srvXY8.js";import"./getDisabledMountTransitionStyles-Hk1XRehz.js";import"./getPseudoElementBounds-DUI2YNlh.js";import"./chevron-down-DEBizV0j.js";import"./index-BNc2t-yb.js";import"./error-Bx2UJ-jk.js";import"./BaseCbacBanner-BkPHcLSS.js";import"./makeExternalStore-D0DZxHLg.js";import"./Tooltip-D6tPQUhI.js";import"./PopoverPopup-DebGjI7p.js";import"./debounce-Do79F5Rt.js";import"./useOsdkClient-Ba_ITXqU.js";import"./tick-CRy55xU8.js";import"./DropdownField-DtNKMGKP.js";import"./isEqual-ZHneCzaK.js";import"./withOsdkMetrics-B7pLyp-k.js";const{expect:e,screen:t,userEvent:T,within:f}=__STORYBOOK_MODULE_TEST__,ue={...u,title:"Components/ObjectTable"},n={args:{objectType:c,columnDefinitions:l},parameters:{docs:{description:{story:"Minimal setup showing Employee data with default column definitions."},source:{code:"<ObjectTable objectType={Employee} />"}}},render:o=>i.jsx("div",{className:"object-table-container",style:{height:"600px"},children:i.jsx(p,{...o})}),play:async({canvasElement:o})=>{const a=f(o);await a.findByText(d),await y(a,"fullName"),await e(await t.findByRole("menuitem",{name:"Sort ascending"})).toBeInTheDocument(),await e(t.getByRole("menuitem",{name:"Sort descending"})).toBeInTheDocument(),await e(t.getByRole("menuitem",{name:"Pin column"})).toBeInTheDocument(),await e(t.getByRole("menuitem",{name:"Configure Columns"})).toBeInTheDocument(),await T.keyboard("{Escape}")}};var m,r,s;n.parameters={...n.parameters,docs:{...(m=n.parameters)==null?void 0:m.docs,source:{originalSource:`{
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
