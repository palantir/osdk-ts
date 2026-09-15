import{j as i}from"./iframe-i_9Nw0aL.js";import{O as p}from"./object-table-f3XuAxzL.js";import{E as c}from"./Employee-BAk2o20h.js";import{d as l,o as u,T as d,a as y}from"./objectTableStoryHelpers-BJDLmIDr.js";import"./preload-helper-B6z7q6ev.js";import"./Table-qqKMoyF4.js";import"./index-xy7OH4WM.js";import"./Dialog-CPeu6G82.js";import"./cross-QqYP1fee.js";import"./svgIconContainer-3Y9_T1l7.js";import"./useBaseUiId-BMuu8nEn.js";import"./InternalBackdrop-ChYWKohY.js";import"./composite-BEolDa-D.js";import"./index-DFV1oDTw.js";import"./index-DBCrB76S.js";import"./index-DLeoqhRa.js";import"./useEventCallback-BWVM_xBp.js";import"./SkeletonBar-m7_oqjy5.js";import"./LoadingCell-DYhARKcP.js";import"./ColumnConfigDialog-BNOyyc7J.js";import"./DraggableList-BFhFmyUR.js";import"./search-CEIky3LJ.js";import"./Input-DSjQkga5.js";import"./useControlled-gY6NMr8Z.js";import"./Button-Cqo_9NuU.js";import"./small-cross-D-oeOHZb.js";import"./ActionButton-DoCWbHlm.js";import"./Checkbox-BxiFWmok.js";import"./useValueChanged-DZGUtt_l.js";import"./CollapsiblePanel-uhXZweix.js";import"./MultiColumnSortDialog-DPUj4uDW.js";import"./MenuTrigger-DVCrlIYb.js";import"./CompositeItem-CcQI67Uz.js";import"./ToolbarRootContext-C05xSZ6f.js";import"./getDisabledMountTransitionStyles-DwmQAXX5.js";import"./getPseudoElementBounds-rsgn8lVn.js";import"./chevron-down-D5tyPu8s.js";import"./index-DABPjbUn.js";import"./error-BtW_-Bd0.js";import"./BaseCbacBanner-BcoWqc6a.js";import"./makeExternalStore-DV-2pdTM.js";import"./Tooltip-BXqI72Um.js";import"./PopoverPopup-COfAsOM5.js";import"./debounce-Dt-hlKAZ.js";import"./useOsdkClient-1TtZSZAh.js";import"./tick-qmWuhCdU.js";import"./DropdownField-BOme1HDF.js";import"./isEqual-G20i65-m.js";import"./withOsdkMetrics-Bn9NhK2D.js";const{expect:e,screen:t,userEvent:T,within:f}=__STORYBOOK_MODULE_TEST__,ue={...u,title:"Components/ObjectTable"},n={args:{objectType:c,columnDefinitions:l},parameters:{docs:{description:{story:"Minimal setup showing Employee data with default column definitions."},source:{code:"<ObjectTable objectType={Employee} />"}}},render:o=>i.jsx("div",{className:"object-table-container",style:{height:"600px"},children:i.jsx(p,{...o})}),play:async({canvasElement:o})=>{const a=f(o);await a.findByText(d),await y(a,"fullName"),await e(await t.findByRole("menuitem",{name:"Sort ascending"})).toBeInTheDocument(),await e(t.getByRole("menuitem",{name:"Sort descending"})).toBeInTheDocument(),await e(t.getByRole("menuitem",{name:"Pin column"})).toBeInTheDocument(),await e(t.getByRole("menuitem",{name:"Configure Columns"})).toBeInTheDocument(),await T.keyboard("{Escape}")}};var m,r,s;n.parameters={...n.parameters,docs:{...(m=n.parameters)==null?void 0:m.docs,source:{originalSource:`{
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
