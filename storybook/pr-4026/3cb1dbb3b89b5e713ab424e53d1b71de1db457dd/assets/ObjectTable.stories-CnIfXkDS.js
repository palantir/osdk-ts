import{j as i}from"./iframe-CQYW_eB-.js";import{O as p}from"./object-table-BDeFDNjl.js";import{E as c}from"./Employee-BAk2o20h.js";import{d as l,o as u,T as d,a as y}from"./objectTableStoryHelpers-BmtE90bi.js";import"./preload-helper-D9TT_d3h.js";import"./Table-OjBZFtWq.js";import"./index-T0VZSE-0.js";import"./Dialog-B1Us0h3J.js";import"./cross-4hmynEDT.js";import"./svgIconContainer-BqHGQtsP.js";import"./useBaseUiId-CLAYvn4B.js";import"./InternalBackdrop-C-z8SZHZ.js";import"./composite-BSIyIiZo.js";import"./index-e5OIlOnL.js";import"./index-B0AlVUaG.js";import"./index-DhxqciGT.js";import"./useEventCallback-C3RBUCaT.js";import"./SkeletonBar-C0p74Cj2.js";import"./LoadingCell-CjFrSWuR.js";import"./ColumnConfigDialog-DvGyHFcN.js";import"./DraggableList-DJMs0ux8.js";import"./search-Dr6j30rS.js";import"./Input-BafxkRHB.js";import"./useControlled-Z2EDTbBt.js";import"./Button-CYh2Cp69.js";import"./small-cross-JF11sM_d.js";import"./ActionButton-C0r1BUIm.js";import"./Checkbox-C_bPdJMy.js";import"./useValueChanged-CM5Va8yd.js";import"./CollapsiblePanel-B0DUDYqS.js";import"./MultiColumnSortDialog-Ba3Y_NE5.js";import"./MenuTrigger-o1K9Wiz8.js";import"./CompositeItem-B2O_tBvb.js";import"./ToolbarRootContext-DdcVqPbo.js";import"./getDisabledMountTransitionStyles-BIEIO7LI.js";import"./getPseudoElementBounds-B7H73yVG.js";import"./chevron-down-3SfwSm8L.js";import"./index-Cw-CpLvV.js";import"./error-Cu14UhDr.js";import"./BaseCbacBanner-5fZxMSPz.js";import"./makeExternalStore-3GXsIke7.js";import"./Tooltip-C-8DSvp1.js";import"./PopoverPopup-DiKMNXk7.js";import"./debounce-iahYFdXe.js";import"./useOsdkClient-CtP0GIsC.js";import"./tick-DZRxM9qV.js";import"./DropdownField-DVT_1-ko.js";import"./isEqual-CtXL3I7G.js";import"./withOsdkMetrics-jD7Q4XnW.js";const{expect:e,screen:t,userEvent:T,within:f}=__STORYBOOK_MODULE_TEST__,ue={...u,title:"Components/ObjectTable"},n={args:{objectType:c,columnDefinitions:l},parameters:{docs:{description:{story:"Minimal setup showing Employee data with default column definitions."},source:{code:"<ObjectTable objectType={Employee} />"}}},render:o=>i.jsx("div",{className:"object-table-container",style:{height:"600px"},children:i.jsx(p,{...o})}),play:async({canvasElement:o})=>{const a=f(o);await a.findByText(d),await y(a,"fullName"),await e(await t.findByRole("menuitem",{name:"Sort ascending"})).toBeInTheDocument(),await e(t.getByRole("menuitem",{name:"Sort descending"})).toBeInTheDocument(),await e(t.getByRole("menuitem",{name:"Pin column"})).toBeInTheDocument(),await e(t.getByRole("menuitem",{name:"Configure Columns"})).toBeInTheDocument(),await T.keyboard("{Escape}")}};var m,r,s;n.parameters={...n.parameters,docs:{...(m=n.parameters)==null?void 0:m.docs,source:{originalSource:`{
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
