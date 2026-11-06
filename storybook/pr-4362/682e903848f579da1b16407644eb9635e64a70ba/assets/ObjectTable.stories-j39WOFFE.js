import{j as i}from"./iframe-BNBZBstC.js";import{O as p}from"./object-table-BYwjMuX-.js";import{E as c}from"./Employee-BAk2o20h.js";import{d as l,o as u,T as d,a as y}from"./objectTableStoryHelpers-CxCeeLTc.js";import"./preload-helper-CnYrZllf.js";import"./Table-CXBfrNrR.js";import"./index-Cnm8VChd.js";import"./Dialog-RuUnz3l_.js";import"./cross-BBwfk0Yp.js";import"./svgIconContainer-Dn93O-Mo.js";import"./useBaseUiId-DT3QZnc6.js";import"./InternalBackdrop-DtBSnFoc.js";import"./composite-HrpU287b.js";import"./index-BH-plJ59.js";import"./index-CjrOmp5t.js";import"./index-CkDpN7v3.js";import"./useEventCallback-CxEm-vEP.js";import"./SkeletonBar-FnJRED2m.js";import"./LoadingCell-DdhnfFp4.js";import"./ColumnConfigDialog-C6WiL4IG.js";import"./DraggableList-DsRvbsQQ.js";import"./search-DByY8x3h.js";import"./Input-CHUFXkF3.js";import"./useControlled-hyr-Ee75.js";import"./Button-Dadxr29r.js";import"./small-cross-rhx74hoP.js";import"./ActionButton-Bdd2VFqy.js";import"./Checkbox-gAFJ0O_f.js";import"./useValueChanged-a5BaAUtx.js";import"./CollapsiblePanel-x-PqwnJ-.js";import"./MultiColumnSortDialog-B9BvTXjK.js";import"./MenuTrigger-Ch2CkAIa.js";import"./CompositeItem-CfUbW9s0.js";import"./ToolbarRootContext-DAKa1svD.js";import"./getDisabledMountTransitionStyles-CnacvZJ_.js";import"./getPseudoElementBounds-CboReYEL.js";import"./chevron-down-BqKYZ2w5.js";import"./index-s_lknIcx.js";import"./error-HeD-UTCd.js";import"./BaseCbacBanner-Xyw-G0Km.js";import"./makeExternalStore-Ba0UZiRg.js";import"./Tooltip-DPMltsX0.js";import"./isObject-C42gTfZZ.js";import"./debounce-yCFfzmLO.js";import"./useOsdkClient-BWShqPoN.js";import"./tick-Bqx6qZZ9.js";import"./DropdownField-Dt-RrUgw.js";import"./isEqual-DKe9hHKP.js";import"./_baseIsEqual-CmMkSghX.js";import"./withOsdkMetrics-Db562hlY.js";const{expect:e,screen:t,userEvent:T,within:f}=__STORYBOOK_MODULE_TEST__,de={...u,title:"Components/ObjectTable"},n={args:{objectType:c,columnDefinitions:l},parameters:{docs:{description:{story:"Minimal setup showing Employee data with default column definitions."},source:{code:"<ObjectTable objectType={Employee} />"}}},render:o=>i.jsx("div",{className:"object-table-container",style:{height:"600px"},children:i.jsx(p,{...o})}),play:async({canvasElement:o})=>{const a=f(o);await a.findByText(d),await y(a,"fullName"),await e(await t.findByRole("menuitem",{name:"Sort ascending"})).toBeInTheDocument(),await e(t.getByRole("menuitem",{name:"Sort descending"})).toBeInTheDocument(),await e(t.getByRole("menuitem",{name:"Pin column"})).toBeInTheDocument(),await e(t.getByRole("menuitem",{name:"Configure Columns"})).toBeInTheDocument(),await T.keyboard("{Escape}")}};var m,r,s;n.parameters={...n.parameters,docs:{...(m=n.parameters)==null?void 0:m.docs,source:{originalSource:`{
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
