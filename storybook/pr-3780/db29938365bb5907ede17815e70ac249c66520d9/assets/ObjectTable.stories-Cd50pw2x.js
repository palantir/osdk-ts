import{j as i}from"./iframe-CstWj4ez.js";import{O as p}from"./object-table-D7hvvrF-.js";import{E as c}from"./Employee-BAk2o20h.js";import{d as l,o as u,T as d,a as y}from"./objectTableStoryHelpers-Cqe5pZBW.js";import"./preload-helper-BCM2Mrwh.js";import"./Table-Cb3VnGLM.js";import"./index-BKtj_CIh.js";import"./Dialog-B2ZfHIXA.js";import"./cross-6T7z6U36.js";import"./svgIconContainer-BsM_A13O.js";import"./useBaseUiId-DZ_WZ3fx.js";import"./InternalBackdrop-C-LNt-lH.js";import"./composite-BUmYDl_r.js";import"./index-BqvUKCfb.js";import"./index-BQ4WMtZt.js";import"./index-RA07jDgR.js";import"./useEventCallback-Dee24_X-.js";import"./SkeletonBar-C0XxhtHg.js";import"./LoadingCell-DIEG5nbG.js";import"./ColumnConfigDialog-DPUMBc5m.js";import"./DraggableList-u9hTx2SB.js";import"./search-DhbfxSt8.js";import"./Input-oNr1j4J9.js";import"./useControlled-C4IcZtnx.js";import"./isEqual-DfwxU_vW.js";import"./isObject-ChnDkpR1.js";import"./Button-BKds_g4a.js";import"./ActionButton-DxKWF70L.js";import"./Checkbox-C96hH_f4.js";import"./useValueChanged-DBzN32tG.js";import"./CollapsiblePanel-BRIZbe3n.js";import"./MultiColumnSortDialog-bc7y89Mr.js";import"./MenuTrigger-D8OrdQfp.js";import"./CompositeItem-CQRAlint.js";import"./ToolbarRootContext-CozoeZB6.js";import"./getDisabledMountTransitionStyles-D9tKl1ns.js";import"./getPseudoElementBounds-vxrIWz2n.js";import"./chevron-down-CG1jYwFN.js";import"./index-BZ-wGrZ-.js";import"./error-Ddbcc8Kd.js";import"./BaseCbacBanner-DwTii65W.js";import"./makeExternalStore-v46grpUp.js";import"./Tooltip-d_vTBVW5.js";import"./PopoverPopup-fwfs0Gd4.js";import"./toNumber-1ndxpNJ-.js";import"./useOsdkClient-C1tS2z5J.js";import"./tick-CxKwPCHU.js";import"./DropdownField-C26FrhNO.js";import"./withOsdkMetrics-q3McYtTu.js";const{expect:e,screen:t,userEvent:T,within:f}=__STORYBOOK_MODULE_TEST__,ue={...u,title:"Components/ObjectTable"},n={args:{objectType:c,columnDefinitions:l},parameters:{docs:{description:{story:"Minimal setup showing Employee data with default column definitions."},source:{code:"<ObjectTable objectType={Employee} />"}}},render:o=>i.jsx("div",{className:"object-table-container",style:{height:"600px"},children:i.jsx(p,{...o})}),play:async({canvasElement:o})=>{const a=f(o);await a.findByText(d),await y(a,"fullName"),await e(await t.findByRole("menuitem",{name:"Sort ascending"})).toBeInTheDocument(),await e(t.getByRole("menuitem",{name:"Sort descending"})).toBeInTheDocument(),await e(t.getByRole("menuitem",{name:"Pin column"})).toBeInTheDocument(),await e(t.getByRole("menuitem",{name:"Configure Columns"})).toBeInTheDocument(),await T.keyboard("{Escape}")}};var m,r,s;n.parameters={...n.parameters,docs:{...(m=n.parameters)==null?void 0:m.docs,source:{originalSource:`{
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
