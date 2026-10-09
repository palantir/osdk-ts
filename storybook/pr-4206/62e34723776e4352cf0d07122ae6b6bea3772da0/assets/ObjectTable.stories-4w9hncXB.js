import{j as i}from"./iframe-kxdUQCve.js";import{O as p}from"./object-table-BAMrafAm.js";import{E as c}from"./Employee-BAk2o20h.js";import{d as l,o as u,T as d,a as y}from"./objectTableStoryHelpers-F4fiXkq0.js";import"./preload-helper-Cuq4TkHU.js";import"./Table-ZCQwY607.js";import"./index-Dj-vHPb7.js";import"./Dialog-CzGO940J.js";import"./cross-BGuVVI58.js";import"./svgIconContainer-0muFsb9b.js";import"./useBaseUiId-DHH2yIbk.js";import"./InternalBackdrop-BZ9l1zrW.js";import"./composite-Bj70JY7P.js";import"./index-DLOXxPse.js";import"./index-Cm3W4-OV.js";import"./index-ClZwirhD.js";import"./useEventCallback-Bq9ZgDOO.js";import"./SkeletonBar-tkvmB8An.js";import"./LoadingCell-QLYyy_ta.js";import"./ColumnConfigDialog-CmW0Mys6.js";import"./DraggableList-BoFiuN1_.js";import"./search-Dtrnv9od.js";import"./Input-DaXzRTeY.js";import"./useControlled-BW2k3psm.js";import"./Button-Ca-rtxgT.js";import"./small-cross-CNq41qjz.js";import"./ActionButton-DqspKp5t.js";import"./Checkbox-D-YxkcmG.js";import"./useValueChanged-DqoHHV3-.js";import"./CollapsiblePanel-MI7Qpoh1.js";import"./MultiColumnSortDialog-Q2AWLRsd.js";import"./MenuTrigger-CixaXCmF.js";import"./CompositeItem-CSpMJ9Wh.js";import"./ToolbarRootContext-CW6avnm2.js";import"./getDisabledMountTransitionStyles-lcQ0Umsd.js";import"./getPseudoElementBounds-CPNZb4-2.js";import"./chevron-down-CKJ5Wwcf.js";import"./index-CAihI7G4.js";import"./error-Dc_ezcGJ.js";import"./BaseCbacBanner-xD1_g2fI.js";import"./makeExternalStore-CNzfft50.js";import"./Tooltip-BfGevlTY.js";import"./PopoverPopup-uby0I1CE.js";import"./debounce-BnMuliNi.js";import"./useOsdkClient-B1pTCJqX.js";import"./tick-Brv0cW5L.js";import"./DropdownField-ggEkgwUW.js";import"./isEqual-C16UXMCJ.js";import"./withOsdkMetrics-BsNzoRp3.js";const{expect:e,screen:t,userEvent:T,within:f}=__STORYBOOK_MODULE_TEST__,ue={...u,title:"Components/ObjectTable"},n={args:{objectType:c,columnDefinitions:l},parameters:{docs:{description:{story:"Minimal setup showing Employee data with default column definitions."},source:{code:"<ObjectTable objectType={Employee} />"}}},render:o=>i.jsx("div",{className:"object-table-container",style:{height:"600px"},children:i.jsx(p,{...o})}),play:async({canvasElement:o})=>{const a=f(o);await a.findByText(d),await y(a,"fullName"),await e(await t.findByRole("menuitem",{name:"Sort ascending"})).toBeInTheDocument(),await e(t.getByRole("menuitem",{name:"Sort descending"})).toBeInTheDocument(),await e(t.getByRole("menuitem",{name:"Pin column"})).toBeInTheDocument(),await e(t.getByRole("menuitem",{name:"Configure Columns"})).toBeInTheDocument(),await T.keyboard("{Escape}")}};var m,r,s;n.parameters={...n.parameters,docs:{...(m=n.parameters)==null?void 0:m.docs,source:{originalSource:`{
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
