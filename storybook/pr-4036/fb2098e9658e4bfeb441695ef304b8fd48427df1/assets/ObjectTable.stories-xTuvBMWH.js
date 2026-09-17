import{j as i}from"./iframe-D_qRpeHj.js";import{O as p}from"./object-table-CKBjSPJ8.js";import{E as c}from"./Employee-BAk2o20h.js";import{d as l,o as u,T as d,a as y}from"./objectTableStoryHelpers-B_pxyHa0.js";import"./preload-helper-D_9N_6Hv.js";import"./Table-BIBvJY_n.js";import"./index-ze-4_PID.js";import"./Dialog-CgqoPhCB.js";import"./cross-BxS6mKVf.js";import"./svgIconContainer-CoeSRgcf.js";import"./useBaseUiId-By5i2rdz.js";import"./InternalBackdrop-Dc_uxBhE.js";import"./composite-C0V0hw5E.js";import"./index-CZLowYbM.js";import"./index-DfyhkSOl.js";import"./index-C-sm0l73.js";import"./useEventCallback-Cv2yWZv2.js";import"./SkeletonBar-EN4eDWhb.js";import"./LoadingCell-CHXjbNSr.js";import"./ColumnConfigDialog-DB0wjUE8.js";import"./DraggableList-DWmayQdU.js";import"./search-BGYV6IKj.js";import"./Input-BNbV4MTG.js";import"./useControlled-Y53AopBQ.js";import"./Button-BV5h0__V.js";import"./small-cross-C2VJaSVZ.js";import"./ActionButton-Bs7eblYb.js";import"./Checkbox-CLK566Z3.js";import"./useValueChanged-DldrlgwL.js";import"./CollapsiblePanel-PgBvtzuh.js";import"./MultiColumnSortDialog-Brfh71ie.js";import"./MenuTrigger-DGpOysmP.js";import"./CompositeItem-B_Ho19nn.js";import"./ToolbarRootContext-Dkj0BbLv.js";import"./getDisabledMountTransitionStyles-ml_2UbZr.js";import"./getPseudoElementBounds-Dt8npt-l.js";import"./chevron-down-4vjSc27s.js";import"./index-DMf8On8K.js";import"./error-CushKjuF.js";import"./BaseCbacBanner-lQbmrV5k.js";import"./makeExternalStore-Cgf26SsV.js";import"./Tooltip-BDUJFrAT.js";import"./PopoverPopup-BEmt1_nM.js";import"./debounce-BbOjOfo_.js";import"./useOsdkClient-BidZgNy-.js";import"./tick-D_JbwVBf.js";import"./DropdownField-DV5YVhPE.js";import"./isEqual-WH4uvIP0.js";import"./withOsdkMetrics-B7kRIAyY.js";const{expect:e,screen:t,userEvent:T,within:f}=__STORYBOOK_MODULE_TEST__,ue={...u,title:"Components/ObjectTable"},n={args:{objectType:c,columnDefinitions:l},parameters:{docs:{description:{story:"Minimal setup showing Employee data with default column definitions."},source:{code:"<ObjectTable objectType={Employee} />"}}},render:o=>i.jsx("div",{className:"object-table-container",style:{height:"600px"},children:i.jsx(p,{...o})}),play:async({canvasElement:o})=>{const a=f(o);await a.findByText(d),await y(a,"fullName"),await e(await t.findByRole("menuitem",{name:"Sort ascending"})).toBeInTheDocument(),await e(t.getByRole("menuitem",{name:"Sort descending"})).toBeInTheDocument(),await e(t.getByRole("menuitem",{name:"Pin column"})).toBeInTheDocument(),await e(t.getByRole("menuitem",{name:"Configure Columns"})).toBeInTheDocument(),await T.keyboard("{Escape}")}};var m,r,s;n.parameters={...n.parameters,docs:{...(m=n.parameters)==null?void 0:m.docs,source:{originalSource:`{
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
