import{j as i}from"./iframe-dvXPHGEz.js";import{O as p}from"./object-table-Djjbkt0z.js";import{E as c}from"./Employee-BAk2o20h.js";import{d as l,o as u,T as d,a as y}from"./objectTableStoryHelpers-CaFqj0m6.js";import"./preload-helper-BmaGIWKK.js";import"./Table-juMiLnah.js";import"./index-DyjG60lF.js";import"./Dialog-BNw-ASNJ.js";import"./cross-Z5DuI0bi.js";import"./svgIconContainer-Cks84kGC.js";import"./useBaseUiId-B5XDNhHC.js";import"./InternalBackdrop-DAJuntNY.js";import"./composite-CadSmb_E.js";import"./index-DabbcYA7.js";import"./index-D0dNC_Uw.js";import"./index-CaOHsNqN.js";import"./useEventCallback-nNaNdbMZ.js";import"./SkeletonBar-Dv2M62ut.js";import"./LoadingCell-0qyIzLIs.js";import"./ColumnConfigDialog-VemTYLXT.js";import"./DraggableList-DwCzG7mM.js";import"./search-DSXnECBw.js";import"./Input-CQg1dEqW.js";import"./useControlled-C_6t7Yik.js";import"./Button-XhiN3AVX.js";import"./small-cross-DKjM1orR.js";import"./ActionButton-wFnbg4xS.js";import"./Checkbox-BKfRmlys.js";import"./useValueChanged-CnI10VJe.js";import"./CollapsiblePanel-Uln4s1hx.js";import"./MultiColumnSortDialog-DWc2JHmU.js";import"./MenuTrigger-B5gWYMLG.js";import"./CompositeItem-BOkdWJ_P.js";import"./ToolbarRootContext-puVPhTN3.js";import"./getDisabledMountTransitionStyles-AFbWhr8J.js";import"./getPseudoElementBounds-D_O4eXO1.js";import"./chevron-down-EmJ3ovaR.js";import"./index-C6zBVqUK.js";import"./error-CQ-TuYDa.js";import"./BaseCbacBanner-DnWNpQiJ.js";import"./makeExternalStore-CV6_Wrkf.js";import"./Tooltip-Dr5evSCi.js";import"./PopoverPopup-C5XbR0Iv.js";import"./debounce-DQGeitFh.js";import"./useOsdkClient-BaEF3EMY.js";import"./tick-DCw5S-Ab.js";import"./DropdownField-CS7rxwg1.js";import"./isEqual-B0DJkLX3.js";import"./withOsdkMetrics-7z80YqAb.js";const{expect:e,screen:t,userEvent:T,within:f}=__STORYBOOK_MODULE_TEST__,ue={...u,title:"Components/ObjectTable"},n={args:{objectType:c,columnDefinitions:l},parameters:{docs:{description:{story:"Minimal setup showing Employee data with default column definitions."},source:{code:"<ObjectTable objectType={Employee} />"}}},render:o=>i.jsx("div",{className:"object-table-container",style:{height:"600px"},children:i.jsx(p,{...o})}),play:async({canvasElement:o})=>{const a=f(o);await a.findByText(d),await y(a,"fullName"),await e(await t.findByRole("menuitem",{name:"Sort ascending"})).toBeInTheDocument(),await e(t.getByRole("menuitem",{name:"Sort descending"})).toBeInTheDocument(),await e(t.getByRole("menuitem",{name:"Pin column"})).toBeInTheDocument(),await e(t.getByRole("menuitem",{name:"Configure Columns"})).toBeInTheDocument(),await T.keyboard("{Escape}")}};var m,r,s;n.parameters={...n.parameters,docs:{...(m=n.parameters)==null?void 0:m.docs,source:{originalSource:`{
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
