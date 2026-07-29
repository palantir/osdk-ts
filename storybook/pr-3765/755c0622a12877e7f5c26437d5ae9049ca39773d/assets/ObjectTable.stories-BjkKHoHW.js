import{j as i}from"./iframe-CjUdfJYr.js";import{O as p}from"./object-table-BsLoarMY.js";import{E as c}from"./Employee-BAk2o20h.js";import{d as l,o as u,T as d,a as y}from"./objectTableStoryHelpers-Bkp0ZEU0.js";import"./preload-helper-fppZUlGt.js";import"./Table-CMc_66VF.js";import"./index-D5_XSG7N.js";import"./Dialog-D0lLlvcy.js";import"./cross-C-2XKRLb.js";import"./svgIconContainer-Bv0ouseb.js";import"./useBaseUiId-Cl5BRcl7.js";import"./InternalBackdrop-CB_lryOn.js";import"./composite-D5c9F9UH.js";import"./index-DGq9E2mF.js";import"./index-C7UqLEto.js";import"./index-wrcdIAZc.js";import"./useEventCallback-FFGsql-n.js";import"./SkeletonBar-DkL9MhMD.js";import"./LoadingCell-ensypk3k.js";import"./ColumnConfigDialog-BWqqzG7e.js";import"./DraggableList-CgRnSckD.js";import"./search-S_JNugMy.js";import"./Input--hS-Bx7-.js";import"./useControlled-DdCiVbr2.js";import"./isEqual-B_voQcQE.js";import"./isObject-BlBSfT88.js";import"./Button-DA4t73qH.js";import"./ActionButton-CNOVcJso.js";import"./Checkbox-BAoyXMag.js";import"./useValueChanged-DLsIrkiq.js";import"./CollapsiblePanel-CKTH3Dlz.js";import"./MultiColumnSortDialog-Bka4eeo1.js";import"./MenuTrigger-JKWHb7NT.js";import"./CompositeItem-CPH32fpX.js";import"./ToolbarRootContext-DghAl8DN.js";import"./getDisabledMountTransitionStyles-DxCDNDGH.js";import"./getPseudoElementBounds-BE0Z67VR.js";import"./chevron-down-f283P8c6.js";import"./index-lzGUL1BT.js";import"./error-sJaqfY2O.js";import"./BaseCbacBanner-BfxtPo8k.js";import"./makeExternalStore-D0Z6Qar9.js";import"./Tooltip-gs8ZNnWJ.js";import"./PopoverPopup-BxvUAPET.js";import"./toNumber-D-9WJOW9.js";import"./useOsdkClient-BfDEIV2j.js";import"./tick-BhEgViHf.js";import"./DropdownField-EM_RIB-N.js";import"./withOsdkMetrics-DK9Pjfpl.js";const{expect:e,screen:t,userEvent:T,within:f}=__STORYBOOK_MODULE_TEST__,ue={...u,title:"Components/ObjectTable"},n={args:{objectType:c,columnDefinitions:l},parameters:{docs:{description:{story:"Minimal setup showing Employee data with default column definitions."},source:{code:"<ObjectTable objectType={Employee} />"}}},render:o=>i.jsx("div",{className:"object-table-container",style:{height:"600px"},children:i.jsx(p,{...o})}),play:async({canvasElement:o})=>{const a=f(o);await a.findByText(d),await y(a,"fullName"),await e(await t.findByRole("menuitem",{name:"Sort ascending"})).toBeInTheDocument(),await e(t.getByRole("menuitem",{name:"Sort descending"})).toBeInTheDocument(),await e(t.getByRole("menuitem",{name:"Pin column"})).toBeInTheDocument(),await e(t.getByRole("menuitem",{name:"Configure Columns"})).toBeInTheDocument(),await T.keyboard("{Escape}")}};var m,r,s;n.parameters={...n.parameters,docs:{...(m=n.parameters)==null?void 0:m.docs,source:{originalSource:`{
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
