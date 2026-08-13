import{f as p,j as e}from"./iframe-CyuT7sA8.js";import{O as i}from"./object-table-Aj5fVVVg.js";import{E as m}from"./Employee-BAk2o20h.js";import"./preload-helper-96BDXHaD.js";import"./Table-Du0o3kik.js";import"./index-C_6jq-CI.js";import"./Dialog-Cv_z4LDg.js";import"./cross-C5JPqzj3.js";import"./svgIconContainer-CaGNr8BU.js";import"./useBaseUiId-B5H6aoGe.js";import"./InternalBackdrop-CURFRzbw.js";import"./composite-CZN4L-Em.js";import"./index-C900sVPn.js";import"./index-BUf8UOrQ.js";import"./index-BACbzGM8.js";import"./useEventCallback-DmUbzO5M.js";import"./SkeletonBar-DEZz7Qea.js";import"./LoadingCell-BjpJ1NOX.js";import"./ColumnConfigDialog-2mIqR4x3.js";import"./DraggableList-D6Hkxnmk.js";import"./search-CKTNg7RE.js";import"./Input-KCuhgloF.js";import"./useControlled-CNQ4xPOD.js";import"./isEqual-BynPMucz.js";import"./isObject-C3_lsIkh.js";import"./Button-DEJD33aj.js";import"./ActionButton-DbRmvcNY.js";import"./Checkbox-BVUYdzSe.js";import"./useValueChanged-DatrXVPa.js";import"./CollapsiblePanel-CSABs0sQ.js";import"./MultiColumnSortDialog-DkS8JuZG.js";import"./MenuTrigger-BXMGENMv.js";import"./CompositeItem-DgOyYKdv.js";import"./ToolbarRootContext-D-yYDS8o.js";import"./getDisabledMountTransitionStyles-DiozD-9r.js";import"./getPseudoElementBounds-X2hHhho1.js";import"./chevron-down-DH6c9NVt.js";import"./index-DhRjIIVJ.js";import"./error-wRnolQK2.js";import"./BaseCbacBanner-Dcnep55n.js";import"./makeExternalStore-vHKDZBeW.js";import"./Tooltip-7QjXpwTd.js";import"./PopoverPopup-DsPbQxq-.js";import"./debounce-WsUiF9L6.js";import"./useOsdkClient-DfOiBBAH.js";import"./tick-DAlwGaLf.js";import"./DropdownField-CjJ4hYdn.js";import"./withOsdkMetrics-dgGlVNih.js";const or={title:"Components/ObjectTable/Features/Advanced",component:i,tags:["beta"],parameters:{msw:{handlers:[...p.handlers]},docs:{description:{component:"Exercises the full OSDK metadata → `useColumnDefs` → `renderDefaultCell` chain. The `Employee` mock includes a MANDATORY `classificationMarking` and a CBAC `clearanceMarking` array; `ObjectTable` reads `typeMetadata.markingType` from the wire metadata and routes each cell through the matching renderer (`CbacBanner` for CBAC, one banner per marking for MANDATORY)."}}}},r={args:{objectType:m,columnDefinitions:[{locator:{type:"property",id:"fullName"}},{locator:{type:"property",id:"department"}},{locator:{type:"property",id:"classificationMarking"}},{locator:{type:"property",id:"clearanceMarking"}}]},parameters:{docs:{source:{code:`const columnDefinitions = [
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
