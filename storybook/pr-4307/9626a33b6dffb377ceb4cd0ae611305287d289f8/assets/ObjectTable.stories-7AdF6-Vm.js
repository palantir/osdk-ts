import{j as i}from"./iframe-p7D6sarL.js";import{O as p}from"./object-table-d7k0MilF.js";import{E as c}from"./Employee-BAk2o20h.js";import{d as l,o as u,T as d,a as y}from"./objectTableStoryHelpers-DwrIRfZk.js";import"./preload-helper-fTfJHf6r.js";import"./Table-D2RCLefX.js";import"./index-BdE6iQIl.js";import"./Dialog-DH2LknnD.js";import"./cross-BIlvkmku.js";import"./svgIconContainer-4FKWJ0K3.js";import"./useBaseUiId-Dpj_J2PZ.js";import"./InternalBackdrop-CUea6RLj.js";import"./composite-C6-iGtUX.js";import"./index-nQDHUjnH.js";import"./index-CZrsf4r_.js";import"./index-BVmNSvna.js";import"./useEventCallback-TGDvplRl.js";import"./SkeletonBar-tX2D-Wzp.js";import"./LoadingCell-DMgLGSWB.js";import"./ColumnConfigDialog-D83GblJe.js";import"./DraggableList-CkIJ9B56.js";import"./search-0vpab4Qy.js";import"./Input-LdPdzdTD.js";import"./useControlled-D8RNaOKh.js";import"./Button-DTuYEipm.js";import"./small-cross-kvaYMftR.js";import"./ActionButton-bSAEuYzP.js";import"./Checkbox-d2mlHgHd.js";import"./useValueChanged-RektJa3Q.js";import"./CollapsiblePanel-BrMihlLp.js";import"./MultiColumnSortDialog-YKsbHBrQ.js";import"./MenuTrigger-BYCOUBBT.js";import"./CompositeItem-DPnrDtg_.js";import"./ToolbarRootContext-DHC1R4PN.js";import"./getDisabledMountTransitionStyles-BFunDdeZ.js";import"./getPseudoElementBounds-DnyF4quT.js";import"./chevron-down-CW12YW7p.js";import"./index-DrFK8Y9T.js";import"./error-orkHl4EN.js";import"./BaseCbacBanner-CClRbfi-.js";import"./makeExternalStore-DDdf7AUk.js";import"./Tooltip-B-bvds49.js";import"./PopoverPopup-yOM8q7VT.js";import"./debounce-BTn7u_ux.js";import"./useOsdkClient-C4rR5Xc2.js";import"./tick--ApORUGf.js";import"./DropdownField-BbI_YIBj.js";import"./isEqual-BmyB5nx7.js";import"./withOsdkMetrics-DMV3eX8V.js";const{expect:e,screen:t,userEvent:T,within:f}=__STORYBOOK_MODULE_TEST__,ue={...u,title:"Components/ObjectTable"},n={args:{objectType:c,columnDefinitions:l},parameters:{docs:{description:{story:"Minimal setup showing Employee data with default column definitions."},source:{code:"<ObjectTable objectType={Employee} />"}}},render:o=>i.jsx("div",{className:"object-table-container",style:{height:"600px"},children:i.jsx(p,{...o})}),play:async({canvasElement:o})=>{const a=f(o);await a.findByText(d),await y(a,"fullName"),await e(await t.findByRole("menuitem",{name:"Sort ascending"})).toBeInTheDocument(),await e(t.getByRole("menuitem",{name:"Sort descending"})).toBeInTheDocument(),await e(t.getByRole("menuitem",{name:"Pin column"})).toBeInTheDocument(),await e(t.getByRole("menuitem",{name:"Configure Columns"})).toBeInTheDocument(),await T.keyboard("{Escape}")}};var m,r,s;n.parameters={...n.parameters,docs:{...(m=n.parameters)==null?void 0:m.docs,source:{originalSource:`{
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
