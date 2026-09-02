import{j as i}from"./iframe-D-YVkBdv.js";import{O as p}from"./object-table-DSMedtq1.js";import{E as c}from"./Employee-BAk2o20h.js";import{d as l,o as u,T as d,a as y}from"./objectTableStoryHelpers-C0qXnYxO.js";import"./preload-helper-_q1ENjXx.js";import"./Table-2Tri_Ec9.js";import"./index-D0bxYvtz.js";import"./Dialog-DFvYaONf.js";import"./cross-ClH0_H4w.js";import"./svgIconContainer-DDMXlF2M.js";import"./useBaseUiId-3VW8EFPd.js";import"./InternalBackdrop-C4LAnxkW.js";import"./composite-OshwPNjT.js";import"./index-DL0aWY-I.js";import"./index-Dv4gaO6G.js";import"./index-C_-WA-Do.js";import"./useEventCallback-BomJVgJ2.js";import"./SkeletonBar-CMCSIcnX.js";import"./LoadingCell-DwNUad0k.js";import"./ColumnConfigDialog-BlOPtPiA.js";import"./DraggableList-BpPgPeVp.js";import"./search-C5Mg5i_j.js";import"./Input-BQVgTzKu.js";import"./useControlled-C6k-yuxA.js";import"./Button-BmynEVTb.js";import"./small-cross-DoIYebHc.js";import"./ActionButton-mqL3sp89.js";import"./Checkbox-kwE5hH_y.js";import"./useValueChanged-1g9c2CbG.js";import"./CollapsiblePanel-Bjyt7xeM.js";import"./MultiColumnSortDialog-4055pRUc.js";import"./MenuTrigger-DLMiKJEj.js";import"./CompositeItem-B9XOzr5r.js";import"./ToolbarRootContext-C0Zkd7BN.js";import"./getDisabledMountTransitionStyles-BQmzDkGp.js";import"./getPseudoElementBounds-DJfyOCz1.js";import"./chevron-down-DJW-OO5g.js";import"./index-hHcESr47.js";import"./error-DLaKvyDO.js";import"./BaseCbacBanner-2-wgiHpz.js";import"./makeExternalStore-CCIciaKQ.js";import"./Tooltip-iWwEcmz_.js";import"./PopoverPopup-C8ygOczV.js";import"./debounce-BmbcUYOw.js";import"./useOsdkClient-yhwhd92y.js";import"./tick-DQ2Owbrw.js";import"./DropdownField-nhbLlfgI.js";import"./isEqual-FOvNndLt.js";import"./withOsdkMetrics-BbwSxYIO.js";const{expect:e,screen:t,userEvent:T,within:f}=__STORYBOOK_MODULE_TEST__,ue={...u,title:"Components/ObjectTable"},n={args:{objectType:c,columnDefinitions:l},parameters:{docs:{description:{story:"Minimal setup showing Employee data with default column definitions."},source:{code:"<ObjectTable objectType={Employee} />"}}},render:o=>i.jsx("div",{className:"object-table-container",style:{height:"600px"},children:i.jsx(p,{...o})}),play:async({canvasElement:o})=>{const a=f(o);await a.findByText(d),await y(a,"fullName"),await e(await t.findByRole("menuitem",{name:"Sort ascending"})).toBeInTheDocument(),await e(t.getByRole("menuitem",{name:"Sort descending"})).toBeInTheDocument(),await e(t.getByRole("menuitem",{name:"Pin column"})).toBeInTheDocument(),await e(t.getByRole("menuitem",{name:"Configure Columns"})).toBeInTheDocument(),await T.keyboard("{Escape}")}};var m,r,s;n.parameters={...n.parameters,docs:{...(m=n.parameters)==null?void 0:m.docs,source:{originalSource:`{
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
