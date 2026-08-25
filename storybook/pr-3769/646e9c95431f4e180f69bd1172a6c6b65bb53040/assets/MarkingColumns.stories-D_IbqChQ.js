import{f as p,j as e}from"./iframe-Dz1VB-Ug.js";import{O as i}from"./object-table-BaVt1PJE.js";import{E as m}from"./Employee-BAk2o20h.js";import"./preload-helper-cJTn69LB.js";import"./Table-CDep-vX1.js";import"./index-DpMaRJGq.js";import"./Dialog-BSe_V3kU.js";import"./cross-BHVqJpxe.js";import"./svgIconContainer-D2McpvpD.js";import"./useBaseUiId-DBeQxEGH.js";import"./InternalBackdrop-DFd25Tom.js";import"./composite-DFM5sFvF.js";import"./index-BrZlGDbg.js";import"./index-B09TTsrW.js";import"./index-CBxyclgJ.js";import"./useEventCallback-Co8DaEHE.js";import"./SkeletonBar-D5gnK4Nn.js";import"./LoadingCell-DTNteS0e.js";import"./ColumnConfigDialog-Du9Krsdc.js";import"./DraggableList-Bcfu7StV.js";import"./search-CkZGsmzb.js";import"./Input-BVvBS9l5.js";import"./useControlled-qV-s3roQ.js";import"./Button-CXoONGN_.js";import"./small-cross-ZF88MpRa.js";import"./ActionButton-BvfsH6QL.js";import"./Checkbox-C38CRGr-.js";import"./useValueChanged-C5v-AM3H.js";import"./CollapsiblePanel-DEVuWmUh.js";import"./MultiColumnSortDialog-DuAwsl_j.js";import"./MenuTrigger-BsxyDBhs.js";import"./CompositeItem-CtgUzBYo.js";import"./ToolbarRootContext-CfOvFLMo.js";import"./getDisabledMountTransitionStyles-DZer-X4G.js";import"./getPseudoElementBounds-CGtNbmZa.js";import"./chevron-down-MQzS0zY-.js";import"./index-CX5UJqJP.js";import"./error-DU1smNA0.js";import"./BaseCbacBanner-DDKG5AVP.js";import"./makeExternalStore-BALv-RXc.js";import"./Tooltip-CL5hRyRF.js";import"./PopoverPopup-DwNORN_q.js";import"./debounce-AC8pwCKA.js";import"./useOsdkClient-yUbLwWQs.js";import"./tick-DIC-WOhq.js";import"./DropdownField-C1qVSNaq.js";import"./isEqual-BXcx9b1w.js";import"./withOsdkMetrics-CSiTUGv5.js";const or={title:"Components/ObjectTable/Features/Advanced",component:i,tags:["beta"],parameters:{msw:{handlers:[...p.handlers]},docs:{description:{component:"Exercises the full OSDK metadata → `useColumnDefs` → `renderDefaultCell` chain. The `Employee` mock includes a MANDATORY `classificationMarking` and a CBAC `clearanceMarking` array; `ObjectTable` reads `typeMetadata.markingType` from the wire metadata and routes each cell through the matching renderer (`CbacBanner` for CBAC, one banner per marking for MANDATORY)."}}}},r={args:{objectType:m,columnDefinitions:[{locator:{type:"property",id:"fullName"}},{locator:{type:"property",id:"department"}},{locator:{type:"property",id:"classificationMarking"}},{locator:{type:"property",id:"clearanceMarking"}}]},parameters:{docs:{source:{code:`const columnDefinitions = [
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
