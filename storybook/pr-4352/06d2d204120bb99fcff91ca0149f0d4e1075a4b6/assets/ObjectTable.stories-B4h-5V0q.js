import{j as i}from"./iframe-w4y9aXDU.js";import{O as p}from"./object-table-DKZptHFY.js";import{E as c}from"./Employee-BAk2o20h.js";import{d as l,o as u,T as d,a as y}from"./objectTableStoryHelpers-C-yS2BSC.js";import"./preload-helper-CnLs-Hgu.js";import"./Table-DGXl8lCv.js";import"./index-Dt7u2oHj.js";import"./Dialog-DRi7MYpb.js";import"./cross-DXnz5KvW.js";import"./svgIconContainer-CmEhYz6E.js";import"./useBaseUiId-F1YYLfsj.js";import"./InternalBackdrop-MfBzn4fw.js";import"./composite-B-RTr01b.js";import"./index-BIFcK0O4.js";import"./index-B0uCtLgl.js";import"./index-BlxHpFGo.js";import"./useEventCallback-BXF47S9-.js";import"./SkeletonBar-BIDpA40h.js";import"./LoadingCell-LVMMQK3T.js";import"./ColumnConfigDialog-ymokFQ3x.js";import"./DraggableList-Dt_zEa3K.js";import"./search-Cp34eK_v.js";import"./Input-O7Y8xsdh.js";import"./useControlled-C9ba4gpK.js";import"./Button-o-glHusr.js";import"./small-cross-C92MDA4P.js";import"./ActionButton-U4isYHc7.js";import"./Checkbox-D55iodXx.js";import"./useValueChanged-D3XhtpAV.js";import"./CollapsiblePanel-BLYyv3wb.js";import"./MultiColumnSortDialog-DUWaEEgT.js";import"./MenuTrigger-CUAkYVeE.js";import"./CompositeItem-Cd8pgrRU.js";import"./ToolbarRootContext-D5jHJ_gp.js";import"./getDisabledMountTransitionStyles-CuTU5WjT.js";import"./getPseudoElementBounds-Bg2TtJd6.js";import"./chevron-down-BBcbr8vg.js";import"./index-OXOrABe5.js";import"./error-8BgSEFU8.js";import"./BaseCbacBanner-CBpK3U6l.js";import"./makeExternalStore-BvoAQS4K.js";import"./Tooltip-Dj27hk9q.js";import"./isObject-WnGrlPIk.js";import"./debounce-CkZWp4sm.js";import"./useOsdkClient-Bbq68KDs.js";import"./tick-SaijwqI0.js";import"./DropdownField-aGwR7wao.js";import"./isEqual-DiUSZu8r.js";import"./_baseIsEqual-CUKKLhLC.js";import"./withOsdkMetrics-BEOTlVIH.js";const{expect:e,screen:t,userEvent:T,within:f}=__STORYBOOK_MODULE_TEST__,de={...u,title:"Components/ObjectTable"},n={args:{objectType:c,columnDefinitions:l},parameters:{docs:{description:{story:"Minimal setup showing Employee data with default column definitions."},source:{code:"<ObjectTable objectType={Employee} />"}}},render:o=>i.jsx("div",{className:"object-table-container",style:{height:"600px"},children:i.jsx(p,{...o})}),play:async({canvasElement:o})=>{const a=f(o);await a.findByText(d),await y(a,"fullName"),await e(await t.findByRole("menuitem",{name:"Sort ascending"})).toBeInTheDocument(),await e(t.getByRole("menuitem",{name:"Sort descending"})).toBeInTheDocument(),await e(t.getByRole("menuitem",{name:"Pin column"})).toBeInTheDocument(),await e(t.getByRole("menuitem",{name:"Configure Columns"})).toBeInTheDocument(),await T.keyboard("{Escape}")}};var m,r,s;n.parameters={...n.parameters,docs:{...(m=n.parameters)==null?void 0:m.docs,source:{originalSource:`{
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
}`,...(s=(r=n.parameters)==null?void 0:r.docs)==null?void 0:s.source}}};const ye=["Default"];export{n as Default,ye as __namedExportsOrder,de as default};
