import{j as i}from"./iframe-BVgEXOM0.js";import{O as p}from"./object-table-zuApkwGh.js";import{E as c}from"./Employee-BAk2o20h.js";import{d as l,o as u,T as d,a as y}from"./objectTableStoryHelpers-Cl0nnPCf.js";import"./preload-helper-CactQ6nb.js";import"./Table-bMNODVxc.js";import"./index-8aR2Ioa8.js";import"./Dialog-DO5HiN2t.js";import"./cross-D1T8VNxn.js";import"./svgIconContainer-CDZ82EYf.js";import"./useBaseUiId-D5ZxfDH3.js";import"./InternalBackdrop-Bh6vJ7HZ.js";import"./composite-CZzw119W.js";import"./index-DQzPD5cl.js";import"./index-DwR3j9NI.js";import"./index-DwnOMM-g.js";import"./useEventCallback-DvGf3XkN.js";import"./SkeletonBar-HB-1xzv6.js";import"./LoadingCell-C1lwI8Pi.js";import"./ColumnConfigDialog-BXLGpEZI.js";import"./DraggableList-P1u1yq0T.js";import"./search-CxzK3q4z.js";import"./Input-odv82aFx.js";import"./useControlled-BIcpHOeT.js";import"./Button-WKXKQ1tY.js";import"./small-cross-BdrFqIIe.js";import"./ActionButton-CfAm7XVr.js";import"./Checkbox-2dZaRhmt.js";import"./useValueChanged-SWdGVnir.js";import"./CollapsiblePanel-C2JZHC-G.js";import"./MultiColumnSortDialog-B_TiCVPa.js";import"./MenuTrigger-CLS7ZbZ1.js";import"./CompositeItem-DmERPWlX.js";import"./ToolbarRootContext-Cn0yRgUL.js";import"./getDisabledMountTransitionStyles-DQpr4Tpg.js";import"./getPseudoElementBounds-Ba7Ut1tY.js";import"./chevron-down-CrDZIThJ.js";import"./index-BfuXcFcC.js";import"./error-B5TbSbWu.js";import"./BaseCbacBanner-GORXksxW.js";import"./makeExternalStore-aQWgWKmj.js";import"./Tooltip-D3jGIJfs.js";import"./PopoverPopup-BcZfo8D_.js";import"./debounce-BtRqgR_f.js";import"./useOsdkClient-BrFIlZ12.js";import"./tick-CiLURy-F.js";import"./DropdownField-DQ-dTX_I.js";import"./isEqual-BCY0XfFZ.js";import"./withOsdkMetrics-C2GPaHST.js";const{expect:e,screen:t,userEvent:T,within:f}=__STORYBOOK_MODULE_TEST__,ue={...u,title:"Components/ObjectTable"},n={args:{objectType:c,columnDefinitions:l},parameters:{docs:{description:{story:"Minimal setup showing Employee data with default column definitions."},source:{code:"<ObjectTable objectType={Employee} />"}}},render:o=>i.jsx("div",{className:"object-table-container",style:{height:"600px"},children:i.jsx(p,{...o})}),play:async({canvasElement:o})=>{const a=f(o);await a.findByText(d),await y(a,"fullName"),await e(await t.findByRole("menuitem",{name:"Sort ascending"})).toBeInTheDocument(),await e(t.getByRole("menuitem",{name:"Sort descending"})).toBeInTheDocument(),await e(t.getByRole("menuitem",{name:"Pin column"})).toBeInTheDocument(),await e(t.getByRole("menuitem",{name:"Configure Columns"})).toBeInTheDocument(),await T.keyboard("{Escape}")}};var m,r,s;n.parameters={...n.parameters,docs:{...(m=n.parameters)==null?void 0:m.docs,source:{originalSource:`{
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
