import{j as i}from"./iframe-MV3gBuhb.js";import{O as p}from"./object-table-BFzb71oN.js";import{E as c}from"./Employee-BAk2o20h.js";import{d as l,o as u,T as d,a as y}from"./objectTableStoryHelpers-DER-b4Op.js";import"./preload-helper-Dp1pzeXC.js";import"./Table-c0smS1a0.js";import"./index-CPeLDKLC.js";import"./Dialog-lAXuBedk.js";import"./cross-D-dx7OQY.js";import"./svgIconContainer-C29zPRQZ.js";import"./useBaseUiId-DJc1IzLT.js";import"./InternalBackdrop-CqWsDzos.js";import"./composite-JnoI1v48.js";import"./index-DUyzW1cO.js";import"./index-DS4B-Z3C.js";import"./index-DixCBahy.js";import"./useEventCallback-CTXi7CF8.js";import"./SkeletonBar-BRlbBChd.js";import"./LoadingCell-CkEkP96h.js";import"./ColumnConfigDialog-BzgvzqRp.js";import"./DraggableList-BKEI068J.js";import"./search-Dx6v8zL9.js";import"./Input-CFAsB6-e.js";import"./useControlled-BAuu-oXX.js";import"./isEqual-BJwCsjI-.js";import"./isObject-BSAcuXqJ.js";import"./Button-BCOIsKOG.js";import"./ActionButton-6JWtFS74.js";import"./Checkbox-C3QVh5C1.js";import"./useValueChanged-DuPZkKLu.js";import"./CollapsiblePanel-0deNnNaL.js";import"./MultiColumnSortDialog-CCvPAeqZ.js";import"./MenuTrigger-DCv0W0ii.js";import"./CompositeItem-CqaTd4ET.js";import"./ToolbarRootContext-BV1tTkw1.js";import"./getDisabledMountTransitionStyles-D8sukNzL.js";import"./getPseudoElementBounds-bt3u7bQP.js";import"./chevron-down-Dq4ZWi7O.js";import"./index-CSUITZSY.js";import"./error-DZQYXIrZ.js";import"./BaseCbacBanner-Dngf4cbN.js";import"./makeExternalStore-BXBS29Jd.js";import"./Tooltip-vGIWKmaA.js";import"./PopoverPopup-_2BHXoEs.js";import"./toNumber-Dme5-GRS.js";import"./useOsdkClient-DGtMq_wB.js";import"./tick-CeYFwvYZ.js";import"./DropdownField-DL5_VC8k.js";import"./withOsdkMetrics-CCiJ9j-V.js";const{expect:e,screen:t,userEvent:T,within:f}=__STORYBOOK_MODULE_TEST__,ue={...u,title:"Components/ObjectTable"},n={args:{objectType:c,columnDefinitions:l},parameters:{docs:{description:{story:"Minimal setup showing Employee data with default column definitions."},source:{code:"<ObjectTable objectType={Employee} />"}}},render:o=>i.jsx("div",{className:"object-table-container",style:{height:"600px"},children:i.jsx(p,{...o})}),play:async({canvasElement:o})=>{const a=f(o);await a.findByText(d),await y(a,"fullName"),await e(await t.findByRole("menuitem",{name:"Sort ascending"})).toBeInTheDocument(),await e(t.getByRole("menuitem",{name:"Sort descending"})).toBeInTheDocument(),await e(t.getByRole("menuitem",{name:"Pin column"})).toBeInTheDocument(),await e(t.getByRole("menuitem",{name:"Configure Columns"})).toBeInTheDocument(),await T.keyboard("{Escape}")}};var m,r,s;n.parameters={...n.parameters,docs:{...(m=n.parameters)==null?void 0:m.docs,source:{originalSource:`{
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
