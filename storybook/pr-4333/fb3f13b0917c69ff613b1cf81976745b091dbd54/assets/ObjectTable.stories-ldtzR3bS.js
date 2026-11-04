import{j as i}from"./iframe-CsKQ3MiN.js";import{O as p}from"./object-table-DbjAOYXB.js";import{E as c}from"./Employee-BAk2o20h.js";import{d as l,o as u,T as d,a as y}from"./objectTableStoryHelpers-CQG9zzfF.js";import"./preload-helper-DGKcnXHD.js";import"./Table-DQgdshTQ.js";import"./index-Dr6q-Sfz.js";import"./Dialog-COWppfPD.js";import"./cross-D0wLRLht.js";import"./svgIconContainer-CEz_OqiJ.js";import"./useBaseUiId-BzoXUnOl.js";import"./InternalBackdrop-DYA_vqeP.js";import"./composite-CoD6tMpx.js";import"./index-BeHm_BzD.js";import"./index-snnTh06i.js";import"./index-D49_UwOT.js";import"./useEventCallback-80Se1kif.js";import"./SkeletonBar-CizJ11uq.js";import"./LoadingCell-AXHz_OI3.js";import"./ColumnConfigDialog-5baoLeO5.js";import"./DraggableList-Da1XT_Ho.js";import"./search-cTPZqcQC.js";import"./Input-D9JW6ixL.js";import"./useControlled-Cob_C-Qn.js";import"./Button-BEOltIVE.js";import"./small-cross-BsRRrEs9.js";import"./ActionButton-CmQru8bY.js";import"./Checkbox-Bjl-uhI0.js";import"./useValueChanged-DQRkdvZ7.js";import"./CollapsiblePanel-BdBOmqTc.js";import"./MultiColumnSortDialog-DPR6eIVq.js";import"./MenuTrigger-BVwdiBa0.js";import"./CompositeItem-DZkfIwKg.js";import"./ToolbarRootContext-BNxut5tp.js";import"./getDisabledMountTransitionStyles-IbEufsWa.js";import"./getPseudoElementBounds-CFuQFtK_.js";import"./chevron-down-BCi4kbBt.js";import"./index-DoTKq459.js";import"./error-C-bxu3dO.js";import"./BaseCbacBanner-Br0T5VCO.js";import"./makeExternalStore-Czb1TAUA.js";import"./Tooltip-5SCwZ_pU.js";import"./PopoverPopup-849UqFyk.js";import"./debounce-XpKSqWNs.js";import"./useOsdkClient-DDQMFRik.js";import"./tick-Cn3xvEup.js";import"./DropdownField-KxlPBtr2.js";import"./isEqual-CIQzSvqq.js";import"./withOsdkMetrics-z1U7tMx_.js";const{expect:e,screen:t,userEvent:T,within:f}=__STORYBOOK_MODULE_TEST__,ue={...u,title:"Components/ObjectTable"},n={args:{objectType:c,columnDefinitions:l},parameters:{docs:{description:{story:"Minimal setup showing Employee data with default column definitions."},source:{code:"<ObjectTable objectType={Employee} />"}}},render:o=>i.jsx("div",{className:"object-table-container",style:{height:"600px"},children:i.jsx(p,{...o})}),play:async({canvasElement:o})=>{const a=f(o);await a.findByText(d),await y(a,"fullName"),await e(await t.findByRole("menuitem",{name:"Sort ascending"})).toBeInTheDocument(),await e(t.getByRole("menuitem",{name:"Sort descending"})).toBeInTheDocument(),await e(t.getByRole("menuitem",{name:"Pin column"})).toBeInTheDocument(),await e(t.getByRole("menuitem",{name:"Configure Columns"})).toBeInTheDocument(),await T.keyboard("{Escape}")}};var m,r,s;n.parameters={...n.parameters,docs:{...(m=n.parameters)==null?void 0:m.docs,source:{originalSource:`{
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
