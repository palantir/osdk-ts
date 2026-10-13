import{j as i}from"./iframe-BkcR1iue.js";import{O as p}from"./object-table-BcUcdCDw.js";import{E as c}from"./Employee-BAk2o20h.js";import{d as l,o as u,T as d,a as y}from"./objectTableStoryHelpers-CbUp0pHm.js";import"./preload-helper-DrQC6sAs.js";import"./Table-BAjYpOyb.js";import"./index-C48hokBn.js";import"./Dialog-BOX_hYeF.js";import"./cross-Dq5JHURf.js";import"./svgIconContainer-5EXbYaZG.js";import"./useBaseUiId-CMez3yYq.js";import"./InternalBackdrop-BrNgLYU2.js";import"./composite-BvN8B2j0.js";import"./index-BcdwcPhB.js";import"./index-B7w41dnZ.js";import"./index-BKyA0SCA.js";import"./useEventCallback-D_30EqT4.js";import"./SkeletonBar-BKmKsv8M.js";import"./LoadingCell-Ds-wFaWb.js";import"./ColumnConfigDialog-BAHtvu7w.js";import"./DraggableList-ByXDWqnG.js";import"./search--B6bPp9Q.js";import"./Input-7EUJZBSZ.js";import"./useControlled-DQuU9HTi.js";import"./Button-B40tdNrN.js";import"./small-cross-BP75-g7J.js";import"./ActionButton-CX5WcJy8.js";import"./Checkbox-Vz2qtBJd.js";import"./useValueChanged-tSsYdvqu.js";import"./CollapsiblePanel-BpfLB0ao.js";import"./MultiColumnSortDialog-BSR3YyAt.js";import"./MenuTrigger-DWJBs6c7.js";import"./CompositeItem-D6GgTBoR.js";import"./ToolbarRootContext--E-pClz6.js";import"./getDisabledMountTransitionStyles-hWWFi-qA.js";import"./getPseudoElementBounds-C9SU6CHl.js";import"./chevron-down-B8DDqxwj.js";import"./index-oeK8lm2i.js";import"./error-Dqr8KpcY.js";import"./BaseCbacBanner-CkxMaWmX.js";import"./makeExternalStore-DjRLK8zO.js";import"./Tooltip-C95BVVCQ.js";import"./PopoverPopup-BAQ5vkX7.js";import"./debounce-BR3HCMrO.js";import"./useOsdkClient-BE9XndJ0.js";import"./tick-qW1a1XW7.js";import"./DropdownField-Ddw27l5N.js";import"./isEqual-CEFtvlzz.js";import"./withOsdkMetrics-DHpidme4.js";const{expect:e,screen:t,userEvent:T,within:f}=__STORYBOOK_MODULE_TEST__,ue={...u,title:"Components/ObjectTable"},n={args:{objectType:c,columnDefinitions:l},parameters:{docs:{description:{story:"Minimal setup showing Employee data with default column definitions."},source:{code:"<ObjectTable objectType={Employee} />"}}},render:o=>i.jsx("div",{className:"object-table-container",style:{height:"600px"},children:i.jsx(p,{...o})}),play:async({canvasElement:o})=>{const a=f(o);await a.findByText(d),await y(a,"fullName"),await e(await t.findByRole("menuitem",{name:"Sort ascending"})).toBeInTheDocument(),await e(t.getByRole("menuitem",{name:"Sort descending"})).toBeInTheDocument(),await e(t.getByRole("menuitem",{name:"Pin column"})).toBeInTheDocument(),await e(t.getByRole("menuitem",{name:"Configure Columns"})).toBeInTheDocument(),await T.keyboard("{Escape}")}};var m,r,s;n.parameters={...n.parameters,docs:{...(m=n.parameters)==null?void 0:m.docs,source:{originalSource:`{
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
