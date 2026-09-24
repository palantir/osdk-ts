import{j as i}from"./iframe-CuaBTThM.js";import{O as p}from"./object-table-CdsNOXNH.js";import{E as c}from"./Employee-BAk2o20h.js";import{d as l,o as u,T as d,a as y}from"./objectTableStoryHelpers-BOIeWKbj.js";import"./preload-helper-BgQMGQD9.js";import"./Table-CrGwcl_q.js";import"./index-GgZf0ymo.js";import"./Dialog-BcQj24m7.js";import"./cross-CR1o8CWA.js";import"./svgIconContainer-CzPEr09G.js";import"./useBaseUiId-BS0XPI08.js";import"./InternalBackdrop-Clzk9XeE.js";import"./composite-CR2xOePv.js";import"./index-oUfyUaR2.js";import"./index-CpY0VuZR.js";import"./index-M-I7sgYK.js";import"./useEventCallback-m_NUBECY.js";import"./SkeletonBar-DSN2gcPw.js";import"./LoadingCell-Qolnhcmm.js";import"./ColumnConfigDialog-yePfITsL.js";import"./DraggableList-TOCZNNp5.js";import"./search-D87DQ5KE.js";import"./Input-CPr8OQD6.js";import"./useControlled-BV5LNAXf.js";import"./Button-CkWuBE5W.js";import"./small-cross-BK9Py7ht.js";import"./ActionButton-m1-HZ51Y.js";import"./Checkbox-BijzNCd1.js";import"./useValueChanged-CFw9gLVH.js";import"./CollapsiblePanel-XiNOh9Gj.js";import"./MultiColumnSortDialog-CSlAmV1e.js";import"./MenuTrigger-DLa-uREd.js";import"./CompositeItem-BGC4JuuI.js";import"./ToolbarRootContext-ChhVj2PO.js";import"./getDisabledMountTransitionStyles-CDB_t-dK.js";import"./getPseudoElementBounds-ChIjHzI9.js";import"./chevron-down-Bk4mo7mA.js";import"./index-BsMXAZnQ.js";import"./error-B4mawlQh.js";import"./BaseCbacBanner-DIzV_hl8.js";import"./makeExternalStore-pp23vOCb.js";import"./Tooltip-HTpDMf45.js";import"./PopoverPopup-DCxI2WDv.js";import"./debounce-C6OjGsRu.js";import"./useOsdkClient-jDqaMA4t.js";import"./tick-Dm48v928.js";import"./DropdownField-Es7JKCIb.js";import"./isEqual-B0V4Ry29.js";import"./withOsdkMetrics-DEQltQtw.js";const{expect:e,screen:t,userEvent:T,within:f}=__STORYBOOK_MODULE_TEST__,ue={...u,title:"Components/ObjectTable"},n={args:{objectType:c,columnDefinitions:l},parameters:{docs:{description:{story:"Minimal setup showing Employee data with default column definitions."},source:{code:"<ObjectTable objectType={Employee} />"}}},render:o=>i.jsx("div",{className:"object-table-container",style:{height:"600px"},children:i.jsx(p,{...o})}),play:async({canvasElement:o})=>{const a=f(o);await a.findByText(d),await y(a,"fullName"),await e(await t.findByRole("menuitem",{name:"Sort ascending"})).toBeInTheDocument(),await e(t.getByRole("menuitem",{name:"Sort descending"})).toBeInTheDocument(),await e(t.getByRole("menuitem",{name:"Pin column"})).toBeInTheDocument(),await e(t.getByRole("menuitem",{name:"Configure Columns"})).toBeInTheDocument(),await T.keyboard("{Escape}")}};var m,r,s;n.parameters={...n.parameters,docs:{...(m=n.parameters)==null?void 0:m.docs,source:{originalSource:`{
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
