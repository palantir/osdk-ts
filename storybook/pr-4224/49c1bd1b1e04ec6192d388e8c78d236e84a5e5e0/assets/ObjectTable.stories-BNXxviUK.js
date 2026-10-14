import{j as i}from"./iframe-C4UMSUV8.js";import{O as p}from"./object-table-Q8UrgRqd.js";import{E as c}from"./Employee-BAk2o20h.js";import{d as l,o as u,T as d,a as y}from"./objectTableStoryHelpers-PQ6WQcw1.js";import"./preload-helper-BqsIy_YL.js";import"./Table-CctLNSxZ.js";import"./index-Dlv7asCS.js";import"./Dialog-DfvM1sIK.js";import"./cross-DzO2_pjl.js";import"./svgIconContainer-AOO7GD-s.js";import"./useBaseUiId-BfnaHgsG.js";import"./InternalBackdrop-_W1XqsYG.js";import"./composite-BaqTaPKU.js";import"./index-Dm12TBSV.js";import"./index-DMrzx1Mz.js";import"./index-C9vtPXO1.js";import"./useEventCallback-DafiBAM-.js";import"./SkeletonBar-BlB5K85_.js";import"./LoadingCell-BQ1ZcdLP.js";import"./ColumnConfigDialog-Bij9Mv3S.js";import"./DraggableList-DTr2Rc6q.js";import"./search-D1rWsfme.js";import"./Input-Dd7hmS3r.js";import"./useControlled-DaMNSDAG.js";import"./Button-3fs9_LlW.js";import"./small-cross-CbMP9reg.js";import"./ActionButton-DPjqFZOR.js";import"./Checkbox-AayFk0MD.js";import"./useValueChanged-GkMCatyW.js";import"./CollapsiblePanel-CT-3U1A3.js";import"./MultiColumnSortDialog-DsWc4H6V.js";import"./MenuTrigger-KLM0HTCA.js";import"./CompositeItem-DdxiUYfL.js";import"./ToolbarRootContext-DVOP2BC1.js";import"./getDisabledMountTransitionStyles-CQ_yz0-6.js";import"./getPseudoElementBounds-CvXSJ4vT.js";import"./chevron-down-OaulZx0F.js";import"./index-BlMVnv-1.js";import"./error-Dz-jjHSU.js";import"./BaseCbacBanner-CpMpxxo1.js";import"./makeExternalStore-CmEuGlMk.js";import"./Tooltip-DEV4zdHe.js";import"./PopoverPopup-N5V--xdD.js";import"./debounce-CZlA4PRB.js";import"./useOsdkClient-C3bf-TDO.js";import"./tick-BvTPrsR3.js";import"./DropdownField-CdX1mzab.js";import"./isEqual-B4AyH633.js";import"./withOsdkMetrics-DT43r1D8.js";const{expect:e,screen:t,userEvent:T,within:f}=__STORYBOOK_MODULE_TEST__,ue={...u,title:"Components/ObjectTable"},n={args:{objectType:c,columnDefinitions:l},parameters:{docs:{description:{story:"Minimal setup showing Employee data with default column definitions."},source:{code:"<ObjectTable objectType={Employee} />"}}},render:o=>i.jsx("div",{className:"object-table-container",style:{height:"600px"},children:i.jsx(p,{...o})}),play:async({canvasElement:o})=>{const a=f(o);await a.findByText(d),await y(a,"fullName"),await e(await t.findByRole("menuitem",{name:"Sort ascending"})).toBeInTheDocument(),await e(t.getByRole("menuitem",{name:"Sort descending"})).toBeInTheDocument(),await e(t.getByRole("menuitem",{name:"Pin column"})).toBeInTheDocument(),await e(t.getByRole("menuitem",{name:"Configure Columns"})).toBeInTheDocument(),await T.keyboard("{Escape}")}};var m,r,s;n.parameters={...n.parameters,docs:{...(m=n.parameters)==null?void 0:m.docs,source:{originalSource:`{
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
