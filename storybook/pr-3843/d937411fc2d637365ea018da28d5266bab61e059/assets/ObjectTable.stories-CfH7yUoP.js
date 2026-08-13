import{j as i}from"./iframe-D4PY-PnJ.js";import{O as p}from"./object-table-DpmToVs7.js";import{E as c}from"./Employee-BAk2o20h.js";import{d as l,o as u,T as d,a as y}from"./objectTableStoryHelpers-DJ9vI7Sa.js";import"./preload-helper-01voB3Td.js";import"./Table-B3vWMM1P.js";import"./index-C3ze-A25.js";import"./Dialog-Zgls7Bxd.js";import"./cross-BCNCJ4zW.js";import"./svgIconContainer-BBFbqrO9.js";import"./useBaseUiId-CT5Nuzm7.js";import"./InternalBackdrop-1vKt8Vay.js";import"./composite-BW0oHWLe.js";import"./index-BmSitOna.js";import"./index-OJ7CE0nE.js";import"./index-WAJmZC5y.js";import"./useEventCallback-FrdIwkmw.js";import"./SkeletonBar-DdkRgmzO.js";import"./LoadingCell-DdSLSeFs.js";import"./ColumnConfigDialog-BBmjh2p4.js";import"./DraggableList-D8Qf2YDv.js";import"./search-DhGWTixT.js";import"./Input-DpVdAlwI.js";import"./useControlled-B0YZSF-a.js";import"./isEqual-xzqRc28g.js";import"./isObject-CWtFi4BZ.js";import"./Button-CRplF3wT.js";import"./ActionButton-BeCuIR_r.js";import"./Checkbox-C_rAo4wk.js";import"./useValueChanged-Csp7SvyO.js";import"./CollapsiblePanel-B5lJeWgz.js";import"./MultiColumnSortDialog-DQiVtXjC.js";import"./MenuTrigger-DW0TOV8C.js";import"./CompositeItem-C6S-nciI.js";import"./ToolbarRootContext-Dopp7FRe.js";import"./getDisabledMountTransitionStyles-v9LzkhPA.js";import"./getPseudoElementBounds-Cwc8lUx9.js";import"./chevron-down-D22F0u6Z.js";import"./index-1VGocKKR.js";import"./error-CsEWfIK9.js";import"./BaseCbacBanner-C4bkZKIf.js";import"./makeExternalStore-D4y_vvzd.js";import"./Tooltip-CkDFs6wN.js";import"./PopoverPopup-D3jFDXDL.js";import"./toNumber-1gZb9On-.js";import"./useOsdkClient-D1yJRK_G.js";import"./chevron-right-Cvh61v0W.js";import"./tick-BshIKwLK.js";import"./DropdownField-4Ot8i-6P.js";import"./withOsdkMetrics-CAIkKNTM.js";const{expect:e,screen:t,userEvent:T,within:f}=__STORYBOOK_MODULE_TEST__,de={...u,title:"Components/ObjectTable"},n={args:{objectType:c,columnDefinitions:l},parameters:{docs:{description:{story:"Minimal setup showing Employee data with default column definitions."},source:{code:"<ObjectTable objectType={Employee} />"}}},render:o=>i.jsx("div",{className:"object-table-container",style:{height:"600px"},children:i.jsx(p,{...o})}),play:async({canvasElement:o})=>{const a=f(o);await a.findByText(d),await y(a,"fullName"),await e(await t.findByRole("menuitem",{name:"Sort ascending"})).toBeInTheDocument(),await e(t.getByRole("menuitem",{name:"Sort descending"})).toBeInTheDocument(),await e(t.getByRole("menuitem",{name:"Pin column"})).toBeInTheDocument(),await e(t.getByRole("menuitem",{name:"Configure Columns"})).toBeInTheDocument(),await T.keyboard("{Escape}")}};var m,r,s;n.parameters={...n.parameters,docs:{...(m=n.parameters)==null?void 0:m.docs,source:{originalSource:`{
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
