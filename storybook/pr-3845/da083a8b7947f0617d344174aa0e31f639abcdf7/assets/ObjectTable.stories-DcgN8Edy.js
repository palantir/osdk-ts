import{j as i}from"./iframe-BG-xXo7r.js";import{O as p}from"./object-table-1RAfaQKF.js";import{E as c}from"./Employee-BAk2o20h.js";import{d as l,o as u,T as d,a as y}from"./objectTableStoryHelpers-Bda41rWp.js";import"./preload-helper-2GkLelL5.js";import"./Table-rb1p-4tf.js";import"./index-Pj-HzUzm.js";import"./Dialog-DrUN80A_.js";import"./cross-COO8NBvG.js";import"./svgIconContainer-CRyh23yS.js";import"./useBaseUiId-D-UAxzqn.js";import"./InternalBackdrop-WCG0sYkD.js";import"./composite-CKXXvF5N.js";import"./index-BK0u17L-.js";import"./index-DwqJd7FU.js";import"./index-DR02O8bu.js";import"./useEventCallback-C97y8csB.js";import"./SkeletonBar-CKWLJD0i.js";import"./LoadingCell-CAUxc5Qv.js";import"./ColumnConfigDialog-zJyC0k_x.js";import"./DraggableList-jcpceXqW.js";import"./search-BdsoZ98Z.js";import"./Input-BZw_T80b.js";import"./useControlled-iuVTSgpH.js";import"./isEqual-DPwdhm9T.js";import"./isObject-CSS3G1-i.js";import"./Button-BwngmVa3.js";import"./ActionButton-Ck1hjfYS.js";import"./Checkbox-BAWFiuPA.js";import"./useValueChanged-CpBTQG4m.js";import"./CollapsiblePanel-BxSGC2o0.js";import"./MultiColumnSortDialog-B3LSPblt.js";import"./MenuTrigger-Bg-yIpNH.js";import"./CompositeItem-cxMrWvJM.js";import"./ToolbarRootContext-DRFZpc1m.js";import"./getDisabledMountTransitionStyles-BFncSCC7.js";import"./getPseudoElementBounds-DIwOO_f-.js";import"./chevron-down-BfUHrZib.js";import"./index-CQkLRa4U.js";import"./error-RFJ-PR3n.js";import"./BaseCbacBanner-BiIEtPUE.js";import"./makeExternalStore-BKMYc6Mc.js";import"./Tooltip-pjPnDbXT.js";import"./PopoverPopup-B0nz0je_.js";import"./toNumber-s1ERlujj.js";import"./useOsdkClient-DH7JXxel.js";import"./tick-Ck2m9m_d.js";import"./DropdownField-Clf5Rcoi.js";import"./withOsdkMetrics-CfOwfL5Z.js";const{expect:e,screen:t,userEvent:T,within:f}=__STORYBOOK_MODULE_TEST__,ue={...u,title:"Components/ObjectTable"},n={args:{objectType:c,columnDefinitions:l},parameters:{docs:{description:{story:"Minimal setup showing Employee data with default column definitions."},source:{code:"<ObjectTable objectType={Employee} />"}}},render:o=>i.jsx("div",{className:"object-table-container",style:{height:"600px"},children:i.jsx(p,{...o})}),play:async({canvasElement:o})=>{const a=f(o);await a.findByText(d),await y(a,"fullName"),await e(await t.findByRole("menuitem",{name:"Sort ascending"})).toBeInTheDocument(),await e(t.getByRole("menuitem",{name:"Sort descending"})).toBeInTheDocument(),await e(t.getByRole("menuitem",{name:"Pin column"})).toBeInTheDocument(),await e(t.getByRole("menuitem",{name:"Configure Columns"})).toBeInTheDocument(),await T.keyboard("{Escape}")}};var m,r,s;n.parameters={...n.parameters,docs:{...(m=n.parameters)==null?void 0:m.docs,source:{originalSource:`{
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
