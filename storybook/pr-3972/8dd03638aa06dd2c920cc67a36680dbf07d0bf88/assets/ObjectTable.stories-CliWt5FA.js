import{j as i}from"./iframe-8UpnOuPx.js";import{O as p}from"./object-table-47NTCnrV.js";import{E as c}from"./Employee-BAk2o20h.js";import{d as l,o as u,T as d,a as y}from"./objectTableStoryHelpers-B3h9y1Sw.js";import"./preload-helper-D9D_7nkx.js";import"./Table-C-OX5Mmy.js";import"./index-De8YaqE2.js";import"./Dialog-C_aXCr_n.js";import"./cross-CNviQWqx.js";import"./svgIconContainer-Dv8gj-hz.js";import"./useBaseUiId-CBuqVLxg.js";import"./InternalBackdrop-Cv2tFHev.js";import"./composite-2992q4P-.js";import"./index-BjHFI_ak.js";import"./index-4j-jzydQ.js";import"./index-C0LjKbrF.js";import"./useEventCallback-DahdGvFR.js";import"./SkeletonBar-DGlriSfZ.js";import"./LoadingCell-COBeQmHE.js";import"./ColumnConfigDialog-Bd8DMLkI.js";import"./DraggableList-Da1_VcAA.js";import"./search-CGAlUSeA.js";import"./Input-Ce_IFTco.js";import"./useControlled-BGItKX1D.js";import"./Button-D9_pkmYb.js";import"./small-cross-QHw-SLde.js";import"./ActionButton-Cut8o54T.js";import"./Checkbox-DShr4uRv.js";import"./useValueChanged-BCpzUsKM.js";import"./CollapsiblePanel-DfoKT48S.js";import"./MultiColumnSortDialog-DywAATGA.js";import"./MenuTrigger-CR-NhJqN.js";import"./CompositeItem-Bt6ccxDB.js";import"./ToolbarRootContext-fX_rXRRK.js";import"./getDisabledMountTransitionStyles-C_DFfRTC.js";import"./getPseudoElementBounds-DzzTS3aG.js";import"./chevron-down-DYX07tej.js";import"./index-B_eZJaHx.js";import"./error-COIsH0tw.js";import"./BaseCbacBanner-nK67On6a.js";import"./makeExternalStore-CEpF0fDK.js";import"./Tooltip-H_PuzLmD.js";import"./PopoverPopup-CiQt-IJa.js";import"./debounce-CqOQQWws.js";import"./useOsdkClient-BPuOXI3X.js";import"./tick-CSfWbNPB.js";import"./DropdownField-BdD-65We.js";import"./isEqual-B0qlerf1.js";import"./withOsdkMetrics-Br_JaF2q.js";const{expect:e,screen:t,userEvent:T,within:f}=__STORYBOOK_MODULE_TEST__,ue={...u,title:"Components/ObjectTable"},n={args:{objectType:c,columnDefinitions:l},parameters:{docs:{description:{story:"Minimal setup showing Employee data with default column definitions."},source:{code:"<ObjectTable objectType={Employee} />"}}},render:o=>i.jsx("div",{className:"object-table-container",style:{height:"600px"},children:i.jsx(p,{...o})}),play:async({canvasElement:o})=>{const a=f(o);await a.findByText(d),await y(a,"fullName"),await e(await t.findByRole("menuitem",{name:"Sort ascending"})).toBeInTheDocument(),await e(t.getByRole("menuitem",{name:"Sort descending"})).toBeInTheDocument(),await e(t.getByRole("menuitem",{name:"Pin column"})).toBeInTheDocument(),await e(t.getByRole("menuitem",{name:"Configure Columns"})).toBeInTheDocument(),await T.keyboard("{Escape}")}};var m,r,s;n.parameters={...n.parameters,docs:{...(m=n.parameters)==null?void 0:m.docs,source:{originalSource:`{
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
