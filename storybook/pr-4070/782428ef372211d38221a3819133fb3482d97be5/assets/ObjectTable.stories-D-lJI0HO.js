import{j as i}from"./iframe-DIhVLHWR.js";import{O as p}from"./object-table-Piy1vJFo.js";import{E as c}from"./Employee-BAk2o20h.js";import{d as l,o as u,T as d,a as y}from"./objectTableStoryHelpers-Wjjn1vnK.js";import"./preload-helper-DLYQvN5u.js";import"./Table-zCJrk9ZQ.js";import"./index-yKNrR2B4.js";import"./Dialog-V_m9DHPA.js";import"./cross-B1cvRkvv.js";import"./svgIconContainer-D0TTrVxE.js";import"./useBaseUiId-CNPP6ho2.js";import"./InternalBackdrop-lEVTZFj9.js";import"./composite-tiXb7rK6.js";import"./index-C5TdACSr.js";import"./index-CHn3e9nX.js";import"./index-CFb_KvGD.js";import"./useEventCallback-CFvkhzPc.js";import"./SkeletonBar-Bp3S-nOd.js";import"./LoadingCell-QagvA0gR.js";import"./ColumnConfigDialog-Cu5LvsFr.js";import"./DraggableList-VpWo4eap.js";import"./search-Cy5B3T22.js";import"./Input-BMTQDxuL.js";import"./useControlled-BGD6VLnv.js";import"./Button-vhJFIUHZ.js";import"./small-cross-C-n_IULq.js";import"./ActionButton-D4GpRNPK.js";import"./Checkbox-9qKXQZJs.js";import"./useValueChanged-BEZkKn0s.js";import"./CollapsiblePanel-hd58x1Xj.js";import"./MultiColumnSortDialog-HRXWxEOk.js";import"./MenuTrigger-imVGxdxT.js";import"./CompositeItem-oXJFfhwO.js";import"./ToolbarRootContext-DPTQ5YE4.js";import"./getDisabledMountTransitionStyles-BhOQM4-k.js";import"./getPseudoElementBounds-BvEiaKTW.js";import"./chevron-down-Cs6sjnv7.js";import"./index-CbR9L2SG.js";import"./error-BbBgUwm_.js";import"./BaseCbacBanner-gcBA-v35.js";import"./makeExternalStore-JpSfp1kg.js";import"./Tooltip-BrGNKtK_.js";import"./PopoverPopup-ZRsy0L-w.js";import"./debounce-BVO9QG61.js";import"./useOsdkClient-ClSS8h4g.js";import"./tick-BYc1w6Qb.js";import"./DropdownField-Cs1bE49h.js";import"./isEqual-DzjmoF6P.js";import"./withOsdkMetrics-Cal4vLIC.js";const{expect:e,screen:t,userEvent:T,within:f}=__STORYBOOK_MODULE_TEST__,ue={...u,title:"Components/ObjectTable"},n={args:{objectType:c,columnDefinitions:l},parameters:{docs:{description:{story:"Minimal setup showing Employee data with default column definitions."},source:{code:"<ObjectTable objectType={Employee} />"}}},render:o=>i.jsx("div",{className:"object-table-container",style:{height:"600px"},children:i.jsx(p,{...o})}),play:async({canvasElement:o})=>{const a=f(o);await a.findByText(d),await y(a,"fullName"),await e(await t.findByRole("menuitem",{name:"Sort ascending"})).toBeInTheDocument(),await e(t.getByRole("menuitem",{name:"Sort descending"})).toBeInTheDocument(),await e(t.getByRole("menuitem",{name:"Pin column"})).toBeInTheDocument(),await e(t.getByRole("menuitem",{name:"Configure Columns"})).toBeInTheDocument(),await T.keyboard("{Escape}")}};var m,r,s;n.parameters={...n.parameters,docs:{...(m=n.parameters)==null?void 0:m.docs,source:{originalSource:`{
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
