import{j as i}from"./iframe-Cp1ziXca.js";import{O as p}from"./object-table-B4OAQ-UM.js";import{E as c}from"./Employee-BAk2o20h.js";import{d as l,o as u,T as d,a as y}from"./objectTableStoryHelpers-BmAste3w.js";import"./preload-helper-Ca6LY0_H.js";import"./Table-585gS7_y.js";import"./index-CCsyzFvm.js";import"./Dialog-DwEy_EvY.js";import"./cross-ByCUwATg.js";import"./svgIconContainer-DXlIscgi.js";import"./useBaseUiId-Bt37xHZm.js";import"./InternalBackdrop-21zmjWfP.js";import"./composite-B4QegilG.js";import"./index-DSsYOOxm.js";import"./index-DFQVNtXJ.js";import"./index-BCU2lpd0.js";import"./useEventCallback-CvDmftxl.js";import"./SkeletonBar-CFBwD_lg.js";import"./LoadingCell-Ba8qx18j.js";import"./ColumnConfigDialog-Bn0yFfei.js";import"./DraggableList-Bo6GGCwe.js";import"./search-DKOFfaqB.js";import"./Input-BUxEsfiE.js";import"./useControlled-DfLwj8uM.js";import"./Button-B9LauqrE.js";import"./small-cross-DPfWhWYm.js";import"./ActionButton-B-aL526Q.js";import"./Checkbox-BRBYWefK.js";import"./useValueChanged-CImdLC5I.js";import"./CollapsiblePanel-Bwq_8Vuv.js";import"./MultiColumnSortDialog-C3hGMjSR.js";import"./MenuTrigger-CkLfyBAc.js";import"./CompositeItem-B97tQNhx.js";import"./ToolbarRootContext-C7YmkdWj.js";import"./getDisabledMountTransitionStyles-BCOhgOHp.js";import"./getPseudoElementBounds-BiAN2Dz2.js";import"./chevron-down-BiBmRA_9.js";import"./index-Ccm7niur.js";import"./error-Cklok7wh.js";import"./BaseCbacBanner-7-OvX_lg.js";import"./makeExternalStore-UGtoi_Zp.js";import"./Tooltip-Dhj5CmPc.js";import"./PopoverPopup-CJh3mGTg.js";import"./debounce-Rxf64P7W.js";import"./useOsdkClient-BehGkUju.js";import"./tick-3VVcevUT.js";import"./DropdownField-BX9F8fxz.js";import"./isEqual-CjzvEKy0.js";import"./withOsdkMetrics-CXAPHKM8.js";const{expect:e,screen:t,userEvent:T,within:f}=__STORYBOOK_MODULE_TEST__,ue={...u,title:"Components/ObjectTable"},n={args:{objectType:c,columnDefinitions:l},parameters:{docs:{description:{story:"Minimal setup showing Employee data with default column definitions."},source:{code:"<ObjectTable objectType={Employee} />"}}},render:o=>i.jsx("div",{className:"object-table-container",style:{height:"600px"},children:i.jsx(p,{...o})}),play:async({canvasElement:o})=>{const a=f(o);await a.findByText(d),await y(a,"fullName"),await e(await t.findByRole("menuitem",{name:"Sort ascending"})).toBeInTheDocument(),await e(t.getByRole("menuitem",{name:"Sort descending"})).toBeInTheDocument(),await e(t.getByRole("menuitem",{name:"Pin column"})).toBeInTheDocument(),await e(t.getByRole("menuitem",{name:"Configure Columns"})).toBeInTheDocument(),await T.keyboard("{Escape}")}};var m,r,s;n.parameters={...n.parameters,docs:{...(m=n.parameters)==null?void 0:m.docs,source:{originalSource:`{
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
