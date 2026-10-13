import{j as i}from"./iframe-DkDai4TH.js";import{O as p}from"./object-table-CKGq-Yt0.js";import{E as c}from"./Employee-BAk2o20h.js";import{d as l,o as u,T as d,a as y}from"./objectTableStoryHelpers-CljPS4n3.js";import"./preload-helper-JjUJzXXj.js";import"./Table-CBsiQDO9.js";import"./index-DY9rgq0e.js";import"./Dialog-x7L3Jod8.js";import"./cross-CAMMsTtN.js";import"./svgIconContainer-Cn4a8-GP.js";import"./useBaseUiId-BSkkBPAh.js";import"./InternalBackdrop-BgXmZwAB.js";import"./composite-CiXUPQeJ.js";import"./index-BmkcSWO6.js";import"./index-Lc08usjZ.js";import"./index-BwIhbgz8.js";import"./useEventCallback-BdoVLZK3.js";import"./SkeletonBar-d-dHv_j1.js";import"./LoadingCell-D2qX3LGd.js";import"./ColumnConfigDialog-CJl5tyvK.js";import"./DraggableList-CAN0mdih.js";import"./search-BHsfUlEN.js";import"./Input-Gi5Qq_w9.js";import"./useControlled-IY8Qa8dX.js";import"./Button-DKQFkDWL.js";import"./small-cross-DufbcP5m.js";import"./ActionButton-BfkacCWq.js";import"./Checkbox-B_asvOXP.js";import"./useValueChanged-BTwI4cyE.js";import"./CollapsiblePanel-EPxbZj4y.js";import"./MultiColumnSortDialog-CQaLv06I.js";import"./MenuTrigger-ClPp8RLZ.js";import"./CompositeItem-CMeIJ5rV.js";import"./ToolbarRootContext-BkXkRhp8.js";import"./getDisabledMountTransitionStyles-BtJBdJGG.js";import"./getPseudoElementBounds-C0JH-KZ8.js";import"./chevron-down-Do0LaDJ6.js";import"./index-CTVvDnPL.js";import"./error-CLEog6-B.js";import"./BaseCbacBanner-I9lKXzUo.js";import"./makeExternalStore-DYuRaPVt.js";import"./Tooltip-n8ZLzRPP.js";import"./PopoverPopup-D8lgugCY.js";import"./debounce-q25jq-DY.js";import"./useOsdkClient-CDwu3CFW.js";import"./tick-BTFlyx2h.js";import"./DropdownField-tN5gNLvn.js";import"./isEqual-Dc02W0EF.js";import"./withOsdkMetrics-CNRukvHq.js";const{expect:e,screen:t,userEvent:T,within:f}=__STORYBOOK_MODULE_TEST__,ue={...u,title:"Components/ObjectTable"},n={args:{objectType:c,columnDefinitions:l},parameters:{docs:{description:{story:"Minimal setup showing Employee data with default column definitions."},source:{code:"<ObjectTable objectType={Employee} />"}}},render:o=>i.jsx("div",{className:"object-table-container",style:{height:"600px"},children:i.jsx(p,{...o})}),play:async({canvasElement:o})=>{const a=f(o);await a.findByText(d),await y(a,"fullName"),await e(await t.findByRole("menuitem",{name:"Sort ascending"})).toBeInTheDocument(),await e(t.getByRole("menuitem",{name:"Sort descending"})).toBeInTheDocument(),await e(t.getByRole("menuitem",{name:"Pin column"})).toBeInTheDocument(),await e(t.getByRole("menuitem",{name:"Configure Columns"})).toBeInTheDocument(),await T.keyboard("{Escape}")}};var m,r,s;n.parameters={...n.parameters,docs:{...(m=n.parameters)==null?void 0:m.docs,source:{originalSource:`{
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
