import{j as i}from"./iframe-BO5nIFL0.js";import{O as p}from"./object-table-z13Q5_s7.js";import{E as c}from"./Employee-BAk2o20h.js";import{d as l,o as u,T as d,a as y}from"./objectTableStoryHelpers-Cuvd9fCh.js";import"./preload-helper-Byzzz28m.js";import"./Table-C42TRl45.js";import"./index-35ki7-Fy.js";import"./Dialog-ClcVFzEO.js";import"./cross-DB2PwsTQ.js";import"./svgIconContainer-CCohatq7.js";import"./useBaseUiId-WJQc9a5f.js";import"./InternalBackdrop-CfomXrTc.js";import"./composite-DHPIcUre.js";import"./index-BAvGYYuM.js";import"./index-CnZy_Djg.js";import"./index-DXF71g3x.js";import"./useEventCallback-BBKOS5QY.js";import"./SkeletonBar-COem--l-.js";import"./LoadingCell-BR4FtUWn.js";import"./ColumnConfigDialog-kvkughQ9.js";import"./DraggableList-id8D9Qse.js";import"./search-D6UctYzP.js";import"./Input-CbgheE8R.js";import"./useControlled-BymPsR7w.js";import"./isEqual-Ccnfufx7.js";import"./isObject-CLOeC-oN.js";import"./Button-DbsXRm21.js";import"./ActionButton-7mz2JyIw.js";import"./Checkbox-CNeugPLz.js";import"./useValueChanged-CY3fQIPq.js";import"./CollapsiblePanel-C9Imjw4U.js";import"./MultiColumnSortDialog-CD2JhBDw.js";import"./MenuTrigger-BcPjrXj3.js";import"./CompositeItem-B_e5r9wc.js";import"./ToolbarRootContext-DfhUwAFa.js";import"./getDisabledMountTransitionStyles-DB76-VLH.js";import"./getPseudoElementBounds-RB9RdRLr.js";import"./chevron-down-dkXODqVq.js";import"./index-BUXFO2wu.js";import"./error-ZVb7iWyg.js";import"./BaseCbacBanner-B5xkK0S4.js";import"./makeExternalStore-CZCTIsA8.js";import"./Tooltip-tv05UBzh.js";import"./PopoverPopup-CJg2meX_.js";import"./toNumber-cp78ICze.js";import"./useOsdkClient-ChLOXtjV.js";import"./tick-CHc8oJrg.js";import"./DropdownField-DcVGt7_G.js";import"./withOsdkMetrics-BH7Yc5xr.js";const{expect:e,screen:t,userEvent:T,within:f}=__STORYBOOK_MODULE_TEST__,ue={...u,title:"Components/ObjectTable"},n={args:{objectType:c,columnDefinitions:l},parameters:{docs:{description:{story:"Minimal setup showing Employee data with default column definitions."},source:{code:"<ObjectTable objectType={Employee} />"}}},render:o=>i.jsx("div",{className:"object-table-container",style:{height:"600px"},children:i.jsx(p,{...o})}),play:async({canvasElement:o})=>{const a=f(o);await a.findByText(d),await y(a,"fullName"),await e(await t.findByRole("menuitem",{name:"Sort ascending"})).toBeInTheDocument(),await e(t.getByRole("menuitem",{name:"Sort descending"})).toBeInTheDocument(),await e(t.getByRole("menuitem",{name:"Pin column"})).toBeInTheDocument(),await e(t.getByRole("menuitem",{name:"Configure Columns"})).toBeInTheDocument(),await T.keyboard("{Escape}")}};var m,r,s;n.parameters={...n.parameters,docs:{...(m=n.parameters)==null?void 0:m.docs,source:{originalSource:`{
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
