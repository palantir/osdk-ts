import{j as i}from"./iframe-BlKCTUed.js";import{O as p}from"./object-table-HBz2VJ24.js";import{E as c}from"./Employee-BAk2o20h.js";import{d as l,o as u,T as d,a as y}from"./objectTableStoryHelpers-DOVBjoJo.js";import"./preload-helper-BUGYiWCP.js";import"./Table-oOnbFPnT.js";import"./index-CI0skb4B.js";import"./Dialog-CLEff_39.js";import"./cross-CqaO5DBE.js";import"./svgIconContainer-1UB6FZGc.js";import"./useBaseUiId-DkP_imTM.js";import"./InternalBackdrop-h-3naHFk.js";import"./composite-DiiB6odo.js";import"./index-DxXrW0wp.js";import"./index-DDp_OGDu.js";import"./index-Devgl1Vj.js";import"./useEventCallback-meJSs_jZ.js";import"./SkeletonBar-A5cBM3D2.js";import"./LoadingCell-7DK6249Y.js";import"./ColumnConfigDialog-B3hfZtKF.js";import"./DraggableList-DwGx15ty.js";import"./search-CVcVTR0T.js";import"./Input-B33yNZZn.js";import"./useControlled-7Fk4n3DI.js";import"./Button-3Efar3GG.js";import"./small-cross-Ds6jcFq4.js";import"./ActionButton-BV0JGXeO.js";import"./Checkbox-BO_ahlRd.js";import"./useValueChanged-ChY0oQrW.js";import"./CollapsiblePanel-DhQw-8XY.js";import"./MultiColumnSortDialog-n294j2hI.js";import"./MenuTrigger-CwUg0jkL.js";import"./CompositeItem-CV5UwX2b.js";import"./ToolbarRootContext-BHdJXOoh.js";import"./getDisabledMountTransitionStyles-Bk1M6moe.js";import"./getPseudoElementBounds-CEIumeIp.js";import"./chevron-down-FWs3P9jd.js";import"./index-Cg0fRxTo.js";import"./error-D-1ezCIE.js";import"./BaseCbacBanner-BFebLDX9.js";import"./makeExternalStore-D5c3nlfz.js";import"./Tooltip-CiH_3FgC.js";import"./PopoverPopup-CTOgqJnQ.js";import"./debounce-BdvSF5Dr.js";import"./useOsdkClient-imyPShfg.js";import"./tick-CJ-rmnk9.js";import"./DropdownField-B9RkrUKl.js";import"./isEqual-BsAgjwIk.js";import"./withOsdkMetrics-ClE-4wO4.js";const{expect:e,screen:t,userEvent:T,within:f}=__STORYBOOK_MODULE_TEST__,ue={...u,title:"Components/ObjectTable"},n={args:{objectType:c,columnDefinitions:l},parameters:{docs:{description:{story:"Minimal setup showing Employee data with default column definitions."},source:{code:"<ObjectTable objectType={Employee} />"}}},render:o=>i.jsx("div",{className:"object-table-container",style:{height:"600px"},children:i.jsx(p,{...o})}),play:async({canvasElement:o})=>{const a=f(o);await a.findByText(d),await y(a,"fullName"),await e(await t.findByRole("menuitem",{name:"Sort ascending"})).toBeInTheDocument(),await e(t.getByRole("menuitem",{name:"Sort descending"})).toBeInTheDocument(),await e(t.getByRole("menuitem",{name:"Pin column"})).toBeInTheDocument(),await e(t.getByRole("menuitem",{name:"Configure Columns"})).toBeInTheDocument(),await T.keyboard("{Escape}")}};var m,r,s;n.parameters={...n.parameters,docs:{...(m=n.parameters)==null?void 0:m.docs,source:{originalSource:`{
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
