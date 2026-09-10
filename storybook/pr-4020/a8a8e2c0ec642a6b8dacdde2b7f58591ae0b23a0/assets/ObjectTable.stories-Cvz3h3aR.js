import{j as i}from"./iframe-C2ZZ3cOF.js";import{O as p}from"./object-table-D9lkTMXk.js";import{E as c}from"./Employee-BAk2o20h.js";import{d as l,o as u,T as d,a as y}from"./objectTableStoryHelpers-DCj9t2GO.js";import"./preload-helper-BJtcF0-s.js";import"./Table-DpsKDQYa.js";import"./index-DsoOCFTI.js";import"./Dialog-BZHpATCh.js";import"./cross--ibNnIEf.js";import"./svgIconContainer-DGGhigwB.js";import"./useBaseUiId-rOymOOAJ.js";import"./InternalBackdrop-DCDgroAI.js";import"./composite-Ddvv9IrU.js";import"./index-CTwT6nYN.js";import"./index-DSVH0ev_.js";import"./index-yDJJIzMt.js";import"./useEventCallback-B3d5wrwR.js";import"./SkeletonBar-CuXnc-bL.js";import"./LoadingCell-CMtPsv4A.js";import"./ColumnConfigDialog-DuvVpeqU.js";import"./DraggableList-C4T7r2IB.js";import"./search-U62jo3I0.js";import"./Input-Dmhhrwdm.js";import"./useControlled-OqQhu2z4.js";import"./Button-D9oV_2gB.js";import"./small-cross-D1YvVRXB.js";import"./ActionButton-Behm8cD1.js";import"./Checkbox-Dnufhn9O.js";import"./useValueChanged-DCNsd_18.js";import"./CollapsiblePanel-omRA8Wab.js";import"./MultiColumnSortDialog-DvXdzalI.js";import"./MenuTrigger-ffNJhOok.js";import"./CompositeItem-DUancClF.js";import"./ToolbarRootContext-B1pHyjdA.js";import"./getDisabledMountTransitionStyles-Baz1yk5y.js";import"./getPseudoElementBounds-CKnr_cwE.js";import"./chevron-down-Btxrg9J1.js";import"./index-DlwYymDm.js";import"./error-fD8lMeVM.js";import"./BaseCbacBanner-tUaxtrFw.js";import"./makeExternalStore-C0CUUcCC.js";import"./Tooltip-_hliLngy.js";import"./PopoverPopup-BaZJt03D.js";import"./debounce-BLIS2g0T.js";import"./useOsdkClient-C074xW8m.js";import"./tick-BQbrvSw2.js";import"./DropdownField-BLQjRzQd.js";import"./isEqual-cE_q7Xx5.js";import"./withOsdkMetrics-vMcZolIP.js";const{expect:e,screen:t,userEvent:T,within:f}=__STORYBOOK_MODULE_TEST__,ue={...u,title:"Components/ObjectTable"},n={args:{objectType:c,columnDefinitions:l},parameters:{docs:{description:{story:"Minimal setup showing Employee data with default column definitions."},source:{code:"<ObjectTable objectType={Employee} />"}}},render:o=>i.jsx("div",{className:"object-table-container",style:{height:"600px"},children:i.jsx(p,{...o})}),play:async({canvasElement:o})=>{const a=f(o);await a.findByText(d),await y(a,"fullName"),await e(await t.findByRole("menuitem",{name:"Sort ascending"})).toBeInTheDocument(),await e(t.getByRole("menuitem",{name:"Sort descending"})).toBeInTheDocument(),await e(t.getByRole("menuitem",{name:"Pin column"})).toBeInTheDocument(),await e(t.getByRole("menuitem",{name:"Configure Columns"})).toBeInTheDocument(),await T.keyboard("{Escape}")}};var m,r,s;n.parameters={...n.parameters,docs:{...(m=n.parameters)==null?void 0:m.docs,source:{originalSource:`{
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
