import{j as i}from"./iframe-Bd5ScLvv.js";import{O as p}from"./object-table-CTmpFEIb.js";import{E as c}from"./Employee-BAk2o20h.js";import{d as l,o as u,T as d,a as y}from"./objectTableStoryHelpers-CwW1AWYz.js";import"./preload-helper-Cto50-3e.js";import"./Table-DEMSgtG8.js";import"./index-BInNCm2S.js";import"./Dialog-BQw-qeYh.js";import"./cross-DFIYwfW7.js";import"./svgIconContainer-CyD9Prgp.js";import"./useBaseUiId-BEsXvvg0.js";import"./InternalBackdrop-8MqvziLZ.js";import"./composite-Dw0b0MIh.js";import"./index-CcgPg9jD.js";import"./index-BTf-4xqO.js";import"./index-2Jb0O7pv.js";import"./useEventCallback-D1VXc7Cg.js";import"./SkeletonBar-DJbcp5BQ.js";import"./LoadingCell-BkYKbRTJ.js";import"./ColumnConfigDialog-DY29Hfrp.js";import"./DraggableList-BUMRMzJO.js";import"./search-DCnhWsbb.js";import"./Input-Dv_3n2Er.js";import"./useControlled-BVqmud31.js";import"./Button-DPVWeAkU.js";import"./small-cross-Dn9mOG55.js";import"./ActionButton-dOB8dnwG.js";import"./Checkbox-CH0uC28l.js";import"./useValueChanged-DA681W-u.js";import"./CollapsiblePanel-CU10Nd-t.js";import"./MultiColumnSortDialog-Bpx-v-03.js";import"./MenuTrigger-BUyayvZQ.js";import"./CompositeItem-xycX-JTq.js";import"./ToolbarRootContext-DGXau_lp.js";import"./getDisabledMountTransitionStyles-3dwnvMdU.js";import"./getPseudoElementBounds-BL_bMsjQ.js";import"./chevron-down-nJ2TmJoq.js";import"./index-ByGszF0R.js";import"./error-Dm9-R7dH.js";import"./BaseCbacBanner-CxlUlsKc.js";import"./makeExternalStore-8KpmsT2I.js";import"./Tooltip-BmX3jL6b.js";import"./PopoverPopup-BKdaJUCJ.js";import"./debounce-CtExuu3_.js";import"./useOsdkClient-Bh2_dokv.js";import"./tick-CxwVcA9i.js";import"./DropdownField-BbncKGJX.js";import"./isEqual-BRKHmyem.js";import"./withOsdkMetrics-CO8xV1gc.js";const{expect:e,screen:t,userEvent:T,within:f}=__STORYBOOK_MODULE_TEST__,ue={...u,title:"Components/ObjectTable"},n={args:{objectType:c,columnDefinitions:l},parameters:{docs:{description:{story:"Minimal setup showing Employee data with default column definitions."},source:{code:"<ObjectTable objectType={Employee} />"}}},render:o=>i.jsx("div",{className:"object-table-container",style:{height:"600px"},children:i.jsx(p,{...o})}),play:async({canvasElement:o})=>{const a=f(o);await a.findByText(d),await y(a,"fullName"),await e(await t.findByRole("menuitem",{name:"Sort ascending"})).toBeInTheDocument(),await e(t.getByRole("menuitem",{name:"Sort descending"})).toBeInTheDocument(),await e(t.getByRole("menuitem",{name:"Pin column"})).toBeInTheDocument(),await e(t.getByRole("menuitem",{name:"Configure Columns"})).toBeInTheDocument(),await T.keyboard("{Escape}")}};var m,r,s;n.parameters={...n.parameters,docs:{...(m=n.parameters)==null?void 0:m.docs,source:{originalSource:`{
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
