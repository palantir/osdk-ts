import{j as i}from"./iframe-RR2p5XOS.js";import{O as p}from"./object-table-D8uwa7sc.js";import{E as c}from"./Employee-BAk2o20h.js";import{d as l,o as u,T as d,a as y}from"./objectTableStoryHelpers-CFI_hDIf.js";import"./preload-helper-BOhV1rHy.js";import"./Table-B0X7SQKG.js";import"./index-DnsNcod6.js";import"./Dialog-Cd3otJRW.js";import"./cross-CR4LSxOQ.js";import"./svgIconContainer-u0oJjKFx.js";import"./useBaseUiId-C9ZH8_C_.js";import"./InternalBackdrop-BxeUUCts.js";import"./composite-p_UpWlex.js";import"./index-HN-AhAeO.js";import"./index-DKLD7YVV.js";import"./index-DgWiLO56.js";import"./useEventCallback-DUUjHCf-.js";import"./SkeletonBar-DK4NsRE-.js";import"./LoadingCell-BwzFXe23.js";import"./ColumnConfigDialog-Dqq4KIN7.js";import"./DraggableList-CQMYobPR.js";import"./search-DcbJPUOn.js";import"./Input-e_TaAvAj.js";import"./useControlled-CigCjjeU.js";import"./Button-Fi5pU_nf.js";import"./small-cross-BtGjVAe0.js";import"./ActionButton-BmrzLlcQ.js";import"./Checkbox-mL6rgYpq.js";import"./useValueChanged-CGaBoYZG.js";import"./CollapsiblePanel-lZY_ExWV.js";import"./MultiColumnSortDialog-BldHHC_p.js";import"./MenuTrigger-CnGvgINL.js";import"./CompositeItem-suN-dd_e.js";import"./ToolbarRootContext-BDIbARai.js";import"./getDisabledMountTransitionStyles-BCr5Qv_S.js";import"./getPseudoElementBounds-uKSjW76O.js";import"./chevron-down-CB1UmGgK.js";import"./index-s6aMoLTN.js";import"./error-CMBIrR-E.js";import"./BaseCbacBanner-CwjtUuLJ.js";import"./makeExternalStore-CT6Maj4O.js";import"./Tooltip-YxXLOr_X.js";import"./PopoverPopup-DAEl5eG3.js";import"./debounce-C5ix3ZOK.js";import"./useOsdkClient-BpUTBA14.js";import"./tick-CcC4crvR.js";import"./DropdownField-BhQ_noy4.js";import"./isEqual-D1FwFfsC.js";import"./withOsdkMetrics-DRbYLGlL.js";const{expect:e,screen:t,userEvent:T,within:f}=__STORYBOOK_MODULE_TEST__,ue={...u,title:"Components/ObjectTable"},n={args:{objectType:c,columnDefinitions:l},parameters:{docs:{description:{story:"Minimal setup showing Employee data with default column definitions."},source:{code:"<ObjectTable objectType={Employee} />"}}},render:o=>i.jsx("div",{className:"object-table-container",style:{height:"600px"},children:i.jsx(p,{...o})}),play:async({canvasElement:o})=>{const a=f(o);await a.findByText(d),await y(a,"fullName"),await e(await t.findByRole("menuitem",{name:"Sort ascending"})).toBeInTheDocument(),await e(t.getByRole("menuitem",{name:"Sort descending"})).toBeInTheDocument(),await e(t.getByRole("menuitem",{name:"Pin column"})).toBeInTheDocument(),await e(t.getByRole("menuitem",{name:"Configure Columns"})).toBeInTheDocument(),await T.keyboard("{Escape}")}};var m,r,s;n.parameters={...n.parameters,docs:{...(m=n.parameters)==null?void 0:m.docs,source:{originalSource:`{
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
