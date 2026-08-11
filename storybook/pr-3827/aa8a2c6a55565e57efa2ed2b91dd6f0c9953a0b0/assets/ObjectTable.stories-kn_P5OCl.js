import{j as i}from"./iframe-BB2E5Jix.js";import{O as p}from"./object-table-Cq8EQafa.js";import{E as c}from"./Employee-BAk2o20h.js";import{d as l,o as u,T as d,a as y}from"./objectTableStoryHelpers-KiyRETm-.js";import"./preload-helper-XstBZj0v.js";import"./Table-C_RaYKNB.js";import"./index-zGb1pbmH.js";import"./Dialog-Caobyqao.js";import"./cross-B8YgiCYl.js";import"./svgIconContainer-CXjFTKQc.js";import"./useBaseUiId-T8MHyWrJ.js";import"./InternalBackdrop-BU8oV8wN.js";import"./composite-DQwmFGUd.js";import"./index-Cft78AYh.js";import"./index-CLogktU3.js";import"./index-CDZCasWv.js";import"./useEventCallback-bXtnurx0.js";import"./SkeletonBar-DOM6sWKN.js";import"./LoadingCell-CEE6ECLC.js";import"./ColumnConfigDialog-i_CcXCPU.js";import"./DraggableList-B4O4-Uk4.js";import"./search-DPNy6EUf.js";import"./Input-vhcxgD7F.js";import"./useControlled-4jwl_yb5.js";import"./isEqual-DpkjvpyX.js";import"./isObject-cuWUV_SB.js";import"./Button-JlhJjdd0.js";import"./ActionButton-DzEBxPTA.js";import"./Checkbox-BQydhIvd.js";import"./useValueChanged-C37wvZ3p.js";import"./CollapsiblePanel-Dz0U_34e.js";import"./MultiColumnSortDialog-D_m8j8zj.js";import"./MenuTrigger-CS3ve4y6.js";import"./CompositeItem-Cc57-add.js";import"./ToolbarRootContext-VydJXhkq.js";import"./getDisabledMountTransitionStyles-TDufTSfj.js";import"./getPseudoElementBounds-ZgCYbSXN.js";import"./chevron-down-C_RItkCu.js";import"./index-D-e5E8TN.js";import"./error-DMB-1Uz3.js";import"./BaseCbacBanner-D-RccEMB.js";import"./makeExternalStore-D2tsWs0v.js";import"./Tooltip-DzUvJnVd.js";import"./PopoverPopup-CCnnPXu2.js";import"./toNumber-DxI2SU5x.js";import"./useOsdkClient-CtNTkVn8.js";import"./tick-vmRc4WsE.js";import"./DropdownField-5ckOa_G6.js";import"./withOsdkMetrics-D-4z6JPU.js";const{expect:e,screen:t,userEvent:T,within:f}=__STORYBOOK_MODULE_TEST__,ue={...u,title:"Components/ObjectTable"},n={args:{objectType:c,columnDefinitions:l},parameters:{docs:{description:{story:"Minimal setup showing Employee data with default column definitions."},source:{code:"<ObjectTable objectType={Employee} />"}}},render:o=>i.jsx("div",{className:"object-table-container",style:{height:"600px"},children:i.jsx(p,{...o})}),play:async({canvasElement:o})=>{const a=f(o);await a.findByText(d),await y(a,"fullName"),await e(await t.findByRole("menuitem",{name:"Sort ascending"})).toBeInTheDocument(),await e(t.getByRole("menuitem",{name:"Sort descending"})).toBeInTheDocument(),await e(t.getByRole("menuitem",{name:"Pin column"})).toBeInTheDocument(),await e(t.getByRole("menuitem",{name:"Configure Columns"})).toBeInTheDocument(),await T.keyboard("{Escape}")}};var m,r,s;n.parameters={...n.parameters,docs:{...(m=n.parameters)==null?void 0:m.docs,source:{originalSource:`{
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
