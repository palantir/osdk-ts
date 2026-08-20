import{j as i}from"./iframe-4oHGkuTU.js";import{O as p}from"./object-table-ChWef5YK.js";import{E as c}from"./Employee-BAk2o20h.js";import{d as l,o as u,T as d,a as y}from"./objectTableStoryHelpers-C-5sN9Oh.js";import"./preload-helper-CaPHuCn3.js";import"./Table-DjySsBqf.js";import"./index-kQMuiEEZ.js";import"./Dialog-BwJ3bvLD.js";import"./cross-CS-E3Jqr.js";import"./svgIconContainer-BYtzLwSJ.js";import"./useBaseUiId-L69EryzD.js";import"./InternalBackdrop-DLQ-XQ1Q.js";import"./composite-DvY8KKq7.js";import"./index-CdFiVlz_.js";import"./index-MlSSfkvS.js";import"./index-hJLvGUeE.js";import"./useEventCallback-B3dipcxV.js";import"./SkeletonBar-3byQ7UIl.js";import"./LoadingCell-CrrCVNnE.js";import"./ColumnConfigDialog-BdR0qbLi.js";import"./DraggableList-SUPZ4Dlf.js";import"./search-CzC2mfci.js";import"./Input-CMGw5uoM.js";import"./useControlled-DqhxuUIS.js";import"./isEqual-Bt8_Qt01.js";import"./isObject-3f4cHVEZ.js";import"./Button-DuiD40L5.js";import"./ActionButton-B0hzXAbp.js";import"./Checkbox-Bgc8LYUw.js";import"./useValueChanged-D4XGILHx.js";import"./CollapsiblePanel-BF1Z7bkI.js";import"./MultiColumnSortDialog-TWdhu7PG.js";import"./MenuTrigger-BeH_kL2c.js";import"./CompositeItem-Bws-ThTH.js";import"./ToolbarRootContext-Dnje_Y91.js";import"./getDisabledMountTransitionStyles-XzcSIywQ.js";import"./getPseudoElementBounds-DYKFGKba.js";import"./chevron-down-BAfkw_KU.js";import"./index-BCA2Tmmy.js";import"./error-XGL3A7TA.js";import"./BaseCbacBanner-B9E0Bt9v.js";import"./makeExternalStore-DF89X3xe.js";import"./Tooltip-KVrRIRvv.js";import"./PopoverPopup-BUWPqtBC.js";import"./toNumber-DRlo2dDs.js";import"./useOsdkClient-MPynvfJk.js";import"./tick-CoWZRvKt.js";import"./DropdownField-Bqc45FPs.js";import"./withOsdkMetrics-C3D8HdW9.js";const{expect:e,screen:t,userEvent:T,within:f}=__STORYBOOK_MODULE_TEST__,ue={...u,title:"Components/ObjectTable"},n={args:{objectType:c,columnDefinitions:l},parameters:{docs:{description:{story:"Minimal setup showing Employee data with default column definitions."},source:{code:"<ObjectTable objectType={Employee} />"}}},render:o=>i.jsx("div",{className:"object-table-container",style:{height:"600px"},children:i.jsx(p,{...o})}),play:async({canvasElement:o})=>{const a=f(o);await a.findByText(d),await y(a,"fullName"),await e(await t.findByRole("menuitem",{name:"Sort ascending"})).toBeInTheDocument(),await e(t.getByRole("menuitem",{name:"Sort descending"})).toBeInTheDocument(),await e(t.getByRole("menuitem",{name:"Pin column"})).toBeInTheDocument(),await e(t.getByRole("menuitem",{name:"Configure Columns"})).toBeInTheDocument(),await T.keyboard("{Escape}")}};var m,r,s;n.parameters={...n.parameters,docs:{...(m=n.parameters)==null?void 0:m.docs,source:{originalSource:`{
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
