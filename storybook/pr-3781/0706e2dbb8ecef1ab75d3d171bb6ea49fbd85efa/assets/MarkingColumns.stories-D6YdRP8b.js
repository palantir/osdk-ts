import{f as p,j as e}from"./iframe-CvtO4IMB.js";import{O as i}from"./object-table-DAwtM7LZ.js";import{E as m}from"./Employee-BAk2o20h.js";import"./preload-helper-BrvcVhe2.js";import"./Table-DOLAqO0k.js";import"./index-B_GzWBIK.js";import"./Dialog-D7OYP-dq.js";import"./cross-Odyniiv9.js";import"./svgIconContainer-CCvUYbsi.js";import"./useBaseUiId-Cttj69LG.js";import"./InternalBackdrop-C_JPQuma.js";import"./composite-jre0rmDk.js";import"./index-D86dfeRh.js";import"./index-B3UPezCW.js";import"./index-D10lt-2t.js";import"./useEventCallback-ZS4dwuNv.js";import"./SkeletonBar-dh8QhwTh.js";import"./LoadingCell-B8EBAx7k.js";import"./ColumnConfigDialog-DwtmwtSG.js";import"./DraggableList-Ccdp9-TJ.js";import"./search-CcdNkTVL.js";import"./Input-CZiCqG3l.js";import"./useControlled-DaXRoC7J.js";import"./isEqual-CH4q6F0W.js";import"./isObject-Dyg8l838.js";import"./Button-BGi-KOsB.js";import"./ActionButton-DwqtISZg.js";import"./Checkbox-BpcS_XKv.js";import"./useValueChanged-BqQd7JUI.js";import"./CollapsiblePanel-DpUk_I_t.js";import"./MultiColumnSortDialog-G06mBLA6.js";import"./MenuTrigger-BkAleJx0.js";import"./CompositeItem-BQrOCuSB.js";import"./ToolbarRootContext-D-1cr-4z.js";import"./getDisabledMountTransitionStyles-DoSX0V-e.js";import"./getPseudoElementBounds-D2XOf9CN.js";import"./chevron-down-C-SHqWoa.js";import"./index-D9z6kKbW.js";import"./error-Bz0GJG-G.js";import"./BaseCbacBanner-Us_BuLqF.js";import"./makeExternalStore-XAqN2zqJ.js";import"./Tooltip-Cn1_Mxal.js";import"./PopoverPopup-7xfh03GJ.js";import"./toNumber-RJZJcS_O.js";import"./useOsdkClient-DBTXLhaX.js";import"./tick-C_u5au6g.js";import"./DropdownField-CZ-LUhIW.js";import"./withOsdkMetrics-DEHLnQpj.js";const or={title:"Components/ObjectTable/Features/Advanced",component:i,tags:["beta"],parameters:{msw:{handlers:[...p.handlers]},docs:{description:{component:"Exercises the full OSDK metadata → `useColumnDefs` → `renderDefaultCell` chain. The `Employee` mock includes a MANDATORY `classificationMarking` and a CBAC `clearanceMarking` array; `ObjectTable` reads `typeMetadata.markingType` from the wire metadata and routes each cell through the matching renderer (`CbacBanner` for CBAC, one banner per marking for MANDATORY)."}}}},r={args:{objectType:m,columnDefinitions:[{locator:{type:"property",id:"fullName"}},{locator:{type:"property",id:"department"}},{locator:{type:"property",id:"classificationMarking"}},{locator:{type:"property",id:"clearanceMarking"}}]},parameters:{docs:{source:{code:`const columnDefinitions = [
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
