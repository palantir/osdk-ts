import{j as i}from"./iframe-BuDnfqKQ.js";import{O as p}from"./object-table-C29Cpgw-.js";import{E as c}from"./Employee-BAk2o20h.js";import{d as l,o as u,T as d,a as y}from"./objectTableStoryHelpers-9JC6gsuI.js";import"./preload-helper-B6J6BeBc.js";import"./Table-CZu0_kzA.js";import"./index-B6xFqDwW.js";import"./Dialog-ClOQevqP.js";import"./cross-FLwBoLKf.js";import"./svgIconContainer-DN1WNNEt.js";import"./useBaseUiId-Cy8x85cF.js";import"./InternalBackdrop-DkXtTuDL.js";import"./composite-DOI6fCuf.js";import"./index-VpAGjtCA.js";import"./index-Bcup2US4.js";import"./index-DNpn1j7J.js";import"./useEventCallback-D_AQe9Gp.js";import"./SkeletonBar-D9mhSkMY.js";import"./LoadingCell-Bnzn1we7.js";import"./ColumnConfigDialog-77MIy4UO.js";import"./DraggableList-DCJMvK_P.js";import"./search-CoDCGLUE.js";import"./Input-fZvrHimm.js";import"./useControlled-BWRXH__P.js";import"./Button-Ckrw6oVp.js";import"./small-cross-CDW2_ykz.js";import"./ActionButton-Dsev2y4b.js";import"./Checkbox-B3uIo4CQ.js";import"./useValueChanged-B0zicMaZ.js";import"./CollapsiblePanel-DY0hwdGx.js";import"./MultiColumnSortDialog-DYraEMIQ.js";import"./MenuTrigger-D2IDN6Ne.js";import"./CompositeItem-Dc19RcBz.js";import"./ToolbarRootContext-DTTMwqZv.js";import"./getDisabledMountTransitionStyles-C7ybyuH6.js";import"./getPseudoElementBounds-DcYnu62v.js";import"./chevron-down-C4fOxkM5.js";import"./index-zf1BCIO_.js";import"./error-DtRlIBmm.js";import"./BaseCbacBanner-DV5GW8yv.js";import"./makeExternalStore-CDWi_CU5.js";import"./Tooltip-vIT7M_iB.js";import"./PopoverPopup-WRtj1oNl.js";import"./debounce-hk0kLUMs.js";import"./useOsdkClient-W2M41dpd.js";import"./tick-DGYqdZi_.js";import"./DropdownField-Cn3SsOCQ.js";import"./isEqual-YCz6Riny.js";import"./withOsdkMetrics-cl6CbOTk.js";const{expect:e,screen:t,userEvent:T,within:f}=__STORYBOOK_MODULE_TEST__,ue={...u,title:"Components/ObjectTable"},n={args:{objectType:c,columnDefinitions:l},parameters:{docs:{description:{story:"Minimal setup showing Employee data with default column definitions."},source:{code:"<ObjectTable objectType={Employee} />"}}},render:o=>i.jsx("div",{className:"object-table-container",style:{height:"600px"},children:i.jsx(p,{...o})}),play:async({canvasElement:o})=>{const a=f(o);await a.findByText(d),await y(a,"fullName"),await e(await t.findByRole("menuitem",{name:"Sort ascending"})).toBeInTheDocument(),await e(t.getByRole("menuitem",{name:"Sort descending"})).toBeInTheDocument(),await e(t.getByRole("menuitem",{name:"Pin column"})).toBeInTheDocument(),await e(t.getByRole("menuitem",{name:"Configure Columns"})).toBeInTheDocument(),await T.keyboard("{Escape}")}};var m,r,s;n.parameters={...n.parameters,docs:{...(m=n.parameters)==null?void 0:m.docs,source:{originalSource:`{
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
