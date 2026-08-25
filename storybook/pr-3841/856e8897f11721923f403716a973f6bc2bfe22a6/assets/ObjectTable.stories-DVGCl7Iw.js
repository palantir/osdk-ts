import{j as i}from"./iframe-Li1-lWs7.js";import{O as p}from"./object-table-CjDY3c5S.js";import{E as c}from"./Employee-BAk2o20h.js";import{d as l,o as u,T as d,a as y}from"./objectTableStoryHelpers-D3YOu32v.js";import"./preload-helper-CGmo2FMo.js";import"./Table-DNTTlJ15.js";import"./index-DoD8b1_q.js";import"./Dialog-clI1gzeX.js";import"./cross-DMmA-RfG.js";import"./svgIconContainer-CVRufNNl.js";import"./useBaseUiId-Br9Ryls1.js";import"./InternalBackdrop-D9X1KC0Z.js";import"./composite-JV6W8eaJ.js";import"./index-B_W4EPm5.js";import"./index-7QzYiAri.js";import"./index-D8Tk9Xkv.js";import"./useEventCallback-CkXzoATD.js";import"./SkeletonBar-KeXvglh_.js";import"./LoadingCell-CQgaEp-a.js";import"./ColumnConfigDialog-D6bJWZ62.js";import"./DraggableList-CcrcGGcJ.js";import"./search-DMt9s_ci.js";import"./Input-DM_Alj7t.js";import"./useControlled-CCuESsXx.js";import"./Button-8SX-EUR0.js";import"./small-cross-DXbOoBXF.js";import"./ActionButton-CEMN0Zdb.js";import"./Checkbox-DEiq_oH5.js";import"./useValueChanged-DilJhcWz.js";import"./CollapsiblePanel-C1kmCMJF.js";import"./MultiColumnSortDialog-BeKEe_uK.js";import"./MenuTrigger-DZnftTrY.js";import"./CompositeItem-BwUkyu_e.js";import"./ToolbarRootContext-DsnXZPtT.js";import"./getDisabledMountTransitionStyles-BQJYWB5I.js";import"./getPseudoElementBounds-Ppn7heVn.js";import"./chevron-down-BDBeFFgf.js";import"./index-BjEz7scL.js";import"./error-BiqjEWby.js";import"./BaseCbacBanner-DTvtqYPX.js";import"./makeExternalStore-CWQvlKnh.js";import"./Tooltip-DTKsc1QU.js";import"./PopoverPopup-CqHFde_Q.js";import"./debounce-CxboYieA.js";import"./useOsdkClient-B91Jh8bD.js";import"./tick-DR1AzeWG.js";import"./DropdownField-6i2nL-Zb.js";import"./isEqual-CK2JvR_Y.js";import"./withOsdkMetrics-_pRQ_AuF.js";const{expect:e,screen:t,userEvent:T,within:f}=__STORYBOOK_MODULE_TEST__,ue={...u,title:"Components/ObjectTable"},n={args:{objectType:c,columnDefinitions:l},parameters:{docs:{description:{story:"Minimal setup showing Employee data with default column definitions."},source:{code:"<ObjectTable objectType={Employee} />"}}},render:o=>i.jsx("div",{className:"object-table-container",style:{height:"600px"},children:i.jsx(p,{...o})}),play:async({canvasElement:o})=>{const a=f(o);await a.findByText(d),await y(a,"fullName"),await e(await t.findByRole("menuitem",{name:"Sort ascending"})).toBeInTheDocument(),await e(t.getByRole("menuitem",{name:"Sort descending"})).toBeInTheDocument(),await e(t.getByRole("menuitem",{name:"Pin column"})).toBeInTheDocument(),await e(t.getByRole("menuitem",{name:"Configure Columns"})).toBeInTheDocument(),await T.keyboard("{Escape}")}};var m,r,s;n.parameters={...n.parameters,docs:{...(m=n.parameters)==null?void 0:m.docs,source:{originalSource:`{
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
