import{j as i}from"./iframe-2CZ5tyet.js";import{O as p}from"./object-table-DpRFI095.js";import{E as c}from"./Employee-BAk2o20h.js";import{d as l,o as u,T as d,a as y}from"./objectTableStoryHelpers-I0UMbiv9.js";import"./preload-helper-PdhlwSnk.js";import"./Table-CznV6T2W.js";import"./index-BEbGGmzC.js";import"./Dialog-CeWRMnMF.js";import"./cross-L_JwSQIU.js";import"./svgIconContainer-CNOiLZ-C.js";import"./useBaseUiId-DmeaPkXN.js";import"./InternalBackdrop-AEMlst0F.js";import"./composite-D3k21xgh.js";import"./index-DJ2zkz4W.js";import"./index-BzLD7IFo.js";import"./index-BLLQpwjF.js";import"./useEventCallback-BSE4SjR3.js";import"./SkeletonBar-CZIrexgF.js";import"./LoadingCell-hl43yvOQ.js";import"./ColumnConfigDialog-gbHfBktU.js";import"./DraggableList-D8xTIljs.js";import"./search-DVGk6bce.js";import"./Input-nyDT7hKf.js";import"./useControlled-Dh1VVbb0.js";import"./Button-eNpy85xj.js";import"./small-cross-DldLH4C7.js";import"./ActionButton-Bj84kgPY.js";import"./Checkbox-NvzeqK8d.js";import"./useValueChanged-B3VhTAWV.js";import"./CollapsiblePanel-DSL9tbZc.js";import"./MultiColumnSortDialog-haCwcxAA.js";import"./MenuTrigger-BEDWfK89.js";import"./CompositeItem-_M4T2kN5.js";import"./ToolbarRootContext-C-QqQ4cn.js";import"./getDisabledMountTransitionStyles-Gd7L8Xae.js";import"./getPseudoElementBounds-Xqurqd99.js";import"./chevron-down-9zPbKgFH.js";import"./index-DlBbVzYN.js";import"./error-_JBSJ8K6.js";import"./BaseCbacBanner-CtN12RyV.js";import"./makeExternalStore-47_tyIYI.js";import"./Tooltip-BmclmkMF.js";import"./PopoverPopup-BaNCTG4D.js";import"./debounce-C66p6rWC.js";import"./useOsdkClient-CiuR1H2l.js";import"./tick-BDMTisIM.js";import"./DropdownField-dfStdW8W.js";import"./isEqual-DYEOAiyn.js";import"./withOsdkMetrics-CV77OAmc.js";const{expect:e,screen:t,userEvent:T,within:f}=__STORYBOOK_MODULE_TEST__,ue={...u,title:"Components/ObjectTable"},n={args:{objectType:c,columnDefinitions:l},parameters:{docs:{description:{story:"Minimal setup showing Employee data with default column definitions."},source:{code:"<ObjectTable objectType={Employee} />"}}},render:o=>i.jsx("div",{className:"object-table-container",style:{height:"600px"},children:i.jsx(p,{...o})}),play:async({canvasElement:o})=>{const a=f(o);await a.findByText(d),await y(a,"fullName"),await e(await t.findByRole("menuitem",{name:"Sort ascending"})).toBeInTheDocument(),await e(t.getByRole("menuitem",{name:"Sort descending"})).toBeInTheDocument(),await e(t.getByRole("menuitem",{name:"Pin column"})).toBeInTheDocument(),await e(t.getByRole("menuitem",{name:"Configure Columns"})).toBeInTheDocument(),await T.keyboard("{Escape}")}};var m,r,s;n.parameters={...n.parameters,docs:{...(m=n.parameters)==null?void 0:m.docs,source:{originalSource:`{
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
