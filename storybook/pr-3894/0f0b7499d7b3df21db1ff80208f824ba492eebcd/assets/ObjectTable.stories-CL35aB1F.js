import{j as i}from"./iframe-C7GOuxD1.js";import{O as p}from"./object-table-dWlD71lL.js";import{E as c}from"./Employee-BAk2o20h.js";import{d as l,o as u,T as d,a as y}from"./objectTableStoryHelpers-BFLGSIpm.js";import"./preload-helper-cLq0tmXV.js";import"./Table-L0bmwFCN.js";import"./index-DBBBWmqo.js";import"./Dialog-BDIg23NE.js";import"./cross-CeilH9rC.js";import"./svgIconContainer-C5oTgJel.js";import"./useBaseUiId-BenimXYg.js";import"./InternalBackdrop-BVf0vh6D.js";import"./composite-Cgb7pd84.js";import"./index-CQ4MzVYN.js";import"./index-DuOry3-s.js";import"./index-CS8Y0uId.js";import"./useEventCallback-BjL9jj3Y.js";import"./SkeletonBar-T4H5mM_R.js";import"./LoadingCell-BjFAbchK.js";import"./ColumnConfigDialog-I-C9Eoid.js";import"./DraggableList-D5qaZpJa.js";import"./search-B3SFcxMO.js";import"./Input-D4NdRTVJ.js";import"./useControlled-B_f3t71o.js";import"./Button-BUb3i5ek.js";import"./small-cross-DxtvnSNv.js";import"./ActionButton-nA6tqUpX.js";import"./Checkbox-Cz1MnAyf.js";import"./useValueChanged-BrLcnIBL.js";import"./CollapsiblePanel-C8GrEU9w.js";import"./MultiColumnSortDialog-DZH5EtZC.js";import"./MenuTrigger-h0mNM3q6.js";import"./CompositeItem-CyvxmxVc.js";import"./ToolbarRootContext-BdzdDLJF.js";import"./getDisabledMountTransitionStyles-9hFn6TYo.js";import"./getPseudoElementBounds-DmIzNuzx.js";import"./chevron-down-D0zt0lGj.js";import"./index-DJdnGM3o.js";import"./error-Gwb1RVKo.js";import"./BaseCbacBanner-DnINnSdh.js";import"./makeExternalStore-Bn6Cuzy6.js";import"./Tooltip-CPPwKixL.js";import"./PopoverPopup-CXEQhiRY.js";import"./debounce-Bny3E4j5.js";import"./useOsdkClient-DfGQp-uN.js";import"./tick-CQmS5E0-.js";import"./DropdownField-hrh1cG0I.js";import"./isEqual-ic_Rm2u_.js";import"./withOsdkMetrics-BaeX4vAH.js";const{expect:e,screen:t,userEvent:T,within:f}=__STORYBOOK_MODULE_TEST__,ue={...u,title:"Components/ObjectTable"},n={args:{objectType:c,columnDefinitions:l},parameters:{docs:{description:{story:"Minimal setup showing Employee data with default column definitions."},source:{code:"<ObjectTable objectType={Employee} />"}}},render:o=>i.jsx("div",{className:"object-table-container",style:{height:"600px"},children:i.jsx(p,{...o})}),play:async({canvasElement:o})=>{const a=f(o);await a.findByText(d),await y(a,"fullName"),await e(await t.findByRole("menuitem",{name:"Sort ascending"})).toBeInTheDocument(),await e(t.getByRole("menuitem",{name:"Sort descending"})).toBeInTheDocument(),await e(t.getByRole("menuitem",{name:"Pin column"})).toBeInTheDocument(),await e(t.getByRole("menuitem",{name:"Configure Columns"})).toBeInTheDocument(),await T.keyboard("{Escape}")}};var m,r,s;n.parameters={...n.parameters,docs:{...(m=n.parameters)==null?void 0:m.docs,source:{originalSource:`{
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
