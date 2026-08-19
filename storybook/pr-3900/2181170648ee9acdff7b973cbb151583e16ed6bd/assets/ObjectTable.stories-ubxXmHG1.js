import{j as i}from"./iframe-m2fxxn3a.js";import{O as p}from"./object-table-Co-Q6jHl.js";import{E as c}from"./Employee-BAk2o20h.js";import{d as l,o as u,T as d,a as y}from"./objectTableStoryHelpers-BZiBaDO7.js";import"./preload-helper-wkPSwmAr.js";import"./Table-CJbVUNcD.js";import"./index-ByBw6x6u.js";import"./Dialog-CHI7KPwp.js";import"./cross-BjXIqjCw.js";import"./svgIconContainer-DSI33hOY.js";import"./useBaseUiId-DUlaUAbC.js";import"./InternalBackdrop-6ROzrmGv.js";import"./composite-BrA88D7Q.js";import"./index-DSw-eeDJ.js";import"./index-D_9lQBmv.js";import"./index-BNBfbysQ.js";import"./useEventCallback-B49kAxyt.js";import"./SkeletonBar-DSTs_14a.js";import"./LoadingCell-BZScBSiV.js";import"./ColumnConfigDialog-CaiccqAZ.js";import"./DraggableList-AYblD6NO.js";import"./search-CdVtB6NL.js";import"./Input-D0L01xSu.js";import"./useControlled-B65cfgNR.js";import"./Button-DeKiGiVH.js";import"./small-cross-BQdIyLz0.js";import"./ActionButton-Mjq4BYrm.js";import"./Checkbox-DicxMHcf.js";import"./useValueChanged-Bp4t2mo-.js";import"./CollapsiblePanel-BLUOZyAb.js";import"./MultiColumnSortDialog-DruHNqzX.js";import"./MenuTrigger-qcf8JcB3.js";import"./CompositeItem-CV8z8cEs.js";import"./ToolbarRootContext-CrhCu0KJ.js";import"./getDisabledMountTransitionStyles-qUK7fg53.js";import"./getPseudoElementBounds-CwvcssCs.js";import"./chevron-down-CsrzPGt_.js";import"./index-CyxliH8w.js";import"./error-E41DUfY_.js";import"./BaseCbacBanner-BK8GeR-x.js";import"./makeExternalStore-CtrMLH82.js";import"./Tooltip-DmuQYm1m.js";import"./PopoverPopup-wwpAfRbw.js";import"./debounce-D8Y2PRcP.js";import"./useOsdkClient-CVjbyjiN.js";import"./tick-Mt7tAvfN.js";import"./DropdownField-BsPjmbhu.js";import"./isEqual-BtYEUQSq.js";import"./withOsdkMetrics-6b_qk_af.js";const{expect:e,screen:t,userEvent:T,within:f}=__STORYBOOK_MODULE_TEST__,ue={...u,title:"Components/ObjectTable"},n={args:{objectType:c,columnDefinitions:l},parameters:{docs:{description:{story:"Minimal setup showing Employee data with default column definitions."},source:{code:"<ObjectTable objectType={Employee} />"}}},render:o=>i.jsx("div",{className:"object-table-container",style:{height:"600px"},children:i.jsx(p,{...o})}),play:async({canvasElement:o})=>{const a=f(o);await a.findByText(d),await y(a,"fullName"),await e(await t.findByRole("menuitem",{name:"Sort ascending"})).toBeInTheDocument(),await e(t.getByRole("menuitem",{name:"Sort descending"})).toBeInTheDocument(),await e(t.getByRole("menuitem",{name:"Pin column"})).toBeInTheDocument(),await e(t.getByRole("menuitem",{name:"Configure Columns"})).toBeInTheDocument(),await T.keyboard("{Escape}")}};var m,r,s;n.parameters={...n.parameters,docs:{...(m=n.parameters)==null?void 0:m.docs,source:{originalSource:`{
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
