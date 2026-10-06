import{j as i}from"./iframe-BzqK-L3x.js";import{O as p}from"./object-table-OaquGUP5.js";import{E as c}from"./Employee-BAk2o20h.js";import{d as l,o as u,T as d,a as y}from"./objectTableStoryHelpers-UixNS74K.js";import"./preload-helper-BKlEVweK.js";import"./Table-VZgD2rIs.js";import"./index-CAFk7Pq5.js";import"./Dialog-Cs_MSF_O.js";import"./cross-Dbky2_5e.js";import"./svgIconContainer-CSL2gIeC.js";import"./useBaseUiId-C-iu15of.js";import"./InternalBackdrop-Cxu2fNBT.js";import"./composite-C9E7l6t3.js";import"./index-BlWV0Ebq.js";import"./index-DncDRzcB.js";import"./index-iXJXK9FX.js";import"./useEventCallback-D-Sglxt5.js";import"./SkeletonBar-BpdDGpzK.js";import"./LoadingCell-CZoreGqQ.js";import"./ColumnConfigDialog-C_pwIUqS.js";import"./DraggableList-DIRMuv72.js";import"./search-D0Jcsyiy.js";import"./Input-Cpl2x-wp.js";import"./useControlled-C0lOLQQX.js";import"./Button-fL19aB2n.js";import"./small-cross-DSq1Ji79.js";import"./ActionButton-CBPhJdYI.js";import"./Checkbox-C4sxA_lV.js";import"./useValueChanged-DRI8i0U9.js";import"./CollapsiblePanel-C6mzDoEl.js";import"./MultiColumnSortDialog-vDHQUtRg.js";import"./MenuTrigger-DmNawmm-.js";import"./CompositeItem-BZg5qy-d.js";import"./ToolbarRootContext-k1NWQ1L0.js";import"./getDisabledMountTransitionStyles-J5Ooz9tY.js";import"./getPseudoElementBounds-DbK25kQg.js";import"./chevron-down-CaTsAVif.js";import"./index-Bn_5eQCw.js";import"./error-CPni5UMa.js";import"./BaseCbacBanner-DxMvHT91.js";import"./makeExternalStore-BlKOrYUq.js";import"./Tooltip-BLliu4sM.js";import"./PopoverPopup-C4o9R-HV.js";import"./debounce-DAbmYcqu.js";import"./useOsdkClient-BlZCOoSZ.js";import"./tick-fV4K9fjf.js";import"./DropdownField-ir124Bdv.js";import"./isEqual-CWLt9LFF.js";import"./withOsdkMetrics-o-hRBNLG.js";const{expect:e,screen:t,userEvent:T,within:f}=__STORYBOOK_MODULE_TEST__,ue={...u,title:"Components/ObjectTable"},n={args:{objectType:c,columnDefinitions:l},parameters:{docs:{description:{story:"Minimal setup showing Employee data with default column definitions."},source:{code:"<ObjectTable objectType={Employee} />"}}},render:o=>i.jsx("div",{className:"object-table-container",style:{height:"600px"},children:i.jsx(p,{...o})}),play:async({canvasElement:o})=>{const a=f(o);await a.findByText(d),await y(a,"fullName"),await e(await t.findByRole("menuitem",{name:"Sort ascending"})).toBeInTheDocument(),await e(t.getByRole("menuitem",{name:"Sort descending"})).toBeInTheDocument(),await e(t.getByRole("menuitem",{name:"Pin column"})).toBeInTheDocument(),await e(t.getByRole("menuitem",{name:"Configure Columns"})).toBeInTheDocument(),await T.keyboard("{Escape}")}};var m,r,s;n.parameters={...n.parameters,docs:{...(m=n.parameters)==null?void 0:m.docs,source:{originalSource:`{
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
