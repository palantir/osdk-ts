import{j as i}from"./iframe-C6LBpvuI.js";import{O as p}from"./object-table-CcXLtHpK.js";import{E as c}from"./Employee-BAk2o20h.js";import{d as l,o as u,T as d,a as y}from"./objectTableStoryHelpers-DiDIf9sE.js";import"./preload-helper-D5MgSTAG.js";import"./Table-BeBUCyGA.js";import"./index-NiT3c2LR.js";import"./Dialog-kUY69VQz.js";import"./cross-_DiJsQ5N.js";import"./svgIconContainer-Bqb8q1fz.js";import"./useBaseUiId-D9K-3OOp.js";import"./InternalBackdrop-HhBDZuEq.js";import"./composite-CIL5RRbh.js";import"./index-CPv3k7C8.js";import"./index-DwcGPrXk.js";import"./index-CqMyNaRs.js";import"./useEventCallback-Wk0zbhyA.js";import"./SkeletonBar-BOpMWE3t.js";import"./LoadingCell-HYA-UBCw.js";import"./ColumnConfigDialog-Be7bd5l3.js";import"./DraggableList-XKOi4747.js";import"./search-CkHqN668.js";import"./Input-CYIsQ-Xl.js";import"./useControlled-35bEpDbg.js";import"./Button-DcSoFPNd.js";import"./small-cross-Ca0z12yL.js";import"./ActionButton-DvSfUpHb.js";import"./Checkbox-C9O8Ucdp.js";import"./useValueChanged-D_yZ0Mm1.js";import"./CollapsiblePanel-BArtnZVf.js";import"./MultiColumnSortDialog-DM5iE9d8.js";import"./MenuTrigger-C0vCR4Gx.js";import"./CompositeItem-Cmb1U36q.js";import"./ToolbarRootContext-DJRyp8mD.js";import"./getDisabledMountTransitionStyles-De_VSn36.js";import"./getPseudoElementBounds-CW1Mk6S7.js";import"./chevron-down-Bw9bT84C.js";import"./index-vMfLr8EK.js";import"./error-CGV30LyY.js";import"./BaseCbacBanner-DV1fw0IM.js";import"./makeExternalStore-qoO0AqK1.js";import"./Tooltip-Bz3b9lQY.js";import"./PopoverPopup-DeYL1cwn.js";import"./debounce-Bq6Y-sFM.js";import"./useOsdkClient-AeGVvXbC.js";import"./tick-BwKNHXqA.js";import"./DropdownField-BxCBScnI.js";import"./isEqual-7tmA05Zq.js";import"./withOsdkMetrics-Dgn4gd8E.js";const{expect:e,screen:t,userEvent:T,within:f}=__STORYBOOK_MODULE_TEST__,ue={...u,title:"Components/ObjectTable"},n={args:{objectType:c,columnDefinitions:l},parameters:{docs:{description:{story:"Minimal setup showing Employee data with default column definitions."},source:{code:"<ObjectTable objectType={Employee} />"}}},render:o=>i.jsx("div",{className:"object-table-container",style:{height:"600px"},children:i.jsx(p,{...o})}),play:async({canvasElement:o})=>{const a=f(o);await a.findByText(d),await y(a,"fullName"),await e(await t.findByRole("menuitem",{name:"Sort ascending"})).toBeInTheDocument(),await e(t.getByRole("menuitem",{name:"Sort descending"})).toBeInTheDocument(),await e(t.getByRole("menuitem",{name:"Pin column"})).toBeInTheDocument(),await e(t.getByRole("menuitem",{name:"Configure Columns"})).toBeInTheDocument(),await T.keyboard("{Escape}")}};var m,r,s;n.parameters={...n.parameters,docs:{...(m=n.parameters)==null?void 0:m.docs,source:{originalSource:`{
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
