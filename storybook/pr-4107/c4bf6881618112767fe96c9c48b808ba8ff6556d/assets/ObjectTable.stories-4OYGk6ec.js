import{j as i}from"./iframe-BOWU70X1.js";import{O as p}from"./object-table-cgavINgx.js";import{E as c}from"./Employee-BAk2o20h.js";import{d as l,o as u,T as d,a as y}from"./objectTableStoryHelpers-CeFeC1D5.js";import"./preload-helper-DsrGzdLY.js";import"./Table-DOvh1xsn.js";import"./index-Dqy6Gfe7.js";import"./Dialog-B3WyzR5G.js";import"./cross-CVkoRI6N.js";import"./svgIconContainer-B9QIza-c.js";import"./useBaseUiId-8tGgV_0l.js";import"./InternalBackdrop-D2-B01xw.js";import"./composite-CSfG6ZaY.js";import"./index-BfjmLFxg.js";import"./index-DAEdDj8Q.js";import"./index-BSYQw0Uy.js";import"./useEventCallback-CoK8fJ8c.js";import"./SkeletonBar-xXHQ0iAC.js";import"./LoadingCell-CeE69STT.js";import"./ColumnConfigDialog-D3gFq4wl.js";import"./DraggableList-Dp5fZ28N.js";import"./search-Bm_8-FpL.js";import"./Input-Ba0NW75w.js";import"./useControlled-BdeVhzxt.js";import"./Button-BvbX1UI9.js";import"./small-cross-DKR3JJry.js";import"./ActionButton-CK7KXvFI.js";import"./Checkbox-pIrtE80l.js";import"./useValueChanged-Cko8QSI4.js";import"./CollapsiblePanel-IZqS99Hx.js";import"./MultiColumnSortDialog-C_pNjzkQ.js";import"./MenuTrigger-B1Guhxs6.js";import"./CompositeItem-CIAYfkGT.js";import"./ToolbarRootContext-CaVCFQJS.js";import"./getDisabledMountTransitionStyles-DisM1mEX.js";import"./getPseudoElementBounds-Beh_f-hj.js";import"./chevron-down-B1Z7ByUI.js";import"./index-utUHJIrZ.js";import"./error-BjTP1vhZ.js";import"./BaseCbacBanner-C_PYpr4S.js";import"./makeExternalStore-BS5Bz3Hp.js";import"./Tooltip-CWU8oDpl.js";import"./PopoverPopup-CZm5dGxt.js";import"./debounce-C0cDACkJ.js";import"./useOsdkClient-D5uHxQat.js";import"./tick-ByRVlpzT.js";import"./DropdownField-DmaOVCkJ.js";import"./isEqual-DMW34l0I.js";import"./withOsdkMetrics-Bjyc-H5X.js";const{expect:e,screen:t,userEvent:T,within:f}=__STORYBOOK_MODULE_TEST__,ue={...u,title:"Components/ObjectTable"},n={args:{objectType:c,columnDefinitions:l},parameters:{docs:{description:{story:"Minimal setup showing Employee data with default column definitions."},source:{code:"<ObjectTable objectType={Employee} />"}}},render:o=>i.jsx("div",{className:"object-table-container",style:{height:"600px"},children:i.jsx(p,{...o})}),play:async({canvasElement:o})=>{const a=f(o);await a.findByText(d),await y(a,"fullName"),await e(await t.findByRole("menuitem",{name:"Sort ascending"})).toBeInTheDocument(),await e(t.getByRole("menuitem",{name:"Sort descending"})).toBeInTheDocument(),await e(t.getByRole("menuitem",{name:"Pin column"})).toBeInTheDocument(),await e(t.getByRole("menuitem",{name:"Configure Columns"})).toBeInTheDocument(),await T.keyboard("{Escape}")}};var m,r,s;n.parameters={...n.parameters,docs:{...(m=n.parameters)==null?void 0:m.docs,source:{originalSource:`{
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
