import{j as i}from"./iframe-C26fIjAq.js";import{O as p}from"./object-table-CrghsGcJ.js";import{E as c}from"./Employee-BAk2o20h.js";import{d as l,o as u,T as d,a as y}from"./objectTableStoryHelpers-CK-QhynY.js";import"./preload-helper-CzokokTz.js";import"./Table-CL1bC3L9.js";import"./index-DSezQFnS.js";import"./Dialog-KIOCO7Ba.js";import"./cross-DwdPD-y-.js";import"./svgIconContainer-CKLh70Ds.js";import"./useBaseUiId-CZznSoWJ.js";import"./InternalBackdrop-33GFEnuK.js";import"./composite-B7Vf-7yN.js";import"./index-DKSyNOS5.js";import"./index-CvCOxJEM.js";import"./index-Cwq9J0os.js";import"./useEventCallback-DUQbs5oX.js";import"./SkeletonBar-DViOz3Wh.js";import"./LoadingCell-DcEh937u.js";import"./ColumnConfigDialog-DSla1ybE.js";import"./DraggableList-Bt-5589a.js";import"./search-CILTwpty.js";import"./Input-CWfYIH6c.js";import"./useControlled-C5NYvmTr.js";import"./Button-DUEO4ppB.js";import"./small-cross-CQktJtCa.js";import"./ActionButton-5TW8yVIZ.js";import"./Checkbox-SrFRulVK.js";import"./useValueChanged-BXDVDv9P.js";import"./CollapsiblePanel-bkJ3PYEK.js";import"./MultiColumnSortDialog-B4-hIcRf.js";import"./MenuTrigger-Dt9RoogJ.js";import"./CompositeItem-Upla8dz7.js";import"./ToolbarRootContext-BQbj6f0-.js";import"./getDisabledMountTransitionStyles-BbWUI2dB.js";import"./getPseudoElementBounds-DynJ88Gh.js";import"./chevron-down-jqoCvdNC.js";import"./index-BF0VER8K.js";import"./error-W1WiOcUb.js";import"./BaseCbacBanner-D62B0Zzd.js";import"./makeExternalStore-BbYA9c-K.js";import"./Tooltip-CwaJelEY.js";import"./isObject-Clle__At.js";import"./debounce-DStFzp8p.js";import"./useOsdkClient-D0uHWbqN.js";import"./tick-CJNoyutt.js";import"./DropdownField-D0Kss3Mm.js";import"./isEqual-Bx3yP7zp.js";import"./_baseIsEqual-Ckydw60z.js";import"./withOsdkMetrics-DlZr1eO5.js";const{expect:e,screen:t,userEvent:T,within:f}=__STORYBOOK_MODULE_TEST__,de={...u,title:"Components/ObjectTable"},n={args:{objectType:c,columnDefinitions:l},parameters:{docs:{description:{story:"Minimal setup showing Employee data with default column definitions."},source:{code:"<ObjectTable objectType={Employee} />"}}},render:o=>i.jsx("div",{className:"object-table-container",style:{height:"600px"},children:i.jsx(p,{...o})}),play:async({canvasElement:o})=>{const a=f(o);await a.findByText(d),await y(a,"fullName"),await e(await t.findByRole("menuitem",{name:"Sort ascending"})).toBeInTheDocument(),await e(t.getByRole("menuitem",{name:"Sort descending"})).toBeInTheDocument(),await e(t.getByRole("menuitem",{name:"Pin column"})).toBeInTheDocument(),await e(t.getByRole("menuitem",{name:"Configure Columns"})).toBeInTheDocument(),await T.keyboard("{Escape}")}};var m,r,s;n.parameters={...n.parameters,docs:{...(m=n.parameters)==null?void 0:m.docs,source:{originalSource:`{
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
