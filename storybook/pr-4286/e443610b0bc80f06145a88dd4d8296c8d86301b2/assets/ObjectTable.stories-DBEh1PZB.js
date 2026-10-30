import{j as i}from"./iframe-CNys6KBx.js";import{O as p}from"./object-table-BfLdoutw.js";import{E as c}from"./Employee-BAk2o20h.js";import{d as l,o as u,T as d,a as y}from"./objectTableStoryHelpers-lxr09wOM.js";import"./preload-helper-DcEogYXL.js";import"./Table-DD93V6XD.js";import"./index-D7tprs46.js";import"./Dialog-C9KVN-g-.js";import"./cross-DDF5avjH.js";import"./svgIconContainer-DGw65FKz.js";import"./useBaseUiId-B9-57ZNF.js";import"./InternalBackdrop-DaYZqJ6W.js";import"./composite-CNZDZ4o2.js";import"./index-BtKHvXe7.js";import"./index-CWFx-0lx.js";import"./index-BgT_i-PY.js";import"./useEventCallback-4Kkat34w.js";import"./SkeletonBar-cVCCqAbl.js";import"./LoadingCell-nXw0Ntj_.js";import"./ColumnConfigDialog-Bds5G4qz.js";import"./DraggableList-D2UzlQr4.js";import"./search-BE8RO1z_.js";import"./Input-DzrtDPnO.js";import"./useControlled-DuXB4b_p.js";import"./Button-DP1rA9dA.js";import"./small-cross-CBtWnDqE.js";import"./ActionButton-B9ImGUQY.js";import"./Checkbox-BT-ZvEA1.js";import"./useValueChanged-BecJvcFH.js";import"./CollapsiblePanel-l0zk2FsM.js";import"./MultiColumnSortDialog-DKfcrJkt.js";import"./MenuTrigger-BsmgvmAp.js";import"./CompositeItem-CIQp4vV-.js";import"./ToolbarRootContext-D9QBq8Lb.js";import"./getDisabledMountTransitionStyles-DksinVNb.js";import"./getPseudoElementBounds-D1zecXmj.js";import"./chevron-down-DpfNuwKR.js";import"./index-zFsg_RaX.js";import"./error-DMVqHs2L.js";import"./BaseCbacBanner-2kf_waYQ.js";import"./makeExternalStore-T7wEnVBI.js";import"./Tooltip-Cf_AS3a1.js";import"./PopoverPopup-Bsmdq_sX.js";import"./debounce-BAsDe-b7.js";import"./useOsdkClient-D6IOk0So.js";import"./tick-CFpktK17.js";import"./DropdownField-axtbgAiC.js";import"./isEqual-DWLMKdRA.js";import"./withOsdkMetrics--pN-uRA4.js";const{expect:e,screen:t,userEvent:T,within:f}=__STORYBOOK_MODULE_TEST__,ue={...u,title:"Components/ObjectTable"},n={args:{objectType:c,columnDefinitions:l},parameters:{docs:{description:{story:"Minimal setup showing Employee data with default column definitions."},source:{code:"<ObjectTable objectType={Employee} />"}}},render:o=>i.jsx("div",{className:"object-table-container",style:{height:"600px"},children:i.jsx(p,{...o})}),play:async({canvasElement:o})=>{const a=f(o);await a.findByText(d),await y(a,"fullName"),await e(await t.findByRole("menuitem",{name:"Sort ascending"})).toBeInTheDocument(),await e(t.getByRole("menuitem",{name:"Sort descending"})).toBeInTheDocument(),await e(t.getByRole("menuitem",{name:"Pin column"})).toBeInTheDocument(),await e(t.getByRole("menuitem",{name:"Configure Columns"})).toBeInTheDocument(),await T.keyboard("{Escape}")}};var m,r,s;n.parameters={...n.parameters,docs:{...(m=n.parameters)==null?void 0:m.docs,source:{originalSource:`{
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
