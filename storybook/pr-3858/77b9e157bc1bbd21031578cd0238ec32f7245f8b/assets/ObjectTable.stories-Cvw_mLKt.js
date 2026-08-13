import{j as i}from"./iframe-9i1qquD3.js";import{O as p}from"./object-table-CIiOPICW.js";import{E as c}from"./Employee-BAk2o20h.js";import{d as l,o as u,T as d,a as y}from"./objectTableStoryHelpers-DaIPEQYn.js";import"./preload-helper-CaE5xEm4.js";import"./Table-C7QAQnNB.js";import"./index-Cn_PtrCz.js";import"./Dialog-Cp0xLvbr.js";import"./cross-ycERs_gP.js";import"./svgIconContainer-D5imF1LH.js";import"./useBaseUiId-DJQfhcf8.js";import"./InternalBackdrop-HxPhdxjx.js";import"./composite-DM30W4Iq.js";import"./index-D3xl72Ni.js";import"./index-_6ga9HMD.js";import"./index-BzYhgMC4.js";import"./useEventCallback-0vRphiCP.js";import"./SkeletonBar-DUKazIh_.js";import"./LoadingCell-BmdRfS3J.js";import"./ColumnConfigDialog-DL_Rcz3a.js";import"./DraggableList-CIB-qt-L.js";import"./search-KbjOGA9O.js";import"./Input-CYnOeAhZ.js";import"./useControlled-BNPeKpmg.js";import"./Button-C3QXTj2Z.js";import"./small-cross-Db9E4rXn.js";import"./ActionButton-CVFCNHwE.js";import"./Checkbox-BE9XtDBU.js";import"./useValueChanged-Chba_Qmf.js";import"./CollapsiblePanel-CaCqqfBH.js";import"./MultiColumnSortDialog-PgzoAEgZ.js";import"./MenuTrigger-CyObNyRF.js";import"./CompositeItem-DH17Zr6A.js";import"./ToolbarRootContext-go0Pv47B.js";import"./getDisabledMountTransitionStyles-B0-52SxF.js";import"./getPseudoElementBounds-FM95BU18.js";import"./chevron-down-9Tly55P9.js";import"./index-CNJNx8DW.js";import"./error-DLTX-bVv.js";import"./BaseCbacBanner-CM8tlOgH.js";import"./makeExternalStore-DL0J9LaB.js";import"./Tooltip-DJyWdD9X.js";import"./PopoverPopup-80njNaEX.js";import"./toNumber-Dj7u3-Bt.js";import"./useOsdkClient-ag-TPCLH.js";import"./tick-BqOAD6KG.js";import"./DropdownField-h0S7YUlm.js";import"./withOsdkMetrics-COOg86OH.js";const{expect:e,screen:t,userEvent:T,within:f}=__STORYBOOK_MODULE_TEST__,le={...u,title:"Components/ObjectTable"},n={args:{objectType:c,columnDefinitions:l},parameters:{docs:{description:{story:"Minimal setup showing Employee data with default column definitions."},source:{code:"<ObjectTable objectType={Employee} />"}}},render:o=>i.jsx("div",{className:"object-table-container",style:{height:"600px"},children:i.jsx(p,{...o})}),play:async({canvasElement:o})=>{const a=f(o);await a.findByText(d),await y(a,"fullName"),await e(await t.findByRole("menuitem",{name:"Sort ascending"})).toBeInTheDocument(),await e(t.getByRole("menuitem",{name:"Sort descending"})).toBeInTheDocument(),await e(t.getByRole("menuitem",{name:"Pin column"})).toBeInTheDocument(),await e(t.getByRole("menuitem",{name:"Configure Columns"})).toBeInTheDocument(),await T.keyboard("{Escape}")}};var m,r,s;n.parameters={...n.parameters,docs:{...(m=n.parameters)==null?void 0:m.docs,source:{originalSource:`{
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
}`,...(s=(r=n.parameters)==null?void 0:r.docs)==null?void 0:s.source}}};const ue=["Default"];export{n as Default,ue as __namedExportsOrder,le as default};
