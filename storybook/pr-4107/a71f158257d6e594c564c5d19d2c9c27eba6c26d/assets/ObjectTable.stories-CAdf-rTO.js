import{j as i}from"./iframe-weo2ftOt.js";import{O as p}from"./object-table-MPznOHsn.js";import{E as c}from"./Employee-BAk2o20h.js";import{d as l,o as u,T as d,a as y}from"./objectTableStoryHelpers-8u_uwB_2.js";import"./preload-helper-CccATkyg.js";import"./Table-C9cmQgMl.js";import"./index-BzFNlzeA.js";import"./Dialog-DXnfnG2Y.js";import"./cross-DFxtUTH2.js";import"./svgIconContainer-4wqza-Yn.js";import"./useBaseUiId-Ca9MSPeN.js";import"./InternalBackdrop-CuieHGY6.js";import"./composite-CXbXQTWA.js";import"./index-CwVuW96i.js";import"./index-OwV8MnsF.js";import"./index-BdXrAkiS.js";import"./useEventCallback-CDd5n6gg.js";import"./SkeletonBar-CDPR9pBR.js";import"./LoadingCell-WuxZExiN.js";import"./ColumnConfigDialog-BoYEBqur.js";import"./DraggableList-CrnBYdkh.js";import"./search-D7AcF35x.js";import"./Input-DDH0znUE.js";import"./useControlled-BR3V1Gxk.js";import"./Button-DTZufqgI.js";import"./small-cross-DMF81cbr.js";import"./ActionButton-yOO-hwGF.js";import"./Checkbox-BD6MUUao.js";import"./useValueChanged-47o-AHo4.js";import"./CollapsiblePanel-MUmgFy3O.js";import"./MultiColumnSortDialog-n4XkIf-Z.js";import"./MenuTrigger-BRpqpide.js";import"./CompositeItem-tLUZG1Hv.js";import"./ToolbarRootContext-9vNtX9N5.js";import"./getDisabledMountTransitionStyles-CJygm4kF.js";import"./getPseudoElementBounds-B7YRzaVu.js";import"./chevron-down-BqDjxAzh.js";import"./index-jbXLVEma.js";import"./error-LA7kedRF.js";import"./BaseCbacBanner-DgWEbDvw.js";import"./makeExternalStore-CGRq4C4C.js";import"./Tooltip-BZAy0DbI.js";import"./PopoverPopup-B1Tf3m9o.js";import"./debounce-C2Mlteaf.js";import"./useOsdkClient-DWTjpIGp.js";import"./tick-2nC9-KBm.js";import"./DropdownField-DBrFB89T.js";import"./isEqual-DUHhgGZv.js";import"./withOsdkMetrics-td22ADns.js";const{expect:e,screen:t,userEvent:T,within:f}=__STORYBOOK_MODULE_TEST__,ue={...u,title:"Components/ObjectTable"},n={args:{objectType:c,columnDefinitions:l},parameters:{docs:{description:{story:"Minimal setup showing Employee data with default column definitions."},source:{code:"<ObjectTable objectType={Employee} />"}}},render:o=>i.jsx("div",{className:"object-table-container",style:{height:"600px"},children:i.jsx(p,{...o})}),play:async({canvasElement:o})=>{const a=f(o);await a.findByText(d),await y(a,"fullName"),await e(await t.findByRole("menuitem",{name:"Sort ascending"})).toBeInTheDocument(),await e(t.getByRole("menuitem",{name:"Sort descending"})).toBeInTheDocument(),await e(t.getByRole("menuitem",{name:"Pin column"})).toBeInTheDocument(),await e(t.getByRole("menuitem",{name:"Configure Columns"})).toBeInTheDocument(),await T.keyboard("{Escape}")}};var m,r,s;n.parameters={...n.parameters,docs:{...(m=n.parameters)==null?void 0:m.docs,source:{originalSource:`{
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
