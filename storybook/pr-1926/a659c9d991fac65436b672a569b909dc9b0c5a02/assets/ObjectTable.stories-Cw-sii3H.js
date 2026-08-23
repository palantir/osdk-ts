import{j as i}from"./iframe-Dyt2g367.js";import{O as p}from"./object-table-BGrb6iBk.js";import{E as c}from"./Employee-BAk2o20h.js";import{d as l,o as u,T as d,a as y}from"./objectTableStoryHelpers-HfbS-UsV.js";import"./preload-helper-Iy-_aWsL.js";import"./Table-Dbyfkzfz.js";import"./index-CVbuIiNF.js";import"./Dialog-Dd_kDCnz.js";import"./cross-BGMDayEl.js";import"./svgIconContainer-CQnuEYht.js";import"./useBaseUiId-CNdrP4cM.js";import"./InternalBackdrop-D_O2FDbV.js";import"./composite-CioN3i6x.js";import"./index-C3uS1quW.js";import"./index-DX_nn_2Y.js";import"./index-CQBiAgvJ.js";import"./useEventCallback-B4DeWEdX.js";import"./SkeletonBar-COKv4C1t.js";import"./LoadingCell-D4jVSLP5.js";import"./ColumnConfigDialog-DPusEu3Q.js";import"./DraggableList-CDKAtbXG.js";import"./search-Dlesc_Bn.js";import"./Input-EjY_nd8e.js";import"./useControlled-B5GqLh5A.js";import"./Button-RkRB1WVt.js";import"./small-cross-F18Oi3GF.js";import"./ActionButton-B8gmucK7.js";import"./Checkbox-BEe2g6L-.js";import"./useValueChanged-CTa1gX9Z.js";import"./CollapsiblePanel-D1P_utse.js";import"./MultiColumnSortDialog-C1sdqr4R.js";import"./MenuTrigger-vstZFNDR.js";import"./CompositeItem-GHEjzrAu.js";import"./ToolbarRootContext-DbHSAu67.js";import"./getDisabledMountTransitionStyles-BFGyiY2l.js";import"./getPseudoElementBounds-B26mWoJW.js";import"./chevron-down-CoqmzOf8.js";import"./index-FIX-qPnt.js";import"./error-CoUpGJie.js";import"./BaseCbacBanner-EauHrW6a.js";import"./makeExternalStore-CoWyK-bl.js";import"./Tooltip-BqdBfPty.js";import"./PopoverPopup-DTLPFEsG.js";import"./debounce-CcTcFdOE.js";import"./useOsdkClient-BnH7y6EI.js";import"./tick-_Azp_NBs.js";import"./DropdownField-CGjuW6yJ.js";import"./isEqual-qXkbevHO.js";import"./withOsdkMetrics-C7K3xDQn.js";const{expect:e,screen:t,userEvent:T,within:f}=__STORYBOOK_MODULE_TEST__,ue={...u,title:"Components/ObjectTable"},n={args:{objectType:c,columnDefinitions:l},parameters:{docs:{description:{story:"Minimal setup showing Employee data with default column definitions."},source:{code:"<ObjectTable objectType={Employee} />"}}},render:o=>i.jsx("div",{className:"object-table-container",style:{height:"600px"},children:i.jsx(p,{...o})}),play:async({canvasElement:o})=>{const a=f(o);await a.findByText(d),await y(a,"fullName"),await e(await t.findByRole("menuitem",{name:"Sort ascending"})).toBeInTheDocument(),await e(t.getByRole("menuitem",{name:"Sort descending"})).toBeInTheDocument(),await e(t.getByRole("menuitem",{name:"Pin column"})).toBeInTheDocument(),await e(t.getByRole("menuitem",{name:"Configure Columns"})).toBeInTheDocument(),await T.keyboard("{Escape}")}};var m,r,s;n.parameters={...n.parameters,docs:{...(m=n.parameters)==null?void 0:m.docs,source:{originalSource:`{
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
