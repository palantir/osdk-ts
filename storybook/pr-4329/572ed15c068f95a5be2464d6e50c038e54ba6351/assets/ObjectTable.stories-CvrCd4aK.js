import{j as i}from"./iframe-WKt3pp3u.js";import{O as p}from"./object-table-CeAM-xFj.js";import{E as c}from"./Employee-BAk2o20h.js";import{d as l,o as u,T as d,a as y}from"./objectTableStoryHelpers-CpyQb2d4.js";import"./preload-helper-C-2N1dom.js";import"./Table-DcYprFpJ.js";import"./index-Cn0NPQc9.js";import"./Dialog-BDkF5r6D.js";import"./cross-4ZdF9rso.js";import"./svgIconContainer-Dd6XoJmG.js";import"./useBaseUiId-KSUwx5Md.js";import"./InternalBackdrop-BtH0Ysif.js";import"./composite-B4lF1Gsb.js";import"./index-CyjL2alN.js";import"./index-CK4IlmQS.js";import"./index-DafvFaXh.js";import"./useEventCallback-BvXzRC06.js";import"./SkeletonBar-CsOoAcCP.js";import"./LoadingCell-x5OFViSJ.js";import"./ColumnConfigDialog-sgAUv_aj.js";import"./DraggableList-C2qJbBwZ.js";import"./search-Dn1087-G.js";import"./Input-Caz2RzvD.js";import"./useControlled-CFMpFbMm.js";import"./Button-cNgJCMyB.js";import"./small-cross-DAIM-tYh.js";import"./ActionButton-DoHs3WwA.js";import"./Checkbox-CbONRRnG.js";import"./useValueChanged-C-7bhyhT.js";import"./CollapsiblePanel-Dr3s6TPy.js";import"./MultiColumnSortDialog-9_MSS2z8.js";import"./MenuTrigger-BkVhitah.js";import"./CompositeItem-Bj3DFZfQ.js";import"./ToolbarRootContext-BEEAtmxq.js";import"./getDisabledMountTransitionStyles-CHcwnca1.js";import"./getPseudoElementBounds-Bwny5PcZ.js";import"./chevron-down-sDl6Q2Tv.js";import"./index-D0XVpPOf.js";import"./error-Cfg0wGHf.js";import"./BaseCbacBanner-D6JFbrjt.js";import"./makeExternalStore-S8Y7W4h4.js";import"./Tooltip-gNTiaPxS.js";import"./PopoverPopup-ZW8wbg7e.js";import"./debounce-JIbAFHw4.js";import"./useOsdkClient-DCOM6Bqd.js";import"./tick-C6QdtsXi.js";import"./DropdownField-CYa_9fL1.js";import"./isEqual-uOZoXSsZ.js";import"./withOsdkMetrics-D4VhY3gv.js";const{expect:e,screen:t,userEvent:T,within:f}=__STORYBOOK_MODULE_TEST__,ue={...u,title:"Components/ObjectTable"},n={args:{objectType:c,columnDefinitions:l},parameters:{docs:{description:{story:"Minimal setup showing Employee data with default column definitions."},source:{code:"<ObjectTable objectType={Employee} />"}}},render:o=>i.jsx("div",{className:"object-table-container",style:{height:"600px"},children:i.jsx(p,{...o})}),play:async({canvasElement:o})=>{const a=f(o);await a.findByText(d),await y(a,"fullName"),await e(await t.findByRole("menuitem",{name:"Sort ascending"})).toBeInTheDocument(),await e(t.getByRole("menuitem",{name:"Sort descending"})).toBeInTheDocument(),await e(t.getByRole("menuitem",{name:"Pin column"})).toBeInTheDocument(),await e(t.getByRole("menuitem",{name:"Configure Columns"})).toBeInTheDocument(),await T.keyboard("{Escape}")}};var m,r,s;n.parameters={...n.parameters,docs:{...(m=n.parameters)==null?void 0:m.docs,source:{originalSource:`{
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
