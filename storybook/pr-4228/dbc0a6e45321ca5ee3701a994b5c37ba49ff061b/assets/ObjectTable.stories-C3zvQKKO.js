import{j as i}from"./iframe-CQsOKhp1.js";import{O as p}from"./object-table-BodawAB7.js";import{E as c}from"./Employee-BAk2o20h.js";import{d as l,o as u,T as d,a as y}from"./objectTableStoryHelpers-DEgbHYLQ.js";import"./preload-helper-QCVrcnhn.js";import"./Table-eIUm1pnh.js";import"./index-Cfn5HHSj.js";import"./Dialog-CMVDjiQT.js";import"./cross-D4ZfN4mf.js";import"./svgIconContainer-qEMrR21W.js";import"./useBaseUiId-D94WIrG_.js";import"./InternalBackdrop-nIseF9Rd.js";import"./composite-blMZk3SM.js";import"./index-vi3ICmyv.js";import"./index-BeDrSC4b.js";import"./index-BLmYOq2n.js";import"./useEventCallback-Dg67wvUV.js";import"./SkeletonBar-tDQdvh_L.js";import"./LoadingCell-DnFFhmJl.js";import"./ColumnConfigDialog-CUy4jjTS.js";import"./DraggableList-BEe5wMUr.js";import"./search-BBkEdcYr.js";import"./Input-B-8EoJIN.js";import"./useControlled-BDZq96US.js";import"./Button-CPVt0M1Q.js";import"./small-cross-BAocrqgT.js";import"./ActionButton-BNS2aQod.js";import"./Checkbox-CzCCIDzo.js";import"./useValueChanged-DLXr5Lvo.js";import"./CollapsiblePanel-VrGZTHLb.js";import"./MultiColumnSortDialog-DybXdH_L.js";import"./MenuTrigger-CfjWuOh8.js";import"./CompositeItem-D0ilUgR4.js";import"./ToolbarRootContext-C5qJ1QrY.js";import"./getDisabledMountTransitionStyles-DrVS-sy5.js";import"./getPseudoElementBounds-q7Ny88y9.js";import"./chevron-down-BU_Ll11Q.js";import"./index-C1wW_rI9.js";import"./error-B_L6yULe.js";import"./BaseCbacBanner-TXSR6ONf.js";import"./makeExternalStore-IEAykGhy.js";import"./Tooltip-GVNd_jLu.js";import"./PopoverPopup-C0eQ0X_f.js";import"./debounce-XFs4JFin.js";import"./useOsdkClient-GTGeHZWx.js";import"./tick-CTireopl.js";import"./DropdownField-B28BWeII.js";import"./isEqual-DmuAvewm.js";import"./withOsdkMetrics-DTL1iOoJ.js";const{expect:e,screen:t,userEvent:T,within:f}=__STORYBOOK_MODULE_TEST__,ue={...u,title:"Components/ObjectTable"},n={args:{objectType:c,columnDefinitions:l},parameters:{docs:{description:{story:"Minimal setup showing Employee data with default column definitions."},source:{code:"<ObjectTable objectType={Employee} />"}}},render:o=>i.jsx("div",{className:"object-table-container",style:{height:"600px"},children:i.jsx(p,{...o})}),play:async({canvasElement:o})=>{const a=f(o);await a.findByText(d),await y(a,"fullName"),await e(await t.findByRole("menuitem",{name:"Sort ascending"})).toBeInTheDocument(),await e(t.getByRole("menuitem",{name:"Sort descending"})).toBeInTheDocument(),await e(t.getByRole("menuitem",{name:"Pin column"})).toBeInTheDocument(),await e(t.getByRole("menuitem",{name:"Configure Columns"})).toBeInTheDocument(),await T.keyboard("{Escape}")}};var m,r,s;n.parameters={...n.parameters,docs:{...(m=n.parameters)==null?void 0:m.docs,source:{originalSource:`{
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
