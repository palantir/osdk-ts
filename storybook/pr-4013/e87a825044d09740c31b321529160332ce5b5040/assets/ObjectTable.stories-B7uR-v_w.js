import{j as i}from"./iframe-ByUPzMo-.js";import{O as p}from"./object-table-B71rfih6.js";import{E as c}from"./Employee-BAk2o20h.js";import{d as l,o as u,T as d,a as y}from"./objectTableStoryHelpers-BE1xDO1t.js";import"./preload-helper-DMW2vH7D.js";import"./Table-BOtOMzC7.js";import"./index-DDBwTcU5.js";import"./Dialog-FXfg-rp9.js";import"./cross-DJjNSarb.js";import"./svgIconContainer-BoZ4WTrV.js";import"./useBaseUiId-uUDoNX5q.js";import"./InternalBackdrop-Dv-N3MX6.js";import"./composite-s38ZpXCI.js";import"./index-DckN6Z75.js";import"./index-B7ZeWuUK.js";import"./index-jWoVPMOf.js";import"./useEventCallback-vWB41utD.js";import"./SkeletonBar-DYLnGweB.js";import"./LoadingCell-YdCVoPHH.js";import"./ColumnConfigDialog-6WIKVa5i.js";import"./DraggableList-VH3DZlc1.js";import"./search-BAYfazpa.js";import"./Input-sjbB4Aiw.js";import"./useControlled-BkbhbtR9.js";import"./Button-Psq8nKOy.js";import"./small-cross-BFKLMMPg.js";import"./ActionButton-Bz-AvXIu.js";import"./Checkbox-DniYfbse.js";import"./useValueChanged-qVZGkxmZ.js";import"./CollapsiblePanel-74XZuXCD.js";import"./MultiColumnSortDialog-COTnjAII.js";import"./MenuTrigger-DiONpmDe.js";import"./CompositeItem-Cyx3uAMD.js";import"./ToolbarRootContext-D7Mh8yi7.js";import"./getDisabledMountTransitionStyles-CsaRuwLM.js";import"./getPseudoElementBounds-CYVG0CpK.js";import"./chevron-down-MpADD7bW.js";import"./index-CRwMUVe2.js";import"./error-ByNBHJWq.js";import"./BaseCbacBanner-hvdd3eti.js";import"./makeExternalStore-BA6_-t1C.js";import"./Tooltip-ClovcVQp.js";import"./PopoverPopup-CctEYuVT.js";import"./debounce-Btut_D36.js";import"./useOsdkClient-CfYYGIxK.js";import"./tick-CwqvEqLb.js";import"./DropdownField-BjT07YJh.js";import"./isEqual-LNNalZCs.js";import"./withOsdkMetrics-DlvIoaDP.js";const{expect:e,screen:t,userEvent:T,within:f}=__STORYBOOK_MODULE_TEST__,ue={...u,title:"Components/ObjectTable"},n={args:{objectType:c,columnDefinitions:l},parameters:{docs:{description:{story:"Minimal setup showing Employee data with default column definitions."},source:{code:"<ObjectTable objectType={Employee} />"}}},render:o=>i.jsx("div",{className:"object-table-container",style:{height:"600px"},children:i.jsx(p,{...o})}),play:async({canvasElement:o})=>{const a=f(o);await a.findByText(d),await y(a,"fullName"),await e(await t.findByRole("menuitem",{name:"Sort ascending"})).toBeInTheDocument(),await e(t.getByRole("menuitem",{name:"Sort descending"})).toBeInTheDocument(),await e(t.getByRole("menuitem",{name:"Pin column"})).toBeInTheDocument(),await e(t.getByRole("menuitem",{name:"Configure Columns"})).toBeInTheDocument(),await T.keyboard("{Escape}")}};var m,r,s;n.parameters={...n.parameters,docs:{...(m=n.parameters)==null?void 0:m.docs,source:{originalSource:`{
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
