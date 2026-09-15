import{j as i}from"./iframe-Dw2PjeaI.js";import{O as p}from"./object-table-BoFh6vVh.js";import{E as c}from"./Employee-BAk2o20h.js";import{d as l,o as u,T as d,a as y}from"./objectTableStoryHelpers-DH1oaOdM.js";import"./preload-helper-BJaT6ZDB.js";import"./Table-CdXn9lIp.js";import"./index-0M7994Y_.js";import"./Dialog-DLQ1SkNP.js";import"./cross-CLda9Fo1.js";import"./svgIconContainer-CeXRiZtW.js";import"./useBaseUiId-0TtGgIAG.js";import"./InternalBackdrop-DJ2aMJ5Y.js";import"./composite-DWecAK_E.js";import"./index-BPb9j9HY.js";import"./index-CGb9o7qe.js";import"./index-COYYs5y4.js";import"./useEventCallback-CctUb2O0.js";import"./SkeletonBar-PF5whjmA.js";import"./LoadingCell-Cu18aVq6.js";import"./ColumnConfigDialog-D_kDucuk.js";import"./DraggableList-BEUABJjc.js";import"./search-ClBN3Er-.js";import"./Input-DbWveyeA.js";import"./useControlled-Cz_GJLGD.js";import"./Button-DVN9BG7e.js";import"./small-cross-DnafLtCp.js";import"./ActionButton-BioyY_id.js";import"./Checkbox-CZdSeNLj.js";import"./useValueChanged-B-pgRub2.js";import"./CollapsiblePanel-CK9cXofW.js";import"./MultiColumnSortDialog-IUz5Mdml.js";import"./MenuTrigger-Bh8vjRh6.js";import"./CompositeItem-CeRclahQ.js";import"./ToolbarRootContext-DgoSljlg.js";import"./getDisabledMountTransitionStyles-Cttf6bUS.js";import"./getPseudoElementBounds-C3FmlhF8.js";import"./chevron-down-C1e4s47j.js";import"./index-B5gfVMUt.js";import"./error-DeMrwFkF.js";import"./BaseCbacBanner-Df5GPEYT.js";import"./makeExternalStore-DXns2UQ6.js";import"./Tooltip-CAM98dk7.js";import"./PopoverPopup-Dg_qhS7v.js";import"./debounce-B2VXBB9P.js";import"./useOsdkClient-C1y4H3RM.js";import"./tick-vpRHL3-c.js";import"./DropdownField-pycu6fvL.js";import"./isEqual-CQnWIsqc.js";import"./withOsdkMetrics-C5Psz1d4.js";const{expect:e,screen:t,userEvent:T,within:f}=__STORYBOOK_MODULE_TEST__,ue={...u,title:"Components/ObjectTable"},n={args:{objectType:c,columnDefinitions:l},parameters:{docs:{description:{story:"Minimal setup showing Employee data with default column definitions."},source:{code:"<ObjectTable objectType={Employee} />"}}},render:o=>i.jsx("div",{className:"object-table-container",style:{height:"600px"},children:i.jsx(p,{...o})}),play:async({canvasElement:o})=>{const a=f(o);await a.findByText(d),await y(a,"fullName"),await e(await t.findByRole("menuitem",{name:"Sort ascending"})).toBeInTheDocument(),await e(t.getByRole("menuitem",{name:"Sort descending"})).toBeInTheDocument(),await e(t.getByRole("menuitem",{name:"Pin column"})).toBeInTheDocument(),await e(t.getByRole("menuitem",{name:"Configure Columns"})).toBeInTheDocument(),await T.keyboard("{Escape}")}};var m,r,s;n.parameters={...n.parameters,docs:{...(m=n.parameters)==null?void 0:m.docs,source:{originalSource:`{
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
