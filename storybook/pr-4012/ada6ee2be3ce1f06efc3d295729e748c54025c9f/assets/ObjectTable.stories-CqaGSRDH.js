import{j as i}from"./iframe-R3i6F3aO.js";import{O as p}from"./object-table-BgTYg10X.js";import{E as c}from"./Employee-BAk2o20h.js";import{d as l,o as u,T as d,a as y}from"./objectTableStoryHelpers-CsLCEMtu.js";import"./preload-helper-C9bdGnH6.js";import"./Table-C01PNnUN.js";import"./index-BGblgBJY.js";import"./Dialog-vzu_lA8w.js";import"./cross-BPxLtSBw.js";import"./svgIconContainer-C5apQk5w.js";import"./useBaseUiId-Bs3UtHPs.js";import"./InternalBackdrop-BHQr0waf.js";import"./composite-DqPiEnK1.js";import"./index-FYBTDmiA.js";import"./index-BcSLoxTr.js";import"./index-CJpO-LuO.js";import"./useEventCallback-Br_xasQQ.js";import"./SkeletonBar-CEO897hA.js";import"./LoadingCell-78y270gJ.js";import"./ColumnConfigDialog-CMfpzQwr.js";import"./DraggableList-BIW1gmbf.js";import"./search-CLosiH11.js";import"./Input-sn4ChjOn.js";import"./useControlled-CF852Dip.js";import"./Button-DHONR1q8.js";import"./small-cross-BPJFbpZY.js";import"./ActionButton-CgZ1I1zH.js";import"./Checkbox-G34ERc79.js";import"./useValueChanged-DXcnjapY.js";import"./CollapsiblePanel-CnpdwwlI.js";import"./MultiColumnSortDialog-D17gBqMo.js";import"./MenuTrigger-SapJWbmy.js";import"./CompositeItem-CwiOxIme.js";import"./ToolbarRootContext-CwgLFLhe.js";import"./getDisabledMountTransitionStyles-B-rU_9sL.js";import"./getPseudoElementBounds-BhVzGz-s.js";import"./chevron-down-DiJ60wr5.js";import"./index-DRFmYbvw.js";import"./error-DSevPCVz.js";import"./BaseCbacBanner-D58x-qgC.js";import"./makeExternalStore-BNMggstW.js";import"./Tooltip-C7Pq2vOJ.js";import"./PopoverPopup-sZXPOR4E.js";import"./debounce-QFsAiE7l.js";import"./useOsdkClient-B-ltzRX3.js";import"./tick-BlsNuID7.js";import"./DropdownField-BAjlL0wb.js";import"./isEqual-B8rlE8Mo.js";import"./withOsdkMetrics-D6yaQzlx.js";const{expect:e,screen:t,userEvent:T,within:f}=__STORYBOOK_MODULE_TEST__,ue={...u,title:"Components/ObjectTable"},n={args:{objectType:c,columnDefinitions:l},parameters:{docs:{description:{story:"Minimal setup showing Employee data with default column definitions."},source:{code:"<ObjectTable objectType={Employee} />"}}},render:o=>i.jsx("div",{className:"object-table-container",style:{height:"600px"},children:i.jsx(p,{...o})}),play:async({canvasElement:o})=>{const a=f(o);await a.findByText(d),await y(a,"fullName"),await e(await t.findByRole("menuitem",{name:"Sort ascending"})).toBeInTheDocument(),await e(t.getByRole("menuitem",{name:"Sort descending"})).toBeInTheDocument(),await e(t.getByRole("menuitem",{name:"Pin column"})).toBeInTheDocument(),await e(t.getByRole("menuitem",{name:"Configure Columns"})).toBeInTheDocument(),await T.keyboard("{Escape}")}};var m,r,s;n.parameters={...n.parameters,docs:{...(m=n.parameters)==null?void 0:m.docs,source:{originalSource:`{
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
