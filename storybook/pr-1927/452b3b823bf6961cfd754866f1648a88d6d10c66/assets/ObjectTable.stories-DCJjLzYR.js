import{j as i}from"./iframe-BpdL9i9r.js";import{O as p}from"./object-table-D8EV8T58.js";import{E as c}from"./Employee-BAk2o20h.js";import{d as l,o as u,T as d,a as y}from"./objectTableStoryHelpers-DxADka8q.js";import"./preload-helper-BGgpRwmn.js";import"./Table-KFE7UNSo.js";import"./index-BOBmNIkf.js";import"./Dialog-BYS7qVOM.js";import"./cross-B_FitAUD.js";import"./svgIconContainer-BYUaz7v8.js";import"./useBaseUiId-DRf0avcO.js";import"./InternalBackdrop-BMXRBBRn.js";import"./composite-BFfsCZEe.js";import"./index-Dh6vk7Lg.js";import"./index-CAZS1ZmE.js";import"./index-B2GBLWAK.js";import"./useEventCallback-Cv7ZNXWB.js";import"./SkeletonBar-acxIujrp.js";import"./LoadingCell-ixXOOpOP.js";import"./ColumnConfigDialog-B3GVMtic.js";import"./DraggableList-MiRYJus0.js";import"./search-C5Bpx8xV.js";import"./Input-yfdnK4QX.js";import"./useControlled-QZyhjlC2.js";import"./Button-BysZxDt3.js";import"./small-cross-CbVs9Rqg.js";import"./ActionButton-GDiRTL_d.js";import"./Checkbox-CRk0naPI.js";import"./useValueChanged-_ggW3wfM.js";import"./CollapsiblePanel-Bhllaees.js";import"./MultiColumnSortDialog-C_FOAodo.js";import"./MenuTrigger-xiavFyRB.js";import"./CompositeItem-DWqZMJZf.js";import"./ToolbarRootContext-B3r4TQUK.js";import"./getDisabledMountTransitionStyles-BPLTuK4K.js";import"./getPseudoElementBounds-WaWUWStD.js";import"./chevron-down-CmBeGku0.js";import"./index-CQPYqNM-.js";import"./error-BZRmZs4O.js";import"./BaseCbacBanner-D4pdI21N.js";import"./makeExternalStore-BVQoDSnU.js";import"./Tooltip-D5UgCEsg.js";import"./PopoverPopup-DvvB667y.js";import"./debounce-DTQhMy-X.js";import"./useOsdkClient-rNJRaM8P.js";import"./tick-DtX6b8Qy.js";import"./DropdownField-jH7MfoFT.js";import"./isEqual-DXMiZQC8.js";import"./withOsdkMetrics-DoqsagcU.js";const{expect:e,screen:t,userEvent:T,within:f}=__STORYBOOK_MODULE_TEST__,ue={...u,title:"Components/ObjectTable"},n={args:{objectType:c,columnDefinitions:l},parameters:{docs:{description:{story:"Minimal setup showing Employee data with default column definitions."},source:{code:"<ObjectTable objectType={Employee} />"}}},render:o=>i.jsx("div",{className:"object-table-container",style:{height:"600px"},children:i.jsx(p,{...o})}),play:async({canvasElement:o})=>{const a=f(o);await a.findByText(d),await y(a,"fullName"),await e(await t.findByRole("menuitem",{name:"Sort ascending"})).toBeInTheDocument(),await e(t.getByRole("menuitem",{name:"Sort descending"})).toBeInTheDocument(),await e(t.getByRole("menuitem",{name:"Pin column"})).toBeInTheDocument(),await e(t.getByRole("menuitem",{name:"Configure Columns"})).toBeInTheDocument(),await T.keyboard("{Escape}")}};var m,r,s;n.parameters={...n.parameters,docs:{...(m=n.parameters)==null?void 0:m.docs,source:{originalSource:`{
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
