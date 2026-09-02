import{j as i}from"./iframe-CtxcX-T2.js";import{O as p}from"./object-table-kvkm7oWa.js";import{E as c}from"./Employee-BAk2o20h.js";import{d as l,o as u,T as d,a as y}from"./objectTableStoryHelpers-rF8HcU--.js";import"./preload-helper-cYb1s-yj.js";import"./Table-BmEf-WHf.js";import"./index-B-TRiKN3.js";import"./Dialog-BuqAw-Am.js";import"./cross-CSOzfLob.js";import"./svgIconContainer-BdWsevkC.js";import"./useBaseUiId-BKQN5rZA.js";import"./InternalBackdrop-DcUKIKDf.js";import"./composite-Bg1E-ATT.js";import"./index-B31wHl9O.js";import"./index-Bx6oSTgH.js";import"./index-CQTEzx2i.js";import"./useEventCallback-CJSRmKCz.js";import"./SkeletonBar-DtSb_BRI.js";import"./LoadingCell-CEMsrPxC.js";import"./ColumnConfigDialog-BqMCCnNj.js";import"./DraggableList-BzQY0SAw.js";import"./search-CRmL15NB.js";import"./Input-Bv3vf0p7.js";import"./useControlled-KB7Tt3--.js";import"./Button-DtDTCbH_.js";import"./small-cross-Ba9dhW_V.js";import"./ActionButton-BaPZa1OF.js";import"./Checkbox-4p89Vpq6.js";import"./useValueChanged-CJyhwRpH.js";import"./CollapsiblePanel-CmD8octv.js";import"./MultiColumnSortDialog-DpfErL7k.js";import"./MenuTrigger-DFIUIXzr.js";import"./CompositeItem-BOSOz_c1.js";import"./ToolbarRootContext-TRfEDRwF.js";import"./getDisabledMountTransitionStyles-C0Z2RaMf.js";import"./getPseudoElementBounds-D7H1yTKx.js";import"./chevron-down-tzfqMRfe.js";import"./index-WzODq6Cd.js";import"./error-0r8auSif.js";import"./BaseCbacBanner-CeYCNyo5.js";import"./makeExternalStore-ycTRB21p.js";import"./Tooltip-etk01HFg.js";import"./PopoverPopup-C7Q6K1hN.js";import"./debounce-BdaueHY_.js";import"./useOsdkClient-B2tD5ZA9.js";import"./tick-C8bzjg5y.js";import"./DropdownField-51JHrmyh.js";import"./isEqual-BsD_zmUv.js";import"./withOsdkMetrics-CFtxLfFR.js";const{expect:e,screen:t,userEvent:T,within:f}=__STORYBOOK_MODULE_TEST__,ue={...u,title:"Components/ObjectTable"},n={args:{objectType:c,columnDefinitions:l},parameters:{docs:{description:{story:"Minimal setup showing Employee data with default column definitions."},source:{code:"<ObjectTable objectType={Employee} />"}}},render:o=>i.jsx("div",{className:"object-table-container",style:{height:"600px"},children:i.jsx(p,{...o})}),play:async({canvasElement:o})=>{const a=f(o);await a.findByText(d),await y(a,"fullName"),await e(await t.findByRole("menuitem",{name:"Sort ascending"})).toBeInTheDocument(),await e(t.getByRole("menuitem",{name:"Sort descending"})).toBeInTheDocument(),await e(t.getByRole("menuitem",{name:"Pin column"})).toBeInTheDocument(),await e(t.getByRole("menuitem",{name:"Configure Columns"})).toBeInTheDocument(),await T.keyboard("{Escape}")}};var m,r,s;n.parameters={...n.parameters,docs:{...(m=n.parameters)==null?void 0:m.docs,source:{originalSource:`{
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
