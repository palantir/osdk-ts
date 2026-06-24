import{R as i,O as M,j as y,M as v}from"./iframe-DmtxDnTH.js";import{P as D}from"./pdf-viewer-eNtDR96a.js";import{E as K}from"./Employee-BAk2o20h.js";import{m as P,d as E}from"./makeExternalStore-Bxdhnhes.js";import"./preload-helper-DxyQKcON.js";import"./PdfRenderer-DulwMny7.js";import"./index-UeV0ApAV.js";import"./PdfViewer-jPEOTA3c.js";import"./PdfViewer.module.css-KH3vSK6A.js";import"./PdfViewerAnnotationLayer-DN0X1keH.js";import"./constants-DsXMS3N3.js";import"./usePdfDocument-CIghYIj8.js";import"./PdfViewerOutlineSidebar-pZ_UFaTK.js";import"./PdfViewerSidebarHeader-CtWpNiLn.js";import"./useBaseUiId-CAIP8w_s.js";import"./useControlled-BIcgbJzI.js";import"./CompositeRoot-CcFaE6QQ.js";import"./CompositeItem-D5SMmEGc.js";import"./ToolbarRootContext-B4NcKAEO.js";import"./composite-vBvhoKt_.js";import"./svgIconContainer-1riIGZvh.js";import"./PdfViewerSearchBar-CKaeX9QB.js";import"./chevron-up-Cx3uV7M4.js";import"./chevron-down-BtpMTyXF.js";import"./cross-D08IHWHi.js";import"./PdfViewerSidebar-DbiuzZw-.js";import"./index-CjAHCQ08.js";import"./index-CBK0Fki1.js";import"./index-DkbQheRB.js";import"./PdfViewerToolbar-Du_p7ddM.js";import"./Button-BwCYtN10.js";import"./chevron-right-BPS_5nc6.js";import"./Input-h2uCVRox.js";import"./minus-CSpuzHya.js";import"./spin-CPb8wSi8.js";import"./error-Cdgw1-5t.js";import"./withOsdkMetrics-BNR_Ce6I.js";function L(...t){const{observableClient:m}=i.useContext(M),n="$objectType"in t[0],o=!n&&t[2]!=null&&typeof t[2]=="object"?t[2]:void 0,p=n?typeof t[1]=="boolean"?t[1]:!0:o?o.enabled??!0:typeof t[2]=="boolean"?t[2]:!0,f=o==null?void 0:o.$select,d=o==null?void 0:o.$loadPropertySecurityMetadata,b=o==null?void 0:o.$includeAllBaseObjectProperties,O=n?"offline":void 0,s=n?t[0].$objectType:t[0],c=n?t[0].$primaryKey:t[1],l=typeof s=="string"?s:s.apiName,u=i.useMemo(()=>f,[JSON.stringify(f)]),{subscribe:h,getSnapShot:w}=i.useMemo(()=>p?P(r=>m.observeObject(s,c,{mode:O,$includeAllBaseObjectProperties:b,...u?{select:u}:{},...d?{$loadPropertySecurityMetadata:d}:{}},r),E({hookType:"useOsdkObject",objectType:l,primaryKey:String(c)})):P(()=>({unsubscribe:()=>{}}),E({hookType:"useOsdkObject",objectType:l,primaryKey:String(c)})),[p,m,s,l,c,O,u,d,b]),e=i.useSyncExternalStore(h,w),j=i.useCallback(()=>{throw new Error("not implemented")},[]);return i.useMemo(()=>{let r;return e&&"error"in e&&e.error?r=e.error:(e==null?void 0:e.status)==="error"&&(r=new Error("Failed to load object")),{object:e==null?void 0:e.object,isLoading:p&&r==null?(e==null?void 0:e.status)==="loading"||(e==null?void 0:e.status)==="init"||!e:!1,isOptimistic:!!(e!=null&&e.isOptimistic),error:r,forceUpdate:j}},[e,p,j])}const ye={title:"Components/DocumentViewer/Renderers/PdfViewer",component:D,tags:["beta"],parameters:{controls:{expanded:!0}}},a={render:()=>{const{object:t,isLoading:m}=L(K,v);return m||!(t!=null&&t.employeeDocuments)?y.jsx("div",{style:{height:"600px"},children:"Loading OSDK media…"}):y.jsx("div",{style:{height:"600px"},children:y.jsx(D,{media:t.employeeDocuments})})},parameters:{docs:{source:{code:`import { PdfViewer } from "@osdk/react-components/experimental/pdf-viewer";

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
