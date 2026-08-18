import{j as i}from"./iframe-D5CWdNdp.js";import{O as p}from"./object-table-EOud3YSs.js";import{E as c}from"./Employee-BAk2o20h.js";import{d as l,o as u,T as d,a as y}from"./objectTableStoryHelpers-CkccWvTP.js";import"./preload-helper-Cs2ER-7-.js";import"./Table-DYPsVii4.js";import"./index-DmRKQ5gu.js";import"./Dialog-Cjmh--Nw.js";import"./cross-YX9QXa6Y.js";import"./svgIconContainer-B6KxKnjw.js";import"./useBaseUiId-ByIiMOew.js";import"./InternalBackdrop-CwmVqkKm.js";import"./composite-u6E42LXc.js";import"./index-DQTlocgX.js";import"./index-DJSWcjtY.js";import"./index-DlctO1Vj.js";import"./useEventCallback-CUdtWi1h.js";import"./SkeletonBar-Dsep6i17.js";import"./LoadingCell-D6KBbW-w.js";import"./ColumnConfigDialog-14XM0LM5.js";import"./DraggableList-20Cr2QMm.js";import"./search-YJzut-LN.js";import"./Input-Dk6BTnFd.js";import"./useControlled-Dp3YziLR.js";import"./Button-CX2uzNBF.js";import"./small-cross-C3BgNwcQ.js";import"./ActionButton-6bJnLdYp.js";import"./Checkbox-B-fBsKCu.js";import"./useValueChanged-RZ5vNT_v.js";import"./CollapsiblePanel-DtWGfqS_.js";import"./MultiColumnSortDialog-CemOIoQQ.js";import"./MenuTrigger-B3SmJQBD.js";import"./CompositeItem-BKjFMUh6.js";import"./ToolbarRootContext-CEpyHN5v.js";import"./getDisabledMountTransitionStyles-BAK-aKJ4.js";import"./getPseudoElementBounds-8DDsxEhD.js";import"./chevron-down-BWXHwUsU.js";import"./index-vLNFJNsx.js";import"./error-BnTb_JyD.js";import"./BaseCbacBanner-q-p8dZVZ.js";import"./makeExternalStore-MWPsIyHx.js";import"./Tooltip-s8Dx_pXA.js";import"./PopoverPopup-CHmR5dlC.js";import"./debounce-B2VVpvOF.js";import"./useOsdkClient-BTWvqW3U.js";import"./tick-WgC55DvX.js";import"./DropdownField-KfOaBG1s.js";import"./isEqual-DojFh0mn.js";import"./withOsdkMetrics-Csrf-Npu.js";const{expect:e,screen:t,userEvent:T,within:f}=__STORYBOOK_MODULE_TEST__,ue={...u,title:"Components/ObjectTable"},n={args:{objectType:c,columnDefinitions:l},parameters:{docs:{description:{story:"Minimal setup showing Employee data with default column definitions."},source:{code:"<ObjectTable objectType={Employee} />"}}},render:o=>i.jsx("div",{className:"object-table-container",style:{height:"600px"},children:i.jsx(p,{...o})}),play:async({canvasElement:o})=>{const a=f(o);await a.findByText(d),await y(a,"fullName"),await e(await t.findByRole("menuitem",{name:"Sort ascending"})).toBeInTheDocument(),await e(t.getByRole("menuitem",{name:"Sort descending"})).toBeInTheDocument(),await e(t.getByRole("menuitem",{name:"Pin column"})).toBeInTheDocument(),await e(t.getByRole("menuitem",{name:"Configure Columns"})).toBeInTheDocument(),await T.keyboard("{Escape}")}};var m,r,s;n.parameters={...n.parameters,docs:{...(m=n.parameters)==null?void 0:m.docs,source:{originalSource:`{
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
