import{R as s,O as w,j as O,M as v}from"./iframe-An7_ok4C.js";import{P}from"./pdf-viewer-D6wfeQK2.js";import{E as M}from"./Employee-BAk2o20h.js";import{c as T,u as K}from"./useShape-B0HjDz_i.js";import{m as j,d as h}from"./makeExternalStore-rNNfmP1e.js";import"./preload-helper-RtOdUqdU.js";import"./PdfRenderer-xuzFCyRt.js";import"./index-CsV4dS7f.js";import"./PdfViewer-CEmvNdnc.js";import"./PdfViewer.module.css-DQWVLHK9.js";import"./PdfViewerAnnotationLayer-BgyF3tS5.js";import"./constants-DsXMS3N3.js";import"./usePdfDocument-_GwP4R1Z.js";import"./PdfViewerOutlineSidebar-BwFTs4N-.js";import"./PdfViewerSidebarHeader-VkNw6UW2.js";import"./useBaseUiId-DFBpAm_h.js";import"./useControlled-DpcT0DFF.js";import"./CompositeRoot-CAuUIbH8.js";import"./CompositeItem-DpyuKUKM.js";import"./ToolbarRootContext-DKP64O-4.js";import"./composite-C9JiOFOF.js";import"./svgIconContainer-B6gElZ5n.js";import"./PdfViewerSearchBar-DJDB3eR2.js";import"./chevron-up-B4lIUnmx.js";import"./chevron-down-DwPJLpiv.js";import"./cross-SIcxHuYm.js";import"./PdfViewerSidebar-BWhEN_ow.js";import"./index-DUjZV3m5.js";import"./index-DfNXtine.js";import"./index-B6sK19yI.js";import"./PdfViewerToolbar-XLWPlrke.js";import"./Button-BM9yKjC0.js";import"./chevron-right-DjOtB1IW.js";import"./Input-Ccvg9OTC.js";import"./minus-NP1uxGH9.js";import"./spin-BAh40-On.js";import"./error-eGR5PXEA.js";import"./withOsdkMetrics-CsEZPBhW.js";function L(...e){const i=!("$objectType"in e[0])&&e.length>=3&&typeof e[2]=="object"&&e[2]!=null&&"shape"in e[2];if(s.useRef(i).current!==i)throw new Error("useOsdkObject: cannot switch between shape/non-shape mode");return i?V(e[0],e[1],e[2]):_(e)}function V(e,c,i){const o=i.shape,m=typeof o=="object"&&o!=null&&"__shapeId"in o,l=s.useRef(o),p=s.useMemo(()=>{const n=l.current;return typeof n=="object"&&n!=null&&"__shapeId"in n?n:T(e,n)},[e]),r=K(p,c,{enabled:i.enabled,links:i.links});return m?r:{data:r.data,shape:p,isLoading:r.isLoading,error:r.error,isOptimistic:r.isOptimistic,droppedDueToNullability:r.droppedDueToNullability,nullabilityViolations:r.nullabilityViolations,linkStatus:r.linkStatus,loadDeferred:r.loadDeferred,retry:r.retry,invalidate:r.invalidate}}function _(e){const{observableClient:c}=s.useContext(w),i="$objectType"in e[0],o=!i&&e[2]!=null&&typeof e[2]=="object"?e[2]:void 0,m=i?typeof e[1]=="boolean"?e[1]:!0:o?o.enabled??!0:typeof e[2]=="boolean"?e[2]:!0,l=o==null?void 0:o.$select,p=o==null?void 0:o.$loadPropertySecurityMetadata,r=o==null?void 0:o.$includeAllBaseObjectProperties,n=i?"offline":void 0,d=i?e[0].$objectType:e[0],u=i?e[0].$primaryKey:e[1],y=typeof d=="string"?d:d.apiName,b=s.useMemo(()=>l,[JSON.stringify(l)]),{subscribe:E,getSnapShot:x}=s.useMemo(()=>m?j(a=>c.observeObject(d,u,{mode:n,$includeAllBaseObjectProperties:r,...b?{select:b}:{},...p?{$loadPropertySecurityMetadata:p}:{}},a),h({hookType:"useOsdkObject",objectType:y,primaryKey:String(u)})):j(()=>({unsubscribe:()=>{}}),h({hookType:"useOsdkObject",objectType:y,primaryKey:String(u)})),[m,c,d,y,u,n,b,p,r]),t=s.useSyncExternalStore(E,x);return s.useMemo(()=>{let a;return t&&"error"in t&&t.error?a=t.error:(t==null?void 0:t.status)==="error"&&(a=new Error("Failed to load object")),{object:t==null?void 0:t.object,isLoading:m&&a==null?(t==null?void 0:t.status)==="loading"||(t==null?void 0:t.status)==="init"||!t:!1,isOptimistic:!!(t!=null&&t.isOptimistic),error:a}},[t,m])}const je={title:"Components/DocumentViewer/Renderers/PdfViewer",component:P,tags:["beta"],parameters:{controls:{expanded:!0}}},f={render:()=>{const{object:e,isLoading:c}=L(M,v);return c||!(e!=null&&e.employeeDocuments)?O.jsx("div",{style:{height:"600px"},children:"Loading OSDK media…"}):O.jsx("div",{style:{height:"600px"},children:O.jsx(P,{media:e.employeeDocuments})})},parameters:{docs:{source:{code:`import { PdfViewer } from "@osdk/react-components/experimental/pdf-viewer";

// Access media from an OSDK object's media reference property
const employee = useOsdkObject(Employee, employeePk);
<PdfViewer media={employee.employeeDocuments} />`}}}};var S,k,D;f.parameters={...f.parameters,docs:{...(S=f.parameters)==null?void 0:S.docs,source:{originalSource:`{
  render: () => {
    const {
      object: employee,
      isLoading
    } = useOsdkObject(Employee, MEDIA_EMPLOYEE_PK);
    if (isLoading || !employee?.employeeDocuments) {
      return <div style={{
        height: "600px"
      }}>Loading OSDK media…</div>;
    }
    return <div style={{
      height: "600px"
    }}>
        <PdfViewer media={employee.employeeDocuments} />
      </div>;
  },
  parameters: {
    docs: {
      source: {
        code: \`import { PdfViewer } from "@osdk/react-components/experimental/pdf-viewer";

// Access media from an OSDK object's media reference property
const employee = useOsdkObject(Employee, employeePk);
<PdfViewer media={employee.employeeDocuments} />\`
      }
    }
  }
}`,...(D=(k=f.parameters)==null?void 0:k.docs)==null?void 0:D.source}}};const he=["Default"];export{f as Default,he as __namedExportsOrder,je as default};
