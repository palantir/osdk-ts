import{j as i}from"./iframe-Cw3LH66c.js";import{O as p}from"./object-table-CY3WUeVX.js";import{E as c}from"./Employee-BAk2o20h.js";import{d as l,o as u,T as d,a as y}from"./objectTableStoryHelpers-ZTvmEDIW.js";import"./preload-helper-0zDabIei.js";import"./Table-CVbXTPSA.js";import"./index-BEERWgVy.js";import"./Dialog-Df6dPfbY.js";import"./cross-BxwRmAhN.js";import"./svgIconContainer-By_Zx8bX.js";import"./useBaseUiId-BSwJaM6C.js";import"./InternalBackdrop-dbVS_Lfc.js";import"./composite-DkWEa617.js";import"./index-Dvk9IgkK.js";import"./index-Di_GE7Jl.js";import"./index-DDiROJlP.js";import"./useEventCallback-5AhjtGqt.js";import"./SkeletonBar-Dzu018il.js";import"./LoadingCell-bar-atLv.js";import"./ColumnConfigDialog-Z9ANM7bd.js";import"./DraggableList-CUNXv4BN.js";import"./search-CZ_uh4ZV.js";import"./Input-CtFwY591.js";import"./useControlled-0OhiGPgb.js";import"./Button-dLCYbHpS.js";import"./small-cross-DMGeALz-.js";import"./ActionButton-BN9H3toR.js";import"./Checkbox-vgDy4sPH.js";import"./useValueChanged-C15eXzrn.js";import"./CollapsiblePanel-BqpzO6p2.js";import"./MultiColumnSortDialog-Uxw5HPsx.js";import"./MenuTrigger-BzYPZco1.js";import"./CompositeItem-C2idg_k-.js";import"./ToolbarRootContext-f4q0b_R5.js";import"./getDisabledMountTransitionStyles-Cqz6gGv9.js";import"./getPseudoElementBounds-B8OXb7F2.js";import"./chevron-down-DRmznTzQ.js";import"./index-DQ4AskLW.js";import"./error-CmY3qZ0u.js";import"./BaseCbacBanner-CZYPxMWo.js";import"./makeExternalStore-Di2REqsM.js";import"./Tooltip-_tVxlKMX.js";import"./PopoverPopup-hu8WdUFW.js";import"./debounce-DT5EOIQR.js";import"./useOsdkClient-C5QpN0d9.js";import"./tick-CnMPIEfW.js";import"./DropdownField-wBvRipXj.js";import"./isEqual-CiVCDmSd.js";import"./withOsdkMetrics-D2csPQg7.js";const{expect:e,screen:t,userEvent:T,within:f}=__STORYBOOK_MODULE_TEST__,ue={...u,title:"Components/ObjectTable"},n={args:{objectType:c,columnDefinitions:l},parameters:{docs:{description:{story:"Minimal setup showing Employee data with default column definitions."},source:{code:"<ObjectTable objectType={Employee} />"}}},render:o=>i.jsx("div",{className:"object-table-container",style:{height:"600px"},children:i.jsx(p,{...o})}),play:async({canvasElement:o})=>{const a=f(o);await a.findByText(d),await y(a,"fullName"),await e(await t.findByRole("menuitem",{name:"Sort ascending"})).toBeInTheDocument(),await e(t.getByRole("menuitem",{name:"Sort descending"})).toBeInTheDocument(),await e(t.getByRole("menuitem",{name:"Pin column"})).toBeInTheDocument(),await e(t.getByRole("menuitem",{name:"Configure Columns"})).toBeInTheDocument(),await T.keyboard("{Escape}")}};var m,r,s;n.parameters={...n.parameters,docs:{...(m=n.parameters)==null?void 0:m.docs,source:{originalSource:`{
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
