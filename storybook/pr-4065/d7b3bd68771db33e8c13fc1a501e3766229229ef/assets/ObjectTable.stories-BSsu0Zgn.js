import{j as i}from"./iframe-BkN_38ur.js";import{O as p}from"./object-table-BxK2SFkH.js";import{E as c}from"./Employee-BAk2o20h.js";import{d as l,o as u,T as d,a as y}from"./objectTableStoryHelpers-CpkjYFmM.js";import"./preload-helper-BysSMJyv.js";import"./Table-CHYRgWFW.js";import"./index-VCNAMxPB.js";import"./Dialog-CU_R9RQd.js";import"./cross-QuNtfWNx.js";import"./svgIconContainer-CleM6Ots.js";import"./useBaseUiId-DDXpceTn.js";import"./InternalBackdrop-2b4i1OXO.js";import"./composite-DTpp6U8p.js";import"./index-B8WRO5V1.js";import"./index-B4VzS2Ja.js";import"./index-PtHv8Npb.js";import"./useEventCallback-CfnnU2xW.js";import"./SkeletonBar-BLri9E0k.js";import"./LoadingCell-D8UndlJ7.js";import"./ColumnConfigDialog-BRCStEaP.js";import"./DraggableList-CBM_kRa4.js";import"./search-DLVM4UyR.js";import"./Input-BB5NVTdl.js";import"./useControlled-Cl0okxKJ.js";import"./Button-Bz7lNxsT.js";import"./small-cross-Bq-afI8J.js";import"./ActionButton-BEokvpGB.js";import"./Checkbox-B2Ex9sZd.js";import"./useValueChanged-sVrHRRrg.js";import"./CollapsiblePanel-o_jOyFnm.js";import"./MultiColumnSortDialog-DJ3dPbhu.js";import"./MenuTrigger-Baz3vKii.js";import"./CompositeItem-DeZdbGTL.js";import"./ToolbarRootContext-DsnyQOq9.js";import"./getDisabledMountTransitionStyles-B4uk2RCK.js";import"./getPseudoElementBounds-DqBsVHMm.js";import"./chevron-down-DQ_KkOEg.js";import"./index-tJ30rsuQ.js";import"./error-B2ZdHohT.js";import"./BaseCbacBanner-B7QoD-f1.js";import"./makeExternalStore-BQFFGO0N.js";import"./Tooltip-DB2l-4XV.js";import"./PopoverPopup-BGPwoB7x.js";import"./debounce-BH4zeBLy.js";import"./useOsdkClient-C7M0gZ9G.js";import"./tick-Ja0-lS9C.js";import"./DropdownField-DMG193d-.js";import"./isEqual-DV7eM8kA.js";import"./withOsdkMetrics-Bgcs-XTD.js";const{expect:e,screen:t,userEvent:T,within:f}=__STORYBOOK_MODULE_TEST__,ue={...u,title:"Components/ObjectTable"},n={args:{objectType:c,columnDefinitions:l},parameters:{docs:{description:{story:"Minimal setup showing Employee data with default column definitions."},source:{code:"<ObjectTable objectType={Employee} />"}}},render:o=>i.jsx("div",{className:"object-table-container",style:{height:"600px"},children:i.jsx(p,{...o})}),play:async({canvasElement:o})=>{const a=f(o);await a.findByText(d),await y(a,"fullName"),await e(await t.findByRole("menuitem",{name:"Sort ascending"})).toBeInTheDocument(),await e(t.getByRole("menuitem",{name:"Sort descending"})).toBeInTheDocument(),await e(t.getByRole("menuitem",{name:"Pin column"})).toBeInTheDocument(),await e(t.getByRole("menuitem",{name:"Configure Columns"})).toBeInTheDocument(),await T.keyboard("{Escape}")}};var m,r,s;n.parameters={...n.parameters,docs:{...(m=n.parameters)==null?void 0:m.docs,source:{originalSource:`{
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
