import{R as s,O as w,j as O,M as v}from"./iframe-RbWuU-Ny.js";import{P}from"./pdf-viewer-Dh0knHbO.js";import{E as M}from"./Employee-BAk2o20h.js";import{c as T,u as K}from"./useShape-Dq3MT2tJ.js";import{m as j,d as h}from"./makeExternalStore-ZJephQQb.js";import"./preload-helper-BQSfTAnY.js";import"./PdfRenderer-AYnJon0t.js";import"./index-8mgYkofC.js";import"./PdfViewer-0mm7v2bX.js";import"./PdfViewer.module.css-BNevVaF1.js";import"./PdfViewerAnnotationLayer-Ci1nOzmm.js";import"./constants-DsXMS3N3.js";import"./usePdfDocument-p4QA9eoD.js";import"./PdfViewerOutlineSidebar-9H35bhaH.js";import"./PdfViewerSidebarHeader-C2XSgJvu.js";import"./useBaseUiId-B0-pnvFt.js";import"./useControlled-BahZzzVl.js";import"./CompositeRoot-BCluh7mC.js";import"./CompositeItem-Crgijm42.js";import"./ToolbarRootContext-DlZk8wxY.js";import"./composite-Au_BPDO-.js";import"./svgIconContainer-BC8OZ-Bp.js";import"./PdfViewerSearchBar-DEWBTRqp.js";import"./chevron-up-CdH3WiRY.js";import"./chevron-down-yVkdmnBr.js";import"./cross-DTfrm9mT.js";import"./PdfViewerSidebar-CQYiOqyT.js";import"./index-DZfkFBsM.js";import"./index-DTt_JGmY.js";import"./index-BzXFP0Tm.js";import"./PdfViewerToolbar-mG_LPoKF.js";import"./Button-DDneG5w9.js";import"./chevron-right-DhAQqW54.js";import"./Input-B0Z_XHiX.js";import"./minus-B9y747D7.js";import"./spin-DBFXmKeO.js";import"./error-C7pQnthJ.js";import"./withOsdkMetrics-4DAfqP69.js";function L(...e){const i=!("$objectType"in e[0])&&e.length>=3&&typeof e[2]=="object"&&e[2]!=null&&"shape"in e[2];if(s.useRef(i).current!==i)throw new Error("useOsdkObject: cannot switch between shape/non-shape mode");return i?V(e[0],e[1],e[2]):_(e)}function V(e,c,i){const o=i.shape,m=typeof o=="object"&&o!=null&&"__shapeId"in o,l=s.useRef(o),p=s.useMemo(()=>{const n=l.current;return typeof n=="object"&&n!=null&&"__shapeId"in n?n:T(e,n)},[e]),r=K(p,c,{enabled:i.enabled,links:i.links});return m?r:{data:r.data,shape:p,isLoading:r.isLoading,error:r.error,isOptimistic:r.isOptimistic,droppedDueToNullability:r.droppedDueToNullability,nullabilityViolations:r.nullabilityViolations,linkStatus:r.linkStatus,loadDeferred:r.loadDeferred,retry:r.retry,invalidate:r.invalidate}}function _(e){const{observableClient:c}=s.useContext(w),i="$objectType"in e[0],o=!i&&e[2]!=null&&typeof e[2]=="object"?e[2]:void 0,m=i?typeof e[1]=="boolean"?e[1]:!0:o?o.enabled??!0:typeof e[2]=="boolean"?e[2]:!0,l=o==null?void 0:o.$select,p=o==null?void 0:o.$loadPropertySecurityMetadata,r=o==null?void 0:o.$includeAllBaseObjectProperties,n=i?"offline":void 0,d=i?e[0].$objectType:e[0],u=i?e[0].$primaryKey:e[1],y=typeof d=="string"?d:d.apiName,b=s.useMemo(()=>l,[JSON.stringify(l)]),{subscribe:E,getSnapShot:x}=s.useMemo(()=>m?j(a=>c.observeObject(d,u,{mode:n,$includeAllBaseObjectProperties:r,...b?{select:b}:{},...p?{$loadPropertySecurityMetadata:p}:{}},a),h({hookType:"useOsdkObject",objectType:y,primaryKey:String(u)})):j(()=>({unsubscribe:()=>{}}),h({hookType:"useOsdkObject",objectType:y,primaryKey:String(u)})),[m,c,d,y,u,n,b,p,r]),t=s.useSyncExternalStore(E,x);return s.useMemo(()=>{let a;return t&&"error"in t&&t.error?a=t.error:(t==null?void 0:t.status)==="error"&&(a=new Error("Failed to load object")),{object:t==null?void 0:t.object,isLoading:m&&a==null?(t==null?void 0:t.status)==="loading"||(t==null?void 0:t.status)==="init"||!t:!1,isOptimistic:!!(t!=null&&t.isOptimistic),error:a}},[t,m])}const je={title:"Components/DocumentViewer/Renderers/PdfViewer",component:P,tags:["beta"],parameters:{controls:{expanded:!0}}},f={render:()=>{const{object:e,isLoading:c}=L(M,v);return c||!(e!=null&&e.employeeDocuments)?O.jsx("div",{style:{height:"600px"},children:"Loading OSDK media…"}):O.jsx("div",{style:{height:"600px"},children:O.jsx(P,{media:e.employeeDocuments})})},parameters:{docs:{source:{code:`import { PdfViewer } from "@osdk/react-components/experimental/pdf-viewer";

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
