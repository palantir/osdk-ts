import{j as i}from"./iframe-Ce3jEZMI.js";import{O as p}from"./object-table-fxytz55c.js";import{E as c}from"./Employee-BAk2o20h.js";import{d as l,o as u,T as d,a as y}from"./objectTableStoryHelpers-sj_-iJBO.js";import"./preload-helper-zFlo1Ag_.js";import"./Table-BL5ga0ku.js";import"./index-BWRu0lVk.js";import"./Dialog-Be9HqrM_.js";import"./cross-BA6yBz5j.js";import"./svgIconContainer-C7wsxhu-.js";import"./useBaseUiId-QnL0ah19.js";import"./InternalBackdrop-CQpmpxtx.js";import"./composite-ow-DJQ4K.js";import"./index-BVVmi8IY.js";import"./index-BJoSdgxJ.js";import"./index-Cmpp0QHi.js";import"./useEventCallback-D_jfiLDi.js";import"./SkeletonBar-BQO0I3KZ.js";import"./LoadingCell-DAN027-W.js";import"./ColumnConfigDialog-DEvO2VXc.js";import"./DraggableList-kylZrf2H.js";import"./search-BNuIHYDK.js";import"./Input-k1XluRBB.js";import"./useControlled-CEIiJDdv.js";import"./Button-DAGPL7mA.js";import"./small-cross-CoufPZre.js";import"./ActionButton-BAsQofvL.js";import"./Checkbox-D4dNDvZA.js";import"./useValueChanged-a2NTFDpp.js";import"./CollapsiblePanel-ouQWdY0B.js";import"./MultiColumnSortDialog-Cq5hMlx5.js";import"./MenuTrigger-BJ0rypDg.js";import"./CompositeItem-MWi5EakA.js";import"./ToolbarRootContext-DrlyoX7_.js";import"./getDisabledMountTransitionStyles-Cul5wQT3.js";import"./getPseudoElementBounds-fhRNsuua.js";import"./chevron-down-BQlmJQrq.js";import"./index-NRrcQACQ.js";import"./error-C6zcgIRz.js";import"./BaseCbacBanner-9vIl52yc.js";import"./makeExternalStore-B7_0KDnK.js";import"./Tooltip-CeExzR4W.js";import"./PopoverPopup-BwxLotjv.js";import"./debounce-peDMT9hw.js";import"./useOsdkClient-DI2ZXji8.js";import"./tick-KK5E1r3y.js";import"./DropdownField-Di-ezqK8.js";import"./isEqual-w7HhHM5e.js";import"./withOsdkMetrics-Lf7fiJQ5.js";const{expect:e,screen:t,userEvent:T,within:f}=__STORYBOOK_MODULE_TEST__,ue={...u,title:"Components/ObjectTable"},n={args:{objectType:c,columnDefinitions:l},parameters:{docs:{description:{story:"Minimal setup showing Employee data with default column definitions."},source:{code:"<ObjectTable objectType={Employee} />"}}},render:o=>i.jsx("div",{className:"object-table-container",style:{height:"600px"},children:i.jsx(p,{...o})}),play:async({canvasElement:o})=>{const a=f(o);await a.findByText(d),await y(a,"fullName"),await e(await t.findByRole("menuitem",{name:"Sort ascending"})).toBeInTheDocument(),await e(t.getByRole("menuitem",{name:"Sort descending"})).toBeInTheDocument(),await e(t.getByRole("menuitem",{name:"Pin column"})).toBeInTheDocument(),await e(t.getByRole("menuitem",{name:"Configure Columns"})).toBeInTheDocument(),await T.keyboard("{Escape}")}};var m,r,s;n.parameters={...n.parameters,docs:{...(m=n.parameters)==null?void 0:m.docs,source:{originalSource:`{
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
