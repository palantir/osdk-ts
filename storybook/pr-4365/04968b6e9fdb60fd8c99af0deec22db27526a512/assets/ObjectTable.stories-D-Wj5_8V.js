import{j as i}from"./iframe-CRvr4m23.js";import{O as p}from"./object-table-b8tcKba1.js";import{E as c}from"./Employee-BAk2o20h.js";import{d as l,o as u,T as d,a as y}from"./objectTableStoryHelpers-BCcffLRZ.js";import"./preload-helper-DdCCWYOA.js";import"./Table-Bj__yKc6.js";import"./index-D9ceHjwW.js";import"./Dialog-Cie038FA.js";import"./cross-C9z9h8JK.js";import"./svgIconContainer-DGdcF-OS.js";import"./useBaseUiId-B6Sq2DDd.js";import"./InternalBackdrop-BxZfZedD.js";import"./composite-BaJaFCUV.js";import"./index-C-IWKanX.js";import"./index-DjDCowvu.js";import"./index-DJL6J6Yv.js";import"./useEventCallback-D3cYyTze.js";import"./SkeletonBar-BcFufqC8.js";import"./LoadingCell-52h9HBzW.js";import"./ColumnConfigDialog-BoVl4f11.js";import"./DraggableList-CzL0YJBu.js";import"./search-S4tClITX.js";import"./Input-Bb951IY0.js";import"./useControlled-CzRMF11H.js";import"./Button-CICDzuCH.js";import"./small-cross-B41-2T8P.js";import"./ActionButton-CdBe91xX.js";import"./Checkbox-DqptaqLe.js";import"./useValueChanged-CZQ4YioP.js";import"./CollapsiblePanel-DOhZMIUq.js";import"./MultiColumnSortDialog-DMM04g0W.js";import"./MenuTrigger-TLk2OofL.js";import"./CompositeItem-AIxAUMBi.js";import"./ToolbarRootContext-CSQhZUTB.js";import"./getDisabledMountTransitionStyles-C-PY_iOt.js";import"./getPseudoElementBounds-CyO_YVnW.js";import"./chevron-down-D0i9lEgO.js";import"./index-B0l7E8Kk.js";import"./error-ClpIR9By.js";import"./BaseCbacBanner-BZbKEwfF.js";import"./makeExternalStore-B5l5c53p.js";import"./Tooltip-CRs42sBR.js";import"./isObject-B8xrtduv.js";import"./debounce-B7GzlHZ2.js";import"./useOsdkClient-Bx3PkGcF.js";import"./tick-CR12WH8n.js";import"./DropdownField-m8FHeW1l.js";import"./isEqual-9tV0CO0a.js";import"./_baseIsEqual-DHO7-zGr.js";import"./withOsdkMetrics-Dd7zkJUD.js";const{expect:e,screen:t,userEvent:T,within:f}=__STORYBOOK_MODULE_TEST__,de={...u,title:"Components/ObjectTable"},n={args:{objectType:c,columnDefinitions:l},parameters:{docs:{description:{story:"Minimal setup showing Employee data with default column definitions."},source:{code:"<ObjectTable objectType={Employee} />"}}},render:o=>i.jsx("div",{className:"object-table-container",style:{height:"600px"},children:i.jsx(p,{...o})}),play:async({canvasElement:o})=>{const a=f(o);await a.findByText(d),await y(a,"fullName"),await e(await t.findByRole("menuitem",{name:"Sort ascending"})).toBeInTheDocument(),await e(t.getByRole("menuitem",{name:"Sort descending"})).toBeInTheDocument(),await e(t.getByRole("menuitem",{name:"Pin column"})).toBeInTheDocument(),await e(t.getByRole("menuitem",{name:"Configure Columns"})).toBeInTheDocument(),await T.keyboard("{Escape}")}};var m,r,s;n.parameters={...n.parameters,docs:{...(m=n.parameters)==null?void 0:m.docs,source:{originalSource:`{
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
