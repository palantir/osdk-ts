import{j as i}from"./iframe-C-CLTpsP.js";import{O as p}from"./object-table-CIflc4pu.js";import{E as c}from"./Employee-BAk2o20h.js";import{d as l,o as u,T as d,a as y}from"./objectTableStoryHelpers-UMfcncv2.js";import"./preload-helper-DHm86PzE.js";import"./Table-C5nW_8ni.js";import"./index-C_yrN8nJ.js";import"./Dialog-qQ2KAtWK.js";import"./cross-Ku2F5rSb.js";import"./svgIconContainer-xNOrsz7C.js";import"./useBaseUiId-CzMe2Dnq.js";import"./InternalBackdrop-CO7iGp_c.js";import"./composite-DJh0mugt.js";import"./index-D40VRMQn.js";import"./index-Cfu6rkCW.js";import"./index-D_FrlNxB.js";import"./useEventCallback-oHg7GWTB.js";import"./SkeletonBar-1j_7hiTq.js";import"./LoadingCell-BS07IboC.js";import"./ColumnConfigDialog-Be6PE_QO.js";import"./DraggableList-B4M9FN93.js";import"./search-CpRfXCb8.js";import"./Input-D24KUx_z.js";import"./useControlled-BMK5_n_x.js";import"./Button-TBXiPdkd.js";import"./small-cross-CXyJ64HZ.js";import"./ActionButton-DHfHgPik.js";import"./Checkbox-DyWv80at.js";import"./useValueChanged-CKIgQS7f.js";import"./CollapsiblePanel-BUkEhtTj.js";import"./MultiColumnSortDialog-uod5evk5.js";import"./MenuTrigger-cy43jePb.js";import"./CompositeItem-DUPoB7w7.js";import"./ToolbarRootContext-BEcPVQJt.js";import"./getDisabledMountTransitionStyles-D9D7SyXr.js";import"./getPseudoElementBounds-CwZa5orc.js";import"./chevron-down-Cj7uY9HA.js";import"./index-D7xNirGy.js";import"./error-B9ihfIkN.js";import"./BaseCbacBanner-BPN3wtD_.js";import"./makeExternalStore-DOqfc4A2.js";import"./Tooltip-Uw4j1Mbj.js";import"./PopoverPopup-DLPr24Ac.js";import"./debounce-DnqzDTdJ.js";import"./useOsdkClient-ChzNHrxJ.js";import"./tick-UvYb-w0t.js";import"./DropdownField-BvX-rLeM.js";import"./isEqual-CicJFhR1.js";import"./withOsdkMetrics-ChVqngv_.js";const{expect:e,screen:t,userEvent:T,within:f}=__STORYBOOK_MODULE_TEST__,ue={...u,title:"Components/ObjectTable"},n={args:{objectType:c,columnDefinitions:l},parameters:{docs:{description:{story:"Minimal setup showing Employee data with default column definitions."},source:{code:"<ObjectTable objectType={Employee} />"}}},render:o=>i.jsx("div",{className:"object-table-container",style:{height:"600px"},children:i.jsx(p,{...o})}),play:async({canvasElement:o})=>{const a=f(o);await a.findByText(d),await y(a,"fullName"),await e(await t.findByRole("menuitem",{name:"Sort ascending"})).toBeInTheDocument(),await e(t.getByRole("menuitem",{name:"Sort descending"})).toBeInTheDocument(),await e(t.getByRole("menuitem",{name:"Pin column"})).toBeInTheDocument(),await e(t.getByRole("menuitem",{name:"Configure Columns"})).toBeInTheDocument(),await T.keyboard("{Escape}")}};var m,r,s;n.parameters={...n.parameters,docs:{...(m=n.parameters)==null?void 0:m.docs,source:{originalSource:`{
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
