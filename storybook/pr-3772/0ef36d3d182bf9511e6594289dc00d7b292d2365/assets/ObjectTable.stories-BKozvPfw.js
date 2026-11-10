import{j as i}from"./iframe-B4QLcSZV.js";import{O as p}from"./object-table-TmS98yQc.js";import{E as c}from"./Employee-BAk2o20h.js";import{d as l,o as u,T as d,a as y}from"./objectTableStoryHelpers-d_bm6d_p.js";import"./preload-helper-Bo3Ha5vh.js";import"./Table-CUL-p863.js";import"./index-CU2p5LDV.js";import"./Dialog-DWf3MPjd.js";import"./cross-DnvIeiSW.js";import"./svgIconContainer-Dh-Zaef4.js";import"./useBaseUiId-BSZdLkOo.js";import"./InternalBackdrop-uUiSI24W.js";import"./composite-CgB6Of8a.js";import"./index-B8xzy7Yy.js";import"./index-CX5vZraN.js";import"./index-gAGpFD5r.js";import"./useEventCallback-DPBUZYhA.js";import"./SkeletonBar-BC4f_AtB.js";import"./LoadingCell-CExaaW-4.js";import"./ColumnConfigDialog-BYqwTb39.js";import"./DraggableList-aVeantjG.js";import"./search-eHSn6FPQ.js";import"./Input-CSlKlom8.js";import"./useControlled-BC3YGi64.js";import"./Button-Buk5h-ut.js";import"./small-cross-DCQk5yBJ.js";import"./ActionButton-d6fkUWG8.js";import"./Checkbox-b_blCxhg.js";import"./useValueChanged-VkzDJT1T.js";import"./CollapsiblePanel-BG51YQ8C.js";import"./MultiColumnSortDialog-ABdCwbqA.js";import"./MenuTrigger-DMDEMWwK.js";import"./CompositeItem-CpoTinek.js";import"./ToolbarRootContext-CQfevRIV.js";import"./getDisabledMountTransitionStyles-DmmMgL1o.js";import"./getPseudoElementBounds-B-_TxDI7.js";import"./chevron-down-DwcY0-Tx.js";import"./index-In1SvQxE.js";import"./error-DsKpT3Ih.js";import"./BaseCbacBanner-RbdcKH8U.js";import"./makeExternalStore-Dm5zWOFv.js";import"./Tooltip-yCjMXIIG.js";import"./isObject-DJnDAPtu.js";import"./debounce-B9U4OBQQ.js";import"./useOsdkClient-B-uzLvHR.js";import"./tick-f-G-5w7P.js";import"./DropdownField-DIllcogd.js";import"./isEqual-DL7tfxNk.js";import"./_baseIsEqual-y-2kiQl4.js";import"./withOsdkMetrics-BGZuYz8s.js";const{expect:e,screen:t,userEvent:T,within:f}=__STORYBOOK_MODULE_TEST__,de={...u,title:"Components/ObjectTable"},n={args:{objectType:c,columnDefinitions:l},parameters:{docs:{description:{story:"Minimal setup showing Employee data with default column definitions."},source:{code:"<ObjectTable objectType={Employee} />"}}},render:o=>i.jsx("div",{className:"object-table-container",style:{height:"600px"},children:i.jsx(p,{...o})}),play:async({canvasElement:o})=>{const a=f(o);await a.findByText(d),await y(a,"fullName"),await e(await t.findByRole("menuitem",{name:"Sort ascending"})).toBeInTheDocument(),await e(t.getByRole("menuitem",{name:"Sort descending"})).toBeInTheDocument(),await e(t.getByRole("menuitem",{name:"Pin column"})).toBeInTheDocument(),await e(t.getByRole("menuitem",{name:"Configure Columns"})).toBeInTheDocument(),await T.keyboard("{Escape}")}};var m,r,s;n.parameters={...n.parameters,docs:{...(m=n.parameters)==null?void 0:m.docs,source:{originalSource:`{
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
}`,...(s=(r=n.parameters)==null?void 0:r.docs)==null?void 0:s.source}}};const ye=["Default"];export{n as Default,ye as __namedExportsOrder,de as default};
