import{j as i}from"./iframe-eyZPO-r8.js";import{O as p}from"./object-table-DngYOc4G.js";import{E as c}from"./Employee-BAk2o20h.js";import{d as l,o as u,T as d,a as y}from"./objectTableStoryHelpers-BCMEElbQ.js";import"./preload-helper-D1V99eN4.js";import"./Table-dxXXc1zF.js";import"./index-Gdnr7hdE.js";import"./Dialog-DF5CklX0.js";import"./cross-BDtR8km0.js";import"./svgIconContainer-BYYEkT6q.js";import"./useBaseUiId-DuycL1XH.js";import"./InternalBackdrop-47eHZtxY.js";import"./composite-BQIBWjV1.js";import"./index-BW1bbNNA.js";import"./index-BSykaiWk.js";import"./index-DQ49IRLG.js";import"./useEventCallback-0WugJweh.js";import"./SkeletonBar-Czp6H1QV.js";import"./LoadingCell-D5uFu_3a.js";import"./ColumnConfigDialog-DA84oAQ9.js";import"./DraggableList-h1DTHUPL.js";import"./search-C_tBHa91.js";import"./Input-CwJlG5HX.js";import"./useControlled-RnivCiUR.js";import"./Button-DYsGegFs.js";import"./small-cross-DM_xhuPC.js";import"./ActionButton-DepzqUcv.js";import"./Checkbox-ByNijBVh.js";import"./useValueChanged-gzjrwQir.js";import"./CollapsiblePanel-CpdU7F-n.js";import"./MultiColumnSortDialog-DNlGctld.js";import"./MenuTrigger-Ddng4r_f.js";import"./CompositeItem-D72MffoG.js";import"./ToolbarRootContext-DsL0BSnt.js";import"./getDisabledMountTransitionStyles-D1KI5R6m.js";import"./getPseudoElementBounds-DGpPk1TO.js";import"./chevron-down-C6BwuTUh.js";import"./index-Dhfw8vgu.js";import"./error-vxQVtw9f.js";import"./BaseCbacBanner-K41hGtlu.js";import"./makeExternalStore-TlPHbOId.js";import"./Tooltip-UpAI-IXV.js";import"./PopoverPopup-D20NUS2f.js";import"./debounce-DpI20L6M.js";import"./useOsdkClient-DpWMI8Fp.js";import"./tick-DL7gzaWC.js";import"./DropdownField-B28WZREh.js";import"./isEqual-fw4VSZCU.js";import"./withOsdkMetrics-O_Dwj_Kt.js";const{expect:e,screen:t,userEvent:T,within:f}=__STORYBOOK_MODULE_TEST__,ue={...u,title:"Components/ObjectTable"},n={args:{objectType:c,columnDefinitions:l},parameters:{docs:{description:{story:"Minimal setup showing Employee data with default column definitions."},source:{code:"<ObjectTable objectType={Employee} />"}}},render:o=>i.jsx("div",{className:"object-table-container",style:{height:"600px"},children:i.jsx(p,{...o})}),play:async({canvasElement:o})=>{const a=f(o);await a.findByText(d),await y(a,"fullName"),await e(await t.findByRole("menuitem",{name:"Sort ascending"})).toBeInTheDocument(),await e(t.getByRole("menuitem",{name:"Sort descending"})).toBeInTheDocument(),await e(t.getByRole("menuitem",{name:"Pin column"})).toBeInTheDocument(),await e(t.getByRole("menuitem",{name:"Configure Columns"})).toBeInTheDocument(),await T.keyboard("{Escape}")}};var m,r,s;n.parameters={...n.parameters,docs:{...(m=n.parameters)==null?void 0:m.docs,source:{originalSource:`{
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
