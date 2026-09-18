import{j as i}from"./iframe-CNtj4pm0.js";import{O as p}from"./object-table-BdWu6-xy.js";import{E as c}from"./Employee-BAk2o20h.js";import{d as l,o as u,T as d,a as y}from"./objectTableStoryHelpers-D12xXKSZ.js";import"./preload-helper-BS75hAbV.js";import"./Table-DSQlX70T.js";import"./index-sjmYZucR.js";import"./Dialog-D3lioHOd.js";import"./cross-BI_rXiCk.js";import"./svgIconContainer-KAKJdeY6.js";import"./useBaseUiId-lN80hZHi.js";import"./InternalBackdrop-BMWNtsZU.js";import"./composite-GfxKj1uF.js";import"./index-Cgs0l_sb.js";import"./index-CUZALXVA.js";import"./index-djpdBoFm.js";import"./useEventCallback-DuERb84G.js";import"./SkeletonBar-CZrTeSVQ.js";import"./LoadingCell-BRNwHJc1.js";import"./ColumnConfigDialog-CMgbih-7.js";import"./DraggableList-WdI-3es1.js";import"./search-D7W-cB43.js";import"./Input-C4ZhagKB.js";import"./useControlled-B0rx1snt.js";import"./Button-eHM7dp0m.js";import"./small-cross-DtFIErRB.js";import"./ActionButton-CmPvNCl_.js";import"./Checkbox-BMufYA8q.js";import"./useValueChanged-DDRJQ_I0.js";import"./CollapsiblePanel-D4KfY0r3.js";import"./MultiColumnSortDialog-CrARlvWc.js";import"./MenuTrigger-Cqg0-xP9.js";import"./CompositeItem-BO5p0iBu.js";import"./ToolbarRootContext-DeNcRZ79.js";import"./getDisabledMountTransitionStyles-BqG7Ghbq.js";import"./getPseudoElementBounds-Cvn7IccH.js";import"./chevron-down-DuRgHJud.js";import"./index-vLqmlx6U.js";import"./error-BoQP4cSo.js";import"./BaseCbacBanner-Bpgn6iSi.js";import"./makeExternalStore-CJ8yXjVF.js";import"./Tooltip-CC9kMvNv.js";import"./PopoverPopup-D6qb_igd.js";import"./debounce--s-i1_AZ.js";import"./useOsdkClient-VbnySwVH.js";import"./tick-BMhhdG7H.js";import"./DropdownField-Bnf0PiqN.js";import"./isEqual-C16MQX7m.js";import"./withOsdkMetrics-D3scg1-Z.js";const{expect:e,screen:t,userEvent:T,within:f}=__STORYBOOK_MODULE_TEST__,ue={...u,title:"Components/ObjectTable"},n={args:{objectType:c,columnDefinitions:l},parameters:{docs:{description:{story:"Minimal setup showing Employee data with default column definitions."},source:{code:"<ObjectTable objectType={Employee} />"}}},render:o=>i.jsx("div",{className:"object-table-container",style:{height:"600px"},children:i.jsx(p,{...o})}),play:async({canvasElement:o})=>{const a=f(o);await a.findByText(d),await y(a,"fullName"),await e(await t.findByRole("menuitem",{name:"Sort ascending"})).toBeInTheDocument(),await e(t.getByRole("menuitem",{name:"Sort descending"})).toBeInTheDocument(),await e(t.getByRole("menuitem",{name:"Pin column"})).toBeInTheDocument(),await e(t.getByRole("menuitem",{name:"Configure Columns"})).toBeInTheDocument(),await T.keyboard("{Escape}")}};var m,r,s;n.parameters={...n.parameters,docs:{...(m=n.parameters)==null?void 0:m.docs,source:{originalSource:`{
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
