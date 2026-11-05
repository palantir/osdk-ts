import{j as i}from"./iframe-DpQxl-G6.js";import{O as p}from"./object-table-BroIEPvU.js";import{E as c}from"./Employee-BAk2o20h.js";import{d as l,o as u,T as d,a as y}from"./objectTableStoryHelpers-CPDVHi2j.js";import"./preload-helper-mRXziM39.js";import"./Table-Bpr2S1M2.js";import"./index-Cujp3sVp.js";import"./Dialog-BAHkjLoo.js";import"./cross-dB1xiAz0.js";import"./svgIconContainer-DamXBWaI.js";import"./useBaseUiId-Cl9-toeq.js";import"./InternalBackdrop-UGKYLNqj.js";import"./composite-wCOpmCUF.js";import"./index-CrIwRE1J.js";import"./index-BGKSJQgI.js";import"./index-LqhCF_-F.js";import"./useEventCallback-7bghjhj3.js";import"./SkeletonBar-BlfHbAVT.js";import"./LoadingCell-Cebj5wsq.js";import"./ColumnConfigDialog-CqwuMV7d.js";import"./DraggableList-CcpFjV0I.js";import"./search-n4OQKLJh.js";import"./Input-D2U-2W4H.js";import"./useControlled-TG9q_V2m.js";import"./Button-BpP7RQEd.js";import"./small-cross-C1Iw8DgY.js";import"./ActionButton-fbLg4xtm.js";import"./Checkbox-uYPQv9Df.js";import"./useValueChanged-CwTmp6si.js";import"./CollapsiblePanel-CWN4zyln.js";import"./MultiColumnSortDialog-CTML89JK.js";import"./MenuTrigger-B_XNeRPS.js";import"./CompositeItem-DSQrNM-7.js";import"./ToolbarRootContext-D4KBNeKS.js";import"./getDisabledMountTransitionStyles-BUxjZvDR.js";import"./getPseudoElementBounds-11Yqxgjp.js";import"./chevron-down-D-RM0tZ4.js";import"./index-DttXp8FH.js";import"./error-DzvIefMA.js";import"./BaseCbacBanner-BPjZ85cS.js";import"./makeExternalStore-BUiRNREx.js";import"./Tooltip-DE5PnA7D.js";import"./PopoverPopup-DzI_buys.js";import"./debounce-CJywBWC4.js";import"./useOsdkClient-0Dxy99AS.js";import"./tick-bXhfM5-a.js";import"./DropdownField-BRSWnnTy.js";import"./isEqual-DHjK3ILE.js";import"./withOsdkMetrics-C9oeFlqw.js";const{expect:e,screen:t,userEvent:T,within:f}=__STORYBOOK_MODULE_TEST__,ue={...u,title:"Components/ObjectTable"},n={args:{objectType:c,columnDefinitions:l},parameters:{docs:{description:{story:"Minimal setup showing Employee data with default column definitions."},source:{code:"<ObjectTable objectType={Employee} />"}}},render:o=>i.jsx("div",{className:"object-table-container",style:{height:"600px"},children:i.jsx(p,{...o})}),play:async({canvasElement:o})=>{const a=f(o);await a.findByText(d),await y(a,"fullName"),await e(await t.findByRole("menuitem",{name:"Sort ascending"})).toBeInTheDocument(),await e(t.getByRole("menuitem",{name:"Sort descending"})).toBeInTheDocument(),await e(t.getByRole("menuitem",{name:"Pin column"})).toBeInTheDocument(),await e(t.getByRole("menuitem",{name:"Configure Columns"})).toBeInTheDocument(),await T.keyboard("{Escape}")}};var m,r,s;n.parameters={...n.parameters,docs:{...(m=n.parameters)==null?void 0:m.docs,source:{originalSource:`{
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
