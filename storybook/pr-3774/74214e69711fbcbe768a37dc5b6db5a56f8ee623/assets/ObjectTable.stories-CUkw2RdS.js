import{j as i}from"./iframe-Bu7Ix1IE.js";import{O as p}from"./object-table-C2v13Dut.js";import{E as c}from"./Employee-BAk2o20h.js";import{d as l,o as u,T as d,a as y}from"./objectTableStoryHelpers-DbLnLWOB.js";import"./preload-helper-C_vXKrgq.js";import"./Table-CcR4BHeD.js";import"./index-CmoSOYw8.js";import"./Dialog-Dy0YakXX.js";import"./cross-DiEWLOow.js";import"./svgIconContainer-DDLtCJpL.js";import"./useBaseUiId-tZcBrbc_.js";import"./InternalBackdrop-D5mqE5uP.js";import"./composite-BYJH93ZN.js";import"./index-BsZCU_gd.js";import"./index-CnmTy_hK.js";import"./index-DQe5Ojpb.js";import"./useEventCallback-D_HhPe5k.js";import"./SkeletonBar-Bzadz-8K.js";import"./LoadingCell-B4MuRYNG.js";import"./ColumnConfigDialog-Ce7H_S2D.js";import"./DraggableList-wBDL6lMx.js";import"./search-DhFNg-wi.js";import"./Input-DLkChbeP.js";import"./useControlled-CGmTThd6.js";import"./isEqual-B0gVi_sG.js";import"./isObject-7o2nEXaI.js";import"./Button-B5h8R3TJ.js";import"./ActionButton-C8nAJG1U.js";import"./Checkbox-D_38qnSN.js";import"./useValueChanged-CNPgNlg_.js";import"./CollapsiblePanel-Bx_iS3iX.js";import"./MultiColumnSortDialog-B1SSBGHa.js";import"./MenuTrigger-BrJ6GrvV.js";import"./CompositeItem-DcF65dQq.js";import"./ToolbarRootContext-DN0znCaz.js";import"./getDisabledMountTransitionStyles-COhOTcSm.js";import"./getPseudoElementBounds-Bc5cMMf-.js";import"./chevron-down-RSnAhjTK.js";import"./index-Bw1Omk53.js";import"./error-Di4qsqoF.js";import"./BaseCbacBanner-DwgH9AvM.js";import"./makeExternalStore-sh41R9y9.js";import"./Tooltip-BqT0KNO0.js";import"./PopoverPopup-DOjZfFhK.js";import"./toNumber-Cjvgkh0x.js";import"./useOsdkClient-wINRGPqb.js";import"./tick-C7sDGere.js";import"./DropdownField-BryjSbxh.js";import"./withOsdkMetrics-BhBd8sSO.js";const{expect:e,screen:t,userEvent:T,within:f}=__STORYBOOK_MODULE_TEST__,ue={...u,title:"Components/ObjectTable"},n={args:{objectType:c,columnDefinitions:l},parameters:{docs:{description:{story:"Minimal setup showing Employee data with default column definitions."},source:{code:"<ObjectTable objectType={Employee} />"}}},render:o=>i.jsx("div",{className:"object-table-container",style:{height:"600px"},children:i.jsx(p,{...o})}),play:async({canvasElement:o})=>{const a=f(o);await a.findByText(d),await y(a,"fullName"),await e(await t.findByRole("menuitem",{name:"Sort ascending"})).toBeInTheDocument(),await e(t.getByRole("menuitem",{name:"Sort descending"})).toBeInTheDocument(),await e(t.getByRole("menuitem",{name:"Pin column"})).toBeInTheDocument(),await e(t.getByRole("menuitem",{name:"Configure Columns"})).toBeInTheDocument(),await T.keyboard("{Escape}")}};var m,r,s;n.parameters={...n.parameters,docs:{...(m=n.parameters)==null?void 0:m.docs,source:{originalSource:`{
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
