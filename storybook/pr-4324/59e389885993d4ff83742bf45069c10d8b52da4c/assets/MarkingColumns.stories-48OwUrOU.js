import{f as p,j as e}from"./iframe-Beajvbu-.js";import{O as i}from"./object-table-CuoJIEfJ.js";import{E as m}from"./Employee-BAk2o20h.js";import"./preload-helper-dZkoR4F_.js";import"./Table-CtvDlE9v.js";import"./index-AV0Zt5q4.js";import"./Dialog-DMm-bMz7.js";import"./cross-KOMA-dmo.js";import"./svgIconContainer-BOWvIcxU.js";import"./useBaseUiId-D9Gk7Ps8.js";import"./InternalBackdrop-CaxlX099.js";import"./composite-B77JxL2r.js";import"./index-DJbbiMo-.js";import"./index-DHfuPCUx.js";import"./index-CigOb2f9.js";import"./useEventCallback-BvQAVvQb.js";import"./SkeletonBar-DjvCRCop.js";import"./LoadingCell-DbRYftPe.js";import"./ColumnConfigDialog-5LIRF41O.js";import"./DraggableList-CZImoszn.js";import"./search-WL4FSHko.js";import"./Input-CusKMl7d.js";import"./useControlled-BgXewBwk.js";import"./Button-D4EG1oUS.js";import"./small-cross-CBKgWU-e.js";import"./ActionButton-RaZCtRc3.js";import"./Checkbox-CdIuKuvS.js";import"./useValueChanged-C6EHjupA.js";import"./CollapsiblePanel-DRA-iOzD.js";import"./MultiColumnSortDialog-Ck0ZUaLR.js";import"./MenuTrigger-BAbau4x_.js";import"./CompositeItem-Dxfd76IV.js";import"./ToolbarRootContext-DQCYszJ6.js";import"./getDisabledMountTransitionStyles-2F0S6DHA.js";import"./getPseudoElementBounds-BvsNaSZR.js";import"./chevron-down-BTZVhACL.js";import"./index-BEqze36e.js";import"./error-DahJGZf3.js";import"./BaseCbacBanner-CQ2IL9VX.js";import"./makeExternalStore-t469AycL.js";import"./Tooltip-C0_dK_lR.js";import"./PopoverPopup-CLmwgmKW.js";import"./debounce-DMOv5NrL.js";import"./useOsdkClient-DkQyt0z3.js";import"./tick-ByR4FmU5.js";import"./DropdownField-B3UK3okG.js";import"./isEqual-CPDtqAuK.js";import"./withOsdkMetrics-QZ1lgR_i.js";const or={title:"Components/ObjectTable/Features/Advanced",component:i,tags:["beta"],parameters:{msw:{handlers:[...p.handlers]},docs:{description:{component:"Exercises the full OSDK metadata → `useColumnDefs` → `renderDefaultCell` chain. The `Employee` mock includes a MANDATORY `classificationMarking` and a CBAC `clearanceMarking` array; `ObjectTable` reads `typeMetadata.markingType` from the wire metadata and routes each cell through the matching renderer (`CbacBanner` for CBAC, one banner per marking for MANDATORY)."}}}},r={args:{objectType:m,columnDefinitions:[{locator:{type:"property",id:"fullName"}},{locator:{type:"property",id:"department"}},{locator:{type:"property",id:"classificationMarking"}},{locator:{type:"property",id:"clearanceMarking"}}]},parameters:{docs:{source:{code:`const columnDefinitions = [
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
