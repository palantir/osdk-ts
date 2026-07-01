import{R as i,O as M,j as y,M as v}from"./iframe-Cl8eJGqQ.js";import{P as D}from"./pdf-viewer-dwowSgqc.js";import{E as K}from"./Employee-BAk2o20h.js";import{m as P,d as E}from"./makeExternalStore-CF-LNVVA.js";import"./preload-helper-D1sGFP9D.js";import"./PdfRenderer-DXQebqmC.js";import"./index-DN50PQh-.js";import"./PdfViewer-DPG_fSwT.js";import"./PdfViewer.module.css-CgqM05-b.js";import"./PdfViewerAnnotationLayer-AXti9Ihh.js";import"./constants-DsXMS3N3.js";import"./usePdfDocument-CV4Y7A7K.js";import"./PdfViewerOutlineSidebar-ByjUDDpW.js";import"./PdfViewerSidebarHeader-B14b8Pyt.js";import"./useBaseUiId-BNd5VFWN.js";import"./useControlled-morME-0h.js";import"./CompositeRoot-l9LZWYpi.js";import"./CompositeItem-DGV1adBP.js";import"./ToolbarRootContext-BgUoIskF.js";import"./composite-sB4cBqnX.js";import"./svgIconContainer-CHD9Zlbf.js";import"./PdfViewerSearchBar-Dj6jD9yX.js";import"./chevron-up-CV_NrDxy.js";import"./chevron-down-DdkVAd_U.js";import"./cross-CCvLdnS1.js";import"./PdfViewerSidebar-Ngk5bGtU.js";import"./index-DM-Qy-J0.js";import"./index-CHnn2mMS.js";import"./index-BRo-G0NH.js";import"./PdfViewerToolbar-C03AXFeh.js";import"./Button-B_F0tOoM.js";import"./chevron-right-C704N_T7.js";import"./Input-Cjk_GJyv.js";import"./minus-oiDwDlbL.js";import"./search-DE_gr0Gd.js";import"./spin-BmQwUwI8.js";import"./error-DBlAgSRV.js";import"./withOsdkMetrics-TyrIMJ16.js";function L(...t){const{observableClient:m}=i.useContext(M),n="$objectType"in t[0],o=!n&&t[2]!=null&&typeof t[2]=="object"?t[2]:void 0,p=n?typeof t[1]=="boolean"?t[1]:!0:o?o.enabled??!0:typeof t[2]=="boolean"?t[2]:!0,f=o==null?void 0:o.$select,d=o==null?void 0:o.$loadPropertySecurityMetadata,b=o==null?void 0:o.$includeAllBaseObjectProperties,O=n?"offline":void 0,s=n?t[0].$objectType:t[0],c=n?t[0].$primaryKey:t[1],l=typeof s=="string"?s:s.apiName,u=i.useMemo(()=>f,[JSON.stringify(f)]),{subscribe:h,getSnapShot:w}=i.useMemo(()=>p?P(r=>m.observeObject(s,c,{mode:O,$includeAllBaseObjectProperties:b,...u?{select:u}:{},...d?{$loadPropertySecurityMetadata:d}:{}},r),E({hookType:"useOsdkObject",objectType:l,primaryKey:String(c)})):P(()=>({unsubscribe:()=>{}}),E({hookType:"useOsdkObject",objectType:l,primaryKey:String(c)})),[p,m,s,l,c,O,u,d,b]),e=i.useSyncExternalStore(h,w),j=i.useCallback(()=>{throw new Error("not implemented")},[]);return i.useMemo(()=>{let r;return e&&"error"in e&&e.error?r=e.error:(e==null?void 0:e.status)==="error"&&(r=new Error("Failed to load object")),{object:e==null?void 0:e.object,isLoading:p&&r==null?(e==null?void 0:e.status)==="loading"||(e==null?void 0:e.status)==="init"||!e:!1,isOptimistic:!!(e!=null&&e.isOptimistic),error:r,forceUpdate:j}},[e,p,j])}const fe={title:"Components/DocumentViewer/Renderers/PdfViewer",component:D,tags:["beta"],parameters:{controls:{expanded:!0}}},a={render:()=>{const{object:t,isLoading:m}=L(K,v);return m||!(t!=null&&t.employeeDocuments)?y.jsx("div",{style:{height:"600px"},children:"Loading OSDK media…"}):y.jsx("div",{style:{height:"600px"},children:y.jsx(D,{media:t.employeeDocuments})})},parameters:{docs:{source:{code:`import { PdfViewer } from "@osdk/react-components/experimental/pdf-viewer";

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
