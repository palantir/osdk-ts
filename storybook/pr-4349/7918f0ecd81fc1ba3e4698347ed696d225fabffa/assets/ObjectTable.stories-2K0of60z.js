import{j as i}from"./iframe-DZSjsAiP.js";import{O as p}from"./object-table-BC2oUq9v.js";import{E as c}from"./Employee-BAk2o20h.js";import{d as l,o as u,T as d,a as y}from"./objectTableStoryHelpers-CJhQAdIb.js";import"./preload-helper-DRp4yq1n.js";import"./Table-D-QNoyWD.js";import"./index-CfG6lRDS.js";import"./Dialog-D1OJOqd5.js";import"./cross-DuxYv-Qd.js";import"./svgIconContainer-oLZG0PXz.js";import"./useBaseUiId-DqEZVBYJ.js";import"./InternalBackdrop-ctv3Ze3z.js";import"./composite-C_s-Ej-L.js";import"./index-BKSH5ZIy.js";import"./index-CPoJpgxQ.js";import"./index-CLFNZu11.js";import"./useEventCallback-CzHnZD9n.js";import"./SkeletonBar-BxwS5lxe.js";import"./LoadingCell-CYbun_Sm.js";import"./ColumnConfigDialog-CYXHMWnm.js";import"./DraggableList-CNgtq2rM.js";import"./search-BIZEGKYQ.js";import"./Input-D45tcUlW.js";import"./useControlled-CW4hq1Ru.js";import"./Button-DFAegWDw.js";import"./small-cross-DZyRXeJ7.js";import"./ActionButton-DXV2VJ-U.js";import"./Checkbox-jKlPklgs.js";import"./useValueChanged-BwN-noW6.js";import"./CollapsiblePanel-CEmxw9fT.js";import"./MultiColumnSortDialog-AhuF8fVt.js";import"./MenuTrigger-CMH-YjvD.js";import"./CompositeItem-BdQ_Qgkw.js";import"./ToolbarRootContext-DC4x9xJZ.js";import"./getDisabledMountTransitionStyles-DuVbYN_c.js";import"./getPseudoElementBounds-BIjCqLho.js";import"./chevron-down-Cf7GCw_E.js";import"./index-ORKGFXoZ.js";import"./error-w1f9WiTY.js";import"./BaseCbacBanner-Duqtv5L9.js";import"./makeExternalStore-BvoRFHwl.js";import"./Tooltip-DnOhR-9t.js";import"./PopoverPopup-BB3NXsKU.js";import"./debounce-BY9LZGam.js";import"./useOsdkClient-Dqm5L56v.js";import"./tick-DuDzm3Ok.js";import"./DropdownField-DScFQheE.js";import"./isEqual-WjrsbOnG.js";import"./withOsdkMetrics-DwbEPMEH.js";const{expect:e,screen:t,userEvent:T,within:f}=__STORYBOOK_MODULE_TEST__,ue={...u,title:"Components/ObjectTable"},n={args:{objectType:c,columnDefinitions:l},parameters:{docs:{description:{story:"Minimal setup showing Employee data with default column definitions."},source:{code:"<ObjectTable objectType={Employee} />"}}},render:o=>i.jsx("div",{className:"object-table-container",style:{height:"600px"},children:i.jsx(p,{...o})}),play:async({canvasElement:o})=>{const a=f(o);await a.findByText(d),await y(a,"fullName"),await e(await t.findByRole("menuitem",{name:"Sort ascending"})).toBeInTheDocument(),await e(t.getByRole("menuitem",{name:"Sort descending"})).toBeInTheDocument(),await e(t.getByRole("menuitem",{name:"Pin column"})).toBeInTheDocument(),await e(t.getByRole("menuitem",{name:"Configure Columns"})).toBeInTheDocument(),await T.keyboard("{Escape}")}};var m,r,s;n.parameters={...n.parameters,docs:{...(m=n.parameters)==null?void 0:m.docs,source:{originalSource:`{
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
