import{j as i}from"./iframe-Cp-VmNqL.js";import{O as p}from"./object-table-fVHk6Y9j.js";import{E as c}from"./Employee-BAk2o20h.js";import{d as l,o as u,T as d,a as y}from"./objectTableStoryHelpers-cSvnF3Qf.js";import"./preload-helper-AzhWXDuQ.js";import"./Table-C10pEohY.js";import"./index-dpygWVpJ.js";import"./Dialog-mfRgTcvc.js";import"./cross-uOKlIsXG.js";import"./svgIconContainer-zkQ14032.js";import"./useBaseUiId-OdIul-yE.js";import"./InternalBackdrop-Bt0yPmbq.js";import"./composite-DlQhckwI.js";import"./index-tUkk1A8p.js";import"./index-yO_woVyq.js";import"./index-Dv_Pm10I.js";import"./useEventCallback-DQ3ev7p0.js";import"./SkeletonBar-CobUMKVq.js";import"./LoadingCell-BLSw_Usr.js";import"./ColumnConfigDialog-8CcQMjz1.js";import"./DraggableList-8e9q-xdO.js";import"./search-HIN2ZGpm.js";import"./Input-BEEKmunm.js";import"./useControlled-OYIwur-C.js";import"./Button-NTUIWe38.js";import"./small-cross-CK1o2en6.js";import"./ActionButton-BN3wr41o.js";import"./Checkbox-dZI16_ZG.js";import"./useValueChanged-PvBM_FRE.js";import"./CollapsiblePanel-DBGwpADH.js";import"./MultiColumnSortDialog-B7_4K9o8.js";import"./MenuTrigger-psdGvQmS.js";import"./CompositeItem-CzQ4Mwjm.js";import"./ToolbarRootContext-DNY7Xc1D.js";import"./getDisabledMountTransitionStyles-DUUZwERC.js";import"./getPseudoElementBounds-AmAefdLG.js";import"./chevron-down-Dk2LvJq7.js";import"./index-Jc-X2-Ds.js";import"./error-BJ-TznDH.js";import"./BaseCbacBanner-BgrbmI5X.js";import"./makeExternalStore-oKADq8a2.js";import"./Tooltip-BczU44S5.js";import"./isObject-HPrV1TH6.js";import"./debounce-DCaOx8Rx.js";import"./useOsdkClient-Dc4Jqd5m.js";import"./tick-Bfi0n5W9.js";import"./DropdownField-BVLbkf-i.js";import"./isEqual-B45AHlAy.js";import"./_baseIsEqual-ctM4qMgO.js";import"./withOsdkMetrics-CWuMV6f9.js";const{expect:e,screen:t,userEvent:T,within:f}=__STORYBOOK_MODULE_TEST__,de={...u,title:"Components/ObjectTable"},n={args:{objectType:c,columnDefinitions:l},parameters:{docs:{description:{story:"Minimal setup showing Employee data with default column definitions."},source:{code:"<ObjectTable objectType={Employee} />"}}},render:o=>i.jsx("div",{className:"object-table-container",style:{height:"600px"},children:i.jsx(p,{...o})}),play:async({canvasElement:o})=>{const a=f(o);await a.findByText(d),await y(a,"fullName"),await e(await t.findByRole("menuitem",{name:"Sort ascending"})).toBeInTheDocument(),await e(t.getByRole("menuitem",{name:"Sort descending"})).toBeInTheDocument(),await e(t.getByRole("menuitem",{name:"Pin column"})).toBeInTheDocument(),await e(t.getByRole("menuitem",{name:"Configure Columns"})).toBeInTheDocument(),await T.keyboard("{Escape}")}};var m,r,s;n.parameters={...n.parameters,docs:{...(m=n.parameters)==null?void 0:m.docs,source:{originalSource:`{
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
}`,...(s=(r=n.parameters)==null?void 0:r.docs)==null?void 0:s.source}}};const ye=["Default"];export{n as Default,ye as __namedExportsOrder,de as default};
