import{j as i}from"./iframe-Ct96tLEP.js";import{O as p}from"./object-table-BVb4YUri.js";import{E as c}from"./Employee-BAk2o20h.js";import{d as l,o as u,T as d,a as y}from"./objectTableStoryHelpers-iEqQo9UR.js";import"./preload-helper-BzXm-lWo.js";import"./Table-BLTNEoRk.js";import"./index-BrLV5Brk.js";import"./Dialog-CdgpJYdr.js";import"./cross-njCgeQQ_.js";import"./svgIconContainer-YyohibIC.js";import"./useBaseUiId-DlPo7HoM.js";import"./InternalBackdrop-CBhLfZ10.js";import"./composite-ClWDPy_Z.js";import"./index-n7zQzqGm.js";import"./index-CFGgbOOg.js";import"./index-DvkK9vYJ.js";import"./useEventCallback-NT9uVSN-.js";import"./SkeletonBar-CHy9ImdP.js";import"./LoadingCell-CBjpGz6p.js";import"./ColumnConfigDialog-DeNfn3-2.js";import"./DraggableList-CdCzNXll.js";import"./search-gcuSrwrj.js";import"./Input-BjRTRl1y.js";import"./useControlled-BrUHVbre.js";import"./Button--zxmfjhO.js";import"./small-cross-CdOMJomB.js";import"./ActionButton-mBYFJsFl.js";import"./Checkbox-DCpFl39i.js";import"./useValueChanged-5fXKuMKH.js";import"./CollapsiblePanel-Zda4NkR-.js";import"./MultiColumnSortDialog-LxJNdhr2.js";import"./MenuTrigger-DDhJo6rx.js";import"./CompositeItem-ofC_tm6k.js";import"./ToolbarRootContext-COQSoUvI.js";import"./getDisabledMountTransitionStyles-CosExIO_.js";import"./getPseudoElementBounds-C54av8yB.js";import"./chevron-down-3x8blo3k.js";import"./index-BQUZFKJ4.js";import"./error-9UY90i-J.js";import"./BaseCbacBanner-CClJZgLo.js";import"./makeExternalStore-DsptzOqM.js";import"./Tooltip-COO2pN_0.js";import"./PopoverPopup-Bp-cbf8K.js";import"./debounce-qlqazifV.js";import"./useOsdkClient-CNbvIXrl.js";import"./tick-BTw5BL4P.js";import"./DropdownField-ipyk94KE.js";import"./isEqual-OrluLmcb.js";import"./withOsdkMetrics-BTh75wtd.js";const{expect:e,screen:t,userEvent:T,within:f}=__STORYBOOK_MODULE_TEST__,ue={...u,title:"Components/ObjectTable"},n={args:{objectType:c,columnDefinitions:l},parameters:{docs:{description:{story:"Minimal setup showing Employee data with default column definitions."},source:{code:"<ObjectTable objectType={Employee} />"}}},render:o=>i.jsx("div",{className:"object-table-container",style:{height:"600px"},children:i.jsx(p,{...o})}),play:async({canvasElement:o})=>{const a=f(o);await a.findByText(d),await y(a,"fullName"),await e(await t.findByRole("menuitem",{name:"Sort ascending"})).toBeInTheDocument(),await e(t.getByRole("menuitem",{name:"Sort descending"})).toBeInTheDocument(),await e(t.getByRole("menuitem",{name:"Pin column"})).toBeInTheDocument(),await e(t.getByRole("menuitem",{name:"Configure Columns"})).toBeInTheDocument(),await T.keyboard("{Escape}")}};var m,r,s;n.parameters={...n.parameters,docs:{...(m=n.parameters)==null?void 0:m.docs,source:{originalSource:`{
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
