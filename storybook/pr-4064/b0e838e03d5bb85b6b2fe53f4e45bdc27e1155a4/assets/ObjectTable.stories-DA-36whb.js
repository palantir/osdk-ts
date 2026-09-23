import{j as i}from"./iframe-VFEBMkmT.js";import{O as p}from"./object-table-C4rKgLpd.js";import{E as c}from"./Employee-BAk2o20h.js";import{d as l,o as u,T as d,a as y}from"./objectTableStoryHelpers-DqAawnxW.js";import"./preload-helper-07eHVQFi.js";import"./Table-5csSRIYj.js";import"./index-BNFDG_ll.js";import"./Dialog-BRCNAtd6.js";import"./cross-klKqW7pD.js";import"./svgIconContainer-CrmB8eAh.js";import"./useBaseUiId-vs4tfZGS.js";import"./InternalBackdrop-DhQAR8x3.js";import"./composite-DW9K0ypD.js";import"./index-C-ds3Per.js";import"./index-CHgbm3vu.js";import"./index-Cd122yTi.js";import"./useEventCallback-C41z4BOu.js";import"./SkeletonBar-C37LxB-t.js";import"./LoadingCell-BewF79XS.js";import"./ColumnConfigDialog-RBjKgz_k.js";import"./DraggableList-CU-FQY9q.js";import"./search-VMyVN87B.js";import"./Input-CRGuLcp8.js";import"./useControlled-C_z4AA7y.js";import"./Button-CSWptMiw.js";import"./small-cross-CDtSPCYR.js";import"./ActionButton-BWwL0ZTE.js";import"./Checkbox-CDDYNciR.js";import"./useValueChanged-BqBGjayP.js";import"./CollapsiblePanel-BIXleHAm.js";import"./MultiColumnSortDialog-DbqHEvtj.js";import"./MenuTrigger-CIXtaybW.js";import"./CompositeItem-CC1BkCel.js";import"./ToolbarRootContext-7k7RnlYE.js";import"./getDisabledMountTransitionStyles-CABZJUx0.js";import"./getPseudoElementBounds-DyGmu2aD.js";import"./chevron-down-DVKmbjNv.js";import"./index-npggFz05.js";import"./error-BAVEcOGP.js";import"./BaseCbacBanner-DXXff8Kf.js";import"./makeExternalStore-C0Q3dAYA.js";import"./Tooltip-CkehKfR2.js";import"./PopoverPopup-V-gR9AA8.js";import"./debounce-DG8oBSlI.js";import"./useOsdkClient-Ei_DMZLP.js";import"./tick-DWG5Mpvy.js";import"./DropdownField-DKVPGok9.js";import"./isEqual-CdM50Zo3.js";import"./withOsdkMetrics-BVlvQats.js";const{expect:e,screen:t,userEvent:T,within:f}=__STORYBOOK_MODULE_TEST__,ue={...u,title:"Components/ObjectTable"},n={args:{objectType:c,columnDefinitions:l},parameters:{docs:{description:{story:"Minimal setup showing Employee data with default column definitions."},source:{code:"<ObjectTable objectType={Employee} />"}}},render:o=>i.jsx("div",{className:"object-table-container",style:{height:"600px"},children:i.jsx(p,{...o})}),play:async({canvasElement:o})=>{const a=f(o);await a.findByText(d),await y(a,"fullName"),await e(await t.findByRole("menuitem",{name:"Sort ascending"})).toBeInTheDocument(),await e(t.getByRole("menuitem",{name:"Sort descending"})).toBeInTheDocument(),await e(t.getByRole("menuitem",{name:"Pin column"})).toBeInTheDocument(),await e(t.getByRole("menuitem",{name:"Configure Columns"})).toBeInTheDocument(),await T.keyboard("{Escape}")}};var m,r,s;n.parameters={...n.parameters,docs:{...(m=n.parameters)==null?void 0:m.docs,source:{originalSource:`{
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
