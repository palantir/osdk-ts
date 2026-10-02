import{j as i}from"./iframe-dYZcY_yd.js";import{O as p}from"./object-table-DdgFIgE4.js";import{E as c}from"./Employee-BAk2o20h.js";import{d as l,o as u,T as d,a as y}from"./objectTableStoryHelpers-C2shaYOw.js";import"./preload-helper-nvTVJuZ0.js";import"./Table-CXRdWy_q.js";import"./index-DdpHHEag.js";import"./Dialog-2Xy4rBeC.js";import"./cross-Dy_Om33n.js";import"./svgIconContainer-d4KiPlL-.js";import"./useBaseUiId-BmHomGuM.js";import"./InternalBackdrop-B7SrXjlM.js";import"./composite-D7xb_xyv.js";import"./index-D1qSefVk.js";import"./index-CTY9EHBj.js";import"./index-YYQZ3ova.js";import"./useEventCallback-DeO715E3.js";import"./SkeletonBar-_1DWBUrN.js";import"./LoadingCell-DQBTbC2i.js";import"./ColumnConfigDialog-MRc2UlrB.js";import"./DraggableList-BwkaMsR8.js";import"./search-CDnnsnvp.js";import"./Input-2gIVp1J7.js";import"./useControlled-BgrYkcgC.js";import"./Button-lcjZj2UQ.js";import"./small-cross-BXDAngmo.js";import"./ActionButton-oKML9K2p.js";import"./Checkbox-BpEaPOBK.js";import"./useValueChanged-RbvDjp5x.js";import"./CollapsiblePanel-B2EqHOMP.js";import"./MultiColumnSortDialog-RXpLq4f3.js";import"./MenuTrigger-CAysan5f.js";import"./CompositeItem-DIIkXBkk.js";import"./ToolbarRootContext-DaQhWJhT.js";import"./getDisabledMountTransitionStyles-CEfeB9r5.js";import"./getPseudoElementBounds-MleGKnPQ.js";import"./chevron-down-DS-zMT_I.js";import"./index-CtGq4PGv.js";import"./error-D1PWFSVl.js";import"./BaseCbacBanner-Dqe3LcXr.js";import"./makeExternalStore-CHw5k_cg.js";import"./Tooltip-NXVN9pAS.js";import"./PopoverPopup-CzPa19Jo.js";import"./debounce-0K7vkP1p.js";import"./useOsdkClient-B_kqpc0H.js";import"./tick-6CBeLfgO.js";import"./DropdownField-BCHipXvA.js";import"./isEqual-Bhfajn7J.js";import"./withOsdkMetrics-7sRD0apQ.js";const{expect:e,screen:t,userEvent:T,within:f}=__STORYBOOK_MODULE_TEST__,ue={...u,title:"Components/ObjectTable"},n={args:{objectType:c,columnDefinitions:l},parameters:{docs:{description:{story:"Minimal setup showing Employee data with default column definitions."},source:{code:"<ObjectTable objectType={Employee} />"}}},render:o=>i.jsx("div",{className:"object-table-container",style:{height:"600px"},children:i.jsx(p,{...o})}),play:async({canvasElement:o})=>{const a=f(o);await a.findByText(d),await y(a,"fullName"),await e(await t.findByRole("menuitem",{name:"Sort ascending"})).toBeInTheDocument(),await e(t.getByRole("menuitem",{name:"Sort descending"})).toBeInTheDocument(),await e(t.getByRole("menuitem",{name:"Pin column"})).toBeInTheDocument(),await e(t.getByRole("menuitem",{name:"Configure Columns"})).toBeInTheDocument(),await T.keyboard("{Escape}")}};var m,r,s;n.parameters={...n.parameters,docs:{...(m=n.parameters)==null?void 0:m.docs,source:{originalSource:`{
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
