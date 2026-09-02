import{j as i}from"./iframe-aaRaUaQA.js";import{O as p}from"./object-table-CVNLWWMk.js";import{E as c}from"./Employee-BAk2o20h.js";import{d as l,o as u,T as d,a as y}from"./objectTableStoryHelpers-A_UGpJCA.js";import"./preload-helper-DDdBuVC6.js";import"./Table-DtYjfP6r.js";import"./index-BFxdwZW8.js";import"./Dialog-B3xE5x_V.js";import"./cross-Civ52i0i.js";import"./svgIconContainer-DPD4yDJx.js";import"./useBaseUiId-OrvyFRjf.js";import"./InternalBackdrop-GC9m-3uE.js";import"./composite-Brai8k8L.js";import"./index-CjX3GsQ1.js";import"./index-B47dG2nh.js";import"./index-CtLyEqHu.js";import"./useEventCallback-C0cTpxYB.js";import"./SkeletonBar-D1kYfXgA.js";import"./LoadingCell-CfQ-CB4H.js";import"./ColumnConfigDialog-DVOPvFop.js";import"./DraggableList-D8c2iwKH.js";import"./search-rSQCSGrC.js";import"./Input-9MkH7huv.js";import"./useControlled-BxZDOjCN.js";import"./Button-_hqfl3rB.js";import"./small-cross-BM4HhB3q.js";import"./ActionButton-C5OMb6xb.js";import"./Checkbox-fVhFFENa.js";import"./useValueChanged-slNl2Col.js";import"./CollapsiblePanel-Y98hikc1.js";import"./MultiColumnSortDialog-DArSz3-b.js";import"./MenuTrigger-2BU8l6Er.js";import"./CompositeItem-ia1rPCPv.js";import"./ToolbarRootContext-CvLiSlR3.js";import"./getDisabledMountTransitionStyles-G0wd3Iab.js";import"./getPseudoElementBounds-BsimZP52.js";import"./chevron-down-DjMdYRFA.js";import"./index-BcetiFxi.js";import"./error-Bw88zVpy.js";import"./BaseCbacBanner-CB0Tsa2y.js";import"./makeExternalStore-DgrVSoVp.js";import"./Tooltip-BH5SwH9x.js";import"./PopoverPopup-DLGzdz9a.js";import"./debounce-DCNsezNJ.js";import"./useOsdkClient-GjkrZJXV.js";import"./tick-D1BoxD1y.js";import"./DropdownField-uGc5xnBi.js";import"./isEqual-DTb8ltKO.js";import"./withOsdkMetrics-BCIN_T8e.js";const{expect:e,screen:t,userEvent:T,within:f}=__STORYBOOK_MODULE_TEST__,ue={...u,title:"Components/ObjectTable"},n={args:{objectType:c,columnDefinitions:l},parameters:{docs:{description:{story:"Minimal setup showing Employee data with default column definitions."},source:{code:"<ObjectTable objectType={Employee} />"}}},render:o=>i.jsx("div",{className:"object-table-container",style:{height:"600px"},children:i.jsx(p,{...o})}),play:async({canvasElement:o})=>{const a=f(o);await a.findByText(d),await y(a,"fullName"),await e(await t.findByRole("menuitem",{name:"Sort ascending"})).toBeInTheDocument(),await e(t.getByRole("menuitem",{name:"Sort descending"})).toBeInTheDocument(),await e(t.getByRole("menuitem",{name:"Pin column"})).toBeInTheDocument(),await e(t.getByRole("menuitem",{name:"Configure Columns"})).toBeInTheDocument(),await T.keyboard("{Escape}")}};var m,r,s;n.parameters={...n.parameters,docs:{...(m=n.parameters)==null?void 0:m.docs,source:{originalSource:`{
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
