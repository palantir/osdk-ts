import{j as i}from"./iframe-DmCw4giF.js";import{O as p}from"./object-table-DkGVq2zd.js";import{E as c}from"./Employee-BAk2o20h.js";import{d as l,o as u,T as d,a as y}from"./objectTableStoryHelpers-BmlRIlFR.js";import"./preload-helper-BqMEmH-P.js";import"./Table-CwyQpoEA.js";import"./index-By5PjpkV.js";import"./Dialog-CMvNXpmm.js";import"./cross-C5gUbpJ8.js";import"./svgIconContainer-BGxGx4oi.js";import"./useBaseUiId-CMgGmprv.js";import"./InternalBackdrop-CTOyXC2J.js";import"./composite-SBWrYybR.js";import"./index-D7OuGC6M.js";import"./index-Cl_9RNwe.js";import"./index-DMn3axbQ.js";import"./useEventCallback-VtqApLju.js";import"./SkeletonBar-B0SBXBFN.js";import"./LoadingCell-BHNKzm22.js";import"./ColumnConfigDialog-Dj08jxeR.js";import"./DraggableList-I411jCsC.js";import"./search-BX5NV_IZ.js";import"./Input-D0tfRr17.js";import"./useControlled-CUsv9bVr.js";import"./Button-Bg11yYPT.js";import"./small-cross-CctzTCfJ.js";import"./ActionButton-CYsmhCxj.js";import"./Checkbox-CviTf8nv.js";import"./useValueChanged-L-C_U2yt.js";import"./CollapsiblePanel-dHNnScII.js";import"./MultiColumnSortDialog-fveWjSG6.js";import"./MenuTrigger-BFGZOH9z.js";import"./CompositeItem-CFe_vHTh.js";import"./ToolbarRootContext-DOoHomck.js";import"./getDisabledMountTransitionStyles-C-4maSRy.js";import"./getPseudoElementBounds-BqgYhusO.js";import"./chevron-down-CCFUjBzE.js";import"./index-DERODYr7.js";import"./error-BVtxD93c.js";import"./BaseCbacBanner-BFZyY8-L.js";import"./makeExternalStore-CTtM4SD7.js";import"./Tooltip-D_rqv0p4.js";import"./PopoverPopup-CVWJXKNo.js";import"./toNumber-Wq34DRdH.js";import"./useOsdkClient-DKGNHqRc.js";import"./tick-Cjy0B6im.js";import"./DropdownField-BKpFWQXk.js";import"./withOsdkMetrics-CQ_rVNLy.js";const{expect:e,screen:t,userEvent:T,within:f}=__STORYBOOK_MODULE_TEST__,le={...u,title:"Components/ObjectTable"},n={args:{objectType:c,columnDefinitions:l},parameters:{docs:{description:{story:"Minimal setup showing Employee data with default column definitions."},source:{code:"<ObjectTable objectType={Employee} />"}}},render:o=>i.jsx("div",{className:"object-table-container",style:{height:"600px"},children:i.jsx(p,{...o})}),play:async({canvasElement:o})=>{const a=f(o);await a.findByText(d),await y(a,"fullName"),await e(await t.findByRole("menuitem",{name:"Sort ascending"})).toBeInTheDocument(),await e(t.getByRole("menuitem",{name:"Sort descending"})).toBeInTheDocument(),await e(t.getByRole("menuitem",{name:"Pin column"})).toBeInTheDocument(),await e(t.getByRole("menuitem",{name:"Configure Columns"})).toBeInTheDocument(),await T.keyboard("{Escape}")}};var m,r,s;n.parameters={...n.parameters,docs:{...(m=n.parameters)==null?void 0:m.docs,source:{originalSource:`{
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
