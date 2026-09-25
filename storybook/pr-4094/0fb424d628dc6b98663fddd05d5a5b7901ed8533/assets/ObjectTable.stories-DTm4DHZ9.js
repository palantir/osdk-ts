import{j as i}from"./iframe-DvmPM8XM.js";import{O as p}from"./object-table-CkUPVJKK.js";import{E as c}from"./Employee-BAk2o20h.js";import{d as l,o as u,T as d,a as y}from"./objectTableStoryHelpers-DVkea3gV.js";import"./preload-helper-CWXBbGOK.js";import"./Table-BLHlsaeM.js";import"./index-Ckyxf5ES.js";import"./Dialog-D0BD0rSH.js";import"./cross-CWK_3iX0.js";import"./svgIconContainer-CKvBglfs.js";import"./useBaseUiId-BK6rm_vX.js";import"./InternalBackdrop-CDbm9lnE.js";import"./composite-BtMZy7bH.js";import"./index-DxRIPJNB.js";import"./index-DFwggDQF.js";import"./index-CiLgD-FQ.js";import"./useEventCallback-BHLH-nqa.js";import"./SkeletonBar-CK3zDoai.js";import"./LoadingCell-qfi7oMtY.js";import"./ColumnConfigDialog-CJjI4U8O.js";import"./DraggableList-DbOnBNdn.js";import"./search-TBI5J1QZ.js";import"./Input-DAJjBhoV.js";import"./useControlled-BlFMc0zn.js";import"./Button-CdgEMVNK.js";import"./small-cross-COHScf5C.js";import"./ActionButton-B0jn8mYL.js";import"./Checkbox-D5VxKTgt.js";import"./useValueChanged-B2Byj99o.js";import"./CollapsiblePanel-Bu8C3hKI.js";import"./MultiColumnSortDialog-Dmb1Dgf0.js";import"./MenuTrigger-CcHInNCV.js";import"./CompositeItem-kRLneeY3.js";import"./ToolbarRootContext-E7hSXQbh.js";import"./getDisabledMountTransitionStyles--bG59vx_.js";import"./getPseudoElementBounds-DIk-7fYl.js";import"./chevron-down-BE3Vkzfj.js";import"./index-DPz56gTU.js";import"./error-C_RDaNST.js";import"./BaseCbacBanner-DioKTDKG.js";import"./makeExternalStore-DPCzTg_N.js";import"./Tooltip-3Oq2VbSf.js";import"./PopoverPopup-BSlx7FSn.js";import"./debounce-B_vGr92p.js";import"./useOsdkClient-DYbXS0Lf.js";import"./tick-BBkj7T5w.js";import"./DropdownField-siiIARW9.js";import"./isEqual-1s0ixZs9.js";import"./withOsdkMetrics-C3HZbqv9.js";const{expect:e,screen:t,userEvent:T,within:f}=__STORYBOOK_MODULE_TEST__,ue={...u,title:"Components/ObjectTable"},n={args:{objectType:c,columnDefinitions:l},parameters:{docs:{description:{story:"Minimal setup showing Employee data with default column definitions."},source:{code:"<ObjectTable objectType={Employee} />"}}},render:o=>i.jsx("div",{className:"object-table-container",style:{height:"600px"},children:i.jsx(p,{...o})}),play:async({canvasElement:o})=>{const a=f(o);await a.findByText(d),await y(a,"fullName"),await e(await t.findByRole("menuitem",{name:"Sort ascending"})).toBeInTheDocument(),await e(t.getByRole("menuitem",{name:"Sort descending"})).toBeInTheDocument(),await e(t.getByRole("menuitem",{name:"Pin column"})).toBeInTheDocument(),await e(t.getByRole("menuitem",{name:"Configure Columns"})).toBeInTheDocument(),await T.keyboard("{Escape}")}};var m,r,s;n.parameters={...n.parameters,docs:{...(m=n.parameters)==null?void 0:m.docs,source:{originalSource:`{
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
