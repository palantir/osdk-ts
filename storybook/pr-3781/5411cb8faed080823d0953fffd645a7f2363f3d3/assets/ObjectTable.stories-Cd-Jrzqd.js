import{j as i}from"./iframe-DywKiRJ4.js";import{O as p}from"./object-table-BPc3eFSX.js";import{E as c}from"./Employee-BAk2o20h.js";import{d as l,o as u,T as d,a as y}from"./objectTableStoryHelpers-daVSn-M2.js";import"./preload-helper-DnISu9SO.js";import"./Table-TcAaYlP2.js";import"./index-sdvv-Vmx.js";import"./Dialog-Bf55-VY4.js";import"./cross-CQksztLC.js";import"./svgIconContainer-BcOW5YRH.js";import"./useBaseUiId-C48Qv8Zq.js";import"./InternalBackdrop-Cpxyg-Ky.js";import"./composite-ZtNMv5XC.js";import"./index-DPwii3iK.js";import"./index-DqrMsXLY.js";import"./index-dA00YQm8.js";import"./useEventCallback-CppQh8Tw.js";import"./SkeletonBar-IiCmFQe8.js";import"./LoadingCell-CGfJC6P-.js";import"./ColumnConfigDialog-DEjm_EY6.js";import"./DraggableList-BHZ55AyS.js";import"./search-BqXYSkFu.js";import"./Input-C0MsgEOV.js";import"./useControlled-IjJG5oHn.js";import"./isEqual-CMqPJSO6.js";import"./isObject-C5jPAKNO.js";import"./Button-CDqHXNFi.js";import"./ActionButton-DZ3T_Hts.js";import"./Checkbox-C_Hoe2CZ.js";import"./useValueChanged-CzSHuwPy.js";import"./CollapsiblePanel-DvuaVJxN.js";import"./MultiColumnSortDialog-CFSzAgHA.js";import"./MenuTrigger-CSGpp6_f.js";import"./CompositeItem-BHZTQbjb.js";import"./ToolbarRootContext-BdKTbPdV.js";import"./getDisabledMountTransitionStyles-Do5D0uth.js";import"./getPseudoElementBounds-CH2A8lCF.js";import"./chevron-down-DFkNi3fh.js";import"./index-Bi9mx1Ld.js";import"./error-CTO_HqOG.js";import"./BaseCbacBanner-DDIvxm3S.js";import"./makeExternalStore-CVHUFZOf.js";import"./Tooltip-DWQ3NBX-.js";import"./PopoverPopup-kSQR-f1B.js";import"./toNumber-oB5ILiEz.js";import"./useOsdkClient-BGVCYVYl.js";import"./tick-CHvQk3IN.js";import"./DropdownField-fsCjlWHf.js";import"./withOsdkMetrics-mz9t4H8j.js";const{expect:e,screen:t,userEvent:T,within:f}=__STORYBOOK_MODULE_TEST__,ue={...u,title:"Components/ObjectTable"},n={args:{objectType:c,columnDefinitions:l},parameters:{docs:{description:{story:"Minimal setup showing Employee data with default column definitions."},source:{code:"<ObjectTable objectType={Employee} />"}}},render:o=>i.jsx("div",{className:"object-table-container",style:{height:"600px"},children:i.jsx(p,{...o})}),play:async({canvasElement:o})=>{const a=f(o);await a.findByText(d),await y(a,"fullName"),await e(await t.findByRole("menuitem",{name:"Sort ascending"})).toBeInTheDocument(),await e(t.getByRole("menuitem",{name:"Sort descending"})).toBeInTheDocument(),await e(t.getByRole("menuitem",{name:"Pin column"})).toBeInTheDocument(),await e(t.getByRole("menuitem",{name:"Configure Columns"})).toBeInTheDocument(),await T.keyboard("{Escape}")}};var m,r,s;n.parameters={...n.parameters,docs:{...(m=n.parameters)==null?void 0:m.docs,source:{originalSource:`{
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
