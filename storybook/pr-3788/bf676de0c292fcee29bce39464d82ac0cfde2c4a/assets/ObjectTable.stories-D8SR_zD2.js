import{j as i}from"./iframe-CIS7R8S0.js";import{O as p}from"./object-table-BRD1LaCv.js";import{E as c}from"./Employee-BAk2o20h.js";import{d as l,o as u,T as d,a as y}from"./objectTableStoryHelpers-DP7ztNU-.js";import"./preload-helper-CC0KEkYJ.js";import"./Table-vPXnTHDL.js";import"./index-BB05R3oj.js";import"./Dialog-jYt7TAkd.js";import"./cross-CypSL_mg.js";import"./svgIconContainer-DOCbxMNh.js";import"./useBaseUiId-Dx4TGSeb.js";import"./InternalBackdrop-B3HiLuVl.js";import"./composite-CQ8jq4un.js";import"./index-DM_wVMTu.js";import"./index-BKg_5Wuy.js";import"./index-Qbb5HOpD.js";import"./useEventCallback-DaJcuQ4l.js";import"./SkeletonBar-BdzAGyaZ.js";import"./LoadingCell-CGJ1Ce-Y.js";import"./ColumnConfigDialog-C15oeIig.js";import"./DraggableList-CySBtFi9.js";import"./search-CrRqmjmd.js";import"./Input-BbMczDPo.js";import"./useControlled-LRidnfkr.js";import"./isEqual-EKJAET8s.js";import"./isObject-CFesdK53.js";import"./Button-TVnROWVX.js";import"./ActionButton-CcVczjK6.js";import"./Checkbox-Wl3wBnfs.js";import"./useValueChanged-QRf8gN2r.js";import"./CollapsiblePanel-B5HdsVrp.js";import"./MultiColumnSortDialog-BWxk4_FC.js";import"./MenuTrigger-Bq45j4AP.js";import"./CompositeItem-DDPMwQ0l.js";import"./ToolbarRootContext-DAJLxMfM.js";import"./getDisabledMountTransitionStyles-hIgbxFBq.js";import"./getPseudoElementBounds-CmW25CrH.js";import"./chevron-down-BSAXsWfp.js";import"./index-DWJWtSQK.js";import"./error-dhKwelIe.js";import"./BaseCbacBanner-oSNgv8Qw.js";import"./makeExternalStore-RXScgX-m.js";import"./Tooltip-BJuu_c-9.js";import"./PopoverPopup-B7149Gul.js";import"./toNumber-OTthO2wW.js";import"./useOsdkClient-DkCUuQgu.js";import"./tick-BCb19KZc.js";import"./DropdownField-9gKqheEJ.js";import"./withOsdkMetrics-BwKjYpjZ.js";const{expect:e,screen:t,userEvent:T,within:f}=__STORYBOOK_MODULE_TEST__,ue={...u,title:"Components/ObjectTable"},n={args:{objectType:c,columnDefinitions:l},parameters:{docs:{description:{story:"Minimal setup showing Employee data with default column definitions."},source:{code:"<ObjectTable objectType={Employee} />"}}},render:o=>i.jsx("div",{className:"object-table-container",style:{height:"600px"},children:i.jsx(p,{...o})}),play:async({canvasElement:o})=>{const a=f(o);await a.findByText(d),await y(a,"fullName"),await e(await t.findByRole("menuitem",{name:"Sort ascending"})).toBeInTheDocument(),await e(t.getByRole("menuitem",{name:"Sort descending"})).toBeInTheDocument(),await e(t.getByRole("menuitem",{name:"Pin column"})).toBeInTheDocument(),await e(t.getByRole("menuitem",{name:"Configure Columns"})).toBeInTheDocument(),await T.keyboard("{Escape}")}};var m,r,s;n.parameters={...n.parameters,docs:{...(m=n.parameters)==null?void 0:m.docs,source:{originalSource:`{
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
