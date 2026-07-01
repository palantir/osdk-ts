import{R as i,O as M,j as y,M as v}from"./iframe-CQqcNnwi.js";import{P as D}from"./pdf-viewer-CgCL_BTC.js";import{E as K}from"./Employee-BAk2o20h.js";import{m as P,d as E}from"./makeExternalStore-C7H6nJI4.js";import"./preload-helper-Dp1pzeXC.js";import"./PdfRenderer-q9bT_Z44.js";import"./index-BGqNz3HP.js";import"./PdfViewer-BsQT5y3O.js";import"./PdfViewer.module.css-DTL7DYQa.js";import"./PdfViewerAnnotationLayer-ChvkfN-l.js";import"./constants-DsXMS3N3.js";import"./usePdfDocument-DSuCOCNo.js";import"./PdfViewerOutlineSidebar-DDv8DE1K.js";import"./PdfViewerSidebarHeader-w5L-Fd-8.js";import"./useBaseUiId-81HNnwRN.js";import"./useControlled-D_CwS4tB.js";import"./CompositeRoot-BeW5ng1l.js";import"./CompositeItem-Byt82z5M.js";import"./ToolbarRootContext-on_UmCVp.js";import"./composite-Du3fY-K0.js";import"./svgIconContainer-IQ0gBQ0C.js";import"./PdfViewerSearchBar-CLj7O6p-.js";import"./chevron-up-B1espuya.js";import"./chevron-down-DQ9a4skg.js";import"./cross-C6Rm_Lrn.js";import"./PdfViewerSidebar-DEQEavKv.js";import"./index-CsF8MjB7.js";import"./index-BFZh7uCY.js";import"./index-C4QRzzj4.js";import"./PdfViewerToolbar-BNOPgksV.js";import"./Button-D78VRn98.js";import"./chevron-right-L4Av4nI6.js";import"./Input-B_Q9krhW.js";import"./minus-DGBq1uHg.js";import"./search-T4DuTzMx.js";import"./spin-LDWF5mL_.js";import"./error-Cw0E_S2M.js";import"./withOsdkMetrics-DvpJoQW9.js";function L(...t){const{observableClient:m}=i.useContext(M),n="$objectType"in t[0],o=!n&&t[2]!=null&&typeof t[2]=="object"?t[2]:void 0,p=n?typeof t[1]=="boolean"?t[1]:!0:o?o.enabled??!0:typeof t[2]=="boolean"?t[2]:!0,f=o==null?void 0:o.$select,d=o==null?void 0:o.$loadPropertySecurityMetadata,b=o==null?void 0:o.$includeAllBaseObjectProperties,O=n?"offline":void 0,s=n?t[0].$objectType:t[0],c=n?t[0].$primaryKey:t[1],l=typeof s=="string"?s:s.apiName,u=i.useMemo(()=>f,[JSON.stringify(f)]),{subscribe:h,getSnapShot:w}=i.useMemo(()=>p?P(r=>m.observeObject(s,c,{mode:O,$includeAllBaseObjectProperties:b,...u?{select:u}:{},...d?{$loadPropertySecurityMetadata:d}:{}},r),E({hookType:"useOsdkObject",objectType:l,primaryKey:String(c)})):P(()=>({unsubscribe:()=>{}}),E({hookType:"useOsdkObject",objectType:l,primaryKey:String(c)})),[p,m,s,l,c,O,u,d,b]),e=i.useSyncExternalStore(h,w),j=i.useCallback(()=>{throw new Error("not implemented")},[]);return i.useMemo(()=>{let r;return e&&"error"in e&&e.error?r=e.error:(e==null?void 0:e.status)==="error"&&(r=new Error("Failed to load object")),{object:e==null?void 0:e.object,isLoading:p&&r==null?(e==null?void 0:e.status)==="loading"||(e==null?void 0:e.status)==="init"||!e:!1,isOptimistic:!!(e!=null&&e.isOptimistic),error:r,forceUpdate:j}},[e,p,j])}const fe={title:"Components/DocumentViewer/Renderers/PdfViewer",component:D,tags:["beta"],parameters:{controls:{expanded:!0}}},a={render:()=>{const{object:t,isLoading:m}=L(K,v);return m||!(t!=null&&t.employeeDocuments)?y.jsx("div",{style:{height:"600px"},children:"Loading OSDK media…"}):y.jsx("div",{style:{height:"600px"},children:y.jsx(D,{media:t.employeeDocuments})})},parameters:{docs:{source:{code:`import { PdfViewer } from "@osdk/react-components/experimental/pdf-viewer";

// Access media from an OSDK object's media reference property
const employee = useOsdkObject(Employee, employeePk);
<PdfViewer media={employee.employeeDocuments} />`}}}};var S,x,k;a.parameters={...a.parameters,docs:{...(S=a.parameters)==null?void 0:S.docs,source:{originalSource:`{
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
}`,...(k=(x=a.parameters)==null?void 0:x.docs)==null?void 0:k.source}}};const be=["Default"];export{a as Default,be as __namedExportsOrder,fe as default};
