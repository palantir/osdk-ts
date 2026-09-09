import{j as i}from"./iframe-JXLKLe4j.js";import{O as p}from"./object-table-BSBUtwZw.js";import{E as c}from"./Employee-BAk2o20h.js";import{d as l,o as u,T as d,a as y}from"./objectTableStoryHelpers-BU5HVuO5.js";import"./preload-helper-KxhExJZe.js";import"./Table-qjFQ-LV4.js";import"./index-CxCVEUEK.js";import"./Dialog-BAHFhmeR.js";import"./cross-DOXYOKC7.js";import"./svgIconContainer-39ufch0k.js";import"./useBaseUiId-D2ECG8pj.js";import"./InternalBackdrop-BAhO0rZ6.js";import"./composite-B1xcP3KB.js";import"./index-CU7Uodcw.js";import"./index-KYXcc3Yr.js";import"./index-D0eNlerC.js";import"./useEventCallback-CwcpFxjU.js";import"./SkeletonBar-BO4kxP3D.js";import"./LoadingCell-BXQ-UV07.js";import"./ColumnConfigDialog-BPCYXCVh.js";import"./DraggableList-BPhMewNT.js";import"./search-3vsZ9AKM.js";import"./Input-Cp2KEsjw.js";import"./useControlled-BlJ0csd0.js";import"./Button-Cg6Es2oR.js";import"./small-cross-Bm-1zFL_.js";import"./ActionButton-DABDZfMp.js";import"./Checkbox-7tyUFDb-.js";import"./useValueChanged-76jQ3f4t.js";import"./CollapsiblePanel-BetHwBDr.js";import"./MultiColumnSortDialog-DOqOmKA9.js";import"./MenuTrigger-DPnFUnbb.js";import"./CompositeItem-CHr0cHjc.js";import"./ToolbarRootContext-Dtg0Oro0.js";import"./getDisabledMountTransitionStyles-rcpG9bQ-.js";import"./getPseudoElementBounds-Bnkuh_Gq.js";import"./chevron-down-OJuk8g-X.js";import"./index-DoaZjYqH.js";import"./error-CCMzsuJP.js";import"./BaseCbacBanner-D1xPrtuz.js";import"./makeExternalStore-CPv_2K4j.js";import"./Tooltip-DVRBwT79.js";import"./PopoverPopup-CvtiR2Lg.js";import"./debounce-CiOfWDDO.js";import"./useOsdkClient-Bd8Cmg0y.js";import"./tick-g-QdmJj0.js";import"./DropdownField-DgrKVFWZ.js";import"./isEqual-C9hHIdql.js";import"./withOsdkMetrics-OXe-gHpY.js";const{expect:e,screen:t,userEvent:T,within:f}=__STORYBOOK_MODULE_TEST__,ue={...u,title:"Components/ObjectTable"},n={args:{objectType:c,columnDefinitions:l},parameters:{docs:{description:{story:"Minimal setup showing Employee data with default column definitions."},source:{code:"<ObjectTable objectType={Employee} />"}}},render:o=>i.jsx("div",{className:"object-table-container",style:{height:"600px"},children:i.jsx(p,{...o})}),play:async({canvasElement:o})=>{const a=f(o);await a.findByText(d),await y(a,"fullName"),await e(await t.findByRole("menuitem",{name:"Sort ascending"})).toBeInTheDocument(),await e(t.getByRole("menuitem",{name:"Sort descending"})).toBeInTheDocument(),await e(t.getByRole("menuitem",{name:"Pin column"})).toBeInTheDocument(),await e(t.getByRole("menuitem",{name:"Configure Columns"})).toBeInTheDocument(),await T.keyboard("{Escape}")}};var m,r,s;n.parameters={...n.parameters,docs:{...(m=n.parameters)==null?void 0:m.docs,source:{originalSource:`{
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
