import{j as i}from"./iframe-CYhZfT3_.js";import{O as p}from"./object-table-DCRgSSGC.js";import{E as c}from"./Employee-BAk2o20h.js";import{d as l,o as u,T as d,a as y}from"./objectTableStoryHelpers-6avyJBBJ.js";import"./preload-helper-DuW2ZL9O.js";import"./Table-CXcwYSnZ.js";import"./index-Bsk-T9AU.js";import"./Dialog-Tc2_deC_.js";import"./cross-BJdfjTua.js";import"./svgIconContainer-BpN9N_JA.js";import"./useBaseUiId-DZSo-im9.js";import"./InternalBackdrop-DfBwjCGc.js";import"./composite-BPx_h-nk.js";import"./index-BKmbfABs.js";import"./index-BthbUhg9.js";import"./index-C-WRNz3E.js";import"./useEventCallback-CunyUO5F.js";import"./SkeletonBar-Dx8fHgLa.js";import"./LoadingCell-CZR7iFmp.js";import"./ColumnConfigDialog-D7ZisgWP.js";import"./DraggableList-BbR3WdJ2.js";import"./search-CgpKnjTm.js";import"./Input-kdaFhJQC.js";import"./useControlled-Cx72k2R7.js";import"./Button-B7yZuVYQ.js";import"./small-cross-C5sJSYZw.js";import"./ActionButton-DaZ8p3ZP.js";import"./Checkbox-DMnLA1rT.js";import"./useValueChanged-CUgB0lPb.js";import"./CollapsiblePanel-BejYuaCH.js";import"./MultiColumnSortDialog-DfskZs5F.js";import"./MenuTrigger-BWA5hG1d.js";import"./CompositeItem-CqWJQP_Z.js";import"./ToolbarRootContext-C__wJlPO.js";import"./getDisabledMountTransitionStyles-DV9NgReY.js";import"./getPseudoElementBounds-DeuZh7pR.js";import"./chevron-down-DkFotZE7.js";import"./index-BrJQ0JzU.js";import"./error-DWSHrAom.js";import"./BaseCbacBanner-DHWoPqU5.js";import"./makeExternalStore-BbuDQhcx.js";import"./Tooltip-DsiXQ8gP.js";import"./PopoverPopup-BuTn7Bh_.js";import"./toNumber-CuILyFQS.js";import"./useOsdkClient-BJBOx_dn.js";import"./tick-BVznHvW2.js";import"./DropdownField-C7hB0VQ9.js";import"./withOsdkMetrics-BU-eC2Yy.js";const{expect:e,screen:t,userEvent:T,within:f}=__STORYBOOK_MODULE_TEST__,le={...u,title:"Components/ObjectTable"},n={args:{objectType:c,columnDefinitions:l},parameters:{docs:{description:{story:"Minimal setup showing Employee data with default column definitions."},source:{code:"<ObjectTable objectType={Employee} />"}}},render:o=>i.jsx("div",{className:"object-table-container",style:{height:"600px"},children:i.jsx(p,{...o})}),play:async({canvasElement:o})=>{const a=f(o);await a.findByText(d),await y(a,"fullName"),await e(await t.findByRole("menuitem",{name:"Sort ascending"})).toBeInTheDocument(),await e(t.getByRole("menuitem",{name:"Sort descending"})).toBeInTheDocument(),await e(t.getByRole("menuitem",{name:"Pin column"})).toBeInTheDocument(),await e(t.getByRole("menuitem",{name:"Configure Columns"})).toBeInTheDocument(),await T.keyboard("{Escape}")}};var m,r,s;n.parameters={...n.parameters,docs:{...(m=n.parameters)==null?void 0:m.docs,source:{originalSource:`{
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
}`,...(s=(r=n.parameters)==null?void 0:r.docs)==null?void 0:s.source}}};const ue=["Default"];export{n as Default,ue as __namedExportsOrder,le as default};
