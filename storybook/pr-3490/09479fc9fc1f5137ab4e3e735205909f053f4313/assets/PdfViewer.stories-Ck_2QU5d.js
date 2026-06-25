import{R as i,O as M,j as y,M as v}from"./iframe-Cwa4OV2p.js";import{P as D}from"./pdf-viewer-C5Ba11Xm.js";import{E as K}from"./Employee-BAk2o20h.js";import{m as P,d as E}from"./makeExternalStore-qJgrB_IM.js";import"./preload-helper-CCq-bIdu.js";import"./PdfRenderer-CCnypLZv.js";import"./index-BEvgsLyB.js";import"./PdfViewer-BNq1yQHa.js";import"./PdfViewer.module.css-CrX9k7EQ.js";import"./PdfViewerAnnotationLayer-pHXxN0Xr.js";import"./constants-DsXMS3N3.js";import"./usePdfDocument-DVVvE28q.js";import"./PdfViewerOutlineSidebar-B-nQpUM-.js";import"./PdfViewerSidebarHeader-CoYsAjhU.js";import"./useBaseUiId-DMqO1SgA.js";import"./useControlled-BN_Kaq39.js";import"./CompositeRoot-O7FsTd3M.js";import"./CompositeItem-BWKAEQuh.js";import"./ToolbarRootContext-7us1qpDr.js";import"./composite-DeA0pGnE.js";import"./svgIconContainer-Cu3N0QL9.js";import"./PdfViewerSearchBar-B0tkVYj2.js";import"./chevron-up-DLLehnAb.js";import"./chevron-down-q-9Gl2Vu.js";import"./cross-Czbv8y8T.js";import"./PdfViewerSidebar-DN_s3_xP.js";import"./index-BrHN71JD.js";import"./index-Cm6cItz_.js";import"./index-JfSSgdbO.js";import"./PdfViewerToolbar-U82A3WeN.js";import"./Button-BdFbfm_2.js";import"./chevron-right-BtISeNoC.js";import"./Input-CjfPVenj.js";import"./minus-BrvIrOBK.js";import"./spin-BX9r85yt.js";import"./error-fw63jDoE.js";import"./withOsdkMetrics-lyAfb3NY.js";function L(...t){const{observableClient:m}=i.useContext(M),n="$objectType"in t[0],o=!n&&t[2]!=null&&typeof t[2]=="object"?t[2]:void 0,p=n?typeof t[1]=="boolean"?t[1]:!0:o?o.enabled??!0:typeof t[2]=="boolean"?t[2]:!0,f=o==null?void 0:o.$select,d=o==null?void 0:o.$loadPropertySecurityMetadata,b=o==null?void 0:o.$includeAllBaseObjectProperties,O=n?"offline":void 0,s=n?t[0].$objectType:t[0],c=n?t[0].$primaryKey:t[1],l=typeof s=="string"?s:s.apiName,u=i.useMemo(()=>f,[JSON.stringify(f)]),{subscribe:h,getSnapShot:w}=i.useMemo(()=>p?P(r=>m.observeObject(s,c,{mode:O,$includeAllBaseObjectProperties:b,...u?{select:u}:{},...d?{$loadPropertySecurityMetadata:d}:{}},r),E({hookType:"useOsdkObject",objectType:l,primaryKey:String(c)})):P(()=>({unsubscribe:()=>{}}),E({hookType:"useOsdkObject",objectType:l,primaryKey:String(c)})),[p,m,s,l,c,O,u,d,b]),e=i.useSyncExternalStore(h,w),j=i.useCallback(()=>{throw new Error("not implemented")},[]);return i.useMemo(()=>{let r;return e&&"error"in e&&e.error?r=e.error:(e==null?void 0:e.status)==="error"&&(r=new Error("Failed to load object")),{object:e==null?void 0:e.object,isLoading:p&&r==null?(e==null?void 0:e.status)==="loading"||(e==null?void 0:e.status)==="init"||!e:!1,isOptimistic:!!(e!=null&&e.isOptimistic),error:r,forceUpdate:j}},[e,p,j])}const ye={title:"Components/DocumentViewer/Renderers/PdfViewer",component:D,tags:["beta"],parameters:{controls:{expanded:!0}}},a={render:()=>{const{object:t,isLoading:m}=L(K,v);return m||!(t!=null&&t.employeeDocuments)?y.jsx("div",{style:{height:"600px"},children:"Loading OSDK media…"}):y.jsx("div",{style:{height:"600px"},children:y.jsx(D,{media:t.employeeDocuments})})},parameters:{docs:{source:{code:`import { PdfViewer } from "@osdk/react-components/experimental/pdf-viewer";

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
