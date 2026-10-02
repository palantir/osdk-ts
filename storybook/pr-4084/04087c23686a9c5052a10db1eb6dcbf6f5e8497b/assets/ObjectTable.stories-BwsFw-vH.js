import{j as i}from"./iframe-BwJP8SAz.js";import{O as p}from"./object-table-CrHQBWum.js";import{E as c}from"./Employee-BAk2o20h.js";import{d as l,o as u,T as d,a as y}from"./objectTableStoryHelpers-CBFuQ5zj.js";import"./preload-helper-C__v2HQV.js";import"./Table-C49xgZr-.js";import"./index-B1xmU5ac.js";import"./Dialog-CZd0Ulal.js";import"./cross-DiTZc7QM.js";import"./svgIconContainer-DMpafcgu.js";import"./useBaseUiId-C34DKKh6.js";import"./InternalBackdrop-KutqEmqy.js";import"./composite-a2q1QDdA.js";import"./index-C-xvBHp4.js";import"./index-Bx66jA38.js";import"./index-B0qPlz_Q.js";import"./useEventCallback-BFud_X33.js";import"./SkeletonBar-CizSDGiZ.js";import"./LoadingCell-DPQpBa5j.js";import"./ColumnConfigDialog-oa1RhDZt.js";import"./DraggableList-k-HxCwCD.js";import"./search-CesJa2BL.js";import"./Input-Biv1kBRN.js";import"./useControlled-ZLl_p6JX.js";import"./Button-C4Q4ezlI.js";import"./small-cross-C6anClUq.js";import"./ActionButton-DMCSebnl.js";import"./Checkbox-SS-r8qqb.js";import"./useValueChanged-o1Jhr7NX.js";import"./CollapsiblePanel-Xr396GTI.js";import"./MultiColumnSortDialog-7vlTQGgu.js";import"./MenuTrigger-DxJqJO4e.js";import"./CompositeItem-BsMyIE9-.js";import"./ToolbarRootContext-CBbcQ6qS.js";import"./getDisabledMountTransitionStyles-DUZGhC9n.js";import"./getPseudoElementBounds-B49v7X00.js";import"./chevron-down-DSU29Yd7.js";import"./index-Qo_wZuR8.js";import"./error-DWAlVBAx.js";import"./BaseCbacBanner-AL6lb7ES.js";import"./makeExternalStore-BWpOLj7v.js";import"./Tooltip-Crxsicsv.js";import"./PopoverPopup-Bi4N4TLm.js";import"./debounce-4RuFCHX-.js";import"./useOsdkClient-DNt2UGx3.js";import"./tick-DOgiNo6k.js";import"./DropdownField-Bgmj7boA.js";import"./isEqual-CYfrdvqG.js";import"./withOsdkMetrics-CHhNGKv-.js";const{expect:e,screen:t,userEvent:T,within:f}=__STORYBOOK_MODULE_TEST__,ue={...u,title:"Components/ObjectTable"},n={args:{objectType:c,columnDefinitions:l},parameters:{docs:{description:{story:"Minimal setup showing Employee data with default column definitions."},source:{code:"<ObjectTable objectType={Employee} />"}}},render:o=>i.jsx("div",{className:"object-table-container",style:{height:"600px"},children:i.jsx(p,{...o})}),play:async({canvasElement:o})=>{const a=f(o);await a.findByText(d),await y(a,"fullName"),await e(await t.findByRole("menuitem",{name:"Sort ascending"})).toBeInTheDocument(),await e(t.getByRole("menuitem",{name:"Sort descending"})).toBeInTheDocument(),await e(t.getByRole("menuitem",{name:"Pin column"})).toBeInTheDocument(),await e(t.getByRole("menuitem",{name:"Configure Columns"})).toBeInTheDocument(),await T.keyboard("{Escape}")}};var m,r,s;n.parameters={...n.parameters,docs:{...(m=n.parameters)==null?void 0:m.docs,source:{originalSource:`{
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
