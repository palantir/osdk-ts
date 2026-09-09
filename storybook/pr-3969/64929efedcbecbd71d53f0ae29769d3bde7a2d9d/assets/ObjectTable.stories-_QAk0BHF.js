import{j as i}from"./iframe-Cha5bzcQ.js";import{O as p}from"./object-table-CAzCMSOu.js";import{E as c}from"./Employee-BAk2o20h.js";import{d as l,o as u,T as d,a as y}from"./objectTableStoryHelpers-aY_PyRgN.js";import"./preload-helper-DTIBEWF3.js";import"./Table-D14BkX5X.js";import"./index-Bm3NhGlH.js";import"./Dialog-CUzVZoox.js";import"./cross-sYD9GiNz.js";import"./svgIconContainer-DA_Ed81f.js";import"./useBaseUiId-CoAf4zJ1.js";import"./InternalBackdrop-5-0DlwQk.js";import"./composite-DwMGYBdi.js";import"./index-BuHsw6tX.js";import"./index-CRCMyzG5.js";import"./index-BLVvXBm0.js";import"./useEventCallback-C_dAqdfF.js";import"./SkeletonBar-B6h9Ova2.js";import"./LoadingCell-CEXOIvr5.js";import"./ColumnConfigDialog-2XfPaajD.js";import"./DraggableList-CGZqRsIG.js";import"./search-LEzBZeqH.js";import"./Input-CS3x1fIq.js";import"./useControlled-BsFUux1R.js";import"./Button-KiGmPYx_.js";import"./small-cross-Cqpx81EU.js";import"./ActionButton-DQjspSLx.js";import"./Checkbox-CfFeXPwz.js";import"./useValueChanged-DX1fsVrr.js";import"./CollapsiblePanel-Dal__8LV.js";import"./MultiColumnSortDialog-sKVV6RHu.js";import"./MenuTrigger-B9H-qCGa.js";import"./CompositeItem-CI63tMYo.js";import"./ToolbarRootContext-BCJzUdOe.js";import"./getDisabledMountTransitionStyles-DtsqVZlu.js";import"./getPseudoElementBounds-BL7IKUOX.js";import"./chevron-down-BImkdPvb.js";import"./index-Wr7-HV8X.js";import"./error-JfmuoEvN.js";import"./BaseCbacBanner-DHmN-_jc.js";import"./makeExternalStore-DIkaw39a.js";import"./Tooltip-COCG5jN8.js";import"./PopoverPopup-DLpPXX4a.js";import"./debounce-CCWjtmn1.js";import"./useOsdkClient-BW0sTjCm.js";import"./tick-ADT_jvRp.js";import"./DropdownField-CLg5FybE.js";import"./isEqual-BermXjtW.js";import"./withOsdkMetrics-5Xu_aVjO.js";const{expect:e,screen:t,userEvent:T,within:f}=__STORYBOOK_MODULE_TEST__,ue={...u,title:"Components/ObjectTable"},n={args:{objectType:c,columnDefinitions:l},parameters:{docs:{description:{story:"Minimal setup showing Employee data with default column definitions."},source:{code:"<ObjectTable objectType={Employee} />"}}},render:o=>i.jsx("div",{className:"object-table-container",style:{height:"600px"},children:i.jsx(p,{...o})}),play:async({canvasElement:o})=>{const a=f(o);await a.findByText(d),await y(a,"fullName"),await e(await t.findByRole("menuitem",{name:"Sort ascending"})).toBeInTheDocument(),await e(t.getByRole("menuitem",{name:"Sort descending"})).toBeInTheDocument(),await e(t.getByRole("menuitem",{name:"Pin column"})).toBeInTheDocument(),await e(t.getByRole("menuitem",{name:"Configure Columns"})).toBeInTheDocument(),await T.keyboard("{Escape}")}};var m,r,s;n.parameters={...n.parameters,docs:{...(m=n.parameters)==null?void 0:m.docs,source:{originalSource:`{
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
