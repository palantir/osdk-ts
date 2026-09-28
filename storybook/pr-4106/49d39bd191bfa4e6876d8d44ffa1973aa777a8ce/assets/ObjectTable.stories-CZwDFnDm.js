import{j as i}from"./iframe-xlXCZ1ws.js";import{O as p}from"./object-table-CmsAhSfg.js";import{E as c}from"./Employee-BAk2o20h.js";import{d as l,o as u,T as d,a as y}from"./objectTableStoryHelpers-BLvOR6Li.js";import"./preload-helper-qqQQlHro.js";import"./Table-BUq2GEQj.js";import"./index-0LV67TMp.js";import"./Dialog-gQXrXHak.js";import"./cross-CR59a-Oy.js";import"./svgIconContainer-CuvK47Ur.js";import"./useBaseUiId-BGTxIfXW.js";import"./InternalBackdrop-B_15Ngja.js";import"./composite-CRMLjWFi.js";import"./index-C9_hIpBS.js";import"./index-mu_ylgEd.js";import"./index-COgWwI6H.js";import"./useEventCallback-C6MHTMfG.js";import"./SkeletonBar-BnHpQoIH.js";import"./LoadingCell-JiBKO40X.js";import"./ColumnConfigDialog-C0e1aTZU.js";import"./DraggableList-DoqqQWJG.js";import"./search-C6I7AzRf.js";import"./Input-BoJ1ruei.js";import"./useControlled-BnjR3wqV.js";import"./Button-BsW3xUOI.js";import"./small-cross-odVg3Ngs.js";import"./ActionButton-BCxwpleN.js";import"./Checkbox-CYMQvQpq.js";import"./useValueChanged-C6fdlLGU.js";import"./CollapsiblePanel-DQQNXkbu.js";import"./MultiColumnSortDialog-Bdr5AO2z.js";import"./MenuTrigger-JiNystqw.js";import"./CompositeItem-BYik2Kor.js";import"./ToolbarRootContext-5Gfw3fcR.js";import"./getDisabledMountTransitionStyles-C6rGsGDU.js";import"./getPseudoElementBounds-DCb81mxx.js";import"./chevron-down-gZxsFq9N.js";import"./index-kTsIio2O.js";import"./error-1_b5vZEY.js";import"./BaseCbacBanner-A6lL-nhH.js";import"./makeExternalStore-BkPioVOv.js";import"./Tooltip-CVfnB-bd.js";import"./PopoverPopup-CcQbR00T.js";import"./debounce-CDE_4Xvo.js";import"./useOsdkClient-Bcj4c6xw.js";import"./tick-DX5clgfv.js";import"./DropdownField-DRz8c_L3.js";import"./isEqual-B3JIeK92.js";import"./withOsdkMetrics-Cc_kPS0s.js";const{expect:e,screen:t,userEvent:T,within:f}=__STORYBOOK_MODULE_TEST__,ue={...u,title:"Components/ObjectTable"},n={args:{objectType:c,columnDefinitions:l},parameters:{docs:{description:{story:"Minimal setup showing Employee data with default column definitions."},source:{code:"<ObjectTable objectType={Employee} />"}}},render:o=>i.jsx("div",{className:"object-table-container",style:{height:"600px"},children:i.jsx(p,{...o})}),play:async({canvasElement:o})=>{const a=f(o);await a.findByText(d),await y(a,"fullName"),await e(await t.findByRole("menuitem",{name:"Sort ascending"})).toBeInTheDocument(),await e(t.getByRole("menuitem",{name:"Sort descending"})).toBeInTheDocument(),await e(t.getByRole("menuitem",{name:"Pin column"})).toBeInTheDocument(),await e(t.getByRole("menuitem",{name:"Configure Columns"})).toBeInTheDocument(),await T.keyboard("{Escape}")}};var m,r,s;n.parameters={...n.parameters,docs:{...(m=n.parameters)==null?void 0:m.docs,source:{originalSource:`{
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
