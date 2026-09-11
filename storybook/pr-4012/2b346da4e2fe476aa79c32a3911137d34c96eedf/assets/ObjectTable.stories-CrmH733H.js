import{j as i}from"./iframe-o2qKykKB.js";import{O as p}from"./object-table-sMhn0qpj.js";import{E as c}from"./Employee-BAk2o20h.js";import{d as l,o as u,T as d,a as y}from"./objectTableStoryHelpers-ByBWOUVe.js";import"./preload-helper-C27-ZLGM.js";import"./Table-uySpa02t.js";import"./index-BGljrmTZ.js";import"./Dialog-DUL6qeS3.js";import"./cross-BTB24VP7.js";import"./svgIconContainer-BhaYgLqs.js";import"./useBaseUiId-OPidnSdm.js";import"./InternalBackdrop-DR4zGZzK.js";import"./composite-BLm43g8N.js";import"./index-DNh70Okq.js";import"./index-CvhnTB6X.js";import"./index-BVMYD8Oa.js";import"./useEventCallback-hJBDMJsx.js";import"./SkeletonBar-DhdbyDRI.js";import"./LoadingCell-Cy4uZsC0.js";import"./ColumnConfigDialog-Bz_3ncfr.js";import"./DraggableList-CbirbCIw.js";import"./search-C1CYCLwX.js";import"./Input-3CD54kGq.js";import"./useControlled-j9Xx4bgV.js";import"./Button-DlN0yFDg.js";import"./small-cross-C2cMuOH_.js";import"./ActionButton-CeNVvCTB.js";import"./Checkbox-jOrUjYBn.js";import"./useValueChanged-Cie3N3Mi.js";import"./CollapsiblePanel-CkovkzYb.js";import"./MultiColumnSortDialog-BUyBDOja.js";import"./MenuTrigger--MJrp4d4.js";import"./CompositeItem-Kr2j0ah9.js";import"./ToolbarRootContext-CkkOTkz9.js";import"./getDisabledMountTransitionStyles-Cs2uu7jZ.js";import"./getPseudoElementBounds-DS-R98qk.js";import"./chevron-down-QYJ-TtLl.js";import"./index-D5B8A__1.js";import"./error-UQwhkZq_.js";import"./BaseCbacBanner-BPWRf3LX.js";import"./makeExternalStore-DBMN3aEP.js";import"./Tooltip-DxXhJeja.js";import"./PopoverPopup-Pczz4-8n.js";import"./debounce-CTJxY2Tj.js";import"./useOsdkClient-B8dETVs7.js";import"./tick-BMQAi16Z.js";import"./DropdownField-BbGjuJzG.js";import"./isEqual-DFmsCwVE.js";import"./withOsdkMetrics-ByPWr5gV.js";const{expect:e,screen:t,userEvent:T,within:f}=__STORYBOOK_MODULE_TEST__,ue={...u,title:"Components/ObjectTable"},n={args:{objectType:c,columnDefinitions:l},parameters:{docs:{description:{story:"Minimal setup showing Employee data with default column definitions."},source:{code:"<ObjectTable objectType={Employee} />"}}},render:o=>i.jsx("div",{className:"object-table-container",style:{height:"600px"},children:i.jsx(p,{...o})}),play:async({canvasElement:o})=>{const a=f(o);await a.findByText(d),await y(a,"fullName"),await e(await t.findByRole("menuitem",{name:"Sort ascending"})).toBeInTheDocument(),await e(t.getByRole("menuitem",{name:"Sort descending"})).toBeInTheDocument(),await e(t.getByRole("menuitem",{name:"Pin column"})).toBeInTheDocument(),await e(t.getByRole("menuitem",{name:"Configure Columns"})).toBeInTheDocument(),await T.keyboard("{Escape}")}};var m,r,s;n.parameters={...n.parameters,docs:{...(m=n.parameters)==null?void 0:m.docs,source:{originalSource:`{
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
