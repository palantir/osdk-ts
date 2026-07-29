import{R as s,O as v,j as y,M}from"./iframe-C6-ggXJp.js";import{P as E}from"./pdf-viewer-DnBEAYNf.js";import{E as K}from"./Employee-BAk2o20h.js";import{m as h,d as S}from"./makeExternalStore-D5ZXg_RS.js";import{u as L,a as T}from"./useStableShapeDefinition-Cwl5UkYI.js";import"./preload-helper-B1XKl6Iy.js";import"./PdfRenderer-Bmt3MaPy.js";import"./index-DsmK34Fr.js";import"./PdfViewer-BjhssQp6.js";import"./PdfViewer.module.css-NMey1AWr.js";import"./PdfViewerAnnotationLayer-B6gjyPEK.js";import"./constants-DsXMS3N3.js";import"./usePdfDocument-Di7efsfs.js";import"./PdfViewerOutlineSidebar-Cqm6a8oh.js";import"./PdfViewerSidebarHeader-oTVf9oFn.js";import"./useBaseUiId-nBlzr4HM.js";import"./useControlled-v1qYhe-N.js";import"./CompositeRoot-DyzBZU7R.js";import"./CompositeItem-C954TFCK.js";import"./ToolbarRootContext-C7076u2f.js";import"./composite-L2393sS3.js";import"./svgIconContainer-x3aIBk_c.js";import"./PdfViewerSearchBar-ocK709v-.js";import"./chevron-up-BYc5KKhB.js";import"./chevron-down-NMYS1Nku.js";import"./cross-CTcrTiMr.js";import"./PdfViewerSidebar-DnncbuC8.js";import"./index-c4VmSpzl.js";import"./index-fSq86_F1.js";import"./index-CjgI9bgd.js";import"./PdfViewerToolbar-m4mgeaXC.js";import"./Button-B271mLaY.js";import"./chevron-right-C_XowiqC.js";import"./Input-CnVVFacM.js";import"./minus-CURtutgI.js";import"./spin-B_1HGxZ5.js";import"./error-Cc-mG_MK.js";import"./withOsdkMetrics-DKErgh06.js";function V(...e){const i=!("$objectType"in e[0])&&e.length>=3&&typeof e[2]=="object"&&e[2]!=null&&"shape"in e[2];if(s.useRef(i).current!==i)throw new Error("useOsdkObject: cannot switch between shape/non-shape mode");return i?$(e[0],e[1],e[2]):_(e)}function $(e,n,i){const o=i.shape,m=typeof o=="object"&&o!=null&&"__shapeId"in o,c=L(e,o),r=T(c,n,{enabled:i.enabled,links:i.links});return m?r:{data:r.data,shape:c,isLoading:r.isLoading,error:r.error,isOptimistic:r.isOptimistic,droppedDueToNullability:r.droppedDueToNullability,nullabilityViolations:r.nullabilityViolations,linkStatus:r.linkStatus,loadDeferred:r.loadDeferred,retry:r.retry,invalidate:r.invalidate}}function _(e){const{observableClient:n}=s.useContext(v),i="$objectType"in e[0],o=!i&&e[2]!=null&&typeof e[2]=="object"?e[2]:void 0,m=i?typeof e[1]=="boolean"?e[1]:!0:o?o.enabled??!0:typeof e[2]=="boolean"?e[2]:!0,c=o==null?void 0:o.$select,r=o==null?void 0:o.$loadPropertySecurityMetadata,b=o==null?void 0:o.$includeAllBaseObjectProperties,O=i?"offline":void 0,a=i?e[0].$objectType:e[0],l=i?e[0].$primaryKey:e[1],u=typeof a=="string"?a:a.apiName,f=s.useMemo(()=>c,[JSON.stringify(c)]),{subscribe:w,getSnapShot:x}=s.useMemo(()=>m?h(p=>n.observeObject(a,l,{mode:O,$includeAllBaseObjectProperties:b,...f?{select:f}:{},...r?{$loadPropertySecurityMetadata:r}:{}},p),S({hookType:"useOsdkObject",objectType:u,primaryKey:String(l)})):h(()=>({unsubscribe:()=>{}}),S({hookType:"useOsdkObject",objectType:u,primaryKey:String(l)})),[m,n,a,u,l,O,f,r,b]),t=s.useSyncExternalStore(w,x),j=s.useCallback(()=>{throw new Error("not implemented")},[]);return s.useMemo(()=>{let p;return t&&"error"in t&&t.error?p=t.error:(t==null?void 0:t.status)==="error"&&(p=new Error("Failed to load object")),{object:t==null?void 0:t.object,isLoading:m&&p==null?(t==null?void 0:t.status)==="loading"||(t==null?void 0:t.status)==="init"||!t:!1,isOptimistic:!!(t!=null&&t.isOptimistic),error:p,forceUpdate:j}},[t,m,j])}const he={title:"Components/DocumentViewer/Renderers/PdfViewer",component:E,tags:["beta"],parameters:{controls:{expanded:!0}}},d={render:()=>{const{object:e,isLoading:n}=V(K,M);return n||!(e!=null&&e.employeeDocuments)?y.jsx("div",{style:{height:"600px"},children:"Loading OSDK media…"}):y.jsx("div",{style:{height:"600px"},children:y.jsx(E,{media:e.employeeDocuments})})},parameters:{docs:{source:{code:`import { PdfViewer } from "@osdk/react-components/experimental/pdf-viewer";

// Access media from an OSDK object's media reference property
const employee = useOsdkObject(Employee, employeePk);
<PdfViewer media={employee.employeeDocuments} />`}}}};var k,D,P;d.parameters={...d.parameters,docs:{...(k=d.parameters)==null?void 0:k.docs,source:{originalSource:`{
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
}`,...(P=(D=d.parameters)==null?void 0:D.docs)==null?void 0:P.source}}};const Se=["Default"];export{d as Default,Se as __namedExportsOrder,he as default};
