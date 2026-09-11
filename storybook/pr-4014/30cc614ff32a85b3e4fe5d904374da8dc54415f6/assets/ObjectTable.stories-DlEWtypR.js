import{j as i}from"./iframe-IYYJd2m9.js";import{O as p}from"./object-table-xPMVFcHm.js";import{E as c}from"./Employee-BAk2o20h.js";import{d as l,o as u,T as d,a as y}from"./objectTableStoryHelpers-DtabovkT.js";import"./preload-helper-BFRTU8XL.js";import"./Table-iuVojU_1.js";import"./index-Db-eG3LN.js";import"./Dialog-FSl23wJV.js";import"./cross-KJA2o58Q.js";import"./svgIconContainer-B0Zw0e2B.js";import"./useBaseUiId-gMGlPD7U.js";import"./InternalBackdrop-6rPcc_n0.js";import"./composite-CvcKSveb.js";import"./index-DKHKGVOU.js";import"./index-DAnfA0in.js";import"./index-cmlbejKx.js";import"./useEventCallback-BRAtMScW.js";import"./SkeletonBar-C63LV7Rk.js";import"./LoadingCell-B9W9paLZ.js";import"./ColumnConfigDialog-DNEiA0Ox.js";import"./DraggableList-Cv_dcLbc.js";import"./search-CUDcYcS5.js";import"./Input-0frZHORa.js";import"./useControlled-2w2YfNvU.js";import"./Button-DQEdYpKK.js";import"./small-cross-D1iJnykI.js";import"./ActionButton-HX3-dAro.js";import"./Checkbox-DWaJq7Yp.js";import"./useValueChanged-BOlMICo1.js";import"./CollapsiblePanel-aw6L5bfc.js";import"./MultiColumnSortDialog-CV8aTgYk.js";import"./MenuTrigger-DR9Fwge5.js";import"./CompositeItem-B-bfj5TP.js";import"./ToolbarRootContext-CFnhaKDy.js";import"./getDisabledMountTransitionStyles-58Y24a1v.js";import"./getPseudoElementBounds-CCefMmxm.js";import"./chevron-down-B1MpC4Hz.js";import"./index-DsFI9coQ.js";import"./error-B-Yx8VFp.js";import"./BaseCbacBanner-DkONxgZ5.js";import"./makeExternalStore-DEaKK2Sx.js";import"./Tooltip-CGjryGi2.js";import"./PopoverPopup-J11dr7bo.js";import"./debounce-lUqXN7vV.js";import"./useOsdkClient-BfouKB8F.js";import"./tick-ChhTG65X.js";import"./DropdownField-Cb58jruB.js";import"./isEqual-BFMVJJkC.js";import"./withOsdkMetrics-DxXSp5TR.js";const{expect:e,screen:t,userEvent:T,within:f}=__STORYBOOK_MODULE_TEST__,ue={...u,title:"Components/ObjectTable"},n={args:{objectType:c,columnDefinitions:l},parameters:{docs:{description:{story:"Minimal setup showing Employee data with default column definitions."},source:{code:"<ObjectTable objectType={Employee} />"}}},render:o=>i.jsx("div",{className:"object-table-container",style:{height:"600px"},children:i.jsx(p,{...o})}),play:async({canvasElement:o})=>{const a=f(o);await a.findByText(d),await y(a,"fullName"),await e(await t.findByRole("menuitem",{name:"Sort ascending"})).toBeInTheDocument(),await e(t.getByRole("menuitem",{name:"Sort descending"})).toBeInTheDocument(),await e(t.getByRole("menuitem",{name:"Pin column"})).toBeInTheDocument(),await e(t.getByRole("menuitem",{name:"Configure Columns"})).toBeInTheDocument(),await T.keyboard("{Escape}")}};var m,r,s;n.parameters={...n.parameters,docs:{...(m=n.parameters)==null?void 0:m.docs,source:{originalSource:`{
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
