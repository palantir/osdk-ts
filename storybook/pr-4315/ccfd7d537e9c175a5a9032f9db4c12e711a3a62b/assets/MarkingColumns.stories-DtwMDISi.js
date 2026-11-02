import{f as p,j as e}from"./iframe-DDJWwqBY.js";import{O as i}from"./object-table-CstPEMta.js";import{E as m}from"./Employee-BAk2o20h.js";import"./preload-helper-DOjHdaCa.js";import"./Table-D9glMgcM.js";import"./index-C1ZTpjxr.js";import"./Dialog-CFWw6Poa.js";import"./cross-B0JuOba7.js";import"./svgIconContainer-CFPdoyWo.js";import"./useBaseUiId-cxXVDzQK.js";import"./InternalBackdrop-C9Vpy4n2.js";import"./composite-CGLo9xHo.js";import"./index-DpGvPpxf.js";import"./index-NkIdY7dG.js";import"./index-D9JRRyZT.js";import"./useEventCallback-OeLjI0ls.js";import"./SkeletonBar-DOvjgVAK.js";import"./LoadingCell-BsV81X3O.js";import"./ColumnConfigDialog-doAkcj1i.js";import"./DraggableList-D71tE-YU.js";import"./search-d3_uaTlG.js";import"./Input-DxhVC9Qb.js";import"./useControlled-CWWChH0p.js";import"./Button-HOAjx8sN.js";import"./small-cross-DfHs2ftm.js";import"./ActionButton-Dt65wsJu.js";import"./Checkbox-D-TsrAgK.js";import"./useValueChanged-IbZDGfz8.js";import"./CollapsiblePanel-DQh2Sft9.js";import"./MultiColumnSortDialog-BbQkGEFb.js";import"./MenuTrigger-D8R4-oXl.js";import"./CompositeItem-BdeXH3Aq.js";import"./ToolbarRootContext-CwaM14ur.js";import"./getDisabledMountTransitionStyles-CzkaxE6g.js";import"./getPseudoElementBounds-CUXD3vIq.js";import"./chevron-down-CEmh4RKU.js";import"./index-CSTQbqzf.js";import"./error-DWlGgPFi.js";import"./BaseCbacBanner-C9REPQ56.js";import"./makeExternalStore-D6MI5hxD.js";import"./Tooltip-DaL85JuH.js";import"./PopoverPopup-9EDLzBq6.js";import"./debounce-B-ViHwUG.js";import"./useOsdkClient-BQG1YgSO.js";import"./tick-nUpkpaC6.js";import"./DropdownField-6XnrFdNT.js";import"./isEqual-BzZF3ZaT.js";import"./withOsdkMetrics-BCd9Mm8M.js";const or={title:"Components/ObjectTable/Features/Advanced",component:i,tags:["beta"],parameters:{msw:{handlers:[...p.handlers]},docs:{description:{component:"Exercises the full OSDK metadata → `useColumnDefs` → `renderDefaultCell` chain. The `Employee` mock includes a MANDATORY `classificationMarking` and a CBAC `clearanceMarking` array; `ObjectTable` reads `typeMetadata.markingType` from the wire metadata and routes each cell through the matching renderer (`CbacBanner` for CBAC, one banner per marking for MANDATORY)."}}}},r={args:{objectType:m,columnDefinitions:[{locator:{type:"property",id:"fullName"}},{locator:{type:"property",id:"department"}},{locator:{type:"property",id:"classificationMarking"}},{locator:{type:"property",id:"clearanceMarking"}}]},parameters:{docs:{source:{code:`const columnDefinitions = [
  { locator: { type: "property", id: "fullName" } },
  { locator: { type: "property", id: "department" } },
  // MANDATORY marking — rendered as one banner per marking
  { locator: { type: "property", id: "classificationMarking" } },
  // CBAC marking — rendered with CbacBanner
  { locator: { type: "property", id: "clearanceMarking" } },
];

<ObjectTable objectType={Employee} columnDefinitions={columnDefinitions} />`}}},render:a=>e.jsx("div",{style:{height:480},children:e.jsx(i,{...a})})};var t,o,n;r.parameters={...r.parameters,docs:{...(t=r.parameters)==null?void 0:t.docs,source:{originalSource:`{
  args: {
    objectType: Employee,
    columnDefinitions: [{
      locator: {
        type: "property",
        id: "fullName"
      }
    }, {
      locator: {
        type: "property",
        id: "department"
      }
    }, {
      locator: {
        type: "property",
        id: "classificationMarking"
      }
    }, {
      locator: {
        type: "property",
        id: "clearanceMarking"
      }
    }]
  },
  parameters: {
    docs: {
      source: {
        code: \`const columnDefinitions = [
  { locator: { type: "property", id: "fullName" } },
  { locator: { type: "property", id: "department" } },
  // MANDATORY marking — rendered as one banner per marking
  { locator: { type: "property", id: "classificationMarking" } },
  // CBAC marking — rendered with CbacBanner
  { locator: { type: "property", id: "clearanceMarking" } },
];

<ObjectTable objectType={Employee} columnDefinitions={columnDefinitions} />\`
      }
    }
  },
  render: args => <div style={{
    height: 480
  }}>
      <ObjectTable {...args} />
    </div>
}`,...(n=(o=r.parameters)==null?void 0:o.docs)==null?void 0:n.source}}};const nr=["MarkingColumns"];export{r as MarkingColumns,nr as __namedExportsOrder,or as default};
