import{r as m,R as l,j as e}from"./iframe-BRGzDqju.js";import{c as F}from"./index-En-TUnJd.js";import{E as P}from"./Employee-BAk2o20h.js";import{R as k,u as I,g as L,a as g,F as C,f as j}from"./getFilterLabel-B1Q55Hun.js";import{P as R,a as x,b as N,c as O,d as B}from"./PopoverPopup-BjDJmrK2.js";import"./preload-helper-5JQdMdM9.js";import"./cross-CQP7lInb.js";import"./svgIconContainer-BQAEO-7W.js";import"./chevron-down-CLb4G2AF.js";import"./tick-B0-Xl9HF.js";import"./search-asFq5N8L.js";import"./MenuTrigger-DhSK_MRy.js";import"./useBaseUiId-B3wooVnn.js";import"./CompositeItem-q2WRXYZP.js";import"./ToolbarRootContext-67BQ7bpF.js";import"./composite-C-AGstI3.js";import"./InternalBackdrop-DyMqQPSD.js";import"./index-DPkAIY9Y.js";import"./index-Bad5TxyQ.js";import"./index-CuXQ76Km.js";import"./getDisabledMountTransitionStyles-CIJBF-gX.js";import"./getPseudoElementBounds-Da6NSz-p.js";import"./Button-0cGInffD.js";import"./debounce-BY0A57Za.js";import"./useOsdkClient-BD_HHGJ7.js";import"./Input-DmzPzGey.js";import"./useControlled-DJDqOS1V.js";import"./small-cross-B83ohrdP.js";import"./useValueChanged-BU1nXjKr.js";import"./Switch-_3bbdgPb.js";import"./assertUnreachable-tCT10eXl.js";import"./index-ClnMgKgk.js";import"./Checkbox-BaBpX2iW.js";import"./SkeletonBar-DLjlHbja.js";import"./makeExternalStore-B-5KvZfn.js";import"./isEqual-ySCoOjBB.js";const p={fieldGroup:"FilterPopover-module__fieldGroup___bJI9x6iw",fieldGroupTop:"FilterPopover-module__fieldGroupTop___UWVRmF6q",label:"FilterPopover-module__label___8EBeHiOL",trigger:"FilterPopover-module__trigger___BoaZtsHJ",summary:"FilterPopover-module__summary___WuTTkUvW",placeholder:"FilterPopover-module__placeholder___xMU4srnZ",removeButton:"FilterPopover-module__removeButton___7umI8EDc",popup:"FilterPopover-module__popup___-BVwuze4"};function w({label:t,summary:o,isActive:a,onRemove:i,children:c,className:s,placeholder:r="Any",labelPlacement:n="inline"}){const[d,f]=m.useState(!1),b=o!=="",E=m.useCallback(v=>{v.stopPropagation(),i==null||i()},[i]);return l.createElement(R,{open:d,onOpenChange:f},l.createElement("span",{className:F(p.fieldGroup,n==="top"&&p.fieldGroupTop,s)},l.createElement("span",{className:p.label},t),l.createElement(x,{className:p.trigger,"data-active":a?"true":void 0},l.createElement("span",{className:F(p.summary,!b&&p.placeholder)},b?o:r)),i&&l.createElement("button",{type:"button",onClick:E,className:p.removeButton,"aria-label":`Remove ${t} filter`},l.createElement(k,null))),l.createElement(N,null,l.createElement(O,{sideOffset:4,align:"start"},l.createElement(B,{className:p.popup},c))))}const H=m.memo(w),A="_toolbar_1f5ug_17",G="_iconButton_1f5ug_27",W="_iconButtonGroup_1f5ug_41",z="_layersButton_1f5ug_49",M="_inlineFieldGroup_1f5ug_54",D="_label_1f5ug_61",U="_inlineInputWrapper_1f5ug_68",u={toolbar:A,iconButton:G,iconButtonGroup:W,layersButton:z,inlineFieldGroup:M,label:D,inlineInputWrapper:U},Y={type:"PROPERTY",id:"locationCity",key:"locationCity",label:"Sites",filterComponent:"MULTI_SELECT"},V={type:"PROPERTY",id:"department",key:"department",label:"Specialties",filterComponent:"MULTI_SELECT"},X={type:"PROPERTY",id:"fullName",key:"fullName",label:"Consultants",filterComponent:"CONTAINS_TEXT"},J=[Y,V,X],K={};function Z(){return e.jsxs("svg",{width:"14",height:"14",viewBox:"0 0 16 16",fill:"currentColor",children:[e.jsx("path",{d:"M8 5.5a2.5 2.5 0 1 0 0 5 2.5 2.5 0 0 0 0-5zM6.5 8a1.5 1.5 0 1 1 3 0 1.5 1.5 0 0 1-3 0z"}),e.jsx("path",{d:"M9.4 1.6a1 1 0 0 0-1.9 0l-.2.7a6 6 0 0 0-1.1.4l-.6-.4a1 1 0 0 0-1.4 1.4l.4.6a6 6 0 0 0-.4 1.1l-.7.2a1 1 0 0 0 0 1.9l.7.2c.1.4.2.8.4 1.1l-.4.6a1 1 0 0 0 1.4 1.4l.6-.4c.4.2.7.3 1.1.4l.2.7a1 1 0 0 0 1.9 0l.2-.7c.4-.1.8-.2 1.1-.4l.6.4a1 1 0 0 0 1.4-1.4l-.4-.6c.2-.4.3-.7.4-1.1l.7-.2a1 1 0 0 0 0-1.9l-.7-.2a6 6 0 0 0-.4-1.1l.4-.6a1 1 0 0 0-1.4-1.4l-.6.4a6 6 0 0 0-1.1-.4l-.2-.7z"})]})}function $(){return e.jsxs("svg",{width:"14",height:"14",viewBox:"0 0 16 16",fill:"none",children:[e.jsx("circle",{cx:"8",cy:"8",r:"6.5",stroke:"currentColor",strokeWidth:"1.2"}),e.jsx("path",{d:"M8 4.5V8L10.5 9.5",stroke:"currentColor",strokeWidth:"1.2",strokeLinecap:"round"})]})}function q(){return e.jsxs("svg",{width:"14",height:"14",viewBox:"0 0 16 16",fill:"none",children:[e.jsx("path",{d:"M8 2L2 5l6 3 6-3-6-3z",stroke:"currentColor",strokeWidth:"1.2",strokeLinejoin:"round"}),e.jsx("path",{d:"M2 9l6 3 6-3",stroke:"currentColor",strokeWidth:"1.2",strokeLinejoin:"round"})]})}const Q=[{label:"Settings",Icon:Z},{label:"History",Icon:$},{label:"Layers",Icon:q,extraClass:u.layersButton}];function ee({filterKey:t,definition:o,filterState:a,whereClause:i,objectType:c,setFilterState:s}){const r=m.useCallback(n=>s(t,n),[t,s]);return e.jsxs("span",{className:u.inlineFieldGroup,children:[e.jsx("span",{className:u.label,children:g(o)}),e.jsx("span",{className:u.inlineInputWrapper,children:e.jsx(C,{objectType:c,definition:o,filterState:a,onFilterStateChanged:r,whereClause:i})})]})}function te({filterKey:t,definition:o,filterState:a,whereClause:i,objectType:c,setFilterState:s,clearFilterState:r}){const n=m.useCallback(f=>s(t,f),[t,s]),d=m.useCallback(()=>r(t),[t,r]);return e.jsx(H,{label:g(o),summary:"",isActive:j(a),onRemove:d,labelPlacement:"top",children:e.jsx(C,{objectType:c,definition:o,filterState:a,onFilterStateChanged:n,whereClause:i,layout:"inline"})})}function oe(t){const{definition:o}=t;return o.type==="PROPERTY"&&o.filterComponent==="CONTAINS_TEXT"?e.jsx(ee,{...t}):e.jsx(te,{...t})}function S({objectType:t,filterDefinitions:o}){const{filterStates:a,setFilterState:i,clearFilterState:c,perFilterWhereClauses:s}=I({objectType:t,filterDefinitions:o});return e.jsxs("div",{className:u.toolbar,children:[o.map(r=>{const n=L(r);return e.jsx(oe,{filterKey:n,definition:r,filterState:a.get(n),whereClause:s.get(n)??K,objectType:t,setFilterState:i,clearFilterState:c},n)}),e.jsx("div",{className:u.iconButtonGroup,children:Q.map(({label:r,Icon:n,extraClass:d})=>e.jsx("button",{type:"button",className:F(u.iconButton,d),"aria-label":r,children:e.jsx(n,{})},r))})]})}const Ge={title:"Components/FilterList/Recipes",component:S,tags:["beta"]},y={name:"Horizontal toolbar",parameters:{docs:{description:{story:"Composes `useFilterListState`, `FilterPopover`, and `FilterInput` into a custom inline toolbar. Each filter renders as a label + popover trigger; the popup opens the standard input UI for that filter type. The trailing utility buttons (settings, history, layers) are owned entirely by the consumer — `FilterList` never sees them. Replace the SVG icons with your own and swap the wrapper styles to match your design system."},source:{code:`import {
  filterHasActiveState,
  FilterInput,
  FilterPopover,
  getFilterKey,
  getFilterLabel,
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
            summary=""
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
/>`}}},render:()=>e.jsx(S,{objectType:P,filterDefinitions:J})};var _,h,T;y.parameters={...y.parameters,docs:{...(_=y.parameters)==null?void 0:_.docs,source:{originalSource:`{
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
            summary=""
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
}`,...(T=(h=y.parameters)==null?void 0:h.docs)==null?void 0:T.source}}};const We=["HorizontalToolbar"];export{y as HorizontalToolbar,We as __namedExportsOrder,Ge as default};
