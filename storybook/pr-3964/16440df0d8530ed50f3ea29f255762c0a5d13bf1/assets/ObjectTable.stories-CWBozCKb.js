import{j as i}from"./iframe-BPFPjQfN.js";import{O as p}from"./object-table-Y0mlN0Vb.js";import{E as c}from"./Employee-BAk2o20h.js";import{d as l,o as u,T as d,a as y}from"./objectTableStoryHelpers-DdEwH1uq.js";import"./preload-helper-BS5sFlIZ.js";import"./Table-CguB3Bpq.js";import"./index-DLsuK50b.js";import"./Dialog-Dg-1TYJ4.js";import"./cross-jacAbTr1.js";import"./svgIconContainer-BCrLikms.js";import"./useBaseUiId-XR0mowR0.js";import"./InternalBackdrop-Df1he87e.js";import"./composite--6cSo0WV.js";import"./index-B2XioIrj.js";import"./index-BOMANPh2.js";import"./index-Biydlrf3.js";import"./useEventCallback-DNQjSEKX.js";import"./SkeletonBar-CMuVE2LV.js";import"./LoadingCell-BlrvphZB.js";import"./ColumnConfigDialog-BbWkPFl5.js";import"./DraggableList-BUUF-S7z.js";import"./search-CZtJ4QjI.js";import"./Input-Cbr4DxDr.js";import"./useControlled-DWmknCjz.js";import"./Button-MukxU7Us.js";import"./small-cross-yjorOgrv.js";import"./ActionButton-CQmjB9pW.js";import"./Checkbox-DfSpVE3t.js";import"./useValueChanged-CuY1VjDq.js";import"./CollapsiblePanel-DYgAn-VX.js";import"./MultiColumnSortDialog-DgiO0ntJ.js";import"./MenuTrigger-CGQOXJie.js";import"./CompositeItem-BU1kZ6Zk.js";import"./ToolbarRootContext-DvfgzgjU.js";import"./getDisabledMountTransitionStyles-BoepTDS0.js";import"./getPseudoElementBounds-CV-CmjZt.js";import"./chevron-down-U37QTCrW.js";import"./index-D2ej1Jb2.js";import"./error-DEs_Iieb.js";import"./BaseCbacBanner-D18zz_iP.js";import"./makeExternalStore-BJ259EIr.js";import"./Tooltip-3bmH_QUq.js";import"./PopoverPopup-Bn_qWbD4.js";import"./debounce-CINcFD0i.js";import"./useOsdkClient-e-CK1Pug.js";import"./tick-DSAjIfQR.js";import"./DropdownField-Bu6RRAh2.js";import"./isEqual-DcRXgc-e.js";import"./withOsdkMetrics-DyIxSijK.js";const{expect:e,screen:t,userEvent:T,within:f}=__STORYBOOK_MODULE_TEST__,ue={...u,title:"Components/ObjectTable"},n={args:{objectType:c,columnDefinitions:l},parameters:{docs:{description:{story:"Minimal setup showing Employee data with default column definitions."},source:{code:"<ObjectTable objectType={Employee} />"}}},render:o=>i.jsx("div",{className:"object-table-container",style:{height:"600px"},children:i.jsx(p,{...o})}),play:async({canvasElement:o})=>{const a=f(o);await a.findByText(d),await y(a,"fullName"),await e(await t.findByRole("menuitem",{name:"Sort ascending"})).toBeInTheDocument(),await e(t.getByRole("menuitem",{name:"Sort descending"})).toBeInTheDocument(),await e(t.getByRole("menuitem",{name:"Pin column"})).toBeInTheDocument(),await e(t.getByRole("menuitem",{name:"Configure Columns"})).toBeInTheDocument(),await T.keyboard("{Escape}")}};var m,r,s;n.parameters={...n.parameters,docs:{...(m=n.parameters)==null?void 0:m.docs,source:{originalSource:`{
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
