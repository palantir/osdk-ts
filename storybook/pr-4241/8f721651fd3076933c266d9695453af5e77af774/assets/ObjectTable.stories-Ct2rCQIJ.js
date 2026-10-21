import{j as i}from"./iframe-Czm_u8Ar.js";import{O as p}from"./object-table-oAmlQ3St.js";import{E as c}from"./Employee-BAk2o20h.js";import{d as l,o as u,T as d,a as y}from"./objectTableStoryHelpers-CAMoSi5b.js";import"./preload-helper-BuAj_jN-.js";import"./Table-TR_5CIzU.js";import"./index-XKqF3n2I.js";import"./Dialog-BVdf1Plj.js";import"./cross-BlHijBJ4.js";import"./svgIconContainer-CgTn6RWL.js";import"./useBaseUiId-Me4okoRq.js";import"./InternalBackdrop-CSYiZwEF.js";import"./composite-C_KD_tny.js";import"./index-C3TofrwO.js";import"./index-D17LzocE.js";import"./index-DqRB57_4.js";import"./useEventCallback-CQUNaXho.js";import"./SkeletonBar-BvQmf4En.js";import"./LoadingCell-C-tmWlRS.js";import"./ColumnConfigDialog-BTFK5Wnj.js";import"./DraggableList-QZUMC6gD.js";import"./search-DY6wtpjt.js";import"./Input-C4CruWhv.js";import"./useControlled-Bgi6lmRr.js";import"./Button-DycfsGl1.js";import"./small-cross-CFLQZxWq.js";import"./ActionButton-CUg5ARhM.js";import"./Checkbox-BL2kZSvF.js";import"./useValueChanged-BSuWxBvq.js";import"./CollapsiblePanel-B3l-zgfo.js";import"./MultiColumnSortDialog-BpZ3Sg6L.js";import"./MenuTrigger-kXC2WmKi.js";import"./CompositeItem-y1T0uWu2.js";import"./ToolbarRootContext-CxE6VRH9.js";import"./getDisabledMountTransitionStyles-De4xDMuu.js";import"./getPseudoElementBounds-DfVhyAPU.js";import"./chevron-down-CPUKsW46.js";import"./index-C7-NS5HO.js";import"./error-DU7bFYdf.js";import"./BaseCbacBanner-DU_0BRZz.js";import"./makeExternalStore-DKjvIENS.js";import"./Tooltip-BhsvKrtc.js";import"./PopoverPopup-DGUEg27x.js";import"./debounce-D6HpQvGw.js";import"./useOsdkClient-D-g2OSKy.js";import"./tick-Dq-bnKtS.js";import"./DropdownField-ByNhlw8y.js";import"./isEqual-CtWSL3Nd.js";import"./withOsdkMetrics-BQzxgqT1.js";const{expect:e,screen:t,userEvent:T,within:f}=__STORYBOOK_MODULE_TEST__,ue={...u,title:"Components/ObjectTable"},n={args:{objectType:c,columnDefinitions:l},parameters:{docs:{description:{story:"Minimal setup showing Employee data with default column definitions."},source:{code:"<ObjectTable objectType={Employee} />"}}},render:o=>i.jsx("div",{className:"object-table-container",style:{height:"600px"},children:i.jsx(p,{...o})}),play:async({canvasElement:o})=>{const a=f(o);await a.findByText(d),await y(a,"fullName"),await e(await t.findByRole("menuitem",{name:"Sort ascending"})).toBeInTheDocument(),await e(t.getByRole("menuitem",{name:"Sort descending"})).toBeInTheDocument(),await e(t.getByRole("menuitem",{name:"Pin column"})).toBeInTheDocument(),await e(t.getByRole("menuitem",{name:"Configure Columns"})).toBeInTheDocument(),await T.keyboard("{Escape}")}};var m,r,s;n.parameters={...n.parameters,docs:{...(m=n.parameters)==null?void 0:m.docs,source:{originalSource:`{
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
