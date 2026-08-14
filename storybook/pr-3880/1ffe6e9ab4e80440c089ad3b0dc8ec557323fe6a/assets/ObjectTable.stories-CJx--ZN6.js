import{j as i}from"./iframe-BHS5QR3O.js";import{O as p}from"./object-table-Cvrzj8fP.js";import{E as c}from"./Employee-BAk2o20h.js";import{d as l,o as u,T as d,a as y}from"./objectTableStoryHelpers-ByRFfYYr.js";import"./preload-helper-B6H2Wl85.js";import"./Table-BDJ4x66s.js";import"./index-CH7AKy7m.js";import"./Dialog-wENiLeEQ.js";import"./cross-Mi6Tu3Er.js";import"./svgIconContainer-ByRaFEc-.js";import"./useBaseUiId-CEIcjkwP.js";import"./InternalBackdrop-7oHYmudj.js";import"./composite-BnqLBLhy.js";import"./index-BdTUVSMf.js";import"./index-DBgZeADq.js";import"./index-BnZ04Iwl.js";import"./useEventCallback-CB1YPgva.js";import"./SkeletonBar-BMo0RH1C.js";import"./LoadingCell-5FzEYM_J.js";import"./ColumnConfigDialog-CNeCC88S.js";import"./DraggableList-xSBVFf99.js";import"./search-Cocmm-uk.js";import"./Input-Bi2WpDJH.js";import"./useControlled-C-rES6CU.js";import"./Button-B_4Pa7GX.js";import"./small-cross-CJe3aCZN.js";import"./ActionButton-6_o3cOTE.js";import"./Checkbox-BbFETg2J.js";import"./useValueChanged-BcjxKkFq.js";import"./CollapsiblePanel-PYwkqFiV.js";import"./MultiColumnSortDialog-Db4Us-lU.js";import"./MenuTrigger-6R4hruBY.js";import"./CompositeItem-Bo2SIyrT.js";import"./ToolbarRootContext-lCFihwdU.js";import"./getDisabledMountTransitionStyles-DcIeUQNN.js";import"./getPseudoElementBounds-B8DlXmSD.js";import"./chevron-down-pY5pxMvg.js";import"./index-AnCCDamT.js";import"./error-BGQaSzzV.js";import"./BaseCbacBanner-DKquDkZs.js";import"./makeExternalStore-ByWm5-Ku.js";import"./Tooltip-CRgmKc4d.js";import"./PopoverPopup-Dx7_6wqW.js";import"./debounce-DyCRQAnF.js";import"./useOsdkClient-DsttTZje.js";import"./tick-Bt8cnFFd.js";import"./DropdownField-D43erCwJ.js";import"./isEqual-BE06Fp2_.js";import"./withOsdkMetrics-BuisztQB.js";const{expect:e,screen:t,userEvent:T,within:f}=__STORYBOOK_MODULE_TEST__,ue={...u,title:"Components/ObjectTable"},n={args:{objectType:c,columnDefinitions:l},parameters:{docs:{description:{story:"Minimal setup showing Employee data with default column definitions."},source:{code:"<ObjectTable objectType={Employee} />"}}},render:o=>i.jsx("div",{className:"object-table-container",style:{height:"600px"},children:i.jsx(p,{...o})}),play:async({canvasElement:o})=>{const a=f(o);await a.findByText(d),await y(a,"fullName"),await e(await t.findByRole("menuitem",{name:"Sort ascending"})).toBeInTheDocument(),await e(t.getByRole("menuitem",{name:"Sort descending"})).toBeInTheDocument(),await e(t.getByRole("menuitem",{name:"Pin column"})).toBeInTheDocument(),await e(t.getByRole("menuitem",{name:"Configure Columns"})).toBeInTheDocument(),await T.keyboard("{Escape}")}};var m,r,s;n.parameters={...n.parameters,docs:{...(m=n.parameters)==null?void 0:m.docs,source:{originalSource:`{
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
