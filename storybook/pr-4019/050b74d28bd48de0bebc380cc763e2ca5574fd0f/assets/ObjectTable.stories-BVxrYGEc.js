import{j as i}from"./iframe-oQpn4zur.js";import{O as p}from"./object-table-rOPQcFMe.js";import{E as c}from"./Employee-BAk2o20h.js";import{d as l,o as u,T as d,a as y}from"./objectTableStoryHelpers-CBK2Ane1.js";import"./preload-helper-Cmjd7BI4.js";import"./Table-DpinA8Jj.js";import"./index-D2rifVxK.js";import"./Dialog-Dr89oVDu.js";import"./cross-xvCB5p22.js";import"./svgIconContainer-CsxtAqM7.js";import"./useBaseUiId-pVATQNHL.js";import"./InternalBackdrop-BjzdZcIz.js";import"./composite-C_bfQ-PM.js";import"./index-BgH4UIQM.js";import"./index--_6_irpc.js";import"./index-wyLBv6ta.js";import"./useEventCallback-DBs_uy7k.js";import"./SkeletonBar-BNFrP5fb.js";import"./LoadingCell-B7rs415M.js";import"./ColumnConfigDialog-1H_3wJZg.js";import"./DraggableList-CkiAvO03.js";import"./search-CwzMMbdj.js";import"./Input-BTa_bWxE.js";import"./useControlled-DKwwdhXV.js";import"./Button-DcQk0Vz0.js";import"./small-cross-S_zs3rbw.js";import"./ActionButton-Dwc2giVA.js";import"./Checkbox-DvPIwl-U.js";import"./useValueChanged-fHbpa3Ve.js";import"./CollapsiblePanel-BprHq_-m.js";import"./MultiColumnSortDialog-BhA7iuO4.js";import"./MenuTrigger-Crnh6Nym.js";import"./CompositeItem-M0o16Fhw.js";import"./ToolbarRootContext-C0a0ALA7.js";import"./getDisabledMountTransitionStyles-BNE85OYQ.js";import"./getPseudoElementBounds-DpQWAe0p.js";import"./chevron-down-DhcH1mZx.js";import"./index-CP1r_S59.js";import"./error-G32g_aWE.js";import"./BaseCbacBanner-Cqjvid3G.js";import"./makeExternalStore-8N_JBzmB.js";import"./Tooltip-CnHU-6Zj.js";import"./PopoverPopup-ChSQAsi2.js";import"./debounce-DH6i8tLU.js";import"./useOsdkClient-Dge9q3q2.js";import"./tick-yvYbXRUk.js";import"./DropdownField-DosPwAAS.js";import"./isEqual-CF2VyX-K.js";import"./withOsdkMetrics-C1JB2Ffo.js";const{expect:e,screen:t,userEvent:T,within:f}=__STORYBOOK_MODULE_TEST__,ue={...u,title:"Components/ObjectTable"},n={args:{objectType:c,columnDefinitions:l},parameters:{docs:{description:{story:"Minimal setup showing Employee data with default column definitions."},source:{code:"<ObjectTable objectType={Employee} />"}}},render:o=>i.jsx("div",{className:"object-table-container",style:{height:"600px"},children:i.jsx(p,{...o})}),play:async({canvasElement:o})=>{const a=f(o);await a.findByText(d),await y(a,"fullName"),await e(await t.findByRole("menuitem",{name:"Sort ascending"})).toBeInTheDocument(),await e(t.getByRole("menuitem",{name:"Sort descending"})).toBeInTheDocument(),await e(t.getByRole("menuitem",{name:"Pin column"})).toBeInTheDocument(),await e(t.getByRole("menuitem",{name:"Configure Columns"})).toBeInTheDocument(),await T.keyboard("{Escape}")}};var m,r,s;n.parameters={...n.parameters,docs:{...(m=n.parameters)==null?void 0:m.docs,source:{originalSource:`{
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
