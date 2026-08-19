import{j as i}from"./iframe-Ckg3JDEd.js";import{O as p}from"./object-table-BrOZH1Zz.js";import{E as c}from"./Employee-BAk2o20h.js";import{d as l,o as u,T as d,a as y}from"./objectTableStoryHelpers-BmhlXNuY.js";import"./preload-helper-KBO4otl1.js";import"./Table-DFCpZK6b.js";import"./index-yOX0clgO.js";import"./Dialog-BC4Dkf0w.js";import"./cross-C_oC8uQT.js";import"./svgIconContainer-DWrcnmPY.js";import"./useBaseUiId-C1nkxB3O.js";import"./InternalBackdrop-Dd9uCagy.js";import"./composite-C5JLlQSZ.js";import"./index-DBijKEQ7.js";import"./index-Hqp5BANx.js";import"./index-DlAr3QJC.js";import"./useEventCallback-x3dAfiZP.js";import"./SkeletonBar-BsemAOal.js";import"./LoadingCell-BUytE7HV.js";import"./ColumnConfigDialog-Koi3iuou.js";import"./DraggableList-b8IKeig4.js";import"./search-CECB0TiM.js";import"./Input-SzB69mKt.js";import"./useControlled-DWTYB9QG.js";import"./Button-BUGWw6kP.js";import"./small-cross-DOG-LnQ0.js";import"./ActionButton-D8GQpai4.js";import"./Checkbox-D6BIw2ha.js";import"./useValueChanged-DmbpCJPt.js";import"./CollapsiblePanel-UtvTJ4vl.js";import"./MultiColumnSortDialog-D8MkzSuj.js";import"./MenuTrigger-BXUGX02t.js";import"./CompositeItem-DVQ8sS88.js";import"./ToolbarRootContext-FvrCx-X9.js";import"./getDisabledMountTransitionStyles-BoIKTWaE.js";import"./getPseudoElementBounds-B6I-gPB0.js";import"./chevron-down-YWSk7uW9.js";import"./index-BZEXsqr4.js";import"./error-CYwbtwGc.js";import"./BaseCbacBanner-DfChN1RI.js";import"./makeExternalStore-DsBbJpT3.js";import"./Tooltip-tAePzXq_.js";import"./PopoverPopup-BAl5YuC0.js";import"./debounce-De4tjBdY.js";import"./useOsdkClient-BXZy7uxb.js";import"./tick-LwXocHnQ.js";import"./DropdownField-sg7lsRX4.js";import"./isEqual-C15s-RPH.js";import"./withOsdkMetrics-DWluRxuk.js";const{expect:e,screen:t,userEvent:T,within:f}=__STORYBOOK_MODULE_TEST__,ue={...u,title:"Components/ObjectTable"},n={args:{objectType:c,columnDefinitions:l},parameters:{docs:{description:{story:"Minimal setup showing Employee data with default column definitions."},source:{code:"<ObjectTable objectType={Employee} />"}}},render:o=>i.jsx("div",{className:"object-table-container",style:{height:"600px"},children:i.jsx(p,{...o})}),play:async({canvasElement:o})=>{const a=f(o);await a.findByText(d),await y(a,"fullName"),await e(await t.findByRole("menuitem",{name:"Sort ascending"})).toBeInTheDocument(),await e(t.getByRole("menuitem",{name:"Sort descending"})).toBeInTheDocument(),await e(t.getByRole("menuitem",{name:"Pin column"})).toBeInTheDocument(),await e(t.getByRole("menuitem",{name:"Configure Columns"})).toBeInTheDocument(),await T.keyboard("{Escape}")}};var m,r,s;n.parameters={...n.parameters,docs:{...(m=n.parameters)==null?void 0:m.docs,source:{originalSource:`{
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
