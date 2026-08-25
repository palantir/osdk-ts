import{j as i}from"./iframe-DxvjiuoG.js";import{O as p}from"./object-table-C1rIg07t.js";import{E as c}from"./Employee-BAk2o20h.js";import{d as l,o as u,T as d,a as y}from"./objectTableStoryHelpers-DxEq5uEG.js";import"./preload-helper-2Cdctxvp.js";import"./Table-Bt7I-9fh.js";import"./index-D2DXMnPC.js";import"./Dialog-D8iGCXY0.js";import"./cross-CU5iUeZK.js";import"./svgIconContainer-Bc-LX5w1.js";import"./useBaseUiId-i2ghUAO7.js";import"./InternalBackdrop-CF51yINN.js";import"./composite-MpnK6H_E.js";import"./index-DN7VKkaP.js";import"./index-CgTiDnZY.js";import"./index-DT-Ax1H_.js";import"./useEventCallback-DPD1XA1q.js";import"./SkeletonBar-ByvRbgLN.js";import"./LoadingCell-DH0nmNKa.js";import"./ColumnConfigDialog-DCRof0cd.js";import"./DraggableList-o0x5Lz3i.js";import"./search-fJEePfyI.js";import"./Input-B0kS4IYW.js";import"./useControlled-D-Xx0mSD.js";import"./Button-C-PpSW9Y.js";import"./small-cross-BlyD_TgH.js";import"./ActionButton-8gADSdhA.js";import"./Checkbox-Dk9uVSa8.js";import"./useValueChanged-CApWWG6C.js";import"./CollapsiblePanel-Jf-2Om3A.js";import"./MultiColumnSortDialog-Bzb2juOk.js";import"./MenuTrigger-tMIluLVa.js";import"./CompositeItem-CRP27kpk.js";import"./ToolbarRootContext-DuzuuZ_P.js";import"./getDisabledMountTransitionStyles-O_Za4iz6.js";import"./getPseudoElementBounds-2CPKLsDC.js";import"./chevron-down-QZl6FCPt.js";import"./index-DzU4p4MN.js";import"./error-6Ostu_bN.js";import"./BaseCbacBanner-BSrTd76m.js";import"./makeExternalStore-BFeJ6DMi.js";import"./Tooltip-DK3UmKno.js";import"./PopoverPopup-D-UXvPmv.js";import"./debounce-cAzSpEOp.js";import"./useOsdkClient-BL3DQAGe.js";import"./tick-6ZyvJRYq.js";import"./DropdownField-Bj3DtAmp.js";import"./isEqual-BZ4w7fHr.js";import"./withOsdkMetrics-Vqy1EVn8.js";const{expect:e,screen:t,userEvent:T,within:f}=__STORYBOOK_MODULE_TEST__,ue={...u,title:"Components/ObjectTable"},n={args:{objectType:c,columnDefinitions:l},parameters:{docs:{description:{story:"Minimal setup showing Employee data with default column definitions."},source:{code:"<ObjectTable objectType={Employee} />"}}},render:o=>i.jsx("div",{className:"object-table-container",style:{height:"600px"},children:i.jsx(p,{...o})}),play:async({canvasElement:o})=>{const a=f(o);await a.findByText(d),await y(a,"fullName"),await e(await t.findByRole("menuitem",{name:"Sort ascending"})).toBeInTheDocument(),await e(t.getByRole("menuitem",{name:"Sort descending"})).toBeInTheDocument(),await e(t.getByRole("menuitem",{name:"Pin column"})).toBeInTheDocument(),await e(t.getByRole("menuitem",{name:"Configure Columns"})).toBeInTheDocument(),await T.keyboard("{Escape}")}};var m,r,s;n.parameters={...n.parameters,docs:{...(m=n.parameters)==null?void 0:m.docs,source:{originalSource:`{
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
