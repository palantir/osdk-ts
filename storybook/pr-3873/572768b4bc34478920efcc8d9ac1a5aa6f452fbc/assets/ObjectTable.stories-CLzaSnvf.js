import{j as i}from"./iframe-HyESsXeQ.js";import{O as p}from"./object-table-C_2IRHjO.js";import{E as c}from"./Employee-BAk2o20h.js";import{d as l,o as u,T as d,a as y}from"./objectTableStoryHelpers-D5FAvWby.js";import"./preload-helper-Bvz1Iq1b.js";import"./Table-B5sCsjcq.js";import"./index-D0OJ8Trr.js";import"./Dialog-BnKetcOK.js";import"./cross-B4WufoMD.js";import"./svgIconContainer-DoHo3GVe.js";import"./useBaseUiId-DuHypDOw.js";import"./InternalBackdrop-mPo2uYhF.js";import"./composite-DiTBIa1i.js";import"./index-DXkwEgFU.js";import"./index-CgvnsYQE.js";import"./index-Jtuu1nd4.js";import"./useEventCallback-CpzBjTdD.js";import"./SkeletonBar-D7haS-rI.js";import"./LoadingCell-BIZGKlzI.js";import"./ColumnConfigDialog-B6jiXZos.js";import"./DraggableList-lF8OD8ZD.js";import"./search-DCrGY9GL.js";import"./Input-DQmQ9_F8.js";import"./useControlled-BBW-00hW.js";import"./Button-SWnrLxVW.js";import"./small-cross-uXn_FUQJ.js";import"./ActionButton-BrQP3ZP9.js";import"./Checkbox-BBqmSbAH.js";import"./useValueChanged-BixCKPVH.js";import"./CollapsiblePanel-BjtNNYnJ.js";import"./MultiColumnSortDialog-DxInobGo.js";import"./MenuTrigger-B15PhrDH.js";import"./CompositeItem-CPmZ1gPE.js";import"./ToolbarRootContext-ChUkw_F5.js";import"./getDisabledMountTransitionStyles-I2TA2O86.js";import"./getPseudoElementBounds-nn2N1l7W.js";import"./chevron-down-BVfSkRRX.js";import"./index-CjUqhSJN.js";import"./error-Bf7Spqax.js";import"./BaseCbacBanner-COq9_cWc.js";import"./makeExternalStore-CrwMIP9a.js";import"./Tooltip-v_s4JNMl.js";import"./PopoverPopup-Kd6rHNBJ.js";import"./debounce-B8bbiEYQ.js";import"./useOsdkClient-Bnl5eD_v.js";import"./tick-CTdD_I8M.js";import"./DropdownField-DoZDhwJN.js";import"./isEqual-BJSWHtb1.js";import"./withOsdkMetrics-X96S_7mx.js";const{expect:e,screen:t,userEvent:T,within:f}=__STORYBOOK_MODULE_TEST__,ue={...u,title:"Components/ObjectTable"},n={args:{objectType:c,columnDefinitions:l},parameters:{docs:{description:{story:"Minimal setup showing Employee data with default column definitions."},source:{code:"<ObjectTable objectType={Employee} />"}}},render:o=>i.jsx("div",{className:"object-table-container",style:{height:"600px"},children:i.jsx(p,{...o})}),play:async({canvasElement:o})=>{const a=f(o);await a.findByText(d),await y(a,"fullName"),await e(await t.findByRole("menuitem",{name:"Sort ascending"})).toBeInTheDocument(),await e(t.getByRole("menuitem",{name:"Sort descending"})).toBeInTheDocument(),await e(t.getByRole("menuitem",{name:"Pin column"})).toBeInTheDocument(),await e(t.getByRole("menuitem",{name:"Configure Columns"})).toBeInTheDocument(),await T.keyboard("{Escape}")}};var m,r,s;n.parameters={...n.parameters,docs:{...(m=n.parameters)==null?void 0:m.docs,source:{originalSource:`{
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
