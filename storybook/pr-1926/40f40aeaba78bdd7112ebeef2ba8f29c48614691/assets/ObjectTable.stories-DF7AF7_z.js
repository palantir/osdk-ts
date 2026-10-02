import{j as i}from"./iframe-CKrQ01Tw.js";import{O as p}from"./object-table-BrklFnTe.js";import{E as c}from"./Employee-BAk2o20h.js";import{d as l,o as u,T as d,a as y}from"./objectTableStoryHelpers-8ueBC8yD.js";import"./preload-helper-ChvNP4Pl.js";import"./Table-CTe43hEg.js";import"./index-BIdRQM2S.js";import"./Dialog-CkUz6oIc.js";import"./cross-Bj1Rnssl.js";import"./svgIconContainer-BWrjI0N2.js";import"./useBaseUiId-B2KTelTM.js";import"./InternalBackdrop-DZCFtxK4.js";import"./composite-CgNTf1JJ.js";import"./index-xXO27wOh.js";import"./index-OkCRkK7-.js";import"./index-CIIKdpni.js";import"./useEventCallback-CgTz_qfp.js";import"./SkeletonBar-BoUHhX8q.js";import"./LoadingCell-CH7OlUFO.js";import"./ColumnConfigDialog-DmW2Vozj.js";import"./DraggableList-BU-lHS4a.js";import"./search-G6EfpRFi.js";import"./Input-Cq0Ol3YB.js";import"./useControlled-BlU5vlUe.js";import"./Button-Cq8nZ_ey.js";import"./small-cross-CZEI8mhu.js";import"./ActionButton-BCIDvNWh.js";import"./Checkbox-DOfZvhoo.js";import"./useValueChanged-I3JyBt64.js";import"./CollapsiblePanel-Chcrgg3J.js";import"./MultiColumnSortDialog-IfxNGyXy.js";import"./MenuTrigger-Dc4-fsw5.js";import"./CompositeItem-Bisu6D-H.js";import"./ToolbarRootContext-DNlCsrGQ.js";import"./getDisabledMountTransitionStyles-Cj27Wpwi.js";import"./getPseudoElementBounds-Bcz462pH.js";import"./chevron-down-BWfpQhPj.js";import"./index-BgdQNo10.js";import"./error-BeLhzW1q.js";import"./BaseCbacBanner-D-n0oCTz.js";import"./makeExternalStore-DmTWPGlO.js";import"./Tooltip-DNNmdmtX.js";import"./PopoverPopup-BoVZQgTK.js";import"./debounce-BBFO8SUe.js";import"./useOsdkClient-Cx-PCDzm.js";import"./tick-sRemk3LV.js";import"./DropdownField-CstOe1Ir.js";import"./isEqual-BEtTnJ8J.js";import"./withOsdkMetrics-5P2QGy1j.js";const{expect:e,screen:t,userEvent:T,within:f}=__STORYBOOK_MODULE_TEST__,ue={...u,title:"Components/ObjectTable"},n={args:{objectType:c,columnDefinitions:l},parameters:{docs:{description:{story:"Minimal setup showing Employee data with default column definitions."},source:{code:"<ObjectTable objectType={Employee} />"}}},render:o=>i.jsx("div",{className:"object-table-container",style:{height:"600px"},children:i.jsx(p,{...o})}),play:async({canvasElement:o})=>{const a=f(o);await a.findByText(d),await y(a,"fullName"),await e(await t.findByRole("menuitem",{name:"Sort ascending"})).toBeInTheDocument(),await e(t.getByRole("menuitem",{name:"Sort descending"})).toBeInTheDocument(),await e(t.getByRole("menuitem",{name:"Pin column"})).toBeInTheDocument(),await e(t.getByRole("menuitem",{name:"Configure Columns"})).toBeInTheDocument(),await T.keyboard("{Escape}")}};var m,r,s;n.parameters={...n.parameters,docs:{...(m=n.parameters)==null?void 0:m.docs,source:{originalSource:`{
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
