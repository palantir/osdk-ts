import{j as i}from"./iframe-C8mLpNUa.js";import{O as p}from"./object-table-Fn6VhCUz.js";import{E as c}from"./Employee-BAk2o20h.js";import{d as l,o as u,T as d,a as y}from"./objectTableStoryHelpers-DCy0NYvM.js";import"./preload-helper-DcXm066Y.js";import"./Table-DaS1q166.js";import"./index-lplF09tk.js";import"./Dialog-CfN6DPR5.js";import"./cross-D4wCc5t9.js";import"./svgIconContainer-FbWIWLG7.js";import"./useBaseUiId-D95gWc2p.js";import"./InternalBackdrop-Cn1EpYhL.js";import"./composite-CWkYjCVm.js";import"./index-Dg7wmbR-.js";import"./index-Cq9Q8vBH.js";import"./index-BXj5gnEY.js";import"./useEventCallback-CN4ewGuU.js";import"./SkeletonBar-ld154GRO.js";import"./LoadingCell-CA5v2LhZ.js";import"./ColumnConfigDialog-COjR4SK3.js";import"./DraggableList-DeZ7Fjiz.js";import"./search-DYeQ-hhD.js";import"./Input-DiXIdJjT.js";import"./useControlled-Bc3_JC4e.js";import"./Button-FnUnITX8.js";import"./small-cross-BgFinUbq.js";import"./ActionButton-PfDCZTjW.js";import"./Checkbox-DQELhXo6.js";import"./useValueChanged-tRyHrxSy.js";import"./CollapsiblePanel-C1fuzRfs.js";import"./MultiColumnSortDialog-C0Kua6eP.js";import"./MenuTrigger-fIqLLZUS.js";import"./CompositeItem-CcQJlkPk.js";import"./ToolbarRootContext-iYdW5kZP.js";import"./getDisabledMountTransitionStyles-BnS01vxD.js";import"./getPseudoElementBounds-DkmGpNxR.js";import"./chevron-down-Dd1Lw4ZT.js";import"./index-C4XmNQrj.js";import"./error-Bi3sflIe.js";import"./BaseCbacBanner-C_L4y6FS.js";import"./makeExternalStore-BYvHqUPv.js";import"./Tooltip-BUg7Cwnf.js";import"./PopoverPopup-DVQDIUhl.js";import"./debounce-BHPqWnQs.js";import"./useOsdkClient-ClitNGRv.js";import"./tick-0TEkLF7E.js";import"./DropdownField-woqCFHu0.js";import"./isEqual-D1PRrFxr.js";import"./withOsdkMetrics-Dqf6ufdb.js";const{expect:e,screen:t,userEvent:T,within:f}=__STORYBOOK_MODULE_TEST__,ue={...u,title:"Components/ObjectTable"},n={args:{objectType:c,columnDefinitions:l},parameters:{docs:{description:{story:"Minimal setup showing Employee data with default column definitions."},source:{code:"<ObjectTable objectType={Employee} />"}}},render:o=>i.jsx("div",{className:"object-table-container",style:{height:"600px"},children:i.jsx(p,{...o})}),play:async({canvasElement:o})=>{const a=f(o);await a.findByText(d),await y(a,"fullName"),await e(await t.findByRole("menuitem",{name:"Sort ascending"})).toBeInTheDocument(),await e(t.getByRole("menuitem",{name:"Sort descending"})).toBeInTheDocument(),await e(t.getByRole("menuitem",{name:"Pin column"})).toBeInTheDocument(),await e(t.getByRole("menuitem",{name:"Configure Columns"})).toBeInTheDocument(),await T.keyboard("{Escape}")}};var m,r,s;n.parameters={...n.parameters,docs:{...(m=n.parameters)==null?void 0:m.docs,source:{originalSource:`{
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
