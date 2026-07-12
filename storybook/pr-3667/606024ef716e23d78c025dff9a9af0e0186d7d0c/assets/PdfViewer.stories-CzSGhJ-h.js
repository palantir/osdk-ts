import{R as i,O as w,j as y,M}from"./iframe-BnaIrsiB.js";import{P as D}from"./pdf-viewer-BLJ5WwkF.js";import{E as K}from"./Employee-BAk2o20h.js";import{m as P,d as E}from"./makeExternalStore-_k-SPU-s.js";import"./preload-helper-DFuQGFvG.js";import"./PdfRenderer-BfEPOUFr.js";import"./index-SaxY5iXK.js";import"./PdfViewer-RjpQ1yxx.js";import"./PdfViewer.module.css-BYsBGEgy.js";import"./PdfViewerAnnotationLayer-BOCSfmg0.js";import"./constants-DsXMS3N3.js";import"./usePdfDocument-CVDXsEp6.js";import"./PdfViewerOutlineSidebar-D6Zmxxy7.js";import"./PdfViewerSidebarHeader-BfesDn6O.js";import"./useBaseUiId-Bbm5u-TV.js";import"./useControlled-DmxvkasP.js";import"./CompositeRoot-BNgmurpS.js";import"./CompositeItem-B7MB-xVD.js";import"./ToolbarRootContext-CWdfpnuE.js";import"./composite-BLeP4MfM.js";import"./svgIconContainer-B5mIis-2.js";import"./PdfViewerSearchBar-B-tZA--O.js";import"./chevron-up-Dbhbizrr.js";import"./chevron-down-BBvuYneU.js";import"./cross-3K3hoR6J.js";import"./PdfViewerSidebar-Cfv93C8w.js";import"./index-CzY9LSdG.js";import"./index-BpYjefXK.js";import"./index-CsFrCkCE.js";import"./PdfViewerToolbar-6uNQC2aD.js";import"./Button-Cl3tnJKX.js";import"./chevron-right-Dfc36KRs.js";import"./Input-D7XPD2sU.js";import"./minus-CcbIqMZ-.js";import"./spin-CHHHhrQP.js";import"./error-BB8oM1hx.js";import"./withOsdkMetrics-DOfbIsqW.js";function L(...t){const{observableClient:m}=i.useContext(w),n="$objectType"in t[0],o=!n&&t[2]!=null&&typeof t[2]=="object"?t[2]:void 0,p=n?typeof t[1]=="boolean"?t[1]:!0:o?o.enabled??!0:typeof t[2]=="boolean"?t[2]:!0,f=o==null?void 0:o.$select,d=o==null?void 0:o.$loadPropertySecurityMetadata,b=o==null?void 0:o.$includeAllBaseObjectProperties,O=n?"offline":void 0,s=n?t[0].$objectType:t[0],c=n?t[0].$primaryKey:t[1],l=typeof s=="string"?s:s.apiName,u=i.useMemo(()=>f,[JSON.stringify(f)]),{subscribe:h,getSnapShot:v}=i.useMemo(()=>p?P(r=>m.observeObject(s,c,{mode:O,$includeAllBaseObjectProperties:b,...u?{select:u}:{},...d?{$loadPropertySecurityMetadata:d}:{}},r),E({hookType:"useOsdkObject",objectType:l,primaryKey:String(c)})):P(()=>({unsubscribe:()=>{}}),E({hookType:"useOsdkObject",objectType:l,primaryKey:String(c)})),[p,m,s,l,c,O,u,d,b]),e=i.useSyncExternalStore(h,v),j=i.useCallback(()=>{throw new Error("not implemented")},[]);return i.useMemo(()=>{let r;return e&&"error"in e&&e.error?r=e.error:(e==null?void 0:e.status)==="error"&&(r=new Error("Failed to load object")),{object:e==null?void 0:e.object,isLoading:p&&r==null?(e==null?void 0:e.status)==="loading"||(e==null?void 0:e.status)==="init"||!e:!1,isOptimistic:!!(e!=null&&e.isOptimistic),error:r,forceUpdate:j}},[e,p,j])}const ye={title:"Components/DocumentViewer/Renderers/PdfViewer",component:D,tags:["beta"],parameters:{controls:{expanded:!0}}},a={render:()=>{const{object:t,isLoading:m}=L(K,M);return m||!(t!=null&&t.employeeDocuments)?y.jsx("div",{style:{height:"600px"},children:"Loading OSDK media…"}):y.jsx("div",{style:{height:"600px"},children:y.jsx(D,{media:t.employeeDocuments})})},parameters:{docs:{source:{code:`import { PdfViewer } from "@osdk/react-components/experimental/pdf-viewer";

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
}`,...(k=(x=a.parameters)==null?void 0:x.docs)==null?void 0:k.source}}};const fe=["Default"];export{a as Default,fe as __namedExportsOrder,ye as default};
