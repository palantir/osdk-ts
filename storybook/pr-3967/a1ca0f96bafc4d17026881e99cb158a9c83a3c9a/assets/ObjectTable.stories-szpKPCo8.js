import{j as i}from"./iframe-D4qPAS-g.js";import{O as p}from"./object-table-BX28yacF.js";import{E as c}from"./Employee-BAk2o20h.js";import{d as l,o as u,T as d,a as y}from"./objectTableStoryHelpers-DQt6WInj.js";import"./preload-helper-Cg_a2s3G.js";import"./Table-DXOu-_2d.js";import"./index-CLuwBfL-.js";import"./Dialog-T8KIwU-W.js";import"./cross-BeSpWB-4.js";import"./svgIconContainer-DyP05NDR.js";import"./useBaseUiId-DFpk5L0M.js";import"./InternalBackdrop-BCUOLFmB.js";import"./composite-Bzf0kbFg.js";import"./index-jBWRZpUn.js";import"./index-B9EWrBZS.js";import"./index-qCSwMjTE.js";import"./useEventCallback-DXfhN2Zh.js";import"./SkeletonBar-DLFcpX-9.js";import"./LoadingCell-DPxg3Lqi.js";import"./ColumnConfigDialog-6HjVnjx5.js";import"./DraggableList-DoUi86Qx.js";import"./search-CcRZw135.js";import"./Input-D6VetiDp.js";import"./useControlled-Ci6llHGb.js";import"./Button-lgQljYGT.js";import"./small-cross-vwZ-5oTM.js";import"./ActionButton-xbf5tfe7.js";import"./Checkbox-BonnwpAs.js";import"./useValueChanged-HUtJMSWa.js";import"./CollapsiblePanel-CyD6m11V.js";import"./MultiColumnSortDialog-DVZ_dGNm.js";import"./MenuTrigger-dHoqD7w2.js";import"./CompositeItem-BJpP_05A.js";import"./ToolbarRootContext-BsbBQIdg.js";import"./getDisabledMountTransitionStyles-BBrffB6S.js";import"./getPseudoElementBounds-CrC2U4pM.js";import"./chevron-down-CLf1ZLUx.js";import"./index-B7qcuAjK.js";import"./error-CPIE49XR.js";import"./BaseCbacBanner-DA0RZay7.js";import"./makeExternalStore-CgE_KKYk.js";import"./Tooltip-B_aEd4tb.js";import"./PopoverPopup-D3WK50Q9.js";import"./debounce-T1mkMtT7.js";import"./useOsdkClient-8qjnjN0r.js";import"./tick-C58ydeQv.js";import"./DropdownField-CMloR0CL.js";import"./isEqual-0jzM0xZw.js";import"./withOsdkMetrics-DgCfGEzl.js";const{expect:e,screen:t,userEvent:T,within:f}=__STORYBOOK_MODULE_TEST__,ue={...u,title:"Components/ObjectTable"},n={args:{objectType:c,columnDefinitions:l},parameters:{docs:{description:{story:"Minimal setup showing Employee data with default column definitions."},source:{code:"<ObjectTable objectType={Employee} />"}}},render:o=>i.jsx("div",{className:"object-table-container",style:{height:"600px"},children:i.jsx(p,{...o})}),play:async({canvasElement:o})=>{const a=f(o);await a.findByText(d),await y(a,"fullName"),await e(await t.findByRole("menuitem",{name:"Sort ascending"})).toBeInTheDocument(),await e(t.getByRole("menuitem",{name:"Sort descending"})).toBeInTheDocument(),await e(t.getByRole("menuitem",{name:"Pin column"})).toBeInTheDocument(),await e(t.getByRole("menuitem",{name:"Configure Columns"})).toBeInTheDocument(),await T.keyboard("{Escape}")}};var m,r,s;n.parameters={...n.parameters,docs:{...(m=n.parameters)==null?void 0:m.docs,source:{originalSource:`{
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
