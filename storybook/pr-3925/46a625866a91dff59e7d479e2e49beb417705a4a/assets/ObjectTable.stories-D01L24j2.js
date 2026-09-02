import{j as i}from"./iframe-CqkLHc_c.js";import{O as p}from"./object-table-B9dqwhdI.js";import{E as c}from"./Employee-BAk2o20h.js";import{d as l,o as u,T as d,a as y}from"./objectTableStoryHelpers-sQzG_l8k.js";import"./preload-helper-tK9KftsW.js";import"./Table-DOVpPfje.js";import"./index-BkdZmWk5.js";import"./Dialog-C8N5WYt2.js";import"./cross-BK5qmSmv.js";import"./svgIconContainer-Blo0ZtB6.js";import"./useBaseUiId-tebTh8Gp.js";import"./InternalBackdrop-LvsrBsqm.js";import"./composite-BYm3d5-q.js";import"./index-BPryo7yS.js";import"./index-ESRslAge.js";import"./index-Ca6LKe_B.js";import"./useEventCallback-BsCHvJZO.js";import"./SkeletonBar-9APJB1is.js";import"./LoadingCell-f9yIWNSo.js";import"./ColumnConfigDialog-CWbkHkwR.js";import"./DraggableList-CN06qLYh.js";import"./search-PNHKhQFY.js";import"./Input-CDogb2Gc.js";import"./useControlled-DG0f7MEe.js";import"./Button-B3Rn0blP.js";import"./small-cross-Culy_LL-.js";import"./ActionButton-Bf3mWBEe.js";import"./Checkbox-BBJ7O-tN.js";import"./useValueChanged-BYnUcR2q.js";import"./CollapsiblePanel-ChwSKAp7.js";import"./MultiColumnSortDialog-Bty7oBui.js";import"./MenuTrigger-CO6djv8h.js";import"./CompositeItem-DLFLEE2w.js";import"./ToolbarRootContext-BoN7sVx8.js";import"./getDisabledMountTransitionStyles-CSpIiX34.js";import"./getPseudoElementBounds-Bn-J1iOt.js";import"./chevron-down-Dm_-uRNW.js";import"./index-DkCpc9rG.js";import"./error-DVJcn8Pc.js";import"./BaseCbacBanner-jCxZY6l4.js";import"./makeExternalStore-Cg161Yxc.js";import"./Tooltip-4vAmB5ER.js";import"./PopoverPopup-CR7zdJhd.js";import"./debounce-CBvYKhdg.js";import"./useOsdkClient-Qcf5HYkT.js";import"./tick-DWazel4t.js";import"./DropdownField-w8MQJ0vm.js";import"./isEqual-BdDkPSGJ.js";import"./withOsdkMetrics-DbuLeRiC.js";const{expect:e,screen:t,userEvent:T,within:f}=__STORYBOOK_MODULE_TEST__,ue={...u,title:"Components/ObjectTable"},n={args:{objectType:c,columnDefinitions:l},parameters:{docs:{description:{story:"Minimal setup showing Employee data with default column definitions."},source:{code:"<ObjectTable objectType={Employee} />"}}},render:o=>i.jsx("div",{className:"object-table-container",style:{height:"600px"},children:i.jsx(p,{...o})}),play:async({canvasElement:o})=>{const a=f(o);await a.findByText(d),await y(a,"fullName"),await e(await t.findByRole("menuitem",{name:"Sort ascending"})).toBeInTheDocument(),await e(t.getByRole("menuitem",{name:"Sort descending"})).toBeInTheDocument(),await e(t.getByRole("menuitem",{name:"Pin column"})).toBeInTheDocument(),await e(t.getByRole("menuitem",{name:"Configure Columns"})).toBeInTheDocument(),await T.keyboard("{Escape}")}};var m,r,s;n.parameters={...n.parameters,docs:{...(m=n.parameters)==null?void 0:m.docs,source:{originalSource:`{
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
