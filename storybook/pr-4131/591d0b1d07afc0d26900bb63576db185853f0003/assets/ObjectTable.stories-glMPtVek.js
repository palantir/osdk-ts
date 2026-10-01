import{j as i}from"./iframe-DHfhGWcA.js";import{O as p}from"./object-table-OpoS1B5z.js";import{E as c}from"./Employee-BAk2o20h.js";import{d as l,o as u,T as d,a as y}from"./objectTableStoryHelpers-EQaSVIAh.js";import"./preload-helper-D14EGrrK.js";import"./Table-BBNuKozg.js";import"./index-CCF9MEs2.js";import"./Dialog-C7_tmS0A.js";import"./cross-Dj-fC_ys.js";import"./svgIconContainer-BaEBe_Ou.js";import"./useBaseUiId-BATl1CQr.js";import"./InternalBackdrop-Cg_x7WdZ.js";import"./composite-DbTWPUQ9.js";import"./index-Blf5so-r.js";import"./index-C5pfUNxc.js";import"./index-C0hgrkVR.js";import"./useEventCallback-CxgY780e.js";import"./SkeletonBar-K08P4YrG.js";import"./LoadingCell-Cqx9pCQ0.js";import"./ColumnConfigDialog-BqPXpyZ-.js";import"./DraggableList-8UAXAnVw.js";import"./search-DWYoVV2s.js";import"./Input-zMxDvO-I.js";import"./useControlled-Bxerh3bt.js";import"./Button-Dj3Gc0R8.js";import"./small-cross-oBABr6h6.js";import"./ActionButton-w10zUXoM.js";import"./Checkbox-BH1RcZqr.js";import"./useValueChanged-Bsu0ebqY.js";import"./CollapsiblePanel-tIBbRKCQ.js";import"./MultiColumnSortDialog-C97PbmGP.js";import"./MenuTrigger-C81rcI3P.js";import"./CompositeItem-CLlZ6Yb0.js";import"./ToolbarRootContext-erU_8-54.js";import"./getDisabledMountTransitionStyles-C5UuzqSY.js";import"./getPseudoElementBounds-D6EOINUP.js";import"./chevron-down-DR6eEQC2.js";import"./index-DFvQFeWQ.js";import"./error-CAZmovtj.js";import"./BaseCbacBanner-BS60J-Cr.js";import"./makeExternalStore-C1Pxa9L5.js";import"./Tooltip-nGSUir4H.js";import"./PopoverPopup-CLeXoVr6.js";import"./debounce-Di14C5je.js";import"./useOsdkClient-C7hhAH6C.js";import"./tick-BOovpBqZ.js";import"./DropdownField-BwayLWA9.js";import"./isEqual-8UhBnCWP.js";import"./withOsdkMetrics-DU0hnwkS.js";const{expect:e,screen:t,userEvent:T,within:f}=__STORYBOOK_MODULE_TEST__,ue={...u,title:"Components/ObjectTable"},n={args:{objectType:c,columnDefinitions:l},parameters:{docs:{description:{story:"Minimal setup showing Employee data with default column definitions."},source:{code:"<ObjectTable objectType={Employee} />"}}},render:o=>i.jsx("div",{className:"object-table-container",style:{height:"600px"},children:i.jsx(p,{...o})}),play:async({canvasElement:o})=>{const a=f(o);await a.findByText(d),await y(a,"fullName"),await e(await t.findByRole("menuitem",{name:"Sort ascending"})).toBeInTheDocument(),await e(t.getByRole("menuitem",{name:"Sort descending"})).toBeInTheDocument(),await e(t.getByRole("menuitem",{name:"Pin column"})).toBeInTheDocument(),await e(t.getByRole("menuitem",{name:"Configure Columns"})).toBeInTheDocument(),await T.keyboard("{Escape}")}};var m,r,s;n.parameters={...n.parameters,docs:{...(m=n.parameters)==null?void 0:m.docs,source:{originalSource:`{
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
