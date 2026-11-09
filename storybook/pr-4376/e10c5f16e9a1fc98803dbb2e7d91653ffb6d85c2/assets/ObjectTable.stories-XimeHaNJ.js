import{j as i}from"./iframe-tk5AUZuQ.js";import{O as p}from"./object-table-B_m970Gp.js";import{E as c}from"./Employee-BAk2o20h.js";import{d as l,o as u,T as d,a as y}from"./objectTableStoryHelpers-VHo4Larl.js";import"./preload-helper-CINJU3SU.js";import"./Table-DC4X-uKs.js";import"./index-DuoNBOcE.js";import"./Dialog-5aT20vLM.js";import"./cross-C-_HClWz.js";import"./svgIconContainer-C5eLdvbo.js";import"./useBaseUiId-DSKlezyU.js";import"./InternalBackdrop-B1AcuPvD.js";import"./composite-LaLb1mLt.js";import"./index-BoTbZ6Eb.js";import"./index-BCbjIOTn.js";import"./index-Coh0vjFh.js";import"./useEventCallback-BbRxqcyb.js";import"./SkeletonBar-YPfduG_R.js";import"./LoadingCell-Dcb9Vptb.js";import"./ColumnConfigDialog-DkCfAbb3.js";import"./DraggableList-D8LQyDx5.js";import"./search-CAMWt4DD.js";import"./Input-CZRpfSVM.js";import"./useControlled-BzYqp0YL.js";import"./Button-B5FtVpF4.js";import"./small-cross-B6tNLRU3.js";import"./ActionButton-CSRDKJzd.js";import"./Checkbox-DL47pYZc.js";import"./useValueChanged-Qi24qjjR.js";import"./CollapsiblePanel-BgTDE-ug.js";import"./MultiColumnSortDialog-xg5nxqpK.js";import"./MenuTrigger-D2vzXfUF.js";import"./CompositeItem-CQdT7qYH.js";import"./ToolbarRootContext-C3aNx3mE.js";import"./getDisabledMountTransitionStyles-DcBMmwJ-.js";import"./getPseudoElementBounds-C8QTD5NE.js";import"./chevron-down-D4rOKL_0.js";import"./index-iwECcacA.js";import"./error-CfTX2H1b.js";import"./BaseCbacBanner-CiTwUt4I.js";import"./makeExternalStore-DFFv7LCN.js";import"./Tooltip-_BU6PSEL.js";import"./isObject-Bt_3d07L.js";import"./debounce-Cf1xBobb.js";import"./useOsdkClient-B-_8O7Wa.js";import"./tick-BxfSV4pS.js";import"./DropdownField-Dsmc1z3i.js";import"./isEqual-CSe4j5db.js";import"./_baseIsEqual-DGYeXd6K.js";import"./withOsdkMetrics-4LSmwfdk.js";const{expect:e,screen:t,userEvent:T,within:f}=__STORYBOOK_MODULE_TEST__,de={...u,title:"Components/ObjectTable"},n={args:{objectType:c,columnDefinitions:l},parameters:{docs:{description:{story:"Minimal setup showing Employee data with default column definitions."},source:{code:"<ObjectTable objectType={Employee} />"}}},render:o=>i.jsx("div",{className:"object-table-container",style:{height:"600px"},children:i.jsx(p,{...o})}),play:async({canvasElement:o})=>{const a=f(o);await a.findByText(d),await y(a,"fullName"),await e(await t.findByRole("menuitem",{name:"Sort ascending"})).toBeInTheDocument(),await e(t.getByRole("menuitem",{name:"Sort descending"})).toBeInTheDocument(),await e(t.getByRole("menuitem",{name:"Pin column"})).toBeInTheDocument(),await e(t.getByRole("menuitem",{name:"Configure Columns"})).toBeInTheDocument(),await T.keyboard("{Escape}")}};var m,r,s;n.parameters={...n.parameters,docs:{...(m=n.parameters)==null?void 0:m.docs,source:{originalSource:`{
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
