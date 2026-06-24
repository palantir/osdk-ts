import{R as i,O as M,j as y,M as v}from"./iframe-B0oEEPte.js";import{P as D}from"./pdf-viewer-Dg6o7C3G.js";import{E as K}from"./Employee-BAk2o20h.js";import{m as P,d as E}from"./makeExternalStore-mQGUB93m.js";import"./preload-helper-BSbvu8GQ.js";import"./PdfRenderer-ClSdsbUL.js";import"./index-DFr9bRTl.js";import"./PdfViewer-DV_E6Bc7.js";import"./PdfViewer.module.css-B4CId2J0.js";import"./PdfViewerAnnotationLayer-V2nzQcl0.js";import"./constants-DsXMS3N3.js";import"./usePdfDocument-mBHmnRpI.js";import"./PdfViewerOutlineSidebar-DK6Pr2Wd.js";import"./PdfViewerSidebarHeader-C-Z9s4D5.js";import"./useBaseUiId-DzZtd95w.js";import"./useControlled-Cvn-ldWm.js";import"./CompositeRoot-BL_W-kWc.js";import"./CompositeItem-ErSro4zV.js";import"./ToolbarRootContext-jLG8XKgb.js";import"./composite-DarLCWE2.js";import"./svgIconContainer-69wx9JC3.js";import"./PdfViewerSearchBar-DXpd_pfb.js";import"./chevron-up-DiaY63n8.js";import"./chevron-down-DaNPV6F1.js";import"./cross-Cyn-JjeY.js";import"./PdfViewerSidebar-DJlKVZsH.js";import"./index-BJFFNloC.js";import"./index-DzRZzQbW.js";import"./index-DYvh4vHQ.js";import"./PdfViewerToolbar-B2YHVT7m.js";import"./Button-Dlno79rG.js";import"./chevron-right-BvP444zp.js";import"./Input-rn_ecV3j.js";import"./minus-UHMg0aVE.js";import"./spin-ihAR_-6C.js";import"./error-D-71H6jO.js";import"./withOsdkMetrics-D4_xLDdy.js";function L(...t){const{observableClient:m}=i.useContext(M),n="$objectType"in t[0],o=!n&&t[2]!=null&&typeof t[2]=="object"?t[2]:void 0,p=n?typeof t[1]=="boolean"?t[1]:!0:o?o.enabled??!0:typeof t[2]=="boolean"?t[2]:!0,f=o==null?void 0:o.$select,d=o==null?void 0:o.$loadPropertySecurityMetadata,b=o==null?void 0:o.$includeAllBaseObjectProperties,O=n?"offline":void 0,s=n?t[0].$objectType:t[0],c=n?t[0].$primaryKey:t[1],l=typeof s=="string"?s:s.apiName,u=i.useMemo(()=>f,[JSON.stringify(f)]),{subscribe:h,getSnapShot:w}=i.useMemo(()=>p?P(r=>m.observeObject(s,c,{mode:O,$includeAllBaseObjectProperties:b,...u?{select:u}:{},...d?{$loadPropertySecurityMetadata:d}:{}},r),E({hookType:"useOsdkObject",objectType:l,primaryKey:String(c)})):P(()=>({unsubscribe:()=>{}}),E({hookType:"useOsdkObject",objectType:l,primaryKey:String(c)})),[p,m,s,l,c,O,u,d,b]),e=i.useSyncExternalStore(h,w),j=i.useCallback(()=>{throw new Error("not implemented")},[]);return i.useMemo(()=>{let r;return e&&"error"in e&&e.error?r=e.error:(e==null?void 0:e.status)==="error"&&(r=new Error("Failed to load object")),{object:e==null?void 0:e.object,isLoading:p&&r==null?(e==null?void 0:e.status)==="loading"||(e==null?void 0:e.status)==="init"||!e:!1,isOptimistic:!!(e!=null&&e.isOptimistic),error:r,forceUpdate:j}},[e,p,j])}const ye={title:"Components/DocumentViewer/Renderers/PdfViewer",component:D,tags:["beta"],parameters:{controls:{expanded:!0}}},a={render:()=>{const{object:t,isLoading:m}=L(K,v);return m||!(t!=null&&t.employeeDocuments)?y.jsx("div",{style:{height:"600px"},children:"Loading OSDK media…"}):y.jsx("div",{style:{height:"600px"},children:y.jsx(D,{media:t.employeeDocuments})})},parameters:{docs:{source:{code:`import { PdfViewer } from "@osdk/react-components/experimental/pdf-viewer";

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
