import{j as i}from"./iframe-BSBY3PjJ.js";import{O as p}from"./object-table-by3GvYNO.js";import{E as c}from"./Employee-BAk2o20h.js";import{d as l,o as u,T as d,a as y}from"./objectTableStoryHelpers-BT0whPcp.js";import"./preload-helper-DpSdlFS8.js";import"./Table-DyL3FyVA.js";import"./index-DK106w7q.js";import"./Dialog-D-VCZ-Xj.js";import"./cross-ChnkwhQq.js";import"./svgIconContainer-CVR7Tkh3.js";import"./useBaseUiId-BWCrzuEr.js";import"./InternalBackdrop-BAAE8sPY.js";import"./composite-iYZqsZLy.js";import"./index-DVvqS1th.js";import"./index-CKbXy3Dj.js";import"./index-tq3mLcAa.js";import"./useEventCallback-Cz9YIY33.js";import"./SkeletonBar-C6FAa51I.js";import"./LoadingCell-B1hHHivN.js";import"./ColumnConfigDialog-xZIDScDz.js";import"./DraggableList-BayLOggI.js";import"./search-D4Uipsbf.js";import"./Input-DLFn8nXq.js";import"./useControlled-Ki3OxTZR.js";import"./Button-DyRQe702.js";import"./small-cross-DYeQuCck.js";import"./ActionButton-C4rmndSw.js";import"./Checkbox-C0f3x1KO.js";import"./useValueChanged-srC6xFPd.js";import"./CollapsiblePanel-BIFNkFs4.js";import"./MultiColumnSortDialog-DhGJANiF.js";import"./MenuTrigger-C6BZNbBa.js";import"./CompositeItem-B9uKrben.js";import"./ToolbarRootContext-5qjYeV0P.js";import"./getDisabledMountTransitionStyles-CnzqGvPD.js";import"./getPseudoElementBounds-B4FwyunF.js";import"./chevron-down-BHUr8iy5.js";import"./index-YAOpnUoq.js";import"./error-iycxY9-l.js";import"./BaseCbacBanner-CPgeKTE0.js";import"./makeExternalStore-DU_ddruH.js";import"./Tooltip-BAR8Dcp7.js";import"./PopoverPopup-B_rMzGeU.js";import"./debounce-0JtHt6-L.js";import"./useOsdkClient-COaUlzkH.js";import"./tick-CwHYlOtH.js";import"./DropdownField-DL8lskl1.js";import"./isEqual-C70Oa3sU.js";import"./withOsdkMetrics-C3TRqwn-.js";const{expect:e,screen:t,userEvent:T,within:f}=__STORYBOOK_MODULE_TEST__,ue={...u,title:"Components/ObjectTable"},n={args:{objectType:c,columnDefinitions:l},parameters:{docs:{description:{story:"Minimal setup showing Employee data with default column definitions."},source:{code:"<ObjectTable objectType={Employee} />"}}},render:o=>i.jsx("div",{className:"object-table-container",style:{height:"600px"},children:i.jsx(p,{...o})}),play:async({canvasElement:o})=>{const a=f(o);await a.findByText(d),await y(a,"fullName"),await e(await t.findByRole("menuitem",{name:"Sort ascending"})).toBeInTheDocument(),await e(t.getByRole("menuitem",{name:"Sort descending"})).toBeInTheDocument(),await e(t.getByRole("menuitem",{name:"Pin column"})).toBeInTheDocument(),await e(t.getByRole("menuitem",{name:"Configure Columns"})).toBeInTheDocument(),await T.keyboard("{Escape}")}};var m,r,s;n.parameters={...n.parameters,docs:{...(m=n.parameters)==null?void 0:m.docs,source:{originalSource:`{
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
