import{f as p,j as e}from"./iframe-hzfvyDmq.js";import{O as i}from"./object-table-DDyvSrvK.js";import{E as m}from"./Employee-BAk2o20h.js";import"./preload-helper-CdJNp2PB.js";import"./Table-S-qrfXrQ.js";import"./index-f5Cgh3Nq.js";import"./Dialog-CLxh-kiC.js";import"./cross-CRChT_Fc.js";import"./svgIconContainer-Cb51Sm7i.js";import"./useBaseUiId-DmC4LGoz.js";import"./InternalBackdrop-BkhlETTr.js";import"./composite-BH-1n-px.js";import"./index-B1JvKBAi.js";import"./index-BLrf7TRG.js";import"./index-ECL9pzkS.js";import"./useEventCallback-BVaqhbZv.js";import"./SkeletonBar-Cydm-_bj.js";import"./LoadingCell-CIwAhsfk.js";import"./ColumnConfigDialog-BHJtrFKi.js";import"./DraggableList-VIA38x-Z.js";import"./search-Cx-34oit.js";import"./Input-j4WQNWPZ.js";import"./useControlled-DAR7PUt5.js";import"./isEqual-B_G078b5.js";import"./isObject-OBBwB0n7.js";import"./Button-B5teW1fu.js";import"./ActionButton-BhhnarQt.js";import"./Checkbox-CHj0Mzen.js";import"./useValueChanged-DaH9it3g.js";import"./CollapsiblePanel-DK_WmK5Z.js";import"./MultiColumnSortDialog-DGuzWOGX.js";import"./MenuTrigger-D9MLuSAC.js";import"./CompositeItem-CjjHoPXP.js";import"./ToolbarRootContext-BGTK6XuR.js";import"./getDisabledMountTransitionStyles-Dr6IxA0r.js";import"./getPseudoElementBounds-DMqUJd8Q.js";import"./chevron-down-CrjOKJrn.js";import"./index-DO9rqWWH.js";import"./error-D9W8A-KQ.js";import"./BaseCbacBanner-RGAxCGDZ.js";import"./makeExternalStore-DOrHHMWU.js";import"./Tooltip-DcRW6kP6.js";import"./PopoverPopup-Bdz3Tdg1.js";import"./toNumber-BII_8Zj6.js";import"./useOsdkClient-BROt0Prz.js";import"./tick-BCoclWAx.js";import"./DropdownField-BhHBwio3.js";import"./withOsdkMetrics-u8-t1UQo.js";const or={title:"Components/ObjectTable/Features/Advanced",component:i,tags:["beta"],parameters:{msw:{handlers:[...p.handlers]},docs:{description:{component:"Exercises the full OSDK metadata → `useColumnDefs` → `renderDefaultCell` chain. The `Employee` mock includes a MANDATORY `classificationMarking` and a CBAC `clearanceMarking` array; `ObjectTable` reads `typeMetadata.markingType` from the wire metadata and routes each cell through the matching renderer (`CbacBanner` for CBAC, one banner per marking for MANDATORY)."}}}},r={args:{objectType:m,columnDefinitions:[{locator:{type:"property",id:"fullName"}},{locator:{type:"property",id:"department"}},{locator:{type:"property",id:"classificationMarking"}},{locator:{type:"property",id:"clearanceMarking"}}]},parameters:{docs:{source:{code:`const columnDefinitions = [
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
