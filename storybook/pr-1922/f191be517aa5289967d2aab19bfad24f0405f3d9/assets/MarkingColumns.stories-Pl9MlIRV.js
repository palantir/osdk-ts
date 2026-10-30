import{f as p,j as e}from"./iframe-B-n5uLkA.js";import{O as i}from"./object-table-DpR_3wrC.js";import{E as m}from"./Employee-BAk2o20h.js";import"./preload-helper-vxu-jvpO.js";import"./Table-DJglKLQw.js";import"./index-r9aFA9c6.js";import"./Dialog-DJz7Ov-G.js";import"./cross-CzzoI-Me.js";import"./svgIconContainer-BAP4xquW.js";import"./useBaseUiId-Cx3-H6q7.js";import"./InternalBackdrop-DE5d7cjQ.js";import"./composite-CcnMcVoq.js";import"./index-AEeSb7o4.js";import"./index-DKaYQA5S.js";import"./index-CWueSEk2.js";import"./useEventCallback-Cug5Ejgk.js";import"./SkeletonBar-Cy7lWMxB.js";import"./LoadingCell-DR7WlWbN.js";import"./ColumnConfigDialog-BhU-gVnl.js";import"./DraggableList-C1OCbizh.js";import"./search-DCVRYddG.js";import"./Input-LcpenwpJ.js";import"./useControlled-Bce4MQ3D.js";import"./Button-Cxizrf8Y.js";import"./small-cross-xC3C54Po.js";import"./ActionButton-D2uNXT3k.js";import"./Checkbox-CIUBwDNv.js";import"./useValueChanged-DWhuyL2N.js";import"./CollapsiblePanel-D3r1-b_X.js";import"./MultiColumnSortDialog-R4zjE0hh.js";import"./MenuTrigger-BQhRZlK9.js";import"./CompositeItem-Brq4Jfrc.js";import"./ToolbarRootContext-pXgQ7_Yk.js";import"./getDisabledMountTransitionStyles-BWEZuvfD.js";import"./getPseudoElementBounds-DNbnatNp.js";import"./chevron-down-COZB8m2A.js";import"./index-B0qRo9vw.js";import"./error-ctHtVSzl.js";import"./BaseCbacBanner-Ck12EOP4.js";import"./makeExternalStore-CWIwlctc.js";import"./Tooltip-f4HmeV3o.js";import"./PopoverPopup-BoLWF4qb.js";import"./debounce-H1RiGpm9.js";import"./useOsdkClient-CDqx5dcV.js";import"./tick-DdfGjDes.js";import"./DropdownField-BoiijBdj.js";import"./isEqual-DdqzM83-.js";import"./withOsdkMetrics-BSpJ8hG-.js";const or={title:"Components/ObjectTable/Features/Advanced",component:i,tags:["beta"],parameters:{msw:{handlers:[...p.handlers]},docs:{description:{component:"Exercises the full OSDK metadata → `useColumnDefs` → `renderDefaultCell` chain. The `Employee` mock includes a MANDATORY `classificationMarking` and a CBAC `clearanceMarking` array; `ObjectTable` reads `typeMetadata.markingType` from the wire metadata and routes each cell through the matching renderer (`CbacBanner` for CBAC, one banner per marking for MANDATORY)."}}}},r={args:{objectType:m,columnDefinitions:[{locator:{type:"property",id:"fullName"}},{locator:{type:"property",id:"department"}},{locator:{type:"property",id:"classificationMarking"}},{locator:{type:"property",id:"clearanceMarking"}}]},parameters:{docs:{source:{code:`const columnDefinitions = [
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
