import{j as i}from"./iframe-CINa6Zgf.js";import{O as p}from"./object-table-bWrqp2dT.js";import{E as c}from"./Employee-BAk2o20h.js";import{d as l,o as u,T as d,a as y}from"./objectTableStoryHelpers-CjI8O42O.js";import"./preload-helper-By73o2jw.js";import"./Table-BBTdYlQ-.js";import"./index-BP4TKibe.js";import"./Dialog-CdtCVyP3.js";import"./cross-BkRnKOPP.js";import"./svgIconContainer-CNFEqHpH.js";import"./useBaseUiId-CWUgitm1.js";import"./InternalBackdrop-CiQDmEMW.js";import"./composite-OajiVgE3.js";import"./index-CxG-P-nc.js";import"./index-CA-7i9jO.js";import"./index-BtagJvg8.js";import"./useEventCallback-BEdjHVFi.js";import"./SkeletonBar-UkW_OkZD.js";import"./LoadingCell-pD_Yefjq.js";import"./ColumnConfigDialog-Bc2Xyr7i.js";import"./DraggableList-C1dNTMSq.js";import"./search-DndjkDUR.js";import"./Input-CsP9VOhj.js";import"./useControlled-CIQnPEcE.js";import"./Button-S_wwBFsV.js";import"./small-cross-DpLPdGHk.js";import"./ActionButton-DDDKBEV5.js";import"./Checkbox-DV59Q6l-.js";import"./useValueChanged-BGQoiKWM.js";import"./CollapsiblePanel-_7NHSAW-.js";import"./MultiColumnSortDialog-DfOtsTxl.js";import"./MenuTrigger-BXs9dpKi.js";import"./CompositeItem-BieHCh4d.js";import"./ToolbarRootContext-DNhRV4PI.js";import"./getDisabledMountTransitionStyles-DGkpLrSf.js";import"./getPseudoElementBounds-B_xY--Sp.js";import"./chevron-down-DnNAIf49.js";import"./index-DMjOHO7u.js";import"./error-BIO08ioS.js";import"./BaseCbacBanner-BfZPQgZE.js";import"./makeExternalStore-BvvEwv00.js";import"./Tooltip-DRox557f.js";import"./PopoverPopup-DyMWOWhV.js";import"./debounce-W9feSSbl.js";import"./useOsdkClient-lu0DiUxq.js";import"./tick-BdMwtH9z.js";import"./DropdownField-BPtamgR3.js";import"./isEqual-lWJTpmnJ.js";import"./withOsdkMetrics-Ct4i0IXa.js";const{expect:e,screen:t,userEvent:T,within:f}=__STORYBOOK_MODULE_TEST__,ue={...u,title:"Components/ObjectTable"},n={args:{objectType:c,columnDefinitions:l},parameters:{docs:{description:{story:"Minimal setup showing Employee data with default column definitions."},source:{code:"<ObjectTable objectType={Employee} />"}}},render:o=>i.jsx("div",{className:"object-table-container",style:{height:"600px"},children:i.jsx(p,{...o})}),play:async({canvasElement:o})=>{const a=f(o);await a.findByText(d),await y(a,"fullName"),await e(await t.findByRole("menuitem",{name:"Sort ascending"})).toBeInTheDocument(),await e(t.getByRole("menuitem",{name:"Sort descending"})).toBeInTheDocument(),await e(t.getByRole("menuitem",{name:"Pin column"})).toBeInTheDocument(),await e(t.getByRole("menuitem",{name:"Configure Columns"})).toBeInTheDocument(),await T.keyboard("{Escape}")}};var m,r,s;n.parameters={...n.parameters,docs:{...(m=n.parameters)==null?void 0:m.docs,source:{originalSource:`{
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
