import{f as p,j as e}from"./iframe-sWXw0paa.js";import{O as i}from"./object-table-BXvQszR7.js";import{E as m}from"./Employee-BAk2o20h.js";import"./preload-helper-Dp1pzeXC.js";import"./Table-O7xlSRT-.js";import"./index-COXIAl6B.js";import"./Dialog-CeWSHDHa.js";import"./cross-Ci5p4MdC.js";import"./svgIconContainer-CcTjygR-.js";import"./useBaseUiId-JcRrdfwu.js";import"./InternalBackdrop-BXYp--7t.js";import"./composite-DkaDsYOf.js";import"./index-mSr7oA2b.js";import"./index-DDYmgTwS.js";import"./index-HUQEGd66.js";import"./useEventCallback-DXQZrzVA.js";import"./SkeletonBar-Bku-LFTg.js";import"./LoadingCell-DS9qTbLC.js";import"./ColumnConfigDialog-_DxUMmJY.js";import"./DraggableList-YRavkhGz.js";import"./search-Bsjz8L6Y.js";import"./Input-gZgAwopS.js";import"./useControlled-B82lWbcA.js";import"./isEqual-BbXzwKbb.js";import"./isObject-B7XhQLc4.js";import"./Button-Q5pECRtn.js";import"./ActionButton-CHpoC4Um.js";import"./Checkbox-ChQppIBP.js";import"./useValueChanged-CwbfftIM.js";import"./CollapsiblePanel-DaGA7wuX.js";import"./MultiColumnSortDialog-C2k3SZVe.js";import"./MenuTrigger-BzMp5IKN.js";import"./CompositeItem-DeOncA4j.js";import"./ToolbarRootContext-DLkg6cV0.js";import"./getDisabledMountTransitionStyles-GeQbqOI7.js";import"./getPseudoElementBounds-DmCRZaYU.js";import"./chevron-down-CTbS8u6n.js";import"./index-DGkFQZVQ.js";import"./error-CibIcrEX.js";import"./BaseCbacBanner-CCDF8TdQ.js";import"./makeExternalStore-DEwyoj8c.js";import"./Tooltip-vLDwN7WM.js";import"./PopoverPopup-CUhLj4ET.js";import"./toNumber-CzBpRHoP.js";import"./useOsdkClient-Dr0RYx29.js";import"./tick-BJDZojPY.js";import"./DropdownField-CxMpcTlk.js";import"./withOsdkMetrics-CfavPITI.js";const or={title:"Components/ObjectTable/Features",component:i,tags:["beta"],parameters:{msw:{handlers:[...p.handlers]},docs:{description:{component:"Exercises the full OSDK metadata → `useColumnDefs` → `renderDefaultCell` chain. The `Employee` mock includes a MANDATORY `classificationMarking` and a CBAC `clearanceMarking` array; `ObjectTable` reads `typeMetadata.markingType` from the wire metadata and routes each cell through the matching renderer (`CbacBanner` for CBAC, one banner per marking for MANDATORY)."}}}},r={args:{objectType:m,columnDefinitions:[{locator:{type:"property",id:"fullName"}},{locator:{type:"property",id:"department"}},{locator:{type:"property",id:"classificationMarking"}},{locator:{type:"property",id:"clearanceMarking"}}]},parameters:{docs:{source:{code:`const columnDefinitions = [
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
