import{j as i}from"./iframe-BJ8SXgdR.js";import{O as p}from"./object-table-CWeCoiL5.js";import{E as c}from"./Employee-BAk2o20h.js";import{d as l,o as u,T as d,a as y}from"./objectTableStoryHelpers-BMzTrv3s.js";import"./preload-helper-V6nC4EeU.js";import"./Table-qAwHNlkQ.js";import"./index-Bw4Jw5oO.js";import"./Dialog-U1Dip0Gr.js";import"./cross-Cg7DwYSC.js";import"./svgIconContainer-CsUfQGRN.js";import"./useBaseUiId-M7m_99-n.js";import"./InternalBackdrop-CabKfl1h.js";import"./composite-BEEWgOuz.js";import"./index-DxcYU98l.js";import"./index--VHPLkHF.js";import"./index-ssIrkCkG.js";import"./useEventCallback-CinkpAtu.js";import"./SkeletonBar-DpuQzJmF.js";import"./LoadingCell-CuzgtItD.js";import"./ColumnConfigDialog-D6wmS011.js";import"./DraggableList-C3UvcNQn.js";import"./search-Dw_fxnZ-.js";import"./Input-Bx9J3YZM.js";import"./useControlled-CjUkOTZX.js";import"./Button-DRmMomPf.js";import"./small-cross-P3lS_YZs.js";import"./ActionButton-D89xaVN-.js";import"./Checkbox-BzzgzOmH.js";import"./useValueChanged-CUJ7FvbC.js";import"./CollapsiblePanel-WrEQ8Aj1.js";import"./MultiColumnSortDialog-D3aS1vk5.js";import"./MenuTrigger-DO4jvPyO.js";import"./CompositeItem-ehmW8yGD.js";import"./ToolbarRootContext-r3sR1laS.js";import"./getDisabledMountTransitionStyles-tfkHieO2.js";import"./getPseudoElementBounds-Dbt1NZMt.js";import"./chevron-down-oM9ZgJIx.js";import"./index-CctNg8Ui.js";import"./error-C-Q6AIHf.js";import"./BaseCbacBanner-DasqhKcc.js";import"./makeExternalStore-CufKkCEE.js";import"./Tooltip-DOYwrPSE.js";import"./PopoverPopup-DomnOyt_.js";import"./debounce-Hk7rnih5.js";import"./useOsdkClient-Dj34DS5Y.js";import"./tick-p2qDXWT_.js";import"./DropdownField-BHqZuFPG.js";import"./isEqual-B9nd0WBh.js";import"./withOsdkMetrics-CteTFdb3.js";const{expect:e,screen:t,userEvent:T,within:f}=__STORYBOOK_MODULE_TEST__,ue={...u,title:"Components/ObjectTable"},n={args:{objectType:c,columnDefinitions:l},parameters:{docs:{description:{story:"Minimal setup showing Employee data with default column definitions."},source:{code:"<ObjectTable objectType={Employee} />"}}},render:o=>i.jsx("div",{className:"object-table-container",style:{height:"600px"},children:i.jsx(p,{...o})}),play:async({canvasElement:o})=>{const a=f(o);await a.findByText(d),await y(a,"fullName"),await e(await t.findByRole("menuitem",{name:"Sort ascending"})).toBeInTheDocument(),await e(t.getByRole("menuitem",{name:"Sort descending"})).toBeInTheDocument(),await e(t.getByRole("menuitem",{name:"Pin column"})).toBeInTheDocument(),await e(t.getByRole("menuitem",{name:"Configure Columns"})).toBeInTheDocument(),await T.keyboard("{Escape}")}};var m,r,s;n.parameters={...n.parameters,docs:{...(m=n.parameters)==null?void 0:m.docs,source:{originalSource:`{
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
