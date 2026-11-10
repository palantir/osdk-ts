import{j as i}from"./iframe-n9hYnZ1k.js";import{O as p}from"./object-table-DIF0cZBQ.js";import{E as c}from"./Employee-BAk2o20h.js";import{d as l,o as u,T as d,a as y}from"./objectTableStoryHelpers-BunMdve5.js";import"./preload-helper-BfllC993.js";import"./Table-LlnJI-Yy.js";import"./index-jFXEL4dj.js";import"./Dialog-D9exoXmi.js";import"./cross-B2c8g5Vb.js";import"./svgIconContainer-Ds9BUjSm.js";import"./useBaseUiId--HQwG44S.js";import"./InternalBackdrop-CzoOD5Ge.js";import"./composite-BHMqnRJI.js";import"./index-CD83LihZ.js";import"./index-CsVpqo9H.js";import"./index-BwfYcv9A.js";import"./useEventCallback-x8Kd3t-m.js";import"./SkeletonBar-BUxRGNdG.js";import"./LoadingCell-CHkKSLPb.js";import"./ColumnConfigDialog-B9Zg_5bp.js";import"./DraggableList-BVxljRWA.js";import"./search-DNZ54Yxb.js";import"./Input-D9iybl22.js";import"./useControlled-DVMhLBcM.js";import"./Button-C1ReapeD.js";import"./small-cross-UgWxpI9F.js";import"./ActionButton-CwGZb2W_.js";import"./Checkbox-BkmEuroC.js";import"./useValueChanged-Bk8VifO3.js";import"./CollapsiblePanel-DS7tzca4.js";import"./MultiColumnSortDialog-nBO__Yys.js";import"./MenuTrigger-C1g50UNL.js";import"./CompositeItem-CR3Fp4HR.js";import"./ToolbarRootContext-D77_KmSZ.js";import"./getDisabledMountTransitionStyles-C901m8ZM.js";import"./getPseudoElementBounds-BM01uxnJ.js";import"./chevron-down-0IZaGxOE.js";import"./index-BM8zROYs.js";import"./error-D9TzGXim.js";import"./BaseCbacBanner-DrNBQoWr.js";import"./makeExternalStore-C_HtZfof.js";import"./Tooltip-Cz0yU5is.js";import"./PopoverPopup-DZ28aU8u.js";import"./Select-F-RRM_58.js";import"./useOsdkClient-DB8tqHvc.js";import"./tick-Cw1T4_7H.js";import"./DropdownField-DjHzjuSX.js";import"./useDebouncedCallback-Cnujztnb.js";import"./isEqual-B8vYID_A.js";import"./_baseIsEqual-DZoBIkXn.js";import"./stableSerialize-gfVvfbkg.js";import"./withOsdkMetrics-3ldmX6a3.js";const{expect:e,screen:t,userEvent:T,within:f}=__STORYBOOK_MODULE_TEST__,Te={...u,title:"Components/ObjectTable"},n={args:{objectType:c,columnDefinitions:l},parameters:{docs:{description:{story:"Minimal setup showing Employee data with default column definitions."},source:{code:"<ObjectTable objectType={Employee} />"}}},render:o=>i.jsx("div",{className:"object-table-container",style:{height:"600px"},children:i.jsx(p,{...o})}),play:async({canvasElement:o})=>{const a=f(o);await a.findByText(d),await y(a,"fullName"),await e(await t.findByRole("menuitem",{name:"Sort ascending"})).toBeInTheDocument(),await e(t.getByRole("menuitem",{name:"Sort descending"})).toBeInTheDocument(),await e(t.getByRole("menuitem",{name:"Pin column"})).toBeInTheDocument(),await e(t.getByRole("menuitem",{name:"Configure Columns"})).toBeInTheDocument(),await T.keyboard("{Escape}")}};var m,r,s;n.parameters={...n.parameters,docs:{...(m=n.parameters)==null?void 0:m.docs,source:{originalSource:`{
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
}`,...(s=(r=n.parameters)==null?void 0:r.docs)==null?void 0:s.source}}};const fe=["Default"];export{n as Default,fe as __namedExportsOrder,Te as default};
