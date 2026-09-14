import{j as i}from"./iframe-W94gYwuG.js";import{O as p}from"./object-table-u26aBLJA.js";import{E as c}from"./Employee-BAk2o20h.js";import{d as l,o as u,T as d,a as y}from"./objectTableStoryHelpers-DtJs6fol.js";import"./preload-helper-BZdF85c1.js";import"./Table-B7pjjzBe.js";import"./index-Cuk5CzZs.js";import"./Dialog-DPKn2sJh.js";import"./cross-B_Jh2OAU.js";import"./svgIconContainer-DML7KnhH.js";import"./useBaseUiId-DLO1E5rV.js";import"./InternalBackdrop-DEnvfhpS.js";import"./composite-DlnNiwsN.js";import"./index-Dr7s6soJ.js";import"./index-DDztdIhx.js";import"./index-CAHmDUH2.js";import"./useEventCallback-BTozI7bp.js";import"./SkeletonBar-Dgza8SlF.js";import"./LoadingCell-DP8X6ipS.js";import"./ColumnConfigDialog-DYtIfYSh.js";import"./DraggableList-QYESWnxS.js";import"./search-c21shtzO.js";import"./Input-CjZq1vGj.js";import"./useControlled-BNYkrsEO.js";import"./Button-DaHI_b0v.js";import"./small-cross-DTRNmX-j.js";import"./ActionButton-CkSfOtXe.js";import"./Checkbox-BLnB_188.js";import"./useValueChanged-DQx8oeSu.js";import"./CollapsiblePanel-CU0W5mdF.js";import"./MultiColumnSortDialog-B3ZAnm8a.js";import"./MenuTrigger-BXrNTKyb.js";import"./CompositeItem-DfviX0qN.js";import"./ToolbarRootContext-BJjWSvlz.js";import"./getDisabledMountTransitionStyles-CJr3sVjs.js";import"./getPseudoElementBounds-Di9nobCt.js";import"./chevron-down-C2jygjf1.js";import"./index-D8f0-tDA.js";import"./error-BiPx4nD4.js";import"./BaseCbacBanner-Dx5jNdQx.js";import"./makeExternalStore-CHaLvDqs.js";import"./Tooltip-CifKjXPD.js";import"./PopoverPopup-Dwm_HE2U.js";import"./debounce-DXg9Ea7B.js";import"./useOsdkClient-CUKa_SZN.js";import"./tick-DhBqls0o.js";import"./DropdownField-4fOxRAUh.js";import"./isEqual-FLvCKp87.js";import"./withOsdkMetrics-BUuBi764.js";const{expect:e,screen:t,userEvent:T,within:f}=__STORYBOOK_MODULE_TEST__,ue={...u,title:"Components/ObjectTable"},n={args:{objectType:c,columnDefinitions:l},parameters:{docs:{description:{story:"Minimal setup showing Employee data with default column definitions."},source:{code:"<ObjectTable objectType={Employee} />"}}},render:o=>i.jsx("div",{className:"object-table-container",style:{height:"600px"},children:i.jsx(p,{...o})}),play:async({canvasElement:o})=>{const a=f(o);await a.findByText(d),await y(a,"fullName"),await e(await t.findByRole("menuitem",{name:"Sort ascending"})).toBeInTheDocument(),await e(t.getByRole("menuitem",{name:"Sort descending"})).toBeInTheDocument(),await e(t.getByRole("menuitem",{name:"Pin column"})).toBeInTheDocument(),await e(t.getByRole("menuitem",{name:"Configure Columns"})).toBeInTheDocument(),await T.keyboard("{Escape}")}};var m,r,s;n.parameters={...n.parameters,docs:{...(m=n.parameters)==null?void 0:m.docs,source:{originalSource:`{
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
