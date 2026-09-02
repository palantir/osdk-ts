import{j as i}from"./iframe-BHUFYaIi.js";import{O as p}from"./object-table-BpSuzW6M.js";import{E as c}from"./Employee-BAk2o20h.js";import{d as l,o as u,T as d,a as y}from"./objectTableStoryHelpers-zEjDm_Ak.js";import"./preload-helper-XnuLqDXH.js";import"./Table-CYeOpkhw.js";import"./index-Cv4N1cyr.js";import"./Dialog-Cp13S4Si.js";import"./cross-BOaBzgsR.js";import"./svgIconContainer-BwQXc51L.js";import"./useBaseUiId-MuM6uWGO.js";import"./InternalBackdrop-DUSHaGPj.js";import"./composite-B11uKuMK.js";import"./index-BPIvu6CK.js";import"./index-pncntrbL.js";import"./index-BxDALGli.js";import"./useEventCallback-DlrRREsq.js";import"./SkeletonBar-ij_FTAsS.js";import"./LoadingCell-DptSXl9K.js";import"./ColumnConfigDialog-DjN3HRYd.js";import"./DraggableList-lLbeAFUA.js";import"./search-CLJDIGSY.js";import"./Input-DjWGIh_z.js";import"./useControlled-CDjv9IaU.js";import"./Button-BLcFnS6Y.js";import"./small-cross-D9b89U2o.js";import"./ActionButton-D74MdW_-.js";import"./Checkbox-DyL8kHLu.js";import"./useValueChanged-BY36D3U1.js";import"./CollapsiblePanel-DUF4My8r.js";import"./MultiColumnSortDialog-Tg8SCamW.js";import"./MenuTrigger-B54q71Ab.js";import"./CompositeItem-MMdNYb42.js";import"./ToolbarRootContext-BeFb59Mm.js";import"./getDisabledMountTransitionStyles-Cs7RsEkT.js";import"./getPseudoElementBounds-DtwWcLj3.js";import"./chevron-down-BXEOl8Ri.js";import"./index-CWLFPPbc.js";import"./error-V_uXrOkx.js";import"./BaseCbacBanner-4MO9OZQU.js";import"./makeExternalStore-DlAYw1no.js";import"./Tooltip-CjOEcU2b.js";import"./PopoverPopup-ktlHKRLg.js";import"./debounce-CcDJlsBH.js";import"./useOsdkClient-Dq42XRO4.js";import"./tick-BKcWfYV_.js";import"./DropdownField-6qZcqvj8.js";import"./isEqual-Bx2Ngtz_.js";import"./withOsdkMetrics-D-xlszSM.js";const{expect:e,screen:t,userEvent:T,within:f}=__STORYBOOK_MODULE_TEST__,ue={...u,title:"Components/ObjectTable"},n={args:{objectType:c,columnDefinitions:l},parameters:{docs:{description:{story:"Minimal setup showing Employee data with default column definitions."},source:{code:"<ObjectTable objectType={Employee} />"}}},render:o=>i.jsx("div",{className:"object-table-container",style:{height:"600px"},children:i.jsx(p,{...o})}),play:async({canvasElement:o})=>{const a=f(o);await a.findByText(d),await y(a,"fullName"),await e(await t.findByRole("menuitem",{name:"Sort ascending"})).toBeInTheDocument(),await e(t.getByRole("menuitem",{name:"Sort descending"})).toBeInTheDocument(),await e(t.getByRole("menuitem",{name:"Pin column"})).toBeInTheDocument(),await e(t.getByRole("menuitem",{name:"Configure Columns"})).toBeInTheDocument(),await T.keyboard("{Escape}")}};var m,r,s;n.parameters={...n.parameters,docs:{...(m=n.parameters)==null?void 0:m.docs,source:{originalSource:`{
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
