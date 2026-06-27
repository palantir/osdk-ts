import{R as i,O as M,j as y,M as v}from"./iframe-DRQbuWSS.js";import{P as D}from"./pdf-viewer-pJRjWW33.js";import{E as K}from"./Employee-BAk2o20h.js";import{m as P,d as E}from"./makeExternalStore-D5RvM6rg.js";import"./preload-helper-BCULYioV.js";import"./PdfRenderer-G3q5g_dC.js";import"./index-HtiMarMp.js";import"./PdfViewer-BYP3v1V6.js";import"./PdfViewer.module.css-Di9sI36I.js";import"./PdfViewerAnnotationLayer-HVB3_EZc.js";import"./constants-DsXMS3N3.js";import"./usePdfDocument-BOdpwLby.js";import"./PdfViewerOutlineSidebar-D2PV8u7v.js";import"./PdfViewerSidebarHeader-BS1KAVdN.js";import"./useBaseUiId-DUa3o3xz.js";import"./useControlled-OzUH7HOT.js";import"./CompositeRoot-C8Ixmp0e.js";import"./CompositeItem-D4OBRrKb.js";import"./ToolbarRootContext-CQBMomMx.js";import"./composite-B9XfsfgZ.js";import"./svgIconContainer-DLwfGwbU.js";import"./PdfViewerSearchBar-BY8MhuG6.js";import"./chevron-up-Bjug5qje.js";import"./chevron-down-B_cwpV0X.js";import"./cross-CKfMKyM1.js";import"./PdfViewerSidebar-CSS3auBa.js";import"./index-nf8Aj80m.js";import"./index-CAXzKFcJ.js";import"./index-DUz8mwtP.js";import"./PdfViewerToolbar-B9zQsLC5.js";import"./Button-G-FNaIS-.js";import"./chevron-right-ChM5iluC.js";import"./Input-DRi-o083.js";import"./minus-DzazGIXC.js";import"./search-DW1JGNDR.js";import"./spin-Cgg31hMC.js";import"./error-DGIoZa85.js";import"./withOsdkMetrics-DremVCLc.js";function L(...t){const{observableClient:m}=i.useContext(M),n="$objectType"in t[0],o=!n&&t[2]!=null&&typeof t[2]=="object"?t[2]:void 0,p=n?typeof t[1]=="boolean"?t[1]:!0:o?o.enabled??!0:typeof t[2]=="boolean"?t[2]:!0,f=o==null?void 0:o.$select,d=o==null?void 0:o.$loadPropertySecurityMetadata,b=o==null?void 0:o.$includeAllBaseObjectProperties,O=n?"offline":void 0,s=n?t[0].$objectType:t[0],c=n?t[0].$primaryKey:t[1],l=typeof s=="string"?s:s.apiName,u=i.useMemo(()=>f,[JSON.stringify(f)]),{subscribe:h,getSnapShot:w}=i.useMemo(()=>p?P(r=>m.observeObject(s,c,{mode:O,$includeAllBaseObjectProperties:b,...u?{select:u}:{},...d?{$loadPropertySecurityMetadata:d}:{}},r),E({hookType:"useOsdkObject",objectType:l,primaryKey:String(c)})):P(()=>({unsubscribe:()=>{}}),E({hookType:"useOsdkObject",objectType:l,primaryKey:String(c)})),[p,m,s,l,c,O,u,d,b]),e=i.useSyncExternalStore(h,w),j=i.useCallback(()=>{throw new Error("not implemented")},[]);return i.useMemo(()=>{let r;return e&&"error"in e&&e.error?r=e.error:(e==null?void 0:e.status)==="error"&&(r=new Error("Failed to load object")),{object:e==null?void 0:e.object,isLoading:p&&r==null?(e==null?void 0:e.status)==="loading"||(e==null?void 0:e.status)==="init"||!e:!1,isOptimistic:!!(e!=null&&e.isOptimistic),error:r,forceUpdate:j}},[e,p,j])}const fe={title:"Components/DocumentViewer/Renderers/PdfViewer",component:D,tags:["beta"],parameters:{controls:{expanded:!0}}},a={render:()=>{const{object:t,isLoading:m}=L(K,v);return m||!(t!=null&&t.employeeDocuments)?y.jsx("div",{style:{height:"600px"},children:"Loading OSDK media…"}):y.jsx("div",{style:{height:"600px"},children:y.jsx(D,{media:t.employeeDocuments})})},parameters:{docs:{source:{code:`import { PdfViewer } from "@osdk/react-components/experimental/pdf-viewer";

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
