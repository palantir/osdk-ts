import{j as i}from"./iframe-CY1bley7.js";import{O as p}from"./object-table-A9mWQwEa.js";import{E as c}from"./Employee-BAk2o20h.js";import{d as l,o as u,T as d,a as y}from"./objectTableStoryHelpers-BH_AXQjN.js";import"./preload-helper-D3osyoeZ.js";import"./Table-D2T9VBKl.js";import"./index-rh2lseoR.js";import"./Dialog-Kvxxr7Fa.js";import"./cross-cJ3Efo1g.js";import"./svgIconContainer-CzZrnJM2.js";import"./useBaseUiId-DVcIvI44.js";import"./InternalBackdrop-XcwLG7Wl.js";import"./composite-CiwpWFDy.js";import"./index-Bn4JMmGr.js";import"./index-gS5-xXe0.js";import"./index-Cql1DwPR.js";import"./useEventCallback-0BkCCq-P.js";import"./SkeletonBar-DwIeclcD.js";import"./LoadingCell-C8KQ1Jim.js";import"./ColumnConfigDialog-B_LOG-aU.js";import"./DraggableList-BJQ1Cebx.js";import"./search-146DDh_k.js";import"./Input-DEo9NwDI.js";import"./useControlled-fFwZP0Ap.js";import"./Button-B5JcIIcB.js";import"./small-cross-C-dRKbNY.js";import"./ActionButton-DZcKNYBj.js";import"./Checkbox-Bmhg2B2y.js";import"./useValueChanged-L5FNnMzO.js";import"./CollapsiblePanel-DpxhAw9o.js";import"./MultiColumnSortDialog-vIHLXOvG.js";import"./MenuTrigger-Bgl9RjP3.js";import"./CompositeItem-BpiTOIyl.js";import"./ToolbarRootContext-rjSxP1dE.js";import"./getDisabledMountTransitionStyles-yZsKNqSB.js";import"./getPseudoElementBounds-FXB-giXH.js";import"./chevron-down-BiDqtejG.js";import"./index-DlXpweC6.js";import"./error-B6HE4awo.js";import"./BaseCbacBanner-CyYnHXV7.js";import"./makeExternalStore-Hj73T8jD.js";import"./Tooltip-CKa7DR8P.js";import"./PopoverPopup-CFM-iRBs.js";import"./debounce-DWtsOSeV.js";import"./useOsdkClient-hIZdaTDT.js";import"./tick-fClSJcEW.js";import"./DropdownField-BaFSMd8X.js";import"./isEqual-DoT9v07x.js";import"./withOsdkMetrics-Y9b7QhtM.js";const{expect:e,screen:t,userEvent:T,within:f}=__STORYBOOK_MODULE_TEST__,ue={...u,title:"Components/ObjectTable"},n={args:{objectType:c,columnDefinitions:l},parameters:{docs:{description:{story:"Minimal setup showing Employee data with default column definitions."},source:{code:"<ObjectTable objectType={Employee} />"}}},render:o=>i.jsx("div",{className:"object-table-container",style:{height:"600px"},children:i.jsx(p,{...o})}),play:async({canvasElement:o})=>{const a=f(o);await a.findByText(d),await y(a,"fullName"),await e(await t.findByRole("menuitem",{name:"Sort ascending"})).toBeInTheDocument(),await e(t.getByRole("menuitem",{name:"Sort descending"})).toBeInTheDocument(),await e(t.getByRole("menuitem",{name:"Pin column"})).toBeInTheDocument(),await e(t.getByRole("menuitem",{name:"Configure Columns"})).toBeInTheDocument(),await T.keyboard("{Escape}")}};var m,r,s;n.parameters={...n.parameters,docs:{...(m=n.parameters)==null?void 0:m.docs,source:{originalSource:`{
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
