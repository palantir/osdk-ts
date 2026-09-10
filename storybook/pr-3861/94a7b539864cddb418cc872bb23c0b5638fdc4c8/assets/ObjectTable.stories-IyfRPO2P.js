import{j as i}from"./iframe-B9pmQzab.js";import{O as p}from"./object-table-DIS3LJrH.js";import{E as c}from"./Employee-BAk2o20h.js";import{d as l,o as u,T as d,a as y}from"./objectTableStoryHelpers-CCte8kHW.js";import"./preload-helper-8ApCze4z.js";import"./Table-9aII9MtG.js";import"./index-DJNcHwm8.js";import"./Dialog-Dhzuo-IK.js";import"./cross-8efItR-s.js";import"./svgIconContainer-CO7Z6-JZ.js";import"./useBaseUiId-CeFMmA-9.js";import"./InternalBackdrop-fe3G5tCE.js";import"./composite-C0QPd-_Y.js";import"./index-D1sJuveY.js";import"./index-C-ZM_VQS.js";import"./index-k2Kxocqf.js";import"./useEventCallback-Bzn1utS3.js";import"./SkeletonBar-rBovvZK_.js";import"./LoadingCell-BEdESDPv.js";import"./ColumnConfigDialog-DgmR5P5Z.js";import"./DraggableList-BjUMaye3.js";import"./search-DgrCLXVb.js";import"./Input-DpZPwerh.js";import"./useControlled-BWGqCRkH.js";import"./Button-Bv8-UnbE.js";import"./small-cross-CUlfqa1g.js";import"./ActionButton-BO9z-bgj.js";import"./Checkbox-BxlirDMV.js";import"./useValueChanged-Ed0oXYeG.js";import"./CollapsiblePanel-C6vhybKT.js";import"./MultiColumnSortDialog-fPXk4AO5.js";import"./MenuTrigger-C2qx_8CR.js";import"./CompositeItem-CxryFH5r.js";import"./ToolbarRootContext-ByReu0dc.js";import"./getDisabledMountTransitionStyles-GXQzPAtX.js";import"./getPseudoElementBounds-D3T2cPr4.js";import"./chevron-down-CZhOdlZa.js";import"./index-C31EnYzg.js";import"./error-RG5ruaVA.js";import"./BaseCbacBanner-B-KBfOAr.js";import"./makeExternalStore-BiGH-jDa.js";import"./Tooltip-K8ZFMTxf.js";import"./PopoverPopup-ISDHMIyJ.js";import"./debounce-IZroTv95.js";import"./useOsdkClient-DbItwRGL.js";import"./tick-CElM4Hds.js";import"./DropdownField-BCe2-iEP.js";import"./isEqual-B8Ml-uEA.js";import"./withOsdkMetrics-6gbwRZ-B.js";const{expect:e,screen:t,userEvent:T,within:f}=__STORYBOOK_MODULE_TEST__,ue={...u,title:"Components/ObjectTable"},n={args:{objectType:c,columnDefinitions:l},parameters:{docs:{description:{story:"Minimal setup showing Employee data with default column definitions."},source:{code:"<ObjectTable objectType={Employee} />"}}},render:o=>i.jsx("div",{className:"object-table-container",style:{height:"600px"},children:i.jsx(p,{...o})}),play:async({canvasElement:o})=>{const a=f(o);await a.findByText(d),await y(a,"fullName"),await e(await t.findByRole("menuitem",{name:"Sort ascending"})).toBeInTheDocument(),await e(t.getByRole("menuitem",{name:"Sort descending"})).toBeInTheDocument(),await e(t.getByRole("menuitem",{name:"Pin column"})).toBeInTheDocument(),await e(t.getByRole("menuitem",{name:"Configure Columns"})).toBeInTheDocument(),await T.keyboard("{Escape}")}};var m,r,s;n.parameters={...n.parameters,docs:{...(m=n.parameters)==null?void 0:m.docs,source:{originalSource:`{
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
