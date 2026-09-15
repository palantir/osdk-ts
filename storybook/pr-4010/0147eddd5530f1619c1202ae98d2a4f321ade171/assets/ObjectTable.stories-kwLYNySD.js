import{j as i}from"./iframe-B2s0ilwM.js";import{O as p}from"./object-table-Df0SPqQE.js";import{E as c}from"./Employee-BAk2o20h.js";import{d as l,o as u,T as d,a as y}from"./objectTableStoryHelpers-D5Q6E_4C.js";import"./preload-helper-MMy8iX7M.js";import"./Table-C9FeGHfK.js";import"./index-DUMP_Qp6.js";import"./Dialog-CM61Fugd.js";import"./cross-DZSba9zk.js";import"./svgIconContainer-DRCF-NHW.js";import"./useBaseUiId-BVH4GIbN.js";import"./InternalBackdrop-B-Ja5_xj.js";import"./composite-DFa6zY9f.js";import"./index-mYTbhKt1.js";import"./index-DdqPMtaM.js";import"./index-D509LBW8.js";import"./useEventCallback-CUt-4jCY.js";import"./SkeletonBar-DIroCERZ.js";import"./LoadingCell-B_iM1kY5.js";import"./ColumnConfigDialog-CBcQ7LV-.js";import"./DraggableList-CEuKva_i.js";import"./search-De6MFVaz.js";import"./Input-CjCyxjsG.js";import"./useControlled-C3oDg3XB.js";import"./Button-Bnx37qOJ.js";import"./small-cross-DUrl-Gxm.js";import"./ActionButton-COeBFnf1.js";import"./Checkbox-ybshHhz7.js";import"./useValueChanged-B7ZJE4yn.js";import"./CollapsiblePanel-D6thvhNc.js";import"./MultiColumnSortDialog-D-ae3yca.js";import"./MenuTrigger-om7rzqwZ.js";import"./CompositeItem-DNqREtRU.js";import"./ToolbarRootContext-DDaNMj4N.js";import"./getDisabledMountTransitionStyles-Dmi_83d2.js";import"./getPseudoElementBounds-DXFFzy9T.js";import"./chevron-down-CW4_yRhZ.js";import"./index-ClsdzwAW.js";import"./error-DeXC2vVV.js";import"./BaseCbacBanner-DslKMIMd.js";import"./makeExternalStore-D_KS_COu.js";import"./Tooltip-CntzDWe4.js";import"./PopoverPopup-CCpYUP6e.js";import"./debounce-CmkkVxIz.js";import"./useOsdkClient-leyOYd9w.js";import"./tick-Bjc9CW2e.js";import"./DropdownField-95SM7q8x.js";import"./isEqual-B8qzt1pj.js";import"./withOsdkMetrics-B_SFwrj7.js";const{expect:e,screen:t,userEvent:T,within:f}=__STORYBOOK_MODULE_TEST__,ue={...u,title:"Components/ObjectTable"},n={args:{objectType:c,columnDefinitions:l},parameters:{docs:{description:{story:"Minimal setup showing Employee data with default column definitions."},source:{code:"<ObjectTable objectType={Employee} />"}}},render:o=>i.jsx("div",{className:"object-table-container",style:{height:"600px"},children:i.jsx(p,{...o})}),play:async({canvasElement:o})=>{const a=f(o);await a.findByText(d),await y(a,"fullName"),await e(await t.findByRole("menuitem",{name:"Sort ascending"})).toBeInTheDocument(),await e(t.getByRole("menuitem",{name:"Sort descending"})).toBeInTheDocument(),await e(t.getByRole("menuitem",{name:"Pin column"})).toBeInTheDocument(),await e(t.getByRole("menuitem",{name:"Configure Columns"})).toBeInTheDocument(),await T.keyboard("{Escape}")}};var m,r,s;n.parameters={...n.parameters,docs:{...(m=n.parameters)==null?void 0:m.docs,source:{originalSource:`{
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
