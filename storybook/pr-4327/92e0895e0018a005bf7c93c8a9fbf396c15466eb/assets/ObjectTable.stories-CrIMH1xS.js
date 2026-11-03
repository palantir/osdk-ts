import{j as i}from"./iframe-BJUxpguS.js";import{O as p}from"./object-table-BoMBFXNC.js";import{E as c}from"./Employee-BAk2o20h.js";import{d as l,o as u,T as d,a as y}from"./objectTableStoryHelpers-DtF0OX4n.js";import"./preload-helper-CcPnSf_d.js";import"./Table-SjKZWein.js";import"./index-DaIWjini.js";import"./Dialog-BO-pnz8v.js";import"./cross-CF3gkRQt.js";import"./svgIconContainer-DFZK57uZ.js";import"./useBaseUiId-CUsRHIZ_.js";import"./InternalBackdrop-D_jiv0BX.js";import"./composite-fRasBjEb.js";import"./index-CRptwoO3.js";import"./index-CqveWGS6.js";import"./index-DM_u1KSh.js";import"./useEventCallback-BdXNRzTJ.js";import"./SkeletonBar-Dx6k6i1c.js";import"./LoadingCell-DF0g9G0l.js";import"./ColumnConfigDialog-BpGsYJSX.js";import"./DraggableList-C-XFZCOA.js";import"./search-82BfoOmm.js";import"./Input-JPeJu_Ok.js";import"./useControlled-CV2ikSFn.js";import"./Button-D6-FRmxX.js";import"./small-cross-EomOHUA5.js";import"./ActionButton-DgVSwbQq.js";import"./Checkbox-TQ-A7mqx.js";import"./useValueChanged-C99NUcrN.js";import"./CollapsiblePanel-CqwlYKwl.js";import"./MultiColumnSortDialog-fgaaPMWx.js";import"./MenuTrigger-BYN6WcMd.js";import"./CompositeItem-DC6J7O9B.js";import"./ToolbarRootContext-96Mx370G.js";import"./getDisabledMountTransitionStyles-oGlN2umk.js";import"./getPseudoElementBounds-DSYHNq3I.js";import"./chevron-down-D_Er5Djl.js";import"./index-DJciXKq6.js";import"./error-GeJDXztf.js";import"./BaseCbacBanner-Ccl4dO1s.js";import"./makeExternalStore-CsEdzCsV.js";import"./Tooltip-B80-nJEh.js";import"./PopoverPopup-BETux0X9.js";import"./debounce-BHhTV7Zm.js";import"./useOsdkClient-mJtFvI3C.js";import"./tick-DBILgLMj.js";import"./DropdownField-C6X6tb8E.js";import"./isEqual-BDUZntms.js";import"./withOsdkMetrics-CmE_vyV8.js";const{expect:e,screen:t,userEvent:T,within:f}=__STORYBOOK_MODULE_TEST__,ue={...u,title:"Components/ObjectTable"},n={args:{objectType:c,columnDefinitions:l},parameters:{docs:{description:{story:"Minimal setup showing Employee data with default column definitions."},source:{code:"<ObjectTable objectType={Employee} />"}}},render:o=>i.jsx("div",{className:"object-table-container",style:{height:"600px"},children:i.jsx(p,{...o})}),play:async({canvasElement:o})=>{const a=f(o);await a.findByText(d),await y(a,"fullName"),await e(await t.findByRole("menuitem",{name:"Sort ascending"})).toBeInTheDocument(),await e(t.getByRole("menuitem",{name:"Sort descending"})).toBeInTheDocument(),await e(t.getByRole("menuitem",{name:"Pin column"})).toBeInTheDocument(),await e(t.getByRole("menuitem",{name:"Configure Columns"})).toBeInTheDocument(),await T.keyboard("{Escape}")}};var m,r,s;n.parameters={...n.parameters,docs:{...(m=n.parameters)==null?void 0:m.docs,source:{originalSource:`{
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
