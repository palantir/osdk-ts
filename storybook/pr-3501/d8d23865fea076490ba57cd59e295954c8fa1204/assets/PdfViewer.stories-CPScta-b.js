import{R as s,O as v,j as y,M}from"./iframe-Nh0aerxW.js";import{P as E}from"./pdf-viewer-nF9EOX2P.js";import{E as K}from"./Employee-BAk2o20h.js";import{m as h,d as S}from"./makeExternalStore-BSxtiBG-.js";import{u as L,a as T}from"./useStableShapeDefinition-DxS0arKw.js";import"./preload-helper-YP4vgwcw.js";import"./PdfRenderer-CGAQcxsj.js";import"./index-DRutxzog.js";import"./PdfViewer-DF-t3W2I.js";import"./PdfViewer.module.css-CgUAOmzT.js";import"./PdfViewerAnnotationLayer-BF0AzQDu.js";import"./constants-DsXMS3N3.js";import"./usePdfDocument-DZFpsaGv.js";import"./PdfViewerOutlineSidebar-DgSn0Suz.js";import"./PdfViewerSidebarHeader-aM0OajyT.js";import"./useBaseUiId-THJcA4gc.js";import"./useControlled-DagUJ5Qi.js";import"./CompositeRoot-Du6GNRaW.js";import"./CompositeItem-CwrwrlTN.js";import"./ToolbarRootContext-BECd8-y4.js";import"./composite-DlRDzuGh.js";import"./svgIconContainer-Cq5Vv4-8.js";import"./PdfViewerSearchBar-DzCAiOtK.js";import"./chevron-up-BvPWc8Nm.js";import"./chevron-down-BL624FME.js";import"./cross-DoRCRCae.js";import"./PdfViewerSidebar-CgEeacVp.js";import"./index-2MVHZTil.js";import"./index-32EFWuL-.js";import"./index-By6RMe6s.js";import"./PdfViewerToolbar-_gPF1ePE.js";import"./Button-CH40khuz.js";import"./chevron-right-ce45Prkp.js";import"./Input-pUjZoQO1.js";import"./minus-DjpsqPqr.js";import"./spin-CzwrwzF6.js";import"./error-loM05YdI.js";import"./withOsdkMetrics-D7uQ6iMK.js";function V(...e){const i=!("$objectType"in e[0])&&e.length>=3&&typeof e[2]=="object"&&e[2]!=null&&"shape"in e[2];if(s.useRef(i).current!==i)throw new Error("useOsdkObject: cannot switch between shape/non-shape mode");return i?$(e[0],e[1],e[2]):_(e)}function $(e,n,i){const o=i.shape,m=typeof o=="object"&&o!=null&&"__shapeId"in o,c=L(e,o),r=T(c,n,{enabled:i.enabled,links:i.links});return m?r:{data:r.data,shape:c,isLoading:r.isLoading,error:r.error,isOptimistic:r.isOptimistic,droppedDueToNullability:r.droppedDueToNullability,nullabilityViolations:r.nullabilityViolations,linkStatus:r.linkStatus,loadDeferred:r.loadDeferred,retry:r.retry,invalidate:r.invalidate}}function _(e){const{observableClient:n}=s.useContext(v),i="$objectType"in e[0],o=!i&&e[2]!=null&&typeof e[2]=="object"?e[2]:void 0,m=i?typeof e[1]=="boolean"?e[1]:!0:o?o.enabled??!0:typeof e[2]=="boolean"?e[2]:!0,c=o==null?void 0:o.$select,r=o==null?void 0:o.$loadPropertySecurityMetadata,b=o==null?void 0:o.$includeAllBaseObjectProperties,O=i?"offline":void 0,a=i?e[0].$objectType:e[0],l=i?e[0].$primaryKey:e[1],u=typeof a=="string"?a:a.apiName,f=s.useMemo(()=>c,[JSON.stringify(c)]),{subscribe:w,getSnapShot:x}=s.useMemo(()=>m?h(p=>n.observeObject(a,l,{mode:O,$includeAllBaseObjectProperties:b,...f?{select:f}:{},...r?{$loadPropertySecurityMetadata:r}:{}},p),S({hookType:"useOsdkObject",objectType:u,primaryKey:String(l)})):h(()=>({unsubscribe:()=>{}}),S({hookType:"useOsdkObject",objectType:u,primaryKey:String(l)})),[m,n,a,u,l,O,f,r,b]),t=s.useSyncExternalStore(w,x),j=s.useCallback(()=>{throw new Error("not implemented")},[]);return s.useMemo(()=>{let p;return t&&"error"in t&&t.error?p=t.error:(t==null?void 0:t.status)==="error"&&(p=new Error("Failed to load object")),{object:t==null?void 0:t.object,isLoading:m&&p==null?(t==null?void 0:t.status)==="loading"||(t==null?void 0:t.status)==="init"||!t:!1,isOptimistic:!!(t!=null&&t.isOptimistic),error:p,forceUpdate:j}},[t,m,j])}const he={title:"Components/DocumentViewer/Renderers/PdfViewer",component:E,tags:["beta"],parameters:{controls:{expanded:!0}}},d={render:()=>{const{object:e,isLoading:n}=V(K,M);return n||!(e!=null&&e.employeeDocuments)?y.jsx("div",{style:{height:"600px"},children:"Loading OSDK media…"}):y.jsx("div",{style:{height:"600px"},children:y.jsx(E,{media:e.employeeDocuments})})},parameters:{docs:{source:{code:`import { PdfViewer } from "@osdk/react-components/experimental/pdf-viewer";

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
