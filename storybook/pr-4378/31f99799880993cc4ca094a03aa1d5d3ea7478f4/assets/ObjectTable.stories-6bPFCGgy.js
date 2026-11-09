import{j as i}from"./iframe-C-VQV1kk.js";import{O as p}from"./object-table-CxH1WG92.js";import{E as c}from"./Employee-BAk2o20h.js";import{d as l,o as u,T as d,a as y}from"./objectTableStoryHelpers-CQ7-0c76.js";import"./preload-helper-DAFvkMcS.js";import"./Table-BxJIg6as.js";import"./index-Br3mcMRO.js";import"./Dialog-BcS09eX8.js";import"./cross-B26OHCdD.js";import"./svgIconContainer-CJnwzucZ.js";import"./useBaseUiId-CDIBpZbW.js";import"./InternalBackdrop-CrKl0Qys.js";import"./composite-GjU-j0CL.js";import"./index-BAOIGUAP.js";import"./index-DPEqsBnM.js";import"./index-C81NLsPb.js";import"./useEventCallback-CrzZq1A8.js";import"./SkeletonBar-BkJDoVVR.js";import"./LoadingCell-DidOQItD.js";import"./ColumnConfigDialog-DQEeQvz7.js";import"./DraggableList-qga-VF-f.js";import"./search-D0wtlqkl.js";import"./Input-C1vD7nT2.js";import"./useControlled-BadNojnw.js";import"./Button-BLvWajsq.js";import"./small-cross-DQKRtPL4.js";import"./ActionButton-BbdrlCMk.js";import"./Checkbox-1Rigo1b4.js";import"./useValueChanged-CTLWVytN.js";import"./CollapsiblePanel-DF08KEFn.js";import"./MultiColumnSortDialog-W8LwXs3d.js";import"./MenuTrigger-E2JdOber.js";import"./CompositeItem-CceR4qkm.js";import"./ToolbarRootContext-m881A_zR.js";import"./getDisabledMountTransitionStyles-lRegSDO5.js";import"./getPseudoElementBounds-CaioDmeF.js";import"./chevron-down-CPUFW1cF.js";import"./index-BFFBOJxl.js";import"./error-5dXKQyhU.js";import"./BaseCbacBanner-C1hA4dbq.js";import"./makeExternalStore-BIjV_Sjd.js";import"./Tooltip-yfSghmxo.js";import"./isObject-IGANmsxM.js";import"./debounce-BgKrWPP2.js";import"./useOsdkClient-fG21vCjJ.js";import"./tick-CGn7jNwS.js";import"./DropdownField-Gr8cO_hh.js";import"./isEqual-D3Uy-qVH.js";import"./_baseIsEqual-ApqE7jKt.js";import"./withOsdkMetrics-c7bdsNh3.js";const{expect:e,screen:t,userEvent:T,within:f}=__STORYBOOK_MODULE_TEST__,de={...u,title:"Components/ObjectTable"},n={args:{objectType:c,columnDefinitions:l},parameters:{docs:{description:{story:"Minimal setup showing Employee data with default column definitions."},source:{code:"<ObjectTable objectType={Employee} />"}}},render:o=>i.jsx("div",{className:"object-table-container",style:{height:"600px"},children:i.jsx(p,{...o})}),play:async({canvasElement:o})=>{const a=f(o);await a.findByText(d),await y(a,"fullName"),await e(await t.findByRole("menuitem",{name:"Sort ascending"})).toBeInTheDocument(),await e(t.getByRole("menuitem",{name:"Sort descending"})).toBeInTheDocument(),await e(t.getByRole("menuitem",{name:"Pin column"})).toBeInTheDocument(),await e(t.getByRole("menuitem",{name:"Configure Columns"})).toBeInTheDocument(),await T.keyboard("{Escape}")}};var m,r,s;n.parameters={...n.parameters,docs:{...(m=n.parameters)==null?void 0:m.docs,source:{originalSource:`{
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
}`,...(s=(r=n.parameters)==null?void 0:r.docs)==null?void 0:s.source}}};const ye=["Default"];export{n as Default,ye as __namedExportsOrder,de as default};
