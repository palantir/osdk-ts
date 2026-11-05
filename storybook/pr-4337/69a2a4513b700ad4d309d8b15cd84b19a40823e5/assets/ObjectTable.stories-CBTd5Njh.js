import{j as i}from"./iframe-CBNXxCfo.js";import{O as p}from"./object-table-1ghrAGJF.js";import{E as c}from"./Employee-BAk2o20h.js";import{d as l,o as u,T as d,a as y}from"./objectTableStoryHelpers-Bzav8hkQ.js";import"./preload-helper-hNq2x0aF.js";import"./Table-6i4ZZb3W.js";import"./index-tOjn3DuJ.js";import"./Dialog-BL1jlSUr.js";import"./cross-ByQeE0-e.js";import"./svgIconContainer-Aeg62PdB.js";import"./useBaseUiId-DYvTCLZM.js";import"./InternalBackdrop-BuFEQUHh.js";import"./composite-DK294pzn.js";import"./index-CWKiu_fE.js";import"./index-FTKj7eco.js";import"./index-Bt0LUvaM.js";import"./useEventCallback-DpIm7-am.js";import"./SkeletonBar-BRD_fo5h.js";import"./LoadingCell-BaNdw7xG.js";import"./ColumnConfigDialog-ZH6iVasg.js";import"./DraggableList-eM-ab83r.js";import"./search-DDNU23bi.js";import"./Input-B4HJdzdZ.js";import"./useControlled-C7MVIRPF.js";import"./Button-DGZpthjp.js";import"./small-cross-CKdL694I.js";import"./ActionButton-6ZtJVgb1.js";import"./Checkbox-AlqZzEFb.js";import"./useValueChanged-6a_WmB-v.js";import"./CollapsiblePanel-CNnQ_Tqx.js";import"./MultiColumnSortDialog-XP2QzbrU.js";import"./MenuTrigger-D0T3Cl6J.js";import"./CompositeItem-CMo1LSw0.js";import"./ToolbarRootContext-BkEzRPqI.js";import"./getDisabledMountTransitionStyles-DSnPBVQi.js";import"./getPseudoElementBounds-DWf_NHYE.js";import"./chevron-down-CDGLawXt.js";import"./index-D9bbJoJ6.js";import"./error-DX2juQ7l.js";import"./BaseCbacBanner-CaUxymz7.js";import"./makeExternalStore-Bv9y4KPm.js";import"./Tooltip-DtvJQRxc.js";import"./PopoverPopup-uHJwtGzf.js";import"./debounce-D69uVilQ.js";import"./useOsdkClient-B1CDiX_g.js";import"./tick-Bz4lVOau.js";import"./DropdownField-ANoM4Blt.js";import"./isEqual-C5wCnjIr.js";import"./withOsdkMetrics-DJhX3-qL.js";const{expect:e,screen:t,userEvent:T,within:f}=__STORYBOOK_MODULE_TEST__,ue={...u,title:"Components/ObjectTable"},n={args:{objectType:c,columnDefinitions:l},parameters:{docs:{description:{story:"Minimal setup showing Employee data with default column definitions."},source:{code:"<ObjectTable objectType={Employee} />"}}},render:o=>i.jsx("div",{className:"object-table-container",style:{height:"600px"},children:i.jsx(p,{...o})}),play:async({canvasElement:o})=>{const a=f(o);await a.findByText(d),await y(a,"fullName"),await e(await t.findByRole("menuitem",{name:"Sort ascending"})).toBeInTheDocument(),await e(t.getByRole("menuitem",{name:"Sort descending"})).toBeInTheDocument(),await e(t.getByRole("menuitem",{name:"Pin column"})).toBeInTheDocument(),await e(t.getByRole("menuitem",{name:"Configure Columns"})).toBeInTheDocument(),await T.keyboard("{Escape}")}};var m,r,s;n.parameters={...n.parameters,docs:{...(m=n.parameters)==null?void 0:m.docs,source:{originalSource:`{
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
