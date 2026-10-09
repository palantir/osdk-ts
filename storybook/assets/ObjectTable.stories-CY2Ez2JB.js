import{j as i}from"./iframe-C6yB_OA9.js";import{O as p}from"./object-table-HDfg_TTy.js";import{E as c}from"./Employee-BAk2o20h.js";import{d as l,o as u,T as d,a as y}from"./objectTableStoryHelpers-Ct46Ulsa.js";import"./preload-helper-Dp1pzeXC.js";import"./Table-DRadfxZ3.js";import"./index-CYHovncI.js";import"./Dialog-B5ccMndt.js";import"./cross-CGEn_f8Q.js";import"./svgIconContainer-BHMXavE6.js";import"./useBaseUiId-rM_6hxp0.js";import"./InternalBackdrop-DtqyQDxL.js";import"./composite-pSUWUpBY.js";import"./index-CrGhjRoP.js";import"./index-CtIX1NAw.js";import"./index-BGZVb3vI.js";import"./useEventCallback-CB_wvjSH.js";import"./SkeletonBar-Crhiib3I.js";import"./LoadingCell-Dk7N-9vZ.js";import"./ColumnConfigDialog-2YulSkYL.js";import"./DraggableList-DR3zC2Zl.js";import"./search-Cs6gheVK.js";import"./Input-Cq3PGtjU.js";import"./useControlled-De9a2DUs.js";import"./Button-fD8qjLcS.js";import"./small-cross-BeJfHwu2.js";import"./ActionButton-Otj0HFao.js";import"./Checkbox-CtY2PwDF.js";import"./useValueChanged-DgXpI1nC.js";import"./CollapsiblePanel-Dq0dYvbH.js";import"./MultiColumnSortDialog-CWpcjsI4.js";import"./MenuTrigger-d7Oq0h18.js";import"./CompositeItem-BhFX388v.js";import"./ToolbarRootContext-l_NHV493.js";import"./getDisabledMountTransitionStyles-CjvM7Kt-.js";import"./getPseudoElementBounds-BxFMQaGu.js";import"./chevron-down-DYrrqtdW.js";import"./index-BjeOkhvx.js";import"./error-DvPL7YDk.js";import"./BaseCbacBanner-CiOoS4JT.js";import"./makeExternalStore-BcRZCs8p.js";import"./Tooltip-BZBvUMD1.js";import"./PopoverPopup-78FD9gys.js";import"./debounce-B5XLReag.js";import"./useOsdkClient-CUdML_iS.js";import"./tick-DGvKhXVA.js";import"./DropdownField-3xa1gpQG.js";import"./isEqual-fJtbK8b1.js";import"./withOsdkMetrics-CC4rYMg2.js";const{expect:e,screen:t,userEvent:T,within:f}=__STORYBOOK_MODULE_TEST__,ue={...u,title:"Components/ObjectTable"},n={args:{objectType:c,columnDefinitions:l},parameters:{docs:{description:{story:"Minimal setup showing Employee data with default column definitions."},source:{code:"<ObjectTable objectType={Employee} />"}}},render:o=>i.jsx("div",{className:"object-table-container",style:{height:"600px"},children:i.jsx(p,{...o})}),play:async({canvasElement:o})=>{const a=f(o);await a.findByText(d),await y(a,"fullName"),await e(await t.findByRole("menuitem",{name:"Sort ascending"})).toBeInTheDocument(),await e(t.getByRole("menuitem",{name:"Sort descending"})).toBeInTheDocument(),await e(t.getByRole("menuitem",{name:"Pin column"})).toBeInTheDocument(),await e(t.getByRole("menuitem",{name:"Configure Columns"})).toBeInTheDocument(),await T.keyboard("{Escape}")}};var m,r,s;n.parameters={...n.parameters,docs:{...(m=n.parameters)==null?void 0:m.docs,source:{originalSource:`{
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
