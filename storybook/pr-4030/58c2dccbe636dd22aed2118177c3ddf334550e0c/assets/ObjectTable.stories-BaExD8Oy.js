import{j as i}from"./iframe-BNZD3xWg.js";import{O as p}from"./object-table-By1u_HCG.js";import{E as c}from"./Employee-BAk2o20h.js";import{d as l,o as u,T as d,a as y}from"./objectTableStoryHelpers-DZwlWmKj.js";import"./preload-helper-C3FmIxER.js";import"./Table-CFbxZwWj.js";import"./index-DOv_cZ9G.js";import"./Dialog-C7w8W7vF.js";import"./cross-CNjRLxpn.js";import"./svgIconContainer-2ty1idXI.js";import"./useBaseUiId-Dm_OUu_u.js";import"./InternalBackdrop-BFsJkA1x.js";import"./composite-BtkXGRWa.js";import"./index-D51f32rH.js";import"./index-CQVklmSU.js";import"./index-BtQYwxEN.js";import"./useEventCallback-Q_QbXmVH.js";import"./SkeletonBar-DmSABcIx.js";import"./LoadingCell-BcgmtL_W.js";import"./ColumnConfigDialog-7tntoSMi.js";import"./DraggableList-CYBBI1WE.js";import"./search-B_H93lCU.js";import"./Input-QTs7hrar.js";import"./useControlled-izS6CBB9.js";import"./Button-S_R7mlWx.js";import"./small-cross-DBXsh9Ix.js";import"./ActionButton-CuJpLSkR.js";import"./Checkbox-C5pTuN3t.js";import"./useValueChanged-BbIQrdRC.js";import"./CollapsiblePanel-D4Aw1Qj0.js";import"./MultiColumnSortDialog-CDU49QFP.js";import"./MenuTrigger-CEw7tiNK.js";import"./CompositeItem-36LgHZ7r.js";import"./ToolbarRootContext-CS1sgrs1.js";import"./getDisabledMountTransitionStyles-DmpA5T4h.js";import"./getPseudoElementBounds-BO8kaTMX.js";import"./chevron-down-CH0o2x3k.js";import"./index-BZ56AvfN.js";import"./error-_5L66YQC.js";import"./BaseCbacBanner-DdEXiZyu.js";import"./makeExternalStore-XG9GYQLa.js";import"./Tooltip-COOoNd0R.js";import"./PopoverPopup-BpDE3RlV.js";import"./debounce-7pf6IyfH.js";import"./useOsdkClient-GLyZrDFl.js";import"./tick-DVVaLwh_.js";import"./DropdownField-BAuDkUJ8.js";import"./isEqual-CryIdvWn.js";import"./withOsdkMetrics-X-R-b_lc.js";const{expect:e,screen:t,userEvent:T,within:f}=__STORYBOOK_MODULE_TEST__,ue={...u,title:"Components/ObjectTable"},n={args:{objectType:c,columnDefinitions:l},parameters:{docs:{description:{story:"Minimal setup showing Employee data with default column definitions."},source:{code:"<ObjectTable objectType={Employee} />"}}},render:o=>i.jsx("div",{className:"object-table-container",style:{height:"600px"},children:i.jsx(p,{...o})}),play:async({canvasElement:o})=>{const a=f(o);await a.findByText(d),await y(a,"fullName"),await e(await t.findByRole("menuitem",{name:"Sort ascending"})).toBeInTheDocument(),await e(t.getByRole("menuitem",{name:"Sort descending"})).toBeInTheDocument(),await e(t.getByRole("menuitem",{name:"Pin column"})).toBeInTheDocument(),await e(t.getByRole("menuitem",{name:"Configure Columns"})).toBeInTheDocument(),await T.keyboard("{Escape}")}};var m,r,s;n.parameters={...n.parameters,docs:{...(m=n.parameters)==null?void 0:m.docs,source:{originalSource:`{
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
