import{j as i}from"./iframe-DBZ29Q89.js";import{O as p}from"./object-table-DFAMzKrH.js";import{E as c}from"./Employee-BAk2o20h.js";import{d as l,o as u,T as d,a as y}from"./objectTableStoryHelpers-DNJlhNHV.js";import"./preload-helper-Cu7dcQLx.js";import"./Table-BgsXMa7R.js";import"./index-DBtD-XxF.js";import"./Dialog-Dq9MvlvH.js";import"./cross-B-xCEuKH.js";import"./svgIconContainer-DNY9aQZJ.js";import"./useBaseUiId-RGrTJ31h.js";import"./InternalBackdrop-BHcPYEam.js";import"./composite-DRG53mMw.js";import"./index-Bo8FiFc5.js";import"./index-Bc39kNYP.js";import"./index-jB4e8NNE.js";import"./useEventCallback-Bph5gx73.js";import"./SkeletonBar-DCuWvPdX.js";import"./LoadingCell-DmomVXl7.js";import"./ColumnConfigDialog-DvnjzPVi.js";import"./DraggableList-CRrQ_cz3.js";import"./search-DFnGvI6Z.js";import"./Input-BW9ftY3W.js";import"./useControlled-CAV9tSJk.js";import"./Button-TF5qO5TO.js";import"./small-cross-DoWs3x27.js";import"./ActionButton-tF-VFP1u.js";import"./Checkbox-AhlW4bmz.js";import"./useValueChanged-g3rU1sEt.js";import"./CollapsiblePanel-BuR1KRlC.js";import"./MultiColumnSortDialog-B7k8x7Cw.js";import"./MenuTrigger-DMDl84wG.js";import"./CompositeItem-CnzplN5I.js";import"./ToolbarRootContext-BDMXA8FN.js";import"./getDisabledMountTransitionStyles-CJavuumC.js";import"./getPseudoElementBounds-CMANdjLh.js";import"./chevron-down-m8Go69fz.js";import"./index-D7JuEvow.js";import"./error-DYp6MgYM.js";import"./BaseCbacBanner-C8d8ZFfK.js";import"./makeExternalStore-Dhyr5JD9.js";import"./Tooltip-DIxNlKyb.js";import"./PopoverPopup-vY89NdJ2.js";import"./debounce-B-C3MBB0.js";import"./useOsdkClient-Cjx5o-tv.js";import"./tick-6gOcudBG.js";import"./DropdownField-ZZtn-RZ5.js";import"./isEqual-I0TXraMo.js";import"./withOsdkMetrics-DDr2NyM9.js";const{expect:e,screen:t,userEvent:T,within:f}=__STORYBOOK_MODULE_TEST__,ue={...u,title:"Components/ObjectTable"},n={args:{objectType:c,columnDefinitions:l},parameters:{docs:{description:{story:"Minimal setup showing Employee data with default column definitions."},source:{code:"<ObjectTable objectType={Employee} />"}}},render:o=>i.jsx("div",{className:"object-table-container",style:{height:"600px"},children:i.jsx(p,{...o})}),play:async({canvasElement:o})=>{const a=f(o);await a.findByText(d),await y(a,"fullName"),await e(await t.findByRole("menuitem",{name:"Sort ascending"})).toBeInTheDocument(),await e(t.getByRole("menuitem",{name:"Sort descending"})).toBeInTheDocument(),await e(t.getByRole("menuitem",{name:"Pin column"})).toBeInTheDocument(),await e(t.getByRole("menuitem",{name:"Configure Columns"})).toBeInTheDocument(),await T.keyboard("{Escape}")}};var m,r,s;n.parameters={...n.parameters,docs:{...(m=n.parameters)==null?void 0:m.docs,source:{originalSource:`{
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
