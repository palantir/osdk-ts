import{j as i}from"./iframe-I-ljmhXo.js";import{O as p}from"./object-table-Duv57V1_.js";import{E as c}from"./Employee-BAk2o20h.js";import{d as l,o as u,T as d,a as y}from"./objectTableStoryHelpers-DfiMDaTb.js";import"./preload-helper-M9MPg2Uh.js";import"./Table-DiEd8xlb.js";import"./index-DHgdi-G8.js";import"./Dialog-Dqa_EKtc.js";import"./cross--08b2Esz.js";import"./svgIconContainer-DTF9Rr_D.js";import"./useBaseUiId-63vNftzH.js";import"./InternalBackdrop-iSyfVaW5.js";import"./composite-BpdBkPyX.js";import"./index-B-RGy6eE.js";import"./index-wV7cEBRP.js";import"./index-CExgYXR8.js";import"./useEventCallback-CKHe2jbt.js";import"./SkeletonBar-Cd4HXeaq.js";import"./LoadingCell-kmBO5qb_.js";import"./ColumnConfigDialog-BJn4CDvF.js";import"./DraggableList-Uy7OWW_r.js";import"./search-Xmbyz7ae.js";import"./Input-DgDEYrB1.js";import"./useControlled-D9MNKFMV.js";import"./Button-BPW8BJKe.js";import"./small-cross-DnRErzPc.js";import"./ActionButton-D7dlIpjS.js";import"./Checkbox-BH5TPj1T.js";import"./useValueChanged-DggnfScN.js";import"./CollapsiblePanel-Bab9PcCA.js";import"./MultiColumnSortDialog-Dqa5-Agb.js";import"./MenuTrigger-BfcfRgsA.js";import"./CompositeItem-BNvc3zNV.js";import"./ToolbarRootContext-Bgx3Oosy.js";import"./getDisabledMountTransitionStyles-qCmZAHN-.js";import"./getPseudoElementBounds-BwyOt2xx.js";import"./chevron-down-C0rEk766.js";import"./index-BuOpPpDi.js";import"./error-Dy0kv_06.js";import"./BaseCbacBanner-DpVqHL5O.js";import"./makeExternalStore-BsQQuJAQ.js";import"./Tooltip-BCS8vY1S.js";import"./PopoverPopup-DL3StlvX.js";import"./debounce-4Bi6pw_i.js";import"./useOsdkClient-jS_u-k2J.js";import"./tick-V_8cWmaE.js";import"./DropdownField-ptXdktt_.js";import"./isEqual-Cnysuxje.js";import"./withOsdkMetrics-COEHBIiY.js";const{expect:e,screen:t,userEvent:T,within:f}=__STORYBOOK_MODULE_TEST__,ue={...u,title:"Components/ObjectTable"},n={args:{objectType:c,columnDefinitions:l},parameters:{docs:{description:{story:"Minimal setup showing Employee data with default column definitions."},source:{code:"<ObjectTable objectType={Employee} />"}}},render:o=>i.jsx("div",{className:"object-table-container",style:{height:"600px"},children:i.jsx(p,{...o})}),play:async({canvasElement:o})=>{const a=f(o);await a.findByText(d),await y(a,"fullName"),await e(await t.findByRole("menuitem",{name:"Sort ascending"})).toBeInTheDocument(),await e(t.getByRole("menuitem",{name:"Sort descending"})).toBeInTheDocument(),await e(t.getByRole("menuitem",{name:"Pin column"})).toBeInTheDocument(),await e(t.getByRole("menuitem",{name:"Configure Columns"})).toBeInTheDocument(),await T.keyboard("{Escape}")}};var m,r,s;n.parameters={...n.parameters,docs:{...(m=n.parameters)==null?void 0:m.docs,source:{originalSource:`{
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
