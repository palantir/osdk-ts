import{j as i}from"./iframe-CZ6kIwVs.js";import{O as p}from"./object-table-DUTK7ErW.js";import{E as c}from"./Employee-BAk2o20h.js";import{d as l,o as u,T as d,a as y}from"./objectTableStoryHelpers-BvHwFAcf.js";import"./preload-helper-7ZMJfvLO.js";import"./Table-ClJWP7oZ.js";import"./index-DI8fXOjY.js";import"./Dialog-C2Fh148t.js";import"./cross-D1S37vKD.js";import"./svgIconContainer-DnYA5NkM.js";import"./useBaseUiId-C8GyANar.js";import"./InternalBackdrop-CG-AIdNq.js";import"./composite-ZguSvKQK.js";import"./index-D-O5Mu3x.js";import"./index-CeIvWQQV.js";import"./index-Sa9k0vw4.js";import"./useEventCallback-AXc9OhMC.js";import"./SkeletonBar-DirsOHoC.js";import"./LoadingCell-DWGeO2Vc.js";import"./ColumnConfigDialog-z8uEyuDJ.js";import"./DraggableList-DY7O392e.js";import"./search-BEog5Q0_.js";import"./Input-BNiQQ7Yq.js";import"./useControlled-DYYKJrdL.js";import"./Button-D2YNSXqx.js";import"./small-cross-BRCq_Kda.js";import"./ActionButton-CCbXIhyD.js";import"./Checkbox-vpsJYbE_.js";import"./useValueChanged-BFS0ZGwF.js";import"./CollapsiblePanel-lqHD1Tly.js";import"./MultiColumnSortDialog-CwX6ASC_.js";import"./MenuTrigger-DahAPyz2.js";import"./CompositeItem-C5Mndviw.js";import"./ToolbarRootContext-DwX-_42A.js";import"./getDisabledMountTransitionStyles-bhu6Mdmh.js";import"./getPseudoElementBounds-BCP_KMb6.js";import"./chevron-down-CfJcExH9.js";import"./index-CRcSFsCM.js";import"./error-Be3f2oAD.js";import"./BaseCbacBanner-DxnCPOHJ.js";import"./makeExternalStore-CcH4sGc5.js";import"./Tooltip-CWcrOYKW.js";import"./PopoverPopup-5xXF3ZfI.js";import"./debounce-ZXxDT22C.js";import"./useOsdkClient-D_Xa4Rm7.js";import"./tick-ClDAkRZz.js";import"./DropdownField-CWvFDQGS.js";import"./isEqual-B__f9IMX.js";import"./withOsdkMetrics-CJa04cyG.js";const{expect:e,screen:t,userEvent:T,within:f}=__STORYBOOK_MODULE_TEST__,ue={...u,title:"Components/ObjectTable"},n={args:{objectType:c,columnDefinitions:l},parameters:{docs:{description:{story:"Minimal setup showing Employee data with default column definitions."},source:{code:"<ObjectTable objectType={Employee} />"}}},render:o=>i.jsx("div",{className:"object-table-container",style:{height:"600px"},children:i.jsx(p,{...o})}),play:async({canvasElement:o})=>{const a=f(o);await a.findByText(d),await y(a,"fullName"),await e(await t.findByRole("menuitem",{name:"Sort ascending"})).toBeInTheDocument(),await e(t.getByRole("menuitem",{name:"Sort descending"})).toBeInTheDocument(),await e(t.getByRole("menuitem",{name:"Pin column"})).toBeInTheDocument(),await e(t.getByRole("menuitem",{name:"Configure Columns"})).toBeInTheDocument(),await T.keyboard("{Escape}")}};var m,r,s;n.parameters={...n.parameters,docs:{...(m=n.parameters)==null?void 0:m.docs,source:{originalSource:`{
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
