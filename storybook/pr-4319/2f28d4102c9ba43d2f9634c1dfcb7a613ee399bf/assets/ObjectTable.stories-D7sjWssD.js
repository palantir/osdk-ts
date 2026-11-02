import{j as i}from"./iframe-BrffKLyp.js";import{O as p}from"./object-table-Dpu5k5SK.js";import{E as c}from"./Employee-BAk2o20h.js";import{d as l,o as u,T as d,a as y}from"./objectTableStoryHelpers-CsuP1lhr.js";import"./preload-helper-BB6iUnWm.js";import"./Table-B_02uKRN.js";import"./index-DdTg6oKw.js";import"./Dialog-Ksl7yw-Q.js";import"./cross-Dp6LnhT2.js";import"./svgIconContainer-dbsVi0_7.js";import"./useBaseUiId-OXag9z4A.js";import"./InternalBackdrop-CnkFNeAc.js";import"./composite-B19juyCu.js";import"./index-BY-yZOS1.js";import"./index-BNYKUSid.js";import"./index-CKbA51qL.js";import"./useEventCallback-KlENmr3-.js";import"./SkeletonBar-BNhUv384.js";import"./LoadingCell-uuhgPaRC.js";import"./ColumnConfigDialog-DjoTRpTp.js";import"./DraggableList-DKtcAVy4.js";import"./search-DpKU3GOV.js";import"./Input-D50y4-4d.js";import"./useControlled-ByoWnUuY.js";import"./Button-BBZWD59x.js";import"./small-cross-CpyGHN9N.js";import"./ActionButton-C4PM5hyU.js";import"./Checkbox-DfzWclH1.js";import"./useValueChanged-CAUNudgK.js";import"./CollapsiblePanel-B88FbLvt.js";import"./MultiColumnSortDialog-OtGBhL2Z.js";import"./MenuTrigger-C1wZppHS.js";import"./CompositeItem-BfleHTK8.js";import"./ToolbarRootContext-B5DfTbi7.js";import"./getDisabledMountTransitionStyles-C9YJOWb9.js";import"./getPseudoElementBounds-vl7uyq45.js";import"./chevron-down-BEFoIyYv.js";import"./index-YnTFldk0.js";import"./error-y0lQ0i5v.js";import"./BaseCbacBanner-C1aMcfEF.js";import"./makeExternalStore-DG5GHaRJ.js";import"./Tooltip-Cnrxi8BQ.js";import"./PopoverPopup-qvwA2CT4.js";import"./debounce-CTTKbsgG.js";import"./useOsdkClient-VXDqhkKt.js";import"./tick-D7AFc6ML.js";import"./DropdownField-DYCm_r7c.js";import"./isEqual-DtGDNuhx.js";import"./withOsdkMetrics-rbdPxHeN.js";const{expect:e,screen:t,userEvent:T,within:f}=__STORYBOOK_MODULE_TEST__,ue={...u,title:"Components/ObjectTable"},n={args:{objectType:c,columnDefinitions:l},parameters:{docs:{description:{story:"Minimal setup showing Employee data with default column definitions."},source:{code:"<ObjectTable objectType={Employee} />"}}},render:o=>i.jsx("div",{className:"object-table-container",style:{height:"600px"},children:i.jsx(p,{...o})}),play:async({canvasElement:o})=>{const a=f(o);await a.findByText(d),await y(a,"fullName"),await e(await t.findByRole("menuitem",{name:"Sort ascending"})).toBeInTheDocument(),await e(t.getByRole("menuitem",{name:"Sort descending"})).toBeInTheDocument(),await e(t.getByRole("menuitem",{name:"Pin column"})).toBeInTheDocument(),await e(t.getByRole("menuitem",{name:"Configure Columns"})).toBeInTheDocument(),await T.keyboard("{Escape}")}};var m,r,s;n.parameters={...n.parameters,docs:{...(m=n.parameters)==null?void 0:m.docs,source:{originalSource:`{
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
