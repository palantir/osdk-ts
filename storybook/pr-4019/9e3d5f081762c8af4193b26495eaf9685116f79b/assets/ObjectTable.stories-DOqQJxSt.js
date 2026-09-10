import{j as i}from"./iframe-Djf7Pdxr.js";import{O as p}from"./object-table-DFZPT3wI.js";import{E as c}from"./Employee-BAk2o20h.js";import{d as l,o as u,T as d,a as y}from"./objectTableStoryHelpers-BNEWRs11.js";import"./preload-helper-bqmPmNVM.js";import"./Table-CUYanXua.js";import"./index-q-X2FPlx.js";import"./Dialog-CqoD48et.js";import"./cross-DFIWw1bP.js";import"./svgIconContainer-BOlRpQyp.js";import"./useBaseUiId-CFhAQZOZ.js";import"./InternalBackdrop-CkSj7F1A.js";import"./composite-IAQwOYh1.js";import"./index-Br-LNr6E.js";import"./index-B_8x8Udt.js";import"./index-LG6ddP-y.js";import"./useEventCallback-B4USqeZP.js";import"./SkeletonBar-Di0gRprg.js";import"./LoadingCell-nhC1WRnp.js";import"./ColumnConfigDialog-qIiF7Qmm.js";import"./DraggableList-B59aQ1_o.js";import"./search-Ddeiu8tt.js";import"./Input-BOeBxQZ8.js";import"./useControlled-DBGPJ9YV.js";import"./Button-DSU1CbLm.js";import"./small-cross-DLOt1VKh.js";import"./ActionButton-Deev-KTG.js";import"./Checkbox-CwEaVyEP.js";import"./useValueChanged-BePRkA2B.js";import"./CollapsiblePanel-CfVuO8FY.js";import"./MultiColumnSortDialog-DwWScOiH.js";import"./MenuTrigger-CRUWzkdL.js";import"./CompositeItem-CA-IJTMc.js";import"./ToolbarRootContext-DMoWDH_V.js";import"./getDisabledMountTransitionStyles-DC6748tP.js";import"./getPseudoElementBounds-CrTEc-vZ.js";import"./chevron-down-CuR5Ei1Z.js";import"./index-3wqM3UEs.js";import"./error-D2_XhANl.js";import"./BaseCbacBanner-5-cpvsaG.js";import"./makeExternalStore-D2eKyzGX.js";import"./Tooltip-B7UeItRk.js";import"./PopoverPopup-aCIXJynx.js";import"./debounce-Dwy6RrjG.js";import"./useOsdkClient-Crp_QmkC.js";import"./tick-CwOgbQYe.js";import"./DropdownField-BbRr8BI8.js";import"./isEqual-BXTqGgF_.js";import"./withOsdkMetrics-Bs-xSy0E.js";const{expect:e,screen:t,userEvent:T,within:f}=__STORYBOOK_MODULE_TEST__,ue={...u,title:"Components/ObjectTable"},n={args:{objectType:c,columnDefinitions:l},parameters:{docs:{description:{story:"Minimal setup showing Employee data with default column definitions."},source:{code:"<ObjectTable objectType={Employee} />"}}},render:o=>i.jsx("div",{className:"object-table-container",style:{height:"600px"},children:i.jsx(p,{...o})}),play:async({canvasElement:o})=>{const a=f(o);await a.findByText(d),await y(a,"fullName"),await e(await t.findByRole("menuitem",{name:"Sort ascending"})).toBeInTheDocument(),await e(t.getByRole("menuitem",{name:"Sort descending"})).toBeInTheDocument(),await e(t.getByRole("menuitem",{name:"Pin column"})).toBeInTheDocument(),await e(t.getByRole("menuitem",{name:"Configure Columns"})).toBeInTheDocument(),await T.keyboard("{Escape}")}};var m,r,s;n.parameters={...n.parameters,docs:{...(m=n.parameters)==null?void 0:m.docs,source:{originalSource:`{
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
