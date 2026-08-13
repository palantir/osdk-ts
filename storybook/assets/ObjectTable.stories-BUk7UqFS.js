import{j as i}from"./iframe-D5O5_k9_.js";import{O as p}from"./object-table-C-DLDZpP.js";import{E as c}from"./Employee-BAk2o20h.js";import{d as l,o as u,T as d,a as y}from"./objectTableStoryHelpers-ClDDb3iz.js";import"./preload-helper-Dp1pzeXC.js";import"./Table-EbZEPZet.js";import"./index-BIhwPQ5A.js";import"./Dialog-CAqmshjJ.js";import"./cross-qoOvfrZB.js";import"./svgIconContainer-Dc8lBmE9.js";import"./useBaseUiId-BK5NoUBi.js";import"./InternalBackdrop-CRNPM9W7.js";import"./composite-CMeP4FlW.js";import"./index-DXS8u3_B.js";import"./index-AFBT5mUa.js";import"./index-CSVDbKCa.js";import"./useEventCallback-YCtidgdS.js";import"./SkeletonBar-BAcn_h-M.js";import"./LoadingCell-DN-B8-Tb.js";import"./ColumnConfigDialog-C3EEhoK7.js";import"./DraggableList-DaBxAvIS.js";import"./search-sOGHpgAJ.js";import"./Input-BO-GptjU.js";import"./useControlled-hlAYtkod.js";import"./Button-74u_STeL.js";import"./small-cross-vq9wJw1f.js";import"./ActionButton-CS6EOwh3.js";import"./Checkbox-DKwnOk29.js";import"./useValueChanged-Ck_KuO7m.js";import"./CollapsiblePanel-Cm3UP6Hc.js";import"./MultiColumnSortDialog-PRFnS_QJ.js";import"./MenuTrigger-CGfJ9uYA.js";import"./CompositeItem-BHw_Azd0.js";import"./ToolbarRootContext-7sTGpIsw.js";import"./getDisabledMountTransitionStyles-B3_gGaay.js";import"./getPseudoElementBounds-Debta3vv.js";import"./chevron-down-VCtVB2U7.js";import"./index-DFB-Kfs7.js";import"./error-g0-V9Ywd.js";import"./BaseCbacBanner-CxIPfa7L.js";import"./makeExternalStore-CxymVNiv.js";import"./Tooltip-BKSUBMZw.js";import"./PopoverPopup-sKoAxBCT.js";import"./toNumber-C0xl3ikJ.js";import"./useOsdkClient-CICgihsL.js";import"./tick-DzZZV7Ed.js";import"./DropdownField-DGa1os9V.js";import"./withOsdkMetrics-B2-MbefI.js";const{expect:e,screen:t,userEvent:T,within:f}=__STORYBOOK_MODULE_TEST__,le={...u,title:"Components/ObjectTable"},n={args:{objectType:c,columnDefinitions:l},parameters:{docs:{description:{story:"Minimal setup showing Employee data with default column definitions."},source:{code:"<ObjectTable objectType={Employee} />"}}},render:o=>i.jsx("div",{className:"object-table-container",style:{height:"600px"},children:i.jsx(p,{...o})}),play:async({canvasElement:o})=>{const a=f(o);await a.findByText(d),await y(a,"fullName"),await e(await t.findByRole("menuitem",{name:"Sort ascending"})).toBeInTheDocument(),await e(t.getByRole("menuitem",{name:"Sort descending"})).toBeInTheDocument(),await e(t.getByRole("menuitem",{name:"Pin column"})).toBeInTheDocument(),await e(t.getByRole("menuitem",{name:"Configure Columns"})).toBeInTheDocument(),await T.keyboard("{Escape}")}};var m,r,s;n.parameters={...n.parameters,docs:{...(m=n.parameters)==null?void 0:m.docs,source:{originalSource:`{
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
}`,...(s=(r=n.parameters)==null?void 0:r.docs)==null?void 0:s.source}}};const ue=["Default"];export{n as Default,ue as __namedExportsOrder,le as default};
