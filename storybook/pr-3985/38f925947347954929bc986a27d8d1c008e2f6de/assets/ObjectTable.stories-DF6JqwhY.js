import{j as i}from"./iframe-B_zDWzul.js";import{O as p}from"./object-table-cOqu9El5.js";import{E as c}from"./Employee-BAk2o20h.js";import{d as l,o as u,T as d,a as y}from"./objectTableStoryHelpers-149PsyYL.js";import"./preload-helper-DG9VDp_n.js";import"./Table-CkJAHw1l.js";import"./index-Boe0r-ul.js";import"./Dialog-BxEqGnE7.js";import"./cross-DKHH0lxU.js";import"./svgIconContainer-D8Trdk-G.js";import"./useBaseUiId-BPYuvIYG.js";import"./InternalBackdrop-BBDXZiom.js";import"./composite-CRWF04qz.js";import"./index-Br-DhCTN.js";import"./index-aWrltaDE.js";import"./index-Bfg-2Dta.js";import"./useEventCallback-DnLRigCq.js";import"./SkeletonBar-C_WlHfIE.js";import"./LoadingCell-DihNEnoT.js";import"./ColumnConfigDialog-CmSGaq61.js";import"./DraggableList-DUxKa0PJ.js";import"./search-CXl9LYG4.js";import"./Input-K8Dbc9EI.js";import"./useControlled-CZdhzCyg.js";import"./Button-CwOCHkU2.js";import"./small-cross-fjxceIfR.js";import"./ActionButton-DfJlFfaW.js";import"./Checkbox-W0W1RVqq.js";import"./useValueChanged-ge1xS2AC.js";import"./CollapsiblePanel-D0sNlSFL.js";import"./MultiColumnSortDialog-CNA_9xtQ.js";import"./MenuTrigger-CNaCmRRS.js";import"./CompositeItem-DKZBVYKb.js";import"./ToolbarRootContext-CvnVRZq1.js";import"./getDisabledMountTransitionStyles-B56Kq4AN.js";import"./getPseudoElementBounds-BRtR8Y3Z.js";import"./chevron-down-uvQYx996.js";import"./index-qHFFPM8K.js";import"./error-D8w3bqy-.js";import"./BaseCbacBanner-IP3vHVdh.js";import"./makeExternalStore-CxUdCktA.js";import"./Tooltip-CgN9cFWO.js";import"./PopoverPopup-DJdvahb_.js";import"./debounce-BxwTN6fx.js";import"./useOsdkClient-iyjN2aHF.js";import"./tick-Cd-BvMVz.js";import"./DropdownField-CR3J2Rsn.js";import"./isEqual-DoZhvmKv.js";import"./withOsdkMetrics-3_FMme5R.js";const{expect:e,screen:t,userEvent:T,within:f}=__STORYBOOK_MODULE_TEST__,ue={...u,title:"Components/ObjectTable"},n={args:{objectType:c,columnDefinitions:l},parameters:{docs:{description:{story:"Minimal setup showing Employee data with default column definitions."},source:{code:"<ObjectTable objectType={Employee} />"}}},render:o=>i.jsx("div",{className:"object-table-container",style:{height:"600px"},children:i.jsx(p,{...o})}),play:async({canvasElement:o})=>{const a=f(o);await a.findByText(d),await y(a,"fullName"),await e(await t.findByRole("menuitem",{name:"Sort ascending"})).toBeInTheDocument(),await e(t.getByRole("menuitem",{name:"Sort descending"})).toBeInTheDocument(),await e(t.getByRole("menuitem",{name:"Pin column"})).toBeInTheDocument(),await e(t.getByRole("menuitem",{name:"Configure Columns"})).toBeInTheDocument(),await T.keyboard("{Escape}")}};var m,r,s;n.parameters={...n.parameters,docs:{...(m=n.parameters)==null?void 0:m.docs,source:{originalSource:`{
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
