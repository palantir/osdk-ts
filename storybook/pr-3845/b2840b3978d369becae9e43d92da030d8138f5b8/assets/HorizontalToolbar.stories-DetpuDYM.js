import{r as m,R as u,j as n}from"./iframe-zt8gp64C.js";import{c as _}from"./index-DoHyhu1H.js";import{E as N}from"./Employee-BAk2o20h.js";import{R,N as j,u as x,g as O,a as g,F as L,f as A}from"./getFilterLabel-BOlVoLxm.js";import{P as B,a as V,b as w,c as H,d as D}from"./PopoverPopup-DVY_tgYX.js";import{a as G}from"./assertUnreachable-tCT10eXl.js";import{f as z}from"./toNumber-CLCJ8uM8.js";import"./preload-helper-D2a9Td0v.js";import"./cross-De0nnUUS.js";import"./svgIconContainer-0IC9WVdo.js";import"./chevron-down-CBSyC7tf.js";import"./tick-DGaV7WNd.js";import"./search-CkhkhpUr.js";import"./MenuTrigger-CcISEL9A.js";import"./useBaseUiId-CCqwL6UI.js";import"./CompositeItem-Brt2sv8U.js";import"./ToolbarRootContext-C57K8W0-.js";import"./composite-CiBYjtJq.js";import"./InternalBackdrop-DGaBLeqk.js";import"./index-D5-rUW4c.js";import"./index-DKrLb4UT.js";import"./index-C2mA5K1h.js";import"./getDisabledMountTransitionStyles-BpPAz8nb.js";import"./getPseudoElementBounds-BMx_lEUq.js";import"./Button-DeMnr8Np.js";import"./Switch-BSAXx-Lr.js";import"./isObject-CuTVL94r.js";import"./useControlled-B2Qs_OA4.js";import"./Input-CSTLDdZZ.js";import"./useValueChanged-CEhTPnLC.js";import"./index-ClnMgKgk.js";import"./Checkbox-CvK_053Z.js";import"./SkeletonBar-C0ADBR4Q.js";import"./makeExternalStore-kuj4NcTB.js";import"./isEqual-B7ANsJ7b.js";import"./useOsdkClient-DVQ-u_Rd.js";const p={fieldGroup:"FilterPopover-module__fieldGroup___bJI9x6iw",fieldGroupTop:"FilterPopover-module__fieldGroupTop___UWVRmF6q",label:"FilterPopover-module__label___8EBeHiOL",trigger:"FilterPopover-module__trigger___BoaZtsHJ",summary:"FilterPopover-module__summary___WuTTkUvW",placeholder:"FilterPopover-module__placeholder___xMU4srnZ",removeButton:"FilterPopover-module__removeButton___7umI8EDc",popup:"FilterPopover-module__popup___-BVwuze4"};function M({label:t,summary:e,isActive:r,onRemove:l,children:o,className:i,placeholder:a="Any",labelPlacement:s="inline"}){const[d,F]=m.useState(!1),E=e!=="",k=m.useCallback(v=>{v.stopPropagation(),l==null||l()},[l]);return u.createElement(B,{open:d,onOpenChange:F},u.createElement("span",{className:_(p.fieldGroup,s==="top"&&p.fieldGroupTop,i)},u.createElement("span",{className:p.label},t),u.createElement(V,{className:p.trigger,"data-active":r?"true":void 0},u.createElement("span",{className:_(p.summary,!E&&p.placeholder)},E?e:a)),l&&u.createElement("button",{type:"button",onClick:k,className:p.removeButton,"aria-label":`Remove ${t} filter`},u.createElement(R,null))),u.createElement(w,null,u.createElement(H,{sideOffset:4,align:"start"},u.createElement(D,{className:p.popup},o))))}const U=m.memo(M),f="—",W="(No value)",Y="(empty string)";function S(t,e){if(t.length===0)return"";if(t.length>1)return`${t.length} selected`;const r=t[0];return r instanceof Date?e(r):r==null||r===j?W:r===""?Y:String(r)}function T(t,e,r,l,o){return`${t!=null?r(t):l} – ${e!=null?r(e):o}`}function I(t,e){if(e==null)return"";const r="formatDate"in t&&t.formatDate?t.formatDate:z;switch(e.type){case"EXACT_MATCH":return S(e.values,r);case"SELECT":return S(e.selectedValues,r);case"CONTAINS_TEXT":return e.value??"";case"NUMBER_RANGE":{const{minValue:l,maxValue:o,includeNull:i}=e;return l==null&&o==null?i?"Includes empty":"":T(l,o,String,"−∞","∞")}case"DATE_RANGE":{const{minValue:l,maxValue:o,includeNull:i}=e;return l==null&&o==null?i?"Includes empty":"":T(l,o,r,f,f)}case"TIMELINE":{const{startDate:l,endDate:o}=e;return l==null&&o==null?"":T(l,o,r,f,f)}case"TOGGLE":return e.enabled?"Enabled":"";case"hasLink":return e.hasLink?"Has link":"";case"linkedProperty":return I(t,e.linkedFilterState);case"keywordSearch":return e.searchTerm??"";case"custom":return"Custom";default:return G(e)}}const X="_toolbar_1f5ug_17",$="_iconButton_1f5ug_27",J="_iconButtonGroup_1f5ug_41",K="_layersButton_1f5ug_49",Z="_inlineFieldGroup_1f5ug_54",q="_label_1f5ug_61",Q="_inlineInputWrapper_1f5ug_68",c={toolbar:X,iconButton:$,iconButtonGroup:J,layersButton:K,inlineFieldGroup:Z,label:q,inlineInputWrapper:Q},ee={type:"PROPERTY",id:"locationCity",key:"locationCity",label:"Sites",filterComponent:"MULTI_SELECT",defaultFilterState:{type:"SELECT",selectedValues:[]}},te={type:"PROPERTY",id:"department",key:"department",label:"Specialties",filterComponent:"MULTI_SELECT",defaultFilterState:{type:"SELECT",selectedValues:[]}},re={type:"PROPERTY",id:"fullName",key:"fullName",label:"Consultants",filterComponent:"CONTAINS_TEXT",defaultFilterState:{type:"CONTAINS_TEXT"}},ne=[ee,te,re],le={};function oe(){return n.jsxs("svg",{width:"14",height:"14",viewBox:"0 0 16 16",fill:"currentColor",children:[n.jsx("path",{d:"M8 5.5a2.5 2.5 0 1 0 0 5 2.5 2.5 0 0 0 0-5zM6.5 8a1.5 1.5 0 1 1 3 0 1.5 1.5 0 0 1-3 0z"}),n.jsx("path",{d:"M9.4 1.6a1 1 0 0 0-1.9 0l-.2.7a6 6 0 0 0-1.1.4l-.6-.4a1 1 0 0 0-1.4 1.4l.4.6a6 6 0 0 0-.4 1.1l-.7.2a1 1 0 0 0 0 1.9l.7.2c.1.4.2.8.4 1.1l-.4.6a1 1 0 0 0 1.4 1.4l.6-.4c.4.2.7.3 1.1.4l.2.7a1 1 0 0 0 1.9 0l.2-.7c.4-.1.8-.2 1.1-.4l.6.4a1 1 0 0 0 1.4-1.4l-.4-.6c.2-.4.3-.7.4-1.1l.7-.2a1 1 0 0 0 0-1.9l-.7-.2a6 6 0 0 0-.4-1.1l.4-.6a1 1 0 0 0-1.4-1.4l-.6.4a6 6 0 0 0-1.1-.4l-.2-.7z"})]})}function ie(){return n.jsxs("svg",{width:"14",height:"14",viewBox:"0 0 16 16",fill:"none",children:[n.jsx("circle",{cx:"8",cy:"8",r:"6.5",stroke:"currentColor",strokeWidth:"1.2"}),n.jsx("path",{d:"M8 4.5V8L10.5 9.5",stroke:"currentColor",strokeWidth:"1.2",strokeLinecap:"round"})]})}function ae(){return n.jsxs("svg",{width:"14",height:"14",viewBox:"0 0 16 16",fill:"none",children:[n.jsx("path",{d:"M8 2L2 5l6 3 6-3-6-3z",stroke:"currentColor",strokeWidth:"1.2",strokeLinejoin:"round"}),n.jsx("path",{d:"M2 9l6 3 6-3",stroke:"currentColor",strokeWidth:"1.2",strokeLinejoin:"round"})]})}const se=[{label:"Settings",Icon:oe},{label:"History",Icon:ie},{label:"Layers",Icon:ae,extraClass:c.layersButton}];function ue({filterKey:t,definition:e,filterState:r,whereClause:l,objectType:o,setFilterState:i}){const a=m.useCallback(s=>i(t,s),[t,i]);return n.jsxs("span",{className:c.inlineFieldGroup,children:[n.jsx("span",{className:c.label,children:g(e)}),n.jsx("span",{className:c.inlineInputWrapper,children:n.jsx(L,{objectType:o,definition:e,filterState:r,onFilterStateChanged:a,whereClause:l})})]})}function pe({filterKey:t,definition:e,filterState:r,whereClause:l,objectType:o,setFilterState:i,clearFilterState:a}){const s=m.useCallback(F=>i(t,F),[t,i]),d=m.useCallback(()=>a(t),[t,a]);return n.jsx(U,{label:g(e),summary:I(e,r),isActive:A(r),onRemove:d,labelPlacement:"top",children:n.jsx(L,{objectType:o,definition:e,filterState:r,onFilterStateChanged:s,whereClause:l,layout:"inline"})})}function ce(t){const{definition:e}=t;return e.type==="PROPERTY"&&e.filterComponent==="CONTAINS_TEXT"?n.jsx(ue,{...t}):n.jsx(pe,{...t})}function P({objectType:t,filterDefinitions:e}){const{filterStates:r,setFilterState:l,clearFilterState:o,perFilterWhereClauses:i}=x({objectType:t,filterDefinitions:e});return n.jsxs("div",{className:c.toolbar,children:[e.map(a=>{const s=O(a);return n.jsx(ce,{filterKey:s,definition:a,filterState:r.get(s),whereClause:i.get(s)??le,objectType:t,setFilterState:l,clearFilterState:o},s)}),n.jsx("div",{className:c.iconButtonGroup,children:se.map(({label:a,Icon:s,extraClass:d})=>n.jsx("button",{type:"button",className:_(c.iconButton,d),"aria-label":a,children:n.jsx(s,{})},a))})]})}const $e={title:"Components/FilterList/Recipes",component:P,tags:["beta"]},y={name:"Horizontal toolbar",parameters:{docs:{description:{story:"Composes `useFilterListState`, `FilterPopover`, and `FilterInput` into a custom inline toolbar. Each filter renders as a label + popover trigger; the popup opens the standard input UI for that filter type. The trailing utility buttons (settings, history, layers) are owned entirely by the consumer — `FilterList` never sees them. Replace the SVG icons with your own and swap the wrapper styles to match your design system."},source:{code:`import {
  filterHasActiveState,
  FilterInput,
  FilterPopover,
  getFilterKey,
  getFilterLabel,
  summarizeFilterValue,
  useFilterListState,
} from "@osdk/react-components/experimental/filter-list";

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
    { type: "PROPERTY", key: "locationCity", label: "Sites", filterComponent: "MULTI_SELECT", defaultFilterState: { type: "SELECT", selectedValues: [] } },
    { type: "PROPERTY", key: "department", label: "Specialties", filterComponent: "MULTI_SELECT", defaultFilterState: { type: "SELECT", selectedValues: [] } },
    { type: "PROPERTY", key: "fullName", label: "Consultants", filterComponent: "CONTAINS_TEXT", defaultFilterState: { type: "CONTAINS_TEXT" } },
  ]}
/>`}}},render:()=>n.jsx(P,{objectType:N,filterDefinitions:ne})};var h,b,C;y.parameters={...y.parameters,docs:{...(h=y.parameters)==null?void 0:h.docs,source:{originalSource:`{
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
} from "@osdk/react-components/experimental/filter-list";

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
    { type: "PROPERTY", key: "locationCity", label: "Sites", filterComponent: "MULTI_SELECT", defaultFilterState: { type: "SELECT", selectedValues: [] } },
    { type: "PROPERTY", key: "department", label: "Specialties", filterComponent: "MULTI_SELECT", defaultFilterState: { type: "SELECT", selectedValues: [] } },
    { type: "PROPERTY", key: "fullName", label: "Consultants", filterComponent: "CONTAINS_TEXT", defaultFilterState: { type: "CONTAINS_TEXT" } },
  ]}
/>\`
      }
    }
  },
  render: () => <HorizontalFilterToolbar objectType={Employee} filterDefinitions={TOOLBAR_FILTER_DEFINITIONS} />
}`,...(C=(b=y.parameters)==null?void 0:b.docs)==null?void 0:C.source}}};const Je=["HorizontalToolbar"];export{y as HorizontalToolbar,Je as __namedExportsOrder,$e as default};
