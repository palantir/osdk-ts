import{f as n,j as t}from"./iframe-4AGo0fHF.js";import{O as p}from"./object-table-Cbjx-ZUk.js";import{E as m}from"./Employee-BAk2o20h.js";import"./preload-helper-BDAIYRA_.js";import"./Table-BLCF-iqT.js";import"./index-rqNsdX2H.js";import"./Dialog-BTy10SoX.js";import"./cross-B1_QLOud.js";import"./svgIconContainer-DuDvRxIP.js";import"./useBaseUiId-d_edq7Dv.js";import"./InternalBackdrop-B5Iy0lGE.js";import"./composite-BDe51bb2.js";import"./index-BLXYd6dz.js";import"./index-CaPMxUJ3.js";import"./index-DzzigdXq.js";import"./useEventCallback-BS1yTetA.js";import"./SkeletonBar-CxLr-0WP.js";import"./LoadingCell-Da6C7tef.js";import"./ColumnConfigDialog-vKLinxH-.js";import"./DraggableList-D4VQMzWc.js";import"./search-ATPUGaQZ.js";import"./Input-D2Q3J8aS.js";import"./useControlled-CsCWmXvE.js";import"./Button-D2xhFlGw.js";import"./small-cross-F2kjXfbX.js";import"./ActionButton-CnNqhyKE.js";import"./Checkbox-DZZw4HKe.js";import"./useValueChanged-CyANjxsT.js";import"./CollapsiblePanel-B64W-q5N.js";import"./MultiColumnSortDialog-Dt1aPuNt.js";import"./MenuTrigger-B18yJZ1y.js";import"./CompositeItem-CM84FkA3.js";import"./ToolbarRootContext-X15TOm6A.js";import"./getDisabledMountTransitionStyles-Bkse61JI.js";import"./getPseudoElementBounds-DJa8rKSZ.js";import"./chevron-down-BL45Hv7R.js";import"./index-J_OTmZ_H.js";import"./error-ikfBFfix.js";import"./BaseCbacBanner-CC9SNwDA.js";import"./makeExternalStore-CgN71ky-.js";import"./Tooltip-Du7ikPNT.js";import"./PopoverPopup-Dn1H88L0.js";import"./toNumber-BhaSdtQz.js";import"./useOsdkClient-D-UojcDm.js";import"./tick-Dzc0l5DV.js";import"./DropdownField-DUSwCxwp.js";import"./withOsdkMetrics-BP43R-Ep.js";const or={title:"Components/ObjectTable/Features",component:p,tags:["beta"],parameters:{msw:{handlers:[...n.handlers]},docs:{description:{component:"Exercises the full OSDK metadata → `useColumnDefs` → `renderDefaultCell` chain. The `Employee` mock includes a MANDATORY `classificationMarking` and a CBAC `clearanceMarking` array; `ObjectTable` reads `typeMetadata.markingType` from the wire metadata and routes each cell through the matching renderer (`CbacBanner` for CBAC, one banner per marking for MANDATORY)."}}}},r={args:{objectType:m,columnDefinitions:[{locator:{type:"property",id:"fullName"}},{locator:{type:"property",id:"department"}},{locator:{type:"property",id:"classificationMarking"}},{locator:{type:"property",id:"clearanceMarking"}}]},render:a=>t.jsx("div",{style:{height:480},children:t.jsx(p,{...a})})};var o,e,i;r.parameters={...r.parameters,docs:{...(o=r.parameters)==null?void 0:o.docs,source:{originalSource:`{
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
  render: args => <div style={{
    height: 480
  }}>
      <ObjectTable {...args} />
    </div>
}`,...(i=(e=r.parameters)==null?void 0:e.docs)==null?void 0:i.source}}};const er=["MarkingColumns"];export{r as MarkingColumns,er as __namedExportsOrder,or as default};
