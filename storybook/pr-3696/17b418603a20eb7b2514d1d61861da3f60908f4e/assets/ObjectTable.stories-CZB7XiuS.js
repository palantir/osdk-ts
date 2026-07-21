import{j as i}from"./iframe-Dl62X5ic.js";import{O as p}from"./object-table-DzRA7Mxo.js";import{E as c}from"./Employee-BAk2o20h.js";import{d as l,o as u,T as d,a as y}from"./objectTableStoryHelpers-DYVMmg_4.js";import"./preload-helper-9xagDZWN.js";import"./Table-D9MrzOm8.js";import"./index-r58F3SRz.js";import"./Dialog-CJTpl5lb.js";import"./cross-Dz9bobDU.js";import"./svgIconContainer-CDF0MBN3.js";import"./useBaseUiId-BZmuLScT.js";import"./InternalBackdrop-CUbDm0mk.js";import"./composite-5K-iGM63.js";import"./index-CnSx04IC.js";import"./index-VVu8Dx_K.js";import"./index-C43hAumx.js";import"./useEventCallback-C6wmA8fg.js";import"./SkeletonBar-tl3J6Agl.js";import"./LoadingCell-2Wi9jC-f.js";import"./ColumnConfigDialog-Ctz3fxGV.js";import"./DraggableList-D_k5i4OI.js";import"./search-C2kc8148.js";import"./Input-D7jaCKwy.js";import"./useControlled-DXjG9kLU.js";import"./Button-ChSQqWTn.js";import"./small-cross-XscPhA7b.js";import"./ActionButton-Clvxcs8u.js";import"./Checkbox-Dq_mlxsJ.js";import"./useValueChanged-BDnmFJ1P.js";import"./CollapsiblePanel-6wlgdqmH.js";import"./MultiColumnSortDialog-CsS0qCMr.js";import"./MenuTrigger-E2gBZa0U.js";import"./CompositeItem-9M5fDXNa.js";import"./ToolbarRootContext-Bw5Q4Aok.js";import"./getDisabledMountTransitionStyles-fFVklT7J.js";import"./getPseudoElementBounds-TACN8Mem.js";import"./chevron-down-B-xg4ZpH.js";import"./index-KYGZGSHD.js";import"./error-Bdp21cmx.js";import"./BaseCbacBanner-Bl-_XnGR.js";import"./makeExternalStore-BL6KvBj8.js";import"./Tooltip-Batd7piz.js";import"./PopoverPopup-C0r9zNTS.js";import"./toNumber-CN-GuG5F.js";import"./useOsdkClient-CIHFFW4f.js";import"./tick-BamqF3vZ.js";import"./DropdownField-BN8T2Zfa.js";import"./withOsdkMetrics-Ycu2Npgr.js";const{expect:e,screen:t,userEvent:T,within:f}=__STORYBOOK_MODULE_TEST__,le={...u,title:"Components/ObjectTable"},n={args:{objectType:c,columnDefinitions:l},parameters:{docs:{description:{story:"Minimal setup showing Employee data with default column definitions."},source:{code:"<ObjectTable objectType={Employee} />"}}},render:o=>i.jsx("div",{className:"object-table-container",style:{height:"600px"},children:i.jsx(p,{...o})}),play:async({canvasElement:o})=>{const a=f(o);await a.findByText(d),await y(a,"fullName"),await e(await t.findByRole("menuitem",{name:"Sort ascending"})).toBeInTheDocument(),await e(t.getByRole("menuitem",{name:"Sort descending"})).toBeInTheDocument(),await e(t.getByRole("menuitem",{name:"Pin column"})).toBeInTheDocument(),await e(t.getByRole("menuitem",{name:"Configure Columns"})).toBeInTheDocument(),await T.keyboard("{Escape}")}};var m,r,s;n.parameters={...n.parameters,docs:{...(m=n.parameters)==null?void 0:m.docs,source:{originalSource:`{
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
}`,...(s=(r=n.parameters)==null?void 0:r.docs)==null?void 0:s.source}}};const ue=["Default"];export{n as Default,ue as __namedExportsOrder,le as default};
