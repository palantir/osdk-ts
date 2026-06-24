import{R as s,O as w,j as O,M as v}from"./iframe-DeHTg1tG.js";import{P}from"./pdf-viewer-tPqL3eWu.js";import{E as M}from"./Employee-BAk2o20h.js";import{c as T,u as K}from"./useShape-CDq4-oOI.js";import{m as j,d as h}from"./makeExternalStore-rlAonaJe.js";import"./preload-helper-EJwzNQLU.js";import"./PdfRenderer-BmOgI9e5.js";import"./index-ro7AvuIc.js";import"./PdfViewer-CQv86xy_.js";import"./PdfViewer.module.css-C_I8kF-J.js";import"./PdfViewerAnnotationLayer-CXWoKt49.js";import"./constants-DsXMS3N3.js";import"./usePdfDocument-ClMHYSoA.js";import"./PdfViewerOutlineSidebar-DfGpvB9T.js";import"./PdfViewerSidebarHeader-DIz-odQV.js";import"./useBaseUiId-C0NRjzKl.js";import"./useControlled-ClFeeM_W.js";import"./CompositeRoot-CUmdzIR5.js";import"./CompositeItem-Cimn9Ixc.js";import"./ToolbarRootContext-DnXuKCx7.js";import"./composite-CB8XXB9I.js";import"./svgIconContainer-Lk64Tlsf.js";import"./PdfViewerSearchBar-_XcuM3Kk.js";import"./chevron-up-Bmc7czbv.js";import"./chevron-down-zU7hHmOr.js";import"./cross-9ntTTgbT.js";import"./PdfViewerSidebar-DLENs4zt.js";import"./index-GBEKjqFw.js";import"./index-BlwfbVod.js";import"./index-tnRCpKuy.js";import"./PdfViewerToolbar-CFFbrrA6.js";import"./Button-cxzLacU6.js";import"./chevron-right-Bt9A4hUT.js";import"./Input-BiN32nY5.js";import"./minus-g5jyZnLm.js";import"./spin-BJGEf9Nx.js";import"./error-CoPAJ4qi.js";import"./withOsdkMetrics-BhvCNdhA.js";function L(...e){const i=!("$objectType"in e[0])&&e.length>=3&&typeof e[2]=="object"&&e[2]!=null&&"shape"in e[2];if(s.useRef(i).current!==i)throw new Error("useOsdkObject: cannot switch between shape/non-shape mode");return i?V(e[0],e[1],e[2]):_(e)}function V(e,c,i){const o=i.shape,m=typeof o=="object"&&o!=null&&"__shapeId"in o,l=s.useRef(o),p=s.useMemo(()=>{const n=l.current;return typeof n=="object"&&n!=null&&"__shapeId"in n?n:T(e,n)},[e]),r=K(p,c,{enabled:i.enabled,links:i.links});return m?r:{data:r.data,shape:p,isLoading:r.isLoading,error:r.error,isOptimistic:r.isOptimistic,droppedDueToNullability:r.droppedDueToNullability,nullabilityViolations:r.nullabilityViolations,linkStatus:r.linkStatus,loadDeferred:r.loadDeferred,retry:r.retry,invalidate:r.invalidate}}function _(e){const{observableClient:c}=s.useContext(w),i="$objectType"in e[0],o=!i&&e[2]!=null&&typeof e[2]=="object"?e[2]:void 0,m=i?typeof e[1]=="boolean"?e[1]:!0:o?o.enabled??!0:typeof e[2]=="boolean"?e[2]:!0,l=o==null?void 0:o.$select,p=o==null?void 0:o.$loadPropertySecurityMetadata,r=o==null?void 0:o.$includeAllBaseObjectProperties,n=i?"offline":void 0,d=i?e[0].$objectType:e[0],u=i?e[0].$primaryKey:e[1],y=typeof d=="string"?d:d.apiName,b=s.useMemo(()=>l,[JSON.stringify(l)]),{subscribe:E,getSnapShot:x}=s.useMemo(()=>m?j(a=>c.observeObject(d,u,{mode:n,$includeAllBaseObjectProperties:r,...b?{select:b}:{},...p?{$loadPropertySecurityMetadata:p}:{}},a),h({hookType:"useOsdkObject",objectType:y,primaryKey:String(u)})):j(()=>({unsubscribe:()=>{}}),h({hookType:"useOsdkObject",objectType:y,primaryKey:String(u)})),[m,c,d,y,u,n,b,p,r]),t=s.useSyncExternalStore(E,x);return s.useMemo(()=>{let a;return t&&"error"in t&&t.error?a=t.error:(t==null?void 0:t.status)==="error"&&(a=new Error("Failed to load object")),{object:t==null?void 0:t.object,isLoading:m&&a==null?(t==null?void 0:t.status)==="loading"||(t==null?void 0:t.status)==="init"||!t:!1,isOptimistic:!!(t!=null&&t.isOptimistic),error:a}},[t,m])}const je={title:"Components/DocumentViewer/Renderers/PdfViewer",component:P,tags:["beta"],parameters:{controls:{expanded:!0}}},f={render:()=>{const{object:e,isLoading:c}=L(M,v);return c||!(e!=null&&e.employeeDocuments)?O.jsx("div",{style:{height:"600px"},children:"Loading OSDK media…"}):O.jsx("div",{style:{height:"600px"},children:O.jsx(P,{media:e.employeeDocuments})})},parameters:{docs:{source:{code:`import { PdfViewer } from "@osdk/react-components/experimental/pdf-viewer";

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
