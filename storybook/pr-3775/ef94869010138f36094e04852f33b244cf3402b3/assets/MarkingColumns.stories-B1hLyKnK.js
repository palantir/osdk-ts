import{f as p,j as e}from"./iframe-CjguFHy4.js";import{O as i}from"./object-table-BtuqOo-1.js";import{E as m}from"./Employee-BAk2o20h.js";import"./preload-helper-LDqCwxAd.js";import"./Table-_ZnYlHIw.js";import"./index-BB032sbZ.js";import"./Dialog-B9J_G6l0.js";import"./cross-D1aOBf9U.js";import"./svgIconContainer-BZwzEo8G.js";import"./useBaseUiId-CgMNdHCe.js";import"./InternalBackdrop-DizbYCRP.js";import"./composite-Dx3ugufv.js";import"./index-BIFsH4xl.js";import"./index-C0VOKt8s.js";import"./index--EMP8S_8.js";import"./useEventCallback-5iqVINQW.js";import"./SkeletonBar-DblXaHNi.js";import"./LoadingCell-mjEtb5oo.js";import"./ColumnConfigDialog-DJeUgPPb.js";import"./DraggableList-BiHAyTPo.js";import"./search-PZYHdBYN.js";import"./Input-DSfygnqR.js";import"./useControlled-CjqkuBBy.js";import"./isEqual-XSvwjyBd.js";import"./isObject-lWDz75CT.js";import"./Button-D0KOIrm4.js";import"./ActionButton-CFH3DEk_.js";import"./Checkbox-CjvWoFfH.js";import"./useValueChanged-b9wcCC3s.js";import"./CollapsiblePanel-D-JMcXqs.js";import"./MultiColumnSortDialog-BOja1Xix.js";import"./MenuTrigger-B84dkc4t.js";import"./CompositeItem-DupF21ys.js";import"./ToolbarRootContext-Cc_rTViK.js";import"./getDisabledMountTransitionStyles-CzI3UF-F.js";import"./getPseudoElementBounds-Ds9Y3NYO.js";import"./chevron-down-ZzrJRIAu.js";import"./index-3HrMLGVC.js";import"./error-C_FLUo1p.js";import"./BaseCbacBanner-CuPOOH0I.js";import"./makeExternalStore-DL1G6fQU.js";import"./Tooltip-HAHLZ6Nc.js";import"./PopoverPopup-n4w7Qhj9.js";import"./toNumber-CI_cbj49.js";import"./useOsdkClient-4R8IZiTA.js";import"./tick-qr3TS1uB.js";import"./DropdownField-34nprrOE.js";import"./withOsdkMetrics-fD7F6GVF.js";const or={title:"Components/ObjectTable/Features/Advanced",component:i,tags:["beta"],parameters:{msw:{handlers:[...p.handlers]},docs:{description:{component:"Exercises the full OSDK metadata → `useColumnDefs` → `renderDefaultCell` chain. The `Employee` mock includes a MANDATORY `classificationMarking` and a CBAC `clearanceMarking` array; `ObjectTable` reads `typeMetadata.markingType` from the wire metadata and routes each cell through the matching renderer (`CbacBanner` for CBAC, one banner per marking for MANDATORY)."}}}},r={args:{objectType:m,columnDefinitions:[{locator:{type:"property",id:"fullName"}},{locator:{type:"property",id:"department"}},{locator:{type:"property",id:"classificationMarking"}},{locator:{type:"property",id:"clearanceMarking"}}]},parameters:{docs:{source:{code:`const columnDefinitions = [
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
