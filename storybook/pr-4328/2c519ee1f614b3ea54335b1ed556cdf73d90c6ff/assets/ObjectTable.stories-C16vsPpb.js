import{j as i}from"./iframe-lON5AZ3L.js";import{O as p}from"./object-table-CY1HhWS5.js";import{E as c}from"./Employee-BAk2o20h.js";import{d as l,o as u,T as d,a as y}from"./objectTableStoryHelpers-bxOjwZYw.js";import"./preload-helper-CII01xYb.js";import"./Table-BSsDoVm_.js";import"./index-BbInquUP.js";import"./Dialog-DwoswbFK.js";import"./cross-CZfg3piu.js";import"./svgIconContainer-CX_rozDa.js";import"./useBaseUiId-COzPbt8W.js";import"./InternalBackdrop-BUdtJ2mO.js";import"./composite-ChlDDG92.js";import"./index-U5f43BN7.js";import"./index-CcwZGg1N.js";import"./index-D88RmGRP.js";import"./useEventCallback-ChKmlvki.js";import"./SkeletonBar-BoIeke2n.js";import"./LoadingCell-Di0K-zen.js";import"./ColumnConfigDialog-J1QlLMH5.js";import"./DraggableList-DQx5w-9B.js";import"./search-ZnUmH3zZ.js";import"./Input-BTUHBzsz.js";import"./useControlled-Bg_lHZoo.js";import"./Button-NLlVT-nC.js";import"./small-cross-E0MhYcPt.js";import"./ActionButton-fF4x8pwf.js";import"./Checkbox-BlCTNtaZ.js";import"./useValueChanged-DBAEDgpw.js";import"./CollapsiblePanel-CLfLwLQM.js";import"./MultiColumnSortDialog-DKk8lIBH.js";import"./MenuTrigger-o3B51z0I.js";import"./CompositeItem-ppbsSdS6.js";import"./ToolbarRootContext-Dh8fWcX2.js";import"./getDisabledMountTransitionStyles-Cfd1b-as.js";import"./getPseudoElementBounds-D_X7OILl.js";import"./chevron-down-B6vOrraR.js";import"./index-BDhDrjkY.js";import"./error-B77E7aT6.js";import"./BaseCbacBanner-BFErWSQa.js";import"./makeExternalStore-BPZMGY7I.js";import"./Tooltip-BEGKa3-T.js";import"./isObject-DX3EuMyF.js";import"./debounce-BWiznTrv.js";import"./useOsdkClient-mvo5kAdP.js";import"./tick-DG2wS06_.js";import"./DropdownField-CDUsrETz.js";import"./isEqual-bz5Rcl9o.js";import"./_baseIsEqual-DQZzxLKC.js";import"./withOsdkMetrics-CXO0MkNI.js";const{expect:e,screen:t,userEvent:T,within:f}=__STORYBOOK_MODULE_TEST__,de={...u,title:"Components/ObjectTable"},n={args:{objectType:c,columnDefinitions:l},parameters:{docs:{description:{story:"Minimal setup showing Employee data with default column definitions."},source:{code:"<ObjectTable objectType={Employee} />"}}},render:o=>i.jsx("div",{className:"object-table-container",style:{height:"600px"},children:i.jsx(p,{...o})}),play:async({canvasElement:o})=>{const a=f(o);await a.findByText(d),await y(a,"fullName"),await e(await t.findByRole("menuitem",{name:"Sort ascending"})).toBeInTheDocument(),await e(t.getByRole("menuitem",{name:"Sort descending"})).toBeInTheDocument(),await e(t.getByRole("menuitem",{name:"Pin column"})).toBeInTheDocument(),await e(t.getByRole("menuitem",{name:"Configure Columns"})).toBeInTheDocument(),await T.keyboard("{Escape}")}};var m,r,s;n.parameters={...n.parameters,docs:{...(m=n.parameters)==null?void 0:m.docs,source:{originalSource:`{
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
}`,...(s=(r=n.parameters)==null?void 0:r.docs)==null?void 0:s.source}}};const ye=["Default"];export{n as Default,ye as __namedExportsOrder,de as default};
