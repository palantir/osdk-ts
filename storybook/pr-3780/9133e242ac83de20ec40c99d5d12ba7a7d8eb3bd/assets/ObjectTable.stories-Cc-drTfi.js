import{j as i}from"./iframe-DvvN0iZ4.js";import{O as p}from"./object-table-BvU2mV6M.js";import{E as c}from"./Employee-BAk2o20h.js";import{d as l,o as u,T as d,a as y}from"./objectTableStoryHelpers-BKVzKTX9.js";import"./preload-helper-COgx8bff.js";import"./Table-4GQcTise.js";import"./index-CExWqhF3.js";import"./Dialog-CD80pTON.js";import"./cross-DdXxY3zw.js";import"./svgIconContainer-DO7duNWZ.js";import"./useBaseUiId-BMLYN1z9.js";import"./InternalBackdrop-Dt_apqJW.js";import"./composite-C1x5nTDV.js";import"./index-CK5HdBab.js";import"./index-DU7UvfyD.js";import"./index-VCT57lbz.js";import"./useEventCallback-B5FWisA3.js";import"./SkeletonBar-BWjakb0v.js";import"./LoadingCell-B07D6uPe.js";import"./ColumnConfigDialog-BWxh3ulh.js";import"./DraggableList-G0-kePYg.js";import"./search-iASH-OFa.js";import"./Input-RroOyWit.js";import"./useControlled-BJtimK6V.js";import"./Button-BQEhn0-h.js";import"./small-cross-7Qo1ibsU.js";import"./ActionButton-DM7_AKH6.js";import"./Checkbox-BdeHaX97.js";import"./useValueChanged-hq5i52iF.js";import"./CollapsiblePanel-Ds-Y6JsI.js";import"./MultiColumnSortDialog-BFqkymhQ.js";import"./MenuTrigger-C-RbwST-.js";import"./CompositeItem-D7Fao19X.js";import"./ToolbarRootContext-Yypg0Ver.js";import"./getDisabledMountTransitionStyles-CArUbwJ-.js";import"./getPseudoElementBounds-DXBuHm7V.js";import"./chevron-down-6mjfuih6.js";import"./index-DIu0upuI.js";import"./error-C5MrVcfF.js";import"./BaseCbacBanner-Bs_IuhPB.js";import"./makeExternalStore-DCEfrMP4.js";import"./Tooltip-Ir5DQolV.js";import"./PopoverPopup-CIYN-v4k.js";import"./debounce-D86PTLoo.js";import"./useOsdkClient-CT8HOadD.js";import"./tick-DRXPtG6-.js";import"./DropdownField-CvetrftB.js";import"./isEqual-BHdaAHqt.js";import"./withOsdkMetrics-BfnLSscO.js";const{expect:e,screen:t,userEvent:T,within:f}=__STORYBOOK_MODULE_TEST__,ue={...u,title:"Components/ObjectTable"},n={args:{objectType:c,columnDefinitions:l},parameters:{docs:{description:{story:"Minimal setup showing Employee data with default column definitions."},source:{code:"<ObjectTable objectType={Employee} />"}}},render:o=>i.jsx("div",{className:"object-table-container",style:{height:"600px"},children:i.jsx(p,{...o})}),play:async({canvasElement:o})=>{const a=f(o);await a.findByText(d),await y(a,"fullName"),await e(await t.findByRole("menuitem",{name:"Sort ascending"})).toBeInTheDocument(),await e(t.getByRole("menuitem",{name:"Sort descending"})).toBeInTheDocument(),await e(t.getByRole("menuitem",{name:"Pin column"})).toBeInTheDocument(),await e(t.getByRole("menuitem",{name:"Configure Columns"})).toBeInTheDocument(),await T.keyboard("{Escape}")}};var m,r,s;n.parameters={...n.parameters,docs:{...(m=n.parameters)==null?void 0:m.docs,source:{originalSource:`{
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
