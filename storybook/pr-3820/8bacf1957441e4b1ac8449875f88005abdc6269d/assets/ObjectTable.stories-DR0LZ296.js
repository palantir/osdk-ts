import{j as i}from"./iframe-MJCO4tWq.js";import{O as p}from"./object-table-D-GlTyjO.js";import{E as c}from"./Employee-BAk2o20h.js";import{d as l,o as u,T as d,a as y}from"./objectTableStoryHelpers-BAyM-xXD.js";import"./preload-helper-D59pX6Bk.js";import"./Table-C8_ftk3i.js";import"./index-DAbYsEZg.js";import"./Dialog-BWPDmK8c.js";import"./cross-DEhoIyVp.js";import"./svgIconContainer-B8wHNsBx.js";import"./useBaseUiId-BXP8AFv-.js";import"./InternalBackdrop-MR6IfjGm.js";import"./composite-hTc6teuV.js";import"./index-BsqhAQGv.js";import"./index-Cnl5b3P-.js";import"./index-BnwFJuQc.js";import"./useEventCallback-BPzMo7TT.js";import"./SkeletonBar-CX75rHhD.js";import"./LoadingCell-BGN9J0ek.js";import"./ColumnConfigDialog-DBSEwEtO.js";import"./DraggableList-CmJxYjz-.js";import"./search-BVQldDSv.js";import"./Input-MHB43ASx.js";import"./useControlled-Dk0yJJ1t.js";import"./isEqual-n6GizMeC.js";import"./isObject-DFPZ6jAe.js";import"./Button-1rEr2cfV.js";import"./ActionButton-D4tfAY4w.js";import"./Checkbox-CAwtHkMP.js";import"./useValueChanged-Cn8wgOUs.js";import"./CollapsiblePanel-DYoXGj66.js";import"./MultiColumnSortDialog-DzIjxMRI.js";import"./MenuTrigger-s8lBQKu_.js";import"./CompositeItem-DcPjr0YJ.js";import"./ToolbarRootContext-CPLLt6Rz.js";import"./getDisabledMountTransitionStyles-eHgkv2fX.js";import"./getPseudoElementBounds-khLPTJUT.js";import"./chevron-down-Cf4wAAwN.js";import"./index-BvLOcFYh.js";import"./error-PCzB-peL.js";import"./BaseCbacBanner-Dg9T5QMO.js";import"./makeExternalStore-__RES5Ho.js";import"./Tooltip-n6NFq6Kx.js";import"./PopoverPopup-CdSwPRLB.js";import"./toNumber-Dckp5_Ne.js";import"./useOsdkClient-Dw0UV9QQ.js";import"./tick-B6M1Y5e_.js";import"./DropdownField-DFmcqvd7.js";import"./withOsdkMetrics-D9xBIQld.js";const{expect:e,screen:t,userEvent:T,within:f}=__STORYBOOK_MODULE_TEST__,ue={...u,title:"Components/ObjectTable"},n={args:{objectType:c,columnDefinitions:l},parameters:{docs:{description:{story:"Minimal setup showing Employee data with default column definitions."},source:{code:"<ObjectTable objectType={Employee} />"}}},render:o=>i.jsx("div",{className:"object-table-container",style:{height:"600px"},children:i.jsx(p,{...o})}),play:async({canvasElement:o})=>{const a=f(o);await a.findByText(d),await y(a,"fullName"),await e(await t.findByRole("menuitem",{name:"Sort ascending"})).toBeInTheDocument(),await e(t.getByRole("menuitem",{name:"Sort descending"})).toBeInTheDocument(),await e(t.getByRole("menuitem",{name:"Pin column"})).toBeInTheDocument(),await e(t.getByRole("menuitem",{name:"Configure Columns"})).toBeInTheDocument(),await T.keyboard("{Escape}")}};var m,r,s;n.parameters={...n.parameters,docs:{...(m=n.parameters)==null?void 0:m.docs,source:{originalSource:`{
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
