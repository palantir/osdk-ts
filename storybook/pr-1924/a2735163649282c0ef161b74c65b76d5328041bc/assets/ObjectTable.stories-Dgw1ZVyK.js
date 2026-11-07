import{j as i}from"./iframe-DlL407jt.js";import{O as p}from"./object-table-Jb4dJd6e.js";import{E as c}from"./Employee-BAk2o20h.js";import{d as l,o as u,T as d,a as y}from"./objectTableStoryHelpers-CDy_v6j3.js";import"./preload-helper-BJD3fY2z.js";import"./Table-BbpOY9kf.js";import"./index-DZmZFRgP.js";import"./Dialog-D8kM7xr2.js";import"./cross-CzAlhRHv.js";import"./svgIconContainer-C3aprzty.js";import"./useBaseUiId-kFFF_95H.js";import"./InternalBackdrop-1eYHITMY.js";import"./composite-CnW58q4R.js";import"./index-h5_pJtzr.js";import"./index-CTSKtE65.js";import"./index-CD3lFFWF.js";import"./useEventCallback-CP9Yx8kI.js";import"./SkeletonBar-BGe_x6tw.js";import"./LoadingCell-tNR0WluI.js";import"./ColumnConfigDialog-DkL1WAnR.js";import"./DraggableList-30IfpOtK.js";import"./search-CHs1cMQF.js";import"./Input-D4IoTLF7.js";import"./useControlled-BgQSSZgH.js";import"./Button-DMVMokIc.js";import"./small-cross-CVMu3gSR.js";import"./ActionButton-eiflqw4G.js";import"./Checkbox-D8SK4Agj.js";import"./useValueChanged-TEcie-Mz.js";import"./CollapsiblePanel-DQTz5N7k.js";import"./MultiColumnSortDialog-B4-PluNb.js";import"./MenuTrigger-jjfhmBQz.js";import"./CompositeItem-EF9Yfn-T.js";import"./ToolbarRootContext-FpY3GT5-.js";import"./getDisabledMountTransitionStyles-Cs7LUNTv.js";import"./getPseudoElementBounds-CS3-8zt_.js";import"./chevron-down-D5Po3Ct_.js";import"./index-DkvAjmmx.js";import"./error-BAaXixX9.js";import"./BaseCbacBanner-DcoIEnYg.js";import"./makeExternalStore-DASQ1Znf.js";import"./Tooltip-DBCzdDEt.js";import"./isObject-BLEUFFKV.js";import"./debounce-CQmlcroi.js";import"./useOsdkClient-DuswpGgS.js";import"./tick-CyzaHOGg.js";import"./DropdownField-o_FquzSc.js";import"./isEqual-NGl5w6F-.js";import"./_baseIsEqual-DJgdVIs-.js";import"./withOsdkMetrics-C_49vYYy.js";const{expect:e,screen:t,userEvent:T,within:f}=__STORYBOOK_MODULE_TEST__,de={...u,title:"Components/ObjectTable"},n={args:{objectType:c,columnDefinitions:l},parameters:{docs:{description:{story:"Minimal setup showing Employee data with default column definitions."},source:{code:"<ObjectTable objectType={Employee} />"}}},render:o=>i.jsx("div",{className:"object-table-container",style:{height:"600px"},children:i.jsx(p,{...o})}),play:async({canvasElement:o})=>{const a=f(o);await a.findByText(d),await y(a,"fullName"),await e(await t.findByRole("menuitem",{name:"Sort ascending"})).toBeInTheDocument(),await e(t.getByRole("menuitem",{name:"Sort descending"})).toBeInTheDocument(),await e(t.getByRole("menuitem",{name:"Pin column"})).toBeInTheDocument(),await e(t.getByRole("menuitem",{name:"Configure Columns"})).toBeInTheDocument(),await T.keyboard("{Escape}")}};var m,r,s;n.parameters={...n.parameters,docs:{...(m=n.parameters)==null?void 0:m.docs,source:{originalSource:`{
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
}`,...(s=(r=n.parameters)==null?void 0:r.docs)==null?void 0:s.source}}};const ye=["Default"];export{n as Default,ye as __namedExportsOrder,de as default};
