import{j as i}from"./iframe-CgX-XfZe.js";import{O as p}from"./object-table-BfAW9lRl.js";import{E as c}from"./Employee-BAk2o20h.js";import{d as l,o as u,T as d,a as y}from"./objectTableStoryHelpers-fEOet2ZZ.js";import"./preload-helper-B7xu4jFf.js";import"./Table-tTPFVIKa.js";import"./index-BcViD_AJ.js";import"./Dialog-BaFW1Zjw.js";import"./cross-Nv8Io3xy.js";import"./svgIconContainer-CXZEPhaW.js";import"./useBaseUiId-BXQE2Tij.js";import"./InternalBackdrop-CvIKv91P.js";import"./composite-CuhqFDst.js";import"./index-a2F2ZKsn.js";import"./index-BmNCbeoV.js";import"./index-DrrGWtE8.js";import"./useEventCallback-CJOkzsfk.js";import"./SkeletonBar-rtQtEYsd.js";import"./LoadingCell-wXQ9cx3W.js";import"./ColumnConfigDialog-D9BeChM7.js";import"./DraggableList-D1MymrnJ.js";import"./search-DTGDsddM.js";import"./Input-yuy0l2cX.js";import"./useControlled-CVDZAttb.js";import"./Button-BRRWL_gG.js";import"./small-cross-CldOek9E.js";import"./ActionButton-eETZToHJ.js";import"./Checkbox-OMZwBT2q.js";import"./useValueChanged-CJQsRnGQ.js";import"./CollapsiblePanel-ztAj1qzb.js";import"./MultiColumnSortDialog-CbBSNnI_.js";import"./MenuTrigger-CvwlMuvL.js";import"./CompositeItem-Cosvl6JF.js";import"./ToolbarRootContext-auY9xRTT.js";import"./getDisabledMountTransitionStyles-CY7m0Re-.js";import"./getPseudoElementBounds-Cb9yX_CQ.js";import"./chevron-down-QOEZh7s4.js";import"./index-Dj-xdEDu.js";import"./error-ByGGXW3h.js";import"./BaseCbacBanner-vW1LjLLW.js";import"./makeExternalStore-CRMwT7Da.js";import"./Tooltip-C7b0j1Nz.js";import"./PopoverPopup-AplR6RR1.js";import"./debounce-542eBR78.js";import"./useOsdkClient-CGTaZpCt.js";import"./tick-8a_8sCFa.js";import"./DropdownField-D1OnXseu.js";import"./isEqual-Dv3NJm4i.js";import"./withOsdkMetrics-N-qC9xyD.js";const{expect:e,screen:t,userEvent:T,within:f}=__STORYBOOK_MODULE_TEST__,ue={...u,title:"Components/ObjectTable"},n={args:{objectType:c,columnDefinitions:l},parameters:{docs:{description:{story:"Minimal setup showing Employee data with default column definitions."},source:{code:"<ObjectTable objectType={Employee} />"}}},render:o=>i.jsx("div",{className:"object-table-container",style:{height:"600px"},children:i.jsx(p,{...o})}),play:async({canvasElement:o})=>{const a=f(o);await a.findByText(d),await y(a,"fullName"),await e(await t.findByRole("menuitem",{name:"Sort ascending"})).toBeInTheDocument(),await e(t.getByRole("menuitem",{name:"Sort descending"})).toBeInTheDocument(),await e(t.getByRole("menuitem",{name:"Pin column"})).toBeInTheDocument(),await e(t.getByRole("menuitem",{name:"Configure Columns"})).toBeInTheDocument(),await T.keyboard("{Escape}")}};var m,r,s;n.parameters={...n.parameters,docs:{...(m=n.parameters)==null?void 0:m.docs,source:{originalSource:`{
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
