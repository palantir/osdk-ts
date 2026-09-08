import{r as p,j as t}from"./iframe-Xc_JH78I.js";import{R as v,N as P,u as N,g as x,a as E,b as C,f as R}from"./filter-list-YU7p0ZZ6.js";import{c as b}from"./svgIconContainer-CQmggZ37.js";import{E as O}from"./Employee-BAk2o20h.js";import{P as A,a as B,b as G,c as w,d as D}from"./PopoverPopup-Dcn1i5iK.js";import{a as z}from"./assertUnreachable-tCT10eXl.js";import{f as H}from"./debounce-DutYdFha.js";import"./preload-helper-AYl1pujm.js";import"./Checkbox-DEpZizfX.js";import"./index-BLCrQc9J.js";import"./index-CsuxBpJ0.js";import"./PortalContainerContext-BOrecAxh.js";import"./CompositeItem-B_3aLVYQ.js";import"./ToolbarRootContext-we2pFgZ9.js";import"./useBaseUiId-BI3SiDaB.js";import"./Input-BFx2x6nA.js";import"./tick-D1opSoSV.js";import"./Switch-Cen4Yz4p.js";import"./makeExternalStore-DfyUf4Br.js";import"./index-ClnMgKgk.js";import"./withOsdkMetrics-CzAtW5Pc.js";import"./index-BeTbant5.js";import"./useOsdkClient-B2D2VKmh.js";const V="_fieldGroup_1ic7c_17",M="_fieldGroupTop_1ic7c_25",U="_label_1ic7c_31",W="_trigger_1ic7c_38",Y="_summary_1ic7c_71",X="_placeholder_1ic7c_79",$="_removeButton_1ic7c_83",K="_popup_1ic7c_127",c={fieldGroup:V,fieldGroupTop:M,label:U,trigger:W,summary:Y,placeholder:X,removeButton:$,popup:K};function q({label:n,summary:e,isActive:r,onRemove:o,children:i,className:l,placeholder:a="Any",labelPlacement:s="inline"}){const[m,y]=p.useState(!1),T=e!=="",I=p.useCallback(j=>{j.stopPropagation(),o==null||o()},[o]);return t.jsxs(A,{open:m,onOpenChange:y,children:[t.jsxs("span",{className:b(c.fieldGroup,s==="top"&&c.fieldGroupTop,l),children:[t.jsx("span",{className:c.label,children:n}),t.jsx(B,{className:c.trigger,"data-active":r?"true":void 0,children:t.jsx("span",{className:b(c.summary,!T&&c.placeholder),children:T?e:a})}),o&&t.jsx("button",{type:"button",onClick:I,className:c.removeButton,"aria-label":`Remove ${n} filter`,children:t.jsx(v,{})})]}),t.jsx(G,{children:t.jsx(w,{sideOffset:4,align:"start",children:t.jsx(D,{className:c.popup,children:i})})})]})}const J=p.memo(q),d="—",Q="(No value)",Z="(empty string)";function F(n,e){if(n.length===0)return"";if(n.length>1)return`${n.length} selected`;const r=n[0];return r instanceof Date?e(r):r==null||r===P?Q:r===""?Z:String(r)}function h(n,e,r,o,i){return`${n!=null?r(n):o} – ${e!=null?r(e):i}`}function L(n,e){if(e==null)return"";const r="formatDate"in n&&n.formatDate?n.formatDate:H;switch(e.type){case"EXACT_MATCH":return F(e.values,r);case"SELECT":return F(e.selectedValues,r);case"CONTAINS_TEXT":return e.value??"";case"NUMBER_RANGE":{const{minValue:o,maxValue:i,includeNull:l}=e;return o==null&&i==null?l?"Includes empty":"":h(o,i,String,"−∞","∞")}case"DATE_RANGE":{const{minValue:o,maxValue:i,includeNull:l}=e;return o==null&&i==null?l?"Includes empty":"":h(o,i,r,d,d)}case"TIMELINE":{const{startDate:o,endDate:i}=e;return o==null&&i==null?"":h(o,i,r,d,d)}case"TOGGLE":return e.enabled?"Enabled":"";case"hasLink":return e.hasLink?e.isExcluding?"Not linked":"Linked":"";case"linkedProperty":return L(n,e.linkedFilterState);case"keywordSearch":return e.searchTerm??"";case"custom":return"Custom";default:return z(e)}}const ee="_toolbar_1f5ug_17",te="_iconButton_1f5ug_27",ne="_iconButtonGroup_1f5ug_41",re="_layersButton_1f5ug_49",oe="_inlineFieldGroup_1f5ug_54",ie="_label_1f5ug_61",le="_inlineInputWrapper_1f5ug_68",u={toolbar:ee,iconButton:te,iconButtonGroup:ne,layersButton:re,inlineFieldGroup:oe,label:ie,inlineInputWrapper:le},ae={type:"PROPERTY",id:"locationCity",key:"locationCity",label:"Sites",filterComponent:"MULTI_SELECT"},se={type:"PROPERTY",id:"department",key:"department",label:"Specialties",filterComponent:"MULTI_SELECT"},ce={type:"PROPERTY",id:"fullName",key:"fullName",label:"Consultants",filterComponent:"CONTAINS_TEXT"},ue=[ae,se,ce],pe={};function me(){return t.jsxs("svg",{width:"14",height:"14",viewBox:"0 0 16 16",fill:"currentColor",children:[t.jsx("path",{d:"M8 5.5a2.5 2.5 0 1 0 0 5 2.5 2.5 0 0 0 0-5zM6.5 8a1.5 1.5 0 1 1 3 0 1.5 1.5 0 0 1-3 0z"}),t.jsx("path",{d:"M9.4 1.6a1 1 0 0 0-1.9 0l-.2.7a6 6 0 0 0-1.1.4l-.6-.4a1 1 0 0 0-1.4 1.4l.4.6a6 6 0 0 0-.4 1.1l-.7.2a1 1 0 0 0 0 1.9l.7.2c.1.4.2.8.4 1.1l-.4.6a1 1 0 0 0 1.4 1.4l.6-.4c.4.2.7.3 1.1.4l.2.7a1 1 0 0 0 1.9 0l.2-.7c.4-.1.8-.2 1.1-.4l.6.4a1 1 0 0 0 1.4-1.4l-.4-.6c.2-.4.3-.7.4-1.1l.7-.2a1 1 0 0 0 0-1.9l-.7-.2a6 6 0 0 0-.4-1.1l.4-.6a1 1 0 0 0-1.4-1.4l-.6.4a6 6 0 0 0-1.1-.4l-.2-.7z"})]})}function de(){return t.jsxs("svg",{width:"14",height:"14",viewBox:"0 0 16 16",fill:"none",children:[t.jsx("circle",{cx:"8",cy:"8",r:"6.5",stroke:"currentColor",strokeWidth:"1.2"}),t.jsx("path",{d:"M8 4.5V8L10.5 9.5",stroke:"currentColor",strokeWidth:"1.2",strokeLinecap:"round"})]})}function fe(){return t.jsxs("svg",{width:"14",height:"14",viewBox:"0 0 16 16",fill:"none",children:[t.jsx("path",{d:"M8 2L2 5l6 3 6-3-6-3z",stroke:"currentColor",strokeWidth:"1.2",strokeLinejoin:"round"}),t.jsx("path",{d:"M2 9l6 3 6-3",stroke:"currentColor",strokeWidth:"1.2",strokeLinejoin:"round"})]})}const ye=[{label:"Settings",Icon:me},{label:"History",Icon:de},{label:"Layers",Icon:fe,extraClass:u.layersButton}];function he({filterKey:n,definition:e,filterState:r,whereClause:o,objectType:i,setFilterState:l}){const a=p.useCallback(s=>l(n,s),[n,l]);return t.jsxs("span",{className:u.inlineFieldGroup,children:[t.jsx("span",{className:u.label,children:E(e)}),t.jsx("span",{className:u.inlineInputWrapper,children:t.jsx(C,{objectType:i,definition:e,filterState:r,onFilterStateChanged:a,whereClause:o})})]})}function be({filterKey:n,definition:e,filterState:r,whereClause:o,objectType:i,setFilterState:l,clearFilterState:a}){const s=p.useCallback(y=>l(n,y),[n,l]),m=p.useCallback(()=>a(n),[n,a]);return t.jsx(J,{label:E(e),summary:L(e,r),isActive:R(r),onRemove:m,labelPlacement:"top",children:t.jsx(C,{objectType:i,definition:e,filterState:r,onFilterStateChanged:s,whereClause:o,layout:"inline"})})}function Te(n){const{definition:e}=n;return e.type==="PROPERTY"&&e.filterComponent==="CONTAINS_TEXT"?t.jsx(he,{...n}):t.jsx(be,{...n})}function k({objectType:n,filterDefinitions:e}){const{filterStates:r,setFilterState:o,clearFilterState:i,perFilterWhereClauses:l}=N({objectType:n,filterDefinitions:e});return t.jsxs("div",{className:u.toolbar,children:[e.map(a=>{const s=x(a);return t.jsx(Te,{filterKey:s,definition:a,filterState:r.get(s),whereClause:l.get(s)??pe,objectType:n,setFilterState:o,clearFilterState:i},s)}),t.jsx("div",{className:u.iconButtonGroup,children:ye.map(({label:a,Icon:s,extraClass:m})=>t.jsx("button",{type:"button",className:b(u.iconButton,m),"aria-label":a,children:t.jsx(s,{})},a))})]})}const Ve={title:"Components/FilterList/Recipes",component:k,tags:["beta"]},f={name:"Horizontal toolbar",parameters:{docs:{description:{story:"Composes `useFilterListState`, `FilterPopover`, and `FilterInput` into a custom inline toolbar. Each filter renders as a label + popover trigger; the popup opens the standard input UI for that filter type. The trailing utility buttons (settings, history, layers) are owned entirely by the consumer — `FilterList` never sees them. Replace the SVG icons with your own and swap the wrapper styles to match your design system."},source:{code:`import {
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
/>`}}},render:()=>t.jsx(k,{objectType:O,filterDefinitions:ue})};var _,g,S;f.parameters={...f.parameters,docs:{...(_=f.parameters)==null?void 0:_.docs,source:{originalSource:`{
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
}`,...(S=(g=f.parameters)==null?void 0:g.docs)==null?void 0:S.source}}};const Me=["HorizontalToolbar"];export{f as HorizontalToolbar,Me as __namedExportsOrder,Ve as default};
