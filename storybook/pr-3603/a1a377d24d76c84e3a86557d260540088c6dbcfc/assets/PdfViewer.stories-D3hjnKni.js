import{R as i,O as M,j as y,M as v}from"./iframe-BBnYssKE.js";import{P as D}from"./pdf-viewer-ClasnM9z.js";import{E as K}from"./Employee-BAk2o20h.js";import{m as P,d as E}from"./makeExternalStore-DvJo4l2H.js";import"./preload-helper-Q1X6EyBU.js";import"./PdfRenderer-Dr4339FJ.js";import"./index-Dsq-QVPM.js";import"./PdfViewer-k1kz7_Dd.js";import"./PdfViewer.module.css-DClJbyml.js";import"./PdfViewerAnnotationLayer-Bq2-_Y_X.js";import"./constants-DsXMS3N3.js";import"./usePdfDocument-Dy7DN5-L.js";import"./PdfViewerOutlineSidebar-DTVWZ2oN.js";import"./PdfViewerSidebarHeader-CMGNsOCa.js";import"./useBaseUiId-D95b9lUd.js";import"./useControlled-BGBIGCbd.js";import"./CompositeRoot-CjFcLe5O.js";import"./CompositeItem-crAYYpLc.js";import"./ToolbarRootContext-BveLu8S4.js";import"./composite-Dsyt5hif.js";import"./svgIconContainer-ClncAOm3.js";import"./PdfViewerSearchBar-bd2g2d_f.js";import"./chevron-up-BB-D2SIh.js";import"./chevron-down-CrVz2E-d.js";import"./cross-Dm7Mw9KH.js";import"./PdfViewerSidebar-th43FGlG.js";import"./index-k39j1op_.js";import"./index-B5LPtQqv.js";import"./index-DwbwFuJ6.js";import"./PdfViewerToolbar-CKu89IEs.js";import"./Button-BZIwRf36.js";import"./chevron-right-Cn_0pgO9.js";import"./Input-6ez52RYZ.js";import"./minus-0ZSCaSuf.js";import"./search-CfZBthS7.js";import"./spin-8XXiTlyO.js";import"./error-cFVTdEtB.js";import"./withOsdkMetrics-2PkoG5s_.js";function L(...t){const{observableClient:m}=i.useContext(M),n="$objectType"in t[0],o=!n&&t[2]!=null&&typeof t[2]=="object"?t[2]:void 0,p=n?typeof t[1]=="boolean"?t[1]:!0:o?o.enabled??!0:typeof t[2]=="boolean"?t[2]:!0,f=o==null?void 0:o.$select,d=o==null?void 0:o.$loadPropertySecurityMetadata,b=o==null?void 0:o.$includeAllBaseObjectProperties,O=n?"offline":void 0,s=n?t[0].$objectType:t[0],c=n?t[0].$primaryKey:t[1],l=typeof s=="string"?s:s.apiName,u=i.useMemo(()=>f,[JSON.stringify(f)]),{subscribe:h,getSnapShot:w}=i.useMemo(()=>p?P(r=>m.observeObject(s,c,{mode:O,$includeAllBaseObjectProperties:b,...u?{select:u}:{},...d?{$loadPropertySecurityMetadata:d}:{}},r),E({hookType:"useOsdkObject",objectType:l,primaryKey:String(c)})):P(()=>({unsubscribe:()=>{}}),E({hookType:"useOsdkObject",objectType:l,primaryKey:String(c)})),[p,m,s,l,c,O,u,d,b]),e=i.useSyncExternalStore(h,w),j=i.useCallback(()=>{throw new Error("not implemented")},[]);return i.useMemo(()=>{let r;return e&&"error"in e&&e.error?r=e.error:(e==null?void 0:e.status)==="error"&&(r=new Error("Failed to load object")),{object:e==null?void 0:e.object,isLoading:p&&r==null?(e==null?void 0:e.status)==="loading"||(e==null?void 0:e.status)==="init"||!e:!1,isOptimistic:!!(e!=null&&e.isOptimistic),error:r,forceUpdate:j}},[e,p,j])}const fe={title:"Components/DocumentViewer/Renderers/PdfViewer",component:D,tags:["beta"],parameters:{controls:{expanded:!0}}},a={render:()=>{const{object:t,isLoading:m}=L(K,v);return m||!(t!=null&&t.employeeDocuments)?y.jsx("div",{style:{height:"600px"},children:"Loading OSDK media…"}):y.jsx("div",{style:{height:"600px"},children:y.jsx(D,{media:t.employeeDocuments})})},parameters:{docs:{source:{code:`import { PdfViewer } from "@osdk/react-components/experimental/pdf-viewer";

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
