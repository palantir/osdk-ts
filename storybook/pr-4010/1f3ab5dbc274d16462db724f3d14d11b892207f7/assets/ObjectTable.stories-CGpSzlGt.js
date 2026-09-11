import{j as i}from"./iframe-CNvI9eAL.js";import{O as p}from"./object-table-DE0aQxGd.js";import{E as c}from"./Employee-BAk2o20h.js";import{d as l,o as u,T as d,a as y}from"./objectTableStoryHelpers-vOJxrFxG.js";import"./preload-helper-CRF54Ery.js";import"./Table-DQba8Id3.js";import"./index-BTFSWIKz.js";import"./Dialog-Cm29-LjC.js";import"./cross--RfUm2YZ.js";import"./svgIconContainer-BBVMgJTA.js";import"./useBaseUiId-CxeAu3mm.js";import"./InternalBackdrop-CHq0uWTI.js";import"./composite-Db3opbub.js";import"./index-V8dSKZeO.js";import"./index-Cvipkoc1.js";import"./index-Deml3Efy.js";import"./useEventCallback-BzDn9UNO.js";import"./SkeletonBar-T6--w0gO.js";import"./LoadingCell-DKTXROx6.js";import"./ColumnConfigDialog-d6w508Un.js";import"./DraggableList-DP6Q3e48.js";import"./search-BesbbJYF.js";import"./Input-CfSk64xN.js";import"./useControlled-pDp_EzUa.js";import"./Button-CfqXNV8N.js";import"./small-cross-BE9CMIjD.js";import"./ActionButton-BBpJXm_V.js";import"./Checkbox-B5V9DxWA.js";import"./useValueChanged-CrRD_2mc.js";import"./CollapsiblePanel-BLod_JW_.js";import"./MultiColumnSortDialog-DIQiqAb7.js";import"./MenuTrigger-DqqaQGBf.js";import"./CompositeItem-aRd3tSux.js";import"./ToolbarRootContext-CTMDQSca.js";import"./getDisabledMountTransitionStyles-4DN3r7zh.js";import"./getPseudoElementBounds-D2n5rcQy.js";import"./chevron-down-DEvcNxOi.js";import"./index-BHMz7Anj.js";import"./error-CG9g-M1f.js";import"./BaseCbacBanner-VkrDpRp7.js";import"./makeExternalStore-DrmCh3vo.js";import"./Tooltip-BBjnREMn.js";import"./PopoverPopup-DGeh8xC_.js";import"./debounce-CkKjOcL_.js";import"./useOsdkClient-C0wuY3lu.js";import"./tick-CpXHS_dg.js";import"./DropdownField-CYdvpVt_.js";import"./isEqual-BGKnxyMw.js";import"./withOsdkMetrics-D4xumH8Q.js";const{expect:e,screen:t,userEvent:T,within:f}=__STORYBOOK_MODULE_TEST__,ue={...u,title:"Components/ObjectTable"},n={args:{objectType:c,columnDefinitions:l},parameters:{docs:{description:{story:"Minimal setup showing Employee data with default column definitions."},source:{code:"<ObjectTable objectType={Employee} />"}}},render:o=>i.jsx("div",{className:"object-table-container",style:{height:"600px"},children:i.jsx(p,{...o})}),play:async({canvasElement:o})=>{const a=f(o);await a.findByText(d),await y(a,"fullName"),await e(await t.findByRole("menuitem",{name:"Sort ascending"})).toBeInTheDocument(),await e(t.getByRole("menuitem",{name:"Sort descending"})).toBeInTheDocument(),await e(t.getByRole("menuitem",{name:"Pin column"})).toBeInTheDocument(),await e(t.getByRole("menuitem",{name:"Configure Columns"})).toBeInTheDocument(),await T.keyboard("{Escape}")}};var m,r,s;n.parameters={...n.parameters,docs:{...(m=n.parameters)==null?void 0:m.docs,source:{originalSource:`{
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
