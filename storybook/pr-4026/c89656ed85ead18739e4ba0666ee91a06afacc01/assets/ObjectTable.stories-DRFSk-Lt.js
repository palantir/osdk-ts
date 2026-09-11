import{j as i}from"./iframe-CrZ39q4W.js";import{O as p}from"./object-table-D26OUOhu.js";import{E as c}from"./Employee-BAk2o20h.js";import{d as l,o as u,T as d,a as y}from"./objectTableStoryHelpers-C140M9qn.js";import"./preload-helper-CBYzcUhb.js";import"./Table-sL8vfG-J.js";import"./index-BD7m3jFK.js";import"./Dialog-C2Aq5Vnf.js";import"./cross-CgqXpQyr.js";import"./svgIconContainer-JiAQFJfX.js";import"./useBaseUiId-sTwbXHgE.js";import"./InternalBackdrop-C5GI9506.js";import"./composite-DRGdlpPN.js";import"./index-C_XnOq4s.js";import"./index--ClJ2plo.js";import"./index-CE_0GkNT.js";import"./useEventCallback-B3yH_W0Y.js";import"./SkeletonBar-CM8cFu92.js";import"./LoadingCell-deaFhM3X.js";import"./ColumnConfigDialog-DbRgxxnF.js";import"./DraggableList-BojvlFr5.js";import"./search-BqRMZJ3s.js";import"./Input-DIQd25cc.js";import"./useControlled-BBNkc-4m.js";import"./Button-C2GAq-XZ.js";import"./small-cross-Dpu5uUbJ.js";import"./ActionButton-DwqwMLmx.js";import"./Checkbox-DxQnBKfn.js";import"./useValueChanged-6_0vBwFL.js";import"./CollapsiblePanel-AgJKSqQy.js";import"./MultiColumnSortDialog-_im0eHu_.js";import"./MenuTrigger-CopAsfDs.js";import"./CompositeItem-DwChmrQE.js";import"./ToolbarRootContext-Bd0nHJjt.js";import"./getDisabledMountTransitionStyles-D3nUrh49.js";import"./getPseudoElementBounds-C_NMVDl6.js";import"./chevron-down-Do1ARTyC.js";import"./index-DyFGpZZr.js";import"./error-mXLWjtku.js";import"./BaseCbacBanner-DsLWPX37.js";import"./makeExternalStore-Bbx2CBha.js";import"./Tooltip-GYXLgvYO.js";import"./PopoverPopup-DSVB_f17.js";import"./debounce-CrnOUVh-.js";import"./useOsdkClient-DGv3o-sm.js";import"./tick-lwLiufa4.js";import"./DropdownField-CpkGq24N.js";import"./isEqual-cp97OYAK.js";import"./withOsdkMetrics-CEEcnA0Y.js";const{expect:e,screen:t,userEvent:T,within:f}=__STORYBOOK_MODULE_TEST__,ue={...u,title:"Components/ObjectTable"},n={args:{objectType:c,columnDefinitions:l},parameters:{docs:{description:{story:"Minimal setup showing Employee data with default column definitions."},source:{code:"<ObjectTable objectType={Employee} />"}}},render:o=>i.jsx("div",{className:"object-table-container",style:{height:"600px"},children:i.jsx(p,{...o})}),play:async({canvasElement:o})=>{const a=f(o);await a.findByText(d),await y(a,"fullName"),await e(await t.findByRole("menuitem",{name:"Sort ascending"})).toBeInTheDocument(),await e(t.getByRole("menuitem",{name:"Sort descending"})).toBeInTheDocument(),await e(t.getByRole("menuitem",{name:"Pin column"})).toBeInTheDocument(),await e(t.getByRole("menuitem",{name:"Configure Columns"})).toBeInTheDocument(),await T.keyboard("{Escape}")}};var m,r,s;n.parameters={...n.parameters,docs:{...(m=n.parameters)==null?void 0:m.docs,source:{originalSource:`{
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
