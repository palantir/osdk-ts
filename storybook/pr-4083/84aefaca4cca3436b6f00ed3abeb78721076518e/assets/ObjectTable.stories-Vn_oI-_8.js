import{j as i}from"./iframe-Bd2YI4f_.js";import{O as p}from"./object-table-DtWdM-f8.js";import{E as c}from"./Employee-BAk2o20h.js";import{d as l,o as u,T as d,a as y}from"./objectTableStoryHelpers-Dr6s93Hz.js";import"./preload-helper-BbK45qka.js";import"./Table-CEdDTvki.js";import"./index-Bj2fqRcr.js";import"./Dialog-DnSnZBm1.js";import"./cross-CahcDK0M.js";import"./svgIconContainer-CNqvkdfy.js";import"./useBaseUiId-sg5e61RZ.js";import"./InternalBackdrop-Ci_t8QuG.js";import"./composite-Do-T19t0.js";import"./index-QyRfwHjS.js";import"./index-ByZnXX35.js";import"./index-kM3whwnL.js";import"./useEventCallback-CaosUMx5.js";import"./SkeletonBar-CNiEEHDq.js";import"./LoadingCell-BMG4A14y.js";import"./ColumnConfigDialog-O7ixeZfM.js";import"./DraggableList-BkuXcTUX.js";import"./search-DvsXbyC6.js";import"./Input-CxGxfdRH.js";import"./useControlled-CifkBIG0.js";import"./Button-4-CIF1W1.js";import"./small-cross-BFXkhpYi.js";import"./ActionButton-rIdfbPw7.js";import"./Checkbox-CibPtwGh.js";import"./useValueChanged-qs76lLCO.js";import"./CollapsiblePanel-BAXIEU3S.js";import"./MultiColumnSortDialog-DgAxoJyk.js";import"./MenuTrigger-BUi2_4Ir.js";import"./CompositeItem-C1a6HzSc.js";import"./ToolbarRootContext-CcTA8tLc.js";import"./getDisabledMountTransitionStyles-eLA6B31k.js";import"./getPseudoElementBounds-CM5HIGOw.js";import"./chevron-down-D8kqf24B.js";import"./index-CaI42Rs-.js";import"./error-CA1VPVRX.js";import"./BaseCbacBanner-CyjzlRcm.js";import"./makeExternalStore-D_-udAfm.js";import"./Tooltip--me0TQ5w.js";import"./PopoverPopup-BSkIYUdh.js";import"./debounce-Be_hd9CS.js";import"./useOsdkClient-uOx8gnHF.js";import"./tick-yBx3a1H4.js";import"./DropdownField-B3fLG3Ni.js";import"./isEqual-6whvuwLP.js";import"./withOsdkMetrics-CmXLVGag.js";const{expect:e,screen:t,userEvent:T,within:f}=__STORYBOOK_MODULE_TEST__,ue={...u,title:"Components/ObjectTable"},n={args:{objectType:c,columnDefinitions:l},parameters:{docs:{description:{story:"Minimal setup showing Employee data with default column definitions."},source:{code:"<ObjectTable objectType={Employee} />"}}},render:o=>i.jsx("div",{className:"object-table-container",style:{height:"600px"},children:i.jsx(p,{...o})}),play:async({canvasElement:o})=>{const a=f(o);await a.findByText(d),await y(a,"fullName"),await e(await t.findByRole("menuitem",{name:"Sort ascending"})).toBeInTheDocument(),await e(t.getByRole("menuitem",{name:"Sort descending"})).toBeInTheDocument(),await e(t.getByRole("menuitem",{name:"Pin column"})).toBeInTheDocument(),await e(t.getByRole("menuitem",{name:"Configure Columns"})).toBeInTheDocument(),await T.keyboard("{Escape}")}};var m,r,s;n.parameters={...n.parameters,docs:{...(m=n.parameters)==null?void 0:m.docs,source:{originalSource:`{
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
