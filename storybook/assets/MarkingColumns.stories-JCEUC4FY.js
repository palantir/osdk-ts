import{f as p,j as e}from"./iframe-CAO1B58s.js";import{O as i}from"./object-table-d1AklzUy.js";import{E as m}from"./Employee-BAk2o20h.js";import"./preload-helper-Dp1pzeXC.js";import"./Table-CvS8FU7B.js";import"./index-2SlFnaHE.js";import"./Dialog-BajRShuR.js";import"./cross-CLetBbcm.js";import"./svgIconContainer-M6SpqrlV.js";import"./useBaseUiId-D72lMfE_.js";import"./InternalBackdrop-CN2XFVRe.js";import"./composite-B06T-Azs.js";import"./index-CqYJuNzQ.js";import"./index-Dl9K5k5W.js";import"./index-DrLb19NA.js";import"./useEventCallback-BFrvc70H.js";import"./SkeletonBar-CKhg_xIZ.js";import"./LoadingCell-DpSjA57A.js";import"./ColumnConfigDialog-CNHqTBO9.js";import"./DraggableList-A-6hxvt-.js";import"./search-CpelYZyf.js";import"./Input-Z-O5GJkg.js";import"./useControlled-CMPDUvCd.js";import"./isEqual-CDSyWO-H.js";import"./isObject-DOOOShJo.js";import"./Button-Cpz-DPHy.js";import"./ActionButton-Dfye5dM1.js";import"./Checkbox-CRaDM2h7.js";import"./useValueChanged-Dd6Og4rm.js";import"./CollapsiblePanel-DJmpv6Yu.js";import"./MultiColumnSortDialog-3zOqwGU5.js";import"./MenuTrigger-BK4Dc-_7.js";import"./CompositeItem-BgYEKQXO.js";import"./ToolbarRootContext-BcxrhZv1.js";import"./getDisabledMountTransitionStyles-CR2Dsb_b.js";import"./getPseudoElementBounds-DpI9xC91.js";import"./chevron-down-p1qYsJXr.js";import"./index-D62FQFIO.js";import"./error-DCZY56Y1.js";import"./BaseCbacBanner-CMVLBd9d.js";import"./makeExternalStore-whgFatuo.js";import"./Tooltip-gkbvOz_7.js";import"./PopoverPopup-BAcjiyS8.js";import"./toNumber-BDArJ5Eh.js";import"./useOsdkClient-Bcf-xOjI.js";import"./tick-C11u5Lux.js";import"./DropdownField-CcY15Q6R.js";import"./withOsdkMetrics-CCe5tkcF.js";const or={title:"Components/ObjectTable/Features/Advanced",component:i,tags:["beta"],parameters:{msw:{handlers:[...p.handlers]},docs:{description:{component:"Exercises the full OSDK metadata → `useColumnDefs` → `renderDefaultCell` chain. The `Employee` mock includes a MANDATORY `classificationMarking` and a CBAC `clearanceMarking` array; `ObjectTable` reads `typeMetadata.markingType` from the wire metadata and routes each cell through the matching renderer (`CbacBanner` for CBAC, one banner per marking for MANDATORY)."}}}},r={args:{objectType:m,columnDefinitions:[{locator:{type:"property",id:"fullName"}},{locator:{type:"property",id:"department"}},{locator:{type:"property",id:"classificationMarking"}},{locator:{type:"property",id:"clearanceMarking"}}]},parameters:{docs:{source:{code:`const columnDefinitions = [
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
