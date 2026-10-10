import{j as i}from"./iframe-5u9ZtrJt.js";import{O as p}from"./object-table-CN_KK_hh.js";import{E as c}from"./Employee-BAk2o20h.js";import{d as l,o as u,T as d,a as y}from"./objectTableStoryHelpers-B6W4Nvqd.js";import"./preload-helper-CuQanuSU.js";import"./Table-BHoyzQ-v.js";import"./index-DavgBEP1.js";import"./Dialog-D7Qi8d0N.js";import"./cross-BpzwhQi5.js";import"./svgIconContainer-jQAOa3hY.js";import"./useBaseUiId-CQYNNsxK.js";import"./InternalBackdrop-B3-fNuIA.js";import"./composite-CGw-Ihls.js";import"./index-DMFEApmF.js";import"./index-C7XPHJ8o.js";import"./index-CtwWL3Ux.js";import"./useEventCallback-CX8B3d2_.js";import"./SkeletonBar-Kv76IGDP.js";import"./LoadingCell-DBmjNbby.js";import"./ColumnConfigDialog-Bmw7WTKl.js";import"./DraggableList-7jhILcdd.js";import"./search-JNpB3WRd.js";import"./Input-D8eW-et_.js";import"./useControlled-B5brBFEZ.js";import"./Button-ChR8k8XV.js";import"./small-cross-AuWZbj58.js";import"./ActionButton-2ZAcI0x_.js";import"./Checkbox-ySxrIpA4.js";import"./useValueChanged-BuQNO87J.js";import"./CollapsiblePanel-D47Xkn4l.js";import"./MultiColumnSortDialog-BwZ0CHfV.js";import"./MenuTrigger-DlhSOFK6.js";import"./CompositeItem-DF5M0Q62.js";import"./ToolbarRootContext-BdaDw2wr.js";import"./getDisabledMountTransitionStyles-v5M4alGV.js";import"./getPseudoElementBounds-vB1bflfw.js";import"./chevron-down-B3Fv0w50.js";import"./index-vMKc9Vfa.js";import"./error-CQ8cV0Cv.js";import"./BaseCbacBanner-Do26j3g0.js";import"./makeExternalStore-DT_DHHwN.js";import"./Tooltip-CTZfgpQD.js";import"./PopoverPopup-DeaoiWel.js";import"./debounce-C_5CcOwA.js";import"./useOsdkClient-PPOhTHxO.js";import"./tick-CScWJoZM.js";import"./DropdownField-DBfFz7s7.js";import"./isEqual-C4H2ETAO.js";import"./withOsdkMetrics-evZV6vNo.js";const{expect:e,screen:t,userEvent:T,within:f}=__STORYBOOK_MODULE_TEST__,ue={...u,title:"Components/ObjectTable"},n={args:{objectType:c,columnDefinitions:l},parameters:{docs:{description:{story:"Minimal setup showing Employee data with default column definitions."},source:{code:"<ObjectTable objectType={Employee} />"}}},render:o=>i.jsx("div",{className:"object-table-container",style:{height:"600px"},children:i.jsx(p,{...o})}),play:async({canvasElement:o})=>{const a=f(o);await a.findByText(d),await y(a,"fullName"),await e(await t.findByRole("menuitem",{name:"Sort ascending"})).toBeInTheDocument(),await e(t.getByRole("menuitem",{name:"Sort descending"})).toBeInTheDocument(),await e(t.getByRole("menuitem",{name:"Pin column"})).toBeInTheDocument(),await e(t.getByRole("menuitem",{name:"Configure Columns"})).toBeInTheDocument(),await T.keyboard("{Escape}")}};var m,r,s;n.parameters={...n.parameters,docs:{...(m=n.parameters)==null?void 0:m.docs,source:{originalSource:`{
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
