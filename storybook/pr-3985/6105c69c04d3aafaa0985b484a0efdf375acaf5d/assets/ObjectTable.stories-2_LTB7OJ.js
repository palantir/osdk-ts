import{j as i}from"./iframe-D07nCh-w.js";import{O as p}from"./object-table-BsFPf6cF.js";import{E as c}from"./Employee-BAk2o20h.js";import{d as l,o as u,T as d,a as y}from"./objectTableStoryHelpers-gFh_DKzc.js";import"./preload-helper-CmcD2_D_.js";import"./Table-BUkXhyz1.js";import"./index-BuDZJHpF.js";import"./Dialog-BqExHdSf.js";import"./cross-CTO9sPn-.js";import"./svgIconContainer-PtRD7k8A.js";import"./useBaseUiId-psA3q1id.js";import"./InternalBackdrop-CoeQ5ndg.js";import"./composite-C9jYcXJr.js";import"./index-BIjdr9-z.js";import"./index-BrNSxG5V.js";import"./index-CeN_u9Sa.js";import"./useEventCallback-BpGNXSJx.js";import"./SkeletonBar-Dpb84ZTI.js";import"./LoadingCell-BIwNmKsO.js";import"./ColumnConfigDialog-CBgEanuv.js";import"./DraggableList-CwS18mwK.js";import"./search-CytW_RDV.js";import"./Input-98CZZbi3.js";import"./useControlled-CXqQNY_F.js";import"./Button-DEuGu2m_.js";import"./small-cross--WdO_ezs.js";import"./ActionButton-BtMU_wua.js";import"./Checkbox-C-8bjav5.js";import"./useValueChanged-C_Y8WMPp.js";import"./CollapsiblePanel-C4kSjDma.js";import"./MultiColumnSortDialog-Tfzuj_KT.js";import"./MenuTrigger-f1OBuoEa.js";import"./CompositeItem-Br0cx3Iq.js";import"./ToolbarRootContext-DqdX595l.js";import"./getDisabledMountTransitionStyles-B1bj1ZX9.js";import"./getPseudoElementBounds-BBf48KpN.js";import"./chevron-down-dIbn2_mD.js";import"./index-a0NtOl0y.js";import"./error-ByDyMI-d.js";import"./BaseCbacBanner-Bvqf0NRj.js";import"./makeExternalStore-D0hTV5Nv.js";import"./Tooltip-CtckguA7.js";import"./PopoverPopup-De9oms5K.js";import"./debounce-CLiKICQw.js";import"./useOsdkClient-Bz66Th9p.js";import"./tick-C06-S_iw.js";import"./DropdownField-DWMnKMar.js";import"./isEqual-BvIrIFjk.js";import"./withOsdkMetrics-BiT0eK7g.js";const{expect:e,screen:t,userEvent:T,within:f}=__STORYBOOK_MODULE_TEST__,ue={...u,title:"Components/ObjectTable"},n={args:{objectType:c,columnDefinitions:l},parameters:{docs:{description:{story:"Minimal setup showing Employee data with default column definitions."},source:{code:"<ObjectTable objectType={Employee} />"}}},render:o=>i.jsx("div",{className:"object-table-container",style:{height:"600px"},children:i.jsx(p,{...o})}),play:async({canvasElement:o})=>{const a=f(o);await a.findByText(d),await y(a,"fullName"),await e(await t.findByRole("menuitem",{name:"Sort ascending"})).toBeInTheDocument(),await e(t.getByRole("menuitem",{name:"Sort descending"})).toBeInTheDocument(),await e(t.getByRole("menuitem",{name:"Pin column"})).toBeInTheDocument(),await e(t.getByRole("menuitem",{name:"Configure Columns"})).toBeInTheDocument(),await T.keyboard("{Escape}")}};var m,r,s;n.parameters={...n.parameters,docs:{...(m=n.parameters)==null?void 0:m.docs,source:{originalSource:`{
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
