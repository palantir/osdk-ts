import{j as i}from"./iframe-DWBCJ7r1.js";import{O as p}from"./object-table-D-H9Ni8G.js";import{E as c}from"./Employee-BAk2o20h.js";import{d as l,o as u,T as d,a as y}from"./objectTableStoryHelpers-DFkK6Wwg.js";import"./preload-helper-BmktTq8T.js";import"./Table-BYbHxE5i.js";import"./index-Bhg8EF8N.js";import"./Dialog-BmWYe064.js";import"./cross-D7B_UIT5.js";import"./svgIconContainer-BKXE3QcR.js";import"./useBaseUiId-CJSadFy5.js";import"./InternalBackdrop-DMys-hvU.js";import"./composite-DVYVQNYP.js";import"./index-1w6N5pNx.js";import"./index-DxYGP2pA.js";import"./index-CZMyUemG.js";import"./useEventCallback-CWWvHrCN.js";import"./SkeletonBar-Db53rKFO.js";import"./LoadingCell-DpHWL9O8.js";import"./ColumnConfigDialog-CJuiy-vf.js";import"./DraggableList-D2Qu3fRi.js";import"./search-DqkstfId.js";import"./Input-CZ8A1Blk.js";import"./useControlled-CgT0Br7i.js";import"./Button-Dgs8-VaM.js";import"./small-cross-Cjpte_iC.js";import"./ActionButton-Z2VeE3Uj.js";import"./Checkbox-CH5ZZV2y.js";import"./useValueChanged-CsMSYAYh.js";import"./CollapsiblePanel-A9XCTmYP.js";import"./MultiColumnSortDialog-C8u3k-0f.js";import"./MenuTrigger-DLMUtzeY.js";import"./CompositeItem-BxdZFWZc.js";import"./ToolbarRootContext-Bk6-lFFc.js";import"./getDisabledMountTransitionStyles-Do_SU4wJ.js";import"./getPseudoElementBounds-B2ErL88K.js";import"./chevron-down-CIAO6ol2.js";import"./index-YbLBVrX6.js";import"./error-BEytdPL1.js";import"./BaseCbacBanner-BQkah_yF.js";import"./makeExternalStore-UKXCXYtC.js";import"./Tooltip-7U4L14FS.js";import"./PopoverPopup-DSB0f6RX.js";import"./debounce-D1paW6Zp.js";import"./useOsdkClient-CTU6gC87.js";import"./tick-DZoSDnYy.js";import"./DropdownField-BKAtqCjR.js";import"./isEqual-BxhW_R9e.js";import"./withOsdkMetrics-BPF8go43.js";const{expect:e,screen:t,userEvent:T,within:f}=__STORYBOOK_MODULE_TEST__,ue={...u,title:"Components/ObjectTable"},n={args:{objectType:c,columnDefinitions:l},parameters:{docs:{description:{story:"Minimal setup showing Employee data with default column definitions."},source:{code:"<ObjectTable objectType={Employee} />"}}},render:o=>i.jsx("div",{className:"object-table-container",style:{height:"600px"},children:i.jsx(p,{...o})}),play:async({canvasElement:o})=>{const a=f(o);await a.findByText(d),await y(a,"fullName"),await e(await t.findByRole("menuitem",{name:"Sort ascending"})).toBeInTheDocument(),await e(t.getByRole("menuitem",{name:"Sort descending"})).toBeInTheDocument(),await e(t.getByRole("menuitem",{name:"Pin column"})).toBeInTheDocument(),await e(t.getByRole("menuitem",{name:"Configure Columns"})).toBeInTheDocument(),await T.keyboard("{Escape}")}};var m,r,s;n.parameters={...n.parameters,docs:{...(m=n.parameters)==null?void 0:m.docs,source:{originalSource:`{
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
