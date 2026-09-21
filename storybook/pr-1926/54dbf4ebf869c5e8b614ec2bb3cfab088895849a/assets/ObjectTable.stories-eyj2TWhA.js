import{j as i}from"./iframe-BwOWKgX_.js";import{O as p}from"./object-table-BDiSc7pz.js";import{E as c}from"./Employee-BAk2o20h.js";import{d as l,o as u,T as d,a as y}from"./objectTableStoryHelpers-CixePRd3.js";import"./preload-helper-CPR62PUH.js";import"./Table-B2T1TGhc.js";import"./index-Cy1m0zFQ.js";import"./Dialog-COivJ3cu.js";import"./cross-CCQqgwU7.js";import"./svgIconContainer-BN-frImW.js";import"./useBaseUiId-CC40NyPk.js";import"./InternalBackdrop-B9JpRZ3R.js";import"./composite-5HVBLMjf.js";import"./index-QbVRyvTG.js";import"./index-Br-OMOFz.js";import"./index-BVlZlI2O.js";import"./useEventCallback-DrINjghl.js";import"./SkeletonBar-Dc2AA-f6.js";import"./LoadingCell-BO8avGLS.js";import"./ColumnConfigDialog-CNw5FP0h.js";import"./DraggableList-D9a5axqX.js";import"./search-veFLhVSL.js";import"./Input-C4nObfin.js";import"./useControlled-DtkYswSw.js";import"./Button-DB73z_31.js";import"./small-cross-BlP1jvir.js";import"./ActionButton-DkAR9cLt.js";import"./Checkbox-CKZq5Fzs.js";import"./useValueChanged-C1Mc10OI.js";import"./CollapsiblePanel-BudykPig.js";import"./MultiColumnSortDialog-C47aFgL8.js";import"./MenuTrigger-CvVag832.js";import"./CompositeItem-yrOlfAbz.js";import"./ToolbarRootContext-NPZeJvMR.js";import"./getDisabledMountTransitionStyles-B_SgiG18.js";import"./getPseudoElementBounds-Bb0h12GR.js";import"./chevron-down-C0sr0dH5.js";import"./index-M1eOB7Dy.js";import"./error-CH6xRFVZ.js";import"./BaseCbacBanner-Df1nef6R.js";import"./makeExternalStore-CfZpatI5.js";import"./Tooltip-BE9jXJb8.js";import"./PopoverPopup-BaDiWd_V.js";import"./debounce-CszU7kTQ.js";import"./useOsdkClient-C11OYUU2.js";import"./tick-CkNrFL8X.js";import"./DropdownField-_qdVV4Xj.js";import"./isEqual-BAAFAqmK.js";import"./withOsdkMetrics-B3eY7UZj.js";const{expect:e,screen:t,userEvent:T,within:f}=__STORYBOOK_MODULE_TEST__,ue={...u,title:"Components/ObjectTable"},n={args:{objectType:c,columnDefinitions:l},parameters:{docs:{description:{story:"Minimal setup showing Employee data with default column definitions."},source:{code:"<ObjectTable objectType={Employee} />"}}},render:o=>i.jsx("div",{className:"object-table-container",style:{height:"600px"},children:i.jsx(p,{...o})}),play:async({canvasElement:o})=>{const a=f(o);await a.findByText(d),await y(a,"fullName"),await e(await t.findByRole("menuitem",{name:"Sort ascending"})).toBeInTheDocument(),await e(t.getByRole("menuitem",{name:"Sort descending"})).toBeInTheDocument(),await e(t.getByRole("menuitem",{name:"Pin column"})).toBeInTheDocument(),await e(t.getByRole("menuitem",{name:"Configure Columns"})).toBeInTheDocument(),await T.keyboard("{Escape}")}};var m,r,s;n.parameters={...n.parameters,docs:{...(m=n.parameters)==null?void 0:m.docs,source:{originalSource:`{
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
