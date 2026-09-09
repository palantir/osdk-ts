import{j as i}from"./iframe-b_8xiy3W.js";import{O as p}from"./object-table-DrPIl3Zi.js";import{E as c}from"./Employee-BAk2o20h.js";import{d as l,o as u,T as d,a as y}from"./objectTableStoryHelpers-pRD_mHEK.js";import"./preload-helper-D0v6g8Db.js";import"./Table-DJR5OCUI.js";import"./index-oZ2AYheq.js";import"./Dialog-DznRX8R1.js";import"./cross-CALAWLOA.js";import"./svgIconContainer-ByDmaFbM.js";import"./useBaseUiId-DT31E3Yo.js";import"./InternalBackdrop-CLpVUHm8.js";import"./composite-cYMewAOc.js";import"./index-C8Xx4cgL.js";import"./index-xZwO_cAf.js";import"./index-BMWwnwmI.js";import"./useEventCallback-CAsu19Vq.js";import"./SkeletonBar-Bd96z6dI.js";import"./LoadingCell-Cu9MSHwe.js";import"./ColumnConfigDialog-BFWSuhw9.js";import"./DraggableList-xBM_bTxf.js";import"./search-CbAtzBKJ.js";import"./Input-Co7UsBkP.js";import"./useControlled-CAq9EV0h.js";import"./Button-CQKahg2d.js";import"./small-cross-BNQLIIyh.js";import"./ActionButton-CodfAc7s.js";import"./Checkbox-cHmIGIFt.js";import"./useValueChanged-CeFg2HVM.js";import"./CollapsiblePanel-D3gQHqx1.js";import"./MultiColumnSortDialog-CH-TfZDd.js";import"./MenuTrigger-CHuFRbAt.js";import"./CompositeItem-O5ez4ulJ.js";import"./ToolbarRootContext-BKksKq4U.js";import"./getDisabledMountTransitionStyles-CCClTCas.js";import"./getPseudoElementBounds-nU4-wp7y.js";import"./chevron-down-DItPxyzq.js";import"./index-BHrpVXex.js";import"./error-BHsdjMmH.js";import"./BaseCbacBanner-g3o59pg6.js";import"./makeExternalStore-c0rjbvLB.js";import"./Tooltip-Bamtogyy.js";import"./PopoverPopup-BtxX0L1I.js";import"./debounce-B2LvOlKd.js";import"./useOsdkClient-yfgmgRbP.js";import"./tick-HvfLanm4.js";import"./DropdownField-BCzLIobc.js";import"./isEqual-Cz2f4b96.js";import"./withOsdkMetrics-BpRFFsXx.js";const{expect:e,screen:t,userEvent:T,within:f}=__STORYBOOK_MODULE_TEST__,ue={...u,title:"Components/ObjectTable"},n={args:{objectType:c,columnDefinitions:l},parameters:{docs:{description:{story:"Minimal setup showing Employee data with default column definitions."},source:{code:"<ObjectTable objectType={Employee} />"}}},render:o=>i.jsx("div",{className:"object-table-container",style:{height:"600px"},children:i.jsx(p,{...o})}),play:async({canvasElement:o})=>{const a=f(o);await a.findByText(d),await y(a,"fullName"),await e(await t.findByRole("menuitem",{name:"Sort ascending"})).toBeInTheDocument(),await e(t.getByRole("menuitem",{name:"Sort descending"})).toBeInTheDocument(),await e(t.getByRole("menuitem",{name:"Pin column"})).toBeInTheDocument(),await e(t.getByRole("menuitem",{name:"Configure Columns"})).toBeInTheDocument(),await T.keyboard("{Escape}")}};var m,r,s;n.parameters={...n.parameters,docs:{...(m=n.parameters)==null?void 0:m.docs,source:{originalSource:`{
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
