import{j as i}from"./iframe-Ba8PHYqF.js";import{O as p}from"./object-table-COs1RWZm.js";import{E as c}from"./Employee-BAk2o20h.js";import{d as l,o as u,T as d,a as y}from"./objectTableStoryHelpers-BnbQFuWi.js";import"./preload-helper-VSCHNqrc.js";import"./Table-BLGSYdXP.js";import"./index-CYz5sxm-.js";import"./Dialog-CW58EFG4.js";import"./cross-BMuQzm1w.js";import"./svgIconContainer-D3Vq6lhO.js";import"./useBaseUiId-CM4KZ4gx.js";import"./InternalBackdrop-C0Iw5WBU.js";import"./composite-C7C0lYaE.js";import"./index-7A66RV6v.js";import"./index-BH--vJui.js";import"./index-BgRDPYQ2.js";import"./useEventCallback-CCCfMMAc.js";import"./SkeletonBar-rCpEJ8p6.js";import"./LoadingCell-Bas8m6yo.js";import"./ColumnConfigDialog-DiDAecuK.js";import"./DraggableList-C33e8VbS.js";import"./search-CSidIbdR.js";import"./Input-DxXWxw4L.js";import"./useControlled-df092o7d.js";import"./Button-H-kX3WhQ.js";import"./small-cross-yRw1vW_l.js";import"./ActionButton-DLThXdQb.js";import"./Checkbox-cgSWlE0O.js";import"./useValueChanged-CAvtLgMA.js";import"./CollapsiblePanel-BpVH8rXR.js";import"./MultiColumnSortDialog-AD6pTiLp.js";import"./MenuTrigger-CIm9vomN.js";import"./CompositeItem-D3oTZHnf.js";import"./ToolbarRootContext-ClpWLSom.js";import"./getDisabledMountTransitionStyles-BTdqaYwA.js";import"./getPseudoElementBounds-vfCPoH5N.js";import"./chevron-down-DcdnJMhC.js";import"./index-CqwCmP3l.js";import"./error-BJ5r8zIU.js";import"./BaseCbacBanner-CC5TBrfI.js";import"./makeExternalStore-y72CzQ6c.js";import"./Tooltip-DxDRfVS3.js";import"./PopoverPopup-7FW94aDk.js";import"./debounce-BQHT7fzq.js";import"./useOsdkClient-C-NQgoaU.js";import"./tick-CBriDvBS.js";import"./DropdownField-Dvxz-g49.js";import"./isEqual-0UHk7APa.js";import"./withOsdkMetrics-5o3v7rv4.js";const{expect:e,screen:t,userEvent:T,within:f}=__STORYBOOK_MODULE_TEST__,ue={...u,title:"Components/ObjectTable"},n={args:{objectType:c,columnDefinitions:l},parameters:{docs:{description:{story:"Minimal setup showing Employee data with default column definitions."},source:{code:"<ObjectTable objectType={Employee} />"}}},render:o=>i.jsx("div",{className:"object-table-container",style:{height:"600px"},children:i.jsx(p,{...o})}),play:async({canvasElement:o})=>{const a=f(o);await a.findByText(d),await y(a,"fullName"),await e(await t.findByRole("menuitem",{name:"Sort ascending"})).toBeInTheDocument(),await e(t.getByRole("menuitem",{name:"Sort descending"})).toBeInTheDocument(),await e(t.getByRole("menuitem",{name:"Pin column"})).toBeInTheDocument(),await e(t.getByRole("menuitem",{name:"Configure Columns"})).toBeInTheDocument(),await T.keyboard("{Escape}")}};var m,r,s;n.parameters={...n.parameters,docs:{...(m=n.parameters)==null?void 0:m.docs,source:{originalSource:`{
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
