import{j as i}from"./iframe-d67fO8Hy.js";import{O as p}from"./object-table-DnPtetQ7.js";import{E as c}from"./Employee-BAk2o20h.js";import{d as l,o as u,T as d,a as y}from"./objectTableStoryHelpers-f5juvYF7.js";import"./preload-helper-Bkr4_qkS.js";import"./Table-MM65L2ys.js";import"./index-B3ATbghx.js";import"./Dialog-C8PKiJtJ.js";import"./cross-Dhsy2lb8.js";import"./svgIconContainer-0_l9M1TV.js";import"./useBaseUiId-DAPMmE-k.js";import"./InternalBackdrop-CPOwNltk.js";import"./composite-DgQW3RrN.js";import"./index-Bfq5tsOh.js";import"./index-BQ0UWAWF.js";import"./index-C3nueWd-.js";import"./useEventCallback-XRj4vjhQ.js";import"./SkeletonBar-C10GPXTz.js";import"./LoadingCell-Bsb88Deq.js";import"./ColumnConfigDialog-EzM-G72-.js";import"./DraggableList-CcWjbOHp.js";import"./search-BJPSjSS2.js";import"./Input-BDVfl7Fm.js";import"./useControlled-DVSkDfdi.js";import"./Button-Ba0LvAgG.js";import"./small-cross-DpVo6Bt2.js";import"./ActionButton-BjsV-hhr.js";import"./Checkbox-C9q9LeYF.js";import"./useValueChanged-BPOaH2ai.js";import"./CollapsiblePanel-BsQekoIK.js";import"./MultiColumnSortDialog-BpLwH_BZ.js";import"./MenuTrigger-BI85z42j.js";import"./CompositeItem-BlzOTS1w.js";import"./ToolbarRootContext-BIYj41-H.js";import"./getDisabledMountTransitionStyles-BIByIGzl.js";import"./getPseudoElementBounds-Dn_EWDZB.js";import"./chevron-down-CUnzJf2x.js";import"./index-CVtzuMh1.js";import"./error-hkUFZDRv.js";import"./BaseCbacBanner-BCU-zUsd.js";import"./makeExternalStore-CYpUKzCL.js";import"./Tooltip-g-pWm_fU.js";import"./PopoverPopup-DWeFjGRm.js";import"./debounce-CsC9LC5J.js";import"./useOsdkClient-CNDbHwB1.js";import"./tick-DPR1XWRH.js";import"./DropdownField-B96kR7Sr.js";import"./isEqual-DX_c9-yy.js";import"./withOsdkMetrics-CmzDVisr.js";const{expect:e,screen:t,userEvent:T,within:f}=__STORYBOOK_MODULE_TEST__,ue={...u,title:"Components/ObjectTable"},n={args:{objectType:c,columnDefinitions:l},parameters:{docs:{description:{story:"Minimal setup showing Employee data with default column definitions."},source:{code:"<ObjectTable objectType={Employee} />"}}},render:o=>i.jsx("div",{className:"object-table-container",style:{height:"600px"},children:i.jsx(p,{...o})}),play:async({canvasElement:o})=>{const a=f(o);await a.findByText(d),await y(a,"fullName"),await e(await t.findByRole("menuitem",{name:"Sort ascending"})).toBeInTheDocument(),await e(t.getByRole("menuitem",{name:"Sort descending"})).toBeInTheDocument(),await e(t.getByRole("menuitem",{name:"Pin column"})).toBeInTheDocument(),await e(t.getByRole("menuitem",{name:"Configure Columns"})).toBeInTheDocument(),await T.keyboard("{Escape}")}};var m,r,s;n.parameters={...n.parameters,docs:{...(m=n.parameters)==null?void 0:m.docs,source:{originalSource:`{
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
