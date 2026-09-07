import{j as i}from"./iframe-DV_zKu2G.js";import{O as p}from"./object-table-By2q7_ys.js";import{E as c}from"./Employee-BAk2o20h.js";import{d as l,o as u,T as d,a as y}from"./objectTableStoryHelpers-fcsT5QhA.js";import"./preload-helper-NfN-SgeO.js";import"./Table-B31c6yHG.js";import"./index-Dg4pCXXs.js";import"./Dialog-CgYbS2_t.js";import"./cross-APJrfIvW.js";import"./svgIconContainer-kLwaY0s0.js";import"./useBaseUiId-B5XoADBe.js";import"./InternalBackdrop-Du_GPTcx.js";import"./composite-DcSj9RrZ.js";import"./index-Qh3Fcvsg.js";import"./index-CEG-DU55.js";import"./index-D_SsiIjb.js";import"./useEventCallback-BQBFJmB-.js";import"./SkeletonBar-quVsDzQk.js";import"./LoadingCell-DXEXK_0H.js";import"./ColumnConfigDialog-NVaQw0r8.js";import"./DraggableList-BMLxRLrQ.js";import"./search-DYE1hvQ2.js";import"./Input-DFXIqK_7.js";import"./useControlled-93X90FOH.js";import"./Button-BVbWdILw.js";import"./small-cross-DRu3YnII.js";import"./ActionButton-CSVekI6l.js";import"./Checkbox-C2cviow0.js";import"./useValueChanged-fRUG-rpo.js";import"./CollapsiblePanel-DqqKh1h2.js";import"./MultiColumnSortDialog-BJV9ndeu.js";import"./MenuTrigger-C6SNAPKX.js";import"./CompositeItem-CHs--B7N.js";import"./ToolbarRootContext-D3r4geEZ.js";import"./getDisabledMountTransitionStyles-AFz6B6Pn.js";import"./getPseudoElementBounds-jFSea8zF.js";import"./chevron-down-D7mWu-TA.js";import"./index-LNDJ7X8H.js";import"./error-DQ-loBpb.js";import"./BaseCbacBanner-B1BFj6EC.js";import"./makeExternalStore-CH15L2gT.js";import"./Tooltip-CqNia_Sj.js";import"./PopoverPopup-DRiAk7M2.js";import"./debounce-YrrW1v9C.js";import"./useOsdkClient-Tcdi_rac.js";import"./tick-DQhJP467.js";import"./DropdownField-BmgdesBZ.js";import"./isEqual-C8-mbT_W.js";import"./withOsdkMetrics-B6P3j5oP.js";const{expect:e,screen:t,userEvent:T,within:f}=__STORYBOOK_MODULE_TEST__,ue={...u,title:"Components/ObjectTable"},n={args:{objectType:c,columnDefinitions:l},parameters:{docs:{description:{story:"Minimal setup showing Employee data with default column definitions."},source:{code:"<ObjectTable objectType={Employee} />"}}},render:o=>i.jsx("div",{className:"object-table-container",style:{height:"600px"},children:i.jsx(p,{...o})}),play:async({canvasElement:o})=>{const a=f(o);await a.findByText(d),await y(a,"fullName"),await e(await t.findByRole("menuitem",{name:"Sort ascending"})).toBeInTheDocument(),await e(t.getByRole("menuitem",{name:"Sort descending"})).toBeInTheDocument(),await e(t.getByRole("menuitem",{name:"Pin column"})).toBeInTheDocument(),await e(t.getByRole("menuitem",{name:"Configure Columns"})).toBeInTheDocument(),await T.keyboard("{Escape}")}};var m,r,s;n.parameters={...n.parameters,docs:{...(m=n.parameters)==null?void 0:m.docs,source:{originalSource:`{
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
