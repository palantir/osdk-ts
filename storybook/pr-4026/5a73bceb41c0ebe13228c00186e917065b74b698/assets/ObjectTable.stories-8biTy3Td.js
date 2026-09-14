import{j as i}from"./iframe-DGk-Gwvb.js";import{O as p}from"./object-table-B1GB1Px_.js";import{E as c}from"./Employee-BAk2o20h.js";import{d as l,o as u,T as d,a as y}from"./objectTableStoryHelpers-C5LWa4gj.js";import"./preload-helper-DZHE4yfF.js";import"./Table-CGvoeQiy.js";import"./index-CHt6784l.js";import"./Dialog-CoyTV2xE.js";import"./cross-Bv56pu7B.js";import"./svgIconContainer-DWhpBW2K.js";import"./useBaseUiId-CYF4ttQ0.js";import"./InternalBackdrop-2qC76XrM.js";import"./composite-UKbswMLH.js";import"./index--TUwCCTO.js";import"./index-Y3fUVY7j.js";import"./index-Dmy594Bz.js";import"./useEventCallback-2nXbXvpA.js";import"./SkeletonBar-C2y2uMzP.js";import"./LoadingCell-DsGqRk6L.js";import"./ColumnConfigDialog-BG7xCsyo.js";import"./DraggableList-e-Vui3PK.js";import"./search-DuL1IKxe.js";import"./Input-lpBjDH3J.js";import"./useControlled-BLk_1CnQ.js";import"./Button-D8mEnRQz.js";import"./small-cross-CqqiVSV9.js";import"./ActionButton-DrJeruLF.js";import"./Checkbox-DHlridbE.js";import"./useValueChanged-DAOfQ09L.js";import"./CollapsiblePanel-TiLElam_.js";import"./MultiColumnSortDialog-CLmgSm8M.js";import"./MenuTrigger-D6_BzbAC.js";import"./CompositeItem-CaGEr3lp.js";import"./ToolbarRootContext-DYa8q61O.js";import"./getDisabledMountTransitionStyles-DzmBA_gO.js";import"./getPseudoElementBounds-Caw7OuxZ.js";import"./chevron-down-F0KSYD0T.js";import"./index-BDWQvtVH.js";import"./error-CNFmOPSg.js";import"./BaseCbacBanner-DS4E-NQX.js";import"./makeExternalStore-DekmBIJm.js";import"./Tooltip-B8a6AeiL.js";import"./PopoverPopup-8NMKP2yH.js";import"./debounce-DdquZemZ.js";import"./useOsdkClient-nqMxZ_CW.js";import"./tick-Co26rO3c.js";import"./DropdownField-BarJItLo.js";import"./isEqual-Bny9H9I6.js";import"./withOsdkMetrics-B38cTpqn.js";const{expect:e,screen:t,userEvent:T,within:f}=__STORYBOOK_MODULE_TEST__,ue={...u,title:"Components/ObjectTable"},n={args:{objectType:c,columnDefinitions:l},parameters:{docs:{description:{story:"Minimal setup showing Employee data with default column definitions."},source:{code:"<ObjectTable objectType={Employee} />"}}},render:o=>i.jsx("div",{className:"object-table-container",style:{height:"600px"},children:i.jsx(p,{...o})}),play:async({canvasElement:o})=>{const a=f(o);await a.findByText(d),await y(a,"fullName"),await e(await t.findByRole("menuitem",{name:"Sort ascending"})).toBeInTheDocument(),await e(t.getByRole("menuitem",{name:"Sort descending"})).toBeInTheDocument(),await e(t.getByRole("menuitem",{name:"Pin column"})).toBeInTheDocument(),await e(t.getByRole("menuitem",{name:"Configure Columns"})).toBeInTheDocument(),await T.keyboard("{Escape}")}};var m,r,s;n.parameters={...n.parameters,docs:{...(m=n.parameters)==null?void 0:m.docs,source:{originalSource:`{
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
