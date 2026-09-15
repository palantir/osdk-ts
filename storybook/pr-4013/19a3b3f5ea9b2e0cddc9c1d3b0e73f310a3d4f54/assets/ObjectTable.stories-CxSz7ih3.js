import{j as i}from"./iframe-CBLGayoe.js";import{O as p}from"./object-table-Dfnb9q2S.js";import{E as c}from"./Employee-BAk2o20h.js";import{d as l,o as u,T as d,a as y}from"./objectTableStoryHelpers-B8zxrheH.js";import"./preload-helper-iqQbXwPR.js";import"./Table-3tUBpcgb.js";import"./index-WWQs816-.js";import"./Dialog-DDIWOZ7A.js";import"./cross-BsTZCMZo.js";import"./svgIconContainer-C6h86pFp.js";import"./useBaseUiId-1t0yXeWR.js";import"./InternalBackdrop-D-1bVe6k.js";import"./composite-B0OuyU4e.js";import"./index-DRnkv5ky.js";import"./index-cNWLnacK.js";import"./index-CJYhDRX8.js";import"./useEventCallback-Vi0Pn5Sv.js";import"./SkeletonBar-BnJ1P5Dc.js";import"./LoadingCell-joRgzu6e.js";import"./ColumnConfigDialog-DGG2zCSJ.js";import"./DraggableList-YSyn2lX_.js";import"./search-fj4r3aII.js";import"./Input-B3gcQSCO.js";import"./useControlled-aG0yjyc1.js";import"./Button-CjUTiVzv.js";import"./small-cross-1A3qDgIz.js";import"./ActionButton-k24uyueG.js";import"./Checkbox-Bl8YlgaC.js";import"./useValueChanged-DUE2Yivj.js";import"./CollapsiblePanel-NhOksXv9.js";import"./MultiColumnSortDialog-C3XrF8TS.js";import"./MenuTrigger-BxU3BSa9.js";import"./CompositeItem-DM2eqzsD.js";import"./ToolbarRootContext-DXoHeFWe.js";import"./getDisabledMountTransitionStyles-DjkeLEx-.js";import"./getPseudoElementBounds-O8sM1SFz.js";import"./chevron-down-fvU8e7Xa.js";import"./index-BlgAqsZh.js";import"./error-pMIF5hcF.js";import"./BaseCbacBanner-CTxjuNnU.js";import"./makeExternalStore-C4cF0z0U.js";import"./Tooltip-D0gzo0UL.js";import"./PopoverPopup-B6LNoEH2.js";import"./debounce-D5ZCw2WL.js";import"./useOsdkClient-C4j--X5m.js";import"./tick-CN0oe-d-.js";import"./DropdownField-BahT1QHv.js";import"./isEqual-BaMniWjI.js";import"./withOsdkMetrics-BgHhPSx8.js";const{expect:e,screen:t,userEvent:T,within:f}=__STORYBOOK_MODULE_TEST__,ue={...u,title:"Components/ObjectTable"},n={args:{objectType:c,columnDefinitions:l},parameters:{docs:{description:{story:"Minimal setup showing Employee data with default column definitions."},source:{code:"<ObjectTable objectType={Employee} />"}}},render:o=>i.jsx("div",{className:"object-table-container",style:{height:"600px"},children:i.jsx(p,{...o})}),play:async({canvasElement:o})=>{const a=f(o);await a.findByText(d),await y(a,"fullName"),await e(await t.findByRole("menuitem",{name:"Sort ascending"})).toBeInTheDocument(),await e(t.getByRole("menuitem",{name:"Sort descending"})).toBeInTheDocument(),await e(t.getByRole("menuitem",{name:"Pin column"})).toBeInTheDocument(),await e(t.getByRole("menuitem",{name:"Configure Columns"})).toBeInTheDocument(),await T.keyboard("{Escape}")}};var m,r,s;n.parameters={...n.parameters,docs:{...(m=n.parameters)==null?void 0:m.docs,source:{originalSource:`{
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
