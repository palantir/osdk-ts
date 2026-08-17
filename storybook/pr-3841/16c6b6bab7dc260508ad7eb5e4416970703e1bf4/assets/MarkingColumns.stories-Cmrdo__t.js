import{f as p,j as e}from"./iframe-B_3axEb_.js";import{O as i}from"./object-table-B350mcID.js";import{E as m}from"./Employee-BAk2o20h.js";import"./preload-helper-DVqF28Ob.js";import"./Table-qqzJxnMW.js";import"./index-WEswkdDQ.js";import"./Dialog-BtD6-2x7.js";import"./cross-COAB99ba.js";import"./svgIconContainer-Czb_u-B5.js";import"./useBaseUiId-mpVzZFod.js";import"./InternalBackdrop-CU6NWctY.js";import"./composite-k-oOtUOi.js";import"./index-BKGrISX8.js";import"./index-CV1QoXoI.js";import"./index-CsdjTlt6.js";import"./useEventCallback-DHGnwxNq.js";import"./SkeletonBar-7TcvHUms.js";import"./LoadingCell-BjRnr67f.js";import"./ColumnConfigDialog-B7-4JAIj.js";import"./DraggableList-L0zoz04e.js";import"./search-ClKVrDOr.js";import"./Input-BW6cPiJ8.js";import"./useControlled-DTpKBlZ0.js";import"./isEqual-ngVEl8Iu.js";import"./isObject-Dvc6D_PF.js";import"./Button-DViZAK3b.js";import"./ActionButton-CbwSb28k.js";import"./Checkbox-BDoaJcsA.js";import"./useValueChanged-CKmRTz9a.js";import"./CollapsiblePanel-CK4QXkOk.js";import"./MultiColumnSortDialog-EimSJagl.js";import"./MenuTrigger-D4X5URYr.js";import"./CompositeItem-BlbWDaOA.js";import"./ToolbarRootContext-D_DYze3I.js";import"./getDisabledMountTransitionStyles-SdFs7Ni0.js";import"./getPseudoElementBounds-DCzcjL9w.js";import"./chevron-down-DTB5Dfny.js";import"./index-DEGqs32K.js";import"./error-D2oTkGBT.js";import"./BaseCbacBanner-DShWLu3D.js";import"./makeExternalStore-C5zmjuzo.js";import"./Tooltip-BEIyqKN6.js";import"./PopoverPopup-yq2RTqAV.js";import"./toNumber-QrJPlThZ.js";import"./useOsdkClient-Dq0jfxt7.js";import"./tick-CkQdEScK.js";import"./DropdownField-CuTu35Y7.js";import"./withOsdkMetrics-DhHbJQbZ.js";const or={title:"Components/ObjectTable/Features/Advanced",component:i,tags:["beta"],parameters:{msw:{handlers:[...p.handlers]},docs:{description:{component:"Exercises the full OSDK metadata → `useColumnDefs` → `renderDefaultCell` chain. The `Employee` mock includes a MANDATORY `classificationMarking` and a CBAC `clearanceMarking` array; `ObjectTable` reads `typeMetadata.markingType` from the wire metadata and routes each cell through the matching renderer (`CbacBanner` for CBAC, one banner per marking for MANDATORY)."}}}},r={args:{objectType:m,columnDefinitions:[{locator:{type:"property",id:"fullName"}},{locator:{type:"property",id:"department"}},{locator:{type:"property",id:"classificationMarking"}},{locator:{type:"property",id:"clearanceMarking"}}]},parameters:{docs:{source:{code:`const columnDefinitions = [
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
