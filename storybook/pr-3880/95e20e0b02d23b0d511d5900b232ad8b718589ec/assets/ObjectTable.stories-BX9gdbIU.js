import{j as i}from"./iframe-BiXi4-LQ.js";import{O as p}from"./object-table-BoM_3lLC.js";import{E as c}from"./Employee-BAk2o20h.js";import{d as l,o as u,T as d,a as y}from"./objectTableStoryHelpers-DvuWodcl.js";import"./preload-helper-yAegVG8x.js";import"./Table-BTrcdefb.js";import"./index-BrYb8iNp.js";import"./Dialog-CWqgEav3.js";import"./cross-D3R_Vc26.js";import"./svgIconContainer-DZPF1Vn6.js";import"./useBaseUiId-Ck_ISxlB.js";import"./InternalBackdrop-ChM2iaMT.js";import"./composite-CLFfo09d.js";import"./index-M3K30U7J.js";import"./index-DWweQBbd.js";import"./index-CSGf5OT9.js";import"./useEventCallback-CnLANeXS.js";import"./SkeletonBar-8k7TXRww.js";import"./LoadingCell-DydKhr1j.js";import"./ColumnConfigDialog-DL0dwxW0.js";import"./DraggableList-C9qm1CxU.js";import"./search-BptKOPUi.js";import"./Input-7j2qVm5H.js";import"./useControlled-c9kxJqxt.js";import"./Button-XL1kbTRa.js";import"./small-cross-DPmm3wJY.js";import"./ActionButton-BmQgn66c.js";import"./Checkbox-DoVKPerL.js";import"./useValueChanged-0cXF6J1G.js";import"./CollapsiblePanel-LOJt-gO8.js";import"./MultiColumnSortDialog-AmSNJAjI.js";import"./MenuTrigger-DA9yrfWI.js";import"./CompositeItem-BXqEZ6rt.js";import"./ToolbarRootContext-BQjlRsif.js";import"./getDisabledMountTransitionStyles-DJOTEwhN.js";import"./getPseudoElementBounds-CPcGbPee.js";import"./chevron-down-ClJPVsRO.js";import"./index-CCDXSv--.js";import"./error-D3sbkdzM.js";import"./BaseCbacBanner-AgCr4pEU.js";import"./makeExternalStore-DC5BX6mU.js";import"./Tooltip-BD26QkYH.js";import"./PopoverPopup-Duw-fJrv.js";import"./debounce-BmMSNYoi.js";import"./useOsdkClient-Bnu-sLDc.js";import"./tick-BDqjzO-F.js";import"./DropdownField-DOCpdzo4.js";import"./isEqual-D4gaMX9z.js";import"./withOsdkMetrics-DsR7pBBW.js";const{expect:e,screen:t,userEvent:T,within:f}=__STORYBOOK_MODULE_TEST__,ue={...u,title:"Components/ObjectTable"},n={args:{objectType:c,columnDefinitions:l},parameters:{docs:{description:{story:"Minimal setup showing Employee data with default column definitions."},source:{code:"<ObjectTable objectType={Employee} />"}}},render:o=>i.jsx("div",{className:"object-table-container",style:{height:"600px"},children:i.jsx(p,{...o})}),play:async({canvasElement:o})=>{const a=f(o);await a.findByText(d),await y(a,"fullName"),await e(await t.findByRole("menuitem",{name:"Sort ascending"})).toBeInTheDocument(),await e(t.getByRole("menuitem",{name:"Sort descending"})).toBeInTheDocument(),await e(t.getByRole("menuitem",{name:"Pin column"})).toBeInTheDocument(),await e(t.getByRole("menuitem",{name:"Configure Columns"})).toBeInTheDocument(),await T.keyboard("{Escape}")}};var m,r,s;n.parameters={...n.parameters,docs:{...(m=n.parameters)==null?void 0:m.docs,source:{originalSource:`{
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
