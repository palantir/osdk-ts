import{j as i}from"./iframe-PnDOzCid.js";import{O as p}from"./object-table-D4EwzI8j.js";import{E as c}from"./Employee-BAk2o20h.js";import{d as l,o as u,T as d,a as y}from"./objectTableStoryHelpers-DmqrxqMK.js";import"./preload-helper-BHN2PTV1.js";import"./Table-Dhykx4ye.js";import"./index-CTuOq2_n.js";import"./Dialog-nsTWjBko.js";import"./cross-CR6LhqMg.js";import"./svgIconContainer-DY8hFB-6.js";import"./useBaseUiId-Br9Pyha2.js";import"./InternalBackdrop-CuNeBhky.js";import"./composite-ssNpx6D9.js";import"./index-BBtHZFB8.js";import"./index-BPz2iuz0.js";import"./index-DmaFqf5D.js";import"./useEventCallback-CD9glGCH.js";import"./SkeletonBar-D4GaeW64.js";import"./LoadingCell-CozaopMH.js";import"./ColumnConfigDialog-5JVMlay9.js";import"./DraggableList-CM5iWscv.js";import"./search-C0Gxo9Ly.js";import"./Input-C2eDGT_k.js";import"./useControlled-B8PotZCC.js";import"./Button-ClDfXYXt.js";import"./small-cross-6gjgiPBS.js";import"./ActionButton-Cxcvr76B.js";import"./Checkbox-DXeuKucW.js";import"./useValueChanged-DvWNgcqY.js";import"./CollapsiblePanel-CgXH4PmC.js";import"./MultiColumnSortDialog-BBj9KWuk.js";import"./MenuTrigger-CzMzu05o.js";import"./CompositeItem-JOSb0DW0.js";import"./ToolbarRootContext-MEy76afQ.js";import"./getDisabledMountTransitionStyles-Bu2kofYy.js";import"./getPseudoElementBounds-C6qHOPfm.js";import"./chevron-down-B6MD1Z1F.js";import"./index-Sp2kgai2.js";import"./error-ChR6Rzxj.js";import"./BaseCbacBanner-BJuG5Mgr.js";import"./makeExternalStore-D0koECKe.js";import"./Tooltip-BvRJQXfz.js";import"./PopoverPopup-DtBxplNL.js";import"./debounce-DSTpoPBU.js";import"./useOsdkClient-Bwd7OyF1.js";import"./tick-_BdQKNVX.js";import"./DropdownField-CkGZrtLk.js";import"./isEqual-5k6Ef4JB.js";import"./withOsdkMetrics-CyQcXoDt.js";const{expect:e,screen:t,userEvent:T,within:f}=__STORYBOOK_MODULE_TEST__,ue={...u,title:"Components/ObjectTable"},n={args:{objectType:c,columnDefinitions:l},parameters:{docs:{description:{story:"Minimal setup showing Employee data with default column definitions."},source:{code:"<ObjectTable objectType={Employee} />"}}},render:o=>i.jsx("div",{className:"object-table-container",style:{height:"600px"},children:i.jsx(p,{...o})}),play:async({canvasElement:o})=>{const a=f(o);await a.findByText(d),await y(a,"fullName"),await e(await t.findByRole("menuitem",{name:"Sort ascending"})).toBeInTheDocument(),await e(t.getByRole("menuitem",{name:"Sort descending"})).toBeInTheDocument(),await e(t.getByRole("menuitem",{name:"Pin column"})).toBeInTheDocument(),await e(t.getByRole("menuitem",{name:"Configure Columns"})).toBeInTheDocument(),await T.keyboard("{Escape}")}};var m,r,s;n.parameters={...n.parameters,docs:{...(m=n.parameters)==null?void 0:m.docs,source:{originalSource:`{
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
