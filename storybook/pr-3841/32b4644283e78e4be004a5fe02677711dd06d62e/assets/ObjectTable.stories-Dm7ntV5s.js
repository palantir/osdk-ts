import{j as i}from"./iframe-pDATnlNX.js";import{O as p}from"./object-table-BwO3U7J8.js";import{E as c}from"./Employee-BAk2o20h.js";import{d as l,o as u,T as d,a as y}from"./objectTableStoryHelpers-IBqQDqCu.js";import"./preload-helper-CFiVFcjH.js";import"./Table-CsRZ8IOO.js";import"./index-B3g0maqG.js";import"./Dialog-C0I0Smxk.js";import"./cross-CyB8xMH6.js";import"./svgIconContainer-CW38pZFN.js";import"./useBaseUiId-Osovmaps.js";import"./InternalBackdrop-Blh6DplG.js";import"./composite-DJFOYfnE.js";import"./index-d3doyVb1.js";import"./index-B-TtPd4_.js";import"./index-CNUAJb2V.js";import"./useEventCallback-CZoT1331.js";import"./SkeletonBar-Bo_-tLfL.js";import"./LoadingCell-DlNNKt69.js";import"./ColumnConfigDialog-BaoIOSGL.js";import"./DraggableList-CLhhuMgw.js";import"./search-hwnvbWDr.js";import"./Input-B8KO9TSx.js";import"./useControlled-DkbNe0Ap.js";import"./Button-C4VVgNFo.js";import"./small-cross-CROYu8vY.js";import"./ActionButton-Cxl4Bem1.js";import"./Checkbox-8RpHLLU-.js";import"./useValueChanged-CEyEgIan.js";import"./CollapsiblePanel-CWOmA3Wc.js";import"./MultiColumnSortDialog-BUwFjiDf.js";import"./MenuTrigger-CespSAr5.js";import"./CompositeItem-DltsrA7v.js";import"./ToolbarRootContext-DHRs-5dn.js";import"./getDisabledMountTransitionStyles-C5TjX-bS.js";import"./getPseudoElementBounds-CqDNtjH4.js";import"./chevron-down-CPNZFTe4.js";import"./index-C-XHcvWq.js";import"./error-LFZeSfYk.js";import"./BaseCbacBanner-5sFcTZir.js";import"./makeExternalStore-DikQbg4p.js";import"./Tooltip-DRlm9Gqr.js";import"./PopoverPopup-BNyXadHB.js";import"./debounce-B-rTr2vW.js";import"./useOsdkClient-CWzkYDXS.js";import"./tick-D4zgp0M0.js";import"./DropdownField-Z2tqFm85.js";import"./isEqual-BiaP3eag.js";import"./withOsdkMetrics-Dldtv88a.js";const{expect:e,screen:t,userEvent:T,within:f}=__STORYBOOK_MODULE_TEST__,ue={...u,title:"Components/ObjectTable"},n={args:{objectType:c,columnDefinitions:l},parameters:{docs:{description:{story:"Minimal setup showing Employee data with default column definitions."},source:{code:"<ObjectTable objectType={Employee} />"}}},render:o=>i.jsx("div",{className:"object-table-container",style:{height:"600px"},children:i.jsx(p,{...o})}),play:async({canvasElement:o})=>{const a=f(o);await a.findByText(d),await y(a,"fullName"),await e(await t.findByRole("menuitem",{name:"Sort ascending"})).toBeInTheDocument(),await e(t.getByRole("menuitem",{name:"Sort descending"})).toBeInTheDocument(),await e(t.getByRole("menuitem",{name:"Pin column"})).toBeInTheDocument(),await e(t.getByRole("menuitem",{name:"Configure Columns"})).toBeInTheDocument(),await T.keyboard("{Escape}")}};var m,r,s;n.parameters={...n.parameters,docs:{...(m=n.parameters)==null?void 0:m.docs,source:{originalSource:`{
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
