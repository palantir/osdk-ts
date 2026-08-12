import{j as i}from"./iframe-CJTx5Nc3.js";import{O as p}from"./object-table-DyOqSe-8.js";import{E as c}from"./Employee-BAk2o20h.js";import{d as l,o as u,T as d,a as y}from"./objectTableStoryHelpers-CB0Ek5ys.js";import"./preload-helper-D-r58fd9.js";import"./Table-DA7olwlr.js";import"./index-C8rYvdZc.js";import"./Dialog-DlZ87JM_.js";import"./cross-CfGQeXwx.js";import"./svgIconContainer-BTsaG1Ft.js";import"./useBaseUiId-BzozfAEW.js";import"./InternalBackdrop-JVLM0CJL.js";import"./composite-Dz_mNTG5.js";import"./index-DGIB4jaL.js";import"./index-eHvJavxO.js";import"./index-CrDmHwix.js";import"./useEventCallback-CvmSibw0.js";import"./SkeletonBar-DnrDBLVU.js";import"./LoadingCell-DP2oEWNp.js";import"./ColumnConfigDialog-BWUt-9yZ.js";import"./DraggableList-DPZEgeQ0.js";import"./search-CjC9oxyN.js";import"./Input-ByoS9MHC.js";import"./useControlled-BBTN_Td4.js";import"./isEqual--jkB0sy4.js";import"./isObject-TJFlXUPA.js";import"./Button-DQWGETyO.js";import"./ActionButton-EZQQ7T9t.js";import"./Checkbox-D1eFT7vV.js";import"./useValueChanged-DBSeOQ5t.js";import"./CollapsiblePanel-CZ65pbEl.js";import"./MultiColumnSortDialog-Ds83I1sR.js";import"./MenuTrigger-CPWE0kcq.js";import"./CompositeItem-BY4abYzO.js";import"./ToolbarRootContext-B0uHWv9_.js";import"./getDisabledMountTransitionStyles-D6YGvq-L.js";import"./getPseudoElementBounds-BM5Y6tz_.js";import"./chevron-down-CXfwTRt6.js";import"./index-IEnbKD5-.js";import"./error-K1PirtOR.js";import"./BaseCbacBanner-BohDFMCb.js";import"./makeExternalStore-Dns-qLi8.js";import"./Tooltip-cN5GRFi4.js";import"./PopoverPopup-mDbyrgV-.js";import"./toNumber-DvrP7yL-.js";import"./useOsdkClient-CFJudYTm.js";import"./tick-Bnbd9C_X.js";import"./DropdownField-C7J7DVpc.js";import"./withOsdkMetrics-CJf0ufYd.js";const{expect:e,screen:t,userEvent:T,within:f}=__STORYBOOK_MODULE_TEST__,ue={...u,title:"Components/ObjectTable"},n={args:{objectType:c,columnDefinitions:l},parameters:{docs:{description:{story:"Minimal setup showing Employee data with default column definitions."},source:{code:"<ObjectTable objectType={Employee} />"}}},render:o=>i.jsx("div",{className:"object-table-container",style:{height:"600px"},children:i.jsx(p,{...o})}),play:async({canvasElement:o})=>{const a=f(o);await a.findByText(d),await y(a,"fullName"),await e(await t.findByRole("menuitem",{name:"Sort ascending"})).toBeInTheDocument(),await e(t.getByRole("menuitem",{name:"Sort descending"})).toBeInTheDocument(),await e(t.getByRole("menuitem",{name:"Pin column"})).toBeInTheDocument(),await e(t.getByRole("menuitem",{name:"Configure Columns"})).toBeInTheDocument(),await T.keyboard("{Escape}")}};var m,r,s;n.parameters={...n.parameters,docs:{...(m=n.parameters)==null?void 0:m.docs,source:{originalSource:`{
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
