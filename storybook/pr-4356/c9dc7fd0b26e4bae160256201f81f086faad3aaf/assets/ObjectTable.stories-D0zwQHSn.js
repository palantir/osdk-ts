import{j as i}from"./iframe-V97s0gAW.js";import{O as p}from"./object-table-BhMqDpxN.js";import{E as c}from"./Employee-BAk2o20h.js";import{d as l,o as u,T as d,a as y}from"./objectTableStoryHelpers-D-IcPIpy.js";import"./preload-helper-3HSTeFHP.js";import"./Table-CP1pcPri.js";import"./index-DpgCkzdC.js";import"./Dialog-DDTOxf51.js";import"./cross-D1lQCJW7.js";import"./svgIconContainer-DcsfwCI6.js";import"./useBaseUiId-Bab3TUT0.js";import"./InternalBackdrop-DON14_Jh.js";import"./composite-CbcGiMzv.js";import"./index-mHMhPLDN.js";import"./index-D4Dl5EM_.js";import"./index-DiDYqxft.js";import"./useEventCallback-CdaXvWI6.js";import"./SkeletonBar-BJfs4zM-.js";import"./LoadingCell-DGMorCmc.js";import"./ColumnConfigDialog-CK7aMFL8.js";import"./DraggableList-DWoD67oE.js";import"./search-B7TbVw6W.js";import"./Input-C6RT56dE.js";import"./useControlled-CturneKY.js";import"./Button-BO5_Znwd.js";import"./small-cross-xW5wyF61.js";import"./ActionButton-B4eNZhjq.js";import"./Checkbox-DTzO9krD.js";import"./useValueChanged-7VQbrE2E.js";import"./CollapsiblePanel-DzQCvcLA.js";import"./MultiColumnSortDialog-5NywVi3s.js";import"./MenuTrigger-COgQ6_1D.js";import"./CompositeItem-Dp8TKMUS.js";import"./ToolbarRootContext-Cm4dkNA7.js";import"./getDisabledMountTransitionStyles-C0GpbwGk.js";import"./getPseudoElementBounds-BZTN0a4u.js";import"./chevron-down-D6e3j0_s.js";import"./index-DF7F2J8l.js";import"./error-3rN_CcIw.js";import"./BaseCbacBanner-JWXSeG4M.js";import"./makeExternalStore-CCWCHpFp.js";import"./Tooltip-pzXiOa2u.js";import"./PopoverPopup-DT3NfX8h.js";import"./debounce-BepasE64.js";import"./useOsdkClient-8pQnCGJ8.js";import"./tick-DuScy4TP.js";import"./DropdownField-Beas9bGg.js";import"./isEqual-Bi3Ylt0j.js";import"./withOsdkMetrics-OMK47pZ9.js";const{expect:e,screen:t,userEvent:T,within:f}=__STORYBOOK_MODULE_TEST__,ue={...u,title:"Components/ObjectTable"},n={args:{objectType:c,columnDefinitions:l},parameters:{docs:{description:{story:"Minimal setup showing Employee data with default column definitions."},source:{code:"<ObjectTable objectType={Employee} />"}}},render:o=>i.jsx("div",{className:"object-table-container",style:{height:"600px"},children:i.jsx(p,{...o})}),play:async({canvasElement:o})=>{const a=f(o);await a.findByText(d),await y(a,"fullName"),await e(await t.findByRole("menuitem",{name:"Sort ascending"})).toBeInTheDocument(),await e(t.getByRole("menuitem",{name:"Sort descending"})).toBeInTheDocument(),await e(t.getByRole("menuitem",{name:"Pin column"})).toBeInTheDocument(),await e(t.getByRole("menuitem",{name:"Configure Columns"})).toBeInTheDocument(),await T.keyboard("{Escape}")}};var m,r,s;n.parameters={...n.parameters,docs:{...(m=n.parameters)==null?void 0:m.docs,source:{originalSource:`{
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
