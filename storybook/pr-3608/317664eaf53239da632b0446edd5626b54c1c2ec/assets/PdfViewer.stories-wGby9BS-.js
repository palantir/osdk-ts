import{R as i,O as M,j as y,M as v}from"./iframe-C8FlscN3.js";import{P as D}from"./pdf-viewer-Bd99G3He.js";import{E as K}from"./Employee-BAk2o20h.js";import{m as P,d as E}from"./makeExternalStore-Da98X94b.js";import"./preload-helper-AjrhGxn2.js";import"./PdfRenderer-CKXCfrQH.js";import"./index-D1M1f0NA.js";import"./PdfViewer-B8zAQiW9.js";import"./PdfViewer.module.css-G2CXOs5K.js";import"./PdfViewerAnnotationLayer-BMYi3FAZ.js";import"./constants-DsXMS3N3.js";import"./usePdfDocument-DwKB_iPQ.js";import"./PdfViewerOutlineSidebar-DeuCfbZS.js";import"./PdfViewerSidebarHeader-D6r_fNOy.js";import"./useBaseUiId-CoJqg4jJ.js";import"./useControlled-DvhhfNTI.js";import"./CompositeRoot-SsGxJZQ9.js";import"./CompositeItem-BdWwpp5U.js";import"./ToolbarRootContext-DbrY3OHQ.js";import"./composite-DqI9PGDZ.js";import"./svgIconContainer-_jt-7dFm.js";import"./PdfViewerSearchBar-DkhjuLEL.js";import"./chevron-up-DNh0cRnR.js";import"./chevron-down-B9FRkYpS.js";import"./cross-C1qizlEg.js";import"./PdfViewerSidebar-4o9JnVPt.js";import"./index-BAyuz10r.js";import"./index-D1Fzsegy.js";import"./index-Bgw8c57h.js";import"./PdfViewerToolbar-cyq9jI0e.js";import"./Button-tMKbD7-C.js";import"./chevron-right-Ba-S3-7c.js";import"./Input-BjJhxMvH.js";import"./minus-Dm90foAo.js";import"./search-CSvH33j2.js";import"./spin-B6Te1Hm9.js";import"./error-KKZt0rwh.js";import"./withOsdkMetrics-wrPqJq6J.js";function L(...t){const{observableClient:m}=i.useContext(M),n="$objectType"in t[0],o=!n&&t[2]!=null&&typeof t[2]=="object"?t[2]:void 0,p=n?typeof t[1]=="boolean"?t[1]:!0:o?o.enabled??!0:typeof t[2]=="boolean"?t[2]:!0,f=o==null?void 0:o.$select,d=o==null?void 0:o.$loadPropertySecurityMetadata,b=o==null?void 0:o.$includeAllBaseObjectProperties,O=n?"offline":void 0,s=n?t[0].$objectType:t[0],c=n?t[0].$primaryKey:t[1],l=typeof s=="string"?s:s.apiName,u=i.useMemo(()=>f,[JSON.stringify(f)]),{subscribe:h,getSnapShot:w}=i.useMemo(()=>p?P(r=>m.observeObject(s,c,{mode:O,$includeAllBaseObjectProperties:b,...u?{select:u}:{},...d?{$loadPropertySecurityMetadata:d}:{}},r),E({hookType:"useOsdkObject",objectType:l,primaryKey:String(c)})):P(()=>({unsubscribe:()=>{}}),E({hookType:"useOsdkObject",objectType:l,primaryKey:String(c)})),[p,m,s,l,c,O,u,d,b]),e=i.useSyncExternalStore(h,w),j=i.useCallback(()=>{throw new Error("not implemented")},[]);return i.useMemo(()=>{let r;return e&&"error"in e&&e.error?r=e.error:(e==null?void 0:e.status)==="error"&&(r=new Error("Failed to load object")),{object:e==null?void 0:e.object,isLoading:p&&r==null?(e==null?void 0:e.status)==="loading"||(e==null?void 0:e.status)==="init"||!e:!1,isOptimistic:!!(e!=null&&e.isOptimistic),error:r,forceUpdate:j}},[e,p,j])}const fe={title:"Components/DocumentViewer/Renderers/PdfViewer",component:D,tags:["beta"],parameters:{controls:{expanded:!0}}},a={render:()=>{const{object:t,isLoading:m}=L(K,v);return m||!(t!=null&&t.employeeDocuments)?y.jsx("div",{style:{height:"600px"},children:"Loading OSDK media…"}):y.jsx("div",{style:{height:"600px"},children:y.jsx(D,{media:t.employeeDocuments})})},parameters:{docs:{source:{code:`import { PdfViewer } from "@osdk/react-components/experimental/pdf-viewer";

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
