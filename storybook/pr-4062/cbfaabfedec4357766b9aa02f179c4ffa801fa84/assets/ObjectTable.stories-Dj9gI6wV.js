import{j as i}from"./iframe-3uOeStlO.js";import{O as p}from"./object-table-qJDWYpnJ.js";import{E as c}from"./Employee-BAk2o20h.js";import{d as l,o as u,T as d,a as y}from"./objectTableStoryHelpers-DVVLHu4C.js";import"./preload-helper-B_uYGV8k.js";import"./Table-COy7OTJg.js";import"./index-B_qY6xMA.js";import"./Dialog-Ccqoblb9.js";import"./cross-waxScdAW.js";import"./svgIconContainer-BXcgfdNM.js";import"./useBaseUiId-DFf4k_ND.js";import"./InternalBackdrop-DeK6mcEC.js";import"./composite-DbFqwck4.js";import"./index-CkR9lTv2.js";import"./index-CV8wC36m.js";import"./index-K1gQz8hL.js";import"./useEventCallback-B_uqfwHC.js";import"./SkeletonBar-Cx2xW1pn.js";import"./LoadingCell-CII1RZf_.js";import"./ColumnConfigDialog-B9tNGQiq.js";import"./DraggableList-tGDRcHwH.js";import"./search-DB4T2psl.js";import"./Input-CYQFeP5H.js";import"./useControlled-Iq2zkhRy.js";import"./Button-B1JQinsR.js";import"./small-cross-DBqN_GPD.js";import"./ActionButton-B-_2-j29.js";import"./Checkbox-TNqUNqJn.js";import"./useValueChanged-BPuYePe0.js";import"./CollapsiblePanel-o2O4Ppa4.js";import"./MultiColumnSortDialog-BVqdM4HG.js";import"./MenuTrigger--u7WeyuR.js";import"./CompositeItem-B84OCPkr.js";import"./ToolbarRootContext-Dbkjbr9t.js";import"./getDisabledMountTransitionStyles-BEO9K8qN.js";import"./getPseudoElementBounds-hiaVLHB1.js";import"./chevron-down-Bzj-jMLe.js";import"./index-BiPZja9p.js";import"./error-BXiGRUyR.js";import"./BaseCbacBanner-Bcx0lEUZ.js";import"./makeExternalStore-B5qagnOI.js";import"./Tooltip-CiOtNwo6.js";import"./PopoverPopup-B8-ohf43.js";import"./debounce-D-3tGswa.js";import"./useOsdkClient-BR5uz5xP.js";import"./tick-Cvl3VbM3.js";import"./DropdownField-DiWe0nIp.js";import"./isEqual-LJdz_BZ3.js";import"./withOsdkMetrics-DtWegvZ6.js";const{expect:e,screen:t,userEvent:T,within:f}=__STORYBOOK_MODULE_TEST__,ue={...u,title:"Components/ObjectTable"},n={args:{objectType:c,columnDefinitions:l},parameters:{docs:{description:{story:"Minimal setup showing Employee data with default column definitions."},source:{code:"<ObjectTable objectType={Employee} />"}}},render:o=>i.jsx("div",{className:"object-table-container",style:{height:"600px"},children:i.jsx(p,{...o})}),play:async({canvasElement:o})=>{const a=f(o);await a.findByText(d),await y(a,"fullName"),await e(await t.findByRole("menuitem",{name:"Sort ascending"})).toBeInTheDocument(),await e(t.getByRole("menuitem",{name:"Sort descending"})).toBeInTheDocument(),await e(t.getByRole("menuitem",{name:"Pin column"})).toBeInTheDocument(),await e(t.getByRole("menuitem",{name:"Configure Columns"})).toBeInTheDocument(),await T.keyboard("{Escape}")}};var m,r,s;n.parameters={...n.parameters,docs:{...(m=n.parameters)==null?void 0:m.docs,source:{originalSource:`{
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
