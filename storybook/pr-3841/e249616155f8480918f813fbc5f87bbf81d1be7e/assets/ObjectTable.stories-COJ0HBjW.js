import{j as i}from"./iframe-B6AkhtVd.js";import{O as p}from"./object-table-5ycu1SBj.js";import{E as c}from"./Employee-BAk2o20h.js";import{d as l,o as u,T as d,a as y}from"./objectTableStoryHelpers-aLrsEmLu.js";import"./preload-helper-DAEdGq6d.js";import"./Table-BlLk-jmR.js";import"./index-C91K9ps7.js";import"./Dialog-DY8gdZzF.js";import"./cross-m6qgDhvT.js";import"./svgIconContainer-BoSGc56J.js";import"./useBaseUiId-D6Pj3rgz.js";import"./InternalBackdrop-C36o_owR.js";import"./composite-BDhvysYg.js";import"./index-CveC20hk.js";import"./index-DS-1BAxQ.js";import"./index-BkcfJqel.js";import"./useEventCallback-BAkDWBWl.js";import"./SkeletonBar-B_sJhz87.js";import"./LoadingCell-CIFbvAcy.js";import"./ColumnConfigDialog-Bv3ie2QA.js";import"./DraggableList-BDAa16px.js";import"./search-CgNZ6jJc.js";import"./Input-DHV2JVjW.js";import"./useControlled-DvrLljgv.js";import"./Button-BWxAZ7YP.js";import"./small-cross-xxpfi0Bj.js";import"./ActionButton-BP9-0q8X.js";import"./Checkbox-Cy2DyjcR.js";import"./useValueChanged-9x7YgLOm.js";import"./CollapsiblePanel-DfmIfBjz.js";import"./MultiColumnSortDialog-C_vviL3T.js";import"./MenuTrigger-CzlQo5mG.js";import"./CompositeItem-BWKOk0A1.js";import"./ToolbarRootContext-DQVGsq2j.js";import"./getDisabledMountTransitionStyles-Cap-YFSs.js";import"./getPseudoElementBounds-CMFI7MrQ.js";import"./chevron-down-CEzkWe0K.js";import"./index-CAFFYM2J.js";import"./error-CIE68Eoj.js";import"./BaseCbacBanner-DzlGGx8L.js";import"./makeExternalStore-MefWcWhA.js";import"./Tooltip-DaBD8ywy.js";import"./PopoverPopup-DP1yRoK-.js";import"./debounce-DNhy8eaI.js";import"./useOsdkClient-DRkf_gGj.js";import"./tick-DyFFxs8l.js";import"./DropdownField-NIRLIRU1.js";import"./isEqual-B9AvV4Np.js";import"./withOsdkMetrics-D2EQ2PwQ.js";const{expect:e,screen:t,userEvent:T,within:f}=__STORYBOOK_MODULE_TEST__,ue={...u,title:"Components/ObjectTable"},n={args:{objectType:c,columnDefinitions:l},parameters:{docs:{description:{story:"Minimal setup showing Employee data with default column definitions."},source:{code:"<ObjectTable objectType={Employee} />"}}},render:o=>i.jsx("div",{className:"object-table-container",style:{height:"600px"},children:i.jsx(p,{...o})}),play:async({canvasElement:o})=>{const a=f(o);await a.findByText(d),await y(a,"fullName"),await e(await t.findByRole("menuitem",{name:"Sort ascending"})).toBeInTheDocument(),await e(t.getByRole("menuitem",{name:"Sort descending"})).toBeInTheDocument(),await e(t.getByRole("menuitem",{name:"Pin column"})).toBeInTheDocument(),await e(t.getByRole("menuitem",{name:"Configure Columns"})).toBeInTheDocument(),await T.keyboard("{Escape}")}};var m,r,s;n.parameters={...n.parameters,docs:{...(m=n.parameters)==null?void 0:m.docs,source:{originalSource:`{
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
