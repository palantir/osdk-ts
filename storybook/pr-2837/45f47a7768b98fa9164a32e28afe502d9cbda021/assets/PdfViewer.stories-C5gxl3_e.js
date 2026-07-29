import{R as s,O as w,j as O,M as v}from"./iframe-DA_4jhIo.js";import{P}from"./pdf-viewer-CyHdO5hu.js";import{E as M}from"./Employee-BAk2o20h.js";import{c as T,u as K}from"./useShape-CoK4tO7v.js";import{m as j,d as h}from"./makeExternalStore-BeEa2RXQ.js";import"./preload-helper-D6F9FSIZ.js";import"./PdfRenderer-C7rjbPhk.js";import"./index-BTHg_M1G.js";import"./PdfViewer-DbbYUA6h.js";import"./PdfViewer.module.css-Dge0YYqr.js";import"./PdfViewerAnnotationLayer-ChYTiKyw.js";import"./constants-DsXMS3N3.js";import"./usePdfDocument-BazHMT_x.js";import"./PdfViewerOutlineSidebar-C_xApncZ.js";import"./PdfViewerSidebarHeader-CCUMXv3Y.js";import"./useBaseUiId-K0QFAQjB.js";import"./useControlled-BPddVxgx.js";import"./CompositeRoot-DngojAyd.js";import"./CompositeItem-B4sm-J4F.js";import"./ToolbarRootContext-B6v9w_Sz.js";import"./composite-xMjmZTG5.js";import"./svgIconContainer-J_lvtdTR.js";import"./PdfViewerSearchBar-CHqlm3sg.js";import"./chevron-up-BFMWtCfb.js";import"./chevron-down-CB9njjnl.js";import"./cross-CByxZKRa.js";import"./PdfViewerSidebar-C87vcd3v.js";import"./index-H0_dl8P2.js";import"./index-DNtqp29a.js";import"./index-DqQol2AI.js";import"./PdfViewerToolbar-D-C8Ilvj.js";import"./Button-g0YtIT_5.js";import"./chevron-right-F12ZtRPy.js";import"./Input-DrnqmiMh.js";import"./minus-Bk6KVfwv.js";import"./spin-WqGTOjHu.js";import"./error-pyqmCDE7.js";import"./withOsdkMetrics-DKMeLrAC.js";function L(...e){const i=!("$objectType"in e[0])&&e.length>=3&&typeof e[2]=="object"&&e[2]!=null&&"shape"in e[2];if(s.useRef(i).current!==i)throw new Error("useOsdkObject: cannot switch between shape/non-shape mode");return i?V(e[0],e[1],e[2]):_(e)}function V(e,c,i){const o=i.shape,m=typeof o=="object"&&o!=null&&"__shapeId"in o,l=s.useRef(o),p=s.useMemo(()=>{const n=l.current;return typeof n=="object"&&n!=null&&"__shapeId"in n?n:T(e,n)},[e]),r=K(p,c,{enabled:i.enabled,links:i.links});return m?r:{data:r.data,shape:p,isLoading:r.isLoading,error:r.error,isOptimistic:r.isOptimistic,droppedDueToNullability:r.droppedDueToNullability,nullabilityViolations:r.nullabilityViolations,linkStatus:r.linkStatus,loadDeferred:r.loadDeferred,retry:r.retry,invalidate:r.invalidate}}function _(e){const{observableClient:c}=s.useContext(w),i="$objectType"in e[0],o=!i&&e[2]!=null&&typeof e[2]=="object"?e[2]:void 0,m=i?typeof e[1]=="boolean"?e[1]:!0:o?o.enabled??!0:typeof e[2]=="boolean"?e[2]:!0,l=o==null?void 0:o.$select,p=o==null?void 0:o.$loadPropertySecurityMetadata,r=o==null?void 0:o.$includeAllBaseObjectProperties,n=i?"offline":void 0,d=i?e[0].$objectType:e[0],u=i?e[0].$primaryKey:e[1],y=typeof d=="string"?d:d.apiName,b=s.useMemo(()=>l,[JSON.stringify(l)]),{subscribe:E,getSnapShot:x}=s.useMemo(()=>m?j(a=>c.observeObject(d,u,{mode:n,$includeAllBaseObjectProperties:r,...b?{select:b}:{},...p?{$loadPropertySecurityMetadata:p}:{}},a),h({hookType:"useOsdkObject",objectType:y,primaryKey:String(u)})):j(()=>({unsubscribe:()=>{}}),h({hookType:"useOsdkObject",objectType:y,primaryKey:String(u)})),[m,c,d,y,u,n,b,p,r]),t=s.useSyncExternalStore(E,x);return s.useMemo(()=>{let a;return t&&"error"in t&&t.error?a=t.error:(t==null?void 0:t.status)==="error"&&(a=new Error("Failed to load object")),{object:t==null?void 0:t.object,isLoading:m&&a==null?(t==null?void 0:t.status)==="loading"||(t==null?void 0:t.status)==="init"||!t:!1,isOptimistic:!!(t!=null&&t.isOptimistic),error:a}},[t,m])}const je={title:"Components/DocumentViewer/Renderers/PdfViewer",component:P,tags:["beta"],parameters:{controls:{expanded:!0}}},f={render:()=>{const{object:e,isLoading:c}=L(M,v);return c||!(e!=null&&e.employeeDocuments)?O.jsx("div",{style:{height:"600px"},children:"Loading OSDK media…"}):O.jsx("div",{style:{height:"600px"},children:O.jsx(P,{media:e.employeeDocuments})})},parameters:{docs:{source:{code:`import { PdfViewer } from "@osdk/react-components/experimental/pdf-viewer";

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
