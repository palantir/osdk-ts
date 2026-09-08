import{j as i}from"./iframe-D-uQiAEU.js";import{O as p}from"./object-table-CnzEy9bK.js";import{E as c}from"./Employee-BAk2o20h.js";import{d as l,o as u,T as d,a as y}from"./objectTableStoryHelpers-BVtfvbbg.js";import"./preload-helper-p4UgLAci.js";import"./Table-BbvHOkRI.js";import"./index-BAcJFtsj.js";import"./Dialog-CpPL-wiB.js";import"./cross-Cxa7qZ4s.js";import"./svgIconContainer-BwquE4X7.js";import"./useBaseUiId-ChN6vCz4.js";import"./InternalBackdrop-DOf7Wbxd.js";import"./composite-DTJJNp0D.js";import"./index-BoPOR_G0.js";import"./index-TpgQ4q1W.js";import"./index-DGCwle_4.js";import"./useEventCallback-Dl207dUq.js";import"./SkeletonBar-fhPn3StW.js";import"./LoadingCell-C_UtXYFD.js";import"./ColumnConfigDialog-BsKg96eB.js";import"./DraggableList-CrG98e0P.js";import"./search-C_-XZuxq.js";import"./Input-DgsAa7tc.js";import"./useControlled-CCwQc26W.js";import"./Button-DI6776iG.js";import"./small-cross-BVZp2NPW.js";import"./ActionButton-CSIdFpLA.js";import"./Checkbox-DfqF_62M.js";import"./useValueChanged-B5Exoyob.js";import"./CollapsiblePanel-BRn0DhId.js";import"./MultiColumnSortDialog-BOMM5sOv.js";import"./MenuTrigger-C45wYiBf.js";import"./CompositeItem-gF6WPsof.js";import"./ToolbarRootContext-DCPVbVwA.js";import"./getDisabledMountTransitionStyles-BWrmK3Yb.js";import"./getPseudoElementBounds-CEbtWgTD.js";import"./chevron-down-BwXU5HA0.js";import"./index-C2SgD6rg.js";import"./error-CnFMhHrw.js";import"./BaseCbacBanner-DzAdTHvi.js";import"./makeExternalStore-BRy1NQ_S.js";import"./Tooltip-DKGKb6ew.js";import"./PopoverPopup-oWHkAC_s.js";import"./debounce-CRIH8IRe.js";import"./useOsdkClient-B1rGRzo8.js";import"./tick-BL7yIHsf.js";import"./DropdownField-CAzO2VqE.js";import"./isEqual-Cq2Z2ug0.js";import"./withOsdkMetrics-DnhB_JkA.js";const{expect:e,screen:t,userEvent:T,within:f}=__STORYBOOK_MODULE_TEST__,ue={...u,title:"Components/ObjectTable"},n={args:{objectType:c,columnDefinitions:l},parameters:{docs:{description:{story:"Minimal setup showing Employee data with default column definitions."},source:{code:"<ObjectTable objectType={Employee} />"}}},render:o=>i.jsx("div",{className:"object-table-container",style:{height:"600px"},children:i.jsx(p,{...o})}),play:async({canvasElement:o})=>{const a=f(o);await a.findByText(d),await y(a,"fullName"),await e(await t.findByRole("menuitem",{name:"Sort ascending"})).toBeInTheDocument(),await e(t.getByRole("menuitem",{name:"Sort descending"})).toBeInTheDocument(),await e(t.getByRole("menuitem",{name:"Pin column"})).toBeInTheDocument(),await e(t.getByRole("menuitem",{name:"Configure Columns"})).toBeInTheDocument(),await T.keyboard("{Escape}")}};var m,r,s;n.parameters={...n.parameters,docs:{...(m=n.parameters)==null?void 0:m.docs,source:{originalSource:`{
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
