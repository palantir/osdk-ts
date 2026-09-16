import{j as i}from"./iframe-voMwDu9I.js";import{O as p}from"./object-table-OMRvFpLe.js";import{E as c}from"./Employee-BAk2o20h.js";import{d as l,o as u,T as d,a as y}from"./objectTableStoryHelpers-BSbUFv-P.js";import"./preload-helper-YavkZJGd.js";import"./Table-HID_wtcK.js";import"./index-C1wISBvp.js";import"./Dialog-DGl--fRl.js";import"./cross-Dtmq2APj.js";import"./svgIconContainer-BNVNdA9N.js";import"./useBaseUiId-h_zaYehG.js";import"./InternalBackdrop-Bg2Pn1be.js";import"./composite-DmYT7ddW.js";import"./index-Y79_UCBN.js";import"./index-T2NqJhn0.js";import"./index-FmnW_XGx.js";import"./useEventCallback-Bimyknxr.js";import"./SkeletonBar-BfD5j53C.js";import"./LoadingCell-nTTc6Rbq.js";import"./ColumnConfigDialog-DTW2qmKN.js";import"./DraggableList-47qY9eDY.js";import"./search-C1v65Y4n.js";import"./Input-fxz47iVN.js";import"./useControlled-DQz2j8QF.js";import"./Button-BuGgzmKH.js";import"./small-cross-CkCJfZA3.js";import"./ActionButton-h7gq_W3b.js";import"./Checkbox-DIaxw-mP.js";import"./useValueChanged-B51ZhceZ.js";import"./CollapsiblePanel-DTchAleF.js";import"./MultiColumnSortDialog-CFkANgFh.js";import"./MenuTrigger-BFiK90mT.js";import"./CompositeItem-DkKn9mJ-.js";import"./ToolbarRootContext-D3Zw5lJf.js";import"./getDisabledMountTransitionStyles-O0gDbVYL.js";import"./getPseudoElementBounds-BGhK9mLg.js";import"./chevron-down-C58xTrh7.js";import"./index-BRox0REU.js";import"./error-Dh0kRUzk.js";import"./BaseCbacBanner-jRpkz4dK.js";import"./makeExternalStore-D4KyXXBP.js";import"./Tooltip-DdvT815d.js";import"./PopoverPopup-B7NNXEVs.js";import"./debounce-CLoU_st_.js";import"./useOsdkClient-DI51Lvg2.js";import"./tick-CQYdHD5k.js";import"./DropdownField-HtDR-_bI.js";import"./isEqual-DCso8IO6.js";import"./withOsdkMetrics-DiALcgCI.js";const{expect:e,screen:t,userEvent:T,within:f}=__STORYBOOK_MODULE_TEST__,ue={...u,title:"Components/ObjectTable"},n={args:{objectType:c,columnDefinitions:l},parameters:{docs:{description:{story:"Minimal setup showing Employee data with default column definitions."},source:{code:"<ObjectTable objectType={Employee} />"}}},render:o=>i.jsx("div",{className:"object-table-container",style:{height:"600px"},children:i.jsx(p,{...o})}),play:async({canvasElement:o})=>{const a=f(o);await a.findByText(d),await y(a,"fullName"),await e(await t.findByRole("menuitem",{name:"Sort ascending"})).toBeInTheDocument(),await e(t.getByRole("menuitem",{name:"Sort descending"})).toBeInTheDocument(),await e(t.getByRole("menuitem",{name:"Pin column"})).toBeInTheDocument(),await e(t.getByRole("menuitem",{name:"Configure Columns"})).toBeInTheDocument(),await T.keyboard("{Escape}")}};var m,r,s;n.parameters={...n.parameters,docs:{...(m=n.parameters)==null?void 0:m.docs,source:{originalSource:`{
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
