import{f as n,j as t}from"./iframe-FIKeu7rC.js";import{O as p}from"./object-table-CdXKvJ5t.js";import{E as m}from"./Employee-BAk2o20h.js";import"./preload-helper-BYmwUabe.js";import"./Table-BtZYnuGk.js";import"./index-C8m-l_2B.js";import"./Dialog-CkLfXHAh.js";import"./cross-BvZ8T6Jx.js";import"./svgIconContainer-Btl_W2rg.js";import"./useBaseUiId-BHBJwszI.js";import"./InternalBackdrop-BOOfo-bC.js";import"./composite-FkhmDVAb.js";import"./index-fEwkxJCO.js";import"./index-DY_9CGdP.js";import"./index-BLiDqqII.js";import"./useEventCallback-BV81OWo6.js";import"./SkeletonBar-CVfh3EAr.js";import"./LoadingCell-a44lpMWC.js";import"./ColumnConfigDialog-DLMLhCOw.js";import"./DraggableList-B6-G5PLg.js";import"./search-_Y49WGbC.js";import"./Input-BxhzS_7f.js";import"./useControlled-VBj-g8FR.js";import"./Button-MV80I6nm.js";import"./small-cross-CqTYJvof.js";import"./ActionButton-BrNi7hJW.js";import"./Checkbox-JZvdgfQN.js";import"./minus-DE2Oc8L6.js";import"./tick-aQ3qzWOQ.js";import"./useValueChanged-DjD5OvVD.js";import"./caret-down-DZP6xskg.js";import"./CollapsiblePanel-spUL4ueS.js";import"./MultiColumnSortDialog-IE8p-488.js";import"./MenuTrigger-BVvJEou5.js";import"./CompositeItem-b0s0-9xu.js";import"./ToolbarRootContext-DxDDBzph.js";import"./getDisabledMountTransitionStyles-C1qVqbDU.js";import"./getPseudoElementBounds-UuzVbI_D.js";import"./chevron-down-afmMEC7e.js";import"./index-B_zCYSJl.js";import"./error-eMCCINaW.js";import"./BaseCbacBanner-BLWxsk10.js";import"./makeExternalStore-BhxepKXE.js";import"./Tooltip-CR7Qwzzm.js";import"./PopoverPopup-DMaPjTh1.js";import"./toNumber-CDiW1XSa.js";import"./useOsdkClient-ByfVn-0v.js";import"./DropdownField-WMfFlAFE.js";import"./withOsdkMetrics-CgsmUUPG.js";const ir={title:"Components/ObjectTable/Features",component:p,tags:["beta"],parameters:{msw:{handlers:[...n.handlers]},docs:{description:{component:"Exercises the full OSDK metadata → `useColumnDefs` → `renderDefaultCell` chain. The `Employee` mock includes a MANDATORY `classificationMarking` and a CBAC `clearanceMarking` array; `ObjectTable` reads `typeMetadata.markingType` from the wire metadata and routes each cell through the matching renderer (`CbacBanner` for CBAC, one banner per marking for MANDATORY)."}}}},r={args:{objectType:m,columnDefinitions:[{locator:{type:"property",id:"fullName"}},{locator:{type:"property",id:"department"}},{locator:{type:"property",id:"classificationMarking"}},{locator:{type:"property",id:"clearanceMarking"}}]},render:a=>t.jsx("div",{style:{height:480},children:t.jsx(p,{...a})})};var o,e,i;r.parameters={...r.parameters,docs:{...(o=r.parameters)==null?void 0:o.docs,source:{originalSource:`{
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
}`,...(i=(e=r.parameters)==null?void 0:e.docs)==null?void 0:i.source}}};const pr=["MarkingColumns"];export{r as MarkingColumns,pr as __namedExportsOrder,ir as default};
