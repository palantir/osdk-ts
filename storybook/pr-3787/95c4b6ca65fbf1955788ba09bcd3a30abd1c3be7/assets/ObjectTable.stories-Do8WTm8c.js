import{j as i}from"./iframe-CsyA0Bys.js";import{O as p}from"./object-table-DKXoIvwf.js";import{E as c}from"./Employee-BAk2o20h.js";import{d as l,o as u,T as d,a as y}from"./objectTableStoryHelpers-D89LJm46.js";import"./preload-helper-KfZ568TX.js";import"./Table-CkkZtWXC.js";import"./index-BxyPqXWo.js";import"./Dialog-C4huEMMf.js";import"./cross-w7PsKmF1.js";import"./svgIconContainer-DaiSunt0.js";import"./useBaseUiId-DvYZt6lA.js";import"./InternalBackdrop-BGyyYpcl.js";import"./composite-BqX-duXl.js";import"./index-BgAZAXfa.js";import"./index--UUGPORc.js";import"./index-B6tCWI8M.js";import"./useEventCallback-C6V46umO.js";import"./SkeletonBar-DUoV5IXh.js";import"./LoadingCell-BSzubWHe.js";import"./ColumnConfigDialog-D1ScqPPe.js";import"./DraggableList-BzSrNu1D.js";import"./search-45t1HcTK.js";import"./Input-CRzWdgdg.js";import"./useControlled-Bo2Cmprh.js";import"./isEqual-Cj7osBnf.js";import"./isObject-CKDvM3HJ.js";import"./Button-6-1YrzTD.js";import"./ActionButton-EYuh1PNc.js";import"./Checkbox-ygCyTm5_.js";import"./useValueChanged-BRLlAh0p.js";import"./CollapsiblePanel-DWFI6paa.js";import"./MultiColumnSortDialog-BSlmLUh3.js";import"./MenuTrigger-DrHL6axm.js";import"./CompositeItem-CL1_i0UZ.js";import"./ToolbarRootContext-zz45WkNS.js";import"./getDisabledMountTransitionStyles-CO4DEx-A.js";import"./getPseudoElementBounds-C5GdHQ1I.js";import"./chevron-down-Dfm6xDjd.js";import"./index-BnVBTYNX.js";import"./error-B7vEDe1J.js";import"./BaseCbacBanner-CCr22KxZ.js";import"./makeExternalStore-CjIFX2gB.js";import"./Tooltip-DakP11QU.js";import"./PopoverPopup-g6LpsQ1J.js";import"./toNumber-CQrFFewn.js";import"./useOsdkClient-Bfd4ZluK.js";import"./tick-CY-3TnK1.js";import"./DropdownField-D3h01OJB.js";import"./withOsdkMetrics-CoF3qvtY.js";const{expect:e,screen:t,userEvent:T,within:f}=__STORYBOOK_MODULE_TEST__,ue={...u,title:"Components/ObjectTable"},n={args:{objectType:c,columnDefinitions:l},parameters:{docs:{description:{story:"Minimal setup showing Employee data with default column definitions."},source:{code:"<ObjectTable objectType={Employee} />"}}},render:o=>i.jsx("div",{className:"object-table-container",style:{height:"600px"},children:i.jsx(p,{...o})}),play:async({canvasElement:o})=>{const a=f(o);await a.findByText(d),await y(a,"fullName"),await e(await t.findByRole("menuitem",{name:"Sort ascending"})).toBeInTheDocument(),await e(t.getByRole("menuitem",{name:"Sort descending"})).toBeInTheDocument(),await e(t.getByRole("menuitem",{name:"Pin column"})).toBeInTheDocument(),await e(t.getByRole("menuitem",{name:"Configure Columns"})).toBeInTheDocument(),await T.keyboard("{Escape}")}};var m,r,s;n.parameters={...n.parameters,docs:{...(m=n.parameters)==null?void 0:m.docs,source:{originalSource:`{
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
