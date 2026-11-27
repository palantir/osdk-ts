import{r as m,R as p,j as n}from"./iframe-BKkgtFSo.js";import{c as b}from"./index-Dvbp0kPd.js";import{E as R}from"./Employee-BAk2o20h.js";import{R as x,f as h,N as j,u as O,g as A,a as v,F as L,b as B}from"./getFilterLabel-BmWv1IVr.js";import{P as w,a as D,b as G,c as H,d as M}from"./PopoverPopup-Dkt2NgPN.js";import{a as z}from"./assertUnreachable-tCT10eXl.js";import{f as V}from"./Select-CQIz6wip.js";import"./preload-helper-Dp1pzeXC.js";import"./cross-5K119jUx.js";import"./svgIconContainer-Ce9VGxQH.js";import"./chevron-down-C5BYt7gU.js";import"./tick-Ch6cMwoK.js";import"./search-VxZ7VsjM.js";import"./MenuTrigger-B3ghwpLY.js";import"./useBaseUiId-BfmvZ33T.js";import"./CompositeItem-B3A9StDG.js";import"./ToolbarRootContext-CGelScnS.js";import"./composite-CVFofIE7.js";import"./InternalBackdrop-BpRAUWPw.js";import"./index-CNoy-iis.js";import"./index-BDs07rBu.js";import"./index-1AbeELNr.js";import"./getDisabledMountTransitionStyles-X8rUrkvt.js";import"./getPseudoElementBounds-C1szzxdu.js";import"./Button-D0Mtf1Wu.js";import"./Input-ajiamWew.js";import"./useControlled-CiCRPIrb.js";import"./Switch-DG3faCiG.js";import"./CompositeRoot-9HaszsTh.js";import"./useValueChanged-BVys5dm-.js";import"./index-DcsZkrax.js";import"./index-6As_0jJu.js";import"./small-cross-D5_9Jwec.js";import"./Checkbox-BRVfPQgc.js";import"./SkeletonBar-DCi4lVfd.js";import"./makeExternalStore-Qrh_OJH6.js";import"./stableSerialize-D_7L0Ei9.js";import"./isEqual-COOSB5_T.js";import"./_baseIsEqual-D4aVuU6Y.js";import"./useOsdkClient-DFktUr12.js";const u={fieldGroup:"FilterPopover-module__fieldGroup___bJI9x6iw",fieldGroupTop:"FilterPopover-module__fieldGroupTop___UWVRmF6q",label:"FilterPopover-module__label___8EBeHiOL",trigger:"FilterPopover-module__trigger___BoaZtsHJ",summary:"FilterPopover-module__summary___WuTTkUvW",placeholder:"FilterPopover-module__placeholder___xMU4srnZ",removeButton:"FilterPopover-module__removeButton___7umI8EDc",popup:"FilterPopover-module__popup___-BVwuze4"};function U({label:t,summary:e,isActive:r,onRemove:o,children:i,className:s,placeholder:l="Any",labelPlacement:a="inline"}){const[d,_]=m.useState(!1),T=e!=="",I=m.useCallback(N=>{N.stopPropagation(),o==null||o()},[o]);return p.createElement(w,{open:d,onOpenChange:_},p.createElement("span",{className:b(u.fieldGroup,a==="top"&&u.fieldGroupTop,s)},p.createElement("span",{className:u.label},t),p.createElement(D,{className:u.trigger,"data-active":r?"true":void 0},p.createElement("span",{className:b(u.summary,!T&&u.placeholder)},T?e:l)),o&&p.createElement("button",{type:"button",onClick:I,className:u.removeButton,"aria-label":`Remove ${t} filter`},p.createElement(x,null))),p.createElement(G,null,p.createElement(H,{sideOffset:4,align:"start"},p.createElement(M,{className:u.popup},i))))}const W=m.memo(U),f="—",Y="(No value)",$="(empty string)";function E(t,e){if(t.length===0)return"";if(t.length>1)return`${t.length} selected`;const r=t[0];return r instanceof Date?e(r):r==null||r===j?Y:r===""?$:String(r)}function F(t,e,r,o,i){return`${t!=null?r(t):o} – ${e!=null?r(e):i}`}function k(t,e){if(e==null)return"";const r="formatDate"in t&&t.formatDate?t.formatDate:V;switch(e.type){case"EXACT_MATCH":return E(e.values,r);case"SELECT":return E(e.selectedValues,r);case"CONTAINS_TEXT":return e.value??"";case"NUMBER_RANGE":{const{minValue:o,maxValue:i,includeNull:s}=e;return o==null&&i==null?s?"Includes empty":"":F(o,i,String,"−∞","∞")}case"DATE_RANGE":{if(e.relativeState!=null){const l=e.relativeState.relativeMin?h(e.relativeState.relativeMin):"Indefinitely",a=e.relativeState.relativeMax?h(e.relativeState.relativeMax):"Indefinitely";return`${l} – ${a}`}const{minValue:o,maxValue:i,includeNull:s}=e;return o==null&&i==null?s?"Includes empty":"":F(o,i,r,f,f)}case"TIMELINE":{const{startDate:o,endDate:i}=e;return o==null&&i==null?"":F(o,i,r,f,f)}case"TOGGLE":return e.enabled?"Enabled":"";case"hasLink":return e.hasLink?e.isExcluding?"Not linked":"Linked":"";case"linkedProperty":return k(t,e.linkedFilterState);case"keywordSearch":return e.searchTerm??"";case"custom":return"Custom";default:return z(e)}}const X="_toolbar_1f5ug_17",J="_iconButton_1f5ug_27",K="_iconButtonGroup_1f5ug_41",Z="_layersButton_1f5ug_49",q="_inlineFieldGroup_1f5ug_54",Q="_label_1f5ug_61",ee="_inlineInputWrapper_1f5ug_68",c={toolbar:X,iconButton:J,iconButtonGroup:K,layersButton:Z,inlineFieldGroup:q,label:Q,inlineInputWrapper:ee},te={type:"PROPERTY",id:"locationCity",key:"locationCity",label:"Sites",filterComponent:"MULTI_SELECT"},re={type:"PROPERTY",id:"department",key:"department",label:"Specialties",filterComponent:"MULTI_SELECT"},ne={type:"PROPERTY",id:"fullName",key:"fullName",label:"Consultants",filterComponent:"CONTAINS_TEXT"},oe=[te,re,ne],ie={};function le(){return n.jsxs("svg",{width:"14",height:"14",viewBox:"0 0 16 16",fill:"currentColor",children:[n.jsx("path",{d:"M8 5.5a2.5 2.5 0 1 0 0 5 2.5 2.5 0 0 0 0-5zM6.5 8a1.5 1.5 0 1 1 3 0 1.5 1.5 0 0 1-3 0z"}),n.jsx("path",{d:"M9.4 1.6a1 1 0 0 0-1.9 0l-.2.7a6 6 0 0 0-1.1.4l-.6-.4a1 1 0 0 0-1.4 1.4l.4.6a6 6 0 0 0-.4 1.1l-.7.2a1 1 0 0 0 0 1.9l.7.2c.1.4.2.8.4 1.1l-.4.6a1 1 0 0 0 1.4 1.4l.6-.4c.4.2.7.3 1.1.4l.2.7a1 1 0 0 0 1.9 0l.2-.7c.4-.1.8-.2 1.1-.4l.6.4a1 1 0 0 0 1.4-1.4l-.4-.6c.2-.4.3-.7.4-1.1l.7-.2a1 1 0 0 0 0-1.9l-.7-.2a6 6 0 0 0-.4-1.1l.4-.6a1 1 0 0 0-1.4-1.4l-.6.4a6 6 0 0 0-1.1-.4l-.2-.7z"})]})}function ae(){return n.jsxs("svg",{width:"14",height:"14",viewBox:"0 0 16 16",fill:"none",children:[n.jsx("circle",{cx:"8",cy:"8",r:"6.5",stroke:"currentColor",strokeWidth:"1.2"}),n.jsx("path",{d:"M8 4.5V8L10.5 9.5",stroke:"currentColor",strokeWidth:"1.2",strokeLinecap:"round"})]})}function se(){return n.jsxs("svg",{width:"14",height:"14",viewBox:"0 0 16 16",fill:"none",children:[n.jsx("path",{d:"M8 2L2 5l6 3 6-3-6-3z",stroke:"currentColor",strokeWidth:"1.2",strokeLinejoin:"round"}),n.jsx("path",{d:"M2 9l6 3 6-3",stroke:"currentColor",strokeWidth:"1.2",strokeLinejoin:"round"})]})}const pe=[{label:"Settings",Icon:le},{label:"History",Icon:ae},{label:"Layers",Icon:se,extraClass:c.layersButton}];function ue({filterKey:t,definition:e,filterState:r,whereClause:o,objectType:i,setFilterState:s}){const l=m.useCallback(a=>s(t,a),[t,s]);return n.jsxs("span",{className:c.inlineFieldGroup,children:[n.jsx("span",{className:c.label,children:v(e)}),n.jsx("span",{className:c.inlineInputWrapper,children:n.jsx(L,{objectType:i,definition:e,filterState:r,onFilterStateChanged:l,whereClause:o})})]})}function ce({filterKey:t,definition:e,filterState:r,whereClause:o,objectType:i,setFilterState:s,clearFilterState:l}){const a=m.useCallback(_=>s(t,_),[t,s]),d=m.useCallback(()=>l(t),[t,l]);return n.jsx(W,{label:v(e),summary:k(e,r),isActive:B(r),onRemove:d,labelPlacement:"top",children:n.jsx(L,{objectType:i,definition:e,filterState:r,onFilterStateChanged:a,whereClause:o,layout:"inline"})})}function me(t){const{definition:e}=t;return e.type==="PROPERTY"&&e.filterComponent==="CONTAINS_TEXT"?n.jsx(ue,{...t}):n.jsx(ce,{...t})}function P({objectType:t,filterDefinitions:e}){const{filterStates:r,setFilterState:o,clearFilterState:i,perFilterWhereClauses:s}=O({objectType:t,filterDefinitions:e});return n.jsxs("div",{className:c.toolbar,children:[e.map(l=>{const a=A(l);return n.jsx(me,{filterKey:a,definition:l,filterState:r.get(a),whereClause:s.get(a)??ie,objectType:t,setFilterState:o,clearFilterState:i},a)}),n.jsx("div",{className:c.iconButtonGroup,children:pe.map(({label:l,Icon:a,extraClass:d})=>n.jsx("button",{type:"button",className:b(c.iconButton,d),"aria-label":l,children:n.jsx(a,{})},l))})]})}const Qe={title:"Components/FilterList/Recipes",component:P,tags:["beta"]},y={name:"Horizontal toolbar",parameters:{docs:{description:{story:"Composes `useFilterListState`, `FilterPopover`, and `FilterInput` into a custom inline toolbar. Each filter renders as a label + popover trigger; the popup opens the standard input UI for that filter type. The trailing utility buttons (settings, history, layers) are owned entirely by the consumer — `FilterList` never sees them. Replace the SVG icons with your own and swap the wrapper styles to match your design system."},source:{code:`import {
  filterHasActiveState,
  FilterInput,
  FilterPopover,
  getFilterKey,
  getFilterLabel,
  summarizeFilterValue,
  useFilterListState,
} from "@osdk/react-components/filter-list";

function HorizontalFilterToolbar({ objectType, filterDefinitions }) {
  const {
    filterStates,
    setFilterState,
    clearFilterState,
    perFilterWhereClauses,
  } = useFilterListState({ objectType, filterDefinitions });

  return (
    <div className={styles.toolbar}>
      {filterDefinitions.map((definition) => {
        const key = getFilterKey(definition);
        return (
          <FilterPopover
            key={key}
            label={getFilterLabel(definition)}
            summary={summarizeFilterValue(definition, filterStates.get(key))}
            isActive={filterHasActiveState(filterStates.get(key))}
            onRemove={() => clearFilterState(key)}
            labelPlacement="top"
          >
            <FilterInput
              objectType={objectType}
              definition={definition}
              filterState={filterStates.get(key)}
              onFilterStateChanged={(state) => setFilterState(key, state)}
              whereClause={perFilterWhereClauses.get(key) ?? {}}
              layout="inline"
            />
          </FilterPopover>
        );
      })}
      {/* Trailing utility buttons are owned entirely by the consumer. */}
    </div>
  );
}

<HorizontalFilterToolbar
  objectType={Employee}
  filterDefinitions={[
    { type: "PROPERTY", key: "locationCity", label: "Sites", filterComponent: "MULTI_SELECT" },
    { type: "PROPERTY", key: "department", label: "Specialties", filterComponent: "MULTI_SELECT" },
    { type: "PROPERTY", key: "fullName", label: "Consultants", filterComponent: "CONTAINS_TEXT" },
  ]}
/>`}}},render:()=>n.jsx(P,{objectType:R,filterDefinitions:oe})};var S,g,C;y.parameters={...y.parameters,docs:{...(S=y.parameters)==null?void 0:S.docs,source:{originalSource:`{
  name: "Horizontal toolbar",
  parameters: {
    docs: {
      description: {
        story: "Composes \`useFilterListState\`, \`FilterPopover\`, and " + "\`FilterInput\` into a custom inline toolbar. Each filter renders " + "as a label + popover trigger; the popup opens the standard input " + "UI for that filter type. The trailing utility buttons (settings, " + "history, layers) are owned entirely by the consumer — \`FilterList\`" + " never sees them. Replace the SVG icons with your own and swap " + "the wrapper styles to match your design system."
      },
      source: {
        code: \`import {
  filterHasActiveState,
  FilterInput,
  FilterPopover,
  getFilterKey,
  getFilterLabel,
  summarizeFilterValue,
  useFilterListState,
} from "@osdk/react-components/filter-list";

function HorizontalFilterToolbar({ objectType, filterDefinitions }) {
  const {
    filterStates,
    setFilterState,
    clearFilterState,
    perFilterWhereClauses,
  } = useFilterListState({ objectType, filterDefinitions });

  return (
    <div className={styles.toolbar}>
      {filterDefinitions.map((definition) => {
        const key = getFilterKey(definition);
        return (
          <FilterPopover
            key={key}
            label={getFilterLabel(definition)}
            summary={summarizeFilterValue(definition, filterStates.get(key))}
            isActive={filterHasActiveState(filterStates.get(key))}
            onRemove={() => clearFilterState(key)}
            labelPlacement="top"
          >
            <FilterInput
              objectType={objectType}
              definition={definition}
              filterState={filterStates.get(key)}
              onFilterStateChanged={(state) => setFilterState(key, state)}
              whereClause={perFilterWhereClauses.get(key) ?? {}}
              layout="inline"
            />
          </FilterPopover>
        );
      })}
      {/* Trailing utility buttons are owned entirely by the consumer. */}
    </div>
  );
}

<HorizontalFilterToolbar
  objectType={Employee}
  filterDefinitions={[
    { type: "PROPERTY", key: "locationCity", label: "Sites", filterComponent: "MULTI_SELECT" },
    { type: "PROPERTY", key: "department", label: "Specialties", filterComponent: "MULTI_SELECT" },
    { type: "PROPERTY", key: "fullName", label: "Consultants", filterComponent: "CONTAINS_TEXT" },
  ]}
/>\`
      }
    }
  },
  render: () => <HorizontalFilterToolbar objectType={Employee} filterDefinitions={TOOLBAR_FILTER_DEFINITIONS} />
}`,...(C=(g=y.parameters)==null?void 0:g.docs)==null?void 0:C.source}}};const et=["HorizontalToolbar"];export{y as HorizontalToolbar,et as __namedExportsOrder,Qe as default};
