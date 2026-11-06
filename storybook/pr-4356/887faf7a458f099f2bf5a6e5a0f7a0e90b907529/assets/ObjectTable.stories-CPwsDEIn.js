import{j as i}from"./iframe-CO_TqB81.js";import{O as p}from"./object-table-DnstM0F_.js";import{E as c}from"./Employee-BAk2o20h.js";import{d as l,o as u,T as d,a as y}from"./objectTableStoryHelpers-Ea9ztRh9.js";import"./preload-helper-Cb9TEUNK.js";import"./Table-CDGzwZIs.js";import"./index-BG1T9Qar.js";import"./Dialog-Bs62LDef.js";import"./cross-BWp6Y9Mg.js";import"./svgIconContainer-9GB5-wwK.js";import"./useBaseUiId-CQDh8HZx.js";import"./InternalBackdrop-XEvqPvZO.js";import"./composite-ksiLQPWX.js";import"./index-Vp2_lvOX.js";import"./index-BpkhN8QR.js";import"./index-C44jrtj9.js";import"./useEventCallback-Da1PZug2.js";import"./SkeletonBar-DfcLnHzw.js";import"./LoadingCell-7218JQWL.js";import"./ColumnConfigDialog-BKLIJzqe.js";import"./DraggableList-DcN0PPA5.js";import"./search-CL2g-V2W.js";import"./Input-C4_accH4.js";import"./useControlled-BzsK2z1m.js";import"./Button-DcLBkUW1.js";import"./small-cross-DJUC3vxT.js";import"./ActionButton-B2_yFJBm.js";import"./Checkbox-CQerHbWk.js";import"./useValueChanged-BRD8TdqI.js";import"./CollapsiblePanel-D_HvnvuL.js";import"./MultiColumnSortDialog-C12-E6um.js";import"./MenuTrigger-wpkt9osl.js";import"./CompositeItem-DiNcRYV6.js";import"./ToolbarRootContext-C89jM3yj.js";import"./getDisabledMountTransitionStyles-BDEY_Zeb.js";import"./getPseudoElementBounds-DqXRckai.js";import"./chevron-down-Cz7E_Xzc.js";import"./index-CZb0rJv3.js";import"./error-CQK0rvpI.js";import"./BaseCbacBanner-BfvZcEHl.js";import"./makeExternalStore-BrsByTNH.js";import"./Tooltip-9tmkcTTw.js";import"./PopoverPopup-CHZBqC1j.js";import"./debounce-qC38IiRW.js";import"./useOsdkClient-CJEtUc7d.js";import"./tick-DMb7PR_x.js";import"./DropdownField-DKbARUIc.js";import"./isEqual-B5R3h5go.js";import"./withOsdkMetrics-DUnq64Xh.js";const{expect:e,screen:t,userEvent:T,within:f}=__STORYBOOK_MODULE_TEST__,ue={...u,title:"Components/ObjectTable"},n={args:{objectType:c,columnDefinitions:l},parameters:{docs:{description:{story:"Minimal setup showing Employee data with default column definitions."},source:{code:"<ObjectTable objectType={Employee} />"}}},render:o=>i.jsx("div",{className:"object-table-container",style:{height:"600px"},children:i.jsx(p,{...o})}),play:async({canvasElement:o})=>{const a=f(o);await a.findByText(d),await y(a,"fullName"),await e(await t.findByRole("menuitem",{name:"Sort ascending"})).toBeInTheDocument(),await e(t.getByRole("menuitem",{name:"Sort descending"})).toBeInTheDocument(),await e(t.getByRole("menuitem",{name:"Pin column"})).toBeInTheDocument(),await e(t.getByRole("menuitem",{name:"Configure Columns"})).toBeInTheDocument(),await T.keyboard("{Escape}")}};var m,r,s;n.parameters={...n.parameters,docs:{...(m=n.parameters)==null?void 0:m.docs,source:{originalSource:`{
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
